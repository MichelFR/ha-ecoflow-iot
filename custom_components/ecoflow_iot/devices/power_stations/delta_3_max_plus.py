"""EcoFlow DELTA 3 MAX PLUS device definition.

Quota keys follow the camelCase names from the MQTT heartbeat example.
Commands use the Stream-style envelope (cmdId 17 / cmdFunc 254), which is
identical to ``build_stream_command``; therefore ``build_command`` is
overridden to wrap the returned ``params`` dict in that envelope.

Example SN from spec: D3M1ZA1A9H7H0136  → prefix "D3M1"
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
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..commands import build_stream_command
from ..energy import solar_energy
from ..helpers import (
    round2 as _round2,
)


# ---------------------------------------------------------------------------
# Value helpers
# ---------------------------------------------------------------------------

def _ac_out_on(value: Any) -> bool:
    """AC output is ON when the flow-info value is NOT 4."""
    if value is None:
        return False
    return int(value) != 4


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    # --- Battery -------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="batt_soc",
        mqtt_key="cmsBattSoc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_rem_time",
        mqtt_key="cmsChgRemTime",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="dsg_rem_time",
        mqtt_key="cmsDsgRemTime",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_dsg_state",
        mqtt_key="cmsChgDsgState",
        name="Charge/discharge state",
        # 0 = idle, 1 = discharging, 2 = charging
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- Input power ---------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="pow_in_sum",
        mqtt_key="powInSumW",
        name="Total input power",
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
        key="pow_get_pv",
        mqtt_key="powGetPv",
        name="Solar / car input power (PV1)",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_pv2",
        mqtt_key="powGetPv2",
        name="Solar / car input power (PV2)",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    # --- Output power --------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="pow_out_sum",
        mqtt_key="powOutSumW",
        name="Total output power",
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
        name="USB-C1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_typec2",
        mqtt_key="powGetTypec2",
        name="USB-C2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_typec3",
        mqtt_key="powGetTypec3",
        name="USB-C3 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_qcusb1",
        mqtt_key="powGetQcusb1",
        name="USB-A1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="pow_get_qcusb2",
        mqtt_key="powGetQcusb2",
        name="USB-A2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    # --- Settings (read back) -----------------------------------------
    EcoFlowSensorEntityDescription(
        key="backup_reverse_soc",
        mqtt_key="backupReverseSoc",
        name="Backup reserve (read back)",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="max_chg_soc",
        mqtt_key="cmsMaxChgSoc",
        name="Charge upper limit (read back)",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="min_dsg_soc",
        mqtt_key="cmsMinDsgSoc",
        name="Discharge lower limit (read back)",
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
        key="ac_out_on",
        mqtt_key="flowInfoAcOut",
        name="AC output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_ac_out_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac2_out_on",
        mqtt_key="flowInfoAc2Out",
        name="AC2 output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_ac_out_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="dc_out_on",
        mqtt_key="flowInfo12v",
        name="DC output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_ac_out_on,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="energy_backup_en",
        mqtt_key="energyBackupEn",
        name="Energy backup enabled",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)


# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="ac_out_switch",
        mqtt_key="flowInfoAcOut",
        name="AC output",
        value_fn=_ac_out_on,
        command_fn=lambda value, _q: {"cfgAcOutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="ac2_out_switch",
        mqtt_key="flowInfoAc2Out",
        name="AC2 output",
        value_fn=_ac_out_on,
        command_fn=lambda value, _q: {"cfgAc2OutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="dc_out_switch",
        mqtt_key="flowInfo12v",
        name="DC 12V output",
        value_fn=_ac_out_on,
        command_fn=lambda value, _q: {"cfgDc12vOutOpen": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="energy_backup_switch",
        mqtt_key="energyBackupEn",
        name="Energy backup",
        value_fn=bool,
        command_fn=lambda value, _q: {
            "cfgEnergyBackup": {"energyBackupEn": bool(value)}
        },
    ),
    EcoFlowSwitchEntityDescription(
        key="buzzer",
        mqtt_key="enBeep",
        name="Buzzer",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgBeepEn": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="xboost",
        mqtt_key="xboostEn",
        name="X-Boost",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgXboostEn": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="bypass_out_disable",
        mqtt_key="bypassOutDisable",
        name="Bypass output disable",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgBypassOutDisable": bool(value)},
    ),
)


# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="charge_upper_limit",
        mqtt_key="cmsMaxChgSoc",
        name="Charge upper limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgMaxChgSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="discharge_lower_limit",
        mqtt_key="cmsMinDsgSoc",
        name="Discharge lower limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgMinDsgSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="backup_reserve",
        mqtt_key="backupReverseSoc",
        name="Backup reserve",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=50,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgBackupReverseSoc": int(value)},
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

_ENERGY_SENSORS = (solar_energy("powGetPv", "powGetPv2"),)


class Delta3MaxPlusDevice(EcoFlowDevice):
    """EcoFlow DELTA 3 MAX PLUS power station.

    Command envelope: Stream-style (cmdId=17 / cmdFunc=254).
    Example SN: D3M1ZA1A9H7H0136 → prefix "D3M1".
    """

    model = "EcoFlow Delta 3 Max Plus"
    sn_prefixes = ("D3M1",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match the MAX PLUS, distinguished from the MAX by a 2nd PV input.

        The MAX and MAX PLUS share the ``D3M1`` MQTT SN prefix, so the reliable
        discriminator is the presence of ``powGetPv2`` in the quota. Checked
        before :class:`Delta3MaxDevice` in the registry.
        """
        return "powGetPv2" in quota

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Wrap the params dict in the Stream routing envelope."""
        return build_stream_command(command)

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [*_SENSORS, *_ENERGY_SENSORS]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        return []
