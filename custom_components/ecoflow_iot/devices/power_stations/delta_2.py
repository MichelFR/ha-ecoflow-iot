"""EcoFlow Delta 2 power station device definition.

Field names and quota keys follow the official EcoFlow public API documentation.
Module prefixes: moduleType 1→pd, 2→bms_bmsStatus / bms_emsStatus (by typeCode),
3→inv, 5→mppt.
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
from ..commands import build_legacy_command
from ..energy import battery_charge_discharge, solar_energy
from ..helpers import (
    milli as _scale_1000,
    round2 as _round2,
)


# ---------------------------------------------------------------------------
# Value helpers
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
# Sensors – PD (moduleType 1)
# ---------------------------------------------------------------------------

_PD_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="pd_soc",
        mqtt_key="pd.soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_watts_in_sum",
        mqtt_key="pd.wattsInSum",
        name="Total input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_watts_out_sum",
        mqtt_key="pd.wattsOutSum",
        name="Total output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_remain_time",
        mqtt_key="pd.remainTime",
        name="Remaining time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_typec1_watts",
        mqtt_key="pd.typec1Watts",
        name="USB-C 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_typec2_watts",
        mqtt_key="pd.typec2Watts",
        name="USB-C 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_usb1_watts",
        mqtt_key="pd.usb1Watts",
        name="USB-A 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_usb2_watts",
        mqtt_key="pd.usb2Watts",
        name="USB-A 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_qc_usb1_watts",
        mqtt_key="pd.qcUsb1Watts",
        name="USB QC 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_qc_usb2_watts",
        mqtt_key="pd.qcUsb2Watts",
        name="USB QC 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_car_watts",
        mqtt_key="pd.carWatts",
        name="Car output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_car_temp",
        mqtt_key="pd.carTemp",
        name="Car port temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
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
    # Cumulative energy
    EcoFlowSensorEntityDescription(
        key="pd_chg_power_dc",
        mqtt_key="pd.chgPowerDC",
        name="Total DC charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
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
        mqtt_key="pd.chgPowerAC",
        name="Total AC charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_dsg_power_dc",
        mqtt_key="pd.dsgPowerDC",
        name="Total DC discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_dsg_power_ac",
        mqtt_key="pd.dsgPowerAC",
        name="Total AC discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_registry_enabled_default=False,
    ),
    # Use-time diagnostics (low-value counters)
    EcoFlowSensorEntityDescription(
        key="pd_usb_used_time",
        mqtt_key="pd.usbUsedTime",
        name="USB use time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_usbqc_used_time",
        mqtt_key="pd.usbqcUsedTime",
        name="USB QC use time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_typec_used_time",
        mqtt_key="pd.typecUsedTime",
        name="USB-C use time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_car_used_time",
        mqtt_key="pd.carUsedTime",
        name="Car port use time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_inv_used_time",
        mqtt_key="pd.invUsedTime",
        name="Inverter use time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_dc_in_used_time",
        mqtt_key="pd.dcInUsedTime",
        name="DC charging time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_mppt_used_time",
        mqtt_key="pd.mpptUsedTime",
        name="MPPT use time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # Config readbacks
    EcoFlowSensorEntityDescription(
        key="pd_standby_min",
        mqtt_key="pd.standbyMin",
        name="Device standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_lcd_off_sec",
        mqtt_key="pd.lcdOffSec",
        name="LCD timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
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
    EcoFlowSensorEntityDescription(
        key="pd_chg_dsg_state",
        mqtt_key="pd.chgDsgState",
        name="Charge/discharge state",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_bp_power_soc",
        mqtt_key="pd.bpPowerSoc",
        name="Backup reserve level",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# ---------------------------------------------------------------------------
# Sensors – BMS bmsStatus (moduleType 2, typeCode bmsStatus)
# ---------------------------------------------------------------------------

_BMS_STATUS_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bms_f32_show_soc",
        mqtt_key="bms_bmsStatus.f32ShowSoc",
        name="Battery SoC (BMS)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_vol",
        mqtt_key="bms_bmsStatus.vol",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_amp",
        mqtt_key="bms_bmsStatus.amp",
        name="Battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_temp",
        mqtt_key="bms_bmsStatus.temp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_soc",
        mqtt_key="bms_bmsStatus.soc",
        name="Battery level (BMS integer)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_soh",
        mqtt_key="bms_bmsStatus.soh",
        name="Battery health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_design_cap",
        mqtt_key="bms_bmsStatus.designCap",
        name="Battery design capacity",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="mAh",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_full_cap",
        mqtt_key="bms_bmsStatus.fullCap",
        name="Battery full capacity",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="mAh",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_remain_cap",
        mqtt_key="bms_bmsStatus.remainCap",
        name="Battery remaining capacity",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="mAh",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_remain_time",
        mqtt_key="bms_bmsStatus.remainTime",
        name="Battery time remaining (BMS)",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_input_watts",
        mqtt_key="bms_bmsStatus.inputWatts",
        name="Battery input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_output_watts",
        mqtt_key="bms_bmsStatus.outputWatts",
        name="Battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_temp",
        mqtt_key="bms_bmsStatus.maxCellTemp",
        name="Battery max cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_temp",
        mqtt_key="bms_bmsStatus.minCellTemp",
        name="Battery min cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_vol",
        mqtt_key="bms_bmsStatus.maxCellVol",
        name="Battery max cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_vol",
        mqtt_key="bms_bmsStatus.minCellVol",
        name="Battery min cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_mos_temp",
        mqtt_key="bms_bmsStatus.maxMosTemp",
        name="Battery max MOS temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_mos_temp",
        mqtt_key="bms_bmsStatus.minMosTemp",
        name="Battery min MOS temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_err_code",
        mqtt_key="bms_bmsStatus.errCode",
        name="Battery error code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Sensors – BMS emsStatus (moduleType 2, typeCode emsStatus)
# ---------------------------------------------------------------------------

_EMS_STATUS_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ems_lcd_show_soc",
        mqtt_key="bms_emsStatus.lcdShowSoc",
        name="Battery SoC (display)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_f32_lcd_show_soc",
        mqtt_key="bms_emsStatus.f32LcdShowSoc",
        name="Battery SoC (display float)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_max_charge_soc",
        mqtt_key="bms_emsStatus.maxChargeSoc",
        name="Charge upper limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_min_dsg_soc",
        mqtt_key="bms_emsStatus.minDsgSoc",
        name="Discharge lower limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_chg_remain_time",
        mqtt_key="bms_emsStatus.chgRemainTime",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_dsg_remain_time",
        mqtt_key="bms_emsStatus.dsgRemainTime",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_chg_vol",
        mqtt_key="bms_emsStatus.chgVol",
        name="EMS charging voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_chg_amp",
        mqtt_key="bms_emsStatus.chgAmp",
        name="EMS charging current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.MILLIAMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_chg_state",
        mqtt_key="bms_emsStatus.chgState",
        name="EMS charging status",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_fan_level",
        mqtt_key="bms_emsStatus.fanLevel",
        name="Fan level",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_bms_model",
        mqtt_key="bms_emsStatus.bmsModel",
        name="BMS model",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_min_open_oil_eb",
        mqtt_key="bms_emsStatus.minOpenOilEb",
        name="Smart Generator on SoC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_max_close_oil_eb",
        mqtt_key="bms_emsStatus.maxCloseOilEb",
        name="Smart Generator off SoC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_bms_war_state",
        mqtt_key="bms_emsStatus.bmsWarState",
        name="BMS warning state",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Sensors – INV (moduleType 3)
# ---------------------------------------------------------------------------

_INV_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="inv_input_watts",
        mqtt_key="inv.inputWatts",
        name="AC charging power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_output_watts",
        mqtt_key="inv.outputWatts",
        name="AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_vol",
        mqtt_key="inv.invOutVol",
        name="AC output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_amp",
        mqtt_key="inv.invOutAmp",
        name="AC output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
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
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_ac_in_amp",
        mqtt_key="inv.acInAmp",
        name="AC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
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
        name="DC input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_dc_in_amp",
        mqtt_key="inv.dcInAmp",
        name="DC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_dc_in_temp",
        mqtt_key="inv.dcInTemp",
        name="DC input temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_charger_type",
        mqtt_key="inv.chargerType",
        name="Charger type",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_fast_chg_watts",
        mqtt_key="inv.FastChgWatts",
        name="AC fast charge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_standby_mins",
        mqtt_key="inv.standbyMins",
        name="AC standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_err_code",
        mqtt_key="inv.errCode",
        name="Inverter error code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_cfg_ac_work_mode",
        mqtt_key="inv.cfgAcWorkMode",
        name="AC charging mode",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# ---------------------------------------------------------------------------
# Sensors – MPPT (moduleType 5)
# ---------------------------------------------------------------------------

_MPPT_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="mppt_in_watts",
        mqtt_key="mppt.inWatts",
        name="Solar input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_in_vol",
        mqtt_key="mppt.inVol",
        name="Solar input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_in_amp",
        mqtt_key="mppt.inAmp",
        name="Solar input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_out_watts",
        mqtt_key="mppt.outWatts",
        name="MPPT output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_out_vol",
        mqtt_key="mppt.outVol",
        name="MPPT output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_out_amp",
        mqtt_key="mppt.outAmp",
        name="MPPT output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
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
    EcoFlowSensorEntityDescription(
        key="mppt_chg_type",
        mqtt_key="mppt.chgType",
        name="Charging type",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_chg_state",
        mqtt_key="mppt.chgState",
        name="Solar charging status",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_out_watts",
        mqtt_key="mppt.carOutWatts",
        name="12 V car output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_out_vol",
        mqtt_key="mppt.carOutVol",
        name="12 V car output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_out_amp",
        mqtt_key="mppt.carOutAmp",
        name="12 V car output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
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
        key="mppt_dcdc12v_vol",
        mqtt_key="mppt.dcdc12vVol",
        name="DC 12 V output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dcdc12v_amp",
        mqtt_key="mppt.dcdc12vAmp",
        name="DC 12 V output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dcdc12v_watts",
        mqtt_key="mppt.dcdc12vWatts",
        name="DC 12 V output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dc24v_temp",
        mqtt_key="mppt.dc24vTemp",
        name="DCDC 24 V temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dc_chg_current",
        mqtt_key="mppt.dcChgCurrent",
        name="DC max charging current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.MILLIAMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_cfg_chg_watts",
        mqtt_key="mppt.cfgChgWatts",
        name="AC max charging power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_ac_standby_mins",
        mqtt_key="mppt.acStandbyMins",
        name="AC standby (MPPT)",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_standby_min",
        mqtt_key="mppt.carStandbyMin",
        name="Car charger standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_x60_chg_type",
        mqtt_key="mppt.x60ChgType",
        name="XT60 paddle type",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_cfg_chg_type",
        mqtt_key="mppt.cfgChgType",
        name="Configured charging type",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_fault_code",
        mqtt_key="mppt.faultCode",
        name="MPPT fault code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="mppt_car_state",
        mqtt_key="mppt.carState",
        name="Car charger",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_dc24v_state",
        mqtt_key="mppt.dc24vState",
        name="DCDC 24 V output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_cfg_ac_enabled",
        mqtt_key="inv.cfgAcEnabled",
        name="AC output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pd_dc_out_state",
        mqtt_key="pd.dcOutState",
        name="DC (USB) output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ems_open_ups_flag",
        mqtt_key="bms_emsStatus.openUpsFlag",
        name="UPS mode",
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ems_ems_is_normal_flag",
        mqtt_key="bms_emsStatus.emsIsNormalFlag",
        name="EMS normal",
        device_class=BinarySensorDeviceClass.PROBLEM,
        value_fn=lambda v: not bool(v),
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_cfg_ac_xboost",
        mqtt_key="inv.cfgAcXboost",
        name="X-Boost",
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_chg_pause_flag",
        mqtt_key="mppt.chgPauseFlag",
        name="Solar charging paused",
        device_class=BinarySensorDeviceClass.PROBLEM,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_beep_state",
        mqtt_key="mppt.beepState",
        name="Buzzer silent",
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pd_car_state",
        mqtt_key="pd.carState",
        name="Car output button",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
)

# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    # DC (USB) switch — moduleType 1, operateType dcOutCfg
    EcoFlowSwitchEntityDescription(
        key="sw_dc_out",
        mqtt_key="pd.dcOutState",
        name="DC (USB) output",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            1, "dcOutCfg", {"enabled": 1 if value else 0}
        ),
    ),
    # Car charger switch — moduleType 5, operateType mpptCar
    EcoFlowSwitchEntityDescription(
        key="sw_car_charger",
        mqtt_key="mppt.carState",
        name="Car charger",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            5, "mpptCar", {"enabled": 1 if value else 0}
        ),
    ),
    # Buzzer silent mode — moduleType 5, operateType quietMode
    EcoFlowSwitchEntityDescription(
        key="sw_quiet_mode",
        mqtt_key="mppt.beepState",
        name="Buzzer silent mode",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            5, "quietMode", {"enabled": 1 if value else 0}
        ),
    ),
    # AC always on — moduleType 1, operateType acAutoOutConfig
    EcoFlowSwitchEntityDescription(
        key="sw_ac_always_on",
        mqtt_key="pd.acAutoOutConfig",
        name="AC always on",
        value_fn=bool,
        command_fn=lambda value, q: build_legacy_command(
            1,
            "acAutoOutConfig",
            {
                "acAutoOutConfig": 1 if value else 0,
                "minAcOutSoc": int(q.get("pd.minAcoutSoc", 20)),
            },
        ),
    ),
    # Solar charging priority — moduleType 1, operateType pvChangePrio
    EcoFlowSwitchEntityDescription(
        key="sw_pv_chg_prio",
        mqtt_key="pd.pvChgPrioSet",
        name="Prioritize solar charging",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            1, "pvChangePrio", {"pvChangeSet": 1 if value else 0}
        ),
    ),
)

# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    # Device standby time — moduleType 1, operateType standbyTime
    EcoFlowNumberEntityDescription(
        key="num_standby_min",
        mqtt_key="pd.standbyMin",
        name="Device standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_legacy_command(
            1, "standbyTime", {"standbyMin": int(value)}
        ),
    ),
    # LCD screen timeout — moduleType 1, operateType lcdCfg
    EcoFlowNumberEntityDescription(
        key="num_lcd_off_sec",
        mqtt_key="pd.lcdOffSec",
        name="LCD screen timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        native_min_value=0,
        native_max_value=300,
        native_step=10,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_legacy_command(
            1, "lcdCfg", {"delayOff": int(value), "brighLevel": 3}
        ),
    ),
    # AC charging power — moduleType 5, operateType acChgCfg
    EcoFlowNumberEntityDescription(
        key="num_ac_chg_watts",
        mqtt_key="mppt.cfgChgWatts",
        name="AC charging power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=200,
        native_max_value=1200,
        native_step=100,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, q: build_legacy_command(
            5,
            "acChgCfg",
            {
                "chgWatts": int(value),
                "chgPauseFlag": int(q.get("mppt.chgPauseFlag", 0)),
            },
        ),
    ),
    # AC standby time — moduleType 5, operateType standbyTime
    EcoFlowNumberEntityDescription(
        key="num_mppt_standby_mins",
        mqtt_key="mppt.acStandbyMins",
        name="AC standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_legacy_command(
            5, "standbyTime", {"standbyMins": int(value)}
        ),
    ),
    # Car charger standby time — moduleType 5, operateType carStandby
    EcoFlowNumberEntityDescription(
        key="num_car_standby_mins",
        mqtt_key="mppt.carStandbyMin",
        name="Car charger standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: build_legacy_command(
            5, "carStandby", {"standbyMins": int(value)}
        ),
    ),
    # DC max charging current — moduleType 5, operateType dcChgCfg (mA)
    EcoFlowNumberEntityDescription(
        key="num_dc_chg_current",
        mqtt_key="mppt.dcChgCurrent",
        name="DC max charging current",
        device_class=NumberDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.MILLIAMPERE,
        native_min_value=4000,
        native_max_value=10000,
        native_step=1000,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            5, "dcChgCfg", {"dcChgCfg": int(value)}
        ),
    ),
    # Charge upper limit (UPS) — moduleType 2, operateType upsConfig
    EcoFlowNumberEntityDescription(
        key="num_max_charge_soc",
        mqtt_key="bms_emsStatus.maxChargeSoc",
        name="Charge upper limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            2, "upsConfig", {"maxChgSoc": int(value)}
        ),
    ),
    # Discharge lower limit — moduleType 2, operateType dsgCfg
    EcoFlowNumberEntityDescription(
        key="num_min_dsg_soc",
        mqtt_key="bms_emsStatus.minDsgSoc",
        name="Discharge lower limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            2, "dsgCfg", {"minDsgSoc": int(value)}
        ),
    ),
    # Smart Generator on SoC — moduleType 2, operateType openOilSoc
    EcoFlowNumberEntityDescription(
        key="num_open_oil_soc",
        mqtt_key="bms_emsStatus.minOpenOilEb",
        name="Smart Generator on SoC",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            2, "openOilSoc", {"openOilSoc": int(value)}
        ),
    ),
    # Smart Generator off SoC — moduleType 2, operateType closeOilSoc
    EcoFlowNumberEntityDescription(
        key="num_close_oil_soc",
        mqtt_key="bms_emsStatus.maxCloseOilEb",
        name="Smart Generator off SoC",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            2, "closeOilSoc", {"closeOilSoc": int(value)}
        ),
    ),
    # Backup reserve level — moduleType 1, operateType watthConfig
    EcoFlowNumberEntityDescription(
        key="num_bp_power_soc",
        mqtt_key="pd.bpPowerSoc",
        name="Backup reserve level",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=5,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, q: build_legacy_command(
            1,
            "watthConfig",
            {
                "isConfig": int(q.get("pd.watchIsConfig", 1)),
                "bpPowerSoc": int(value),
                "minDsgSoc": 255,
                "minChgSoc": 255,
            },
        ),
    ),
    # AC always-on minimum SoC — moduleType 1, operateType acAutoOutConfig
    EcoFlowNumberEntityDescription(
        key="num_min_ac_out_soc",
        mqtt_key="pd.minAcoutSoc",
        name="AC always-on minimum SoC",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, q: build_legacy_command(
            1,
            "acAutoOutConfig",
            {
                "acAutoOutConfig": int(q.get("pd.acAutoOutConfig", 0)),
                "minAcOutSoc": int(value),
            },
        ),
    ),
)

# ---------------------------------------------------------------------------
# Selects
# ---------------------------------------------------------------------------

_AC_CHG_MODE_OPTIONS = ["full_power", "mute"]


def _current_ac_chg_mode(quota: Mapping[str, Any]) -> str | None:
    mode = quota.get("inv.cfgAcWorkMode")
    if mode is None:
        return None
    return _AC_CHG_MODE_OPTIONS[int(mode)] if int(mode) < len(_AC_CHG_MODE_OPTIONS) else None


def _ac_chg_mode_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    index = _AC_CHG_MODE_OPTIONS.index(option)
    # AC work mode is set via the acOutCfg command together with other params
    return build_legacy_command(
        5,
        "acOutCfg",
        {
            "enabled": 1,
            "xboost": 0,
            "out_voltage": 30,
            "out_freq": 1,
        },
    )


_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="sel_ac_chg_mode",
        mqtt_key="inv.cfgAcWorkMode",
        name="AC charging mode",
        options=_AC_CHG_MODE_OPTIONS,
        current_option_fn=_current_ac_chg_mode,
        command_fn=_ac_chg_mode_command,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)


# ---------------------------------------------------------------------------
# Energy-Dashboard derived sensors
# ---------------------------------------------------------------------------

_ENERGY_SENSORS = (
    solar_energy("mppt.inWatts"),
    *battery_charge_discharge(["bms_bmsStatus.inputWatts"], ["bms_bmsStatus.outputWatts"]),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

class Delta2Device(EcoFlowDevice):
    """EcoFlow Delta 2 power station."""

    model = "EcoFlow Delta 2"
    # Serial numbers from the spec examples: R331ZEB4ZEAL0528, R331ZCB4ZE86056P
    sn_prefixes = ("R331",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix or presence of a Delta 2 distinctive quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        # Fallback: quota contains bms_bmsStatus which is distinctive for Delta 2
        return "bms_bmsStatus.f32ShowSoc" in quota or "pd.wattsInSum" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_PD_SENSORS,
                *_BMS_STATUS_SENSORS,
                *_EMS_STATUS_SENSORS,
                *_INV_SENSORS,
                *_MPPT_SENSORS,
                *_ENERGY_SENSORS,
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
