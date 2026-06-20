"""Light platform for EcoFlow IoT.

Exposes brightness-controllable indicators (e.g. the Stream's LED) as a light.
The device stores brightness as a percentage (0-100) where 0 means off, so
turning the light off simply writes 0% and the on/off state is derived from the
current percentage.
"""

from __future__ import annotations

from typing import Any

from homeassistant.components.light import (
    ATTR_BRIGHTNESS,
    ColorMode,
    LightEntity,
)
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from . import EcoFlowConfigEntry
from .devices.base import EcoFlowLightEntityDescription
from .entity import EcoFlowEntity

_PLATFORM = Platform.LIGHT


async def async_setup_entry(
    hass: HomeAssistant,
    entry: EcoFlowConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up EcoFlow lights from a config entry."""
    coordinator = entry.runtime_data
    entities: list[LightEntity] = []
    for sn, device in coordinator.devices.items():
        for description in device.entity_descriptions(_PLATFORM):
            entities.append(EcoFlowLight(coordinator, sn, description))
    async_add_entities(entities)


def _pct_to_ha(pct: int) -> int:
    """Device percentage (0-100) -> HA brightness (0-255)."""
    return round(pct * 255 / 100)


def _ha_to_pct(brightness: int) -> int:
    """HA brightness (0-255) -> device percentage (0-100)."""
    return round(brightness * 100 / 255)


class EcoFlowLight(EcoFlowEntity, LightEntity):
    """A brightness-controllable light backed by a 0-100% quota field."""

    entity_description: EcoFlowLightEntityDescription
    _attr_color_mode = ColorMode.BRIGHTNESS
    _attr_supported_color_modes = {ColorMode.BRIGHTNESS}

    @property
    def _pct(self) -> int | None:
        """Current device brightness percentage (0-100), or None if unknown."""
        value = self._raw_value()
        return None if value is None else int(value)

    @property
    def is_on(self) -> bool | None:
        """On while brightness is above zero."""
        pct = self._pct
        return None if pct is None else pct > 0

    @property
    def brightness(self) -> int | None:
        """Current brightness on Home Assistant's 0-255 scale."""
        pct = self._pct
        return None if pct is None else _pct_to_ha(pct)

    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn on, optionally at a given brightness (else full / keep current)."""
        if ATTR_BRIGHTNESS in kwargs:
            # Clamp to at least 1% so a low slider value still means "on".
            pct = max(1, min(100, _ha_to_pct(kwargs[ATTR_BRIGHTNESS])))
        else:
            current = self._pct or 0
            pct = current if current > 0 else 100
        await self._set_pct(pct)

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn off by writing 0% brightness."""
        await self._set_pct(0)

    async def _set_pct(self, pct: int) -> None:
        params = self.entity_description.command_fn(pct, self._quota)
        await self.coordinator.async_send_command(self._sn, params)
