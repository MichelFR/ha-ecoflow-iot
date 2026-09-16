"""EcoFlow Stream family device definitions.

Covers Stream Ultra / Ultra X / AC / AC Pro / Pro (full feature set), the
Stream Microinverter (grid + PV only, no battery/relays) and the Smart Meter
(BK21, status only). Field names and units follow the public quota schema
(mV/mA values are scaled to V/A here).
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.number import NumberDeviceClass, NumberMode
from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorStateClass,
)
from homeassistant.const import (
    PERCENTAGE,
    EntityCategory,
    Platform,
    UnitOfElectricCurrent,
    UnitOfElectricPotential,
    UnitOfEnergy,
    UnitOfFrequency,
    UnitOfPower,
    UnitOfTemperature,
    UnitOfTime,
)
from homeassistant.exceptions import HomeAssistantError

from ..base import (
    EcoFlowBinarySensorEntityDescription,
    EcoFlowDevice,
    EcoFlowIntegralSensorEntityDescription,
    EcoFlowLightEntityDescription,
    EcoFlowNumberEntityDescription,
    EcoFlowSelectEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    GridRole,
    _EcoFlowDescription,
)
from ..commands import build_stream_command
from ..helpers import (
    abs_round as _abs_round,
    battery_charging_icon,
    ipv4_le as _ipv4_le,
    milli as _scale_1000,
    quota_get,
    round2 as _round2,
)

# Quota keys that only the battery-equipped variants report.
_BATTERY_MARKERS = ("cmsBattSoc", "bmsBattSoc", "soc")


def _computed_pv_power(quota: Mapping[str, Any], amp_key: str, vol_key: str) -> float | None:
    """Compute per-MPPT watts from current x voltage (newer-firmware fallback)."""
    amp = quota.get(amp_key)
    vol = quota.get(vol_key)
    if amp is None or vol is None:
        return None
    return round(float(amp) * float(vol), 1)


def _pv_power_with_fallback(power_key: str, amp_key: str, vol_key: str):
    """Return a quota_value_fn that prefers reported power, else amp x vol."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        reported = quota.get(power_key)
        if reported:
            return round(float(reported), 1)
        return _computed_pv_power(quota, amp_key, vol_key)

    return _fn


# --- Operating mode (select) -------------------------------------------------

_MODE_SELF_POWERED = "self_powered"
_MODE_SCHEDULED = "scheduled"
_MODE_TOU = "time_of_use"
_MODE_INTELLIGENT = "intelligent"
_MODE_FLAGS = {
    _MODE_SELF_POWERED: "operateSelfPoweredOpen",
    _MODE_SCHEDULED: "operateScheduledOpen",
    _MODE_TOU: "operateTouModeOpen",
    _MODE_INTELLIGENT: "operateIntelligentScheduleModeOpen",
}


def _current_operating_mode(quota: Mapping[str, Any]) -> str | None:
    for mode, flag in _MODE_FLAGS.items():
        if quota.get(f"energyStrategyOperateMode.{flag}"):
            return mode
    return None


_SETTABLE_MODES = (_MODE_SELF_POWERED, _MODE_INTELLIGENT)


def _operating_mode_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    if option not in _SETTABLE_MODES:
        raise HomeAssistantError(
            f"Operating mode '{option}' cannot be set through the EcoFlow open API "
            "(only self_powered and intelligent are accepted); use the EcoFlow app"
        )
    flag = _MODE_FLAGS[option]
    return {"cfgEnergyStrategyOperateMode": {flag: True}}


def _charge_limit_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    # Charge and discharge limits must be sent together.
    return {
        "cfgMaxChgSoc": int(value),
        "cfgMinDsgSoc": int(quota.get("cmsMinDsgSoc", 0)),
    }


def _discharge_limit_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    return {
        "cfgMaxChgSoc": int(quota.get("cmsMaxChgSoc", 100)),
        "cfgMinDsgSoc": int(value),
    }


# --- Sensors -----------------------------------------------------------------

