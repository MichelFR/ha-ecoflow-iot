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
from homeassistant.core import callback
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
    CONF_MQTT_STALE_SECONDS,
    CONF_POLL_INTERVAL,
    CONF_REGION,
    CONF_SECRET_KEY,
    DEFAULT_ENABLE_MQTT,
    DEFAULT_MQTT_STALE_SECONDS,
    DEFAULT_POLL_INTERVAL,
    DEFAULT_REGION,
    DOMAIN,
    REGION_EU,
    REGION_GLOBAL,
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
        """Manage poll interval, MQTT staleness and MQTT enablement."""
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

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
            }
        )
        return self.async_show_form(step_id="init", data_schema=schema)
