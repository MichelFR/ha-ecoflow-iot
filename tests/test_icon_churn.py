"""The dynamic battery icon is only re-evaluated when the sensor value changes."""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import ha_stubs  # noqa: E402,F401
from ecoflow_iot import sensor  # noqa: E402


class Desc:
    icon = None

    def __init__(self, icon_fn):
        self.icon_fn = icon_fn
        self.grid_role = None


class Probe(sensor.EcoFlowSensor):
    def __init__(self, icon_fn):
        self._icon_for = sensor._UNSET
        self._icon = None
        self.entity_description = Desc(icon_fn)
        self.value = 50
        self.quota = {"charging": True}

    @property
    def native_value(self):
        return self.value

    @property
    def _quota(self):
        return self.quota


calls = 0


def icon_fn(q):
    global calls
    calls += 1
    return "mdi:battery-charging-50" if q["charging"] else None


fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


p = Probe(icon_fn)
check("first read evaluates", p.icon, "mdi:battery-charging-50")
check("one evaluation", calls, 1)
p.quota = {"charging": False}
check("flag flips, value same: icon cached", p.icon, "mdi:battery-charging-50")
check("no re-evaluation", calls, 1)
p.value = 51
check("value changed: re-evaluated -> auto icon", p.icon, None)
check("evaluated again", calls, 2)
p.quota = {"charging": True}
p.value = 52
check("value changed while charging", p.icon, "mdi:battery-charging-50")

print(f"\nRESULT: {'PASS' if not fails else f'{fails} FAILED'}")
sys.exit(1 if fails else 0)
