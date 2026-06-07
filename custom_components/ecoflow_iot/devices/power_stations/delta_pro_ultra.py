"""EcoFlow Delta Pro Ultra device definitions.

Field names and dotted keys follow the public GetAllQuotaResponse schema
(``hs_yj751_pd_appshow_addr.*`` and ``hs_yj751_pd_app_set_info_addr.*``).
Set commands use the ``cmdCode`` style documented for this device family
(MQTT: ``{"id": ..., "version": "1.0", "cmdCode": "...", "params": {...}}``;
HTTP PUT: ``{"sn": ..., "cmdCode": "...", "params": {...}}``).
No fixed routing envelope wraps all commands, so ``build_command`` is NOT
overridden — each ``command_fn`` returns the complete body.
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
from ..helpers import (
    round2 as _round2,
)

# ---------------------------------------------------------------------------
# Helper: build a cmdCode-style command body.
# The coordinator will inject ``sn`` (HTTP) or ``id``/``version``/``sn``
# (MQTT) on top of this dict — so we return the base envelope here.
# ---------------------------------------------------------------------------


def _cmd(code: str, params: dict[str, Any]) -> dict[str, Any]:
    """Return a ``cmdCode`` envelope as expected by this device family."""
    return {"cmdCode": code, "params": params}


# ---------------------------------------------------------------------------
# Scaling helpers
# ---------------------------------------------------------------------------


# ---------------------------------------------------------------------------
# Operating / task mode (select)
# ---------------------------------------------------------------------------

_MODE_DEFAULT = "default"
_MODE_SELF_POWERED = "self_powered"
_MODE_SCHEDULED = "scheduled"
_MODE_TOU = "tou"

# API values documented: 0=default, 1=self-powered, 2=scheduled, 3=TOU
_MODE_INT: dict[str, int] = {
    _MODE_DEFAULT: 0,
    _MODE_SELF_POWERED: 1,
    _MODE_SCHEDULED: 2,
    _MODE_TOU: 3,
}
_INT_MODE: dict[int, str] = {v: k for k, v in _MODE_INT.items()}


def _current_work_mode(quota: Mapping[str, Any]) -> str | None:
    raw = quota.get("hs_yj751_pd_app_set_info_addr.sysWordMode")
    if raw is None:
        return None
    return _INT_MODE.get(int(raw))


def _work_mode_command(option: str, _quota: Mapping[str, Any]) -> dict[str, Any]:
    # No set-command documented for sysWordMode; expose as read-only select via
    # a no-op stub so the entity can display the current mode.  If EcoFlow
    # documents the cmdCode in a future revision, replace this body.
    raise NotImplementedError(
        "DeltaProUltra: sysWordMode set-command is not documented in the spec"
    )


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    # --- Primary state -------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="soc",
        mqtt_key="hs_yj751_pd_appshow_addr.soc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="remain_time",
        mqtt_key="hs_yj751_pd_appshow_addr.remainTime",
        name="Remaining time",
        device_class=SensorDeviceClass.DURATION,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_num",
        mqtt_key="hs_yj751_pd_appshow_addr.bpNum",
        name="Battery pack count",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # --- Power flows ---------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="watts_in_sum",
        mqtt_key="hs_yj751_pd_appshow_addr.wattsInSum",
        name="Total input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="watts_out_sum",
        mqtt_key="hs_yj751_pd_appshow_addr.wattsOutSum",
        name="Total output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    # --- PV input ------------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="in_lv_mppt_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.inLvMpptPwr",
        name="LV MPPT input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_hv_mppt_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.inHvMpptPwr",
        name="HV MPPT input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    # --- AC input ------------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="in_ac_c20_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.inAcC20Pwr",
        name="AC C20 input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_ac_5p8_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.inAc5p8Pwr",
        name="POWER IN/OUT input power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    # --- AC output ports -----------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="out_ac_l11_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAcL11Pwr",
        name="AC port 1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l12_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAcL12Pwr",
        name="AC port 2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l21_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAcL21Pwr",
        name="AC port 3 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l22_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAcL22Pwr",
        name="AC port 4 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_tt_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAcTtPwr",
        name="AC 30A output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l14_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAcL14Pwr",
        name="AC L14 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_5p8_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAc5p8Pwr",
        name="POWER IN/OUT output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_pr_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outPrPwr",
        name="Parallel box discharge power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
    # --- DC output -----------------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="out_ads_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outAdsPwr",
        name="DC Anderson output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_typec1_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outTypec1Pwr",
        name="Type-C 1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_typec2_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outTypec2Pwr",
        name="Type-C 2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_usb1_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outUsb1Pwr",
        name="USB 1 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_usb2_pwr",
        mqtt_key="hs_yj751_pd_appshow_addr.outUsb2Pwr",
        name="USB 2 output power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    # --- Settings (read) ----------------------------------------------------
    EcoFlowSensorEntityDescription(
        key="chg_max_soc",
        mqtt_key="hs_yj751_pd_app_set_info_addr.chgMaxSoc",
        name="Charge limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="dsg_min_soc",
        mqtt_key="hs_yj751_pd_app_set_info_addr.dsgMinSoc",
        name="Discharge limit",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_soc",
        mqtt_key="hs_yj751_pd_app_set_info_addr.sysBackupSoc",
        name="Backup reserve SOC",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="backup_ratio",
        mqtt_key="hs_yj751_pd_app_set_info_addr.backupRatio",
        name="Backup reserve level",
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=PERCENTAGE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="power_standby_mins",
        mqtt_key="hs_yj751_pd_app_set_info_addr.powerStandbyMins",
        name="Device standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_standby_mins",
        mqtt_key="hs_yj751_pd_app_set_info_addr.acStandbyMins",
        name="AC standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="dc_standby_mins",
        mqtt_key="hs_yj751_pd_app_set_info_addr.dcStandbyMins",
        name="DC standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="screen_standby_sec",
        mqtt_key="hs_yj751_pd_app_set_info_addr.screenStandbySec",
        name="Screen standby time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_c20_set_watts",
        mqtt_key="hs_yj751_pd_app_set_info_addr.chgC20SetWatts",
        name="AC C20 charge power setpoint",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="chg_5p8_set_watts",
        mqtt_key="hs_yj751_pd_app_set_info_addr.chg5p8SetWatts",
        name="POWER IN/OUT charge power setpoint",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="c20_chg_max_watts",
        mqtt_key="hs_yj751_pd_appshow_addr.c20ChgMaxWatts",
        name="AC C20 max charge power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="para_chg_max_watts",
        mqtt_key="hs_yj751_pd_appshow_addr.paraChgMaxWatts",
        name="POWER IN/OUT max charge power",
        device_class=SensorDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="ac_out_freq",
        mqtt_key="hs_yj751_pd_app_set_info_addr.acOutFreq",
        name="AC output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_err_code",
        mqtt_key="hs_yj751_pd_appshow_addr.sysErrCode",
        name="Device error code",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
    # --- Backend / port telemetry (diagnostic, disabled by default) ---------
    EcoFlowSensorEntityDescription(
        key="in_lv_mppt_vol",
        mqtt_key="hs_yj751_pd_backend_addr.inLvMpptVol",
        name="LV MPPT input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_lv_mppt_amp",
        mqtt_key="hs_yj751_pd_backend_addr.inLvMpptAmp",
        name="LV MPPT input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_hv_mppt_vol",
        mqtt_key="hs_yj751_pd_backend_addr.inHvMpptVol",
        name="HV MPPT input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_hv_mppt_amp",
        mqtt_key="hs_yj751_pd_backend_addr.inHvMpptAmp",
        name="HV MPPT input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_ac_5p8_vol",
        mqtt_key="hs_yj751_pd_backend_addr.inAc5p8Vol",
        name="AC input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_ac_5p8_amp",
        mqtt_key="hs_yj751_pd_backend_addr.inAc5p8Amp",
        name="AC input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_ac_c20_vol",
        mqtt_key="hs_yj751_pd_backend_addr.inAcC20Vol",
        name="AC C20 input voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="in_ac_c20_amp",
        mqtt_key="hs_yj751_pd_backend_addr.inAcC20Amp",
        name="AC C20 input current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l21_vol",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL21Vol",
        name="AC L2-1 output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l21_amp",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL21Amp",
        name="AC L2-1 output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l22_vol",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL22Vol",
        name="AC L2-2 output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l22_amp",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL22Amp",
        name="AC L2-2 output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_tt_vol",
        mqtt_key="hs_yj751_pd_backend_addr.outAcTtVol",
        name="AC TT output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_tt_amp",
        mqtt_key="hs_yj751_pd_backend_addr.outAcTtAmp",
        name="AC TT output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l14_vol",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL14Vol",
        name="AC L14 output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l14_amp",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL14Amp",
        name="AC L14 output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_5p8_vol",
        mqtt_key="hs_yj751_pd_backend_addr.outAc5p8Vol",
        name="AC POWER IN/OUT output voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_5p8_amp",
        mqtt_key="hs_yj751_pd_backend_addr.outAc5p8Amp",
        name="AC POWER IN/OUT output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l12_amp",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL12Amp",
        name="AC L1-2 output current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    # --- Output frequencies (backend, disabled by default) -------------------
    EcoFlowSensorEntityDescription(
        key="out_ac_l11_pf",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL11Pf",
        name="AC L1-1 output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l12_pf",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL12Pf",
        name="AC L1-2 output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l21_pf",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL21Pf",
        name="AC L2-1 output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l22_pf",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL22Pf",
        name="AC L2-2 output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_tt_pf",
        mqtt_key="hs_yj751_pd_backend_addr.outAcTtPf",
        name="AC TT output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_l14_pf",
        mqtt_key="hs_yj751_pd_backend_addr.outAcL14Pf",
        name="AC L14 output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="out_ac_p58_pf",
        mqtt_key="hs_yj751_pd_backend_addr.outAcP58Pf",
        name="AC POWER IN/OUT output frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfFrequency.HERTZ,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_round2,
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="wireless_4g_on",
        mqtt_key="hs_yj751_pd_appshow_addr.wireless4gOn",
        name="4G enabled",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="wireless_4g_con",
        mqtt_key="hs_yj751_pd_appshow_addr.wireless4gCon",
        name="4G connected",
        device_class=BinarySensorDeviceClass.CONNECTIVITY,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=lambda v: v == 1,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="ac_often_open",
        mqtt_key="hs_yj751_pd_app_set_info_addr.acOftenOpenFlg",
        name="AC Always-On",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
    EcoFlowBinarySensorEntityDescription(
        key="bms_mode_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.bmsModeSet",
        name="Battery auto-heating",
        device_class=BinarySensorDeviceClass.HEAT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=bool,
    ),
)

# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="dc_switch",
        mqtt_key="hs_yj751_pd_appshow_addr.showFlag",
        name="DC output",
        # showFlag bit-5 (0-indexed from right) = DC enabled (1: enabled)
        value_fn=lambda v: bool((int(v) >> 5) & 1) if v is not None else None,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_DC_SWITCH_SET", {"enable": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="bp_heat",
        mqtt_key="hs_yj751_pd_appshow_addr.showFlag",
        name="Battery heating",
        # showFlag bit-1 (0=enabled, 1=prohibited) → invert
        value_fn=lambda v: not bool((int(v) >> 1) & 1) if v is not None else None,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_BP_HEAT_SET", {"enBpHeat": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="ac_output",
        mqtt_key="hs_yj751_pd_appshow_addr.showFlag",
        name="AC output",
        # showFlag bit-2 (3rd from right) = AC enabled
        value_fn=lambda v: bool((int(v) >> 2) & 1) if v is not None else None,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_AC_DSG_SET",
            {
                "enable": 1 if value else 0,
                "xboost": int(_q.get("hs_yj751_pd_app_set_info_addr.acXboost", 0)),
                "outFreq": int(
                    _q.get("hs_yj751_pd_app_set_info_addr.acOutFreq", 50)
                ),
            },
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="xboost",
        mqtt_key="hs_yj751_pd_app_set_info_addr.acXboost",
        name="X-Boost",
        value_fn=bool,
        command_fn=lambda value, q: _cmd(
            "YJ751_PD_AC_DSG_SET",
            {
                "enable": int(
                    bool((int(q.get("hs_yj751_pd_appshow_addr.showFlag", 0)) >> 2) & 1)
                ),
                "xboost": 1 if value else 0,
                "outFreq": int(
                    q.get("hs_yj751_pd_app_set_info_addr.acOutFreq", 50)
                ),
            },
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="ac_often_open_switch",
        mqtt_key="hs_yj751_pd_app_set_info_addr.acOftenOpenFlg",
        name="AC Always-On switch",
        value_fn=bool,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_AC_OFTEN_OPEN_SET", {"acOftenOpen": 1 if value else 0}
        ),
    ),
    EcoFlowSwitchEntityDescription(
        key="wireless_4g_switch",
        mqtt_key="hs_yj751_pd_appshow_addr.wireless4gOn",
        name="4G switch",
        value_fn=bool,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_4G_SWITCH_SET", {"en4GOpen": 1 if value else 0}
        ),
    ),
)

# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="chg_max_soc_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.chgMaxSoc",
        name="Charge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=50,
        native_max_value=100,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_CHG_SOC_MAX_SET", {"maxChgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="dsg_min_soc_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.dsgMinSoc",
        name="Discharge limit",
        device_class=NumberDeviceClass.BATTERY,
        native_unit_of_measurement=PERCENTAGE,
        native_min_value=0,
        native_max_value=30,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_DSG_SOC_MIN_SET", {"minDsgSoc": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="power_standby_mins_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.powerStandbyMins",
        name="Device standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=720,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_POWER_STANDBY_SET", {"powerStandbyMin": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="ac_standby_mins_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.acStandbyMins",
        name="AC standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=720,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_AC_STANDBY_SET", {"acStandbyMin": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="dc_standby_mins_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.dcStandbyMins",
        name="DC standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.MINUTES,
        native_min_value=0,
        native_max_value=720,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_DC_STANDBY_SET", {"dcStandbyMin": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="screen_standby_sec_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.screenStandbySec",
        name="Screen standby time",
        device_class=NumberDeviceClass.DURATION,
        native_unit_of_measurement=UnitOfTime.SECONDS,
        native_min_value=0,
        native_max_value=600,
        native_step=1,
        mode=NumberMode.BOX,
        command_fn=lambda value, _q: _cmd(
            "YJ751_PD_SCREEN_STANDBY_SET", {"screenStandbySec": int(value)}
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="chg_c20_watts_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.chgC20SetWatts",
        name="AC C20 charge power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=200,
        native_max_value=3000,
        native_step=100,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, q: _cmd(
            "YJ751_PD_AC_CHG_SET",
            {
                "chgC20Watts": int(value),
                "chg5p8Watts": int(
                    q.get("hs_yj751_pd_app_set_info_addr.chg5p8SetWatts", 3900)
                ),
            },
        ),
    ),
    EcoFlowNumberEntityDescription(
        key="chg_5p8_watts_set",
        mqtt_key="hs_yj751_pd_app_set_info_addr.chg5p8SetWatts",
        name="POWER IN/OUT charge power",
        device_class=NumberDeviceClass.POWER,
        native_unit_of_measurement=UnitOfPower.WATT,
        native_min_value=200,
        native_max_value=6000,
        native_step=100,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, q: _cmd(
            "YJ751_PD_AC_CHG_SET",
            {
                "chgC20Watts": int(
                    q.get("hs_yj751_pd_app_set_info_addr.chgC20SetWatts", 1500)
                ),
                "chg5p8Watts": int(value),
            },
        ),
    ),
)

# ---------------------------------------------------------------------------
# Selects
# ---------------------------------------------------------------------------

_SELECTS: tuple[EcoFlowSelectEntityDescription, ...] = (
    EcoFlowSelectEntityDescription(
        key="work_mode",
        translation_key="work_mode",
        options=[_MODE_DEFAULT, _MODE_SELF_POWERED, _MODE_SCHEDULED, _MODE_TOU],
        current_option_fn=_current_work_mode,
        # No set-command is documented; kept read-only — will raise if called.
        command_fn=_work_mode_command,
        http_only=True,
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class DeltaProUltraDevice(EcoFlowDevice):
    """EcoFlow Delta Pro Ultra power station."""

    model = "EcoFlow Delta Pro Ultra"
    # SN prefixes derived from the example serial numbers in the spec:
    #   Y711ZAB4SFAU0069  →  "Y711Z"
    #   Y711ZKB2SG2Q0005  →  "Y711Z"
    sn_prefixes: tuple[str, ...] = ("Y711Z",)

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix or the presence of a DPU-specific quota key."""
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        # Fallback: detect by a quota key that is unique to this device family.
        return "hs_yj751_pd_appshow_addr.soc" in quota

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
