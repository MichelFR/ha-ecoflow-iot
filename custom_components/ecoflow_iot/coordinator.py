"""Data coordinator: MQTT-first with HTTP polling fallback.

Live data arrives via MQTT and is pushed to entities immediately. The periodic
``DataUpdateCoordinator`` tick only hits the cloud REST API when MQTT is
disconnected or has gone stale, and to refresh any HTTP-only fields. Control
commands are published over MQTT (awaiting the device's ``set_reply``) and fall
back to an HTTP ``PUT`` if MQTT is unavailable or unacknowledged.
"""

from __future__ import annotations

import logging
import time
from datetime import timedelta
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import issue_registry as ir
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .api import EcoFlowError, EcoFlowHttpClient, EcoFlowMqttClient
from .const import (
    DEFAULT_MQTT_STALE_SECONDS,
    DEFAULT_POLL_INTERVAL,
    DOMAIN,
    SET_ACK_TIMEOUT,
    SN_PREFIX_LEN,
)
from .devices import EcoFlowDevice, resolve_device
from .models import Certification, ConnectionState, DataSource, DeviceState

_LOGGER = logging.getLogger(__name__)


class EcoFlowCoordinator(DataUpdateCoordinator[dict[str, DeviceState]]):
    """Coordinates one EcoFlow developer account's devices."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        http: EcoFlowHttpClient,
        *,
        poll_interval: int = DEFAULT_POLL_INTERVAL,
        stale_seconds: int = DEFAULT_MQTT_STALE_SECONDS,
        enable_mqtt: bool = True,
    ) -> None:
        """Initialise the coordinator (call :meth:`async_setup` next)."""
        super().__init__(
            hass,
            _LOGGER,
            name="EcoFlow IoT",
            update_interval=timedelta(seconds=poll_interval),
            config_entry=entry,
        )
        self._http = http
        self._stale_seconds = stale_seconds
        self._enable_mqtt = enable_mqtt
        self._mqtt: EcoFlowMqttClient | None = None
        self._cert: Certification | None = None
        self.devices: dict[str, EcoFlowDevice] = {}
        # Serials that expose at least one http_only entity (refreshed over HTTP
        # on the poll interval even while MQTT is connected).
        self._http_only_sns: set[str] = set()
        self.data = {}

    @property
    def connection_state(self) -> ConnectionState:
        """Return the MQTT connection state."""
        if self._mqtt is None:
            return ConnectionState.DISCONNECTED
        return self._mqtt.state

    @property
    def broker(self) -> str | None:
        """Return the MQTT broker endpoint, if known."""
        return self._mqtt.broker if self._mqtt else None

    @callback
    def _notify_unsupported(self, sn: str) -> None:
        """Raise a repair issue for an unsupported device (prefix only)."""
        prefix = sn[:SN_PREFIX_LEN]
        _LOGGER.warning("Unsupported EcoFlow device with serial prefix %s", prefix)
        ir.async_create_issue(
            self.hass,
            DOMAIN,
            f"unsupported_device_{prefix}",
            is_fixable=False,
            severity=ir.IssueSeverity.WARNING,
            translation_key="unsupported_device",
            translation_placeholders={"prefix": prefix},
        )

    async def async_setup(self) -> None:
        """Discover devices, seed data over HTTP and start MQTT."""
        try:
            listed = await self._http.device_list()
        except EcoFlowError as err:
            raise UpdateFailed(f"device list failed: {err}") from err

        states: dict[str, DeviceState] = {}
        for item in listed:
            sn = item.get("sn")
            if not sn:
                continue
            state = DeviceState(sn=sn, online=bool(item.get("online", 1)))
            try:
                state.quota = await self._http.get_all_quota(sn)
                state.data_source = DataSource.HTTP
            except EcoFlowError as err:
                _LOGGER.warning("Initial quota fetch failed for %s: %s", sn, err)
            device = resolve_device(sn, state.quota)
            if device is None:
                self._notify_unsupported(sn)
                continue
            self.devices[sn] = device
            states[sn] = state

        self.data = states
        self._http_only_sns = {
            sn for sn, dev in self.devices.items() if dev.has_http_only_entities()
        }
        if not self.devices:
            raise UpdateFailed("no supported EcoFlow devices found")

        if self._enable_mqtt:
            await self._async_start_mqtt()

    async def _async_start_mqtt(self) -> None:
        """Fetch certification and connect the MQTT client."""
        try:
            cert_data = await self._http.get_certification()
        except EcoFlowError as err:
            _LOGGER.warning("MQTT certification failed, HTTP-only mode: %s", err)
            return
        self._cert = Certification.from_response(cert_data)
        self._mqtt = EcoFlowMqttClient(
            self.hass,
            self._cert,
            list(self.devices),
            on_quota=self._handle_quota,
            on_status=self._handle_status,
            on_state_change=self._handle_state_change,
            on_auth_failure=self._async_refresh_certification,
            client_suffix=self.config_entry.entry_id,
        )
        await self._mqtt.async_connect()

    async def _async_refresh_certification(self) -> None:
        """Re-fetch broker credentials after an auth failure and reconnect."""
        if self._mqtt is None:
            return
        try:
            cert_data = await self._http.get_certification()
        except EcoFlowError as err:
            _LOGGER.warning("Certification refresh failed: %s", err)
            return
        self._cert = Certification.from_response(cert_data)
        await self._mqtt.async_disconnect()
        self._mqtt.update_certification(self._cert)
        await self._mqtt.async_connect()

    async def async_shutdown(self) -> None:
        """Disconnect MQTT on unload."""
        if self._mqtt is not None:
            await self._mqtt.async_disconnect()
        await super().async_shutdown()

    async def _async_update_data(self) -> dict[str, DeviceState]:
        """Periodic tick: poll HTTP only when MQTT cannot supply fresh data."""
        if self._should_poll_http():
            for sn in self.devices:
                try:
                    quota = await self._http.get_all_quota(sn)
                except EcoFlowError as err:
                    _LOGGER.debug("HTTP poll failed for %s: %s", sn, err)
                    continue
                state = self.data.get(sn)
                if state is not None:
                    state.merge_quota(quota, DataSource.HTTP)
        else:
            await self._async_refresh_http_only()
        return self.data

    async def _async_refresh_http_only(self) -> None:
        """While MQTT is the live source, refresh HTTP-only values on each tick.

        Runs only for devices that expose an ``http_only`` entity, so the
        cadence is the configured poll interval. The snapshot is merged without
        touching ``data_source``/``last_mqtt_ts`` so MQTT remains the reported
        live source.
        """
        for sn in self._http_only_sns:
            try:
                quota = await self._http.get_all_quota(sn)
            except EcoFlowError as err:
                _LOGGER.debug("HTTP-only refresh failed for %s: %s", sn, err)
                continue
            state = self.data.get(sn)
            if state is not None:
                state.quota.update(quota)

    def _should_poll_http(self) -> bool:
        """Decide whether this tick needs an HTTP refresh."""
        if self._mqtt is None or not self._mqtt.connected:
            return True
        newest = max(
            (s.last_mqtt_ts for s in self.data.values() if s.last_mqtt_ts),
            default=None,
        )
        if newest is None:
            return True
        return (time.time() - newest) > self._stale_seconds

    # ---- MQTT callbacks (run on the event loop) ----

    @callback
    def _handle_quota(self, sn: str, values: dict[str, Any]) -> None:
        state = self.data.get(sn)
        if state is None:
            return
        state.merge_quota(values, DataSource.MQTT)
        state.last_mqtt_ts = time.time()
        self.async_set_updated_data(self.data)

    @callback
    def _handle_status(self, sn: str, online: bool) -> None:
        state = self.data.get(sn)
        if state is None:
            return
        state.online = online
        self.async_set_updated_data(self.data)

    @callback
    def _handle_state_change(self, _state: ConnectionState) -> None:
        # Refresh entities (e.g. the connection-status sensor and availability).
        self.async_update_listeners()

    # ---- control ----

    async def async_send_command(self, sn: str, params: dict[str, Any]) -> None:
        """Send a control command, MQTT-first with HTTP fallback.

        ``params`` is the device-specific config payload (e.g. ``{"cfgRelay2Onoff": True}``).
        Raises :class:`HomeAssistantError`-compatible exceptions on total failure.
        """
        device = self.devices[sn]
        envelope = device.build_command(params)

        if self._mqtt is not None and self._mqtt.connected:
            payload = {
                **envelope,
                "id": int(time.time() * 1000),
                "version": "1.0",
                "sn": sn,
            }
            try:
                if await self._mqtt.async_publish_set(sn, payload, SET_ACK_TIMEOUT):
                    await self.async_request_refresh()
                    return
                _LOGGER.debug("MQTT set unacknowledged for %s, falling back", sn)
            except (RuntimeError, OSError) as err:
                _LOGGER.debug("MQTT publish failed for %s: %s", sn, err)

        # HTTP fallback.
        try:
            await self._http.set_quota(sn, envelope)
        except EcoFlowError as err:
            raise HomeAssistantError(f"EcoFlow command failed for {sn}: {err}") from err
        await self.async_request_refresh()