_BATTERY_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="cms_batt_soc",
        mqtt_key="cmsBattSoc",
        # translation_key lets the bundled Lovelace card auto-discover this
        # sensor regardless of the user's language or renamed entity_id.
        translation_key="cms_batt_soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
        # Stepped charging icon while charging (powGetBpCms > 0), else auto.
        icon_fn=lambda q: battery_charging_icon(
            q.get("cmsBattSoc"), float(q.get("powGetBpCms") or 0) > 0
        ),
    ),
    EcoFlowSensorEntityDescription(
        key="bms_batt_soc",
        translation_key="bms_batt_soc",
        mqtt_key="bmsBattSoc",
        name="Battery (BMS)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="f32_show_soc",
        translation_key="f32_show_soc",
        mqtt_key="f32ShowSoc",
        name="Battery (precise)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        suggested_display_precision=5,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="soh",
        mqtt_key="cmsBattSoh",
        translation_key="soh",
        name="Battery health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_vol",
        translation_key="bat_vol",
        mqtt_key="vol",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_amp",
        translation_key="bat_amp",
        mqtt_key="amp",
        name="Battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_temp",
        mqtt_key="temp",
        translation_key="bat_temp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
    ),
    EcoFlowSensorEntityDescription(
        key="full_energy",
        mqtt_key="cmsBattFullEnergy",
        translation_key="full_energy",
        name="Battery capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="cycles",
        mqtt_key="cycles",
        translation_key="cycles",
        name="Battery cycles",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_rem_time",
        mqtt_key="cmsChgRemTime",
        translation_key="chg_rem_time",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="dsg_rem_time",
        mqtt_key="cmsDsgRemTime",
        translation_key="dsg_rem_time",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ai_tou_target_soc",
        mqtt_key="aiTouTargetSoc",
        translation_key="ai_tou_target_soc",
        name="AI target charge level",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        available_fn=lambda q: bool(q.get("aiTouValid")),
        undocumented=True,
    ),
    # accuChgEnergy/accuDsgEnergy are not in the documented quota schema, but
    # newer Stream firmware does report these device-side lifetime totals over
    # MQTT. Kept disabled by default so they don't double up with the
    # powGetBpCms-derived charge/discharge energy below, which remains the
    # Energy-Dashboard default.
    EcoFlowSensorEntityDescription(
        key="accu_chg_energy",
        translation_key="accu_chg_energy",
        mqtt_key="accuChgEnergy",
        name="Total charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "accuChgEnergy" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="accu_dsg_energy",
        translation_key="accu_dsg_energy",
        mqtt_key="accuDsgEnergy",
        name="Total discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "accuDsgEnergy" in q,
        undocumented=True,
    ),
    # Calendar-aging health, distinct from cmsBattSoh (cycle health); often
    # already below 100% while the cycle SoH still reads full.
    EcoFlowSensorEntityDescription(
        key="calendar_soh",
        mqtt_key="calendarSoh",
        translation_key="calendar_soh",
        name="Battery calendar health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
        available_fn=lambda q: "calendarSoh" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="cycle_soh",
        mqtt_key="cycleSoh",
        translation_key="cycle_soh",
        name="Battery cycle health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
        available_fn=lambda q: "cycleSoh" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="cell_vol_delta",
        translation_key="cell_vol_delta",
        mqtt_key="maxVolDiff",
        name="Cell voltage delta",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "maxVolDiff" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="max_cell_vol",
        translation_key="max_cell_vol",
        mqtt_key="maxCellVol",
        name="Battery max cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "maxCellVol" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="min_cell_vol",
        translation_key="min_cell_vol",
        mqtt_key="minCellVol",
        name="Battery min cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "minCellVol" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="mos_temp",
        translation_key="mos_temp",
        mqtt_key="maxMosTemp",
        name="MOSFET temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        available_fn=lambda q: "maxMosTemp" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="max_cell_temp",
        translation_key="max_cell_temp",
        mqtt_key="maxCellTemp",
        name="Battery max cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "maxCellTemp" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="min_cell_temp",
        translation_key="min_cell_temp",
        mqtt_key="minCellTemp",
        name="Battery min cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "minCellTemp" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="heater_temp",
        translation_key="heater_temp",
        mqtt_key="maxHeatfilmTemp",
        name="Battery heater temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "maxHeatfilmTemp" in q,
        undocumented=True,
    ),
)

_POWERFLOW_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bat_power",
        mqtt_key="powGetBpCms",
        translation_key="bat_power",
        name="Battery power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="avail_charge_power",
        translation_key="avail_charge_power",
        mqtt_key="curAvaiToBmsPower",
        name="Available charge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "curAvaiToBmsPower" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_load",
        translation_key="sys_load",
        mqtt_key="powGetSysLoad",
        name="Load power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="load_from_bat",
        translation_key="load_from_bat",
        mqtt_key="powGetSysLoadFromBp",
        name="Load from battery",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="load_from_grid",
        translation_key="load_from_grid",
        mqtt_key="powGetSysLoadFromGrid",
        name="Load from grid",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="load_from_pv",
        translation_key="load_from_pv",
        mqtt_key="powGetSysLoadFromPv",
        name="Load from solar",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
)

# Grid + inverter sensors shared by every Stream variant (incl. microinverter).
_GRID_CONNECTION_STATUS_SENSOR = EcoFlowSensorEntityDescription(
    key="grid_connection_status",
    translation_key="grid_connection_status",
    mqtt_key="gridConnectionSta",
    name="Grid connection status",
    entity_category=EntityCategory.DIAGNOSTIC,
    available_fn=lambda q: "gridConnectionSta" in q,
    undocumented=True,
)

