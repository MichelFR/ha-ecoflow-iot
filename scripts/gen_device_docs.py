#!/usr/bin/env python3
"""Generate per-device entity documentation from the device definitions.

Introspects each EcoFlowDevice's entity descriptions (under a lightweight Home
Assistant stub, so no HA install is needed) and writes one Markdown file per
device to ``docs/devices/<category>/<model>.md``. Run after changing entities:

    python3 scripts/gen_device_docs.py

The generated tables mirror the per-device format used in the README.
"""

from __future__ import annotations

import re
import sys
import types
from dataclasses import dataclass
from pathlib import Path
from typing import Any

REPO = Path(__file__).resolve().parents[1]
CC = REPO / "custom_components"
DOCS = REPO / "docs" / "devices"

PLATFORMS = ["SENSOR", "BINARY_SENSOR", "SWITCH", "NUMBER", "SELECT"]
CATEGORY_TITLES = {
    "power_stations": "Power Stations",
    "solar_systems": "Solar Systems",
    "home_battery": "Home Battery",
    "smart_living": "Smart Living",
    "whole_home_backup": "Whole-Home Backup",
}
UNIT_SYMBOLS = {
    "WATT": "W", "WATT_HOUR": "Wh", "KILO_WATT_HOUR": "kWh", "VOLT": "V",
    "AMPERE": "A", "MILLIAMPERE": "mA", "CELSIUS": "°C", "HERTZ": "Hz",
    "PERCENTAGE": "%", "MINUTES": "min", "SECONDS": "s", "HOURS": "h",
}


# --- Home Assistant stub ----------------------------------------------------

class Auto(str):
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


def _component(modname):
    m = types.ModuleType(modname)
    m.__getattr__ = lambda name: (
        StubEntityDescription if name.endswith("EntityDescription") else Auto(name)
    )
    return m


def install_stub():
    ha = types.ModuleType("homeassistant"); ha.__path__ = []
    sys.modules["homeassistant"] = ha
    comps = types.ModuleType("homeassistant.components"); comps.__path__ = []
    sys.modules["homeassistant.components"] = comps
    for c in ("sensor", "binary_sensor", "switch", "number", "select"):
        sys.modules[f"homeassistant.components.{c}"] = _component(
            f"homeassistant.components.{c}"
        )
    const = types.ModuleType("homeassistant.const")
    const.__getattr__ = lambda name: Auto(name)
    sys.modules["homeassistant.const"] = const
    sys.path.insert(0, str(CC))
    pkg = types.ModuleType("ecoflow_iot")
    pkg.__path__ = [str(CC / "ecoflow_iot")]
    sys.modules["ecoflow_iot"] = pkg


# --- formatting helpers -----------------------------------------------------

def last_seg(value) -> str:
    if value is None:
        return ""
    s = str(value)
    return s.rsplit(".", 1)[-1]


def device_class(d) -> str:
    return last_seg(d.device_class).lower() if d.device_class else "—"


def unit(d) -> str:
    if not d.native_unit_of_measurement:
        return "—"
    tok = last_seg(d.native_unit_of_measurement)
    return UNIT_SYMBOLS.get(tok, tok)


def quota_key(d) -> str:
    if getattr(d, "mqtt_key", ""):
        return f"`{d.mqtt_key}`"
    if getattr(d, "quota_value_fn", None) is not None:
        return "_computed_"
    if getattr(d, "current_option_fn", None) is not None:
        return "_derived_"
    return "—"


def flags(d) -> str:
    parts = []
    if d.entity_category and last_seg(d.entity_category) == "DIAGNOSTIC":
        parts.append("D")
    if d.entity_registry_enabled_default is False:
        parts.append("○")
    return " ".join(parts)


def num_range(d) -> str:
    if d.native_min_value is None and d.native_max_value is None:
        return "—"
    rng = f"{d.native_min_value}–{d.native_max_value}"
    if d.native_step is not None:
        rng += f" (step {d.native_step})"
    return rng


def model_slug(model: str) -> str:
    """Clean file-name slug from a model name.

    Drops a leading 'EcoFlow', splits camelCase (PowerOcean -> power_ocean) and
    letter/digit boundaries, then snake-cases.
    """
    s = re.sub(r"^EcoFlow\s*", "", model)
    s = re.sub(r"(?<=[a-z])(?=[A-Z])", " ", s)  # camelCase -> spaced
    return re.sub(r"[^a-z0-9]+", "_", s.lower()).strip("_")


