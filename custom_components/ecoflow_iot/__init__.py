"""The EcoFlow IoT integration."""

from __future__ import annotations

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ConfigEntryAuthFailed, ConfigEntryNotReady
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.update_coordinator import UpdateFailed

from .api import EcoFlowAuthError, EcoFlowHttpClient
from .const import (
    CONF_ACCESS_KEY,
    CONF_ENABLE_MQTT,
    CONF_POLL_INTERVAL,
    CONF_MQTT_STALE_SECONDS,
    CONF_REGION,
    CONF_SECRET_KEY,
    DEFAULT_ENABLE_MQTT,
    DEFAULT_MQTT_STALE_SECONDS,
    DEFAULT_POLL_INTERVAL,
    DEFAULT_REGION,
)
from .coordinator import EcoFlowCoordinator

PLATFORMS: list[Platform] = [
    Platform.BINARY_SENSOR,
    Platform.NUMBER,
    Platform.SELECT,
    Platform.SENSOR,
    Platform.SWITCH,
]

type EcoFlowConfigEntry = ConfigEntry[EcoFlowCoordinator]


async def async_setup_entry(hass: HomeAssistant, entry: EcoFlowConfigEntry) -> bool:
    """Set up EcoFlow IoT from a config entry."""
    session = async_get_clientsession(hass)
    http = EcoFlowHttpClient(
        session,
        entry.data.get(CONF_REGION, DEFAULT_REGION),
        entry.data[CONF_ACCESS_KEY],
        entry.data[CONF_SECRET_KEY],
    )

    options = entry.options
    coordinator = EcoFlowCoordinator(
        hass,
        entry,
        http,
        poll_interval=options.get(CONF_POLL_INTERVAL, DEFAULT_POLL_INTERVAL),
        stale_seconds=options.get(CONF_MQTT_STALE_SECONDS, DEFAULT_MQTT_STALE_SECONDS),
        enable_mqtt=options.get(CONF_ENABLE_MQTT, DEFAULT_ENABLE_MQTT),
    )

    try:
        await coordinator.async_setup()
    except EcoFlowAuthError as err:
        raise ConfigEntryAuthFailed(str(err)) from err
    except UpdateFailed as err:
        raise ConfigEntryNotReady(str(err)) from err

    entry.runtime_data = coordinator
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    entry.async_on_unload(entry.add_update_listener(_async_reload_entry))
    return True


async def async_unload_entry(hass: HomeAssistant, entry: EcoFlowConfigEntry) -> bool:
    """Unload a config entry."""
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unloaded:
        await entry.runtime_data.async_shutdown()
    return unloaded


async def _async_reload_entry(hass: HomeAssistant, entry: EcoFlowConfigEntry) -> None:
    """Reload the entry when options change."""
    await hass.config_entries.async_reload(entry.entry_id)
