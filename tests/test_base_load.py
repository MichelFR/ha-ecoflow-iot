"""Stream "Base load" (Grundlastleistung) number mapping.

The base-load schedule arrives in the undocumented quota field
``dayResidentLoadList`` as a list of minutes-from-midnight windows with a watt
setpoint. The integration exposes one Number per window (discovered at runtime
from quota) and writes the whole list back via ``cfgDayResidentLoadList``. This
test pins the read value, the time-window formatting, and that a write resends
the full schedule with only the target window's power changed.

Run directly: ``python3 tests/test_base_load.py``.
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


install_ha_stub()
root = Path(__file__).resolve().parents[1] / "custom_components"
sys.path.insert(0, str(root))
pkg = types.ModuleType("ecoflow_iot")
pkg.__path__ = [str(root / "ecoflow_iot")]
sys.modules["ecoflow_iot"] = pkg

from ecoflow_iot.devices.base import Platform  # noqa: E402
from ecoflow_iot.devices.solar_systems.stream import (  # noqa: E402
    StreamDevice,
    StreamMicroinverterDevice,
)

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


def _numbers(quota):
    dev = StreamDevice("BK11ZE1B2H5K2510")
    return {d.key: d for d in dev.dynamic_entity_descriptions(Platform.NUMBER, quota)}


# --- single period, as seen on real hardware --------------------------------
single = {
    "dayResidentLoadList": {
        "load": [{"startMin": 0, "endMin": 1440, "loadPower": 230}]
    },
    "powSysAcOutMax": 800,
}
by_key = _numbers(single)

check("one period -> one number", len(by_key), 1)
desc = by_key["base_load_0_1440"]
check("name shows 24:00 window", desc.name, "Base load 00:00–24:00")
check("reads loadPower", desc.quota_value_fn(single), 230.0)
check("max from powSysAcOutMax", desc.native_max_value, 800.0)
check("available when present", desc.available_fn(single), True)

# Write: resend the whole schedule with only loadPower changed.
check(
    "set 400 -> full list w/ window preserved",
    desc.command_fn(400, single),
    {"cfgDayResidentLoadList": {"load": [{"startMin": 0, "endMin": 1440, "loadPower": 400}]}},
)

# --- two periods: changing one must preserve the other ----------------------
two = {
    "dayResidentLoadList": {
        "load": [
            {"startMin": 0, "endMin": 360, "loadPower": 100},
            {"startMin": 360, "endMin": 1440, "loadPower": 300},
        ]
    },
}
two_keys = _numbers(two)
check("two periods -> two numbers", len(two_keys), 2)
check("morning window name", two_keys["base_load_0_360"].name, "Base load 00:00–06:00")
check("reads second period", two_keys["base_load_360_1440"].quota_value_fn(two), 300.0)
check(
    "changing morning keeps evening",
    two_keys["base_load_0_360"].command_fn(150, two),
    {
        "cfgDayResidentLoadList": {
            "load": [
                {"startMin": 0, "endMin": 360, "loadPower": 150},
                {"startMin": 360, "endMin": 1440, "loadPower": 300},
            ]
        }
    },
)

# --- absence handling -------------------------------------------------------
check("no field -> no numbers", len(_numbers({})), 0)
check("max falls back to 800", _numbers(single)["base_load_0_1440"].native_max_value, 800.0)
# A window that disappeared from the schedule reads unavailable / None.
check("unavailable when window gone", desc.available_fn({"dayResidentLoadList": {"load": []}}), False)
check("value None when window gone", desc.quota_value_fn({}), None)

# The battery-less microinverter never exposes base-load numbers.
micro = StreamMicroinverterDevice("BK51ZE1B2H4H0029")
check(
    "microinverter has no base load",
    micro.dynamic_entity_descriptions(Platform.NUMBER, single),
    [],
)

print(f"\nRESULT: {'PASS' if not fails else f'{fails} FAILED'}")
sys.exit(1 if fails else 0)
