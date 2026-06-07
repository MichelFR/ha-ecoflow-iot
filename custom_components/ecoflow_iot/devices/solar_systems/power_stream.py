"""EcoFlow PowerStream Micro Inverter device definition.

Quota fields use the ``20_1.<field>`` prefix as documented in the public API.
Several electrical measurements are reported in deci-units (0.1 V, 0.1 A,
0.1 W, 0.1 Hz, 0.1 °C) and are scaled to SI base units here.

Set commands use the ``cmdCode`` / ``params`` style (no legacy moduleType
envelope) as documented in the PowerStream MQTT set-command reference.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.number import NumberDeviceClass, NumberMode
from homeassistant.components.select import SelectEntityDescription
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

# All heartbeat fields are published under the "20_1." prefix.
_P = "20_1."

# Distinctive quota key used for device matching (present on every heartbeat).
_MATCH_KEY = f"{_P}batSoc"


# ---------------------------------------------------------------------------
# Scaling helpers
# ---------------------------------------------------------------------------

def _deci(value: Any) -> float | None:
    """Convert a deci-unit integer (0.1 x) to its base-unit float."""
    if value is None:
        return None
    return round(float(value) / 10.0, 2)


def _round0(value: Any) -> float | None:
    """Return value as a rounded float (no scaling needed)."""
    if value is None:
        return None
    return round(float(value), 2)


# ---------------------------------------------------------------------------
# Command builders (cmdCode style — no legacy envelope)
# ---------------------------------------------------------------------------

def _supply_priority_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    """0 = prioritize power supply; 1 = prioritize power storage."""
    return {
        "cmdCode": "WN511_SET_SUPPLY_PRIORITY_PACK",
        "params": {"supplyPriority": int(option)},
    }


def _current_supply_priority(quota: Mapping[str, Any]) -> str | None:
    val = quota.get(_MATCH_KEY.replace("batSoc", "supplyPriority"))  # 20_1.supplyPriority
    if val is None:
        return None
    return str(int(val))


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    # --- Battery ---------------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="bat_soc",
        mqtt_key=f"{_P}batSoc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round0,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_input_volt",
        mqtt_key=f"{_P}batInputVolt",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_input_cur",
        mqtt_key=f"{_P}batInputCur",
        name="Battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_input_watts",
        mqtt_key=f"{_P}batInputWatts",
        name="Battery power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_temp",
        mqtt_key=f"{_P}batTemp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_remain_time",
        mqtt_key=f"{_P}chgRemainTime",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="dsg_remain_time",
        mqtt_key=f"{_P}dsgRemainTime",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- PV1 -------------------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="pv1_input_watts",
        mqtt_key=f"{_P}pv1InputWatts",
        name="Solar string 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="pv1_input_volt",
        mqtt_key=f"{_P}pv1InputVolt",
        name="Solar string 1 voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="pv1_input_cur",
        mqtt_key=f"{_P}pv1InputCur",
        name="Solar string 1 current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="pv1_temp",
        mqtt_key=f"{_P}pv1Temp",
        name="Solar string 1 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    # --- PV2 -------------------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="pv2_input_watts",
        mqtt_key=f"{_P}pv2InputWatts",
        name="Solar string 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="pv2_input_volt",
        mqtt_key=f"{_P}pv2InputVolt",
        name="Solar string 2 voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="pv2_input_cur",
        mqtt_key=f"{_P}pv2InputCur",
        name="Solar string 2 current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="pv2_temp",
        mqtt_key=f"{_P}pv2Temp",
        name="Solar string 2 temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    # --- Inverter output -------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="inv_output_watts",
        mqtt_key=f"{_P}invOutputWatts",
        name="Inverter output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_output_cur",
        mqtt_key=f"{_P}invOutputCur",
        name="Inverter output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_freq",
        mqtt_key=f"{_P}invFreq",
        name="Inverter frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_temp",
        mqtt_key=f"{_P}invTemp",
        name="Inverter temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_deci,
    ),
    # --- Permanent / dynamic watts ---------------------------------------------
    EcoFlowSensorEntityDescription(
        key="permanent_watts",
        mqtt_key=f"{_P}permanentWatts",
        name="Custom load power setpoint",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="dynamic_watts",
        mqtt_key=f"{_P}dynamicWatts",
        name="Dynamic load power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    # --- Derating limits (diagnostic, disabled by default) ---------------------
    EcoFlowSensorEntityDescription(
        key="fload_limit_out",
        mqtt_key=f"{_P}floadLimitOut",
        name="INV power after derating",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_output_load_limit",
        mqtt_key=f"{_P}invOutputLoadLimit",
        name="PV power after derating",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_output_load_limit",
        mqtt_key=f"{_P}batOutputLoadLimit",
        name="BAT power after derating",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="pv_power_limit_ac_power",
        mqtt_key=f"{_P}pvPowerLimitAcPower",
        name="Limited AC output (low PV)",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    # --- LLC -------------------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="llc_input_volt",
        mqtt_key=f"{_P}llcInputVolt",
        name="LLC input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="llc_temp",
        mqtt_key=f"{_P}llcTemp",
        name="LLC temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    # --- Wi-Fi / mesh diagnostics ----------------------------------------------
    EcoFlowSensorEntityDescription(
        key="wifi_rssi",
        mqtt_key=f"{_P}wifiRssi",
        name="Wi-Fi signal",
        device_class=SensorDeviceClass.SIGNAL_STRENGTH,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="dBm",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="rated_power",
        mqtt_key=f"{_P}ratedPower",
        name="Rated power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_brightness",
        mqtt_key=f"{_P}invBrightness",
        name="LED brightness",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="reset_count",
        mqtt_key=f"{_P}resetCount",
        name="Restart count",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="pv1_connected",
        mqtt_key=f"{_P}pv1CtrlMpptOffFlag",
        name="Solar string 1 active",
        device_class=BinarySensorDeviceClass.RUNNING,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pv2_connected",
        mqtt_key=f"{_P}pv2CtrlMpptOffFlag",
        name="Solar string 2 active",
        device_class=BinarySensorDeviceClass.RUNNING,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bat_connected",
        mqtt_key=f"{_P}batOffFlag",
        name="Battery active",
        device_class=BinarySensorDeviceClass.RUNNING,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_on",
        mqtt_key=f"{_P}invOnOff",
        name="Inverter on",
        device_class=BinarySensorDeviceClass.RUNNING,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="anti_backflow",
        mqtt_key=f"{_P}antiBackFlowFlag",
        name="Anti-backflow active",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="uw_load_limit",
        mqtt_key=f"{_P}uwloadLimitFlag",
        name="INV module derated",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="inv_load_limit",
        mqtt_key=f"{_P}invLoadLimitFlag",
        name="PV module derated",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bat_load_limit",
        mqtt_key=f"{_P}batLoadLimitFlag",
        name="BAT module derated",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="feed_protect",
        mqtt_key=f"{_P}feedProtect",
        name="Feed-in protection",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
)

# ---------------------------------------------------------------------------
# Numbers (settable setpoints)
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="permanent_watts_set",
        mqtt_key=f"{_P}permanentWatts",
        name="Custom load power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        # Spec: 0–600 W, unit on wire is 0.1 W (so 0–6000 in raw)
        native_min_value=0,
        native_max_value=600,
        native_step=1,
        mode=NumberMode.BOX,
        # HA value is in W; firmware wants 0.1 W units
        value_fn=_deci,
        command_fn=lambda value, _q: {
            "cmdCode": "WN511_SET_PERMANENT_WATTS_PACK",
            "params": {"permanentWatts": round(float(value) * 10)},
        },
    ),
    EcoFlowNumberEntityDescription(
        key="lower_limit",
        mqtt_key=f"{_P}lowerLimit",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=1,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {
            "cmdCode": "WN511_SET_BAT_LOWER_PACK",
            "params": {"lowerLimit": int(value)},
        },
    ),
    EcoFlowNumberEntityDescription(
        key="upper_limit",
        mqtt_key=f"{_P}upperLimit",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=70,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {
            "cmdCode": "WN511_SET_BAT_UPPER_PACK",
            "params": {"upperLimit": int(value)},
        },
    ),
    EcoFlowNumberEntityDescription(
        key="inv_brightness_set",
        mqtt_key=f"{_P}invBrightness",
        name="LED brightness",
        native_min_value=0,
        native_max_value=1023,
        native_step=1,
        mode=NumberMode.SLIDER,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: {
            "cmdCode": "WN511_SET_BRIGHTNESS_PACK",
            "params": {"brightness": int(value)},
        },
    ),
)

# ---------------------------------------------------------------------------
# Select (power supply priority)
# ---------------------------------------------------------------------------

_PRIORITY_OPTIONS = ["0", "1"]

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="supply_priority",
        mqtt_key=f"{_P}supplyPriority",
        name="Power supply priority",
        options=_PRIORITY_OPTIONS,
        translation_key="supply_priority",
        current_option_fn=lambda quota: (
            str(int(quota[f"{_P}supplyPriority"]))
            if f"{_P}supplyPriority" in quota
            else None
        ),
        command_fn=_supply_priority_command,
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

class PowerStreamDevice(EcoFlowDevice):
    """EcoFlow PowerStream Micro Inverter."""

    model = "EcoFlow PowerStream"
    # SN prefix sourced from documented example SNs (HW513000SF767194 → HW51).
    sn_prefixes: tuple[str, ...] = ("HW51",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix or the distinctive 20_1.batSoc quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        if quota:
            return _MATCH_KEY in quota
        return False

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return list(_SENSORS)
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []
