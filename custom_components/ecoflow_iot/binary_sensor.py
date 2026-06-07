"""Binary sensor platform for EcoFlow IoT."""

from __future__ import annotations

from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from . import EcoFlowConfigEntry
from .devices.base import EcoFlowBinarySensorEntityDescription
from .entity import EcoFlowEntity

_PLATFORM = Platform.BINARY_SENSOR


async def async_setup_entry(
    hass: HomeAssistant,
    entry: EcoFlowConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up EcoFlow binary sensors from a config entry."""
    coordinator = entry.runtime_data
    entities: list[BinarySensorEntity] = []
    for sn, device in coordinator.devices.items():
        for description in device.entity_descriptions(_PLATFORM):
            entities.append(EcoFlowBinarySensor(coordinator, sn, description))
    async_add_entities(entities)


class EcoFlowBinarySensor(EcoFlowEntity, BinarySensorEntity):
    """A boolean state reported by an EcoFlow device."""

    entity_description: EcoFlowBinarySensorEntityDescription

    @property
    def is_on(self) -> bool | None:
        """Return the boolean state."""
        value = self._raw_value()
        return None if value is None else bool(value)
