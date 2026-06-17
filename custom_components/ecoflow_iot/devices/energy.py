"""Builders for Energy-Dashboard *derived* energy sensors.

Many EcoFlow devices report instantaneous power (W) but no cumulative energy
(Wh) in their live quota. These helpers build
:class:`EcoFlowIntegralSensorEntityDescription`s whose ``power_fn`` extracts the
relevant power from the quota map; the sensor platform integrates it over time
into a monotonic Wh total suitable for the Home Assistant Energy Dashboard.

A *source* is either a quota key (``"mppt.inWatts"``) or a ``(key, divisor)``
tuple for fields that aren't already in Watts (e.g. ``("2_1.watts", 10)`` for a
0.1 W field). The divisor matches what the device's power *sensor* applies via
its ``value_fn`` (e.g. ``deci`` → divisor 10), so the integrated energy is in
true Watt-hours.

``power_fn`` always returns a **non-negative** value (or None to pause), so the
running total only ever increases — required by ``state_class=total_increasing``.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.sensor import SensorDeviceClass, SensorStateClass
from homeassistant.const import UnitOfEnergy

from .base import EcoFlowIntegralSensorEntityDescription

Source = "str | tuple[str, float]"


def _normalise(sources: tuple) -> tuple[tuple[str, float], ...]:
    out: list[tuple[str, float]] = []
    for s in sources:
        if isinstance(s, tuple):
            out.append((s[0], float(s[1])))
        else:
            out.append((s, 1.0))
    return tuple(out)


def _keys(sources: tuple[tuple[str, float], ...]) -> tuple[str, ...]:
    return tuple(k for k, _ in sources)


def _sum_nonneg(sources: tuple[tuple[str, float], ...]):
    def _fn(quota: Mapping[str, Any]) -> float | None:
        total = 0.0
        seen = False
        for key, div in sources:
            value = quota.get(key)
            if value is not None:
                seen = True
                total += float(value) / div
        if not seen:
            return None
        return max(total, 0.0)

    return _fn


def _signed_leg(key: str, div: float, *, positive: bool):
    def _fn(quota: Mapping[str, Any]) -> float | None:
        value = quota.get(key)
        if value is None:
            return None
        value = float(value) / div
        return max(value, 0.0) if positive else max(-value, 0.0)

    return _fn


def _present(keys: tuple[str, ...]):
    return lambda quota: any(k in quota for k in keys)


def _energy(key: str, name: str, power_fn, available_keys: tuple[str, ...]):
    return EcoFlowIntegralSensorEntityDescription(
        key=key,
        name=name,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=power_fn,
        available_fn=_present(available_keys),
    )


def solar_energy(*sources, key: str = "solar_energy", name: str = "Solar energy"):
    """Total solar/PV generation energy, summed across one or more PV inputs."""
    src = _normalise(sources)
    return _energy(key, name, _sum_nonneg(src), _keys(src))


def consumption_energy(key: str, name: str, *sources):
    """Energy consumed by a load (individual device), summed across sources."""
    src = _normalise(sources)
    return _energy(key, name, _sum_nonneg(src), _keys(src))


def battery_charge_discharge(charge_sources, discharge_sources):
    """Battery in/out energy from *separate* charge/discharge power sensors.

    Each source is already a one-directional power (>= 0), so there is no sign
    ambiguity. Returns a ``(charge, discharge)`` tuple of descriptions.
    """
    chg = _normalise(tuple(charge_sources))
    dsg = _normalise(tuple(discharge_sources))
    return (
        _energy("battery_charge_energy", "Battery charge energy", _sum_nonneg(chg), _keys(chg)),
        _energy("battery_discharge_energy", "Battery discharge energy", _sum_nonneg(dsg), _keys(dsg)),
    )


def battery_charge_discharge_signed(source, *, positive_is_charge: bool = True):
    """Battery in/out energy from a single *signed* power sensor.

    ``positive_is_charge`` says which sign means charging. If the live values
    turn out reversed on a given model, flip this flag.
    """
    key, div = _normalise((source,))[0]
    return (
        _energy(
            "battery_charge_energy", "Battery charge energy",
            _signed_leg(key, div, positive=positive_is_charge), (key,),
        ),
        _energy(
            "battery_discharge_energy", "Battery discharge energy",
            _signed_leg(key, div, positive=not positive_is_charge), (key,),
        ),
    )


def grid_import_export_signed(source, *, positive_is_import: bool = True):
    """Grid import/export energy from a single *signed* grid-power sensor.

    ``positive_is_import`` says which sign means drawing from the grid.
    """
    key, div = _normalise((source,))[0]
    return (
        _energy(
            "grid_import_energy", "Grid import energy",
            _signed_leg(key, div, positive=positive_is_import), (key,),
        ),
        _energy(
            "grid_export_energy", "Grid export energy",
            _signed_leg(key, div, positive=not positive_is_import), (key,),
        ),
    )
