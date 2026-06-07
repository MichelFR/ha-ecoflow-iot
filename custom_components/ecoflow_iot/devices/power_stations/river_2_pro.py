"""EcoFlow River 2 Pro device definition.

Quota keys follow the GetAllQuotaResponse / Report schema from the public API
docs (prefixes: pd / bms_bmsStatus / bms_emsStatus / mppt / inv).
Commands use the legacy moduleType/operateType envelope via build_legacy_command.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.number import NumberDeviceClass, NumberMode
from homeassistant.components.sensor import SensorDeviceClass, SensorStateClass
from homeassistant.const import (
    PERCENTAGE,
    EntityCategory,
    Platform,
    UnitOfElectricPotential,
    UnitOfFrequency,
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
from ..commands import build_legacy_command

# ---------------------------------------------------------------------------
# Module-type constants (from spec)
# ---------------------------------------------------------------------------
_MOD_PD = 1
_MOD_BMS = 2
_MOD_INV = 3
_MOD_MPPT = 5


# ---------------------------------------------------------------------------
# Helper: build acOutCfg command reading current quota for untouched fields
# ---------------------------------------------------------------------------

def _ac_out_cfg(
    enabled: int | None = None,
    xboost: int | None = None,
    out_freq: int | None = None,
) -> Any:
    """Return a command_fn that sets acOutCfg fields, preserving others from quota."""

    def _fn(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
        return build_legacy_command(
            _MOD_MPPT,
            "acOutCfg",
            {
                "enabled": enabled if enabled is not None else int(bool(quota.get("mppt.cfgAcEnabled", 1))),
                "xboost": xboost if xboost is not None else int(bool(quota.get("mppt.cfgAcXboost", 0))),
                "out_voltage": int(quota.get("mppt.cfgAcOutVol", 230)),
                "out_freq": out_freq if out_freq is not None else int(quota.get("mppt.cfgAcOutFreq", 1)),
            },
        )

    return _fn


def _ac_enabled_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    return build_legacy_command(
        _MOD_MPPT,
        "acOutCfg",
        {
            "enabled": 1 if value else 0,
            "xboost": int(bool(quota.get("mppt.cfgAcXboost", 0))),
            "out_voltage": int(quota.get("mppt.cfgAcOutVol", 230)),
            "out_freq": int(quota.get("mppt.cfgAcOutFreq", 1)),
        },
    )


def _xboost_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    return build_legacy_command(
        _MOD_MPPT,
        "acOutCfg",
        {
            "enabled": int(bool(quota.get("mppt.cfgAcEnabled", 1))),
            "xboost": 1 if value else 0,
            "out_voltage": int(quota.get("mppt.cfgAcOutVol", 230)),
            "out_freq": int(quota.get("mppt.cfgAcOutFreq", 1)),
        },
    )


def _ac_freq_command(value: Any, quota: Mapping[str, Any]) -> dict[str, Any]:
    """Map option string '50 Hz' / '60 Hz' to out_freq integer (1=50 Hz, 2=60 Hz)."""
    freq_map = {"50 Hz": 1, "60 Hz": 2}
    out_freq = freq_map.get(str(value), 1)
    return build_legacy_command(
        _MOD_MPPT,
        "acOutCfg",
        {
            "enabled": int(bool(quota.get("mppt.cfgAcEnabled", 1))),
            "xboost": int(bool(quota.get("mppt.cfgAcXboost", 0))),
            "out_voltage": int(quota.get("mppt.cfgAcOutVol", 230)),
            "out_freq": out_freq,
        },
    )


def _current_ac_freq(quota: Mapping[str, Any]) -> str | None:
    """Map raw out_freq integer to option string."""
    freq_int = quota.get("mppt.cfgAcOutFreq")
    if freq_int is None:
        return None
    return "60 Hz" if int(freq_int) == 2 else "50 Hz"


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    # --- Battery / SoC ---
    EcoFlowSensorEntityDescription(
        key="battery_soc",
        mqtt_key="pd.soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
    ),
    # --- Charge / discharge remaining times ---
    EcoFlowSensorEntityDescription(
        key="charge_remain_time",
        mqtt_key="bms_bmsStatus.remainTime",
        name="Time to full",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="discharge_remain_time",
        mqtt_key="bms_emsStatus.dsgRemainTime",
        name="Time to empty",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- Power outputs ---
    EcoFlowSensorEntityDescription(
        key="total_out_power",
        mqtt_key="pd.wattsOutSum",
        name="Total output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="dc_out_power",
        mqtt_key="pd.carWatts",
        name="DC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="usb_a_out_power",
        mqtt_key="pd.usb1Watts",
        name="USB-A output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="usbc_charge_power",
        mqtt_key="pd.typecChaWatts",
        name="USB-C input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="usbc_out_power",
        mqtt_key="pd.typec1Watts",
        name="USB-C output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_registry_enabled_default=False,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    # --- AC / inverter ---
    EcoFlowSensorEntityDescription(
        key="ac_in_power",
        mqtt_key="inv.inputWatts",
        name="AC input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_out_power",
        mqtt_key="inv.outputWatts",
        name="AC output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    # --- Solar / MPPT ---
    EcoFlowSensorEntityDescription(
        key="solar_in_power",
        mqtt_key="mppt.inWatts",
        name="Solar input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
    ),
    # --- AC output voltage (read-only, diagnostic) ---
    EcoFlowSensorEntityDescription(
        key="ac_out_voltage",
        mqtt_key="mppt.cfgAcOutVol",
        name="AC output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # --- Charge / discharge limits (read-back) ---
    EcoFlowSensorEntityDescription(
        key="charge_limit_readback",
        mqtt_key="bms_emsStatus.maxChargeSoc",
        name="Charge limit (reported)",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="discharge_limit_readback",
        mqtt_key="bms_emsStatus.minDsgSoc",
        name="Discharge limit (reported)",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # --- Backup reserve readback ---
    EcoFlowSensorEntityDescription(
        key="backup_reserve_readback",
        mqtt_key="pd.bpPowerSoc",
        name="Backup reserve (reported)",
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # --- AC output frequency (read-only sensor for numeric value) ---
    EcoFlowSensorEntityDescription(
        key="ac_out_freq_hz",
        mqtt_key="mppt.cfgAcOutFreq",
        name="AC output frequency (raw)",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="dc_car_on",
        mqtt_key="pd.carState",
        name="12V DC output",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="energy_mgmt_on",
        mqtt_key="pd.watchIsConfig",
        name="Energy management",
        device_class=BinarySensorDeviceClass.RUNNING,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac_enabled",
        mqtt_key="mppt.cfgAcEnabled",
        name="AC output enabled",
        device_class=BinarySensorDeviceClass.POWER,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="xboost_enabled",
        mqtt_key="mppt.cfgAcXboost",
        name="X-Boost",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
)

# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="sw_ac_enabled",
        mqtt_key="mppt.cfgAcEnabled",
        name="AC output",
        value_fn=bool,
        command_fn=_ac_enabled_command,
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_xboost",
        mqtt_key="mppt.cfgAcXboost",
        name="X-Boost",
        value_fn=bool,
        command_fn=_xboost_command,
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_dc_car",
        mqtt_key="pd.carState",
        name="12V DC output",
        value_fn=bool,
        command_fn=lambda value, _q: build_legacy_command(
            _MOD_MPPT, "mpptCar", {"enabled": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="sw_energy_mgmt",
        mqtt_key="pd.watchIsConfig",
        name="Energy management",
        value_fn=bool,
        command_fn=lambda value, quota: build_legacy_command(
            _MOD_PD,
            "watthConfig",
            {
                "isConfig": 1 if value else 0,
                "bpPowerSoc": int(quota.get("pd.bpPowerSoc", 0)),
                "minDsgSoc": int(quota.get("bms_emsStatus.minDsgSoc", 0)),
                "minChgSoc": int(quota.get("bms_emsStatus.maxChargeSoc", 100)),
            },
        ),
    ),
)

# ---------------------------------------------------------------------------
# Numbers (setpoints)
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="num_charge_limit",
        mqtt_key="bms_emsStatus.maxChargeSoc",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            _MOD_BMS, "upsConfig", {"maxChgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_discharge_limit",
        mqtt_key="bms_emsStatus.minDsgSoc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: build_legacy_command(
            _MOD_BMS, "dsgCfg", {"minDsgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="num_backup_reserve",
        mqtt_key="pd.bpPowerSoc",
        name="Backup reserve",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, quota: build_legacy_command(
            _MOD_PD,
            "watthConfig",
            {
                "isConfig": int(bool(quota.get("pd.watchIsConfig", 0))),
                "bpPowerSoc": int(value),
                "minDsgSoc": int(quota.get("bms_emsStatus.minDsgSoc", 0)),
                "minChgSoc": int(quota.get("bms_emsStatus.maxChargeSoc", 100)),
            },
        ),
    ),
)

# ---------------------------------------------------------------------------
# Selects
# ---------------------------------------------------------------------------

_AC_FREQ_OPTIONS = ["50 Hz", "60 Hz"]

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="sel_ac_out_freq",
        name="AC output frequency",
        options=_AC_FREQ_OPTIONS,
        current_option_fn=_current_ac_freq,
        command_fn=_ac_freq_command,
        entity_category=EntityCategory.CONFIG,
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class River2ProDevice(EcoFlowDevice):
    """EcoFlow River 2 Pro power station.

    Serial-number prefix sourced from example SN ``R621ZEB1XE8S0029`` in spec.
    """

    model = "EcoFlow River 2 Pro"
    # Prefix derived from example SN: R621ZEB1XE8S0029
    sn_prefixes: tuple[str, ...] = ("R621",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match by SN prefix or by presence of a distinctive River 2 Pro quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        # Fallback: quota contains a key unique to this device family
        return "bms_bmsStatus.remainTime" in quota and "mppt.inWatts" in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return list(_SENSORS)
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        if platform == Platform.SELECT:
            return list(_SELECTS)
        return []
