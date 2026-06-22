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

        def async_update_listeners(self):
            return None

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


api.EcoFlowError = EcoFlowError
api.EcoFlowHttpClient = object
api.EcoFlowMqttClient = object
sys.modules["ecoflow_iot.api"] = api

devices = types.ModuleType("ecoflow_iot.devices")
devices.EcoFlowDevice = object
devices.resolve_device = lambda sn, quota: None
sys.modules["ecoflow_iot.devices"] = devices

from ecoflow_iot.coordinator import EcoFlowCoordinator  # noqa: E402
from ecoflow_iot.models import DataSource, DeviceState  # noqa: E402
import ecoflow_iot.coordinator as coordinator_module  # noqa: E402


class FakeMqtt:
    connected = True

    def __init__(self) -> None:
        self.gets: list[tuple[str, dict]] = []

    async def async_publish_get(self, sn: str, payload: dict) -> None:
        self.gets.append((sn, payload))


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
    coord.devices = {"fresh": object(), "stale": object(), "never": object()}
    coord.data = {
        "fresh": DeviceState(
            sn="fresh",
            quota={"value": "fresh"},
            data_source=DataSource.MQTT,
            last_mqtt_ts=now - 10,
        ),
        "stale": DeviceState(
            sn="stale",
            quota={"value": "stale"},
            data_source=DataSource.MQTT,
            last_mqtt_ts=now - 121,
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


def test_active_refresh_skips_offline_devices(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    coord.data["stale"].online = False

    asyncio.run(coord._async_active_refresh())

    assert {sn for sn, _ in coord._mqtt.gets} == {"fresh", "never"}


def test_active_refresh_noop_when_mqtt_disconnected(monkeypatch):
    monkeypatch.setattr(coordinator_module.time, "time", lambda: 1000.0)
    coord = make_coordinator()
    coord._mqtt.connected = False

    asyncio.run(coord._async_active_refresh())

    assert coord._mqtt.gets == []
