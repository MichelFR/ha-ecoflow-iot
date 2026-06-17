"""EcoFlow Glacier portable refrigerator/freezer device definition.

Covers the Glacier (portable fridge-freezer with optional battery).
Field names and units follow the public quota schema; deci-°C values
(marked "amplified 10 times" in the spec) are divided by 10 before
being exposed as °C. mV/mA fields are scaled to V/A.
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
from ..energy import battery_charge_discharge
from ..helpers import (
    battery_charging_icon,
    deci as _deci_celsius,
    milli as _scale_1000,
    round2 as _round2,
)

# moduleType = 1 (PD) for all Glacier set commands.
_MODULE_TYPE = 1

# ---------------------------------------------------------------------------
# Scaling helpers
# ---------------------------------------------------------------------------


# ---------------------------------------------------------------------------
# Temperature set-command helpers
#
# All three setpoints (tmpR, tmpL, tmpM) must be sent together in one
# "temp" command.  When updating one side we read the current values of the
# other fields from the quota so that they remain unchanged.
# Documented range: −19 °C … 10 °C (from spec examples and typical Glacier
# operating range).
# ---------------------------------------------------------------------------


def _set_tmp_r(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    return build_legacy_command(
        _MODULE_TYPE,
        "temp",
        {
            "tmpR": int(value),
            "tmpL": int(quota.get("pd.tmpLSet", 0)),
            "tmpM": int(quota.get("pd.tmpMSet", 0)),
        },
    )


def _set_tmp_l(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    return build_legacy_command(
        _MODULE_TYPE,
        "temp",
        {
            "tmpR": int(quota.get("pd.tmpRSet", 0)),
            "tmpL": int(value),
            "tmpM": int(quota.get("pd.tmpMSet", 0)),
        },
    )


def _set_tmp_m(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    return build_legacy_command(
        _MODULE_TYPE,
        "temp",
        {
            "tmpR": int(quota.get("pd.tmpRSet", 0)),
            "tmpL": int(quota.get("pd.tmpLSet", 0)),
            "tmpM": int(value),
        },
    )


# ---------------------------------------------------------------------------
# Ice-making SELECT helpers
#
# pd.iceMkMode values:
#   0 = small ice (preparation)
#   1 = large ice (preparation)
#   2 = small ice (in progress, cannot change)
#   3 = large ice (in progress)
# We expose three user-selectable options that map to the enable/iceShape
# combination sent via the "iceMake" command.
# ---------------------------------------------------------------------------

_ICE_MODE_OFF = "off"
_ICE_MODE_SMALL = "small"
_ICE_MODE_LARGE = "large"

_ICE_OPTIONS = [_ICE_MODE_OFF, _ICE_MODE_SMALL, _ICE_MODE_LARGE]


def _current_ice_mode(quota: Mapping[str, Any]) -> str | None:
    # iceMkMode 0/2 → small; 1/3 → large; absent or ice-disabled → off.
    val = quota.get("pd.iceMkMode")
    if val is None:
        return None
    if val in (0, 2):
        return _ICE_MODE_SMALL
    if val in (1, 3):
        return _ICE_MODE_LARGE
    return _ICE_MODE_OFF


def _set_ice_mode(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    if option == _ICE_MODE_OFF:
        params: dict[str, Any] = {"enable": 0, "iceShape": 0}
    elif option == _ICE_MODE_SMALL:
        params = {"enable": 1, "iceShape": 0}
    else:  # large
        params = {"enable": 1, "iceShape": 1}
    return build_legacy_command(_MODULE_TYPE, "iceMake", params)


# ---------------------------------------------------------------------------
# Battery protection level SELECT helpers
#
# pd.powerPbLevel: 0 = Low, 1 = Medium, 2 = High
# The "protectBat" command requires both "state" (enable) and "level".
# We read the current enable flag (pd.pwrPbEn) from quota so we do not
# accidentally toggle it when only changing the level.
# ---------------------------------------------------------------------------

_PROTECT_LOW = "low"
_PROTECT_MED = "medium"
_PROTECT_HIGH = "high"

_PROTECT_OPTIONS = [_PROTECT_LOW, _PROTECT_MED, _PROTECT_HIGH]
_PROTECT_LEVEL_MAP = {_PROTECT_LOW: 0, _PROTECT_MED: 1, _PROTECT_HIGH: 2}
_PROTECT_LEVEL_REVERSE = {v: k for k, v in _PROTECT_LEVEL_MAP.items()}


def _current_protect_level(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("pd.powerPbLevel")
    if val is None:
        return None
    return _PROTECT_LEVEL_REVERSE.get(int(val))


def _set_protect_level(option: str, quota: Mapping[str, Any]) -> dict[str, Any]:
    enabled = int(quota.get("pd.pwrPbEn", 1))
    return build_legacy_command(
        _MODULE_TYPE,
        "protectBat",
        {"state": enabled, "level": _PROTECT_LEVEL_MAP[option]},
    )


# ---------------------------------------------------------------------------
# Temperature unit SELECT helpers
# pd.tmpUnit: 0 = Celsius, 1 = Fahrenheit
# ---------------------------------------------------------------------------

_UNIT_CELSIUS = "celsius"
_UNIT_FAHRENHEIT = "fahrenheit"
_UNIT_OPTIONS = [_UNIT_CELSIUS, _UNIT_FAHRENHEIT]


def _current_tmp_unit(quota: Mapping[str, Any]) -> str | None:
    val = quota.get("pd.tmpUnit")
    if val is None:
        return None
    return _UNIT_FAHRENHEIT if int(val) == 1 else _UNIT_CELSIUS


def _set_tmp_unit(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    return build_legacy_command(
        _MODULE_TYPE, "tmpUnit", {"unit": 1 if option == _UNIT_FAHRENHEIT else 0}
    )


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    # --- Primary battery ---
    EcoFlowSensorEntityDescription(
        key="batt_soc",
        mqtt_key="bms_bmsStatus.f32ShowSoc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
        # Stepped charging icon while charging, else automatic battery icon.
        icon_fn=lambda q: battery_charging_icon(
            q.get("bms_bmsStatus.f32ShowSoc"), bool(q.get("pd.emsChgFlg"))
        ),
    ),
    EcoFlowSensorEntityDescription(
        key="batt_soc_int",
        mqtt_key="bms_bmsStatus.soc",
        name="Battery (integer)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_bat_pct",
        mqtt_key="pd.batPct",
        name="Battery (PD)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_vol",
        mqtt_key="bms_bmsStatus.vol",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_amp",
        mqtt_key="bms_bmsStatus.amp",
        name="Battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_in_watts",
        mqtt_key="bms_bmsStatus.inWatts",
        name="Battery input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_out_watts",
        mqtt_key="bms_bmsStatus.outWatts",
        name="Battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_temp",
        mqtt_key="bms_bmsStatus.tmp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_soh",
        mqtt_key="bms_bmsStatus.soh",
        name="Battery health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # --- Remaining time ---
    EcoFlowSensorEntityDescription(
        key="bat_time",
        mqtt_key="pd.batTime",
        name="Battery time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_remain",
        mqtt_key="bms_emsStatus.chgRemain",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="dsg_remain",
        mqtt_key="bms_emsStatus.dsgRemain",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- Temperatures (real-time; deci-°C → divide by 10) ---
    EcoFlowSensorEntityDescription(
        key="tmp_r",
        mqtt_key="pd.tmpR",
        name="Right zone temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        value_fn=_deci_celsius,
    ),
    EcoFlowSensorEntityDescription(
        key="tmp_l",
        mqtt_key="pd.tmpL",
        name="Left zone temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        value_fn=_deci_celsius,
    ),
    EcoFlowSensorEntityDescription(
        key="tmp_aver",
        mqtt_key="pd.tmpAver",
        name="Single zone temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        value_fn=_deci_celsius,
    ),
    EcoFlowSensorEntityDescription(
        key="ambient_tmp",
        mqtt_key="pd.ambientTmp",
        name="Ambient temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="temp_water",
        mqtt_key="pd.tempWater",
        name="Ice zone water temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci_celsius,
    ),
    EcoFlowSensorEntityDescription(
        key="exhaust_tmp",
        mqtt_key="pd.exhaustTmp",
        name="Exhaust temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_deci_celsius,
    ),
    # --- Motor / compressor ---
    EcoFlowSensorEntityDescription(
        key="motor_wat",
        mqtt_key="pd.motorWat",
        name="Compressor power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="motor_cur",
        mqtt_key="pd.motorCur",
        name="Compressor current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="motor_vol",
        mqtt_key="pd.motorVol",
        name="Compressor voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="motor_speed",
        mqtt_key="pd.motorSpeed",
        name="Compressor speed",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="rpm",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="fan_lvl",
        mqtt_key="pd.fanLvl",
        name="Fan level",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # --- Ice making ---
    EcoFlowSensorEntityDescription(
        key="ice_percent",
        mqtt_key="pd.icePercent",
        name="Ice making progress",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
    ),
    EcoFlowSensorEntityDescription(
        key="ice_tm",
        mqtt_key="pd.iceTm",
        name="Ice making duration",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="water_line",
        mqtt_key="pd.waterLine",
        name="Water level",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- Temperature setpoints (read-back) ---
    EcoFlowSensorEntityDescription(
        key="tmp_r_set",
        mqtt_key="pd.tmpRSet",
        name="Right zone setpoint",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="tmp_l_set",
        mqtt_key="pd.tmpLSet",
        name="Left zone setpoint",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="tmp_m_set",
        mqtt_key="pd.tmpMSet",
        name="Combined zone setpoint",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- Diagnostics ---
    EcoFlowSensorEntityDescription(
        key="fsm_state",
        mqtt_key="pd.fsmState",
        name="Running state",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="run_state",
        mqtt_key="pd.runState",
        name="Operating status",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_type",
        mqtt_key="pd.chgType",
        name="Charger type",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="err_code",
        mqtt_key="pd.errCode",
        name="Error code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="err_bms",
        mqtt_key="pd.errBms",
        name="BMS fault code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="err_pd",
        mqtt_key="pd.errPd",
        name="PD fault code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="err_pwr",
        mqtt_key="pd.errPwr",
        name="Power fault code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="err_bldc",
        mqtt_key="pd.errBldc",
        name="BLDC fault code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="a12_val",
        mqtt_key="pd.A12Val",
        name="12V auxiliary voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_vol",
        mqtt_key="bms_bmsStatus.minCellVol",
        name="Battery min cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_vol",
        mqtt_key="bms_bmsStatus.maxCellVol",
        name="Battery max cell voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_tmp",
        mqtt_key="bms_bmsStatus.minCellTmp",
        name="Battery min cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_tmp",
        mqtt_key="bms_bmsStatus.maxCellTmp",
        name="Battery max cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="lcd_soc",
        mqtt_key="bms_emsStatus.lcdSoc",
        name="LCD SoC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="bl_time",
        mqtt_key="pd.blTime",
        name="Screen timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="pwr_state",
        mqtt_key="pd.pwrState",
        name="Power",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="door_stat",
        mqtt_key="pd.doorStat",
        name="Door",
        device_class=BinarySensorDeviceClass.DOOR,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bat_flag",
        mqtt_key="pd.batFlag",
        name="Battery pack",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bms_in_flag",
        mqtt_key="pd.bmsInFlag",
        name="BMS connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="xt60_in_state",
        mqtt_key="pd.xt60InState",
        name="XT60 input",
        device_class=BinarySensorDeviceClass.PLUG,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="xt150_in_state",
        mqtt_key="pd.xt150InState",
        name="XT150 input",
        device_class=BinarySensorDeviceClass.PLUG,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="motor_wait",
        mqtt_key="pd.motorWait",
        name="Compressor waiting",
        device_class=BinarySensorDeviceClass.RUNNING,
        value_fn=lambda v: not bool(v),  # 1 = waiting (not running)
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="flag_two_zone",
        mqtt_key="pd.flagTwoZone",
        name="Dual zone partition",
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ice_alert",
        mqtt_key="pd.iceAlert",
        name="Ice ready",
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="car_bat_low",
        mqtt_key="pd.carBatLow",
        name="Car battery low",
        device_class=BinarySensorDeviceClass.BATTERY,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="flag_ambient_ready",
        mqtt_key="pd.flagAmbintReady",
        name="Ambient sensor reliable",
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ems_chg_flg",
        mqtt_key="pd.emsChgFlg",
        name="EMS charging",
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bldcDntWork",
        mqtt_key="pd.bldcDntWork",
        name="Compressor allowed",
        device_class=BinarySensorDeviceClass.RUNNING,
        value_fn=lambda v: not bool(v),  # 0 = allowed
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bldcDntIce",
        mqtt_key="pd.bldcDntIce",
        name="Ice making allowed",
        value_fn=lambda v: not bool(v),  # 0 = allowed
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="pwrPbEn",
        mqtt_key="pd.pwrPbEn",
        name="Battery protection enabled",
        value_fn=bool,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="eco_mode",
        mqtt_key="pd.coolMode",
        name="ECO mode",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            _MODULE_TYPE, "ecoMode", {"mode": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="beep_en",
        mqtt_key="pd.beepEn",
        name="Buzzer",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            _MODULE_TYPE, "beepEn", {"flag": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="pwr_pb_en",
        mqtt_key="pd.pwrPbEn",
        name="Battery low voltage protection",
        value_fn=bool,
        command_fn=lambda value, quota: build_legacy_command(
            _MODULE_TYPE,
            "protectBat",
            {
                "state": 1 if value else 0,
                "level": int(quota.get("pd.powerPbLevel", 0)),
            },
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="sensor_adv",
        mqtt_key="pd.sensorAdv",
        name="Sensor detection blocking",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            _MODULE_TYPE, "sensorAdv", {"sensorAdv": 1 if value else 0}
        ),
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Numbers (controllable setpoints)
# ---------------------------------------------------------------------------

# Temperature range from spec: tmpR example goes to -19, tmpL to 0 in example;
# typical Glacier operating range is -20 °C to +10 °C for the fridge zone and
# -20 °C to -10 °C for the freezer zone.  The spec's single set-temperature
# command imposes |tmpR - tmpL| <= 25 °C.  We allow the full documented span.
_TMP_MIN = -25
_TMP_MAX = 10

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="tmp_r_setpoint",
        mqtt_key="pd.tmpRSet",
        name="Right zone setpoint",
        device_class=NumberDeviceClass.TEMPERATURE,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        native_min_value=_TMP_MIN,
        native_max_value=_TMP_MAX,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=_set_tmp_r,
    ),
    EcoFlowNumberEntityDescription(
        key="tmp_l_setpoint",
        mqtt_key="pd.tmpLSet",
        name="Left zone setpoint",
        device_class=NumberDeviceClass.TEMPERATURE,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        native_min_value=_TMP_MIN,
        native_max_value=_TMP_MAX,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=_set_tmp_l,
    ),
    EcoFlowNumberEntityDescription(
        key="tmp_m_setpoint",
        mqtt_key="pd.tmpMSet",
        name="Combined zone setpoint",
        device_class=NumberDeviceClass.TEMPERATURE,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        native_min_value=_TMP_MIN,
        native_max_value=_TMP_MAX,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=_set_tmp_m,
    ),
    EcoFlowNumberEntityDescription(
        key="bl_time_set",
        mqtt_key="pd.blTime",
        name="Screen timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        native_min_value=0,
        native_max_value=3600,
        native_step=10,
        mode=NumberMode.BOX,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: build_legacy_command(
            _MODULE_TYPE, "blTime", {"time": int(value)}
        ),
    ),
)

# ---------------------------------------------------------------------------
# Selects
# ---------------------------------------------------------------------------

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="ice_mode",
        name="Ice maker",
        options=_ICE_OPTIONS,
        current_option_fn=_current_ice_mode,
        command_fn=_set_ice_mode,
    ),
    EcoFlowSelectEntityDescription(
        key="protect_level",
        name="Battery protection level",
        options=_PROTECT_OPTIONS,
        current_option_fn=_current_protect_level,
        command_fn=_set_protect_level,
        entity_category=EntityCategory.CONFIG,
    ),
    EcoFlowSelectEntityDescription(
        key="tmp_unit",
        name="Temperature unit",
        options=_UNIT_OPTIONS,
        current_option_fn=_current_tmp_unit,
        command_fn=_set_tmp_unit,
        entity_category=EntityCategory.CONFIG,
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

_ENERGY_SENSORS = (
    *battery_charge_discharge(["bms_bmsStatus.inWatts"], ["bms_bmsStatus.outWatts"]),
)


class GlacierDevice(EcoFlowDevice):
    """EcoFlow Glacier portable refrigerator/freezer with optional battery."""

    model = "EcoFlow Glacier"
    # SN prefix derived from the documented example SN: BX11ZCB4EF2E0002
    sn_prefixes = ("BX11Z",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match by SN prefix or by presence of a distinctive Glacier quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        # Fallback: Glacier-specific key not found on other EcoFlow families.
        return "pd.iceMkMode" in quota or "pd.tmpRSet" in quota

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
