"""Sensor platform for EcoFlow IoT, including the MQTT connection status."""

from __future__ import annotations

from datetime import datetime, timezone
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
from .const import DATA_RESET_ENERGY_IDS, DOMAIN
from .coordinator import EcoFlowCoordinator
from .devices.base import (
    EcoFlowIntegralSensorEntityDescription,
    EcoFlowSensorEntityDescription,
    GridRole,
)
from .entity import EcoFlowEntity
from .models import ConnectionState, DataSource

_PLATFORM = Platform.SENSOR


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
        for description in device.entity_descriptions(_PLATFORM):
            if isinstance(description, EcoFlowIntegralSensorEntityDescription):
                entities.append(EcoFlowIntegralSensor(coordinator, sn, description))
            else:
                entities.append(EcoFlowSensor(coordinator, sn, description))
    async_add_entities(entities)


class EcoFlowSensor(EcoFlowEntity, SensorEntity):
    """A measured value reported by an EcoFlow device."""

    entity_description: EcoFlowSensorEntityDescription

    @property
    def native_value(self) -> Any:
        """Return the current sensor value."""
        if self.entity_description.grid_role is GridRole.SIGNED:
            signed = self._signed_grid_power()
            return None if signed is None else round(signed, 2)
        return self._raw_value()

    @property
    def icon(self) -> str | None:
        """Dynamic icon (e.g. stepped charging battery), else static/auto icon."""
        icon_fn = self.entity_description.icon_fn
        if icon_fn is not None:
            dynamic = icon_fn(self._quota)
            if dynamic is not None:
                return dynamic
        return self.entity_description.icon


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
        if write:
            self.async_write_ha_state()


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
        """Return data-source / broker / freshness diagnostics."""
        state = self._state
        last_ts = state.last_mqtt_ts if state else None
        last_update = (
            datetime.fromtimestamp(last_ts, tz=timezone.utc).isoformat()
            if last_ts
            else None
        )
        return {
            "data_source": state.data_source.value if state else None,
            "broker": self.coordinator.broker,
            "last_mqtt_update": last_update,
        }


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
