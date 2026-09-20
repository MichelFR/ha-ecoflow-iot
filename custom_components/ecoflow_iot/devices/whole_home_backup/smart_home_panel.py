"""EcoFlow Smart Home Panel device definition.

The Smart Home Panel (SP10) is a 10-circuit load management panel that bridges
grid and battery sources.  It reports per-circuit power/current/state, global
grid/battery status, energy statistics, and accepts set commands to control
individual load channels and emergency/charging strategies.

All set commands use the ``cmdSet=11`` / ``id=<N>`` style (the "TCP" operateType
documented in the public API). ``build_cmd_set_command`` is NOT used because the
full MQTT body includes ``moduleType`` and ``operateType`` in addition to the
``params`` block containing ``cmdSet``/``id``; ``build_legacy_command`` is used
with ``module_type=1`` and ``operate_type="TCP"``.

Quota key reference:
  heartbeat.*            — global panel state
  heartbeat.loadCmdChCtrlInfos  — array[10] of per-channel ctrl objects
  emergencyStrategy.chSta       — array[10] of {priority, isEnable}
  epsModeInfo.eps               — EPS (UPS) mode on/off
  gridInfo.gridVol/gridFreq     — grid parameters
  backupChaDiscCfg.*            — charge/discharge thresholds
  loadChCurInfo.cur             — array[10] of per-channel configured current (A)
  channelPower.infoList / infoList — array[12] of {powType, chWatt}: 10 load
                                  channels + 2 battery ports (cmdSet=11, id=96,
                                  undocumented; pushed unprefixed over MQTT)
  loadChInfo.info               — array[10] of {iconNum, chName}: user-assigned
                                  channel names as null-padded byte arrays (id=33)
  heartbeat.energyInfos         — array[2] of per-battery-port state (SoC, power,
                                  temperature, charge/discharge time, stateBean)
  mainsLoadWatt.watth           — array[10]×24 hourly grid Wh per channel (id=48)
  backupLoadWatt.watth          — array[10]×24 hourly battery Wh per channel (id=49)
  topupLoadWatt.watth           — array[2]×24 hourly battery-port charge Wh (id=50)
  chUseInfo.isEnable            — array[10] channel-configured flags (id=27)
  selfCheck.vIn                 — array[10] per-channel input voltage (id=113)
  splitPhaseInfo.cfgList        — array[10] of {linkMark, linkCh} 240V pairs (id=19)
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
from ..helpers import (
    round2 as _round2,
)

# Serial-number prefix documented in spec examples (SP10ZAW5…).
_SN_PREFIX = "SP10"

# Number of load channels on the panel.
_CHANNEL_COUNT = 10


# ---------------------------------------------------------------------------
# Helper value functions
# ---------------------------------------------------------------------------


def _bool_from_int(value: Any) -> bool | None:
    if value is None:
        return None
    return bool(int(value))


def _ch_ctrl_sta(quota: Mapping[str, Any], ch: int) -> int | None:
    """Return ctrlSta for channel *ch* from heartbeat.loadCmdChCtrlInfos."""
    infos = quota.get("heartbeat.loadCmdChCtrlInfos")
    if not infos or not isinstance(infos, list) or ch >= len(infos):
        return None
    return infos[ch].get("ctrlSta")


def _ch_is_on(quota: Mapping[str, Any], ch: int) -> bool | None:
    """True when channel ctrlSta != 2 (i.e. not 'close')."""
    sta = _ch_ctrl_sta(quota, ch)
    if sta is None:
        return None
    return sta != 2


def _ch_from_grid(quota: Mapping[str, Any], ch: int) -> bool | None:
    """True when channel is powered by the grid (ctrlSta == 0)."""
    sta = _ch_ctrl_sta(quota, ch)
    if sta is None:
        return None
    return sta == 0


def _ch_emergency_enabled(quota: Mapping[str, Any], ch: int) -> bool | None:
    """Return isEnable for channel *ch* from emergencyStrategy.chSta."""
    ch_sta = quota.get("emergencyStrategy.chSta")
    if not ch_sta or not isinstance(ch_sta, list) or ch >= len(ch_sta):
        return None
    val = ch_sta[ch].get("isEnable")
    if val is None:
        return None
    return bool(int(val))


def _ch_priority(quota: Mapping[str, Any], ch: int) -> int | None:
    """Return backup priority for channel *ch* from emergencyStrategy.chSta."""
    ch_sta = quota.get("emergencyStrategy.chSta")
    if not ch_sta or not isinstance(ch_sta, list) or ch >= len(ch_sta):
        return None
    return ch_sta[ch].get("priority")


def _ch_cfg_cur(quota: Mapping[str, Any], ch: int) -> float | None:
    """Return configured current (A) for channel *ch* from loadChCurInfo.cur."""
    cur = quota.get("loadChCurInfo.cur")
    if not cur or not isinstance(cur, list) or ch >= len(cur):
        return None
    return float(cur[ch])


def _ch_watt_list(quota: Mapping[str, Any]) -> list[Any] | None:
    """Return the per-channel power list (cmdSet=11, id=96).

    MQTT pushes carry the params unprefixed (bare ``infoList``), while the
    HTTP ``quota/all`` snapshot exposes the same data as
    ``channelPower.infoList``; prefer the pushed copy — it refreshes every
    second while the prefixed one only refreshes on full resyncs.
    """
    for key in ("infoList", "channelPower.infoList"):
        infos = quota.get(key)
        if (
            isinstance(infos, list)
            and infos
            and isinstance(infos[0], dict)
            and "chWatt" in infos[0]
        ):
            return infos
    return None


def _ch_watt(quota: Mapping[str, Any], ch: int) -> float | None:
    """Return current power draw (W) for channel *ch*."""
    infos = _ch_watt_list(quota)
    if infos is None or ch >= len(infos) or not isinstance(infos[ch], dict):
        return None
    return _round2(infos[ch].get("chWatt"))


def _ch_name_list(quota: Mapping[str, Any]) -> list[Any] | None:
    """Return the loadChInfo.info list (nested object or flattened key)."""
    info = quota.get("loadChInfo.info")
    if info is None:
        parent = quota.get("loadChInfo")
        if isinstance(parent, dict):
            info = parent.get("info")
    return info if isinstance(info, list) else None


def _ch_name(quota: Mapping[str, Any], ch: int) -> str | None:
    """Decode the user-assigned name of channel *ch* from loadChInfo.info.

    ``chName`` is a null-padded array of byte values; anything undecodable or
    empty returns None.
    """
    info = _ch_name_list(quota)
    if info is None or ch >= len(info) or not isinstance(info[ch], dict):
        return None
    raw = info[ch].get("chName")
    if not isinstance(raw, list):
        return None
    try:
        name = bytes(b for b in raw if isinstance(b, int) and 0 < b < 256).decode(
            "utf-8", errors="ignore"
        )
    except ValueError:
        return None
    return name.strip() or None


def _row_sum(quota: Mapping[str, Any], key: str, row: int) -> float | None:
    """Sum one row of an hourly Wh matrix (mains/backup/topup LoadWatt)."""
    matrix = quota.get(key)
    if not isinstance(matrix, list) or row >= len(matrix):
        return None
    values = matrix[row]
    if not isinstance(values, list):
        return None
    try:
        return float(sum(values))
    except TypeError:
        return None


def _energy_info(quota: Mapping[str, Any], port: int) -> Mapping[str, Any] | None:
    """Return heartbeat.energyInfos[*port*] (one entry per battery port)."""
    infos = quota.get("heartbeat.energyInfos")
    if not isinstance(infos, list) or port >= len(infos):
        return None
    info = infos[port]
    return info if isinstance(info, dict) else None


def _energy_info_value(quota: Mapping[str, Any], port: int, field: str) -> Any:
    info = _energy_info(quota, port)
    if info is None:
        return None
    return info.get(field)


def _energy_info_state(quota: Mapping[str, Any], port: int, flag: str) -> bool | None:
    info = _energy_info(quota, port)
    if info is None:
        return None
    bean = info.get("stateBean")
    if not isinstance(bean, dict) or flag not in bean:
        return None
    return bool(int(bean[flag]))


def _list_index(quota: Mapping[str, Any], key: str, idx: int) -> Any:
    values = quota.get(key)
    if not isinstance(values, list) or idx >= len(values):
        return None
    return values[idx]


def _ch_split_phase(quota: Mapping[str, Any], ch: int) -> bool | None:
    cfg = _list_index(quota, "splitPhaseInfo.cfgList", ch)
    if not isinstance(cfg, dict) or "linkMark" not in cfg:
        return None
    return bool(int(cfg["linkMark"]))


# ---------------------------------------------------------------------------
# Command builders (legacy moduleType=1, operateType="TCP", cmdSet=11)
# ---------------------------------------------------------------------------


def _load_channel_command(ch: int, value: Any, _quota: Mapping[str, Any]) -> dict[str, Any]:
    """Toggle load channel *ch* on/off (id=16, sta: 0=off 1=on, ctrlMode=1 manual)."""
    sta = 1 if value else 2  # 1=grid supply, 2=close
    return build_legacy_command(
        module_type=1,
        operate_type="TCP",
        params={"cmdSet": 11, "id": 16, "ch": ch, "ctrlMode": 1, "sta": sta},
    )


def _channel_enable_command(ch: int, value: Any, _quota: Mapping[str, Any]) -> dict[str, Any]:
    """Set emergency-mode channel enable (id=26, isEnable: 0=off 1=on)."""
    return build_legacy_command(
        module_type=1,
        operate_type="TCP",
        params={"cmdSet": 11, "id": 26, "chNum": ch, "isEnable": 1 if value else 0},
    )


def _eps_command(value: Any, _quota: Mapping[str, Any]) -> dict[str, Any]:
    """Enable/disable EPS (UPS) mode (id=24)."""
    return build_legacy_command(
        module_type=1,
        operate_type="TCP",
        params={"cmdSet": 11, "id": 24, "eps": 1 if value else 0},
    )


def _force_charge_high_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    """Set charge upper threshold (id=29); must send discLower together."""
    return build_legacy_command(
        module_type=1,
        operate_type="TCP",
        params={
            "cmdSet": 11,
            "id": 29,
            "forceChargeHigh": int(value),
            "discLower": int(quota.get("backupChaDiscCfg.discLower", 0)),
        },
    )


def _disc_lower_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    """Set discharge lower threshold (id=29); must send forceChargeHigh together."""
    return build_legacy_command(
        module_type=1,
        operate_type="TCP",
        params={
            "cmdSet": 11,
            "id": 29,
            "forceChargeHigh": int(quota.get("backupChaDiscCfg.forceChargeHigh", 100)),
            "discLower": int(value),
        },
    )


# ---------------------------------------------------------------------------
# Global / system-level sensors
# ---------------------------------------------------------------------------

_GLOBAL_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="backup_bat_per",
        mqtt_key="heartbeat.backupBatPer",
        name="Backup battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_full_cap",
        mqtt_key="heartbeat.backupFullCap",
        name="Backup full capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_day_watth",
        mqtt_key="heartbeat.gridDayWatth",
        name="Grid energy today",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_day_watth",
        mqtt_key="heartbeat.backupDayWatth",
        name="Backup energy today",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_cha_time",
        mqtt_key="heartbeat.backupChaTime",
        name="Backup discharge time remaining",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="work_time",
        mqtt_key="heartbeat.workTime",
        name="Device work time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_vol",
        mqtt_key="gridInfo.gridVol",
        name="Grid voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_freq",
        mqtt_key="gridInfo.gridFreq",
        name="Grid frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_charge_high",
        mqtt_key="backupChaDiscCfg.forceChargeHigh",
        name="Charge upper threshold",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_disc_lower",
        mqtt_key="backupChaDiscCfg.discLower",
        name="Discharge lower threshold",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# ---------------------------------------------------------------------------
# Global binary sensors
# ---------------------------------------------------------------------------

_GLOBAL_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="grid_sta",
        mqtt_key="heartbeat.gridSta",
        name="Grid status",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=_bool_from_int,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="eps_mode",
        mqtt_key="epsModeInfo.eps",
        name="EPS mode",
        device_class=BinarySensorDeviceClass.RUNNING,
        value_fn=_bool_from_int,
    ),
)

# ---------------------------------------------------------------------------
# Global switches
# ---------------------------------------------------------------------------

_GLOBAL_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="eps_mode_switch",
        mqtt_key="epsModeInfo.eps",
        name="EPS mode",
        value_fn=_bool_from_int,
        command_fn=_eps_command,
    ),
)

# ---------------------------------------------------------------------------
# Global number controls
# ---------------------------------------------------------------------------

_GLOBAL_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="force_charge_high",
        mqtt_key="backupChaDiscCfg.forceChargeHigh",
        name="Charge upper threshold",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_force_charge_high_command,
    ),
    EcoFlowNumberEntityDescription(
        key="disc_lower",
        mqtt_key="backupChaDiscCfg.discLower",
        name="Discharge lower threshold",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_disc_lower_command,
    ),
)


# ---------------------------------------------------------------------------
# Per-channel entity generators
# ---------------------------------------------------------------------------


def _channel_sensors(count: int) -> list[EcoFlowSensorEntityDescription]:
    """Build per-channel sensors for *count* load channels (0-indexed internally)."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for ch in range(count):
        label = ch + 1  # human-readable 1-based label
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_watt",
                name=f"Channel {label} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=lambda q, c=ch: _ch_watt(q, c),
                available_fn=lambda q: _ch_watt_list(q) is not None,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_name",
                name=f"Channel {label} name",
                entity_category=EntityCategory.DIAGNOSTIC,
                icon="mdi:label-outline",
                quota_value_fn=lambda q, c=ch: _ch_name(q, c),
                available_fn=lambda q, c=ch: _ch_name(q, c) is not None,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_grid_watth",
                name=f"Channel {label} grid energy today",
                device_class=SensorDeviceClass.ENERGY,
                state_class=SensorStateClass.TOTAL_INCREASING,
                native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
                quota_value_fn=lambda q, c=ch: _row_sum(q, "mainsLoadWatt.watth", c),
                available_fn=lambda q: "mainsLoadWatt.watth" in q,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_backup_watth",
                name=f"Channel {label} battery energy today",
                device_class=SensorDeviceClass.ENERGY,
                state_class=SensorStateClass.TOTAL_INCREASING,
                native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
                quota_value_fn=lambda q, c=ch: _row_sum(q, "backupLoadWatt.watth", c),
                available_fn=lambda q: "backupLoadWatt.watth" in q,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_in_vol",
                name=f"Channel {label} input voltage",
                device_class=SensorDeviceClass.VOLTAGE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricPotential.VOLT,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, c=ch: _round2(_list_index(q, "selfCheck.vIn", c)),
                available_fn=lambda q: "selfCheck.vIn" in q,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_ctrl_sta",
                name=f"Channel {label} state",
                quota_value_fn=lambda q, c=ch: _ch_ctrl_sta(q, c),
                available_fn=lambda q: "heartbeat.loadCmdChCtrlInfos" in q,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_cfg_cur",
                name=f"Channel {label} configured current",
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                quota_value_fn=lambda q, c=ch: _ch_cfg_cur(q, c),
                available_fn=lambda q: "loadChCurInfo.cur" in q,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"ch{label}_priority",
                name=f"Channel {label} backup priority",
                state_class=SensorStateClass.MEASUREMENT,
                entity_category=EntityCategory.DIAGNOSTIC,
                quota_value_fn=lambda q, c=ch: _ch_priority(q, c),
                available_fn=lambda q: "emergencyStrategy.chSta" in q,
            )
        )
    return descs


