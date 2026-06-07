"""Switch platform for EcoFlow IoT."""

from __future__ import annotations

from typing import Any

from homeassistant.components.switch import SwitchEntity
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from . import EcoFlowConfigEntry
from .devices.base import EcoFlowSwitchEntityDescription
from .entity import EcoFlowEntity

_PLATFORM = Platform.SWITCH


async def async_setup_entry(
    hass: HomeAssistant,
    entry: EcoFlowConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up EcoFlow switches from a config entry."""
    coordinator = entry.runtime_data
    entities: list[SwitchEntity] = []
    for sn, device in coordinator.devices.items():
        for description in device.entity_descriptions(_PLATFORM):
            entities.append(EcoFlowSwitch(coordinator, sn, description))
    async_add_entities(entities)


class EcoFlowSwitch(EcoFlowEntity, SwitchEntity):
    """A controllable on/off setting on an EcoFlow device."""

    entity_description: EcoFlowSwitchEntityDescription

    @property
    def is_on(self) -> bool | None:
        """Return whether the switch is on."""
        value = self._raw_value()
        return None if value is None else bool(value)

    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn the switch on."""
        await self._async_set(True)

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn the switch off."""
        await self._async_set(False)

    async def _async_set(self, value: bool) -> None:
        params = self.entity_description.command_fn(value, self._quota)
        await self.coordinator.async_send_command(self._sn, params)
