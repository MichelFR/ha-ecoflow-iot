"""EcoFlow Power Kits device module.

Covers the modular off-grid Power Kits system consisting of:
  - Power Hub (BBC_IN charging controller + BBC_OUT DC output)
  - Inverter/Charger (IC_LOW / ichigh)
  - Battery packs (BP2000 / BP5000)
  - Solar charge controller (kitscc / MPPT)
  - AC distribution panel (LD_AC, up to 6 circuits)
  - DC distribution panel (LD_DC, up to 12 circuits)
  - Wireless module

Quota layout: the HTTP ``GetAllQuotaResponse`` nests every field under its
module type and then the module's serial, e.g.
``{"bbcin": {"M1093-DCIN-CA7C3": {"batWatts": 4, ...}}}``. Several modules
share field names (``batWatts``, ``batVol``, ``hs1Temp``, ``dayEnergy``,
``inWatts`` …), so each entity reads its field from *its own* module's view
(see ``_module_view``); descriptions below use bare field names and are
scoped to a module in ``PowerKitsDevice.entity_descriptions``. When a type
has several modules (e.g. two battery packs) the first serial is used.

Command style: ``build_legacy_command(moduleType, operateType, params)``.
BP5000/BP2000 commands use ``moduleType=0`` (broadcast to all battery
packs). BBC_IN uses ``moduleType=15362``. IC_LOW uses ``moduleType=15365``.
"""

from __future__ import annotations

import dataclasses
from collections.abc import Mapping
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.number import NumberDeviceClass, NumberMode
from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorStateClass,
)
from homeassistant.const import (
    EntityCategory,
    Platform,
    UnitOfElectricCurrent,
    UnitOfElectricPotential,
    UnitOfEnergy,
    UnitOfFrequency,
    UnitOfPower,
    UnitOfRatio,
    UnitOfTemperature,
    UnitOfTime,
)

