"""Stream grid-power sign handling.

Verifies (a) the Stream grid entities are wired to the right GridRole/source
field, and (b) the import/export leg math, against an HA stub (no HA install).
Run directly: ``python3 tests/test_grid_sign.py``.
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
    for c in ("sensor", "binary_sensor", "switch", "number", "select"):
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

from ecoflow_iot.devices.base import GridRole, Platform  # noqa: E402
from ecoflow_iot.devices.solar_systems.stream import StreamDevice  # noqa: E402

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


# --- (a) wiring on the real Stream descriptions ---------------------------
by_key = {d.key: d for d in StreamDevice("TESTSN").entity_descriptions(Platform.SENSOR)}

check("grid_power role", by_key["grid_power"].grid_role, GridRole.SIGNED)
check("grid_power source", by_key["grid_power"].mqtt_key, "gridConnectionPower")
check("grid_import role", by_key["grid_import_energy"].grid_role, GridRole.IMPORT)
check("grid_import source", by_key["grid_import_energy"].mqtt_key, "gridConnectionPower")
check("grid_export role", by_key["grid_export_energy"].grid_role, GridRole.EXPORT)
check("grid_export source", by_key["grid_export_energy"].mqtt_key, "gridConnectionPower")


# --- (b) leg math: mirrors sensor.py (signed = sign * raw) ----------------
# Default option (invert on): firmware reports export as +, so sign = -1.
def signed(raw, *, inverted):
    return (-1.0 if inverted else 1.0) * raw


# Exporting 800 W: firmware reports +800. Default -> normalised -800.
s = signed(800, inverted=True)
check("export800 -> signed (display)", round(s, 2), -800.0)
check("export800 -> import leg", GridRole.IMPORT.leg_power(s), 0.0)
check("export800 -> export leg", GridRole.EXPORT.leg_power(s), 800.0)

# Importing 300 W (charging from grid): firmware reports -300. Default -> +300.
s = signed(-300, inverted=True)
check("import300 -> signed (display)", round(s, 2), 300.0)
check("import300 -> import leg", GridRole.IMPORT.leg_power(s), 300.0)
check("import300 -> export leg", GridRole.EXPORT.leg_power(s), 0.0)

# Option off (unit already matches HA): +800 is treated as import.
s = signed(800, inverted=False)
check("opt-off +800 -> import leg", GridRole.IMPORT.leg_power(s), 800.0)
check("opt-off +800 -> export leg", GridRole.EXPORT.leg_power(s), 0.0)

print(f"\nRESULT: {'PASS' if not fails else f'{fails} FAILED'}")
sys.exit(1 if fails else 0)
