"""EcoFlow Stream family device definitions.

Covers Stream Ultra / Ultra X / AC / AC Pro / Pro (full feature set) and the
Stream Microinverter (grid + PV only, no battery/relays). Field names and units
follow the public quota schema (mV/mA values are scaled to V/A here).
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
    EcoFlowIntegralSensorEntityDescription,
    EcoFlowNumberEntityDescription,
    EcoFlowSelectEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..commands import build_stream_command
from ..helpers import (
    abs_round as _abs_round,
    milli as _scale_1000,
    round2 as _round2,
)

# Quota keys that only the battery-equipped variants report.
_BATTERY_MARKERS = ("cmsBattSoc", "bmsBattSoc", "soc")


def _computed_pv_power(quota: Mapping[str, Any], amp_key: str, vol_key: str) -> float | None:
    """Compute per-MPPT watts from current x voltage (newer-firmware fallback)."""
    amp = quota.get(amp_key)
    vol = quota.get(vol_key)
    if amp is None or vol is None:
        return None
    return round(float(amp) * float(vol), 1)


def _pv_power_with_fallback(power_key: str, amp_key: str, vol_key: str):
    """Return a quota_value_fn that prefers reported power, else amp x vol."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        reported = quota.get(power_key)
        if reported:
            return round(float(reported), 1)
        return _computed_pv_power(quota, amp_key, vol_key)

    return _fn


# --- Operating mode (select) -------------------------------------------------

_MODE_SELF_POWERED = "self_powered"
_MODE_SCHEDULED = "scheduled"
_MODE_TOU = "time_of_use"
_MODE_INTELLIGENT = "intelligent"
_MODE_FLAGS = {
    _MODE_SELF_POWERED: "operateSelfPoweredOpen",
    _MODE_SCHEDULED: "operateScheduledOpen",
    _MODE_TOU: "operateTouModeOpen",
    _MODE_INTELLIGENT: "operateIntelligentScheduleModeOpen",
}


def _current_operating_mode(quota: Mapping[str, Any]) -> str | None:
    for mode, flag in _MODE_FLAGS.items():
        if quota.get(f"energyStrategyOperateMode.{flag}"):
            return mode
    return None


def _operating_mode_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    flag = _MODE_FLAGS[option]
    return {"cfgEnergyStrategyOperateMode": {flag: True}}


def _charge_limit_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    # Charge and discharge limits must be sent together.
    return {
        "cfgMaxChgSoc": int(value),
        "cfgMinDsgSoc": int(quota.get("cmsMinDsgSoc", 0)),
    }


def _discharge_limit_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    return {
        "cfgMaxChgSoc": int(quota.get("cmsMaxChgSoc", 100)),
        "cfgMinDsgSoc": int(value),
    }


# --- Sensors -----------------------------------------------------------------

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
        key="bms_batt_soc",
        mqtt_key="bmsBattSoc",
        name="Battery (BMS)",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="soh",
        mqtt_key="cmsBattSoh",
        name="Battery health",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_vol",
        mqtt_key="vol",
        name="Battery voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_amp",
        mqtt_key="amp",
        name="Battery current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="bat_temp",
        mqtt_key="temp",
        name="Battery temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
    ),
    EcoFlowSensorEntityDescription(
        key="full_energy",
        mqtt_key="cmsBattFullEnergy",
        name="Battery capacity",
        device_class=SensorDeviceClass.ENERGY_STORAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="cycles",
        mqtt_key="cycles",
        name="Battery cycles",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
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
        key="accu_chg_energy",
        mqtt_key="accuChgEnergy",
        name="Total charged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
    EcoFlowSensorEntityDescription(
        key="accu_dsg_energy",
        mqtt_key="accuDsgEnergy",
        name="Total discharged",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
    ),
)

_POWERFLOW_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bat_power",
        mqtt_key="powGetBpCms",
        name="Battery power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_load",
        mqtt_key="powGetSysLoad",
        name="Load power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="load_from_bat",
        mqtt_key="powGetSysLoadFromBp",
        name="Load from battery",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="load_from_grid",
        mqtt_key="powGetSysLoadFromGrid",
        name="Load from grid",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="load_from_pv",
        mqtt_key="powGetSysLoadFromPv",
        name="Load from solar",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
)

# Grid + inverter sensors shared by every Stream variant (incl. microinverter).
_GRID_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="grid_power",
        mqtt_key="gridConnectionPower",
        name="Grid power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_grid_power",
        mqtt_key="sysGridConnectionPower",
        name="System grid power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_voltage",
        mqtt_key="gridConnectionVol",
        name="Grid voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="grid_freq",
        mqtt_key="gridConnectionFreq",
        name="Grid frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="inv_temp",
        mqtt_key="invNtcTemp3",
        name="Inverter temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="meter_phase_a",
        mqtt_key="cloudMetter.phaseAPower",
        name="Meter phase A power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
    ),
)

_PV_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="pv_total",
        mqtt_key="powGetPvSum",
        name="Solar power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
)


# --- Derived energy (Energy Dashboard) ---------------------------------------
#
# Stream reports grid/solar power but no cumulative energy in the live quota
# (energy lives only in the separate historical-data API). These sensors
# integrate the live power into Wh totals so the device can populate the
# Energy Dashboard's solar-production and grid consumption/return sources.
# ``gridConnectionPower`` is signed: positive = drawn from grid (import),
# negative = fed to grid (export); each leg is clamped non-negative so its
# running total only ever increases.


def _solar_power(quota: Mapping[str, Any]) -> float | None:
    value = quota.get("powGetPvSum")
    return max(float(value), 0.0) if value is not None else None


def _grid_import_power(quota: Mapping[str, Any]) -> float | None:
    value = quota.get("gridConnectionPower")
    return max(float(value), 0.0) if value is not None else None


def _grid_export_power(quota: Mapping[str, Any]) -> float | None:
    value = quota.get("gridConnectionPower")
    return max(-float(value), 0.0) if value is not None else None


_ENERGY_SENSORS: tuple[EcoFlowIntegralSensorEntityDescription, ...] = (
    EcoFlowIntegralSensorEntityDescription(
        key="solar_energy",
        name="Solar energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_solar_power,
        available_fn=lambda q: "powGetPvSum" in q,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="grid_import_energy",
        name="Grid import energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_grid_import_power,
        available_fn=lambda q: "gridConnectionPower" in q,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="grid_export_energy",
        name="Grid export energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_grid_export_power,
        available_fn=lambda q: "gridConnectionPower" in q,
    ),
)


def _pv_string_sensors(count: int) -> tuple[EcoFlowSensorEntityDescription, ...]:
    """Build per-MPPT power/voltage/current sensors for ``count`` strings."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(1, count + 1):
        suffix = "" if i == 1 else str(i)
        power_key = f"powGetPv{suffix}" if i > 1 else "powGetPv"
        amp_key = f"plugInInfoPv{suffix}Amp" if i > 1 else "plugInInfoPvAmp"
        vol_key = f"plugInInfoPv{suffix}Vol" if i > 1 else "plugInInfoPvVol"
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{i}_power",
                name=f"Solar string {i} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=_pv_power_with_fallback(power_key, amp_key, vol_key),
                available_fn=lambda q, a=amp_key, p=power_key: a in q or p in q,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{i}_voltage",
                mqtt_key=vol_key,
                name=f"Solar string {i} voltage",
                device_class=SensorDeviceClass.VOLTAGE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricPotential.VOLT,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                value_fn=_round2,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{i}_current",
                mqtt_key=amp_key,
                name=f"Solar string {i} current",
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                value_fn=_round2,
            )
        )
    return tuple(descs)


_AC_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="schuko1_power",
        mqtt_key="powGetSchuko1",
        name="AC socket 1 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="schuko2_power",
        mqtt_key="powGetSchuko2",
        name="AC socket 2 power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
)


def _socket_power(key: str):
    """Return a power_fn yielding a socket's (non-negative) output power."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        value = quota.get(key)
        return max(float(value), 0.0) if value is not None else None

    return _fn


# Per-socket energy totals for the Energy Dashboard's "individual devices"
# (full Stream only — the microinverter has no AC sockets).
_AC_ENERGY_SENSORS: tuple[EcoFlowIntegralSensorEntityDescription, ...] = (
    EcoFlowIntegralSensorEntityDescription(
        key="schuko1_energy",
        name="AC socket 1 energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_socket_power("powGetSchuko1"),
        available_fn=lambda q: "powGetSchuko1" in q,
    ),
    EcoFlowIntegralSensorEntityDescription(
        key="schuko2_energy",
        name="AC socket 2 energy",
        device_class=SensorDeviceClass.ENERGY,
        state_class=SensorStateClass.TOTAL_INCREASING,
        native_unit_of_measurement=UnitOfEnergy.WATT_HOUR,
        suggested_display_precision=1,
        power_fn=_socket_power("powGetSchuko2"),
        available_fn=lambda q: "powGetSchuko2" in q,
    ),
)

_DIAG_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="wifi_rssi",
        mqtt_key="moduleWifiRssi",
        name="Wi-Fi signal",
        device_class=SensorDeviceClass.SIGNAL_STRENGTH,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="dBm",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="feed_grid_limit",
        mqtt_key="feedGridModePowLimit",
        name="Feed-in power limit",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# --- Binary sensors ----------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="batt_heating",
        mqtt_key="bmsBattHeating",
        name="Battery heater",
        device_class=BinarySensorDeviceClass.HEAT,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="has_meter",
        mqtt_key="cloudMetter.hasMeter",
        name="Smart meter connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="storm_guard",
        mqtt_key="stormPatternEnable",
        name="Storm guard",
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)