from ..base import (
    ChildDevice,
    EcoFlowBinarySensorEntityDescription,
    EcoFlowButtonEntityDescription,
    EcoFlowDevice,
    EcoFlowNumberEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..commands import build_legacy_command
from ..energy import battery_charge_discharge, solar_energy
from ..helpers import (
    quota_get,
    battery_charging_icon,
    deci as _scale_01a,
    milli as _scale_milli,
    round2 as _round2,
)

# ---------------------------------------------------------------------------
# moduleType constants (from spec table)
# ---------------------------------------------------------------------------
_MT_BBC_IN: int = 15362
_MT_BBC_OUT: int = 15363
_MT_IC_LOW: int = 15365
_MT_BP: int = 0        # BP5000 / BP2000 – broadcast, moduleSn = "0000000000000000"
_MT_WIRELESS: int = 15370


# ---------------------------------------------------------------------------
# Child devices (one per physical module; shown under the main device)
# ---------------------------------------------------------------------------
# The quota map exposes one representative module per type (see module
# docstring), so there is a single battery-pack child rather than one per pack.
# Whole-system values (bmsTotal aggregates, system SoC, energy sensors, the
# broadcast buttons) stay on the main device.
_CHILD_BP = ChildDevice("battery_pack", "Battery pack")
_CHILD_BBC_IN = ChildDevice("bbc_in", "Power Hub DC input")
_CHILD_BBC_OUT = ChildDevice("bbc_out", "Power Hub DC output")
_CHILD_INVERTER = ChildDevice("inverter", "Inverter/charger")
_CHILD_KITSCC = ChildDevice("kitscc", "Solar charge controller")
_CHILD_LDAC = ChildDevice("ldac", "AC distribution panel")
_CHILD_LDDC = ChildDevice("lddc", "DC distribution panel")


# ---------------------------------------------------------------------------
# Value-transform helpers
# ---------------------------------------------------------------------------

def _bool_int(value: Any) -> bool | None:
    if value is None:
        return None
    return bool(int(value))


# ---------------------------------------------------------------------------
# Battery (BP2000 / BP5000) sensors — flat quota namespace
# ---------------------------------------------------------------------------

_BP_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bp_soc",
        mqtt_key="soc",
        name="State of charge",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        # Stepped charging icon while charging, else automatic battery icon.
        icon_fn=lambda q: battery_charging_icon(q.get("soc"), float(q.get("inWatts") or 0) > 0),
    ),
    EcoFlowSensorEntityDescription(
        key="bp_total_soc",
        mqtt_key="totalSoc",
        name="Battery total SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_vol",
        mqtt_key="vol",
        name="Voltage",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_amp",
        mqtt_key="amp",
        name="Current",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_temp",
        mqtt_key="temp",
        name="Temperature",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_max_cell_temp",
        mqtt_key="maxCellTemp",
        name="Max cell temperature",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_min_cell_temp",
        mqtt_key="minCellTemp",
        name="Min cell temperature",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_max_cell_vol",
        mqtt_key="maxCellVol",
        name="Max cell voltage",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_min_cell_vol",
        mqtt_key="minCellVol",
        name="Min cell voltage",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_in_watts",
        mqtt_key="inWatts",
        name="Input power",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_out_watts",
        mqtt_key="outWatts",
        name="Output power",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_remain_time",
        mqtt_key="remainTime",
        name="Remaining time",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_full_cap",
        mqtt_key="fullCap",
        name="Full capacity",
        child_device=_CHILD_BP,
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        # fullCap is in mAh; no direct Wh conversion without voltage,
        # expose as-is in mAh (no standard HA unit for mAh capacity)
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_remain_cap",
        mqtt_key="remainCap",
        name="Remaining capacity",
        child_device=_CHILD_BP,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_design_cap",
        mqtt_key="designCap",
        name="Design capacity",
        child_device=_CHILD_BP,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_chg_set_soc",
        mqtt_key="chgSetSoc",
        name="Charge upper limit",
        child_device=_CHILD_BP,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_dsg_set_soc",
        mqtt_key="dsgSetSoc",
        name="Discharge lower limit",
        child_device=_CHILD_BP,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# ---------------------------------------------------------------------------
# bmsTotal sensors (aggregate across all BP packs)
# ---------------------------------------------------------------------------

_BMS_TOTAL_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="total_in_watts",
        mqtt_key="totalInWatts",
        name="Total battery input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="total_out_watts",
        mqtt_key="totalOutWatts",
        name="Total battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="total_amp",
        mqtt_key="totalAmp",
        name="Total battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_01a,
    ),
    EcoFlowSensorEntityDescription(
        key="total_remain_time",
        mqtt_key="totalRemainTime",
        name="System remaining time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="total_full_cap",
        mqtt_key="totalFullCap",
        name="Total battery capacity",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="oil_start_downline",
        mqtt_key="oilStartDownline",
        name="Generator start SOC lower limit",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="oil_stop_upline",
        mqtt_key="oilStopUpline",
        name="Generator stop SOC upper limit",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_chg_upline",
        mqtt_key="bmsChgUpline",
        name="BMS UPS charge upper limit",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_dsg_downline",
        mqtt_key="bmsDsgDownline",
        name="BMS UPS discharge lower limit",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# BBC_IN (DC input / charging controller) sensors
# ---------------------------------------------------------------------------

_BBCIN_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bbcin_dc_in_watts",
        mqtt_key="dcInWatts",
        name="Power",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_dc_in_vol",
        mqtt_key="dcInVol",
        name="Voltage",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_dc_in_curr",
        mqtt_key="dcInCurr",
        name="Current",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_bat_watts",
        mqtt_key="batWatts",
        name="Battery power",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_bat_vol",
        mqtt_key="batVol",
        name="Battery voltage",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_hs1_temp",
        mqtt_key="hs1Temp",
        name="Radiator 1 temperature",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_hs2_temp",
        mqtt_key="hs2Temp",
        name="Radiator 2 temperature",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_day_energy",
        mqtt_key="dayEnergy",
        name="Daily energy",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_dsg_energy",
        mqtt_key="dsgEnergy",
        name="Total energy",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_chg_max_curr",
        mqtt_key="chgMaxCurr",
        name="Max charge current",
        child_device=_CHILD_BBC_IN,
        device_class=SensorDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
)

