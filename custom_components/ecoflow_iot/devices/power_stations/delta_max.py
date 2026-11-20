"""EcoFlow DELTA Max (original, 2021) power station device definition.

Not the DELTA 2 Max (``delta_2_max.py``) or DELTA 3 Max (``delta_3_max.py``).
Field names and units follow EcoFlow's official open-API spec for the DELTA Max
(developer portal documentId ``2115359159541493762``, published 2026-10-28).
Quota key prefixes: ``bmsMaster``, ``ems``, ``inv``, ``pd``, ``mppt``, ``kit``.

Set commands use the ``cmdSet``/``id`` style (all ``"cmdSet": 32``) inside a
legacy envelope: every spec example carries ``"operateType": "TCP"`` and a
per-command ``moduleType`` (1 = PD, 2 = BMS, 3 = INV, 5 = MPPT), so commands are
built with ``build_legacy_command``.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.number import NumberDeviceClass, NumberMode
from homeassistant.components.sensor import SensorDeviceClass, SensorStateClass
from homeassistant.const import (
    EntityCategory,
    Platform,
    UnitOfEnergy,
    UnitOfPower,
    UnitOfRatio,
    UnitOfTemperature,
    UnitOfTime,
)

from ..base import (
    ChildDevice,
    EcoFlowBinarySensorEntityDescription,
    EcoFlowDevice,
    EcoFlowNumberEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..commands import build_legacy_command
from ..energy import battery_charge_discharge
from ..helpers import battery_charging_icon, round2, to_bool

_CMD_SET = 32  # All DELTA Max set commands use cmdSet=32
_OPERATE_TYPE = "TCP"

# moduleType per spec command examples
_MODULE_PD = 1
_MODULE_BMS = 2
_MODULE_INV = 3
_MODULE_MPPT = 5


def _cmd(module_type: int, cmd_id: int, params: dict[str, Any]) -> dict[str, Any]:
    """Build a DELTA Max set command (legacy TCP envelope with cmdSet/id params)."""
    return build_legacy_command(
        module_type, _OPERATE_TYPE, {"cmdSet": _CMD_SET, "id": cmd_id, **params}
    )


# ---------------------------------------------------------------------------
# Value helpers
# ---------------------------------------------------------------------------

_CHG_STATE = {0: "idle", 1: "discharging", 2: "charging"}


def _chg_state(value: Any) -> str | None:
    try:
        return _CHG_STATE.get(int(value))
    except (TypeError, ValueError):
        return None


def _cell_temp(pick):
    """Return a quota_value_fn reducing the ``bmsMaster.cellTemp`` array."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        temps = quota.get("bmsMaster.cellTemp")
        if not isinstance(temps, list):
            return None
        values = [t for t in temps if isinstance(t, (int, float))]
        return pick(values) if values else None

    return _fn


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_BATTERY_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bms_soc",
        mqtt_key="bmsMaster.soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        value_fn=round2,
        icon_fn=lambda q: battery_charging_icon(
            q.get("bmsMaster.soc"), float(q.get("bmsMaster.inputWatts") or 0) > 0
        ),
    ),
    EcoFlowSensorEntityDescription(
        key="bms_input_watts",
        mqtt_key="bmsMaster.inputWatts",
        name="Battery input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_output_watts",
        mqtt_key="bmsMaster.outputWatts",
        name="Battery output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bms_max_cell_temp",
        mqtt_key="bmsMaster.cellTemp",
        name="Battery max cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        quota_value_fn=_cell_temp(max),
    ),
    EcoFlowSensorEntityDescription(
        key="bms_min_cell_temp",
        mqtt_key="bmsMaster.cellTemp",
        name="Battery min cell temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_cell_temp(min),
    ),
)

_EMS_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ems_chg_state",
        mqtt_key="ems.chgState",
        name="Charge state",
        device_class=SensorDeviceClass.ENUM,
        options=list(_CHG_STATE.values()),
        value_fn=_chg_state,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_chg_remain_time",
        mqtt_key="ems.chgRemainTime",
        name="Charge time remaining",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_max_charge_soc",
        mqtt_key="ems.maxChargeSoc",
        name="Charge limit",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="ems_min_dsg_soc",
        mqtt_key="ems.minDsgSoc",
        name="Discharge limit",
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

_INV_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="inv_input_watts",
        mqtt_key="inv.inputWatts",
        name="AC input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=round2,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_output_watts",
        mqtt_key="inv.outputWatts",
        name="AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=round2,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_cfg_fast_chg_watts",
        mqtt_key="inv.cfgFastChgWatts",
        name="AC fast charging power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_cfg_slow_chg_watts",
        mqtt_key="inv.cfgSlowChgWatts",
        name="AC slow charging power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)


def _pd_power(key: str, mqtt_key: str, name: str) -> EcoFlowSensorEntityDescription:
    return EcoFlowSensorEntityDescription(
        key=key,
        mqtt_key=mqtt_key,
        name=name,
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=round2,
    )


def _pd_energy(key: str, mqtt_key: str, name: str) -> EcoFlowSensorEntityDescription:
    return EcoFlowSensorEntityDescription(
        key=key,
        mqtt_key=mqtt_key,
        name=name,
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    )


_PD_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="pd_remain_time",
        mqtt_key="pd.remainTime",
        name="Time remaining",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
    ),
    _pd_power("pd_typec1_watts", "pd.typec1Watts", "USB-C 1 output power"),
    _pd_power("pd_typec2_watts", "pd.typec2Watts", "USB-C 2 output power"),
    _pd_power("pd_usb1_watts", "pd.usb1Watts", "USB-A 1 output power"),
    _pd_power("pd_usb2_watts", "pd.usb2Watts", "USB-A 2 output power"),
    _pd_power("pd_qc_usb1_watts", "pd.qcUsb1Watts", "USB-A fast charge 1 output power"),
    _pd_power("pd_qc_usb2_watts", "pd.qcUsb2Watts", "USB-A fast charge 2 output power"),
    _pd_energy("pd_chg_power_ac", "pd.chgPowerAc", "Total AC charged"),
    _pd_energy("pd_chg_power_dc", "pd.chgPowerDc", "Total DC charged"),
    _pd_energy("pd_dsg_power_dc", "pd.dsgPowerDc", "Total DC discharged"),
    EcoFlowSensorEntityDescription(
        key="pd_lcd_off_sec",
        mqtt_key="pd.lcdOffSec",
        name="Screen timeout",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="pd_standby_mode",
        mqtt_key="pd.standByMode",
        name="Device standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

_ENERGY_SENSORS = (
    *battery_charge_discharge(["bmsMaster.inputWatts"], ["bmsMaster.outputWatts"]),
)

# ---------------------------------------------------------------------------
# Extra battery packs  (kit.productInfoDetails — one element per pack slot; an
# empty ``sn`` marks a vacant slot)
# ---------------------------------------------------------------------------

_EXTRA_BATTERY_MAX = 2


def _kit_pack(quota: Mapping[str, Any], index: int) -> Mapping[str, Any] | None:
    packs = quota.get("kit.productInfoDetails")
    if not isinstance(packs, list) or index >= len(packs):
        return None
    pack = packs[index]
    if not isinstance(pack, Mapping) or not pack.get("sn"):
        return None
    return pack


def _kit_soc(index: int):
    def _fn(quota: Mapping[str, Any]) -> float | None:
        pack = _kit_pack(quota, index)
        if pack is None:
            return None
        soc = pack.get("f32Soc", pack.get("soc"))
        return round2(soc)

    return _fn


def _extra_battery_sensors(quota: Mapping[str, Any]) -> list[EcoFlowSensorEntityDescription]:
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(_EXTRA_BATTERY_MAX):
        if _kit_pack(quota, i) is None:
            continue
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"kit_pack{i + 1}_soc",
                mqtt_key="kit.productInfoDetails",
                name="Battery",
                device_class=SensorDeviceClass.BATTERY,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
                quota_value_fn=_kit_soc(i),
                available_fn=lambda q, _i=i: _kit_pack(q, _i) is not None,
                child_device=ChildDevice(f"extra_battery_{i + 1}", f"Extra battery {i + 1}"),
            )
        )
    return descs


# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="battery_charging",
        mqtt_key="ems.chgState",
        name="Battery charging",
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        value_fn=lambda v: None if v is None else int(v) == 2,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="xboost_state",
        mqtt_key="inv.cfgAcXboost",
        name="X-Boost",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=to_bool,
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
        value_fn=to_bool,
        command_fn=lambda value, _q: _cmd(_MODULE_INV, 66, {"enabled": 1 if value else 0}),
    ),
    EcoFlowSwitchEntityDescription(
        key="car_charger",
        mqtt_key="mppt.carState",
        name="Car charger",
        value_fn=to_bool,
        command_fn=lambda value, _q: _cmd(_MODULE_MPPT, 81, {"enabled": 1 if value else 0}),
    ),
    EcoFlowSwitchEntityDescription(
        key="dc_output",
        mqtt_key="pd.dcOutState",
        name="DC output",
        value_fn=to_bool,
        command_fn=lambda value, _q: _cmd(_MODULE_PD, 34, {"enabled": 1 if value else 0}),
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
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: _cmd(_MODULE_INV, 49, {"maxChgSoc": int(value)}),
    ),
    EcoFlowNumberEntityDescription(
        key="min_discharge_soc",
        mqtt_key="ems.minDsgSoc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=UnitOfRatio.PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: _cmd(_MODULE_BMS, 51, {"minDsgSoc": int(value)}),
    ),
    EcoFlowNumberEntityDescription(
        key="standby_time",
        mqtt_key="pd.standByMode",
        name="Device standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=720,
        native_step=1,
        mode=NumberMode.BOX,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: _cmd(_MODULE_PD, 33, {"standByMode": int(value)}),
    ),
    EcoFlowNumberEntityDescription(
        key="screen_timeout",
        mqtt_key="pd.lcdOffSec",
        name="Screen timeout",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        native_min_value=0,
        native_max_value=1800,
        native_step=1,
        mode=NumberMode.BOX,
        entity_category=EntityCategory.CONFIG,
        command_fn=lambda value, _q: _cmd(_MODULE_PD, 39, {"lcdTime": int(value)}),
    ),
)

# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class DeltaMaxDevice(EcoFlowDevice):
    """EcoFlow DELTA Max (original) portable power station.

    Serial numbers start with ``DACB`` (spec example ``DACBZ2ZD5190027``),
    distinct from the Delta Pro (``DCAB``/``DCEB``), Delta 2 Max (``R35``) and
    Delta 3 Max (``D3M1``/``D3N1``). Matched by SN prefix only: its quota keys
    (``bmsMaster.*``, ``inv.cfgAcEnabled``) are a subset of the Delta Pro's, so
    no quota heuristic can tell an unknown serial apart reliably.
    """

    model = "EcoFlow DELTA Max"
    sn_prefixes: tuple[str, ...] = ("DACB",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix only (see class docstring)."""
        return any(sn.startswith(p) for p in cls.sn_prefixes)

    def dynamic_entity_descriptions(
        self, platform: Platform, quota: Mapping[str, Any]
    ) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return list(_extra_battery_sensors(quota))
        return []

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_BATTERY_SENSORS,
                *_EMS_SENSORS,
                *_INV_SENSORS,
                *_PD_SENSORS,
                *_ENERGY_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        return []
