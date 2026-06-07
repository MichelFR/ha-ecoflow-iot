"""Reusable value-transform helpers for device entity descriptions.

Every EcoFlow device maps raw quota values into Home Assistant native values via
small ``value_fn`` callables. The recurring ones — unit scaling (mV->V, mA->A,
deci/centi units), rounding, and bool/int coercion — are centralised here so each
device module imports them instead of redefining its own copies.

All helpers are None-safe (return ``None`` for a missing value) so they can be used
directly as ``value_fn`` on an entity description.
"""

from __future__ import annotations

from collections.abc import Callable
from typing import Any

Number = float | int


def round_value(value: Any, ndigits: int = 2) -> float | None:
    """Round a numeric value to ``ndigits`` decimals (None-safe)."""
    if value is None:
        return None
    return round(float(value), ndigits)


def round0(value: Any) -> float | None:
    """Round to a whole number (returned as float)."""
    return round_value(value, 0)


def round1(value: Any) -> float | None:
    """Round to 1 decimal place."""
    return round_value(value, 1)


def round2(value: Any) -> float | None:
    """Round to 2 decimal places."""
    return round_value(value, 2)


def scale(value: Any, divisor: float, ndigits: int = 2) -> float | None:
    """Divide ``value`` by ``divisor`` and round (None-safe)."""
    if value is None:
        return None
    return round(float(value) / divisor, ndigits)


def scaler(divisor: float, ndigits: int = 2) -> Callable[[Any], float | None]:
    """Return a ``value_fn`` that divides by ``divisor`` and rounds.

    Use for non-standard factors, e.g. ``scaler(1000, 3)`` for millivolt-precision
    voltages.
    """

    def _fn(value: Any) -> float | None:
        return scale(value, divisor, ndigits)

    return _fn


def milli(value: Any, ndigits: int = 2) -> float | None:
    """Convert a milli-unit integer to its base unit (mV->V, mA->A)."""
    return scale(value, 1000, ndigits)


def deci(value: Any, ndigits: int = 1) -> float | None:
    """Convert a deci-unit value (0.1 x) to its base unit."""
    return scale(value, 10, ndigits)


def centi(value: Any, ndigits: int = 2) -> float | None:
    """Convert a centi-unit value (0.01 x) to its base unit."""
    return scale(value, 100, ndigits)


def abs_round(value: Any, ndigits: int = 2) -> float | None:
    """Absolute value, rounded (None-safe)."""
    if value is None:
        return None
    return round(abs(float(value)), ndigits)


def to_bool(value: Any) -> bool | None:
    """Coerce a quota value to bool (None-safe)."""
    if value is None:
        return None
    return bool(value)


def to_int(value: Any) -> int | None:
    """Coerce a quota value to int (None-safe)."""
    if value is None:
        return None
    return int(value)


def flag_is(value: Any, on_value: int) -> bool | None:
    """Return whether an enum-style flag equals ``on_value`` (None-safe).

    Useful for fields where "on" is a specific non-boolean code (e.g. ``2`` for
    on, ``4``/``0`` for off).
    """
    if value is None:
        return None
    return value == on_value
