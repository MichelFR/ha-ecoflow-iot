"""Integral energy sensors write state at most every 10 s or on a >= 1 Wh step."""

from __future__ import annotations

import importlib.abc
import importlib.machinery
import sys
import types
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any


class _Base:
    def __init__(self, *args, **kwargs):
        pass

    def __init_subclass__(cls, **kwargs):
        pass


class _Auto(str):
    def __getattr__(self, name):
        return _Auto(f"{self}.{name}")


class _Meta(type):
    def __getattr__(cls, name):
        return _Auto(f"{cls.__name__}.{name}")

    def __getitem__(cls, item):
        return cls


@dataclass(frozen=True, kw_only=True)
class _Description:
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


def _module_getattr(name):
    if name.endswith("EntityDescription"):
        return _Description
    if name[:1].isupper():
        return _Meta(name, (_Base,), {"__getattr__": lambda self, n: _Auto(n)})
    return lambda *a, **k: None


class _StubFinder(importlib.abc.MetaPathFinder, importlib.abc.Loader):
    def find_spec(self, fullname, path, target=None):
        top = fullname.split(".", 1)[0]
        if top in ("homeassistant", "aiohttp", "paho", "cryptography"):
            return importlib.machinery.ModuleSpec(fullname, self, is_package=True)
        return None

    def create_module(self, spec):
        mod = types.ModuleType(spec.name)
        mod.__path__ = []
        mod.__getattr__ = _module_getattr
        return mod

    def exec_module(self, module):
        pass


sys.meta_path.insert(0, _StubFinder())
root = Path(__file__).resolve().parents[1] / "custom_components"
sys.path.insert(0, str(root))
pkg = types.ModuleType("ecoflow_iot")
pkg.EcoFlowConfigEntry = object
pkg.__path__ = [str(root / "ecoflow_iot")]
sys.modules["ecoflow_iot"] = pkg

from ecoflow_iot import sensor  # noqa: E402

writes: list[float] = []


class Probe(sensor.EcoFlowIntegralSensor):
    def __init__(self):
        self._energy_wh = 0.0
        self._last_power = None
        self._last_ts = None
        self._written_wh = None
        self._written_ts = None
        self.power = 100.0
        self.now = datetime(2026, 1, 1, tzinfo=timezone.utc)

    def _current_power(self):
        return self.power

    def async_write_ha_state(self):
        writes.append(round(self._energy_wh, 3))


sensor.dt_util = types.SimpleNamespace(utcnow=lambda: probe.now)
probe = Probe()

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


probe._accumulate(write=True)
check("first sample writes", len(writes), 1)

for _ in range(9):
    probe.now += timedelta(seconds=1)
    probe._accumulate(write=True)
check("100 W x 9 s (0.25 Wh) within 10 s: no write", len(writes), 1)

probe.now += timedelta(seconds=1)
probe._accumulate(write=True)
check("10 s elapsed: writes", len(writes), 2)
check("accumulated 10 s at 100 W", writes[-1], round(100 * 10 / 3600, 3))

probe.power = 5000.0
probe.now += timedelta(seconds=1)
probe._accumulate(write=True)
check("1 s at ~2.5 kW avg (0.7 Wh): no write", len(writes), 2)
probe.now += timedelta(seconds=1)
probe._accumulate(write=True)
check("next second crosses 1 Wh since last write: writes", len(writes), 3)

probe.power = 0.0
for _ in range(5):
    probe.now += timedelta(seconds=1)
    probe._accumulate(write=True)
check("idle 5 s at 0 W: no write", len(writes), 3)

print(f"\nRESULT: {'PASS' if not fails else f'{fails} FAILED'}")
sys.exit(1 if fails else 0)
