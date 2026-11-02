"""EcoFlow STREAM 5000 / 5000 AC (BKW3, ES21/ES22 serials).

The open API exposes only a small system-level quota: the energy-flow summary,
backup reserve, operating mode, feed-in limit switch and AC socket. HTTP returns
the fields hyphen-flattened (``sysEnergyStreamReport-pvPwr``) while MQTT pushes
them nested (``{"sysEnergyStreamReport": {"pvPwr": …}}``); both are read here.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.number import NumberDeviceClass, NumberMode
from homeassistant.components.sensor import SensorDeviceClass, SensorStateClass
from homeassistant.const import PERCENTAGE, Platform, UnitOfEnergy, UnitOfPower

from ..base import (
    EcoFlowDevice,
    EcoFlowIntegralSensorEntityDescription,
    EcoFlowNumberEntityDescription,
    EcoFlowSelectEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..commands import build_stream_5000_command
from ..helpers import battery_charging_icon, round2 as _round2

_REPORT = "sysEnergyStreamReport"


def _field(quota: Mapping[str, Any], group: str | None, name: str) -> Any:
    if group is None:
        return quota.get(name)
    nested = quota.get(group)
    if isinstance(nested, Mapping) and nested.get(name) is not None:
        return nested[name]
    return quota.get(f"{group}-{name}")


def _getter(group: str | None, name: str):
    return lambda q: _field(q, group, name)


def _has(group: str | None, name: str):
    return lambda q: _field(q, group, name) is not None


def _power(group: str, name: str):
    return lambda q: _round2(_field(q, group, name))


def _clamped(name: str, sign: int):
    def _fn(quota: Mapping[str, Any]) -> float | None:
        value = _field(quota, _REPORT, name)
        return max(sign * float(value), 0.0) if value is not None else None

    return _fn


def _power_sensor(key: str, field: str, name: str, translated: bool = True):
    return EcoFlowSensorEntityDescription(
        key=key,
        translation_key=key if translated else None,
        name=name,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        quota_value_fn=_power(_REPORT, field),
        available_fn=_has(_REPORT, field),
    )


def _energy_sensor(key: str, name: str, field: str, sign: int):
    return EcoFlowIntegralSensorEntityDescription(
        key=key,
        translation_key=key,
        name=name,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_clamped(field, sign),
        available_fn=_has(_REPORT, field),
    )


def _battery_icon(quota: Mapping[str, Any]) -> str | None:
    return battery_charging_icon(
        _field(quota, _REPORT, "bpSoc"),
        float(_field(quota, _REPORT, "bpPwr") or 0) > 0,
    )


_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="cms_batt_soc",
        translation_key="cms_batt_soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        quota_value_fn=_getter(_REPORT, "bpSoc"),
        available_fn=_has(_REPORT, "bpSoc"),
        icon_fn=_battery_icon,
    ),
    _power_sensor("pv_total", "pvPwr", "Solar power"),
    _power_sensor("bat_power", "bpPwr", "Battery power"),
    _power_sensor("sys_load", "loadPwr", "Load power"),
    _power_sensor("grid_power", "gridPwr", "Grid power"),
    _power_sensor("on_grid_power", "onGridPwr", "Inverter power", translated=False),
    _energy_sensor("solar_energy", "Solar energy", "pvPwr", 1),
    _energy_sensor("grid_import_energy", "Grid import energy", "gridPwr", 1),
    _energy_sensor("grid_export_energy", "Grid export energy", "gridPwr", -1),
    _energy_sensor("battery_charge_energy", "Battery charge energy", "bpPwr", 1),
    _energy_sensor(
        "battery_discharge_energy", "Battery discharge energy", "bpPwr", -1
    ),
)

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="backup_reserve_enabled",
        name="Backup reserve",
        quota_value_fn=_getter("bpBackupConfig", "backupSocOnOff"),
        available_fn=_has("bpBackupConfig", "backupSocOnOff"),
        command_fn=lambda value, quota: {
            "bpBackupConfig": {"backupSocOnOff": bool(value)}
        },
    ),
    EcoFlowSwitchEntityDescription(
        key="feed_in_limit",
        name="Feed-in limit",
        quota_value_fn=_getter("powerParameterConfig", "feedToGridLimitOnOff"),
        available_fn=_has("powerParameterConfig", "feedToGridLimitOnOff"),
        command_fn=lambda value, quota: {
            "powerParameterConfig": {"feedToGridLimitOnOff": bool(value)}
        },
    ),
    EcoFlowSwitchEntityDescription(
        key="ac_socket",
        translation_key="ac_socket",
        name="AC socket",
        quota_value_fn=_getter("devSwitch", "acSocketOnoff"),
        available_fn=_has("devSwitch", "acSocketOnoff"),
        command_fn=lambda value, quota: {
            "devSwitch": {"acSocketOnoff": bool(value)}
        },
    ),
)

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="backup_reserve",
        translation_key="backup_reserve",
        name="Backup reserve level",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        quota_value_fn=_getter("bpBackupConfig", "backupSoc"),
        available_fn=_has("bpBackupConfig", "backupSoc"),
        command_fn=lambda value, quota: {
            "bpBackupConfig": {"backupSocOnOff": True, "backupSoc": int(value)}
        },
    ),
)

_WORK_MODES = (
    "SELF_CONSUMPTION",
    "AI_MODE",
    "TIMER_TASK",
    "POU_MODE",
    "EMERGENCY_STOP",
)


def _current_work_mode(quota: Mapping[str, Any]) -> str | None:
    mode = quota.get("workMode")
    return mode.lower() if mode in _WORK_MODES else None


_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="work_mode",
        name="Operating mode",
        options=[mode.lower() for mode in _WORK_MODES],
        current_option_fn=_current_work_mode,
        available_fn=lambda q: "workMode" in q,
        command_fn=lambda value, quota: {"workMode": str(value).upper()},
    ),
)


class Stream5000Device(EcoFlowDevice):
    """STREAM 5000 / 5000 AC system unit."""

    model = "EcoFlow STREAM 5000"
    sn_prefixes = ("ES21", "ES22")

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Wrap the control params in the BKW3 routing envelope."""
        return build_stream_5000_command(command)

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return list(_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []
