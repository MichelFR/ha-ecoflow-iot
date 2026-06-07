"""EcoFlow Smart Home Panel 2 (SHP2 / PD303) device definition.

The SHP2 uses a ``cmdCode``-style command envelope (``PD303_APP_SET``).
Per-circuit power readings are delivered as 12-element arrays under
``loadInfo.hall1Watt``; energy-storage (AC channel) data lives under
``wattInfo.chWatt`` (3 elements) and ``backupIncreInfo.EnergyXInfo.*``.
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
    UnitOfEnergy,
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

# ---------------------------------------------------------------------------
# Command envelope
# ---------------------------------------------------------------------------

_CMD_CODE = "PD303_APP_SET"


def _pd303_command(params: dict[str, Any]) -> dict[str, Any]:
    """Wrap params in the PD303 cmdCode envelope."""
    return {"cmdCode": _CMD_CODE, "params": params}


# ---------------------------------------------------------------------------
# Value helpers
# ---------------------------------------------------------------------------


def _round2(value: Any) -> float | None:
    if value is None:
        return None
    return round(float(value), 2)


def _scale_10(value: Any) -> float | None:
    """The masterCur field is stored as 10x the real ampere value."""
    if value is None:
        return None
    return round(float(value) / 10.0, 1)


# ---------------------------------------------------------------------------
# Smart backup mode select
# ---------------------------------------------------------------------------

_SMART_BACKUP_MODE_DISABLED = "disabled"
_SMART_BACKUP_MODE_TOU = "tou"
_SMART_BACKUP_MODE_SELF_SERVICE = "self_service"
_SMART_BACKUP_MODE_TIMED = "timed"

_SMART_BACKUP_MODE_MAP: dict[str, int] = {
    _SMART_BACKUP_MODE_DISABLED: 0,
    _SMART_BACKUP_MODE_TOU: 1,
    _SMART_BACKUP_MODE_SELF_SERVICE: 2,
    _SMART_BACKUP_MODE_TIMED: 3,
}
_SMART_BACKUP_MODE_REVERSE: dict[int, str] = {v: k for k, v in _SMART_BACKUP_MODE_MAP.items()}


def _current_smart_backup_mode(quota: Mapping[str, Any]) -> str | None:
    raw = quota.get("smartBackupMode")
    if raw is None:
        return None
    return _SMART_BACKUP_MODE_REVERSE.get(int(raw))


def _smart_backup_mode_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    return {"smartBackupMode": _SMART_BACKUP_MODE_MAP.get(option, 0)}


# ---------------------------------------------------------------------------
# System-level sensors
# ---------------------------------------------------------------------------

_SYSTEM_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="grid_watt",
        mqtt_key="wattInfo.gridWatt",
        name="Grid power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="all_hall_watt",
        mqtt_key="wattInfo.allHallWatt",
        name="Home power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_bat_per",
        mqtt_key="backupIncreInfo.backupBatPer",
        name="Backup battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_discharge_time",
        mqtt_key="backupInfo.backupDischargeTime",
        name="Backup time remaining",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="master_cur",
        mqtt_key="masterCur",
        name="Home max current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_10,
    ),
    EcoFlowSensorEntityDescription(
        key="oil_max_output_watt",
        mqtt_key="oilMaxOutputWatt",
        name="Generator max output",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="charge_watt_power",
        mqtt_key="chargeWattPower",
        name="Charging power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="foce_charge_hight",
        mqtt_key="foceChargeHight",
        name="Charging limit",
        device_class=SensorDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_reserve_soc",
        mqtt_key="backupReserveSoc",
        name="Backup reserve",
        device_class=SensorDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)


# ---------------------------------------------------------------------------
# Per-AC-channel sensors (AC1 / AC2 / AC3)
# ---------------------------------------------------------------------------


def _ac_channel_sensors(count: int = 3) -> tuple[EcoFlowSensorEntityDescription, ...]:
    """Generate sensors for each AC energy-storage channel."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(1, count + 1):
        # wattInfo.chWatt is a 3-element array; index i-1 = channel i
        idx = i - 1
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ac{i}_watt",
                name=f"AC{i} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=lambda q, _i=idx: (
                    _round2(q["wattInfo.chWatt"][_i])
                    if isinstance(q.get("wattInfo.chWatt"), list)
                    and len(q["wattInfo.chWatt"]) > _i
                    else None
                ),
                available_fn=lambda q: isinstance(q.get("wattInfo.chWatt"), list),
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ac{i}_soc",
                mqtt_key=f"backupIncreInfo.Energy{i}Info.batteryPercentage",
                name=f"AC{i} battery",
                device_class=SensorDeviceClass.BATTERY,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=PERCENTAGE,
            )
        )
    return tuple(descs)


