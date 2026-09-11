"""Sensor platform for EcoFlow IoT, including the MQTT connection status."""

from __future__ import annotations

from datetime import datetime, timedelta, timezone
from typing import Any

from homeassistant.components.sensor import (
    RestoreSensor,
    SensorDeviceClass,
    SensorEntity,
)
from homeassistant.const import EntityCategory, Platform
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.util import dt as dt_util

from . import EcoFlowConfigEntry
from .const import (
    DATA_RESET_ENERGY_IDS,
    DOMAIN,
    INTEGRAL_WRITE_INTERVAL,
    INTEGRAL_WRITE_THRESHOLD_WH,
)
from .coordinator import EcoFlowCoordinator
from .devices.base import (
    EcoFlowIntegralSensorEntityDescription,
    EcoFlowSensorEntityDescription,
    GridRole,
)
from .entity import EcoFlowEntity
from .models import ConnectionState, DataSource

_PLATFORM = Platform.SENSOR
_UNSET = object()


async def async_setup_entry(
    hass: HomeAssistant,
    entry: EcoFlowConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up EcoFlow sensors from a config entry."""
    coordinator = entry.runtime_data
    entities: list[SensorEntity] = []
    for sn, device in coordinator.devices.items():
        entities.append(EcoFlowConnectionSensor(coordinator, sn))
        entities.append(EcoFlowDataSourceSensor(coordinator, sn))
        entities.append(EcoFlowLastUpdateSensor(coordinator, sn))
        for description in device.entity_descriptions(_PLATFORM):
            if isinstance(description, EcoFlowIntegralSensorEntityDescription):
                entities.append(EcoFlowIntegralSensor(coordinator, sn, description))
            else:
                entities.append(EcoFlowSensor(coordinator, sn, description))
    async_add_entities(entities)

    added: dict[str, set[str]] = {}

    @callback
    def _add_dynamic() -> None:
        new_entities: list[SensorEntity] = []
        for sn, device in coordinator.devices.items():
            state = coordinator.data.get(sn)
            if state is None:
                continue
            seen = added.setdefault(sn, set())
            for description in device.dynamic_entity_descriptions(_PLATFORM, state.quota):
                if description.key in seen:
                    continue
                seen.add(description.key)
                if isinstance(description, EcoFlowIntegralSensorEntityDescription):
                    new_entities.append(EcoFlowIntegralSensor(coordinator, sn, description))
                else:
                    new_entities.append(EcoFlowSensor(coordinator, sn, description))
        if new_entities:
            async_add_entities(new_entities)

    _add_dynamic()
    entry.async_on_unload(coordinator.async_add_listener(_add_dynamic))


class EcoFlowSensor(EcoFlowEntity, SensorEntity):
    """A measured value reported by an EcoFlow device."""

    entity_description: EcoFlowSensorEntityDescription

    def __init__(
        self,
        coordinator: EcoFlowCoordinator,
        sn: str,
        description: EcoFlowSensorEntityDescription,
    ) -> None:
        """Bind the sensor and start with no cached dynamic icon."""
        super().__init__(coordinator, sn, description)
        self._icon_for: Any = _UNSET
        self._icon: str | None = None

    @property
    def native_value(self) -> Any:
        """Return the current sensor value."""
        if self.entity_description.grid_role is GridRole.SIGNED:
            signed = self._signed_grid_power()
            return None if signed is None else round(signed, 2)
        return self._raw_value()

    @property
    def icon(self) -> str | None:
        """Dynamic icon (e.g. stepped charging battery), else static/auto icon.

        The dynamic icon is only re-evaluated when the sensor's value changes,
        so a flag that flickers between pushes (e.g. charging around 0 W) does
        not produce attribute-only state changes for the recorder.
        """
        icon_fn = self.entity_description.icon_fn
        if icon_fn is None:
            return self.entity_description.icon
        value = self.native_value
        if value != self._icon_for:
            self._icon_for = value
            self._icon = icon_fn(self._quota)
        return self._icon if self._icon is not None else self.entity_description.icon


class EcoFlowIntegralSensor(EcoFlowEntity, RestoreSensor):
    """Energy (Wh) accumulated by integrating an instantaneous power (W).

    Stream-family devices report grid/solar *power* but no cumulative *energy*,
    so this entity integrates that power on every coordinator update
    (trapezoidal rule) into a monotonically increasing Wh total suitable for the
    Home Assistant Energy Dashboard. The total is restored across restarts so
    statistics stay continuous, and the integration pauses (rather than bridges)
    whenever the source value is unavailable or the device goes offline.
    """

    entity_description: EcoFlowIntegralSensorEntityDescription

    def __init__(
        self,
        coordinator: EcoFlowCoordinator,
        sn: str,
        description: EcoFlowIntegralSensorEntityDescription,
    ) -> None:
        """Initialise the running total and last-sample tracking."""
        super().__init__(coordinator, sn, description)
        self._energy_wh: float = 0.0
        self._last_power: float | None = None
        self._last_ts: datetime | None = None
        self._written_wh: float | None = None
        self._written_ts: datetime | None = None

    async def async_added_to_hass(self) -> None:
        """Restore the accumulated total and seed the first sample."""
        await super().async_added_to_hass()
        if self._consume_reset_request():
            # A reset was queued from the options flow: start fresh at zero
            # instead of restoring the (possibly wrong-direction) old total.
            self._energy_wh = 0.0
        else:
            last = await self.async_get_last_sensor_data()
            if last is not None and last.native_value is not None:
                try:
                    self._energy_wh = float(last.native_value)
                except (TypeError, ValueError):
                    self._energy_wh = 0.0
        # Record the current sample as the integration start without
        # back-dating energy across the restart gap.
        self._accumulate(write=False)

    def _consume_reset_request(self) -> bool:
        """Return True (once) if a one-shot reset was queued for this entity."""
        entry_id = self.coordinator.config_entry.entry_id
        store = self.hass.data.get(DOMAIN, {}).get(entry_id, {})
        ids = store.get(DATA_RESET_ENERGY_IDS)
        if ids and self.unique_id in ids:
            ids.discard(self.unique_id)
            if not ids:
                store.pop(DATA_RESET_ENERGY_IDS, None)
            return True
        return False

    @property
    def native_value(self) -> float:
        """Return the accumulated energy in Wh."""
        return round(self._energy_wh, 3)

    @callback
    def _handle_coordinator_update(self) -> None:
        """Integrate the latest power sample, then write state."""
        pushed = self.coordinator.pushed_sn
        if pushed is not None and pushed != self._sn:
            return
        self._accumulate(write=True)

    def _current_power(self) -> float | None:
        """Instantaneous power to integrate, or None to pause integration."""
        state = self._state
        if state is None or not state.online:
            return None
        role = self.entity_description.grid_role
        if role is GridRole.IMPORT or role is GridRole.EXPORT:
            signed = self._signed_grid_power()
            return None if signed is None else role.leg_power(signed)
        return self.entity_description.power_fn(self._quota)

    def _accumulate(self, *, write: bool) -> None:
        """Add ``power * dt`` (trapezoidal) since the previous sample."""
        now = dt_util.utcnow()
        power = self._current_power()
        if (
            power is not None
            and self._last_power is not None
            and self._last_ts is not None
        ):
            dt_hours = (now - self._last_ts).total_seconds() / 3600.0
            if dt_hours > 0:
                self._energy_wh += (power + self._last_power) / 2.0 * dt_hours
        self._last_ts = now
        self._last_power = power
        if write and self._should_write(now):
            self._written_wh = self._energy_wh
            self._written_ts = now
            self.async_write_ha_state()

    def _should_write(self, now: datetime) -> bool:
        if self._written_ts is None or self._written_wh is None:
            return True
        if now - self._written_ts >= INTEGRAL_WRITE_INTERVAL:
            return True
        return self._energy_wh - self._written_wh >= INTEGRAL_WRITE_THRESHOLD_WH


class EcoFlowConnectionSensor(EcoFlowEntity, SensorEntity):
    """Reports the MQTT connection state and data source for a device.

    Always available so the user can see *why* a device is not updating.
    """

    _attr_device_class = SensorDeviceClass.ENUM
    _attr_entity_category = EntityCategory.DIAGNOSTIC
    _attr_options = [state.value for state in ConnectionState]

    def __init__(self, coordinator: EcoFlowCoordinator, sn: str) -> None:
        """Initialise the connection-status sensor."""
        description = EcoFlowSensorEntityDescription(
            key="connection",
            translation_key="connection",
        )
        super().__init__(coordinator, sn, description)

    @property
    def available(self) -> bool:
        """Always available; it reports connectivity itself."""
        return True

    @property
    def native_value(self) -> str:
        """Return the MQTT connection state."""
        return self.coordinator.connection_state.value

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return data-source / broker diagnostics."""
        state = self._state
        return {
            "data_source": state.data_source.value if state else None,
            "broker": self.coordinator.broker,
        }


class EcoFlowLastUpdateSensor(EcoFlowEntity, SensorEntity):
    """Timestamp of the most recent MQTT push for a device."""

    _attr_device_class = SensorDeviceClass.TIMESTAMP
    _attr_entity_category = EntityCategory.DIAGNOSTIC
    _attr_entity_registry_enabled_default = False

    def __init__(self, coordinator: EcoFlowCoordinator, sn: str) -> None:
        """Initialise the last-update sensor."""
        description = EcoFlowSensorEntityDescription(
            key="last_mqtt_update",
            translation_key="last_mqtt_update",
        )
        super().__init__(coordinator, sn, description)

    @property
    def available(self) -> bool:
        """Available whenever the device has coordinator state."""
        return self._state is not None

    @property
    def native_value(self) -> datetime | None:
        """Return the time of the last MQTT push, or None before the first."""
        state = self._state
        last_ts = state.last_mqtt_ts if state else None
        if not last_ts:
            return None
        return datetime.fromtimestamp(last_ts, tz=timezone.utc)


class EcoFlowDataSourceSensor(EcoFlowEntity, SensorEntity):
    """Reports whether the latest device data came from MQTT or HTTP."""

    _attr_device_class = SensorDeviceClass.ENUM
    _attr_entity_category = EntityCategory.DIAGNOSTIC
    _attr_entity_registry_enabled_default = False
    _attr_options = [source.value for source in DataSource]

    def __init__(self, coordinator: EcoFlowCoordinator, sn: str) -> None:
        """Initialise the data-source sensor."""
        description = EcoFlowSensorEntityDescription(
            key="data_source",
            translation_key="data_source",
        )
        super().__init__(coordinator, sn, description)

    @property
    def available(self) -> bool:
        """Available whenever the device has coordinator state."""
        return self._state is not None

    @property
    def native_value(self) -> str:
        """Return the source used for the latest data snapshot."""
        state = self._state
        return (state.data_source if state else DataSource.UNKNOWN).value