def _battery_port_sensors() -> list[EcoFlowSensorEntityDescription]:
    """Sensors for the two battery ports (channelPower indices 10/11 and
    heartbeat.energyInfos entries)."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for port in range(2):
        label = port + 1
        idx = _CHANNEL_COUNT + port
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_watt",
                name=f"Battery port {label} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, i=idx: _ch_watt(q, i),
                available_fn=lambda q, i=idx: (
                    (infos := _ch_watt_list(q)) is not None and len(infos) > i
                ),
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_soc",
                name=f"Battery port {label} battery",
                device_class=SensorDeviceClass.BATTERY,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=PERCENTAGE,
                quota_value_fn=lambda q, p=port: _energy_info_value(
                    q, p, "batteryPercentage"
                ),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_output_watt",
                name=f"Battery port {label} output power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=lambda q, p=port: _round2(
                    _energy_info_value(q, p, "outputPower")
                ),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_temp",
                name=f"Battery port {label} temperature",
                device_class=SensorDeviceClass.TEMPERATURE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfTemperature.CELSIUS,
                entity_category=EntityCategory.DIAGNOSTIC,
                quota_value_fn=lambda q, p=port: _energy_info_value(
                    q, p, "emsBatTemp"
                ),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_charge_time",
                name=f"Battery port {label} charge time remaining",
                device_class=SensorDeviceClass.DURATION,
                native_unit_of_measurement=UnitOfTime.MINUTES,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, p=port: _energy_info_value(
                    q, p, "chargeTime"
                ),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_discharge_time",
                name=f"Battery port {label} discharge time remaining",
                device_class=SensorDeviceClass.DURATION,
                native_unit_of_measurement=UnitOfTime.MINUTES,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, p=port: _energy_info_value(
                    q, p, "dischargeTime"
                ),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_full_cap",
                name=f"Battery port {label} full capacity",
                device_class=SensorDeviceClass.ENERGY_STORAGE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, p=port: _energy_info_value(q, p, "fullCap"),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"battery_port{label}_charge_watth",
                name=f"Battery port {label} charge energy today",
                device_class=SensorDeviceClass.ENERGY,
                state_class=SensorStateClass.TOTAL_INCREASING,
                native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
                quota_value_fn=lambda q, p=port: _row_sum(q, "topupLoadWatt.watth", p),
                available_fn=lambda q: "topupLoadWatt.watth" in q,
                undocumented=True,
            )
        )
    return descs


def _battery_port_binary_sensors() -> list[EcoFlowBinarySensorEntityDescription]:
    """Binary sensors for the two battery ports (heartbeat.energyInfos stateBean)."""
    descs: list[EcoFlowBinarySensorEntityDescription] = []
    for port in range(2):
        label = port + 1
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"battery_port{label}_connected",
                name=f"Battery port {label} connected",
                device_class=BinarySensorDeviceClass.CONNECTIVITY,
                entity_category=EntityCategory.DIAGNOSTIC,
                quota_value_fn=lambda q, p=port: _energy_info_state(q, p, "isConnect"),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"battery_port{label}_grid_charge",
                name=f"Battery port {label} grid charging",
                device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, p=port: _energy_info_state(
                    q, p, "isGridCharge"
                ),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"battery_port{label}_output",
                name=f"Battery port {label} output",
                device_class=BinarySensorDeviceClass.POWER,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, p=port: _energy_info_state(
                    q, p, "isPowerOutput"
                ),
                available_fn=lambda q, p=port: _energy_info(q, p) is not None,
            )
        )
    return descs


def _channel_binary_sensors(count: int) -> list[EcoFlowBinarySensorEntityDescription]:
    """Build per-channel binary sensors."""
    descs: list[EcoFlowBinarySensorEntityDescription] = []
    for ch in range(count):
        label = ch + 1
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"ch{label}_on",
                name=f"Channel {label} on",
                device_class=BinarySensorDeviceClass.POWER,
                quota_value_fn=lambda q, c=ch: _ch_is_on(q, c),
                available_fn=lambda q: "heartbeat.loadCmdChCtrlInfos" in q,
            )
        )
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"ch{label}_grid",
                name=f"Channel {label} grid source",
                device_class=BinarySensorDeviceClass.PLUG,
                quota_value_fn=lambda q, c=ch: _ch_from_grid(q, c),
                available_fn=lambda q: "heartbeat.loadCmdChCtrlInfos" in q,
                entity_registry_enabled_default=False,
            )
        )
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"ch{label}_emergency_enabled",
                name=f"Channel {label} emergency enabled",
                quota_value_fn=lambda q, c=ch: _ch_emergency_enabled(q, c),
                available_fn=lambda q: "emergencyStrategy.chSta" in q,
                entity_registry_enabled_default=False,
            )
        )
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"ch{label}_in_use",
                name=f"Channel {label} configured",
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, c=ch: (
                    None
                    if (v := _list_index(q, "chUseInfo.isEnable", c)) is None
                    else bool(v)
                ),
                available_fn=lambda q: "chUseInfo.isEnable" in q,
                undocumented=True,
            )
        )
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"ch{label}_split_phase",
                name=f"Channel {label} split phase linked",
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=lambda q, c=ch: _ch_split_phase(q, c),
                available_fn=lambda q: "splitPhaseInfo.cfgList" in q,
                undocumented=True,
            )
        )
    return descs


def _channel_switches(count: int) -> list[EcoFlowSwitchEntityDescription]:
    """Build per-channel load-control switches (load channel, id=16)."""
    descs: list[EcoFlowSwitchEntityDescription] = []
    for ch in range(count):
        label = ch + 1
        descs.append(
            EcoFlowSwitchEntityDescription(
                key=f"ch{label}_load_switch",
                name=f"Channel {label}",
                quota_value_fn=lambda q, c=ch: _ch_is_on(q, c),
                available_fn=lambda q: "heartbeat.loadCmdChCtrlInfos" in q,
                command_fn=lambda value, q, c=ch: _load_channel_command(c, value, q),
            )
        )
    return descs


def _channel_enable_switches(count: int) -> list[EcoFlowSwitchEntityDescription]:
    """Build per-channel emergency-enable switches (id=26)."""
    descs: list[EcoFlowSwitchEntityDescription] = []
    for ch in range(count):
        label = ch + 1
        descs.append(
            EcoFlowSwitchEntityDescription(
                key=f"ch{label}_emergency_enable_switch",
                name=f"Channel {label} emergency enable",
                quota_value_fn=lambda q, c=ch: _ch_emergency_enabled(q, c),
                available_fn=lambda q: "emergencyStrategy.chSta" in q,
                entity_registry_enabled_default=False,
                command_fn=lambda value, q, c=ch: _channel_enable_command(c, value, q),
            )
        )
    return descs


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class SmartHomePanelDevice(EcoFlowDevice):
    """EcoFlow Smart Home Panel — 10-circuit whole-home backup panel."""

    model = "EcoFlow Smart Home Panel"
    sn_prefixes = (_SN_PREFIX,)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        # Match on SN prefix OR distinctive quota key present in heartbeat data.
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        return bool(quota) and "heartbeat.loadCmdChCtrlInfos" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_GLOBAL_SENSORS,
                *_channel_sensors(_CHANNEL_COUNT),
                *_battery_port_sensors(),
            ]
        if platform == Platform.BINARY_SENSOR:
            return [
                *_GLOBAL_BINARY_SENSORS,
                *_channel_binary_sensors(_CHANNEL_COUNT),
                *_battery_port_binary_sensors(),
            ]
        if platform == Platform.SWITCH:
            return [
                *_GLOBAL_SWITCHES,
                *_channel_switches(_CHANNEL_COUNT),
                *_channel_enable_switches(_CHANNEL_COUNT),
            ]
        if platform == Platform.NUMBER:
            return list(_GLOBAL_NUMBERS)
        return []
