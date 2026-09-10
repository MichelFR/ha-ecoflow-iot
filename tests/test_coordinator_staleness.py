"""Coordinator staleness tests under a minimal Home Assistant stub."""

from __future__ import annotations

import asyncio
import sys
import types
from pathlib import Path


def install_ha_stub() -> None:
    """Install only the Home Assistant modules coordinator.py imports."""
    ha = types.ModuleType("homeassistant")
    ha.__path__ = []
    sys.modules["homeassistant"] = ha

    config_entries = types.ModuleType("homeassistant.config_entries")
    config_entries.ConfigEntry = object
    sys.modules["homeassistant.config_entries"] = config_entries

    core = types.ModuleType("homeassistant.core")
    core.HomeAssistant = object
    core.callback = lambda fn: fn
    sys.modules["homeassistant.core"] = core

    exceptions = types.ModuleType("homeassistant.exceptions")
    exceptions.HomeAssistantError = Exception
    sys.modules["homeassistant.exceptions"] = exceptions

    helpers = types.ModuleType("homeassistant.helpers")
    helpers.__path__ = []
    sys.modules["homeassistant.helpers"] = helpers

    event = types.ModuleType("homeassistant.helpers.event")
    event.async_track_time_interval = lambda *args, **kwargs: (lambda: None)
    sys.modules["homeassistant.helpers.event"] = event

    issue_registry = types.ModuleType("homeassistant.helpers.issue_registry")
    issue_registry.IssueSeverity = types.SimpleNamespace(WARNING="warning")
    issue_registry.async_create_issue = lambda *args, **kwargs: None
    sys.modules["homeassistant.helpers.issue_registry"] = issue_registry

    update_coordinator = types.ModuleType(
        "homeassistant.helpers.update_coordinator"
    )

    class DataUpdateCoordinator:
        def __class_getitem__(cls, item):
            return cls

        def __init__(self, *args, **kwargs):
            self.config_entry = kwargs.get("config_entry")

        def async_set_updated_data(self, data):
            self.data = data
            self.set_updated_calls = getattr(self, "set_updated_calls", 0) + 1

        def async_update_listeners(self):
            self.listener_calls = getattr(self, "listener_calls", 0) + 1

        async def async_shutdown(self):
            return None

    update_coordinator.DataUpdateCoordinator = DataUpdateCoordinator
    update_coordinator.UpdateFailed = Exception
    sys.modules["homeassistant.helpers.update_coordinator"] = update_coordinator


install_ha_stub()

root = Path(__file__).resolve().parents[1] / "custom_components"
sys.path.insert(0, str(root))

pkg = types.ModuleType("ecoflow_iot")
pkg.__path__ = [str(root / "ecoflow_iot")]
sys.modules["ecoflow_iot"] = pkg

api = types.ModuleType("ecoflow_iot.api")


class EcoFlowError(Exception):
    """Stub API error."""


class EcoFlowApiError(EcoFlowError):
    """Stub API error carrying a code."""

    def __init__(self, code: int = 0, message: str = "") -> None:
        super().__init__(message)
        self.code = code
        self.message = message


api.EcoFlowError = EcoFlowError
api.EcoFlowApiError = EcoFlowApiError
api.EcoFlowHttpClient = object
api.EcoFlowMqttClient = object
sys.modules["ecoflow_iot.api"] = api

devices = types.ModuleType("ecoflow_iot.devices")
devices.EcoFlowDevice = object
devices.resolve_device = lambda sn, quota: None
devices.is_silenced = lambda sn: False
sys.modules["ecoflow_iot.devices"] = devices

from ecoflow_iot.coordinator import EcoFlowCoordinator  # noqa: E402
from ecoflow_iot.models import DataSource, DeviceState  # noqa: E402
import ecoflow_iot.coordinator as coordinator_module  # noqa: E402


class FakeMqtt:
    broker = "broker:8883"

    def __init__(self) -> None:
        self.connected = True
        self.gets: list[tuple[str, dict]] = []
        self.restarts: list[str] = []

    async def async_publish_get(self, sn: str, payload: dict) -> None:
        self.gets.append((sn, payload))

    async def async_disconnect(self) -> None:
        self.restarts.append("disconnect")
        # Yield so a concurrent restart attempt can observe the held lock.
        await asyncio.sleep(0)

    async def async_connect(self) -> None:
        self.restarts.append("connect")


class FakeHttp:
    def __init__(self) -> None:
        self.calls: list[str] = []

    async def get_all_quota(self, sn: str) -> dict[str, str]:
        self.calls.append(sn)
        return {"polled": sn}


def make_coordinator(now: float = 1000.0) -> EcoFlowCoordinator:
    coord = EcoFlowCoordinator.__new__(EcoFlowCoordinator)
    coord._mqtt = FakeMqtt()
    coord._stale_seconds = 120
    coord._http = FakeHttp()
    coord._http_only_sns = set()
    coord._stale_ticks = 0
    coord._watchdog_warned = False
    coord._restart_lock = asyncio.Lock()
    coord.devices = {"fresh": object(), "stale": object(), "never": object()}
    coord.data = {
        "fresh": DeviceState(
            sn="fresh",
            quota={"value": "fresh"},
            data_source=DataSource.MQTT,
            last_mqtt_ts=now - 10,
            last_full_ts=now - 10,
        ),
        "stale": DeviceState(
            sn="stale",
            quota={"value": "stale"},
            data_source=DataSource.MQTT,
            last_mqtt_ts=now - 121,
            last_full_ts=now - 121,
        ),
        "never": DeviceState(sn="never", quota={"value": "never"}),
    }
    return coord