# ---------------------------------------------------------------------------
# BBC_OUT (DC output) sensors
# ---------------------------------------------------------------------------

_BBCOUT_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bbcout_ld_out_watts",
        mqtt_key="ldOutWatts",
        name="Power",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_ld_out_vol",
        mqtt_key="ldOutVol",
        name="Voltage",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_ld_out_curr",
        mqtt_key="ldOutCurr",
        name="Current",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_bat_watts",
        mqtt_key="batWatts",
        name="Battery power",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_bat_vol",
        mqtt_key="batVol",
        name="Battery voltage",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_hs1_temp",
        mqtt_key="hs1Temp",
        name="Radiator 1 temperature",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_day_energy",
        mqtt_key="dayEnergy",
        name="Daily energy",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_dsg_energy",
        mqtt_key="dsgEnergy",
        name="Total energy",
        child_device=_CHILD_BBC_OUT,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# IC_LOW (inverter/charger) sensors
# ---------------------------------------------------------------------------

_ICLOW_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="iclow_real_soc",
        mqtt_key="realSoc",
        name="Battery SOC",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_bat_vol",
        mqtt_key="chgBatVol",
        name="Charging voltage",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_bus_vol",
        mqtt_key="busVol",
        name="Bus voltage",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_dc_temp",
        mqtt_key="dcTemp",
        name="DC temperature",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_fan_level",
        mqtt_key="fanLevel",
        name="Fan level",
        child_device=_CHILD_INVERTER,
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_bms_chg_curr",
        mqtt_key="bmsChgCurr",
        name="BMS chargeable current",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
)

# ---------------------------------------------------------------------------
# ichigh (high-power inverter) sensors
# ---------------------------------------------------------------------------

_ICHIGH_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ichigh_in_watts",
        mqtt_key="inWatts",
        name="Input power",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_out_watts",
        mqtt_key="outWatts",
        name="Output power",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_in_vol",
        mqtt_key="inVol",
        name="Input voltage",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_out_vol",
        mqtt_key="outVol",
        name="Output voltage",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_in_curr",
        mqtt_key="inCurr",
        name="Input current",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_out_curr",
        mqtt_key="outCurr",
        name="Output current",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_in_freq",
        mqtt_key="inFreq",
        name="Input frequency",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_out_freq",
        mqtt_key="outFreq",
        name="Output frequency",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_ac_temp",
        mqtt_key="acTemp",
        name="AC temperature",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_input_wh_day",
        mqtt_key="inputWhInDay",
        name="Daily input energy",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_output_wh_day",
        mqtt_key="outputWhInDay",
        name="Daily output energy",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_ac_max_curr",
        mqtt_key="acMaxCurrSer",
        name="Max AC input current",
        child_device=_CHILD_INVERTER,
        device_class=SensorDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Solar charge controller (kitscc) sensors
# ---------------------------------------------------------------------------

_KITSCC_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="kitscc_pv1_in_watts",
        mqtt_key="pv1InWatts",
        name="PV1 input power",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv2_in_watts",
        mqtt_key="pv2InWatts",
        name="PV2 input power",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv1_in_vol",
        mqtt_key="pv1InVol",
        name="PV1 input voltage",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv2_in_vol",
        mqtt_key="pv2InVol",
        name="PV2 input voltage",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv1_in_curr",
        mqtt_key="pv1InCurr",
        name="PV1 input current",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv2_in_curr",
        mqtt_key="pv2InCurr",
        name="PV2 input current",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_bat_watts",
        mqtt_key="batWatts",
        name="Battery power",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_bat_vol",
        mqtt_key="batVol",
        name="Battery voltage",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_bat_curr",
        mqtt_key="batCurr",
        name="Battery current",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_chg_energy",
        mqtt_key="chgEnergy",
        name="Total charged energy",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_day_energy",
        mqtt_key="dayEnergy",
        name="Daily energy",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_hs1_temp",
        mqtt_key="hs1Temp",
        name="Radiator 1 temperature",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_hs2_temp",
        mqtt_key="hs2Temp",
        name="Radiator 2 temperature",
        child_device=_CHILD_KITSCC,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# LD_AC (AC distribution panel) sensors