_GRID_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="grid_power",
        mqtt_key="gridConnectionPower",
        translation_key="grid_power",
        name="Grid power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        # Normalised to HA convention (import positive, export negative) via the
        # invert_grid_sign option; see GridRole / DEFAULT_INVERT_GRID_SIGN.
        grid_role=GridRole.SIGNED,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_grid_power",
        translation_key="sys_grid_power",
        mqtt_key="sysGridConnectionPower",
        name="System grid power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_voltage",
        translation_key="grid_voltage",
        mqtt_key="gridConnectionVol",
        name="Grid voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_freq",
        translation_key="grid_freq",
        mqtt_key="gridConnectionFreq",
        name="Grid frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_temp",
        translation_key="inv_temp",
        mqtt_key="invNtcTemp3",
        name="Inverter temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        # Firmware varies: some report invNtcTemp3, others invTempNtc.
        quota_value_fn=lambda q: q.get("invNtcTemp3", q.get("invTempNtc")),
        available_fn=lambda q: "invNtcTemp3" in q or "invTempNtc" in q,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_total_power",
        translation_key="ac_total_power",
        mqtt_key="acTotalActivePower",
        name="Total AC power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        available_fn=lambda q: "acTotalActivePower" in q,
        undocumented=True,
    ),
    _GRID_CONNECTION_STATUS_SENSOR,
    EcoFlowSensorEntityDescription(
        key="meter_phase_a",
        translation_key="meter_phase_a",
        mqtt_key="cloudMetter.phaseAPower",
        name="Meter phase A power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_code",
        translation_key="grid_code",
        mqtt_key="gridCodeSelection",
        name="Grid code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=lambda v: str(v).removeprefix("GRID_STD_CODE_"),
        available_fn=lambda q: "gridCodeSelection" in q,
        undocumented=True,
    ),
)

_PV_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="pv_total",
        mqtt_key="powGetPvSum",
        translation_key="pv_total",
        name="Solar power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
)


# --- Derived energy (Energy Dashboard) ---------------------------------------
#
# Stream reports grid/solar power but no cumulative energy in the live quota
# (energy lives only in the separate historical-data API). These sensors
# integrate the live power into Wh totals so the device can populate the
# Energy Dashboard's solar-production and grid consumption/return sources.
#
# ``gridConnectionPower`` is signed, but its firmware sign is the OPPOSITE of
# EcoFlow's docs and of HA's convention: real units report feeding the grid as
# POSITIVE and drawing from the grid as NEGATIVE (confirmed on hardware in both
# directions). The grid import/export legs below therefore use GridRole, which
# normalises the sign via the invert_grid_sign option (default on) before
# clamping each leg non-negative so its running total only ever increases.


def _solar_power(quota: Mapping[str, Any]) -> float | None:
    value = quota.get("powGetPvSum")
    return max(float(value), 0.0) if value is not None else None


def _battery_charge_power(quota: Mapping[str, Any]) -> float | None:
    # powGetBpCms is signed: positive = charging, negative = discharging.
    value = quota.get("powGetBpCms")
    return max(float(value), 0.0) if value is not None else None


def _battery_discharge_power(quota: Mapping[str, Any]) -> float | None:
    value = quota.get("powGetBpCms")
    return max(-float(value), 0.0) if value is not None else None


_BATTERY_ENERGY_SENSORS: tuple[EcoFlowIntegralSensorEntityDescription, ...] = (
    EcoFlowIntegralSensorEntityDescription(
        key="battery_charge_energy",
        translation_key="battery_charge_energy",
        name="Battery charge energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_battery_charge_power,
        available_fn=lambda q: "powGetBpCms" in q,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="battery_discharge_energy",
        translation_key="battery_discharge_energy",
        name="Battery discharge energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_battery_discharge_power,
        available_fn=lambda q: "powGetBpCms" in q,
    ),
)


_ENERGY_SENSORS: tuple[EcoFlowIntegralSensorEntityDescription, ...] = (
    EcoFlowIntegralSensorEntityDescription(
        key="solar_energy",
        translation_key="solar_energy",
        name="Solar energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_solar_power,
        available_fn=lambda q: "powGetPvSum" in q,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="grid_import_energy",
        translation_key="grid_import_energy",
        name="Grid import energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        mqtt_key="gridConnectionPower",
        grid_role=GridRole.IMPORT,
        available_fn=lambda q: "gridConnectionPower" in q,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="grid_export_energy",
        translation_key="grid_export_energy",
        name="Grid export energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        mqtt_key="gridConnectionPower",
        grid_role=GridRole.EXPORT,
        available_fn=lambda q: "gridConnectionPower" in q,
    ),
)


def _pv_string_sensors(count: int) -> tuple[EcoFlowSensorEntityDescription, ...]:
    """Build per-MPPT power/voltage/current sensors for ``count`` strings."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(1, count + 1):
        suffix = "" if i == 1 else str(i)
        power_key = f"powGetPv{suffix}" if i > 1 else "powGetPv"
        amp_key = f"plugInInfoPv{suffix}Amp" if i > 1 else "plugInInfoPvAmp"
        vol_key = f"plugInInfoPv{suffix}Vol" if i > 1 else "plugInInfoPvVol"
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{i}_power",
                translation_key=f"pv{i}_power",
                name=f"Solar string {i} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=_pv_power_with_fallback(power_key, amp_key, vol_key),
                available_fn=lambda q, a=amp_key, p=power_key: a in q or p in q,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{i}_voltage",
                translation_key=f"pv{i}_voltage",
                mqtt_key=vol_key,
                name=f"Solar string {i} voltage",
                device_class=SensorDeviceClass.VOLTAGE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricPotential.VOLT,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                value_fn=_round2,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{i}_current",
                translation_key=f"pv{i}_current",
                mqtt_key=amp_key,
                name=f"Solar string {i} current",
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                value_fn=_round2,
            )
        )
    return tuple(descs)


_AC_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="schuko1_power",
        mqtt_key="powGetSchuko1",
        translation_key="schuko1_power",
        name="AC socket 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="schuko2_power",
        mqtt_key="powGetSchuko2",
        translation_key="schuko2_power",
        name="AC socket 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="schuko1_inverter_power",
        mqtt_key="offgrid1ActivePower",
        translation_key="schuko1_inverter_power",
        name="AC socket 1 inverter power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        available_fn=lambda q: "offgrid1ActivePower" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="schuko2_inverter_power",
        mqtt_key="offgrid2ActivePower",
        translation_key="schuko2_inverter_power",
        name="AC socket 2 inverter power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        available_fn=lambda q: "offgrid2ActivePower" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_standby_time",
        translation_key="ac_standby_time",
        mqtt_key="acStandbyTime",
        name="AC standby timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        available_fn=lambda q: "acStandbyTime" in q,
        undocumented=True,
    ),
)


def _socket_power(key: str):
    """Return a power_fn yielding a socket's (non-negative) output power."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        value = quota.get(key)
        return max(float(value), 0.0) if value is not None else None

    return _fn


# Per-socket energy totals for the Energy Dashboard's "individual devices"
# (full Stream only — the microinverter has no AC sockets).
_AC_ENERGY_SENSORS: tuple[EcoFlowIntegralSensorEntityDescription, ...] = (
    EcoFlowIntegralSensorEntityDescription(
        key="schuko1_energy",
        translation_key="schuko1_energy",
        name="AC socket 1 energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_socket_power("powGetSchuko1"),
        available_fn=lambda q: "powGetSchuko1" in q,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="schuko2_energy",
        translation_key="schuko2_energy",
        name="AC socket 2 energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_socket_power("powGetSchuko2"),
        available_fn=lambda q: "powGetSchuko2" in q,
    ),
)

_DIAG_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="wifi_rssi",
        translation_key="wifi_rssi",
        mqtt_key="moduleWifiRssi",
        name="Wi-Fi signal",
        device_class=SensorDeviceClass.SIGNAL_STRENGTH,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="dBm",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="device_role",
        translation_key="device_role",
        mqtt_key="seriesConnectDeviceStatus",
        name="Device role",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "seriesConnectDeviceStatus" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="local_ip",
        translation_key="local_ip",
        mqtt_key="iotIpAddress",
        name="Local IP address",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_ipv4_le,
        available_fn=lambda q: "iotIpAddress" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="gateway_ip",
        translation_key="gateway_ip",
        mqtt_key="iotGatewayAddress",
        name="Gateway IP address",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_ipv4_le,
        available_fn=lambda q: "iotGatewayAddress" in q,
        undocumented=True,
    ),
)

_FEED_LIMIT_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="feed_grid_limit",
        translation_key="feed_grid_limit",
        mqtt_key="feedGridModePowLimit",
        name="Feed-in power limit",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_in_power_limit",
        translation_key="grid_in_power_limit",
        mqtt_key="sysGridInPwrLimit",
        name="Grid input power limit",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "sysGridInPwrLimit" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="busbar_power_limit",
        translation_key="busbar_power_limit",
        mqtt_key="busbarPowLimit",
        name="Busbar power limit",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "busbarPowLimit" in q,
        undocumented=True,
    ),
)

# --- Local smart meter (LAN) ---------------------------------------------------


def _local_meter_value(field: str):
    def _fn(quota: Mapping[str, Any]) -> Any:
        return quota_get(quota, f"localMeter.{field}")

    return _fn


def _local_meter_online(quota: Mapping[str, Any]) -> bool:
    return bool(quota_get(quota, "localMeter.online"))


def _local_meter_bound(quota: Mapping[str, Any]) -> bool:
    model = quota_get(quota, "localMeter.model")
    if model and model != "NONE":
        return True
    return bool(quota_get(quota, "localMeter.sn"))


def _local_meter_sensors() -> tuple[EcoFlowSensorEntityDescription, ...]:
    descs = [
        EcoFlowSensorEntityDescription(
            key="local_meter_power",
            translation_key="local_meter_power",
            name="Local meter power",
            device_class=SensorDeviceClass.POWER,
            state_class=SensorStateClass.MEASUREMENT,
            native_unit_of_measurement=UnitOfPower.WATT,
            quota_value_fn=_local_meter_value("totalPwr"),
            available_fn=_local_meter_online,
            undocumented=True,
        ),
        EcoFlowSensorEntityDescription(
            key="local_meter_import_energy",
            translation_key="local_meter_import_energy",
            name="Local meter import energy",
            device_class=SensorDeviceClass.ENERGY,
            state_class=SensorStateClass.TOTAL_INCREASING,
            native_unit_of_measurement=UnitOfEnergy.KILO_WATT_HOUR,
            suggested_display_precision=2,
            quota_value_fn=_local_meter_value("totalImportKwh"),
            available_fn=_local_meter_online,
            undocumented=True,
        ),
        EcoFlowSensorEntityDescription(
            key="local_meter_export_energy",
            translation_key="local_meter_export_energy",
            name="Local meter export energy",
            device_class=SensorDeviceClass.ENERGY,
            state_class=SensorStateClass.TOTAL_INCREASING,
            native_unit_of_measurement=UnitOfEnergy.KILO_WATT_HOUR,
            suggested_display_precision=2,
            quota_value_fn=_local_meter_value("totalExportKwh"),
            available_fn=_local_meter_online,
            undocumented=True,
        ),
    ]
    for phase in ("A", "B", "C"):
        low = phase.lower()
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"local_meter_phase_{low}_power",
                translation_key=f"local_meter_phase_{low}_power",
                name=f"Local meter phase {phase} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                entity_registry_enabled_default=False,
                quota_value_fn=_local_meter_value(f"phase{phase}Power"),
                available_fn=_local_meter_online,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"local_meter_phase_{low}_voltage",
                translation_key=f"local_meter_phase_{low}_voltage",
                name=f"Local meter phase {phase} voltage",
                device_class=SensorDeviceClass.VOLTAGE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricPotential.VOLT,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=_local_meter_value(f"phase{phase}Vol"),
                available_fn=_local_meter_online,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"local_meter_phase_{low}_current",
                translation_key=f"local_meter_phase_{low}_current",
                name=f"Local meter phase {phase} current",
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=_local_meter_value(f"phase{phase}Cur"),
                available_fn=_local_meter_online,
                undocumented=True,
            )
        )
    return tuple(descs)


_LOCAL_METER_SENSORS = _local_meter_sensors()

# --- Binary sensors ----------------------------------------------------------

# Fields that report a non-zero code when something is wrong. Deliberately
# conservative (canonical error/fault codes only) to avoid false positives from
# status fields that are non-zero in normal operation; mpptPv*Fault is excluded
# because it reads non-zero simply when a PV string is unplugged.
_FAULT_FIELDS = (
    "errCode",
    "allErrCode",
    "bmsFault",
    "allBmsFault",
    "bmsFaultState",
    "bmsProtectState1",
    "bmsProtectState2",
    "bmsAlarmState1",
    "bmsAlarmState2",
    "gridFault",
    "invFault",
    "invFaultLock",
    "invCommFault",
    "pfcFault",
    "dabFault",
    "dabFaultLock",
    "mpptFaultComm",
)


def _has_fault(quota: Mapping[str, Any]) -> bool | None:
    """True if any fault code is set, False if all clear, None if unknown."""
    present = False
    for key in _FAULT_FIELDS:
        value = quota.get(key)
        if value is None:
            continue
        present = True
        try:
            if int(value) != 0:
                return True
        except (TypeError, ValueError):
            pass
    err_list = quota.get("devErrcodeList")
    if isinstance(err_list, Mapping):
        present = True
        codes = err_list.get("devErrcode")
        if isinstance(codes, list) and any(codes):
            return True
    return False if present else None


_PROBLEM_BINARY_SENSOR = EcoFlowBinarySensorEntityDescription(
    key="problem",
    translation_key="problem",
    name="Problem",
    device_class=BinarySensorDeviceClass.PROBLEM,
    entity_category=EntityCategory.DIAGNOSTIC,
    quota_value_fn=_has_fault,
    available_fn=lambda q: _has_fault(q) is not None,
    undocumented=True,
)

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="battery_charging",
        mqtt_key="powGetBpCms",
        translation_key="battery_charging",
        name="Battery charging",
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        # powGetBpCms is signed: positive = charging (same convention as the
        # battery charge/discharge energy sensors). On while charging.
        value_fn=lambda v: float(v) > 0,
        available_fn=lambda q: "powGetBpCms" in q,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="batt_heating",
        translation_key="batt_heating",
        mqtt_key="bmsBattHeating",
        name="Battery heater",
        device_class=BinarySensorDeviceClass.HEAT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="has_meter",
        translation_key="has_meter",
        mqtt_key="cloudMetter.hasMeter",
        name="Smart meter connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="storm_guard",
        translation_key="storm_guard",
        mqtt_key="stormPatternEnable",
        name="Storm guard",
        entity_category=EntityCategory.DIAGNOSTIC,
        # Only present when the feature is reported; hide it otherwise rather
        # than showing a misleading "off".
        available_fn=lambda q: "stormPatternEnable" in q,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="off_grid",
        translation_key="off_grid",
        mqtt_key="sysOffgrid",
        name="Off-grid mode",
        # On while islanded (running on battery during a grid outage).
        value_fn=bool,
        available_fn=lambda q: "sysOffgrid" in q,
        undocumented=True,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="water_ingress",
        translation_key="water_ingress",
        mqtt_key="waterInFlag",
        name="Water ingress",
        device_class=BinarySensorDeviceClass.PROBLEM,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
        available_fn=lambda q: "waterInFlag" in q,
        undocumented=True,
    ),
    _PROBLEM_BINARY_SENSOR,
)