# ---------------------------------------------------------------------------
# Per-circuit sensors (circuits 1-12)
# loadInfo.hall1Watt is a 12-element array; index i-1 = circuit i
# ---------------------------------------------------------------------------

_CIRCUIT_COUNT = 12


def _circuit_sensors(count: int = _CIRCUIT_COUNT) -> tuple[EcoFlowSensorEntityDescription, ...]:
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(1, count + 1):
        idx = i - 1
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"circuit_{i}_watt",
                name=f"Circuit {i} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=lambda q, _i=idx: (
                    _round2(q["loadInfo.hall1Watt"][_i])
                    if isinstance(q.get("loadInfo.hall1Watt"), list)
                    and len(q["loadInfo.hall1Watt"]) > _i
                    else None
                ),
                available_fn=lambda q: isinstance(q.get("loadInfo.hall1Watt"), list),
            )
        )
        # Per-circuit current limit (read-back from quota)
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"circuit_{i}_set_amp",
                mqtt_key=f"loadIncreInfo.hall1IncreInfo.ch{i}Info.setAmp",
                name=f"Circuit {i} max current",
                device_class=SensorDeviceClass.CURRENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
            )
        )
    return tuple(descs)


# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="storm_is_enable",
        mqtt_key="stormIsEnable",
        name="Storm warning",
        device_class=BinarySensorDeviceClass.SAFETY,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="eps_mode_info",
        mqtt_key="epsModeInfo",
        name="EPS mode",
        device_class=BinarySensorDeviceClass.POWER,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)


# ---------------------------------------------------------------------------
# Per-AC-channel switches (AC1 / AC2 / AC3 channel enable)
# chNEnableSet: 0=no-op, 1=enabled, 2=disabled
# Modelled as a switch: True→send 1, False→send 2
# ---------------------------------------------------------------------------


def _ac_channel_switches(count: int = 3) -> tuple[EcoFlowSwitchEntityDescription, ...]:
    descs: list[EcoFlowSwitchEntityDescription] = []
    for i in range(1, count + 1):
        quota_key = f"ch{i}EnableSet"
        descs.append(
            EcoFlowSwitchEntityDescription(
                key=f"ac{i}_enable",
                mqtt_key=quota_key,
                name=f"AC{i} channel",
                value_fn=lambda v: int(v) == 1,
                command_fn=lambda value, _q, _k=quota_key: {_k: 1 if value else 2},
            )
        )
    return tuple(descs)


# ---------------------------------------------------------------------------
# Per-AC-channel force-charge switches (ch1ForceCharge … ch3ForceCharge)
# ---------------------------------------------------------------------------


def _ac_force_charge_switches(count: int = 3) -> tuple[EcoFlowSwitchEntityDescription, ...]:
    descs: list[EcoFlowSwitchEntityDescription] = []
    for i in range(1, count + 1):
        quota_key = f"ch{i}ForceCharge"
        descs.append(
            EcoFlowSwitchEntityDescription(
                key=f"ac{i}_force_charge",
                mqtt_key=quota_key,
                name=f"AC{i} force charge",
                value_fn=lambda v: v == "FORCE_CHARGE_ON",
                command_fn=lambda value, _q, _k=quota_key: {
                    _k: "FORCE_CHARGE_ON" if value else "FORCE_CHARGE_OFF"
                },
            )
        )
    return tuple(descs)


# System-level switches
_SYSTEM_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="storm_warning",
        mqtt_key="stormIsEnable",
        name="Storm warning",
        value_fn=bool,
        command_fn=lambda value, _q: {"stormIsEnable": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="eps_mode",
        mqtt_key="epsModeInfo",
        name="EPS mode",
        value_fn=bool,
        command_fn=lambda value, _q: {"epsModeInfo": bool(value)},
    ),
)


# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_SYSTEM_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="backup_reserve_soc_set",
        mqtt_key="backupReserveSoc",
        name="Backup reserve level",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"backupReserveSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="charge_watt_power_set",
        mqtt_key="chargeWattPower",
        name="Charging power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=500,
        native_max_value=7200,
        native_step=100,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"chargeWattPower": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="foce_charge_hight_set",
        mqtt_key="foceChargeHight",
        name="Charging limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=80,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"foceChargeHight": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="oil_max_output_watt_set",
        mqtt_key="oilMaxOutputWatt",
        name="Generator max output",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=3000,
        native_max_value=12000,
        native_step=1000,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"oilMaxOutputWatt": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="master_cur_set",
        mqtt_key="masterCur",
        name="Home max current",
        device_class=NumberDeviceClass.CURRENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        # Stored as 10x; range 60-100 (raw) → 6-10 A
        native_min_value=6,
        native_max_value=10,
        native_step=0.1,
        mode=NumberMode.BOX,
        # Send as 10x integer
        command_fn=lambda value, _q: {"masterCur": int(round(float(value) * 10))},
    ),
)


def _circuit_amp_numbers(count: int = _CIRCUIT_COUNT) -> tuple[EcoFlowNumberEntityDescription, ...]:
    """Per-circuit max current number entities (setAmp).

    Valid setAmp values: 10, 15, 20, 30, 40, 50, 60 A.
    """
    descs: list[EcoFlowNumberEntityDescription] = []
    for i in range(1, count + 1):
        quota_key = f"loadIncreInfo.hall1IncreInfo.ch{i}Info.setAmp"
        descs.append(
            EcoFlowNumberEntityDescription(
                key=f"circuit_{i}_max_amp",
                mqtt_key=quota_key,
                name=f"Circuit {i} max current",
                device_class=NumberDeviceClass.CURRENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                native_min_value=10,
                native_max_value=60,
                native_step=5,
                mode=NumberMode.BOX,
                entity_registry_enabled_default=False,
                command_fn=lambda value, _q, _i=i: {
                    "loadIncreInfo": {
                        "hall1IncreInfo": {
                            f"ch{_i}Info": {"setAmp": int(value)}
                        }
                    }
                },
            )
        )
    return tuple(descs)


# ---------------------------------------------------------------------------
# Selects
# ---------------------------------------------------------------------------

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="smart_backup_mode",
        translation_key="smart_backup_mode",
        options=[
            _SMART_BACKUP_MODE_DISABLED,
            _SMART_BACKUP_MODE_TOU,
            _SMART_BACKUP_MODE_SELF_SERVICE,
            _SMART_BACKUP_MODE_TIMED,
        ],
        current_option_fn=_current_smart_backup_mode,
        command_fn=_smart_backup_mode_command,
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class SmartHomePanel2Device(EcoFlowDevice):
    """EcoFlow Smart Home Panel 2 (PD303).

    Serial number prefix: ``HD31`` (derived from example SN HD31ZAS4ZFAP0018).
    Command style: ``cmdCode = "PD303_APP_SET"`` — a flat params dict is
    wrapped by ``build_command`` with the ``cmdCode`` key.
    """

    model = "EcoFlow Smart Home Panel 2"
    sn_prefixes: tuple[str, ...] = ("HD31",)

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Wrap control params in the PD303_APP_SET cmdCode envelope.

        ``command_fn`` returns a plain ``params`` dict; this method injects
        the ``cmdCode`` routing key that the SHP2 firmware expects.
        """
        return _pd303_command(command)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix or presence of a distinctive SHP2 quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        # Fallback: distinctive keys present in the quota payload
        return "loadInfo.hall1Watt" in quota or "wattInfo.allHallWatt" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_SYSTEM_SENSORS,
                *_ac_channel_sensors(3),
                *_circuit_sensors(_CIRCUIT_COUNT),
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return [
                *_SYSTEM_SWITCHES,
                *_ac_channel_switches(3),
                *_ac_force_charge_switches(3),
            ]
        if platform == Platform.NUMBER:
            return [
                *_SYSTEM_NUMBERS,
                *_circuit_amp_numbers(_CIRCUIT_COUNT),
            ]
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []
