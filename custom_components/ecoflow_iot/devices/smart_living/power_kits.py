"""EcoFlow Power Kits device module.

Covers the modular off-grid Power Kits system consisting of:
  - Power Hub (BBC_IN charging controller + BBC_OUT DC output)
  - Inverter/Charger (IC_LOW / ichigh)
  - Battery packs (BP2000 / BP5000)
  - Solar charge controller (kitscc / MPPT)
  - AC distribution panel (LD_AC, up to 6 circuits)
  - DC distribution panel (LD_DC, up to 12 circuits)
  - Wireless module

Quota keys follow the flat namespace reported by MQTT and the HTTP
``GetAllQuotaResponse`` endpoint. Multi-module fields (e.g. ``bbcin``,
``bbcout``, ``iclow``, ``bp2000``, ``ldac``, ``lddc``, ``kitscc``) arrive
nested under the module's serial number; in the flattened quota map used
here they are accessed as bare field names (the coordinator is expected to
flatten one representative module per type, or expose the first module's
values).

Command style: ``build_legacy_command(moduleType, operateType, params)``.
BP5000/BP2000 commands use ``moduleType=0`` (broadcast to all battery
packs). BBC_IN uses ``moduleType=15362``. IC_LOW uses ``moduleType=15365``.
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

from ..base import (
    EcoFlowBinarySensorEntityDescription,
    EcoFlowDevice,
    EcoFlowNumberEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..commands import build_legacy_command
from ..energy import battery_charge_discharge, solar_energy
from ..helpers import (
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
        name="Battery state of charge",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        # Stepped charging icon while charging, else automatic battery icon.
        icon_fn=lambda q: battery_charging_icon(q.get("soc"), float(q.get("inWatts") or 0) > 0),
    ),
    EcoFlowSensorEntityDescription(
        key="bp_total_soc",
        mqtt_key="totalSoc",
        name="Battery total SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_vol",
        mqtt_key="vol",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_amp",
        mqtt_key="amp",
        name="Battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_temp",
        mqtt_key="temp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_max_cell_temp",
        mqtt_key="maxCellTemp",
        name="Battery max cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_min_cell_temp",
        mqtt_key="minCellTemp",
        name="Battery min cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_max_cell_vol",
        mqtt_key="maxCellVol",
        name="Battery max cell voltage",
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
        name="Battery min cell voltage",
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
        name="Battery input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_out_watts",
        mqtt_key="outWatts",
        name="Battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_remain_time",
        mqtt_key="remainTime",
        name="Battery remaining time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_full_cap",
        mqtt_key="fullCap",
        name="Battery full capacity",
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
        name="Battery remaining capacity",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_design_cap",
        mqtt_key="designCap",
        name="Battery design capacity",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_chg_set_soc",
        mqtt_key="chgSetSoc",
        name="Battery charge upper limit",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_dsg_set_soc",
        mqtt_key="dsgSetSoc",
        name="Battery discharge lower limit",
        native_unit_of_measurement=PERCENTAGE,
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
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="oil_stop_upline",
        mqtt_key="oilStopUpline",
        name="Generator stop SOC upper limit",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_chg_upline",
        mqtt_key="bmsChgUpline",
        name="BMS UPS charge upper limit",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_dsg_downline",
        mqtt_key="bmsDsgDownline",
        name="BMS UPS discharge lower limit",
        native_unit_of_measurement=PERCENTAGE,
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
        name="DC input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_dc_in_vol",
        mqtt_key="dcInVol",
        name="DC input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_dc_in_curr",
        mqtt_key="dcInCurr",
        name="DC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_bat_watts",
        mqtt_key="batWatts",
        name="BBC IN battery power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_bat_vol",
        mqtt_key="batVol",
        name="BBC IN battery voltage",
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
        name="BBC IN radiator 1 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_hs2_temp",
        mqtt_key="hs2Temp",
        name="BBC IN radiator 2 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_day_energy",
        mqtt_key="dayEnergy",
        name="DC input daily energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_dsg_energy",
        mqtt_key="dsgEnergy",
        name="DC input total energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcin_chg_max_curr",
        mqtt_key="chgMaxCurr",
        name="DC input max charge current",
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
        name="DC hub output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_ld_out_vol",
        mqtt_key="ldOutVol",
        name="DC hub output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_ld_out_curr",
        mqtt_key="ldOutCurr",
        name="DC hub output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_bat_watts",
        mqtt_key="batWatts",
        name="BBC OUT battery power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_bat_vol",
        mqtt_key="batVol",
        name="BBC OUT battery voltage",
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
        name="BBC OUT radiator 1 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_day_energy",
        mqtt_key="dayEnergy",
        name="DC output daily energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bbcout_dsg_energy",
        mqtt_key="dsgEnergy",
        name="DC output total energy",
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
        name="Inverter battery SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_bat_vol",
        mqtt_key="chgBatVol",
        name="Inverter charging voltage",
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
        name="Inverter bus voltage",
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
        name="Inverter DC temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_fan_level",
        mqtt_key="fanLevel",
        name="Inverter fan level",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="iclow_bms_chg_curr",
        mqtt_key="bmsChgCurr",
        name="BMS chargeable current",
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
        name="Inverter input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_out_watts",
        mqtt_key="outWatts",
        name="Inverter output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_in_vol",
        mqtt_key="inVol",
        name="Inverter input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_out_vol",
        mqtt_key="outVol",
        name="Inverter output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_in_curr",
        mqtt_key="inCurr",
        name="Inverter input current",
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
        name="Inverter output current",
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
        name="Inverter input frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_out_freq",
        mqtt_key="outFreq",
        name="Inverter output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_ac_temp",
        mqtt_key="acTemp",
        name="Inverter AC temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_input_wh_day",
        mqtt_key="inputWhInDay",
        name="Inverter daily input energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_output_wh_day",
        mqtt_key="outputWhInDay",
        name="Inverter daily output energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ichigh_ac_max_curr",
        mqtt_key="acMaxCurrSer",
        name="Inverter max AC input current",
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
        name="Solar 1 input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv2_in_watts",
        mqtt_key="pv2InWatts",
        name="Solar 2 input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv1_in_vol",
        mqtt_key="pv1InVol",
        name="Solar 1 input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv2_in_vol",
        mqtt_key="pv2InVol",
        name="Solar 2 input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_pv1_in_curr",
        mqtt_key="pv1InCurr",
        name="Solar 1 input current",
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
        name="Solar 2 input current",
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
        name="Solar controller battery power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_bat_vol",
        mqtt_key="batVol",
        name="Solar controller battery voltage",
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
        name="Solar controller battery current",
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
        name="Solar total charged energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_day_energy",
        mqtt_key="dayEnergy",
        name="Solar daily energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_hs1_temp",
        mqtt_key="hs1Temp",
        name="Solar controller radiator 1 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="kitscc_hs2_temp",
        mqtt_key="hs2Temp",
        name="Solar controller radiator 2 temperature",
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
        name="AC panel total power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="ldac_in_vol",
        mqtt_key="acInVol",
        name="AC panel input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="ldac_temp1",
        mqtt_key="acTemp1",
        name="AC panel PCB temperature 1",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ldac_temp2",
        mqtt_key="acTemp2",
        name="AC panel PCB temperature 2",
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
                name=f"AC circuit {ch} power",
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
                name=f"AC circuit {ch} current",
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
        name="DC panel total power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="lddc_in_vol",
        mqtt_key="dcInVol",
        name="DC panel input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_milli,
    ),
    EcoFlowSensorEntityDescription(
        key="lddc_temp1",
        mqtt_key="dcTemp1",
        name="DC panel PCB temperature 1",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="lddc_temp2",
        mqtt_key="dcTemp2",
        name="DC panel PCB temperature 2",
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
                name=f"DC circuit {ch} power",
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
                name=f"DC circuit {ch} current",
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
        name="Battery charging",
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        value_fn=lambda v: float(v) > 0,
        available_fn=lambda q: "inWatts" in q,
    ),
    # BBC_IN
    EcoFlowBinarySensorEntityDescription(
        key="bbcin_dc_in_state",
        mqtt_key="dcInState",
        name="DC input connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bbcin_chg_pause",
        mqtt_key="chgPause",
        name="DC input charging paused",
        device_class=BinarySensorDeviceClass.PROBLEM,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    # IC_LOW
    EcoFlowBinarySensorEntityDescription(
        key="iclow_lspl_flag",
        mqtt_key="lsplFlag",
        name="Inverter low power mode",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_bool_int,
    ),
    # ichigh
    EcoFlowBinarySensorEntityDescription(
        key="ichigh_inv_sw_sta",
        mqtt_key="invSwSta",
        name="Inverter enabled",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_bool_int,
    ),
    # kitscc
    EcoFlowBinarySensorEntityDescription(
        key="kitscc_pv1_input_flag",
        mqtt_key="pv1InputFlag",
        name="Solar 1 input active",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="kitscc_pv2_input_flag",
        mqtt_key="pv2InputFlag",
        name="Solar 2 input active",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
    ),
    # BP
    EcoFlowBinarySensorEntityDescription(
        key="bp_ptc_heating_flag",
        mqtt_key="ptcHeatingFlag",
        name="Battery PTC heating",
        device_class=BinarySensorDeviceClass.HEAT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bp_ups_flag",
        mqtt_key="upsFlag",
        name="Battery UPS mode",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_bool_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bp_bms_fault",
        mqtt_key="bmsFault",
        name="BMS permanent fault",
        device_class=BinarySensorDeviceClass.PROBLEM,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bool_int,
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
        name="DC output",
        value_fn=_bool_int,
        command_fn=lambda value, _q: build_legacy_command(
            _MT_BBC_IN, "dischgParaSet", {"swSta": 1 if value else 0}
        ),
    ),
    # IC_LOW AC power on/off
    EcoFlowSwitchEntityDescription(
        key="iclow_power_on",
        mqtt_key="powerOn",
        name="AC inverter output",
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
        name="Pause DC charging",
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
        name="Battery heating (by discharging)",
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
        name="Battery charge upper limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
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
        name="Battery discharge lower limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
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
        native_unit_of_measurement=PERCENTAGE,
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
        native_unit_of_measurement=PERCENTAGE,
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
_POWER_KITS_SN_PREFIXES = ("M106Z", "M109Z", "M102Z", "M10EZ", "M10E1", "M106W")

# Distinctive quota key present in all Power Kits deployments
_POWER_KITS_MARKER = "totalSoc"

_ENERGY_SENSORS = (
    solar_energy("pv1InWatts", "pv2InWatts"),
    *battery_charge_discharge(["totalInWatts"], ["totalOutWatts"]),
)


class PowerKitsDevice(EcoFlowDevice):
    """EcoFlow Power Kits modular off-grid power system."""

    model = "EcoFlow Power Kits"
    sn_prefixes: tuple[str, ...] = _POWER_KITS_SN_PREFIXES

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        # Also recognise by a distinctive quota field
        return bool(quota) and _POWER_KITS_MARKER in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:  # noqa: C901
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
        return []
