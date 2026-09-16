"""Reusable value-transform helpers for device entity descriptions.

Every EcoFlow device maps raw quota values into Home Assistant native values via
small ``value_fn`` callables. The recurring ones — unit scaling (mV->V, mA->A,
deci/centi units), rounding, and bool/int coercion — are centralised here so each
device module imports them instead of redefining its own copies.

All helpers are None-safe (return ``None`` for a missing value) so they can be used
directly as ``value_fn`` on an entity description.
"""

from __future__ import annotations

from collections.abc import Callable, Mapping
from typing import Any

Number = float | int


def quota_get(quota: Mapping[str, Any], key: str | None) -> Any:
    """Fetch ``key`` from quota, walking nested objects for dotted keys.

    Quota fields arrive both flattened (``"a.b": 1``, from MQTT pushes) and
    nested (``"a": {"b": 1}``, from the HTTP snapshot); this resolves either.
    """
    if not key:
        return None
    value = quota.get(key)
    if value is not None or "." not in key:
        return value
    node: Any = quota
    for part in key.split("."):
        if not isinstance(node, Mapping):
            return None
        node = node.get(part)
        if node is None:
            return None
    return node


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


def battery_charging_icon(level: Any, charging: bool) -> str | None:
    """A stepped charging battery icon while charging, else None.

    Returns ``mdi:battery-charging-{10..100}`` matching the level (nearest 10%)
    while ``charging`` is true. Returning None lets Home Assistant fall back to
    the automatic battery icon for the sensor's ``battery`` device class.
    """
    if not charging:
        return None
    if level is None:
        return "mdi:battery-charging"
    step = max(10, min(100, round(float(level) / 10) * 10))
    return f"mdi:battery-charging-{step}"


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


def ipv4_le(value: Any) -> str | None:
    """Format a little-endian packed IPv4 address as dotted-quad (None-safe).

    EcoFlow reports network addresses as 32-bit integers with the first octet in
    the low byte (``464693440`` -> ``192.168.178.27``); ``0`` means "not set".
    """
    if value is None:
        return None
    try:
        raw = int(value)
    except (TypeError, ValueError):
        return None
    if raw <= 0:
        return None
    return ".".join(str((raw >> shift) & 0xFF) for shift in (0, 8, 16, 24))


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
