"""EcoFlow DELTA 3 MAX power station device definition.

Quota keys, command payloads, and field descriptions follow the
EcoFlow Open API documentation for the DELTA 3 MAX.

Command style: Stream-style envelope (cmdId=17, cmdFunc=254, dest=2,
dirDest=1, dirSrc=1, needAck=true) wrapping a ``params`` dict.
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
    UnitOfPower,
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


# ---------------------------------------------------------------------------
# Helper functions
# ---------------------------------------------------------------------------


def _round2(value: Any) -> float | None:
    """Round a numeric value to 2 decimal places."""
    if value is None:
        return None
    return round(float(value), 2)


def _ac_out_on(value: Any) -> bool | None:
    """AC output is on when flowInfoAcOut != 4."""
    if value is None:
        return None
    return int(value) != 4


def _dc_12v_on(value: Any) -> bool | None:
    """DC output is on when flowInfo12v != 4."""
    if value is None:
        return None
    return int(value) != 4


def _chg_dsg_state_label(value: Any) -> str | None:
    """Map cms_chg_dsg_state integer to a human-readable string."""
    if value is None:
        return None
    mapping = {0: "idle", 1: "discharging", 2: "charging"}
    return mapping.get(int(value), str(value))


# ---------------------------------------------------------------------------
# Command helpers
# ---------------------------------------------------------------------------


def _charge_limit_command(value: Any, _quota: Mapping[str, Any]) -> dict[str, Any]:
    return {"cfgMaxChgSoc": int(value)}


def _discharge_limit_command(value: Any, _quota: Mapping[str, Any]) -> dict[str, Any]:
    return {"cfgMinDsgSoc": int(value)}


def _backup_soc_command(value: Any, _quota: Mapping[str, Any]) -> dict[str, Any]:
    return {"cfgBackupReverseSoc": int(value)}


# ---------------------------------------------------------------------------
# Charging / battery status
# ---------------------------------------------------------------------------

_CHG_DSG_STATES = ["idle", "discharging", "charging"]


def _current_chg_dsg_state(quota: Mapping[str, Any]) -> str | None:
    raw = quota.get("cmsChgDsgState")
    if raw is None:
        return None
    return _chg_dsg_state_label(raw)


def _chg_dsg_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    # Read-only derived state; command not documented; kept as no-op stub.
    return {}


# ---------------------------------------------------------------------------
# Entity description tuples
# ---------------------------------------------------------------------------

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
        key="pow_get_ac_in",
        mqtt_key="powGetAcIn",
        name="AC input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_ac_out",
        mqtt_key="powGetAcOut",
        name="AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_pv",
        mqtt_key="powGetPv",
        name="Solar / car input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_12v",
        mqtt_key="powGet12v",
        name="DC 12V output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_typec1",
        mqtt_key="powGetTypec1",
        name="USB-C 1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_typec2",
        mqtt_key="powGetTypec2",
        name="USB-C 2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_typec3",
        mqtt_key="powGetTypec3",
        name="USB-C 3 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_qcusb1",
        mqtt_key="powGetQcusb1",
        name="USB-A 1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_qcusb2",
        mqtt_key="powGetQcusb2",
        name="USB-A 2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
)

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
        key="cms_dsg_rem_time",
        mqtt_key="cmsDsgRemTime",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
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
        key="cms_max_chg_soc",
        mqtt_key="cmsMaxChgSoc",
        name="Charge upper limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="cms_min_dsg_soc",
        mqtt_key="cmsMinDsgSoc",
        name="Discharge lower limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_reverse_soc",
        mqtt_key="backupReverseSoc",
        name="Backup reserve level",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="ac_out_open",
        mqtt_key="flowInfoAcOut",
        name="AC output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_ac_out_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="dc_12v_open",
        mqtt_key="flowInfo12v",
        name="DC 12V output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_dc_12v_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="energy_backup_en",
        mqtt_key="energyBackupEn",
        name="Energy backup",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="en_beep",
        mqtt_key="enBeep",
        name="Buzzer",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="xboost_en",
        mqtt_key="xboostEn",
        name="X-Boost",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bypass_out_disable",
        mqtt_key="bypassOutDisable",
        name="Bypass output disabled",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="sw_ac_out",
        mqtt_key="flowInfoAcOut",
        name="AC output switch",
        value_fn=_ac_out_on,
        command_fn=lambda value, _q: {"cfgAcOutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_dc_12v",
        mqtt_key="flowInfo12v",
        name="DC 12V output switch",
        value_fn=_dc_12v_on,
        command_fn=lambda value, _q: {"cfgDc12vOutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_energy_backup",
        mqtt_key="energyBackupEn",
        name="Energy backup switch",
        value_fn=bool,
        command_fn=lambda value, _q: {
            "cfgEnergyBackup": {"energyBackupEn": bool(value)}
        },
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_beep",
        mqtt_key="enBeep",
        name="Buzzer switch",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgBeepEn": bool(value)},
        entity_category=EntityCategory.CONFIG,
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_xboost",
        mqtt_key="xboostEn",
        name="X-Boost switch",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgXboostEn": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_bypass_out_disable",
        mqtt_key="bypassOutDisable",
        name="Bypass output disable switch",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgBypassOutDisable": bool(value)},
        entity_category=EntityCategory.CONFIG,
    ),
)

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="num_max_chg_soc",
        mqtt_key="cmsMaxChgSoc",
        name="Charge upper limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_charge_limit_command,
    ),
    EcoFlowNumberEntityDescription(
        key="num_min_dsg_soc",
        mqtt_key="cmsMinDsgSoc",
        name="Discharge lower limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_discharge_limit_command,
    ),
    EcoFlowNumberEntityDescription(
        key="num_backup_reverse_soc",
        mqtt_key="backupReverseSoc",
        name="Backup reserve",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=50,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_backup_soc_command,
    ),
)

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="chg_dsg_state",
        name="Charge / discharge state",
        options=_CHG_DSG_STATES,
        current_option_fn=_current_chg_dsg_state,
        # Read-only status; no write command documented.
        command_fn=_chg_dsg_command,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class Delta3MaxDevice(EcoFlowDevice):
    """EcoFlow DELTA 3 MAX power station."""

    model = "EcoFlow Delta 3 Max"
    # Example SNs from spec: D3N1ZE1A9HCE0009, D3M1ZA1A9H7H0136
    sn_prefixes = ("D3N1", "D3M1")

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Wrap control params in the Stream-style routing envelope."""
        return build_stream_command(command)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match by SN prefix or presence of a DELTA 3 MAX distinctive quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        # Fallback: quota contains a key unique to this model family.
        return "cmsChgDsgState" in quota and "powGetPv" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [*_POWER_SENSORS, *_BATTERY_SENSORS]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []
