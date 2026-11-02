"""Stream system role / battery source for multi-unit systems (issue #28).

A unit on the parallel cable can sit in ``distributedDeviceStatus: ELECTION``
while ``seriesConnectDeviceStatus`` already says SLAVE; its system (cms*) battery
fields are then zeroed and only the pack (bms*) values are real.

Run directly: ``python3 tests/test_stream_role.py``.
"""

import sys
import types
from dataclasses import dataclass
from pathlib import Path
from typing import Any


class Auto(str):
    """A str that yields more Autos on attribute access (enums/units/Platform)."""

    def __getattr__(self, name):
        return Auto(f"{self}.{name}")


@dataclass(frozen=True, kw_only=True)
class StubEntityDescription:
    key: str = ""
    name: Any = None
    device_class: Any = None
    native_unit_of_measurement: Any = None
    state_class: Any = None
    entity_category: Any = None
    entity_registry_enabled_default: bool = True
    options: Any = None
    native_min_value: Any = None
    native_max_value: Any = None
    native_step: Any = None
    mode: Any = None
    translation_key: Any = None
    icon: Any = None
    suggested_display_precision: Any = None


def _make_component(modname):
    m = types.ModuleType(modname)

    def __getattr__(name, _m=m):
        if name.endswith("EntityDescription"):
            return StubEntityDescription
        return Auto(name)

    m.__getattr__ = __getattr__
    return m


def install_ha_stub():
    ha = types.ModuleType("homeassistant")
    ha.__path__ = []
    sys.modules["homeassistant"] = ha
    comps = types.ModuleType("homeassistant.components")
    comps.__path__ = []
    sys.modules["homeassistant.components"] = comps
    for c in ("sensor", "binary_sensor", "switch", "number", "select", "light"):
        sys.modules[f"homeassistant.components.{c}"] = _make_component(
            f"homeassistant.components.{c}"
        )
    const = types.ModuleType("homeassistant.const")
    const.__getattr__ = lambda name: Auto(name)
    sys.modules["homeassistant.const"] = const
    exc = types.ModuleType("homeassistant.exceptions")
    exc.HomeAssistantError = type("HomeAssistantError", (Exception,), {})
    sys.modules["homeassistant.exceptions"] = exc


install_ha_stub()
root = Path(__file__).resolve().parents[1] / "custom_components"
sys.path.insert(0, str(root))
pkg = types.ModuleType("ecoflow_iot")
pkg.__path__ = [str(root / "ecoflow_iot")]
sys.modules["ecoflow_iot"] = pkg

from ecoflow_iot.devices.solar_systems.stream import (  # noqa: E402
    _battery_full_energy,
    _battery_soc,
    _role,
)

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


# Issue #28: STREAM AC Pro on a parallel cable, stuck in ELECTION.
election = {
    "seriesConnectDeviceStatus": "SLAVE",
    "distributedDeviceStatus": "ELECTION",
    "cmsBattSoc": 0.0,
    "cmsBattFullEnergy": 0,
    "bmsBattSoc": 24.0,
    "bmsDesignCap": 1920,
}
check("election role", _role(election), "SLAVE")
check("election soc", _battery_soc(election), 24.0)
check("election capacity", _battery_full_energy(election), 1920)

master = {
    "seriesConnectDeviceStatus": "SLAVE",
    "distributedDeviceStatus": "MASTER",
    "cmsBattSoc": 61.0,
    "cmsBattFullEnergy": 3840,
    "bmsBattSoc": 58.0,
    "bmsDesignCap": 1920,
}
check("master role", _role(master), "MASTER")
check("master soc", _battery_soc(master), 61.0)
check("master capacity", _battery_full_energy(master), 3840)

slave = {"distributedDeviceStatus": "SLAVE", "cmsBattSoc": 0, "bmsBattSoc": 40.0}
check("slave role", _role(slave), "SLAVE")
check("slave soc", _battery_soc(slave), 40.0)

# Standalone unit at a real 0 % keeps the system value.
standalone = {"distributedDeviceStatus": "MASTER", "cmsBattSoc": 0, "cmsBattFullEnergy": 3840}
check("standalone empty soc", _battery_soc(standalone), 0)

sys.exit(1 if fails else 0)
