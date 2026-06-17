"""EcoFlow Delta 2 Max device definition.

Field names and units follow the public quota schema.
Module-type prefixes: pd (1), bms_bmsStatus / bms_emsStatus (2), inv (3), mppt (5).
mV values are scaled to V; mA values scaled to A.
Several MPPT fields are firmware-amplified and are divided back here (x10 or x100).
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
    centi as _scale_100,
    deci as _scale_10,
    milli as _scale_1000,
    round2 as _round2,
)


# ---------------------------------------------------------------------------
# Value helpers
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
# Sensors — PD (moduleType 1, prefix pd.)
# ---------------------------------------------------------------------------

_PD_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="pd_soc",
        mqtt_key="pd.soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
        # Stepped charging icon while charging, else automatic battery icon.
        icon_fn=lambda q: battery_charging_icon(q.get("pd.soc"), float(q.get("bms_bmsStatus.inputWatts") or 0) > 0),
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
        key="pd_usb1_watts",
        mqtt_key="pd.usb1Watts",
        name="USB 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_usb2_watts",
        mqtt_key="pd.usb2Watts",
        name="USB 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_qc_usb1_watts",
        mqtt_key="pd.qcUsb1Watts",
        name="QC USB 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_qc_usb2_watts",
        mqtt_key="pd.qcUsb2Watts",
        name="QC USB 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
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
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_wire_watts",
        mqtt_key="pd.wireWatts",
        name="Wireless charging power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_pv1_charge_watts",
        mqtt_key="pd.pv1ChargeWatts",
        name="PV1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_pv2_charge_watts",
        mqtt_key="pd.pv2ChargeWatts",
        name="PV2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_inv_out_watts",
        mqtt_key="pd.invOutWatts",
        name="Inverter output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_inv_in_watts",
        mqtt_key="pd.invInWatts",
        name="Inverter input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_xt150_watts1",
        mqtt_key="pd.XT150Watts1",
        name="XT150 port 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_xt150_watts2",
        mqtt_key="pd.XT150Watts2",
        name="XT150 port 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    # Cumulative energy
    EcoFlowSensorEntityDescription(
        key="pd_chg_power_ac",
        mqtt_key="pd.chgPowerAC",
        name="Total AC charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_chg_power_dc",
        mqtt_key="pd.chgPowerDC",
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
        key="pd_dsg_power_ac",
        mqtt_key="pd.dsgPowerAC",
        name="Total AC discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_dsg_power_dc",
        mqtt_key="pd.dsgPowerDC",
        name="Total DC discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    # Diagnostic / config readback
    EcoFlowSensorEntityDescription(
        key="pd_standby_min",
        mqtt_key="pd.standbyMin",
        name="PD standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_bp_power_soc",
        mqtt_key="pd.bpPowerSoc",
        name="Backup reserve",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
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
)

# ---------------------------------------------------------------------------
# Sensors — INV (moduleType 3, prefix inv.)
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
        name="AC discharge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_vol",
        mqtt_key="inv.invOutVol",
        name="Inverter output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_amp",
        mqtt_key="inv.invOutAmp",
        name="Inverter output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_out_freq",
        mqtt_key="inv.invOutFreq",
        name="Inverter output frequency",
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
        key="inv_fast_chg_watts",
        mqtt_key="inv.FastChgWatts",
        name="AC fast charging limit",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_slow_chg_watts",
        mqtt_key="inv.SlowChgWatts",
        name="AC slow charging limit",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_standby_min",
        mqtt_key="inv.standbyMin",
        name="AC standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Sensors — MPPT (moduleType 5, prefix mppt.)
# ---------------------------------------------------------------------------

_MPPT_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="mppt_pv1_in_watts",
        mqtt_key="mppt.inWatts",
        name="PV1 input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pv1_in_vol",
        mqtt_key="mppt.inVol",
        name="PV1 input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pv1_in_amp",
        mqtt_key="mppt.inAmp",
        name="PV1 input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pv1_temp",
        mqtt_key="mppt.mpptTemp",
        name="PV1 MPPT temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # PV2
    EcoFlowSensorEntityDescription(
        key="mppt_pv2_in_watts",
        mqtt_key="mppt.pv2InWatts",
        name="PV2 input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        # Firmware reports actual power x10
        value_fn=_scale_10,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pv2_in_vol",
        mqtt_key="mppt.pv2InVol",
        name="PV2 input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        # Firmware reports actual voltage x10
        value_fn=_scale_10,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pv2_in_amp",
        mqtt_key="mppt.pv2InAmp",
        name="PV2 input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        # Firmware reports actual current x100
        value_fn=_scale_100,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pv2_temp",
        mqtt_key="mppt.pv2MpptTemp",
        name="PV2 MPPT temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        # Firmware reports actual voltage x10 (misleading field name in spec)
        value_fn=_scale_10,
    ),
    # Car / 12V DC output
    EcoFlowSensorEntityDescription(
        key="mppt_car_out_watts",
        mqtt_key="mppt.carOutWatts",
        name="Car output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        # Firmware reports actual power x10
        value_fn=_scale_10,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_out_vol",
        mqtt_key="mppt.carOutVol",
        name="Car output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        # Firmware reports actual voltage x10
        value_fn=_scale_10,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_out_amp",
        mqtt_key="mppt.carOutAmp",
        name="Car output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        # Firmware reports actual current x100
        value_fn=_scale_100,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_temp",
        mqtt_key="mppt.carTemp",
        name="Car port temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_car_standby_min",
        mqtt_key="mppt.carStandbyMin",
        name="Car standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dc24v_temp",
        mqtt_key="mppt.dc24vTemp",
        name="DC24V temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_dc_chg_current",
        mqtt_key="mppt.dcChgCurrent",
        name="DC charging current limit",
        device_class=SensorDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pv2_dc_chg_current",
        mqtt_key="mppt.pv2DcChgCurrent",
        name="PV2 DC charging current limit",
        device_class=SensorDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
)

# ---------------------------------------------------------------------------
# Sensors — BMS bmsStatus (moduleType 2, typeCode bmsStatus → bms_bmsStatus.)
# ---------------------------------------------------------------------------

_BMS_STATUS_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bms_soc",
        mqtt_key="bms_bmsStatus.soc",
        name="Battery SOC (BMS)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
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
        entity_registry_enabled_default=False,
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
        entity_registry_enabled_default=False,
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
        key="bms_soh",
        mqtt_key="bms_bmsStatus.soh",
        name="Battery health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_design_cap",
        mqtt_key="bms_bmsStatus.designCap",
        name="Battery design capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        # mAh — no direct HA unit; store as Wh approximation is ambiguous,
        # so expose raw mAh with a custom unit
        native_unit_of_measurement="mAh",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_remain_cap",
        mqtt_key="bms_bmsStatus.remainCap",
        name="Battery remaining capacity",
        native_unit_of_measurement="mAh",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_full_cap",
        mqtt_key="bms_bmsStatus.fullCap",
        name="Battery full capacity",
        native_unit_of_measurement="mAh",
        state_class=SensorStateClass.MEASUREMENT,
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
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_output_watts",
        mqtt_key="bms_bmsStatus.outputWatts",
        name="Battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_vol",
        mqtt_key="bms_bmsStatus.maxCellVol",
        name="Max cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_vol",
        mqtt_key="bms_bmsStatus.minCellVol",
        name="Min cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.MILLIVOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_temp",
        mqtt_key="bms_bmsStatus.maxCellTemp",
        name="Max cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_temp",
        mqtt_key="bms_bmsStatus.minCellTemp",
        name="Min cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_remain_time",
        mqtt_key="bms_bmsStatus.remainTime",
        name="Battery remaining time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Sensors — BMS emsStatus (moduleType 2, typeCode emsStatus → bms_emsStatus.)
# ---------------------------------------------------------------------------

_EMS_STATUS_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ems_chg_vol",
        mqtt_key="bms_emsStatus.chgVol",
        name="EMS charging voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_chg_amp",
        mqtt_key="bms_emsStatus.chgAmp",
        name="EMS charging current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_max_charge_soc",
        mqtt_key="bms_emsStatus.maxChargeSoc",
        name="Charge limit",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_min_dsg_soc",
        mqtt_key="bms_emsStatus.minDsgSoc",
        name="Discharge limit",
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
        key="ems_min_open_oil_eb",
        mqtt_key="bms_emsStatus.minOpenOilEb",
        name="Generator on SOC",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_max_close_oil_eb",
        mqtt_key="bms_emsStatus.maxCloseOilEb",
        name="Generator off SOC",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_lcd_show_soc",
        mqtt_key="bms_emsStatus.lcdShowSoc",
        name="LCD displayed SOC",
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
        key="battery_charging",
        mqtt_key="bms_bmsStatus.inputWatts",
        name="Battery charging",
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        value_fn=lambda v: float(v) > 0,
        available_fn=lambda q: "bms_bmsStatus.inputWatts" in q,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_cfg_ac_enabled",
        mqtt_key="inv.cfgAcEnabled",
        name="AC output enabled",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_cfg_ac_xboost",
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
        name="DC24V output enabled",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pd_dc_out_state",
        mqtt_key="pd.dcOutState",
        name="DC (USB) output enabled",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ems_open_ups_flag",
        mqtt_key="bms_emsStatus.openUpsFlag",
        name="UPS mode",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_chg_pause_flag",
        mqtt_key="inv.chgPauseFlag",
        name="AC charging paused",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_chg_pause_flag",
        mqtt_key="mppt.chgPauseFlag",
        name="PV1 charging paused",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="mppt_pv2_chg_pause_flag",
        mqtt_key="mppt.pv2ChgPauseFlag",
        name="PV2 charging paused",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
)

# ---------------------------------------------------------------------------
# Switches — settable boolean controls
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="sw_ac_output",
        mqtt_key="inv.cfgAcEnabled",
        name="AC output",
        value_fn=bool,
        command_fn=lambda value, quota: build_legacy_command(
            3,
            "acOutCfg",
            {
                "enabled": 1 if value else 0,
                "xboost": int(quota.get("inv.cfgAcXboost", 0)),
                "out_voltage": 4294967295,
                "out_freq": int(quota.get("inv.cfgAcOutFreq", 1)),
            },
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_xboost",
        mqtt_key="inv.cfgAcXboost",
        name="X-Boost",
        value_fn=bool,
        command_fn=lambda value, quota: build_legacy_command(
            3,
            "acOutCfg",
            {
                "enabled": int(quota.get("inv.cfgAcEnabled", 0)),
                "xboost": 1 if value else 0,
                "out_voltage": 4294967295,
                "out_freq": int(quota.get("inv.cfgAcOutFreq", 1)),
            },
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_dc_output",
        mqtt_key="pd.dcOutState",
        name="DC (USB) output",
        value_fn=bool,
        command_fn=lambda value, _quota: build_legacy_command(
            1, "dcOutCfg", {"enabled": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_car_charger",
        mqtt_key="mppt.carState",
        name="Car charger",
        value_fn=bool,
        command_fn=lambda value, _quota: build_legacy_command(
            5, "mpptCar", {"enabled": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_beep",
        mqtt_key="pd.beepMode",
        name="Silent mode",
        # beepMode 1 = mute (silent on), so invert for "silent mode" switch
        value_fn=lambda v: v == 1,
        command_fn=lambda value, _quota: build_legacy_command(
            1, "quietCfg", {"enabled": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_ac_always_on",
        mqtt_key="pd.newAcAutoOnCfg",
        name="AC always on",
        value_fn=bool,
        command_fn=lambda value, quota: build_legacy_command(
            1,
            "newAcAutoOnCfg",
            {
                "enabled": 1 if value else 0,
                "minAcSoc": int(quota.get("pd.minAcSoc", 20)),
            },
        ),
    ),
)

# ---------------------------------------------------------------------------
# Numbers — settable numeric controls
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="num_max_charge_soc",
        mqtt_key="bms_emsStatus.maxChargeSoc",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _quota: build_legacy_command(
            2, "upsConfig", {"maxChgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_min_dsg_soc",
        mqtt_key="bms_emsStatus.minDsgSoc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _quota: build_legacy_command(
            2, "dsgCfg", {"minDsgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_bp_power_soc",
        mqtt_key="pd.bpPowerSoc",
        name="Backup reserve level",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, quota: build_legacy_command(
            1,
            "watthConfig",
            {
                "isConfig": int(quota.get("pd.watchIsConfig", 0)),
                "bpPowerSoc": int(value),
                "minDsgSoc": 255,
                "minChgSoc": 255,
            },
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_pd_standby_min",
        mqtt_key="pd.standbyMin",
        name="PD standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _quota: build_legacy_command(
            1, "standbyTime", {"standbyMin": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_inv_standby_min",
        mqtt_key="inv.standbyMin",
        name="AC standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _quota: build_legacy_command(
            3, "standbyTime", {"standbyMin": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_car_standby_min",
        mqtt_key="mppt.carStandbyMin",
        name="Car standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=5999,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _quota: build_legacy_command(
            5, "standbyTime", {"standbyMin": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_ac_fast_chg_watts",
        mqtt_key="inv.FastChgWatts",
        name="AC fast charging power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=100,
        native_max_value=2400,
        native_step=100,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, quota: build_legacy_command(
            3,
            "acChgCfg",
            {
                "fastChgWatts": int(value),
                "slowChgWatts": int(quota.get("inv.SlowChgWatts", 400)),
                "chgPauseFlag": 0,
            },
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_ac_slow_chg_watts",
        mqtt_key="inv.SlowChgWatts",
        name="AC slow charging power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=100,
        native_max_value=700,
        native_step=100,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, quota: build_legacy_command(
            3,
            "acChgCfg",
            {
                "fastChgWatts": int(quota.get("inv.FastChgWatts", 2400)),
                "slowChgWatts": int(value),
                "chgPauseFlag": 0,
            },
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_gen_on_soc",
        mqtt_key="bms_emsStatus.minOpenOilEb",
        name="Generator on SOC",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _quota: build_legacy_command(
            2, "openOilSoc", {"openOilSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_gen_off_soc",
        mqtt_key="bms_emsStatus.maxCloseOilEb",
        name="Generator off SOC",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _quota: build_legacy_command(
            2, "closeOilSoc", {"closeOilSoc": int(value)}
        ),
    ),
)


# ---------------------------------------------------------------------------
# Energy-Dashboard derived sensors
# ---------------------------------------------------------------------------

_ENERGY_SENSORS = (
    solar_energy("mppt.inWatts", ("mppt.pv2InWatts", 10)),
    *battery_charge_discharge(["bms_bmsStatus.inputWatts"], ["bms_bmsStatus.outputWatts"]),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

class Delta2MaxDevice(EcoFlowDevice):
    """EcoFlow Delta 2 Max power station."""

    model = "EcoFlow Delta 2 Max"
    # SN prefix derived from example serial R351ZFB4HF6L0030 in the spec.
    sn_prefixes = ("R351",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match by SN prefix or by a quota key distinctive to this device."""
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        # Delta 2 Max reports pd.soc and inv.cfgAcEnabled but not Stream markers.
        return "pd.soc" in quota and "inv.cfgAcEnabled" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_PD_SENSORS,
                *_INV_SENSORS,
                *_MPPT_SENSORS,
                *_BMS_STATUS_SENSORS,
                *_EMS_STATUS_SENSORS,
                *_ENERGY_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        return []