def _pv_flag_binary_sensors(count: int) -> tuple[EcoFlowBinarySensorEntityDescription, ...]:
    descs = []
    for i in range(1, count + 1):
        suffix = "" if i == 1 else str(i)
        key = f"plugInInfoPv{suffix}Flag" if i > 1 else "plugInInfoPvFlag"
        descs.append(
            EcoFlowBinarySensorEntityDescription(
                key=f"pv{i}_connected",
                mqtt_key=key,
                name=f"Solar string {i} connected",
                device_class=BinarySensorDeviceClass.CONNECTIVITY,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
            )
        )
    return tuple(descs)


# --- Switches ----------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="ac1",
        mqtt_key="relay2Onoff",
        name="AC socket 1",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgRelay2Onoff": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="ac2",
        mqtt_key="relay3Onoff",
        name="AC socket 2",
        value_fn=bool,
        command_fn=lambda value, _q: {"cfgRelay3Onoff": bool(value)},
    ),
    EcoFlowSwitchEntityDescription(
        key="self_powered",
        mqtt_key="energyStrategyOperateMode.operateSelfPoweredOpen",
        name="Self-powered mode",
        value_fn=bool,
        command_fn=lambda value, _q: {
            "cfgEnergyStrategyOperateMode": {"operateSelfPoweredOpen": bool(value)}
        },
    ),
    EcoFlowSwitchEntityDescription(
        key="feed_in",
        mqtt_key="feedGridMode",
        name="Grid feed-in",
        value_fn=lambda v: v == 2,
        command_fn=lambda value, _q: {"cfgFeedGridMode": 2 if value else 1},
    ),
)

# --- Numbers -----------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="max_charge_soc",
        mqtt_key="cmsMaxChgSoc",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_charge_limit_command,
    ),
    EcoFlowNumberEntityDescription(
        key="min_discharge_soc",
        mqtt_key="cmsMinDsgSoc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=_discharge_limit_command,
    ),
    EcoFlowNumberEntityDescription(
        key="backup_reserve",
        mqtt_key="backupReverseSoc",
        name="Backup reserve",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=3,
        native_max_value=95,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {"cfgBackupReverseSoc": int(value)},
    ),
    EcoFlowNumberEntityDescription(
        key="feed_in_limit",
        mqtt_key="feedGridModePowLimit",
        name="Feed-in power limit",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=0,
        native_max_value=800,
        native_step=10,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: {"cfgFeedGridModePowLimit": int(value)},
    ),
)

# --- Selects -----------------------------------------------------------------

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="operating_mode",
        translation_key="operating_mode",
        options=[_MODE_SELF_POWERED, _MODE_SCHEDULED, _MODE_TOU, _MODE_INTELLIGENT],
        current_option_fn=_current_operating_mode,
        command_fn=_operating_mode_command,
    ),
)


class StreamDevice(EcoFlowDevice):
    """Full-featured Stream device (Ultra / Ultra X / AC / AC Pro / Pro)."""

    model = "EcoFlow Stream"
    sn_prefixes = ("BK",)
    pv_string_count = 4

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Wrap the control params in the Stream routing envelope."""
        return build_stream_command(command)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        # Battery-equipped Stream (SN prefix BK). Checked after the
        # battery-less microinverter variant in the registry.
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        return any(marker in quota for marker in _BATTERY_MARKERS)

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_BATTERY_SENSORS,
                *_POWERFLOW_SENSORS,
                *_GRID_SENSORS,
                *_PV_SENSORS,
                *_pv_string_sensors(self.pv_string_count),
                *_AC_SENSORS,
                *_ENERGY_SENSORS,
                *_AC_ENERGY_SENSORS,
                *_DIAG_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return [
                *_BINARY_SENSORS,
                *_pv_flag_binary_sensors(self.pv_string_count),
            ]
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []


class StreamMicroinverterDevice(EcoFlowDevice):
    """Stream Microinverter: grid-tie inverter with 2 PV strings, no battery."""

    model = "EcoFlow Stream Microinverter"
    sn_prefixes = ("BK",)
    pv_string_count = 2

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        # A Stream-series SN (BK) that reports grid/PV data but no battery.
        if not any(sn.startswith(p) for p in cls.sn_prefixes):
            return False
        return bool(quota) and not any(m in quota for m in _BATTERY_MARKERS)

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_GRID_SENSORS,
                *_PV_SENSORS,
                *_pv_string_sensors(self.pv_string_count),
                *_ENERGY_SENSORS,
                *_DIAG_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_pv_flag_binary_sensors(self.pv_string_count))
        return []
