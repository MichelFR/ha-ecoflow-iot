"""MQTT client for the EcoFlow open platform broker.

Connects over TLS to the broker advertised by the certification endpoint and
exposes async helpers for subscribing to quota/status updates and publishing
control commands with reply correlation.

paho-mqtt runs its network loop in its own thread; all callbacks are marshalled
back onto the Home Assistant event loop before touching shared state.
"""

from __future__ import annotations

import asyncio
import json
import logging
import ssl
import time
from collections.abc import Awaitable, Callable
from typing import Any

import paho.mqtt.client as mqtt

from ..const import (
    TOPIC_GET,
    TOPIC_GET_REPLY,
    TOPIC_PREFIX,
    TOPIC_QUOTA,
    TOPIC_SET,
    TOPIC_SET_REPLY,
    TOPIC_STATUS,
)
from ..models import Certification, ConnectionState

_LOGGER = logging.getLogger(__name__)

QuotaCallback = Callable[[str, dict[str, Any]], None]
StatusCallback = Callable[[str, bool], None]
StateCallback = Callable[[ConnectionState], None]
AuthFailureCallback = Callable[[], Awaitable[None]]

# CONNACK return codes that mean the credentials are no longer valid.
_AUTH_FAILURE_CODES = {4, 5}


class EcoFlowMqttClient:
    """Thin async wrapper around paho-mqtt for a single config entry."""

    def __init__(
        self,
        hass: Any,
        certification: Certification,
        device_sns: list[str],
        *,
        on_quota: QuotaCallback,
        on_status: StatusCallback,
        on_state_change: StateCallback,
        on_auth_failure: AuthFailureCallback | None = None,
        client_suffix: str = "",
    ) -> None:
        """Configure (but do not yet connect) the client."""
        self._hass = hass
        self._loop = hass.loop
        self._cert = certification
        self._device_sns = list(device_sns)
        self._on_quota = on_quota
        self._on_status = on_status
        self._on_state_change = on_state_change
        self._on_auth_failure = on_auth_failure

        self._state = ConnectionState.DISCONNECTED
        self._pending: dict[int, asyncio.Future[bool]] = {}
        self._client_suffix = client_suffix or str(int(time.time()))
        self._client: mqtt.Client | None = None

    @property
    def state(self) -> ConnectionState:
        """Return the current connection state."""
        return self._state

    @property
    def connected(self) -> bool:
        """Return whether the broker connection is currently up."""
        return self._state is ConnectionState.CONNECTED

    @property
    def broker(self) -> str:
        """Return a human-readable broker endpoint."""
        return f"{self._cert.host}:{self._cert.port}"

    def update_certification(self, certification: Certification) -> None:
        """Replace the stored certification (used after a credential refresh)."""
        self._cert = certification

    async def async_connect(self) -> None:
        """Create the paho client and start connecting in the background."""
        await self._hass.async_add_executor_job(self._connect)

    def _connect(self) -> None:
        client_id = f"ha_ecoflow_{self._cert.account}_{self._client_suffix}"[:64]
        # paho-mqtt 2.x requires an explicit callback API version; pin V1 so the
        # callback signatures below stay valid on both 1.x and 2.x.
        if hasattr(mqtt, "CallbackAPIVersion"):
            client = mqtt.Client(
                mqtt.CallbackAPIVersion.VERSION1,
                client_id=client_id,
                protocol=mqtt.MQTTv311,
            )
        else:  # paho-mqtt 1.x
            client = mqtt.Client(client_id=client_id, protocol=mqtt.MQTTv311)
        client.username_pw_set(self._cert.account, self._cert.password)

        context = ssl.create_default_context()
        # EcoFlow's broker cert chain is not always verifiable from HA hosts.
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE
        client.tls_set_context(context)

        client.on_connect = self._on_connect
        client.on_disconnect = self._on_disconnect
        client.on_message = self._on_message

        self._client = client
        self._set_state(ConnectionState.CONNECTING)
        client.connect_async(self._cert.host, self._cert.port, keepalive=60)
        client.loop_start()

    async def async_disconnect(self) -> None:
        """Stop the network loop and disconnect cleanly."""
        client = self._client
        if client is None:
            return
        await self._hass.async_add_executor_job(self._disconnect, client)
        self._client = None
        self._set_state(ConnectionState.DISCONNECTED)

    def _disconnect(self, client: mqtt.Client) -> None:
        try:
            client.disconnect()
        finally:
            client.loop_stop()

    # ---- paho callbacks (run in the paho network thread) ----

    def _on_connect(
        self, client: mqtt.Client, _userdata: Any, _flags: Any, rc: int
    ) -> None:
        if rc != 0:
            _LOGGER.warning("EcoFlow MQTT connection refused (rc=%s)", rc)
            self._loop.call_soon_threadsafe(self._set_state, ConnectionState.DISCONNECTED)
            if rc in _AUTH_FAILURE_CODES and self._on_auth_failure is not None:
                self._loop.call_soon_threadsafe(self._schedule_auth_refresh)
            return

        for sn in self._device_sns:
            for suffix in (TOPIC_QUOTA, TOPIC_STATUS, TOPIC_SET_REPLY, TOPIC_GET_REPLY):
                client.subscribe(self._topic(sn, suffix), qos=1)
        self._loop.call_soon_threadsafe(self._set_state, ConnectionState.CONNECTED)

    def _on_disconnect(
        self, _client: mqtt.Client, _userdata: Any, rc: int
    ) -> None:
        if rc != 0:
            _LOGGER.debug("EcoFlow MQTT unexpected disconnect (rc=%s)", rc)
        # paho auto-reconnects when the loop is running; reflect that we are down.
        self._loop.call_soon_threadsafe(
            self._set_state,
            ConnectionState.CONNECTING if self._client else ConnectionState.DISCONNECTED,
        )

    def _on_message(
        self, _client: mqtt.Client, _userdata: Any, msg: mqtt.MQTTMessage
    ) -> None:
        try:
            payload = json.loads(msg.payload.decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            _LOGGER.debug("EcoFlow MQTT: undecodable payload on %s", msg.topic)
            return
        self._loop.call_soon_threadsafe(self._dispatch, msg.topic, payload)

    # ---- dispatch (runs on the HA event loop) ----

    def _dispatch(self, topic: str, payload: dict[str, Any]) -> None:
        sn, suffix = self._parse_topic(topic)
        if sn is None:
            return
        if suffix == TOPIC_QUOTA:
            self._on_quota(sn, _unwrap_quota(payload))
        elif suffix == TOPIC_GET_REPLY:
            # Reply to an active "latestQuotas" pull: the snapshot is under
            # ``data`` (some devices answer here, others push on the quota topic
            # instead — either way keeps us fresh). Ignore pure acks.
            data = _extract_reply_quota(payload)
            if data:
                self._on_quota(sn, data)
        elif suffix == TOPIC_STATUS:
            self._on_status(sn, _parse_status(payload))
        elif suffix == TOPIC_SET_REPLY:
            self._resolve_reply(payload)

    def _resolve_reply(self, payload: dict[str, Any]) -> None:
        msg_id = payload.get("id")
        try:
            msg_id = int(msg_id)
        except (TypeError, ValueError):
            return
        future = self._pending.pop(msg_id, None)
        if future is None or future.done():
            return
        data = payload.get("data") or {}
        success = (
            data.get("result") == 0
            or data.get("ack") == 0
            or data.get("configOk") is True
        )
        future.set_result(bool(success))

    def _schedule_auth_refresh(self) -> None:
        if self._on_auth_failure is not None:
            self._hass.async_create_task(self._on_auth_failure())

    def _set_state(self, state: ConnectionState) -> None:
        if state == self._state:
            return
        self._state = state
        self._on_state_change(state)

    # ---- publish ----

    async def async_publish_set(
        self, sn: str, payload: dict[str, Any], timeout: float
    ) -> bool:
        """Publish a set command and await its reply.

        Returns True on a successful ack, False on timeout/failure. Raises
        RuntimeError if the client is not connected.
        """
        client = self._client
        if client is None or not self.connected:
            raise RuntimeError("MQTT not connected")

        msg_id = int(payload["id"])
        future: asyncio.Future[bool] = self._loop.create_future()
        self._pending[msg_id] = future

        topic = self._topic(sn, TOPIC_SET)
        body = json.dumps(payload)
        await self._hass.async_add_executor_job(client.publish, topic, body, 1)

        try:
            return await asyncio.wait_for(future, timeout)
        except TimeoutError:
            return False
        finally:
            self._pending.pop(msg_id, None)

    async def async_publish_get(self, sn: str, payload: dict[str, Any]) -> None:
        """Publish a get/refresh request to the device's ``get`` topic.

        Fire-and-forget: the resulting data arrives asynchronously on the
        ``get_reply`` or ``quota`` topic. A no-op when not connected so callers
        (e.g. the periodic active refresh) don't have to guard the connection.
        """
        client = self._client
        if client is None or not self.connected:
            return
        topic = self._topic(sn, TOPIC_GET)
        body = json.dumps(payload)
        await self._hass.async_add_executor_job(client.publish, topic, body, 1)

    # ---- helpers ----

    def _topic(self, sn: str, suffix: str) -> str:
        return f"{TOPIC_PREFIX}/{self._cert.account}/{sn}/{suffix}"

    def _parse_topic(self, topic: str) -> tuple[str | None, str | None]:
        # /open/{account}/{sn}/{suffix}
        parts = topic.strip("/").split("/")
        if len(parts) < 4:
            return None, None
        return parts[2], parts[3]


def _unwrap_quota(payload: dict[str, Any]) -> dict[str, Any]:
    """Extract the data map from the several quota envelope shapes."""
    if isinstance(payload.get("params"), dict):
        return payload["params"]
    if isinstance(payload.get("param"), dict):
        return payload["param"]
    return payload


def _extract_reply_quota(payload: dict[str, Any]) -> dict[str, Any] | None:
    """Return the quota map from a get_reply, or None for a bare ack.

    Only a nested ``data``/``params``/``param`` dict is treated as quota; we
    never merge the top-level envelope (``id``/``code``/``message``) so a pure
    acknowledgement does not pollute the device state.
    """
    for key in ("data", "params", "param"):
        value = payload.get(key)
        if isinstance(value, dict) and value:
            return value
    return None


def _parse_status(payload: dict[str, Any]) -> bool:
    """Return True when the status payload reports the device online."""
    params = payload.get("params", payload)
    return bool(params.get("status", 0))