def _pv_flag_binary_sensors(count: int) -> tuple[EcoFlowBinarySensorEntityDescription, ...]:
    descs = []
    for i in range(1, count + 1):
        suffix = "" if i == 1 else str(i)
        key = f"plugInInfoPv{suffix}Flag" if i > 1 else "plugInInfoPvFlag"
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"pv{i}_connected",
                translation_key=f"pv{i}_connected",
                mqtt_key=key,
                name=f"Solar string {i} connected",
                device_class=BinarySensorDeviceClass.CONNECTIVITY,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
            )
        )
    return tuple(descs)


# --- Switches ----------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="ac1",
        mqtt_key="relay2Onoff",
        translation_key="ac1",
        name="AC socket 1",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgRelay2Onoff": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="ac2",
        mqtt_key="relay3Onoff",
        translation_key="ac2",
        name="AC socket 2",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgRelay3Onoff": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="self_powered",
        translation_key="self_powered",
        mqtt_key="energyStrategyOperateMode.operateSelfPoweredOpen",
        name="Self-powered mode",
        value_fn=bool,
        command_fn=lambda value, _q: {
            "cfgEnergyStrategyOperateMode": {"operateSelfPoweredOpen": bool(value)}
        },
    ),
    EcoFlowSwitchEntityDescription(
        key="feed_in",
        translation_key="feed_in",
        mqtt_key="feedGridMode",
        name="Grid feed-in",
        # EcoFlow's doc claims feedGridMode is "1-off, 2-on", but real Stream
        # firmware is the OPPOSITE (1 = feed-in ON, 2 = OFF), confirmed on
        # hardware -- same unreliable-docs pattern as gridConnectionPower's sign.
        value_fn=lambda v: v == 1,
        command_fn=lambda value, _q: {"cfgFeedGridMode": 1 if value else 2},
    ),
)

# --- Numbers -----------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="max_charge_soc",
        mqtt_key="cmsMaxChgSoc",
        translation_key="max_charge_soc",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_charge_limit_command,
    ),
    EcoFlowNumberEntityDescription(
        key="min_discharge_soc",
        mqtt_key="cmsMinDsgSoc",
        translation_key="min_discharge_soc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_discharge_limit_command,
    ),
    EcoFlowNumberEntityDescription(
        key="backup_reserve",
        mqtt_key="backupReverseSoc",
        translation_key="backup_reserve",
        name="Backup reserve",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=3,
        native_max_value=95,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgBackupReverseSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="feed_in_limit",
        translation_key="feed_in_limit",
        mqtt_key="feedGridModePowLimit",
        name="Feed-in power limit",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=0,
        native_max_value=800,
        native_step=10,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgFeedGridModePowLimit": int(value)},
    ),
)

# --- Lights ------------------------------------------------------------------

# The LED brightness is a 0-100% quota field (0 = off). Exposed as a light so it
# can be dimmed and switched off (writing 0%); the write command (cfgBrightness)
# is reverse-engineered but hardware-confirmed.
_LIGHTS: tuple[EcoFlowLightEntityDescription, ...] = (
    EcoFlowLightEntityDescription(
        key="led",
        translation_key="led",
        mqtt_key="brightness",
        name="LED",
        command_fn=lambda pct, _q: {"cfgBrightness": int(pct)},
        available_fn=lambda q: "brightness" in q,
        undocumented=True,
    ),
)

# --- Base load schedule (Grundlastleistung) ----------------------------------
#
# The app's "Base load power" schedule arrives in the (undocumented) quota field
# ``dayResidentLoadList`` as a list of periods, each a minutes-from-midnight
# window with a watt setpoint:
#
#     "dayResidentLoadList": {"load": [{"startMin": 0, "endMin": 1440, "loadPower": 230}]}
#
# It is NOT in the documented HTTP quota/all response -- it only arrives over
# MQTT -- so the number platform discovers these entities at runtime via
# dynamic_entity_descriptions (which also picks up periods added in the app
# later, without a reload). One Number per period exposes its loadPower; the
# whole list is written back via ``cfgDayResidentLoadList`` (mirrors the quota
# field, same shape). Periods are matched by their time window so the entities
# stay stable when the schedule is reordered or its power changed.

_BASE_LOAD_KEY = "dayResidentLoadList"
_BASE_LOAD_MAX_DEFAULT = 800


def _base_load_periods(quota: Mapping[str, Any]) -> list[Mapping[str, Any]]:
    """Return the configured base-load periods, or an empty list."""
    container = quota.get(_BASE_LOAD_KEY)
    load = container.get("load") if isinstance(container, Mapping) else None
    if not isinstance(load, list):
        return []
    return [p for p in load if isinstance(p, Mapping)]


