"""Diagnostics support for EcoFlow IoT."""

from __future__ import annotations

from typing import Any

from homeassistant.components.diagnostics import async_redact_data
from homeassistant.core import HomeAssistant

from . import EcoFlowConfigEntry
from .const import CONF_ACCESS_KEY, CONF_SECRET_KEY

TO_REDACT = {CONF_ACCESS_KEY, CONF_SECRET_KEY, "sn", "serial_number"}


async def async_get_config_entry_diagnostics(
    hass: HomeAssistant, entry: EcoFlowConfigEntry
) -> dict[str, Any]:
    """Return redacted diagnostics for a config entry."""
    coordinator = entry.runtime_data
    devices = {
        sn: {
            "model": device.model_name,
            "online": coordinator.data[sn].online,
            "data_source": coordinator.data[sn].data_source.value,
            "quota": coordinator.data[sn].quota,
        }
        for sn, device in coordinator.devices.items()
    }
    return async_redact_data(
        {
            "options": dict(entry.options),
            "connection_state": coordinator.connection_state.value,
            "broker": coordinator.broker,
            "devices": devices,
        },
        TO_REDACT,
    )
