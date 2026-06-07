"""Sensor platform for EcoFlow IoT, including the MQTT connection status."""

from __future__ import annotations

from datetime import datetime, timezone
from typing import Any

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
)
from homeassistant.const import EntityCategory, Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from . import EcoFlowConfigEntry
from .coordinator import EcoFlowCoordinator
from .devices.base import EcoFlowSensorEntityDescription
from .entity import EcoFlowEntity
from .models import ConnectionState

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
        for description in device.entity_descriptions(_PLATFORM):
            entities.append(EcoFlowSensor(coordinator, sn, description))
    async_add_entities(entities)


class EcoFlowSensor(EcoFlowEntity, SensorEntity):
    """A measured value reported by an EcoFlow device."""

    entity_description: EcoFlowSensorEntityDescription

    @property
    def native_value(self) -> Any:
        """Return the current sensor value."""
        return self._raw_value()


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
