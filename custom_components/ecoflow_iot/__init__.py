"""The EcoFlow IoT integration."""

from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import EVENT_HOMEASSISTANT_STARTED, Platform
from homeassistant.core import CoreState, HomeAssistant
from homeassistant.exceptions import ConfigEntryAuthFailed, ConfigEntryNotReady
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.event import async_call_later
from homeassistant.helpers.update_coordinator import UpdateFailed
from homeassistant.loader import async_get_integration

from .api import EcoFlowAuthError, EcoFlowHttpClient
from .const import (
    CARD_ASSET_BASE,
    CARD_URL,
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
    DOMAIN,
)
from .coordinator import EcoFlowCoordinator

_LOGGER = logging.getLogger(__name__)

_STATIC_PATH_KEY = f"{DOMAIN}_card_static_registered"

PLATFORMS: list[Platform] = [
    Platform.BINARY_SENSOR,
    Platform.LIGHT,
    Platform.NUMBER,
    Platform.SELECT,
    Platform.SENSOR,
    Platform.SWITCH,
]

type EcoFlowConfigEntry = ConfigEntry[EcoFlowCoordinator]


async def async_setup_entry(hass: HomeAssistant, entry: EcoFlowConfigEntry) -> bool:
    """Set up EcoFlow IoT from a config entry."""
    await _async_register_card(hass)

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


async def _async_register_card(hass: HomeAssistant) -> None:
    """Serve the bundled Lovelace card + assets and register it as a resource."""
    if _STATIC_PATH_KEY not in hass.data:
        hass.data[_STATIC_PATH_KEY] = True
        # Serve the whole www/ folder (card JS + device images) at /ecoflow_iot.
        await hass.http.async_register_static_paths(
            [
                StaticPathConfig(
                    CARD_ASSET_BASE,
                    str(Path(__file__).parent / "www"),
                    cache_headers=False,
                )
            ]
        )

    # Adding the dashboard resource needs lovelace to be set up; defer to
    # HA start when it isn't yet.
    if hass.state is CoreState.running:
        await _async_add_resource(hass)
    else:

        async def _on_started(_event) -> None:
            await _async_add_resource(hass)

        hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STARTED, _on_started)


async def _async_add_resource(hass: HomeAssistant, retries: int = 12) -> None:
    """Create or update the Lovelace resource entry for the card."""
    lovelace = hass.data.get("lovelace")
    resources = getattr(lovelace, "resources", None)
    # Renamed from ``mode`` to ``resource_mode`` in HA 2026.2.
    mode = getattr(lovelace, "resource_mode", None) or getattr(lovelace, "mode", None)
    if resources is None or mode != "storage":
        _LOGGER.info(
            "Lovelace is not in storage mode (mode=%s); add %s as a dashboard "
            "resource manually to use the EcoFlow Energy card",
            mode,
            CARD_URL,
        )
        return

    if not resources.loaded:
        # Lovelace loads its resources lazily; retry until they are up.
        if retries <= 0:
            _LOGGER.warning(
                "Lovelace resources never loaded; add %s as a dashboard "
                "resource manually to use the EcoFlow Energy card",
                CARD_URL,
            )
            return

        async def _retry(_now) -> None:
            await _async_add_resource(hass, retries - 1)

        async_call_later(hass, 5, _retry)
        return

    try:
        # Version the URL so browsers refetch the card after upgrades.
        integration = await async_get_integration(hass, DOMAIN)
        url = f"{CARD_URL}?v={integration.version}"

        existing = next(
            (
                item
                for item in resources.async_items()
                if item.get("url", "").split("?")[0] == CARD_URL
            ),
            None,
        )
        if existing is None:
            await resources.async_create_item({"res_type": "module", "url": url})
            _LOGGER.info("Registered the EcoFlow Energy card resource %s", url)
        elif existing["url"] != url:
            await resources.async_update_item(existing["id"], {"url": url})
            _LOGGER.info("Updated the EcoFlow Energy card resource to %s", url)
    except Exception:  # noqa: BLE001 - the card is optional, never block setup
        _LOGGER.exception("Could not register the EcoFlow Energy card resource")