def table(rows, header) -> str:
    out = ["| " + " | ".join(header) + " |",
           "|" + "|".join(["---"] * len(header)) + "|"]
    for r in rows:
        out.append("| " + " | ".join(r) + " |")
    return "\n".join(out)


# --- per-device document ----------------------------------------------------

def render_device(cls, category) -> str:
    dev = cls("DOCSN")
    name = cls.model
    module = cls.__module__.rsplit(".", 1)[-1]
    prefixes = ", ".join(f"`{p}`" for p in cls.sn_prefixes) or "_quota-based_"

    def descs(p):
        return dev.entity_descriptions(Auto(f"Platform.{p}"))

    lines = [
        f"# {name}",
        "",
        f"**Category:** {CATEGORY_TITLES.get(category, category)} · "
        f"**Auto-detected by SN prefix:** {prefixes}",
        "",
        f"> Generated from "
        f"`custom_components/ecoflow_iot/devices/{category}/{module}.py` "
        f"by `scripts/gen_device_docs.py` — do not edit by hand.",
        "> Every device also exposes an always-available **Connection** "
        "diagnostic sensor (MQTT state + data source).",
        "",
        "Legend: **D** = diagnostic entity · **○** = disabled by default.",
        "",
    ]

    sensors = descs("SENSOR")
    if sensors:
        rows = [[d.name or d.key, device_class(d), unit(d), quota_key(d), flags(d)]
                for d in sensors]
        lines += ["## Sensors", "",
                  table(rows, ["Entity", "Device class", "Unit", "Quota key", "Flags"]),
                  ""]

    binaries = descs("BINARY_SENSOR")
    if binaries:
        rows = [[d.name or d.key, device_class(d), quota_key(d), flags(d)]
                for d in binaries]
        lines += ["## Binary sensors", "",
                  table(rows, ["Entity", "Device class", "Quota key", "Flags"]), ""]

    switches = descs("SWITCH")
    if switches:
        rows = [[d.name or d.key, quota_key(d), flags(d)] for d in switches]
        lines += ["## Switches", "",
                  table(rows, ["Entity", "Quota key", "Flags"]), ""]

    numbers = descs("NUMBER")
    if numbers:
        rows = [[d.name or d.key, unit(d), num_range(d), quota_key(d), flags(d)]
                for d in numbers]
        lines += ["## Numbers", "",
                  table(rows, ["Entity", "Unit", "Range", "Quota key", "Flags"]), ""]

    selects = descs("SELECT")
    if selects:
        rows = []
        for d in selects:
            opts = ", ".join(d.options) if d.options else "—"
            rows.append([d.name or d.key, opts, quota_key(d), flags(d)])
        lines += ["## Selects", "",
                  table(rows, ["Entity", "Options", "Quota key", "Flags"]), ""]

    counts = {p: len(descs(p)) for p in PLATFORMS}
    total = sum(counts.values())
    lines += ["---", "",
              f"_Entity totals: {total} — "
              + ", ".join(f"{counts[p]} {p.lower()}" for p in PLATFORMS) + "._", ""]
    return "\n".join(lines)


def main():
    import shutil

    install_stub()
    from ecoflow_iot.devices import DEVICE_REGISTRY  # noqa: E402

    if DOCS.exists():
        shutil.rmtree(DOCS)
    DOCS.mkdir(parents=True, exist_ok=True)
    index = ["# Device entity reference", "",
             "Auto-generated per-device entity tables. Regenerate with "
             "`python3 scripts/gen_device_docs.py`.", ""]
    by_cat: dict[str, list[tuple[str, str]]] = {}

    for cls in DEVICE_REGISTRY:
        category = cls.__module__.split(".")[-2]
        slug = model_slug(cls.model)
        out_dir = DOCS / category
        out_dir.mkdir(parents=True, exist_ok=True)
        (out_dir / f"{slug}.md").write_text(render_device(cls, category))
        by_cat.setdefault(category, []).append(
            (cls.model, f"{category}/{slug}.md")
        )

    for category in sorted(by_cat):
        index.append(f"## {CATEGORY_TITLES.get(category, category)}")
        index.append("")
        for model, rel in sorted(by_cat[category]):
            index.append(f"- [{model}]({rel})")
        index.append("")
    (DOCS / "README.md").write_text("\n".join(index))

    n = sum(len(v) for v in by_cat.values())
    print(f"Generated {n} device docs + index under {DOCS.relative_to(REPO)}/")


if __name__ == "__main__":
    main()
