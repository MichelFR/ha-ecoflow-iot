"""Config and options flow for the EcoFlow IoT integration."""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

import voluptuous as vol
from homeassistant.config_entries import (
    ConfigEntry,
    ConfigFlow,
    ConfigFlowResult,
    OptionsFlow,
)
from homeassistant.components.recorder import get_instance
from homeassistant.const import Platform
from homeassistant.core import callback
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.selector import (
    NumberSelector,
    NumberSelectorConfig,
    NumberSelectorMode,
    SelectOptionDict,
    SelectSelector,
    SelectSelectorConfig,
)

from .api import EcoFlowAuthError, EcoFlowConnectionError, EcoFlowError, EcoFlowHttpClient
from .const import (
    CONF_ACCESS_KEY,
    CONF_ENABLE_MQTT,
    CONF_INVERT_GRID_SIGN,
    CONF_MQTT_REFRESH_INTERVAL,
    CONF_MQTT_STALE_SECONDS,
    CONF_POLL_INTERVAL,
    CONF_REGION,
    CONF_RESET_GRID_ENERGY,
    CONF_SECRET_KEY,
    DATA_RESET_ENERGY_IDS,
    DEFAULT_ENABLE_MQTT,
    DEFAULT_INVERT_GRID_SIGN,
    DEFAULT_MQTT_REFRESH_INTERVAL,
    DEFAULT_MQTT_STALE_SECONDS,
    DEFAULT_POLL_INTERVAL,
    DEFAULT_REGION,
    DOMAIN,
    REGION_EU,
    REGION_GLOBAL,
    RESET_ENERGY_KEYS,
)

_REGION_OPTIONS = [
    SelectOptionDict(value=REGION_EU, label="Europe (api-e.ecoflow.com)"),
    SelectOptionDict(value=REGION_GLOBAL, label="Global / US (api.ecoflow.com)"),
]


async def _validate(hass: Any, region: str, access_key: str, secret_key: str) -> None:
    """Validate credentials by listing devices. Raises EcoFlow* on failure."""
    session = async_get_clientsession(hass)
    client = EcoFlowHttpClient(session, region, access_key, secret_key)
    await client.device_list()


class EcoFlowConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle the EcoFlow IoT config flow."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Collect region and API credentials."""
        errors: dict[str, str] = {}
        if user_input is not None:
            access_key = user_input[CONF_ACCESS_KEY]
            await self.async_set_unique_id(access_key)
            self._abort_if_unique_id_configured()
            errors = await self._try_validate(user_input)
            if not errors:
                return self.async_create_entry(
                    title=f"EcoFlow ({access_key[:6]}…)", data=user_input
                )

        return self.async_show_form(
            step_id="user",
            data_schema=self._schema(user_input),
            errors=errors,
        )

    async def async_step_reauth(
        self, _entry_data: Mapping[str, Any]
    ) -> ConfigFlowResult:
        """Start reauthentication."""
        return await self.async_step_reauth_confirm()

    async def async_step_reauth_confirm(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Collect new credentials for an existing entry."""
        entry = self._get_reauth_entry()
        errors: dict[str, str] = {}
        if user_input is not None:
            merged = {**entry.data, **user_input}
            errors = await self._try_validate(merged)
            if not errors:
                return self.async_update_reload_and_abort(entry, data=merged)

        return self.async_show_form(
            step_id="reauth_confirm",
            data_schema=self._schema(dict(entry.data)),
            errors=errors,
        )

    async def _try_validate(self, user_input: dict[str, Any]) -> dict[str, str]:
        """Run validation and map errors to form keys."""
        try:
            await _validate(
                self.hass,
                user_input.get(CONF_REGION, DEFAULT_REGION),
                user_input[CONF_ACCESS_KEY],
                user_input[CONF_SECRET_KEY],
            )
        except EcoFlowAuthError:
            return {"base": "invalid_auth"}
        except EcoFlowConnectionError:
            return {"base": "cannot_connect"}
        except EcoFlowError:
            return {"base": "unknown"}
        return {}

    @staticmethod
    def _schema(defaults: dict[str, Any] | None) -> vol.Schema:
        defaults = defaults or {}
        return vol.Schema(
            {
                vol.Required(
                    CONF_REGION,
                    default=defaults.get(CONF_REGION, DEFAULT_REGION),
                ): SelectSelector(
                    SelectSelectorConfig(options=_REGION_OPTIONS)
                ),
                vol.Required(
                    CONF_ACCESS_KEY, default=defaults.get(CONF_ACCESS_KEY, "")
                ): str,
                vol.Required(CONF_SECRET_KEY): str,
            }
        )

    @staticmethod
    @callback
    def async_get_options_flow(entry: ConfigEntry) -> EcoFlowOptionsFlow:
        """Return the options flow."""
        return EcoFlowOptionsFlow()


class EcoFlowOptionsFlow(OptionsFlow):
    """Handle integration options."""

    async def async_step_init(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Manage poll/MQTT options, grid sign and a one-shot energy reset."""
        if user_input is not None:
            # The reset checkbox is an action, not a stored option: consume it.
            reset = user_input.pop(CONF_RESET_GRID_ENERGY, False)
            # Predict whether saving will change options (and thus reload).
            changed = dict(self.config_entry.options) != user_input
            if reset:
                await self._reset_grid_energy()
            result = self.async_create_entry(title="", data=user_input)
            if reset and not changed:
                # Nothing else changed, so the update listener won't reload;
                # force one so the queued reset reaches the rebuilt entities.
                self.hass.async_create_task(
                    self.hass.config_entries.async_reload(self.config_entry.entry_id)
                )
            return result

        options = self.config_entry.options
        schema = vol.Schema(
            {
                vol.Required(
                    CONF_ENABLE_MQTT,
                    default=options.get(CONF_ENABLE_MQTT, DEFAULT_ENABLE_MQTT),
                ): bool,
                vol.Required(
                    CONF_POLL_INTERVAL,
                    default=options.get(CONF_POLL_INTERVAL, DEFAULT_POLL_INTERVAL),
                ): NumberSelector(
                    NumberSelectorConfig(
                        min=10, max=3600, step=5, mode=NumberSelectorMode.BOX
                    )
                ),
                vol.Required(
                    CONF_MQTT_STALE_SECONDS,
                    default=options.get(
                        CONF_MQTT_STALE_SECONDS, DEFAULT_MQTT_STALE_SECONDS
                    ),
                ): NumberSelector(
                    NumberSelectorConfig(
                        min=30, max=3600, step=5, mode=NumberSelectorMode.BOX
                    )
                ),
                vol.Required(
                    CONF_MQTT_REFRESH_INTERVAL,
                    default=options.get(
                        CONF_MQTT_REFRESH_INTERVAL, DEFAULT_MQTT_REFRESH_INTERVAL
                    ),
                ): NumberSelector(
                    NumberSelectorConfig(
                        min=0, max=600, step=5, mode=NumberSelectorMode.BOX
                    )
                ),
                vol.Required(
                    CONF_INVERT_GRID_SIGN,
                    default=options.get(
                        CONF_INVERT_GRID_SIGN, DEFAULT_INVERT_GRID_SIGN
                    ),
                ): bool,
                vol.Required(CONF_RESET_GRID_ENERGY, default=False): bool,
            }
        )
        return self.async_show_form(step_id="init", data_schema=schema)

    async def _reset_grid_energy(self) -> None:
        """One-shot reset of the grid energy sensors: zero the live counters and
        wipe their recorded history + Energy-Dashboard statistics.

        The live counters can't be zeroed in place (the options save reloads the
        entry), so the affected unique_ids are stashed in ``hass.data`` and each
        ``EcoFlowIntegralSensor`` zeroes itself instead of restoring when it is
        recreated on the reload. States/events and long-term statistics are
        deleted here via the recorder.
        """
        coordinator = getattr(self.config_entry, "runtime_data", None)
        if coordinator is None:
            return
        unique_ids: set[str] = set()
        for sn, device in coordinator.devices.items():
            keys = {d.key for d in device.entity_descriptions(Platform.SENSOR)}
            unique_ids |= {f"{sn}_{key}" for key in RESET_ENERGY_KEYS if key in keys}
        if not unique_ids:
            return

        # 1) Queue the live counters to restart at zero on the reload.
        store = self.hass.data.setdefault(DOMAIN, {}).setdefault(
            self.config_entry.entry_id, {}
        )
        store[DATA_RESET_ENERGY_IDS] = set(unique_ids)

        # 2) Wipe recorded history. statistic_id == entity_id for these sensors.
        if "recorder" not in self.hass.config.components:
            return
        registry = er.async_get(self.hass)
        entity_ids = [
            eid
            for uid in unique_ids
            if (eid := registry.async_get_entity_id(Platform.SENSOR, DOMAIN, uid))
        ]
        if not entity_ids:
            return
        # States/events (recent history graph) — purge_entities does NOT touch
        # statistics, so the Energy-Dashboard data is cleared separately below.
        if self.hass.services.has_service("recorder", "purge_entities"):
            await self.hass.services.async_call(
                "recorder",
                "purge_entities",
                {"entity_id": entity_ids, "keep_days": 0},
                blocking=False,
            )
        # Long-term + short-term statistics (what the Energy Dashboard reads).
        get_instance(self.hass).async_clear_statistics(entity_ids)