def _fmt_minutes(minutes: Any) -> str:
    """Format minutes-from-midnight as HH:MM (e.g. 1440 -> '24:00')."""
    try:
        total = int(minutes)
    except (TypeError, ValueError):
        return "??:??"
    return f"{total // 60:02d}:{total % 60:02d}"


def _find_period(quota: Mapping[str, Any], start: Any, end: Any) -> Mapping[str, Any] | None:
    for period in _base_load_periods(quota):
        if period.get("startMin") == start and period.get("endMin") == end:
            return period
    return None


def _base_load_value_fn(start: Any, end: Any):
    def _fn(quota: Mapping[str, Any]) -> float | None:
        period = _find_period(quota, start, end)
        if period is None:
            return None
        power = period.get("loadPower")
        return None if power is None else float(power)

    return _fn


def _base_load_command_fn(start: Any, end: Any):
    def _fn(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
        # Resend the whole schedule with just this window's power changed.
        load = [dict(p) for p in _base_load_periods(quota)]
        for period in load:
            if period.get("startMin") == start and period.get("endMin") == end:
                period["loadPower"] = int(value)
        return {"cfgDayResidentLoadList": {"load": load}}

    return _fn


def _base_load_numbers(quota: Mapping[str, Any]) -> list[EcoFlowNumberEntityDescription]:
    """Build one Number per configured base-load period, from live quota."""
    pow_max = (
        quota.get("powSysAcOutMax")
        or quota.get("feedGridModePowMax")
        or _BASE_LOAD_MAX_DEFAULT
    )
    descs: list[EcoFlowNumberEntityDescription] = []
    for period in _base_load_periods(quota):
        start = period.get("startMin")
        end = period.get("endMin")
        window = f"{_fmt_minutes(start)}–{_fmt_minutes(end)}"
        descs.append(
            EcoFlowNumberEntityDescription(
                key=f"base_load_{start}_{end}",
                translation_key="base_load",
                translation_placeholders={"window": window},
                name=f"Base load {window}",
                device_class=NumberDeviceClass.POWER,
                native_unit_of_measurement=UnitOfPower.WATT,
                native_min_value=0,
                native_max_value=float(pow_max),
                native_step=10,
                mode=NumberMode.BOX,
                quota_value_fn=_base_load_value_fn(start, end),
                command_fn=_base_load_command_fn(start, end),
                available_fn=lambda q, s=start, e=end: _find_period(q, s, e) is not None,
                undocumented=True,
            )
        )
    return descs


# --- Selects -----------------------------------------------------------------

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="operating_mode",
        translation_key="operating_mode",
        options=[_MODE_SELF_POWERED, _MODE_SCHEDULED, _MODE_TOU, _MODE_INTELLIGENT],
        current_option_fn=_current_operating_mode,
        command_fn=_operating_mode_command,
    ),
)


class StreamDevice(EcoFlowDevice):
    """Full-featured Stream device (Ultra / Ultra X / AC / AC Pro / Pro)."""

    model = "EcoFlow Stream"
    sn_prefixes = ("BK",)
    pv_string_count = 4

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Wrap the control params in the Stream routing envelope."""
        return build_stream_command(command)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        # Battery-equipped Stream (SN prefix BK). Checked after the
        # battery-less microinverter variant in the registry.
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        return any(marker in quota for marker in _BATTERY_MARKERS)

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_BATTERY_SENSORS,
                *_BATTERY_ENERGY_SENSORS,
                *_POWERFLOW_SENSORS,
                *_GRID_SENSORS,
                *_PV_SENSORS,
                *_pv_string_sensors(self.pv_string_count),
                *_AC_SENSORS,
                *_ENERGY_SENSORS,
                *_AC_ENERGY_SENSORS,
                *_DIAG_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return [
                *_BINARY_SENSORS,
                *_pv_flag_binary_sensors(self.pv_string_count),
            ]
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        if platform == Platform.LIGHT:
            return list(_LIGHTS)
        return []

    def dynamic_entity_descriptions(
        self, platform: Platform, quota: Mapping[str, Any]
    ) -> list[_EcoFlowDescription]:
        # One Number per configured base-load period (discovered from quota).
        if platform == Platform.NUMBER:
            return list(_base_load_numbers(quota))
        if platform == Platform.SENSOR and _local_meter_bound(quota):
            return list(_LOCAL_METER_SENSORS)
        return []


class StreamMicroinverterDevice(EcoFlowDevice):
    """Stream Microinverter: grid-tie inverter with 2 PV strings, no battery."""

    model = "EcoFlow Stream Microinverter"
    sn_prefixes = ("BK",)
    pv_string_count = 2

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        # A Stream-series SN (BK) that reports grid/PV data but no battery.
        if not any(sn.startswith(p) for p in cls.sn_prefixes):
            return False
        return bool(quota) and not any(m in quota for m in _BATTERY_MARKERS)

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_GRID_SENSORS,
                *_PV_SENSORS,
                *_pv_string_sensors(self.pv_string_count),
                *_ENERGY_SENSORS,
                *_DIAG_SENSORS,
                *_FEED_LIMIT_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_pv_flag_binary_sensors(self.pv_string_count))
        return []


def _meter_phase_sensors() -> tuple[EcoFlowSensorEntityDescription, ...]:
    descs = []
    for phase in ("L1", "L2", "L3"):
        low = phase.lower()
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"phase_{low}_power",
                translation_key=f"phase_{low}_power",
                mqtt_key=f"gridConnectionPower{phase}",
                name=f"Phase {phase} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                value_fn=_round2,
                available_fn=lambda q, k=f"gridConnectionPower{phase}": k in q,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"phase_{low}_voltage",
                translation_key=f"phase_{low}_voltage",
                mqtt_key=f"gridConnectionVol{phase}",
                name=f"Phase {phase} voltage",
                device_class=SensorDeviceClass.VOLTAGE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricPotential.VOLT,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                value_fn=_round2,
                available_fn=lambda q, k=f"gridConnectionVol{phase}": k in q,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"phase_{low}_current",
                translation_key=f"phase_{low}_current",
                mqtt_key=f"gridConnectionAmp{phase}",
                name=f"Phase {phase} current",
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                value_fn=_round2,
                available_fn=lambda q, k=f"gridConnectionAmp{phase}": k in q,
                undocumented=True,
            )
        )
    return tuple(descs)


def _meter_leg_power(role: GridRole):
    def _fn(quota: Mapping[str, Any]) -> float | None:
        value = quota.get("powGetSysGrid")
        if value is None:
            return None
        return role.leg_power(float(value))

    return _fn


_METER_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowIntegralSensorEntityDescription(
        key="grid_import_energy",
        translation_key="grid_import_energy",
        name="Grid import energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_meter_leg_power(GridRole.IMPORT),
        available_fn=lambda q: "powGetSysGrid" in q,
        undocumented=True,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="grid_export_energy",
        translation_key="grid_export_energy",
        name="Grid export energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_meter_leg_power(GridRole.EXPORT),
        available_fn=lambda q: "powGetSysGrid" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_power",
        translation_key="grid_power",
        mqtt_key="powGetSysGrid",
        name="Grid power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        available_fn=lambda q: "powGetSysGrid" in q,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="total_active_energy",
        translation_key="total_active_energy",
        mqtt_key="gridConnectionDataRecord.totalActiveEnergy",
        name="Total active energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.KILO_WATT_HOUR,
        suggested_display_precision=2,
        value_fn=_scale_1000,
        available_fn=lambda q: quota_get(q, "gridConnectionDataRecord.totalActiveEnergy")
        is not None,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="total_reactive_energy",
        translation_key="total_reactive_energy",
        mqtt_key="gridConnectionDataRecord.totalReactiveEnergy",
        name="Total reactive energy",
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement="kvarh",
        suggested_display_precision=2,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
        available_fn=lambda q: quota_get(q, "gridConnectionDataRecord.totalReactiveEnergy")
        is not None,
        undocumented=True,
    ),
    EcoFlowSensorEntityDescription(
        key="power_factor",
        translation_key="power_factor",
        mqtt_key="gridConnectionPowerFactor",
        name="Power factor",
        device_class=SensorDeviceClass.POWER_FACTOR,
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        available_fn=lambda q: "gridConnectionPowerFactor" in q,
        undocumented=True,
    ),
    *_meter_phase_sensors(),
    _GRID_CONNECTION_STATUS_SENSOR,
)

_METER_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    *(
        EcoFlowBinarySensorEntityDescription(
            key=f"phase_{phase.lower()}_connected",
            translation_key=f"phase_{phase.lower()}_connected",
            mqtt_key=f"gridConnectionFlag{phase}",
            name=f"Phase {phase} connected",
            device_class=BinarySensorDeviceClass.PLUG,
            entity_category=EntityCategory.DIAGNOSTIC,
            available_fn=lambda q, k=f"gridConnectionFlag{phase}": k in q,
            undocumented=True,
        )
        for phase in ("L1", "L2", "L3")
    ),
    _PROBLEM_BINARY_SENSOR,
)


class SmartMeterDevice(EcoFlowDevice):
    """EcoFlow Smart Meter: standalone grid meter of the Stream ecosystem.

    Shares the BK series serial space with the Streams but reports its own
    small quota (grid power, per-phase readings, lifetime energy — field set
    confirmed from live issue-#5 diagnostics). Kept as its own class so the
    broad Stream ``BK`` prefix doesn't dress it up as a Stream with ~85 dead
    entities. A LAN-bound meter's readings additionally appear on its Stream
    as the ``localMeter.*`` sensors.
    """

    model = "EcoFlow Smart Meter"
    sn_prefixes = ("BK21",)

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return list(_METER_SENSORS)
        if platform == Platform.BINARY_SENSOR:
            return list(_METER_BINARY_SENSORS)
        return []