# ---------------------------------------------------------------------------

_LDAC_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ldac_total_watts",
        mqtt_key="acTotalWatts",
        name="Total power",
        child_device=_CHILD_LDAC,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="ldac_in_vol",
        mqtt_key="acInVol",
        name="Input voltage",
        child_device=_CHILD_LDAC,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ldac_temp1",
        mqtt_key="acTemp1",
        name="PCB temperature 1",
        child_device=_CHILD_LDAC,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ldac_temp2",
        mqtt_key="acTemp2",
        name="PCB temperature 2",
        child_device=_CHILD_LDAC,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)


def _ldac_channel_sensors(count: int = 6) -> tuple[EcoFlowSensorEntityDescription, ...]:
    """Build per-channel power sensors for the AC distribution panel."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(count):
        ch = i + 1
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ldac_ch{ch}_watts",
                name=f"Circuit {ch} power",
                child_device=_CHILD_LDAC,
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=lambda q, idx=i: (
                    q["acChWatt"][idx]
                    if isinstance(q.get("acChWatt"), list) and len(q["acChWatt"]) > idx
                    else None
                ),
                available_fn=lambda q, idx=i: (
                    isinstance(q.get("acChWatt"), list) and len(q["acChWatt"]) > idx
                ),
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ldac_ch{ch}_curr",
                name=f"Circuit {ch} current",
                child_device=_CHILD_LDAC,
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, idx=i: (
                    round(float(q["acChCur"][idx]) / 1000.0, 3)
                    if isinstance(q.get("acChCur"), list) and len(q["acChCur"]) > idx
                    else None
                ),
                available_fn=lambda q, idx=i: (
                    isinstance(q.get("acChCur"), list) and len(q["acChCur"]) > idx
                ),
            )
        )
    return tuple(descs)


# ---------------------------------------------------------------------------
# LD_DC (DC distribution panel) sensors
# ---------------------------------------------------------------------------

_LDDC_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="lddc_total_watts",
        mqtt_key="dcTotalWatts",
        name="Total power",
        child_device=_CHILD_LDDC,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="lddc_in_vol",
        mqtt_key="dcInVol",
        name="Input voltage",
        child_device=_CHILD_LDDC,
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="lddc_temp1",
        mqtt_key="dcTemp1",
        name="PCB temperature 1",
        child_device=_CHILD_LDDC,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="lddc_temp2",
        mqtt_key="dcTemp2",
        name="PCB temperature 2",
        child_device=_CHILD_LDDC,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)


def _lddc_channel_sensors(count: int = 12) -> tuple[EcoFlowSensorEntityDescription, ...]:
    """Build per-channel power sensors for the DC distribution panel."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(count):
        ch = i + 1
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"lddc_ch{ch}_watts",
                name=f"Circuit {ch} power",
                child_device=_CHILD_LDDC,
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, idx=i: (
                    q["dcChWatt"][idx]
                    if isinstance(q.get("dcChWatt"), list) and len(q["dcChWatt"]) > idx
                    else None
                ),
                available_fn=lambda q, idx=i: (
                    isinstance(q.get("dcChWatt"), list) and len(q["dcChWatt"]) > idx
                ),
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"lddc_ch{ch}_curr",
                name=f"Circuit {ch} current",
                child_device=_CHILD_LDDC,
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, idx=i: (
                    round(float(q["dcChCur"][idx]) / 1000.0, 3)
                    if isinstance(q.get("dcChCur"), list) and len(q["dcChCur"]) > idx
                    else None
                ),
                available_fn=lambda q, idx=i: (
                    isinstance(q.get("dcChCur"), list) and len(q["dcChCur"]) > idx
                ),
            )
        )
    return tuple(descs)


# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="battery_charging",
        mqtt_key="inWatts",
        name="Charging",
        child_device=_CHILD_BP,
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        value_fn=lambda v: float(v) > 0,
        available_fn=lambda q: "inWatts" in q,
    ),
    # BBC_IN
    EcoFlowBinarySensorEntityDescription(
        key="bbcin_dc_in_state",
        mqtt_key="dcInState",
        name="Connected",
        child_device=_CHILD_BBC_IN,
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bbcin_chg_pause",
        mqtt_key="chgPause",
        name="Charging paused",
        child_device=_CHILD_BBC_IN,
        device_class=BinarySensorDeviceClass.PROBLEM,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    # IC_LOW
    EcoFlowBinarySensorEntityDescription(
        key="iclow_lspl_flag",
        mqtt_key="lsplFlag",
        name="Low power mode",
        child_device=_CHILD_INVERTER,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_bool_int,
    ),
    # ichigh
    EcoFlowBinarySensorEntityDescription(
        key="ichigh_inv_sw_sta",
        mqtt_key="invSwSta",
        name="Enabled",
        child_device=_CHILD_INVERTER,
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_bool_int,
    ),
    # kitscc
    EcoFlowBinarySensorEntityDescription(
        key="kitscc_pv1_input_flag",
        mqtt_key="pv1InputFlag",
        name="PV1 input active",
        child_device=_CHILD_KITSCC,
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="kitscc_pv2_input_flag",
        mqtt_key="pv2InputFlag",
        name="PV2 input active",
        child_device=_CHILD_KITSCC,
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    # BP
    EcoFlowBinarySensorEntityDescription(
        key="bp_ptc_heating_flag",
        mqtt_key="ptcHeatingFlag",
        name="PTC heating",
        child_device=_CHILD_BP,
        device_class=BinarySensorDeviceClass.HEAT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bp_ups_flag",
        mqtt_key="upsFlag",
        name="UPS mode",
        child_device=_CHILD_BP,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bp_bms_fault",
        mqtt_key="bmsFault",
        name="BMS permanent fault",
        child_device=_CHILD_BP,
        device_class=BinarySensorDeviceClass.PROBLEM,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
)

# ---------------------------------------------------------------------------
# Buttons (one-shot actions)
# ---------------------------------------------------------------------------

# Every Power Kits command in the spec carries a ``moduleSn``: all zeros for the
# battery-pack broadcast (moduleType 0), otherwise the target module's serial.
_BP_BROADCAST_SN = "0000000000000000"
# Placeholder replaced with the device's own serial in ``build_command``.
_SELF_SN = "__self__"


def _kit_command(
    module_type: int, operate_type: str, params: dict[str, Any], module_sn: str
) -> dict[str, Any]:
    return {**build_legacy_command(module_type, operate_type, params), "moduleSn": module_sn}


_BUTTONS: tuple[EcoFlowButtonEntityDescription, ...] = (
    # Spec: "Triggering comprehensive data report" (moduleSn = main device SN).
    EcoFlowButtonEntityDescription(
        key="full_data_push",
        name="Refresh data",
        icon="mdi:refresh",
        entity_category=EntityCategory.DIAGNOSTIC,
        command_fn=lambda _v, _q: _kit_command(
            _MT_WIRELESS, "fullIotDataPush", {"times": 1}, _SELF_SN
        ),
    ),
    # Spec: "Clearing charging errors" (enable 1), broadcast to all battery packs.
    EcoFlowButtonEntityDescription(
        key="clear_charging_errors",
        name="Clear charging errors",
        icon="mdi:alert-remove",
        command_fn=lambda _v, _q: _kit_command(
            _MT_BP, "clearError", {"enable": 1}, _BP_BROADCAST_SN
        ),
    ),
    # Spec: "BP off" (enable 1), broadcast to all battery packs. Cuts power to
    # the whole kit, so it is disabled by default.
    EcoFlowButtonEntityDescription(
        key="battery_packs_off",
        name="Turn off battery packs",
        icon="mdi:battery-off",
        entity_registry_enabled_default=False,
        command_fn=lambda _v, _q: _kit_command(
            _MT_BP, "powerOff", {"enable": 1}, _BP_BROADCAST_SN
        ),
    ),
)


# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    # BBC_OUT DC output on/off  (moduleType=15362 per spec BBC_OUT section; same for BBC_IN)
    EcoFlowSwitchEntityDescription(
        key="bbcout_dc_out",
        mqtt_key="dcOutSta",
        name="Enabled",
        child_device=_CHILD_BBC_OUT,
        value_fn=_bool_int,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BBC_IN, "dischgParaSet", {"swSta": 1 if value else 0}
        ),
    ),
    # IC_LOW AC power on/off
    EcoFlowSwitchEntityDescription(
        key="iclow_power_on",
        mqtt_key="powerOn",
        name="AC output",
        child_device=_CHILD_INVERTER,
        value_fn=_bool_int,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_IC_LOW,
            "dischgIcParaSet",
            {
                "acCurrMaxSet": 255,
                "powerOn": 1 if value else 0,
                "acChgDisa": 255,
                "acFrequencySet": 255,
                "acVolSet": 255,
            },
        ),
    ),
    # IC_LOW passthrough (grid priority) mode
    EcoFlowSwitchEntityDescription(
        key="iclow_pass_by_mode",
        mqtt_key="passByModeEn",
        name="Grid power priority (passthrough)",
        child_device=_CHILD_INVERTER,
        value_fn=lambda v: int(v) == 1,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_IC_LOW,
            "dsgIcParaSet",
            {
                "dsgLowPwrEn": 255,
                "pfcDsgModeEn": 255,
                "passByCurrMax": 255,
                "passByModeEn": 1 if value else 2,
            },
        ),
    ),
    # BBC_IN charging pause
    EcoFlowSwitchEntityDescription(
        key="bbcin_chg_pause_ctrl",
        mqtt_key="chgPause",
        name="Pause charging",
        child_device=_CHILD_BBC_IN,
        value_fn=_bool_int,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BBC_IN,
            "chgParaSet",
            {
                "chgPause": 1 if value else 0,
                "maxChgCurr": -1,
                "altVoltLmtEn": 255,
                "shakeCtrlDisable": 255,
                "altCableUnit": 255,
                "altCableLen": -1,
                "altVoltLmt": 65535,
            },
        ),
    ),
    # BP PTC heating by discharge
    EcoFlowSwitchEntityDescription(
        key="bp_ptc_dsg_heat",
        mqtt_key="ptcAllowFlag",
        name="Heating (by discharging)",
        child_device=_CHILD_BP,
        value_fn=_bool_int,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BP, "ptcDsgCale", {"enable": 1 if value else 0}
        ),
    ),
)

# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    # BP charge upper limit (range: 50–100)
    EcoFlowNumberEntityDescription(
        key="bp_max_chg_soc",
        mqtt_key="chgSetSoc",
        name="Charge upper limit",
        child_device=_CHILD_BP,
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BP, "socUpperLimit", {"maxChgSoc": int(value)}
        ),
    ),
    # BP discharge lower limit (range: 0–50)
    EcoFlowNumberEntityDescription(
        key="bp_min_dsg_soc",
        mqtt_key="dsgSetSoc",
        name="Discharge lower limit",
        child_device=_CHILD_BP,
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        native_min_value=0,
        native_max_value=50,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BP, "socLowerLimit", {"minDsgSoc": int(value)}
        ),
    ),
    # LCD standby time (seconds; 0 = never off)
    EcoFlowNumberEntityDescription(
        key="bp_lcd_standby",
        mqtt_key="lcdStandbyMin",
        name="Display standby time",
        native_unit_of_measurement=UnitOfTime.SECONDS,
        native_min_value=0,
        native_max_value=3600,
        native_step=30,
        mode=NumberMode.BOX,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BP, "lcdStandbyMin", {"minute": int(value)}
        ),
    ),
    # Smart generator start SOC lower limit
    EcoFlowNumberEntityDescription(
        key="gen_start_soc",
        mqtt_key="oilStartDownline",
        name="Generator start SOC",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BP, "oilStartDownLimit", {"soc": int(value)}
        ),
    ),
    # Smart generator stop SOC upper limit
    EcoFlowNumberEntityDescription(
        key="gen_stop_soc",
        mqtt_key="oilStopUpline",
        name="Generator stop SOC",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BP, "oilStopUpLimit", {"soc": int(value)}
        ),
    ),
    # BBC_IN DC output voltage tag (0=12V, 1=24V) — treated as a number here
    # (could be a Select, but spec only documents 0/1 integer param)
    EcoFlowNumberEntityDescription(
        key="bbcin_vol_tag",
        mqtt_key="cfgVolTag",
        name="DC output voltage tag (0=12V 1=24V)",
        native_min_value=0,
        native_max_value=1,
        native_step=1,
        mode=NumberMode.BOX,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BBC_IN, "dischgParaSet", {"volTag": int(value)}
        ),
    ),
    # IC_LOW AC input current max (range: 1–23 A)
    EcoFlowNumberEntityDescription(
        key="iclow_ac_curr_max",
        mqtt_key="acMaxCurrSer",
        name="AC input current limit",
        child_device=_CHILD_INVERTER,
        device_class=NumberDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        native_min_value=1,
        native_max_value=23,
        native_step=1,
        mode=NumberMode.SLIDER,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_IC_LOW, "dischgIcParaSet", {"acCurrMaxSet": int(value)}
        ),
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

# SN prefixes observed in spec examples:
#   M106Z  – main hub / wireless controller SN
#   M109Z  – BP5000 battery / IC_LOW module
#   M102Z  – BP2000 battery
#   M10EZ  – LD_AC distribution panel
#   M10E1  – LD_DC distribution panel
#   M106W  – wireless module (M106WAB4Z…)
# The app keys Power Kits on the family code "M10" (M20/M3H are other products);
# this covers all SKUs above (M106Z/M109Z/M102Z/M10EZ/M10E1/M106W) and variants.
_POWER_KITS_SN_PREFIXES = ("M10",)

# Distinctive quota key present in all Power Kits deployments
_POWER_KITS_MARKER = "totalSoc"

_ENERGY_SENSORS = (
    solar_energy("pv1InWatts", "pv2InWatts"),
    *battery_charge_discharge(["totalInWatts"], ["totalOutWatts"]),
)


# ---------------------------------------------------------------------------
# Module scoping
# ---------------------------------------------------------------------------

# Quota module keys per child device (see the spec's GetAllQuotaResponse).
_MODULES_BY_CHILD: dict[str, tuple[str, ...]] = {
    "battery_pack": ("bp2000", "bp5000"),
    "bbc_in": ("bbcin",),
    "bbc_out": ("bbcout",),
    "kitscc": ("kitscc",),
    "ldac": ("ldac",),
    "lddc": ("lddc",),
}
# Entities whose module isn't implied by their child device. The inverter child
# holds both IC_LOW and ichigh; the spec lists acMaxCurrSer / passByModeEn /
# powerOn under ichigh even though those entities carry an ``iclow_`` key.
_MODULES_BY_KEY: dict[str, tuple[str, ...]] = {
    "iclow_ac_curr_max": ("ichigh",),
    "iclow_pass_by_mode": ("ichigh",),
    "iclow_power_on": ("ichigh",),
    "bbcin_vol_tag": ("bbcout",),  # cfgVolTag is reported by bbcout
    "bp_lcd_standby": ("bp2000", "bp5000"),
    "solar_energy": ("kitscc",),
}
_BMS_TOTAL = ("bmsTotal",)


def _modules_for(desc: _EcoFlowDescription) -> tuple[str, ...] | None:
    """Return the quota module(s) an entity reads from, or None (whole quota)."""
    if desc.key in _MODULES_BY_KEY:
        return _MODULES_BY_KEY[desc.key]
    child = desc.child_device
    if child is not None:
        if child.key == "inverter":
            return ("ichigh",) if desc.key.startswith("ichigh_") else ("iclow",)
        return _MODULES_BY_CHILD.get(child.key)
    if isinstance(desc, EcoFlowButtonEntityDescription):
        return None
    # Remaining main-device entities are system totals from bmsTotal.
    return _BMS_TOTAL


def _module_view(quota: Mapping[str, Any], modules: tuple[str, ...]) -> Mapping[str, Any]:
    """Return the field map of the first present module of the given types.

    Handles ``{type: {moduleSn: {...}}}`` (HTTP), ``{type: {...}}`` and
    flattened dotted keys (``"type.moduleSn.field"`` / ``"type.field"``). If no
    module data is found at all, the whole quota is returned so a flat layout
    (bare field names) still resolves as before.
    """
    for module in modules:
        node = quota.get(module)
        if isinstance(node, Mapping) and node:
            per_sn = [node[k] for k in sorted(node) if isinstance(node[k], Mapping)]
            if per_sn and len(per_sn) == len(node):
                return per_sn[0]
            return node
        prefix = f"{module}."
        flat = {k[len(prefix):]: v for k, v in quota.items() if k.startswith(prefix)}
        if flat:
            sns = sorted({k.split(".", 1)[0] for k in flat if "." in k})
            if sns and all("." in k for k in flat):
                lead = f"{sns[0]}."
                return {k[len(lead):]: v for k, v in flat.items() if k.startswith(lead)}
            return flat
    return quota


def _scoped(desc: _EcoFlowDescription) -> _EcoFlowDescription:
    """Bind every quota-reading callable of ``desc`` to its module's view."""
    modules = _modules_for(desc)
    if modules is None:
        return desc

    def view(q: Mapping[str, Any]) -> Mapping[str, Any]:
        return _module_view(q, modules)

    changes: dict[str, Any] = {}
    if desc.quota_value_fn is not None:
        inner_q = desc.quota_value_fn
        changes["quota_value_fn"] = lambda q: inner_q(view(q))
    elif desc.mqtt_key:
        field, value_fn = desc.mqtt_key, desc.value_fn

        def _read(q: Mapping[str, Any]) -> Any:
            value = quota_get(view(q), field)
            if value is None or value_fn is None:
                return value
            return value_fn(value)

        changes["quota_value_fn"] = _read
    for name in ("available_fn", "icon_fn", "attributes_fn", "power_fn"):
        fn = getattr(desc, name, None)
        if fn is not None:
            changes[name] = lambda q, _fn=fn: _fn(view(q))
    command_fn = getattr(desc, "command_fn", None)
    if command_fn is not None:
        changes["command_fn"] = lambda v, q, _fn=command_fn: _fn(v, view(q))
    return dataclasses.replace(desc, **changes)


class PowerKitsDevice(EcoFlowDevice):
    """EcoFlow Power Kits modular off-grid power system."""

    model = "EcoFlow Power Kits"
    sn_prefixes: tuple[str, ...] = _POWER_KITS_SN_PREFIXES

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        # Also recognise by a distinctive quota field
        if not quota:
            return False
        bms_total = quota.get("bmsTotal")
        return _POWER_KITS_MARKER in quota or (
            isinstance(bms_total, Mapping) and _POWER_KITS_MARKER in bms_total
        )

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        """Return the platform's descriptions, each scoped to its quota module."""
        return [_scoped(d) for d in self._unscoped_descriptions(platform)]

    def _unscoped_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:  # noqa: C901
        if platform == Platform.SENSOR:
            return [
                # Battery packs (bmsTotal + individual BP)
                *_BMS_TOTAL_SENSORS,
                *_BP_SENSORS,
                # Power hub BBC_IN (DC input)
                *_BBCIN_SENSORS,
                # Power hub BBC_OUT (DC output)
                *_BBCOUT_SENSORS,
                # Inverter/charger IC_LOW
                *_ICLOW_SENSORS,
                # Inverter ichigh
                *_ICHIGH_SENSORS,
                # Solar charge controller
                *_KITSCC_SENSORS,
                # AC distribution panel
                *_LDAC_SENSORS,
                *_ldac_channel_sensors(6),
                # DC distribution panel
                *_LDDC_SENSORS,
                *_lddc_channel_sensors(12),
                *_ENERGY_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.BUTTON:
            return list(_BUTTONS)
        return []

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Fill a ``moduleSn`` placeholder with this device's serial."""
        if command.get("moduleSn") == _SELF_SN:
            return {**command, "moduleSn": self.sn}
        return command
