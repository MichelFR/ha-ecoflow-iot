"""Unit tests for the centralized value-transform helpers (no HA required)."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

_PATH = (
    Path(__file__).resolve().parents[1]
    / "custom_components"
    / "ecoflow_iot"
    / "devices"
    / "helpers.py"
)
_spec = importlib.util.spec_from_file_location("ef_helpers", _PATH)
helpers = importlib.util.module_from_spec(_spec)
sys.modules["ef_helpers"] = helpers
_spec.loader.exec_module(helpers)


def test_none_safe():
    for fn in (helpers.round2, helpers.milli, helpers.deci, helpers.centi,
               helpers.abs_round, helpers.to_bool, helpers.to_int):
        assert fn(None) is None


def test_milli_scales_thousandths():
    assert helpers.milli(53251) == 53.25  # mV -> V
    assert helpers.milli(-138) == -0.14  # mA -> A


def test_deci_and_centi():
    assert helpers.deci(2300) == 230.0
    assert helpers.deci(793, ndigits=1) == 79.3
    assert helpers.centi(1234) == 12.34


def test_rounding_variants():
    assert helpers.round0(79.6) == 80
    assert helpers.round1(79.36) == 79.4
    assert helpers.round2(79.3333) == 79.33


def test_abs_round():
    assert helpers.abs_round(-138) == 138.0


def test_scaler_factory_custom_precision():
    mv3 = helpers.scaler(1000, 3)
    assert mv3(53251) == 53.251
    assert mv3(None) is None


def test_coercion_and_flag():
    assert helpers.to_bool(1) is True
    assert helpers.to_bool(0) is False
    assert helpers.to_int("5") == 5
    assert helpers.flag_is(4, 4) is True
    assert helpers.flag_is(0, 4) is False


def test_battery_charging_icon():
    # Not charging -> None so HA uses the automatic battery icon.
    assert helpers.battery_charging_icon(76, False) is None
    # Charging -> stepped icon at the nearest 10%.
    assert helpers.battery_charging_icon(76, True) == "mdi:battery-charging-80"
    assert helpers.battery_charging_icon(5, True) == "mdi:battery-charging-10"
    assert helpers.battery_charging_icon(100, True) == "mdi:battery-charging-100"
    assert helpers.battery_charging_icon(None, True) == "mdi:battery-charging"
