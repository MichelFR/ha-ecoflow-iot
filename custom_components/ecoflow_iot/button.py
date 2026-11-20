"""Button platform for EcoFlow IoT."""

from __future__ import annotations

from homeassistant.components.button import ButtonEntity
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from . import EcoFlowConfigEntry
from .devices.base import EcoFlowButtonEntityDescription
from .entity import EcoFlowEntity

_PLATFORM = Platform.BUTTON


async def async_setup_entry(
    hass: HomeAssistant,
    entry: EcoFlowConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up EcoFlow buttons from a config entry."""
    coordinator = entry.runtime_data
    entities: list[ButtonEntity] = []
    for sn, device in coordinator.devices.items():
        for description in device.entity_descriptions(_PLATFORM):
            entities.append(EcoFlowButton(coordinator, sn, description))
    async_add_entities(entities)


class EcoFlowButton(EcoFlowEntity, ButtonEntity):
    """A one-shot action on an EcoFlow device."""

    entity_description: EcoFlowButtonEntityDescription

    async def async_press(self) -> None:
        """Send the button's command."""
        params = self.entity_description.command_fn(None, self._quota)
        await self.coordinator.async_send_command(self._sn, params)