def test_mqtt_staleness_is_per_device(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()

    assert coord._stale_mqtt_sns() == {"stale", "never"}


def test_http_fallback_polls_only_stale_mqtt_devices(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()

    asyncio.run(coord._async_update_data())

    assert set(coord._http.calls) == {"never", "stale"}
    assert coord.data["fresh"].quota == {"value": "fresh"}
    assert coord.data["fresh"].data_source is DataSource.MQTT
    assert coord.data["stale"].quota["polled"] == "stale"
    assert coord.data["stale"].data_source is DataSource.HTTP


def test_full_resync_when_mqtt_fresh_but_full_snapshot_overdue(monkeypatch):
    """Partial MQTT pushes must not mask per-field staleness forever."""
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    # MQTT looks alive (recent partial push) but no full snapshot for 200s.
    coord.data["fresh"].last_full_ts = 1000.0 - 200

    asyncio.run(coord._async_update_data())

    assert "fresh" in coord._http.calls
    # Resynced (full snapshot merged) without demoting the live source.
    assert coord.data["fresh"].quota == {"value": "fresh", "polled": "fresh"}
    assert coord.data["fresh"].data_source is DataSource.MQTT
    assert coord.data["fresh"].last_full_ts == 1000.0


def test_full_quota_reply_marks_full_snapshot(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()

    coord._handle_quota("never", {"a": 1}, False)
    assert coord.data["never"].last_full_ts is None

    coord._handle_quota("never", {"a": 2}, True)
    assert coord.data["never"].last_full_ts == 1000.0
    assert coord.data["never"].last_mqtt_ts == 1000.0


def test_active_refresh_publishes_latest_quotas_for_online_devices(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()

    asyncio.run(coord._async_active_refresh())

    sns = [sn for sn, _ in coord._mqtt.gets]
    assert set(sns) == {"fresh", "stale", "never"}
    for _, payload in coord._mqtt.gets:
        assert payload["operateType"] == "latestQuotas"
        assert payload["params"] == {}
        assert "sn" in payload and "id" in payload


def test_active_refresh_includes_offline_devices(monkeypatch):
    """A stale offline flag must not suppress the pull — the reply heals it."""
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    coord.data["stale"].online = False

    asyncio.run(coord._async_active_refresh())

    assert {sn for sn, _ in coord._mqtt.gets} == {"fresh", "stale", "never"}


def test_active_refresh_noop_when_mqtt_disconnected(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    coord._mqtt.connected = False

    asyncio.run(coord._async_active_refresh())

    assert coord._mqtt.gets == []


def test_quota_arrival_marks_device_online(monkeypatch):
    """MQTT data from a device is proof of life — it heals a stuck offline flag."""
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    coord.data["stale"].online = False

    coord._handle_quota("stale", {"a": 1}, False)

    assert coord.data["stale"].online is True


def make_all_stale(coord) -> None:
    for state in coord.data.values():
        state.last_mqtt_ts = 1000.0 - 121
        state.last_full_ts = 1000.0 - 121


def test_watchdog_reconnects_after_consecutive_all_stale_ticks(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    make_all_stale(coord)

    async def scenario() -> None:
        for _ in range(3):
            await coord._async_update_data()

    asyncio.run(scenario())

    assert coord._mqtt.restarts == ["disconnect", "connect"]


def test_watchdog_counter_resets_when_any_device_is_fresh(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()  # "fresh" has recent MQTT data
    coord._stale_ticks = 2

    asyncio.run(coord._async_update_data())

    assert coord._stale_ticks == 0
    assert coord._mqtt.restarts == []


def test_watchdog_noop_while_disconnected(monkeypatch):
    """paho handles reconnects while down; the watchdog must not fight it."""
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    make_all_stale(coord)
    coord._mqtt.connected = False

    async def scenario() -> None:
        for _ in range(3):
            await coord._async_update_data()

    asyncio.run(scenario())

    assert coord._mqtt.restarts == []


def test_restart_is_single_flight(monkeypatch):
    """Concurrent restart triggers must not interleave disconnect/connect."""
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()

    async def scenario() -> None:
        await asyncio.gather(
            coord._async_restart_mqtt(),
            coord._async_restart_mqtt(),
        )

    asyncio.run(scenario())

    assert coord._mqtt.restarts == ["disconnect", "connect"]


def test_mqtt_push_does_not_reset_refresh_timer(monkeypatch):
    """Pushes must notify listeners without async_set_updated_data.

    That helper reschedules the periodic refresh on every call; with a device
    pushing every few seconds the HTTP resync and watchdog would never run.
    """
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()

    coord._handle_quota("fresh", {"a": 1}, False)
    coord._handle_status("fresh", False)

    assert getattr(coord, "set_updated_calls", 0) == 0
    assert coord.listener_calls == 2
    assert coord.last_update_success is True
    assert coord.data["fresh"].quota["a"] == 1
    assert coord.data["fresh"].online is False
