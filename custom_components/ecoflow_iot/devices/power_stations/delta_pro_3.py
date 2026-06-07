"""EcoFlow Delta Pro 3 power station device definition.

Field names and units follow the public quota schema documented for the
Delta Pro 3 (HTTP GetAllQuotaResponse / MQTT Set & Set Reply tables).
All set commands use the binary-protocol envelope identical to the Stream
family (cmdId=17, cmdFunc=254, dirDest=1, dirSrc=1, dest=2, needAck=true).
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
    EcoFlowSelectEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..commands import build_stream_command
from ..helpers import (
    round2 as _round2,
)


# flowInfo* fields: 0 = off, 2 = on
def _flow_is_on(value: Any) -> bool:
    return int(value) == 2 if value is not None else False


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_BATTERY_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="cms_batt_soc",
        mqtt_key="cmsBattSoc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_batt_soc",
        mqtt_key="bmsBattSoc",
        name="Battery (BMS)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_temp",
        mqtt_key="bmsMaxCellTemp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_temp",
        mqtt_key="bmsMinCellTemp",
        name="Battery minimum cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_design_cap",
        mqtt_key="bmsDesignCap",
        name="Battery design capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_chg_rem_time",
        mqtt_key="cmsChgRemTime",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_dsg_rem_time",
        mqtt_key="cmsDsgRemTime",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_chg_rem_time",
        mqtt_key="bmsChgRemTime",
        name="Main battery time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_dsg_rem_time",
        mqtt_key="bmsDsgRemTime",
        name="Main battery time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_max_chg_soc",
        mqtt_key="cmsMaxChgSoc",
        name="Charge limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_min_dsg_soc",
        mqtt_key="cmsMinDsgSoc",
        name="Discharge limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="energy_backup_start_soc",
        mqtt_key="energyBackupStartSoc",
        name="Backup reserve level",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

_POWER_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="pow_in_sum_w",
        mqtt_key="powInSumW",
        name="Total input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_out_sum_w",
        mqtt_key="powOutSumW",
        name="Total output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_ac_hv_out",
        mqtt_key="powGetAcHvOut",
        name="High-voltage AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_ac",
        mqtt_key="powGetAc",
        name="AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_ac_lv_out",
        mqtt_key="powGetAcLvOut",
        name="Low-voltage AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_ac_lv_tt30_out",
        mqtt_key="powGetAcLvTt30Out",
        name="Low-voltage AC TT-30 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_ac_in",
        mqtt_key="powGetAcIn",
        name="AC input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_pv_h",
        mqtt_key="powGetPvH",
        name="High-voltage solar power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_pv_l",
        mqtt_key="powGetPvL",
        name="Low-voltage solar power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_typec1",
        mqtt_key="powGetTypec1",
        name="USB-C port 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_typec2",
        mqtt_key="powGetTypec2",
        name="USB-C port 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_12v",
        mqtt_key="powGet12v",
        name="12V output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_24v",
        mqtt_key="powGet24v",
        name="24V output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_5p8",
        mqtt_key="powGet5p8",
        name="Power In/Out port power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_qcusb1",
        mqtt_key="powGetQcusb1",
        name="USB-A port 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_qcusb2",
        mqtt_key="powGetQcusb2",
        name="USB-A port 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_4p81",
        mqtt_key="powGet4p81",
        name="Extra battery port 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_4p82",
        mqtt_key="powGet4p82",
        name="Extra battery port 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
)

_INPUT_CONFIG_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="plug_in_info_ac_in_feq",
        mqtt_key="plugInInfoAcInFeq",
        name="AC input frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_pv_l_chg_amp_max",
        mqtt_key="plugInInfoPvLChgAmpMax",
        name="Low-voltage solar max charge current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_pv_l_dc_amp_max",
        mqtt_key="plugInInfoPvLDcAmpMax",
        name="Low-voltage solar max DC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_pv_l_chg_vol_max",
        mqtt_key="plugInInfoPvLChgVolMax",
        name="Low-voltage solar max charge voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_pv_h_chg_amp_max",
        mqtt_key="plugInInfoPvHChgAmpMax",
        name="High-voltage solar max charge current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_pv_h_dc_amp_max",
        mqtt_key="plugInInfoPvHDcAmpMax",
        name="High-voltage solar max DC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_pv_h_chg_vol_max",
        mqtt_key="plugInInfoPvHChgVolMax",
        name="High-voltage solar max charge voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_ac_in_chg_pow_max",
        mqtt_key="plugInInfoAcInChgPowMax",
        name="AC max charge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_5p8_chg_pow_max",
        mqtt_key="plugInInfo5p8ChgPowMax",
        name="Power In/Out port max charge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_5p8_dsg_pow_max",
        mqtt_key="plugInInfo5p8DsgPowMax",
        name="Power In/Out port max discharge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_in_info_ac_out_dsg_pow_max",
        mqtt_key="plugInInfoAcOutDsgPowMax",
        name="AC max discharge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

_DIAG_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ac_out_freq",
        mqtt_key="acOutFreq",
        name="AC output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="screen_off_time",
        mqtt_key="screenOffTime",
        name="Screen timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_standby_time",
        mqtt_key="acStandbyTime",
        name="AC standby timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="dc_standby_time",
        mqtt_key="dcStandbyTime",
        name="DC standby timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="dev_standby_time",
        mqtt_key="devStandbyTime",
        name="Device standby timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_oil_on_soc",
        mqtt_key="cmsOilOnSoc",
        name="Smart Generator auto-start SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_oil_off_soc",
        mqtt_key="cmsOilOffSoc",
        name="Smart Generator auto-stop SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="generator_pv_hybrid_mode_soc_max",
        mqtt_key="generatorPvHybridModeSocMax",
        name="Generator/solar hybrid mode max SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_always_on_mini_soc",
        mqtt_key="acAlwaysOnMiniSoc",
        name="AC always-on minimum SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="lcd_light",
        mqtt_key="lcdLight",
        name="Screen brightness",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_chg_dsg_state",
        mqtt_key="cmsChgDsgState",
        name="Charge/discharge state",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="multi_bp_chg_dsg_mode",
        mqtt_key="multiBpChgDsgMode",
        name="Multi-battery charge/discharge mode",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="pv_h_connected",
        mqtt_key="plugInInfoPvHFlag",
        name="High-voltage solar connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pv_l_connected",
        mqtt_key="plugInInfoPvLFlag",
        name="Low-voltage solar connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac_in_connected",
        mqtt_key="plugInInfoAcInFlag",
        name="AC charger connected",
        device_class=BinarySensorDeviceClass.PLUG,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac_charger_connected",
        mqtt_key="plugInInfoAcChargerFlag",
        name="AC charger plugged",
        device_class=BinarySensorDeviceClass.PLUG,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pv_h_charger_connected",
        mqtt_key="plugInInfoPvHChargerFlag",
        name="High-voltage solar charger connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pv_l_charger_connected",
        mqtt_key="plugInInfoPvLChargerFlag",
        name="Low-voltage solar charger connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="4p81_connected",
        mqtt_key="plugInInfo4p81InFlag",
        name="Extra battery port 1 connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="4p82_connected",
        mqtt_key="plugInInfo4p82InFlag",
        name="Extra battery port 2 connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="5p8_connected",
        mqtt_key="plugInInfo5p8Flag",
        name="Power In/Out port connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="cms_bms_run_state",
        mqtt_key="cmsBmsRunState",
        name="Battery management system on",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="energy_backup_en",
        mqtt_key="energyBackupEn",
        name="Backup reserve enabled",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="dev_sleep_state",
        mqtt_key="devSleepState",
        name="Device sleeping",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="generator_pv_hybrid_mode",
        mqtt_key="generatorPvHybridModeOpen",
        name="Generator/solar hybrid mode",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="generator_care_mode",
        mqtt_key="generatorCareModeOpen",
        name="Generator night care mode",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="cms_oil_self_start",
        mqtt_key="cmsOilSelfStart",
        name="Smart Generator auto start/stop",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="xboost_en",
        mqtt_key="xboostEn",
        name="X-Boost",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac_energy_saving_open",
        mqtt_key="acEnergySavingOpen",
        name="AC energy-saving mode",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="en_beep",
        mqtt_key="enBeep",
        name="Beeper",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="llc_gfci_flag",
        mqtt_key="llcGFCIFlag",
        name="GFCI",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac_lv_always_on",
        mqtt_key="acLvAlwaysOn",
        name="Low-voltage AC always-on",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac_hv_always_on",
        mqtt_key="acHvAlwaysOn",
        name="High-voltage AC always-on",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # flowInfo status sensors as binary (on/off from 0/2)
    EcoFlowBinarySensorEntityDescription(
        key="flow_info_ac_hv_out",
        mqtt_key="flowInfoAcHvOut",
        name="High-voltage AC output active",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_flow_is_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="flow_info_ac_lv_out",
        mqtt_key="flowInfoAcLvOut",
        name="Low-voltage AC output active",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_flow_is_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="flow_info_12v",
        mqtt_key="flowInfo12v",
        name="12V output active",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_flow_is_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="flow_info_ac_in",
        mqtt_key="flowInfoAcIn",
        name="AC input active",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_flow_is_on,
    ),
)

# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="hv_ac_out_switch",
        mqtt_key="flowInfoAcHvOut",
        name="High-voltage AC output",
        value_fn=_flow_is_on,
        command_fn=lambda value, _q: {"cfgHvAcOutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="lv_ac_out_switch",
        mqtt_key="flowInfoAcLvOut",
        name="Low-voltage AC output",
        value_fn=_flow_is_on,
        command_fn=lambda value, _q: {"cfgLvAcOutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="dc_12v_out_switch",
        mqtt_key="flowInfo12v",
        name="12V output",
        value_fn=_flow_is_on,
        command_fn=lambda value, _q: {"cfgDc12vOutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="xboost_switch",
        mqtt_key="xboostEn",
        name="X-Boost",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgXboostEn": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="beeper_switch",
        mqtt_key="enBeep",
        name="Beeper",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgBeepEn": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="ac_energy_saving_switch",
        mqtt_key="acEnergySavingOpen",
        name="AC energy-saving mode",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgAcEnergySavingOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="generator_auto_switch",
        mqtt_key="cmsOilSelfStart",
        name="Smart Generator auto start/stop",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgCmsOilSelfStart": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="gfci_switch",
        mqtt_key="llcGFCIFlag",
        name="GFCI",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgLlcGFCIFlag": bool(value)},
    ),
)

# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="max_chg_soc",
        mqtt_key="cmsMaxChgSoc",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgMaxChgSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="min_dsg_soc",
        mqtt_key="cmsMinDsgSoc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgMinDsgSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="backup_reserve_soc",
        mqtt_key="energyBackupStartSoc",
        name="Backup reserve level",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=5,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, quota: {
            "cfgEnergyBackup": {
                "energyBackupStartSoc": int(value),
                "energyBackupEn": bool(quota.get("energyBackupEn", True)),
            }
        },
    ),
    EcoFlowNumberEntityDescription(
        key="pv_l_dc_amp_max",
        mqtt_key="plugInInfoPvLDcAmpMax",
        name="Low-voltage solar max DC input current",
        device_class=NumberDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        native_min_value=1,
        native_max_value=15,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgPlugInInfoPvLDcAmpMax": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="pv_h_dc_amp_max",
        mqtt_key="plugInInfoPvHDcAmpMax",
        name="High-voltage solar max DC input current",
        device_class=NumberDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        native_min_value=1,
        native_max_value=15,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgPlugInInfoPvHDcAmpMax": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="ac_in_chg_pow_max",
        mqtt_key="plugInInfoAcInChgPowMax",
        name="AC max charge power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=200,
        native_max_value=3000,
        native_step=100,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgPlugInInfoAcInChgPowMax": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="5p8_chg_pow_max",
        mqtt_key="plugInInfo5p8ChgPowMax",
        name="Power In/Out port max charge power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=200,
        native_max_value=3000,
        native_step=100,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgPlugInInfo5p8ChgPowMax": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="generator_on_soc",
        mqtt_key="cmsOilOnSoc",
        name="Smart Generator auto-start SOC",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgCmsOilOnSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="generator_off_soc",
        mqtt_key="cmsOilOffSoc",
        name="Smart Generator auto-stop SOC",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgCmsOilOffSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="screen_off_time",
        mqtt_key="screenOffTime",
        name="Screen timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        native_min_value=0,
        native_max_value=600,
        native_step=10,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgScreenOffTime": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="ac_standby_time",
        mqtt_key="acStandbyTime",
        name="AC standby timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=720,
        native_step=30,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgAcStandbyTime": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="dc_standby_time",
        mqtt_key="dcStandbyTime",
        name="DC standby timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=720,
        native_step=30,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgDcStandbyTime": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="dev_standby_time",
        mqtt_key="devStandbyTime",
        name="Device standby timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=720,
        native_step=30,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgDevStandbyTime": int(value)},
    ),
)

# ---------------------------------------------------------------------------
# Selects
# ---------------------------------------------------------------------------

_MULTI_BP_OPTIONS = {
    "default": 0,
    "auto_voltage": 1,
    "main_priority": 2,
}


def _current_multi_bp_mode(quota: Mapping[str, Any]) -> str | None:
    raw = quota.get("multiBpChgDsgMode")
    if raw is None:
        return None
    for label, val in _MULTI_BP_OPTIONS.items():
        if int(raw) == val:
            return label
    return None


def _multi_bp_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    return {"cfgMultiBpChgDsgMode": _MULTI_BP_OPTIONS[option]}


_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="multi_bp_chg_dsg_mode",
        name="Multi-battery charge/discharge mode",
        options=list(_MULTI_BP_OPTIONS.keys()),
        current_option_fn=_current_multi_bp_mode,
        command_fn=_multi_bp_command,
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class DeltaPro3Device(EcoFlowDevice):
    """EcoFlow Delta Pro 3 power station.

    Uses the binary-protocol envelope (cmdId=17 / cmdFunc=254) for all
    set commands, identical to the Stream family.
    SN prefix ``MR51`` observed in all spec examples (``MR51ZAS2PG330026``).
    """

    model = "EcoFlow Delta Pro 3"
    sn_prefixes: tuple[str, ...] = ("MR51",)

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Wrap the params dict in the binary-protocol routing envelope."""
        return build_stream_command(command)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        # Distinctive quota key present on Delta Pro 3 but not generic devices.
        return "plugInInfoPvHChargerFlag" in quota or "powGetAcHvOut" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_BATTERY_SENSORS,
                *_POWER_SENSORS,
                *_INPUT_CONFIG_SENSORS,
                *_DIAG_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []
