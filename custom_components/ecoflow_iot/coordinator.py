"""Data coordinator: MQTT-first with HTTP polling fallback.

Live data arrives via MQTT and is pushed to entities immediately. The periodic
``DataUpdateCoordinator`` tick only hits the cloud REST API when MQTT is
disconnected or has gone stale, when a device has gone too long without a
*full* quota snapshot (MQTT pushes are partial, so individual fields can
freeze while the device still looks fresh), and to refresh any HTTP-only
fields. A watchdog on the same tick force-reconnects the broker session when
it claims to be CONNECTED but no device has delivered data for several
cycles (a silently dead connection otherwise degrades to HTTP cadence
forever — only a reload would restore live updates). Control
commands are published over MQTT (awaiting the device's ``set_reply``) and fall
back to an HTTP ``PUT`` if MQTT is unavailable or unacknowledged.
"""

from __future__ import annotations

import asyncio
import logging
import time
from collections.abc import Callable
from datetime import timedelta
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import issue_registry as ir
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .api import EcoFlowApiError, EcoFlowError, EcoFlowHttpClient, EcoFlowMqttClient
from .const import (
    API_CODE_DEVICE_NOT_ALLOWED,
    DEFAULT_MQTT_REFRESH_INTERVAL,
    DEFAULT_MQTT_STALE_SECONDS,
    DEFAULT_POLL_INTERVAL,
    DOMAIN,
    MQTT_WATCHDOG_TICKS,
    OPERATE_LATEST_QUOTAS,
    SET_ACK_TIMEOUT,
    SN_PREFIX_LEN,
    redact_sn,
)
from .devices import EcoFlowDevice, is_silenced, resolve_device
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
        refresh_interval: int = DEFAULT_MQTT_REFRESH_INTERVAL,
        enable_mqtt: bool = True,
        insecure_tls: bool = False,
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
        self._refresh_interval = refresh_interval
        self._refresh_unsub: Callable[[], None] | None = None
        self._enable_mqtt = enable_mqtt
        self._insecure_tls = insecure_tls
        self._mqtt: EcoFlowMqttClient | None = None
        self._cert: Certification | None = None
        # MQTT silence watchdog: consecutive ticks with the connection up but
        # every device stale, and whether the current silence episode already
        # logged its reconnect at WARNING (repeats drop to DEBUG).
        self._stale_ticks = 0
        self._watchdog_warned = False
        self._restart_lock = asyncio.Lock()
        self.devices: dict[str, EcoFlowDevice] = {}
        # Devices found on the account that got no entities — either unsupported
        # or a smart plug excluded by the opt-in option. Their raw quota is kept
        # so it can be surfaced in diagnostics for future entity mapping.
        self.unmapped: dict[str, DeviceState] = {}
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
            not_served = False
            try:
                state.quota = await self._http.get_all_quota(sn)
                state.data_source = DataSource.HTTP
                state.last_full_ts = time.time()
            except EcoFlowApiError as err:
                if err.code == API_CODE_DEVICE_NOT_ALLOWED:
                    not_served = True
                    _LOGGER.info(
                        "EcoFlow device %s is not served by the open API (%s); skipping",
                        redact_sn(sn),
                        err.message,
                    )
                else:
                    _LOGGER.warning("Initial quota fetch failed for %s: %s", redact_sn(sn), err)
            except EcoFlowError as err:
                _LOGGER.warning("Initial quota fetch failed for %s: %s", redact_sn(sn), err)
            device = None if not_served else resolve_device(sn, state.quota)
            if device is None:
                # Devices the open API refuses to serve (error 1006, e.g. Delta
                # Mini / River 2) and known third-party devices (EcoFlow x Shelly)
                # are skipped silently. Genuinely unknown devices raise a repair
                # so support can be added.
                if not not_served and not is_silenced(sn):
                    self._notify_unsupported(sn)
                self.unmapped[sn] = state
                continue
            self.devices[sn] = device
            states[sn] = state

        self.data = states
        self._http_only_sns = {
            sn for sn, dev in self.devices.items() if dev.has_http_only_entities()
        }
        if not self.devices:
            if self.unmapped:
                # Everything on the account was unsupported or an excluded plug;
                # stay set up (with no entities) rather than error-looping.
                _LOGGER.info(
                    "No mappable EcoFlow devices set up; %d device(s) were "
                    "unsupported or excluded smart plugs",
                    len(self.unmapped),
                )
                return
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
            insecure_tls=self._insecure_tls,
        )
        await self._mqtt.async_connect()
        self._schedule_active_refresh()

    def _schedule_active_refresh(self) -> None:
        """Start the periodic MQTT 'latestQuotas' pull (if enabled)."""
        if self._refresh_unsub is not None or self._refresh_interval <= 0:
            return
        self._refresh_unsub = async_track_time_interval(
            self.hass,
            self._async_active_refresh,
            timedelta(seconds=self._refresh_interval),
        )

    async def _async_active_refresh(self, _now: Any = None) -> None:
        """Publish a 'latestQuotas' get for each device.

        Devices throttle their MQTT push cadence when idle, so a passive
        subscriber sees data go stale even while the connection stays up. This
        mirrors what the official app does: actively request the full latest
        snapshot. Replies arrive on the get_reply/quota topics and refresh
        ``last_mqtt_ts``, which also keeps the HTTP staleness fallback dormant.
        """
        mqtt = self._mqtt
        if mqtt is None or not mqtt.connected:
            return
        for sn in self.devices:
            # Deliberately also pull devices marked offline: the flag can be
            # stale (a missed status push would otherwise suppress the refresh
            # forever), publishing to a truly-offline device is harmless, and
            # the reply is what heals the flag via _handle_quota.
            payload = {
                "id": int(time.time() * 1000),
                "version": "1.1",
                "moduleType": 0,
                "operateType": OPERATE_LATEST_QUOTAS,
                "params": {},
                "sn": sn,
            }
            try:
                await mqtt.async_publish_get(sn, payload)
            except (RuntimeError, OSError) as err:
                _LOGGER.debug("Active MQTT refresh failed for %s: %s", redact_sn(sn), err)

    async def _async_refresh_certification(self) -> None:
        """Re-fetch broker credentials after an auth failure and reconnect."""
        await self._async_restart_mqtt(refresh_certification=True)

    async def _async_restart_mqtt(self, *, refresh_certification: bool = False) -> None:
        """Tear down and rebuild the MQTT connection.

        Single-flight: concurrent triggers (the silence watchdog, auth-failure
        refreshes stacked by paho's CONNACK retry loop) are dropped rather than
        queued — interleaved disconnect/connect pairs would orphan a second
        paho client that fights the tracked one for the same client ID.
        """
        mqtt = self._mqtt
        if mqtt is None or self._restart_lock.locked():
            return
        async with self._restart_lock:
            if refresh_certification:
                try:
                    cert_data = await self._http.get_certification()
                except EcoFlowError as err:
                    _LOGGER.warning("Certification refresh failed: %s", err)
                    return
                self._cert = Certification.from_response(cert_data)
                mqtt.update_certification(self._cert)
            await mqtt.async_disconnect()
            await mqtt.async_connect()

    async def _async_mqtt_watchdog(self, stale_sns: set[str]) -> None:
        """Force a reconnect when MQTT claims CONNECTED but delivers nothing.

        A connection can look up while being silently dead (broker-side
        subscription loss, half-open socket, orphaned session). The HTTP
        fallback keeps data flowing at the poll cadence, but only a reconnect
        restores live updates — the same effect as reloading the entry,
        without the reload.
        """
        mqtt = self._mqtt
        if mqtt is None or not mqtt.connected or stale_sns != set(self.devices):
            self._stale_ticks = 0
            self._watchdog_warned = False
            return
        self._stale_ticks += 1
        if self._stale_ticks < MQTT_WATCHDOG_TICKS:
            return
        self._stale_ticks = 0
        # First reconnect of a silence episode is WARNING; repeats (e.g. all
        # devices genuinely powered off for hours) drop to DEBUG.
        log = _LOGGER.debug if self._watchdog_warned else _LOGGER.warning
        log(
            "MQTT connected to %s but no device data for %s update cycles; "
            "forcing a reconnect",
            mqtt.broker,
            MQTT_WATCHDOG_TICKS,
        )
        self._watchdog_warned = True
        await self._async_restart_mqtt()

    async def async_shutdown(self) -> None:
        """Disconnect MQTT on unload."""
        if self._refresh_unsub is not None:
            self._refresh_unsub()
            self._refresh_unsub = None
        if self._mqtt is not None:
            await self._mqtt.async_disconnect()
        await super().async_shutdown()

    async def _async_update_data(self) -> dict[str, DeviceState]:
        """Periodic tick: poll HTTP for devices MQTT cannot supply freshly."""
        stale_sns = self._stale_mqtt_sns()
        await self._async_mqtt_watchdog(stale_sns)
        resync_sns = self._full_snapshot_overdue_sns() - stale_sns
        for sn in stale_sns | resync_sns:
            try:
                quota = await self._http.get_all_quota(sn)
            except EcoFlowError as err:
                _LOGGER.debug("HTTP poll failed for %s: %s", redact_sn(sn), err)
                continue
            state = self.data.get(sn)
            if state is None:
                continue
            if sn in stale_sns:
                state.merge_quota(quota, DataSource.HTTP)
            else:
                # MQTT is alive but has only delivered partial pushes lately;
                # resync the full snapshot without demoting the live source.
                state.quota.update(quota)
            state.last_full_ts = time.time()

        await self._async_refresh_http_only(exclude=stale_sns | resync_sns)
        return self.data

    async def _async_refresh_http_only(self, *, exclude: set[str] | None = None) -> None:
        """While MQTT is the live source, refresh HTTP-only values on each tick.

        Runs only for devices that expose an ``http_only`` entity, so the
        cadence is the configured poll interval. The snapshot is merged without
        touching ``data_source``/``last_mqtt_ts`` so MQTT remains the reported
        live source.
        """
        excluded = exclude or set()
        for sn in self._http_only_sns - excluded:
            try:
                quota = await self._http.get_all_quota(sn)
            except EcoFlowError as err:
                _LOGGER.debug("HTTP-only refresh failed for %s: %s", redact_sn(sn), err)
                continue
            state = self.data.get(sn)
            if state is not None:
                state.quota.update(quota)
                state.last_full_ts = time.time()

    def _full_snapshot_overdue_sns(self) -> set[str]:
        """Return devices without a recent *full* quota snapshot.

        Devices push partial MQTT updates, so any single push keeps
        ``last_mqtt_ts`` fresh while fields absent from those pushes can stay
        frozen for hours. Requiring a full snapshot (HTTP ``quota/all`` or a
        ``latestQuotas`` reply) at most ``stale_seconds`` old bounds how stale
        any individual field can get — the same effect as reloading the entry,
        without the reload.
        """
        now = time.time()
        overdue: set[str] = set()
        for sn in self.devices:
            state = self.data.get(sn)
            last_full = state.last_full_ts if state is not None else None
            if last_full is None or now - last_full > self._stale_seconds:
                overdue.add(sn)
        return overdue

    def _stale_mqtt_sns(self) -> set[str]:
        """Return devices that need HTTP fallback because MQTT is stale."""
        if self._mqtt is None or not self._mqtt.connected:
            return set(self.devices)

        now = time.time()
        stale: set[str] = set()
        for sn in self.devices:
            state = self.data.get(sn)
            last_mqtt_ts = state.last_mqtt_ts if state is not None else None
            if last_mqtt_ts is None or now - last_mqtt_ts > self._stale_seconds:
                stale.add(sn)
        return stale

    # ---- MQTT callbacks (run on the event loop) ----

    @callback
    def _handle_quota(self, sn: str, values: dict[str, Any], full: bool = False) -> None:
        state = self.data.get(sn)
        if state is None:
            return
        state.merge_quota(values, DataSource.MQTT)
        state.last_mqtt_ts = time.time()
        # The device is demonstrably talking to us — heal a stale offline flag
        # (after setup, only a status push could ever set it back to True, and
        # a missed one would suppress the active refresh and availability).
        state.online = True
        if full:
            state.last_full_ts = state.last_mqtt_ts
        self._push_update()

    @callback
    def _handle_status(self, sn: str, online: bool) -> None:
        state = self.data.get(sn)
        if state is None:
            return
        state.online = online
        self._push_update()

    @callback
    def _push_update(self) -> None:
        """Notify entities of an in-place MQTT update without touching the poll timer."""
        self.last_update_success = True
        self.async_update_listeners()

    @callback
    def _handle_state_change(self, state: ConnectionState) -> None:
        # On (re)connect, immediately pull a fresh snapshot rather than waiting
        # for the first periodic refresh tick.
        if state is ConnectionState.CONNECTED and self._refresh_interval > 0:
            self.hass.async_create_task(self._async_active_refresh())
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
                _LOGGER.debug("MQTT set unacknowledged for %s, falling back", redact_sn(sn))
            except (RuntimeError, OSError) as err:
                _LOGGER.debug("MQTT publish failed for %s: %s", redact_sn(sn), err)

        # HTTP fallback.
        try:
            await self._http.set_quota(sn, envelope)
        except EcoFlowError as err:
            raise HomeAssistantError(f"EcoFlow command failed for {redact_sn(sn)}: {err}") from err
        await self.async_request_refresh()
