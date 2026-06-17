"""EcoFlow WAVE portable air conditioner device definition.

Quota keys, set-command shapes and unit conventions follow the WAVE public API
documentation (moduleType=1 legacy envelope for all set commands).

Temperature notes
-----------------
* ``pd.setTemp`` / ``pd.setTempCel`` — whole °C, no scaling.
* ``pd.envTemp`` / ``pd.coolTemp`` — float °C reported directly by the device.
* ``pd.heatEnv``, ``pd.condTemp``, ``pd.coolEnv``, ``pd.evapTemp``,
  ``pd.airInTemp``, ``pd.motorOutTemp`` — magnified ×100 (i.e. deci-centi-°C);
  divide by 100 to get °C.
* ``pd.tempNtc`` / ``power.tempNtc`` — ×10 (0.1 °C units); divide by 10.
* ``pd.batVolt`` — unit 0.01 V; divide by 100.
* ``power.batCurr`` / ``pd.batCurr`` / ``bms.bmsCur`` / ``bms.bmsReqCur`` — mA;
  divide by 1000.
* ``bms.bmsVol`` / ``bms.bmsReqVol`` — mV; divide by 1000.
* ``power.acCurrRms`` — mA; divide by 1000.
* ``power.acVoltRms`` — 0.1 V; divide by 10.
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
from ..energy import consumption_energy, solar_energy
from ..helpers import (
    centi as _scale_100,
    deci as _scale_10,
    milli as _scale_1000,
    round2 as _round2,
)

# All WAVE set commands use moduleType 1.
_MODULE_TYPE = 1

# ---------------------------------------------------------------------------
# Enum maps
# ---------------------------------------------------------------------------

# pd.mainMode: 0=Cool, 1=Heat, 2=Fan
_MAIN_MODE_OPTIONS = ["cool", "heat", "fan"]
_MAIN_MODE_MAP: dict[str, int] = {"cool": 0, "heat": 1, "fan": 2}

# pd.pdSubMode / pd.subMode: 0=Max, 1=Sleep, 2=Eco, 3=Manual
_SUB_MODE_OPTIONS = ["max", "sleep", "eco", "manual"]
_SUB_MODE_MAP: dict[str, int] = {"max": 0, "sleep": 1, "eco": 2, "manual": 3}

# pd.fanValue: 0=Low, 1=Medium, 2=High
_FAN_OPTIONS = ["low", "medium", "high"]
_FAN_MAP: dict[str, int] = {"low": 0, "medium": 1, "high": 2}

# pd.rgbState: 0=Follow screen, 1=Always on, 2=Always off
_RGB_OPTIONS = ["follow_screen", "always_on", "always_off"]
_RGB_MAP: dict[str, int] = {"follow_screen": 0, "always_on": 1, "always_off": 2}

# pd.wteFthEn drainage select (coolFan mode)
# 0: Turn on Manual drainage, 1: Turn on No drainage,
# 2: Turn off Manual drainage, 3: Turn off No drainage
_DRAINAGE_OPTIONS = ["manual_on", "no_drain_on", "manual_off", "no_drain_off"]
_DRAINAGE_MAP: dict[str, int] = {
    "manual_on": 0,
    "no_drain_on": 1,
    "manual_off": 2,
    "no_drain_off": 3,
}

# ---------------------------------------------------------------------------
# Value-function helpers
# ---------------------------------------------------------------------------


def _bat_volt(value: Any) -> float | None:
    """pd.batVolt: unit 0.01 V."""
    if value is None:
        return None
    return round(float(value) / 100, 2)


def _ac_volt(value: Any) -> float | None:
    """power.acVoltRms: unit 0.1 V."""
    if value is None:
        return None
    return round(float(value) / 10, 1)


# ---------------------------------------------------------------------------
# current_option_fn helpers for SELECT entities
# ---------------------------------------------------------------------------


def _current_main_mode(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("pd.mainMode")
    if val is None:
        return None
    return _MAIN_MODE_OPTIONS[int(val)] if 0 <= int(val) < len(_MAIN_MODE_OPTIONS) else None


def _current_sub_mode(quota: Mapping[str, Any]) -> str | None:
    # Quota reports both pd.pdSubMode and pd.subMode; prefer pd.pdSubMode.
    val = quota.get("pd.pdSubMode", quota.get("pd.subMode"))
    if val is None:
        return None
    return _SUB_MODE_OPTIONS[int(val)] if 0 <= int(val) < len(_SUB_MODE_OPTIONS) else None


def _current_fan_speed(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("pd.fanValue")
    if val is None:
        return None
    return _FAN_OPTIONS[int(val)] if 0 <= int(val) < len(_FAN_OPTIONS) else None


def _current_rgb_state(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("pd.rgbState")
    if val is None:
        return None
    return _RGB_OPTIONS[int(val)] if 0 <= int(val) < len(_RGB_OPTIONS) else None


def _current_drainage(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("pd.wteFthEn")
    if val is None:
        return None
    return _DRAINAGE_OPTIONS[int(val)] if 0 <= int(val) < len(_DRAINAGE_OPTIONS) else None


# ---------------------------------------------------------------------------
# command_fn helpers
# ---------------------------------------------------------------------------


def _cmd(operate_type: str, params: dict[str, Any]) -> dict[str, Any]:
    return build_legacy_command(_MODULE_TYPE, operate_type, params)


# ---------------------------------------------------------------------------
# Sensors (read-only telemetry)
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    # --- temperatures ---
    EcoFlowSensorEntityDescription(
        key="env_temp",
        mqtt_key="pd.envTemp",
        name="Ambient temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="cool_temp",
        mqtt_key="pd.coolTemp",
        name="Air outlet temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="cond_temp",
        mqtt_key="pd.condTemp",
        name="Condensation temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_100,
    ),
    EcoFlowSensorEntityDescription(
        key="heat_env",
        mqtt_key="pd.heatEnv",
        name="Condensation zone return air temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_100,
    ),
    EcoFlowSensorEntityDescription(
        key="evap_temp",
        mqtt_key="pd.evapTemp",
        name="Evaporation temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_100,
    ),
    EcoFlowSensorEntityDescription(
        key="air_in_temp",
        mqtt_key="pd.airInTemp",
        name="Evaporation zone return air temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_100,
    ),
    EcoFlowSensorEntityDescription(
        key="motor_out_temp",
        mqtt_key="pd.motorOutTemp",
        name="Exhaust temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_100,
    ),
    EcoFlowSensorEntityDescription(
        key="set_temp_cel",
        mqtt_key="pd.setTempCel",
        name="Set temperature (Celsius)",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ntc_temp",
        mqtt_key="pd.tempNtc",
        name="NTC temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_10,
    ),
    # --- power ---
    EcoFlowSensorEntityDescription(
        key="ac_pwr_in",
        mqtt_key="pd.acPwrIn",
        name="AC input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_power",
        mqtt_key="pd.sysPowerWatts",
        name="System power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="pv_power",
        mqtt_key="pd.mpptPwr",
        name="PV input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_pwr_out",
        mqtt_key="pd.batPwrOut",
        name="Battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    # --- AC input ---
    EcoFlowSensorEntityDescription(
        key="ac_volt_rms",
        mqtt_key="power.acVoltRms",
        name="AC input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_ac_volt,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_curr_rms",
        mqtt_key="power.acCurrRms",
        name="AC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_freq",
        mqtt_key="pd.acFreq",
        name="AC input frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- battery (attached pack) ---
    EcoFlowSensorEntityDescription(
        key="bms_soc",
        mqtt_key="bms.bmsSoc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_soc",
        mqtt_key="pd.batSoc",
        name="Battery (PD)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_volt",
        mqtt_key="pd.batVolt",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_bat_volt,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_vol",
        mqtt_key="bms.bmsVol",
        name="BMS voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_cur",
        mqtt_key="bms.bmsCur",
        name="BMS current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_chg_remain",
        mqtt_key="pd.batChgRemain",
        name="Battery time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_dsg_remain",
        mqtt_key="pd.batDsgRemain",
        name="Battery time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- timer ---
    EcoFlowSensorEntityDescription(
        key="time_remain",
        mqtt_key="pd.timeRemain",
        name="Timer remaining",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
    ),
    # --- water level ---
    EcoFlowSensorEntityDescription(
        key="water_value",
        mqtt_key="pd.waterValue",
        name="Water level",
        state_class=SensorStateClass.MEASUREMENT,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors (read-only booleans)
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="ref_en",
        mqtt_key="pd.refEn",
        name="Cool/Heat mode available",
        device_class=BinarySensorDeviceClass.RUNNING,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bms_hw_flag",
        mqtt_key="bms.bmsHwFlag",
        name="Battery hardware present",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bms_sw_flag",
        mqtt_key="bms.bmsSwFlag",
        name="Battery software present",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bms_under_voltage",
        mqtt_key="pd.bmsUnderVoltage",
        name="Battery undervoltage",
        device_class=BinarySensorDeviceClass.PROBLEM,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="hp_prot_flg",
        mqtt_key="motor.hpProtFlg",
        name="High pressure protection",
        device_class=BinarySensorDeviceClass.SAFETY,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="eco_stop_flag",
        mqtt_key="motor.ecoStopFlag",
        name="Energy-saving shutdown",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# ---------------------------------------------------------------------------
# Switches (settable on/off)
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="power",
        mqtt_key="pd.powerMode",
        name="Power",
        # powerMode: 1=on, 2=standby/off
        value_fn=lambda v: int(v) == 1,
        command_fn=lambda value, _q: _cmd(
            "powerMode", {"powerMode": 1 if value else 2}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="beep_en",
        mqtt_key="pd.beepEn",
        name="Buzzer",
        value_fn=bool,
        command_fn=lambda value, _q: _cmd("beepEn", {"en": 1 if value else 0}),
    ),
    EcoFlowSwitchEntityDescription(
        key="timer_en",
        mqtt_key="pd.timeEn",
        name="Timer",
        value_fn=bool,
        command_fn=lambda value, _q: _cmd(
            "sacTiming",
            {
                "timeSet": int(_q.get("pd.timeSet", 60)),
                "timeEn": 1 if value else 0,
            },
        ),
    ),
)

# ---------------------------------------------------------------------------
# Numbers (settable numeric setpoints)
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="set_temp",
        mqtt_key="pd.setTemp",
        name="Set temperature",
        device_class=NumberDeviceClass.TEMPERATURE,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        native_min_value=16,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: _cmd("setTemp", {"setTemp": int(value)}),
    ),
    EcoFlowNumberEntityDescription(
        key="timer_set",
        mqtt_key="pd.timeSet",
        name="Timer duration",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=65535,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: _cmd(
            "sacTiming",
            {"timeSet": int(value), "timeEn": int(_q.get("pd.timeEn", 0))},
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="screen_timeout",
        mqtt_key="pd.idleTime",
        name="Screen timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        native_min_value=0,
        native_max_value=3600,
        native_step=1,
        mode=NumberMode.BOX,
        # idleMode=1 when a non-zero timeout is set; idleMode=0 for always-on.
        command_fn=lambda value, _q: _cmd(
            "display",
            {"idleTime": int(value), "idleMode": 0 if int(value) == 0 else 1},
        ),
    ),
)

# ---------------------------------------------------------------------------
# Selects (settable multi-option)
# ---------------------------------------------------------------------------

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="main_mode",
        mqtt_key="pd.mainMode",
        name="Mode",
        options=_MAIN_MODE_OPTIONS,
        current_option_fn=_current_main_mode,
        command_fn=lambda option, _q: _cmd(
            "mainMode", {"mainMode": _MAIN_MODE_MAP[option]}
        ),
    ),
    EcoFlowSelectEntityDescription(
        key="sub_mode",
        mqtt_key="pd.pdSubMode",
        name="Sub-mode",
        options=_SUB_MODE_OPTIONS,
        current_option_fn=_current_sub_mode,
        command_fn=lambda option, _q: _cmd(
            "subMode", {"subMode": _SUB_MODE_MAP[option]}
        ),
    ),
    EcoFlowSelectEntityDescription(
        key="fan_speed",
        mqtt_key="pd.fanValue",
        name="Fan speed",
        options=_FAN_OPTIONS,
        current_option_fn=_current_fan_speed,
        command_fn=lambda option, _q: _cmd(
            "fanValue", {"fanValue": _FAN_MAP[option]}
        ),
    ),
    EcoFlowSelectEntityDescription(
        key="rgb_state",
        mqtt_key="pd.rgbState",
        name="Light strip",
        options=_RGB_OPTIONS,
        current_option_fn=_current_rgb_state,
        command_fn=lambda option, _q: _cmd(
            "rgbState", {"rgbState": _RGB_MAP[option]}
        ),
    ),
    EcoFlowSelectEntityDescription(
        key="drainage",
        mqtt_key="pd.wteFthEn",
        name="Automatic drainage",
        options=_DRAINAGE_OPTIONS,
        current_option_fn=_current_drainage,
        command_fn=lambda option, _q: _cmd(
            "wteFthEn", {"wteFthEn": _DRAINAGE_MAP[option]}
        ),
    ),
    EcoFlowSelectEntityDescription(
        key="temp_display",
        mqtt_key="pd.tempDisplay",
        name="Temperature display",
        options=["ambient", "outlet"],
        current_option_fn=lambda q: (
            "outlet" if int(q.get("pd.tempDisplay", 0)) == 1 else "ambient"
        ),
        command_fn=lambda option, _q: _cmd(
            "tempDisplay", {"tempDisplay": 1 if option == "outlet" else 0}
        ),
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

_ENERGY_SENSORS = (
    solar_energy("pd.mpptPwr"),
    consumption_energy("consumption_energy", "Energy consumption", "pd.sysPowerWatts"),
)


class WaveDevice(EcoFlowDevice):
    """EcoFlow WAVE portable air conditioner."""

    model = "EcoFlow WAVE"

    # SN prefix from documented example SNs (e.g. KT21ZCH2ZF170012).
    sn_prefixes: tuple[str, ...] = ("KT21ZCH2",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix or the distinctive pd.mainMode quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        # Fallback: quota contains WAVE-specific key not shared by other devices.
        return "pd.mainMode" in quota or "pd.envTemp" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [*_SENSORS, *_ENERGY_SENSORS]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []
