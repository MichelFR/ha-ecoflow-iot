"""Select platform for EcoFlow IoT."""

from __future__ import annotations

from homeassistant.components.select import SelectEntity
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from . import EcoFlowConfigEntry
from .devices.base import EcoFlowSelectEntityDescription
from .entity import EcoFlowEntity

_PLATFORM = Platform.SELECT


async def async_setup_entry(
    hass: HomeAssistant,
    entry: EcoFlowConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up EcoFlow selects from a config entry."""
    coordinator = entry.runtime_data
    entities: list[SelectEntity] = []
    for sn, device in coordinator.devices.items():
        for description in device.entity_descriptions(_PLATFORM):
            entities.append(EcoFlowSelect(coordinator, sn, description))
    async_add_entities(entities)


class EcoFlowSelect(EcoFlowEntity, SelectEntity):
    """A controllable multi-option setting on an EcoFlow device."""

    entity_description: EcoFlowSelectEntityDescription

    @property
    def current_option(self) -> str | None:
        """Return the currently-selected option."""
        return self.entity_description.current_option_fn(self._quota)

    async def async_select_option(self, option: str) -> None:
        """Select a new option."""
        params = self.entity_description.command_fn(option, self._quota)
        await self.coordinator.async_send_command(self._sn, params)
