"""Shared data structures for the EcoFlow IoT integration."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import StrEnum
from typing import Any


class ConnectionState(StrEnum):
    """State of the MQTT broker connection."""

    CONNECTED = "connected"
    CONNECTING = "connecting"
    DISCONNECTED = "disconnected"


class DataSource(StrEnum):
    """Where the most recent device data came from."""

    MQTT = "mqtt"
    HTTP = "http"
    UNKNOWN = "unknown"


@dataclass
class DeviceState:
    """Mutable per-device state held by the coordinator."""

    sn: str
    quota: dict[str, Any] = field(default_factory=dict)
    online: bool = True
    data_source: DataSource = DataSource.UNKNOWN
    last_mqtt_ts: float | None = None

    def merge_quota(self, new_values: dict[str, Any], source: DataSource) -> None:
        """Merge a quota update into the current snapshot."""
        self.quota.update(new_values)
        self.data_source = source


@dataclass(frozen=True)
class Certification:
    """MQTT broker connection details from the certification endpoint."""

    account: str
    password: str
    host: str
    port: int
    protocol: str

    @classmethod
    def from_response(cls, data: dict[str, Any]) -> "Certification":
        """Build from the raw certification API response."""
        return cls(
            account=data["certificateAccount"],
            password=data["certificatePassword"],
            host=data.get("url", "mqtt-e.ecoflow.com"),
            port=int(data.get("port", 8883)),
            protocol=data.get("protocol", "mqtts"),
        )
