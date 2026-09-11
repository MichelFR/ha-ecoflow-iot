"""Import-time stubs so integration modules load without Home Assistant installed."""

from __future__ import annotations

import importlib.abc
import importlib.machinery
import sys
import types
from dataclasses import dataclass
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
