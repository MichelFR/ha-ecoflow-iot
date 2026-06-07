"""EcoFlow Delta Pro power station device definition.

Field names and units follow the public quota schema published in the
EcoFlow IoT open-API documentation (GetAllQuotaResponse / Report tables).
Quota key prefixes: ``bmsMaster``, ``inv``, ``mppt``, ``pd``, ``ems``.
Commands use the ``cmdSet``/``id`` (``build_cmd_set_command``) style —
all set-command examples in the spec carry ``"cmdSet": 32``.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.number import NumberDeviceClass, NumberMode
from homeassistant.components.select import SelectEntityDescription  # noqa: F401 (via EcoFlowSelectEntityDescription)
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
from ..commands import build_cmd_set_command
from ..helpers import (
    milli as _scale_ma,
    milli as _scale_mv,
    round2 as _round2,
    to_int as _int_val,
)

# ---------------------------------------------------------------------------
# Value helpers
# ---------------------------------------------------------------------------

_CMD_SET = 32  # All Delta Pro set commands use cmdSet=32


# ---------------------------------------------------------------------------
# BMS / Battery sensors  (prefix: bmsMaster)
# ---------------------------------------------------------------------------

_BMS_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bms_soc",
        mqtt_key="bmsMaster.soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_temp",
        mqtt_key="bmsMaster.temp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_input_watts",
        mqtt_key="bmsMaster.inputWatts",
        name="Battery input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_output_watts",
        mqtt_key="bmsMaster.outputWatts",
        name="Battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_vol",
        mqtt_key="bmsMaster.vol",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_amp",
        mqtt_key="bmsMaster.amp",
        name="Battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_soh",
        mqtt_key="bmsMaster.soh",
        name="Battery health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_design_cap",
        mqtt_key="bmsMaster.designCap",
        name="Battery design capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        # mAh — no native HA unit, report as raw integer
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_remain_cap",
        mqtt_key="bmsMaster.remainCap",
        name="Battery remaining capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_full_cap",
        mqtt_key="bmsMaster.fullCap",
        name="Battery full capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_remain_time",
        mqtt_key="bmsMaster.remainTime",
        name="Battery time remaining",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_vol",
        mqtt_key="bmsMaster.maxCellVol",
        name="Battery max cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_vol",
        mqtt_key="bmsMaster.minCellVol",
        name="Battery min cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_temp",
        mqtt_key="bmsMaster.maxCellTemp",
        name="Battery max cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_temp",
        mqtt_key="bmsMaster.minCellTemp",
        name="Battery min cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_tag_chg_amp",
        mqtt_key="bmsMaster.tagChgAmp",
        name="Battery target charge current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.MILLIAMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_f32_show_soc",
        mqtt_key="bmsMaster.f32ShowSoc",
        name="Battery SOC (precise)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
)

# ---------------------------------------------------------------------------
# Inverter sensors  (prefix: inv)
# ---------------------------------------------------------------------------

_INV_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="inv_input_watts",
        mqtt_key="inv.inputWatts",
        name="AC charging power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_output_watts",
        mqtt_key="inv.outputWatts",
        name="AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_vol",
        mqtt_key="inv.invOutVol",
        name="AC output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_mv,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_amp",
        mqtt_key="inv.invOutAmp",
        name="AC output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_ma,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_freq",
        mqtt_key="inv.invOutFreq",
        name="AC output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_ac_in_vol",
        mqtt_key="inv.acInVol",
        name="AC input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_mv,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_ac_in_amp",
        mqtt_key="inv.acInAmp",
        name="AC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_ma,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_ac_in_freq",
        mqtt_key="inv.acInFreq",
        name="AC input frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_temp",
        mqtt_key="inv.outTemp",
        name="Inverter temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_dc_in_vol",
        mqtt_key="inv.dcInVol",
        name="DC adapter input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_mv,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_dc_in_amp",
        mqtt_key="inv.dcInAmp",
        name="DC adapter input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_ma,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_dc_in_temp",
        mqtt_key="inv.dcInTemp",
        name="DC adapter temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_cfg_standby_min",
        mqtt_key="inv.cfgStandbyMin",
        name="AC standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_cfg_slow_chg_watts",
        mqtt_key="inv.cfgSlowChgWatts",
        name="AC slow charge power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_cfg_fast_chg_watts",
        mqtt_key="inv.cfgFastChgWatts",
        name="AC fast charge power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# MPPT / Solar / DC sensors  (prefix: mppt)
# ---------------------------------------------------------------------------

_MPPT_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="mppt_in_watts",
        mqtt_key="mppt.inWatts",
        name="Solar input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_in_vol",
        mqtt_key="mppt.inVol",
        name="Solar input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_mv,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_in_amp",
        mqtt_key="mppt.inAmp",
        name="Solar input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_ma,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_out_watts",
        mqtt_key="mppt.outWatts",
        name="MPPT output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_temp",
        mqtt_key="mppt.mpptTemp",
        name="MPPT temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # DC12V 30A output — Delta Pro specific
    EcoFlowSensorEntityDescription(
        key="mppt_dcdc12v_watts",
        mqtt_key="mppt.dcdc12vWatts",
        name="DC 12V output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dcdc12v_vol",
        mqtt_key="mppt.dcdc12vVol",
        name="DC 12V output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_mv,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dcdc12v_amp",
        mqtt_key="mppt.dcdc12vAmp",
        name="DC 12V output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_ma,
    ),
    # Car charger output
    EcoFlowSensorEntityDescription(
        key="mppt_car_out_watts",
        mqtt_key="mppt.carOutWatts",
        name="Car charger output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_temp",
        mqtt_key="mppt.carTemp",
        name="Car charger temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dc24v_temp",
        mqtt_key="mppt.dc24vTemp",
        name="DC 24V temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_cfg_dc_chg_current",
        mqtt_key="mppt.cfgDcChgCurrent",
        name="Car input current limit",
        device_class=SensorDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.MILLIAMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# PD / Power Distribution sensors  (prefix: pd)
# ---------------------------------------------------------------------------

_PD_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="pd_soc",
        mqtt_key="pd.soc",
        name="Display SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_watts_out_sum",
        mqtt_key="pd.wattsOutSum",
        name="Total output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_watts_in_sum",
        mqtt_key="pd.wattsInSum",
        name="Total input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_remain_time",
        mqtt_key="pd.remainTime",
        name="Time remaining",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_usb1_watts",
        mqtt_key="pd.usb1Watts",
        name="USB 1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_usb2_watts",
        mqtt_key="pd.usb2Watts",
        name="USB 2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_qc_usb1_watts",
        mqtt_key="pd.qcUsb1Watts",
        name="USB QC1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_qc_usb2_watts",
        mqtt_key="pd.qcUsb2Watts",
        name="USB QC2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_typec1_watts",
        mqtt_key="pd.typec1Watts",
        name="USB-C 1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_typec2_watts",
        mqtt_key="pd.typec2Watts",
        name="USB-C 2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_typec1_temp",
        mqtt_key="pd.typec1Temp",
        name="USB-C 1 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_typec2_temp",
        mqtt_key="pd.typec2Temp",
        name="USB-C 2 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_car_watts",
        mqtt_key="pd.carWatts",
        name="CAR output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_car_temp",
        mqtt_key="pd.carTemp",
        name="CAR temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # Cumulative energy
    EcoFlowSensorEntityDescription(
        key="pd_chg_power_dc",
        mqtt_key="pd.chgPowerDc",
        name="Total DC charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_chg_sun_power",
        mqtt_key="pd.chgSunPower",
        name="Total solar charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_chg_power_ac",
        mqtt_key="pd.chgPowerAc",
        name="Total AC charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_dsg_power_dc",
        mqtt_key="pd.dsgPowerDc",
        name="Total DC discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_dsg_power_ac",
        mqtt_key="pd.dsgPowerAc",
        name="Total AC discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    # Wi-Fi signal
    EcoFlowSensorEntityDescription(
        key="pd_wifi_rssi",
        mqtt_key="pd.wifiRssi",
        name="Wi-Fi signal",
        device_class=SensorDeviceClass.SIGNAL_STRENGTH,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="dBm",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # Display settings (diagnostic)
    EcoFlowSensorEntityDescription(
        key="pd_lcd_off_sec",
        mqtt_key="pd.lcdOffSec",
        name="Screen timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_stand_by_mode",
        mqtt_key="pd.standByMode",
        name="Device standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# EMS sensors  (prefix: ems)
# ---------------------------------------------------------------------------

_EMS_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ems_chg_remain_time",
        mqtt_key="ems.chgRemainTime",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_dsg_remain_time",
        mqtt_key="ems.dsgRemainTime",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_max_charge_soc",
        mqtt_key="ems.maxChargeSoc",
        name="Charge upper limit",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_min_dsg_soc",
        mqtt_key="ems.minDsgSoc",
        name="Discharge lower limit",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_min_open_oil_eb_soc",
        mqtt_key="ems.minOpenOilEbSoc",
        name="Generator auto-on threshold",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_max_close_oil_eb_soc",
        mqtt_key="ems.maxCloseOilEbSoc",
        name="Generator auto-off threshold",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_lcd_show_soc",
        mqtt_key="ems.lcdShowSoc",
        name="EMS LCD SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="inv_ac_enabled",
        mqtt_key="inv.cfgAcEnabled",
        name="AC output enabled",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_xboost",
        mqtt_key="inv.cfgAcXboost",
        name="X-Boost enabled",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_car_state",
        mqtt_key="mppt.carState",
        name="Car charger enabled",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_dc24v_state",
        mqtt_key="mppt.dc24vState",
        name="DC 24V output enabled",
        device_class=BinarySensorDeviceClass.POWER,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pd_dc_out_state",
        mqtt_key="pd.dcOutState",
        name="DC output enabled",
        device_class=BinarySensorDeviceClass.POWER,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ems_ups_mode",
        mqtt_key="ems.openUpsFlag",
        name="UPS mode enabled",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_chg_pause",
        mqtt_key="inv.chgPauseFlag",
        name="AC charging paused",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_chg_pause",
        mqtt_key="mppt.chgPauseFlag",
        name="PV charging paused",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_ac_passby_auto_en",
        mqtt_key="inv.acPassbyAutoEn",
        name="Bypass AC auto start",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
)

# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="ac_output",
        mqtt_key="inv.cfgAcEnabled",
        name="AC output",
        value_fn=bool,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 66, {"enabled": 1 if value else 0, "xboost": 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="xboost",
        mqtt_key="inv.cfgAcXboost",
        name="X-Boost",
        value_fn=bool,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 66, {"enabled": int(_q.get("inv.cfgAcEnabled", 0)), "xboost": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="car_charger",
        mqtt_key="mppt.carState",
        name="Car charger",
        value_fn=bool,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 81, {"enabled": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="beep",
        mqtt_key="pd.beepState",
        name="Beep",
        value_fn=lambda v: v == 0,  # 0=normal/on, 1=quiet/off
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 38, {"enabled": 0 if value else 1}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="ac_passby_auto",
        mqtt_key="inv.acPassbyAutoEn",
        name="Bypass AC auto start",
        value_fn=bool,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 84, {"enabled": 1 if value else 0}
        ),
    ),
)

# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="max_charge_soc",
        mqtt_key="ems.maxChargeSoc",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 49, {"maxChgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="min_discharge_soc",
        mqtt_key="ems.minDsgSoc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 51, {"minDsgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="car_chg_current",
        mqtt_key="mppt.cfgDcChgCurrent",
        name="Car input current",
        device_class=NumberDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.MILLIAMPERE,
        native_min_value=0,
        native_max_value=8000,
        native_step=1000,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 71, {"currMa": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="device_standby_time",
        mqtt_key="pd.standByMode",
        name="Device standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 33, {"standByMode": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="ac_standby_time",
        mqtt_key="inv.cfgStandbyMin",
        name="AC standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 153, {"standByMins": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="lcd_brightness",
        mqtt_key="pd.lcdBrightness",
        name="Screen brightness",
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 39, {"lcdBrightness": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="ac_slow_chg_watts",
        mqtt_key="inv.cfgSlowChgWatts",
        name="AC slow charge power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=100,
        native_max_value=1400,
        native_step=100,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 69, {"slowChgPower": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="gen_auto_on_soc",
        mqtt_key="ems.minOpenOilEbSoc",
        name="Generator auto-on threshold",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 52, {"openOilSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="gen_auto_off_soc",
        mqtt_key="ems.maxCloseOilEbSoc",
        name="Generator auto-off threshold",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_cmd_set_command(
            _CMD_SET, 53, {"closeOilSoc": int(value)}
        ),
    ),
)

# ---------------------------------------------------------------------------
# Selects
# ---------------------------------------------------------------------------

_PV_CHG_TYPE_OPTIONS = ["auto", "mppt", "adapter"]
_PV_CHG_TYPE_MAP = {0: "auto", 1: "mppt", 2: "adapter"}
_PV_CHG_TYPE_REVERSE = {v: k for k, v in _PV_CHG_TYPE_MAP.items()}

_AC_WORK_MODE_OPTIONS = ["full_power", "mute"]
_AC_WORK_MODE_MAP = {0: "full_power", 1: "mute"}
_AC_WORK_MODE_REVERSE = {v: k for k, v in _AC_WORK_MODE_MAP.items()}


def _pv_chg_type_current(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("mppt.cfgChgType")
    if val is None:
        return None
    return _PV_CHG_TYPE_MAP.get(int(val))


def _ac_work_mode_current(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("inv.cfgAcWorkMode")
    if val is None:
        return None
    return _AC_WORK_MODE_MAP.get(int(val))


_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="pv_chg_type",
        name="PV charging type",
        options=_PV_CHG_TYPE_OPTIONS,
        current_option_fn=_pv_chg_type_current,
        command_fn=lambda option, _q: build_cmd_set_command(
            _CMD_SET, 82, {"chgType": _PV_CHG_TYPE_REVERSE[option]}
        ),
    ),
    EcoFlowSelectEntityDescription(
        key="ac_work_mode",
        name="AC charging mode",
        options=_AC_WORK_MODE_OPTIONS,
        current_option_fn=_ac_work_mode_current,
        command_fn=lambda option, _q: build_cmd_set_command(
            _CMD_SET, 69, {"slowChgPower": 0 if option == "mute" else 1400}
        ),
    ),
)

# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class DeltaProDevice(EcoFlowDevice):
    """EcoFlow Delta Pro portable power station.

    Serial numbers start with ``DCABZ`` (confirmed by the spec's example URL
    fragment ``sn=DCABZ***``). Also matched via the distinctive
    ``bmsMaster.soc`` quota key absent from Stream/other families.
    """

    model = "EcoFlow Delta Pro"
    # Source: spec example SN fragment "DCABZ***"
    sn_prefixes: tuple[str, ...] = ("DCABZ",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix or presence of the bmsMaster quota key."""
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        return bool(quota) and "bmsMaster.soc" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_BMS_SENSORS,
                *_INV_SENSORS,
                *_MPPT_SENSORS,
                *_PD_SENSORS,
                *_EMS_SENSORS,
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
