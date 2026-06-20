"""Stream "Grid feed-in" switch mapping.

EcoFlow's doc claims ``feedGridMode`` is "1-off, 2-on", but real Stream
firmware is the OPPOSITE (1 = feed-in ON, 2 = OFF), confirmed on hardware --
the same unreliable-docs pattern as ``gridConnectionPower``'s sign. This test
pins the corrected mapping so it doesn't get "fixed" back to match the doc.
Run directly: ``python3 tests/test_feed_in_switch.py``.
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
from ecoflow_iot.devices.solar_systems.stream import StreamDevice  # noqa: E402

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


by_key = {d.key: d for d in StreamDevice("TESTSN").entity_descriptions(Platform.SWITCH)}
feed = by_key["feed_in"]

check("feed_in source", feed.mqtt_key, "feedGridMode")

# Read: firmware 1 = feed-in ON, 2 = OFF (opposite of EcoFlow's doc).
check("feedGridMode=1 -> on", feed.value_fn(1), True)
check("feedGridMode=2 -> off", feed.value_fn(2), False)

# Write: turning the switch on must request 1; off must request 2.
check("turn on -> cfgFeedGridMode=1", feed.command_fn(True, {}), {"cfgFeedGridMode": 1})
check("turn off -> cfgFeedGridMode=2", feed.command_fn(False, {}), {"cfgFeedGridMode": 2})

# Read and write must agree: writing the "on" value must read back as on.
on_payload = feed.command_fn(True, {})
check("round-trip on", feed.value_fn(on_payload["cfgFeedGridMode"]), True)

print(f"\nRESULT: {'PASS' if not fails else f'{fails} FAILED'}")
sys.exit(1 if fails else 0)
