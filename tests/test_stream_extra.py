"""Extra Stream sensors/binary sensors reverse-engineered from real quota.

Pins the mappings added from a live diagnostics dump: the calendar-SoH /
MOSFET-temp / cell-delta battery health sensors, total-AC-power and grid-status
sensors, the off-grid / water-ingress / Problem binary sensors, and the
inverter-temperature fallback (invNtcTemp3 -> invTempNtc) plus the storm-guard
availability guard.

Run directly: ``python3 tests/test_stream_extra.py``.
"""

import sys
import types
from dataclasses import dataclass
from pathlib import Path
from typing import Any


class Auto(str):
    def __getattr__(self, name):
        return Auto(f"{self}.{name}")


@dataclass(frozen=True, kw_only=True)
class StubEntityDescription:
    key: str = ""
    name: Any = None
    device_class: Any = None
    native_unit_of_measurement: Any = None
    state_class: Any = None
    entity_category: Any = None
    entity_registry_enabled_default: bool = True
    options: Any = None
    native_min_value: Any = None
    native_max_value: Any = None
    native_step: Any = None
    mode: Any = None
    translation_key: Any = None
    icon: Any = None
    suggested_display_precision: Any = None


def _make_component(modname):
    m = types.ModuleType(modname)

    def __getattr__(name, _m=m):
        if name.endswith("EntityDescription"):
            return StubEntityDescription
        return Auto(name)

    m.__getattr__ = __getattr__
    return m


def install_ha_stub():
    ha = types.ModuleType("homeassistant")
    ha.__path__ = []
    sys.modules["homeassistant"] = ha
    comps = types.ModuleType("homeassistant.components")
    comps.__path__ = []
    sys.modules["homeassistant.components"] = comps
    for c in ("sensor", "binary_sensor", "switch", "number", "select", "light"):
        sys.modules[f"homeassistant.components.{c}"] = _make_component(
            f"homeassistant.components.{c}"
        )
    const = types.ModuleType("homeassistant.const")
    const.__getattr__ = lambda name: Auto(name)
    sys.modules["homeassistant.const"] = const
    exc = types.ModuleType("homeassistant.exceptions")
    exc.HomeAssistantError = type("HomeAssistantError", (Exception,), {})
    sys.modules["homeassistant.exceptions"] = exc


install_ha_stub()
root = Path(__file__).resolve().parents[1] / "custom_components"
sys.path.insert(0, str(root))
pkg = types.ModuleType("ecoflow_iot")
pkg.__path__ = [str(root / "ecoflow_iot")]
sys.modules["ecoflow_iot"] = pkg

from ecoflow_iot.devices.base import Platform  # noqa: E402
from ecoflow_iot.devices.helpers import quota_get  # noqa: E402
from ecoflow_iot.devices.solar_systems.stream import StreamDevice  # noqa: E402

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


def raw_value(desc, quota):
    """Mirror EcoFlowEntity._raw_value for the test."""
    if desc.quota_value_fn is not None:
        return desc.quota_value_fn(quota)
    value = quota_get(quota, desc.mqtt_key)
    if value is None:
        return None
    return desc.value_fn(value) if desc.value_fn is not None else value


def available(desc, quota):
    return desc.available_fn is None or desc.available_fn(quota)


dev = StreamDevice("BK11ZE1B2H5K2510")
SENS = {d.key: d for d in dev.entity_descriptions(Platform.SENSOR)}
BIN = {d.key: d for d in dev.entity_descriptions(Platform.BINARY_SENSOR)}
NUM = {d.key: d for d in dev.entity_descriptions(Platform.NUMBER)}
LIGHTS = {d.key: d for d in dev.entity_descriptions(Platform.LIGHT)}

# --- battery health ---------------------------------------------------------
check("calendar_soh present", "calendar_soh" in SENS, True)
check("calendar SoH value", raw_value(SENS["calendar_soh"], {"calendarSoh": 88.0}), 88.0)
check("mos_temp value", raw_value(SENS["mos_temp"], {"maxMosTemp": 42}), 42)
check("max cell temp value", raw_value(SENS["max_cell_temp"], {"maxCellTemp": 38}), 38)
check("min cell temp value", raw_value(SENS["min_cell_temp"], {"minCellTemp": 34}), 34)
check("cell temps default-disabled", SENS["max_cell_temp"].entity_registry_enabled_default, False)
check("cell temp flagged undocumented", SENS["min_cell_temp"].undocumented, True)
check("cell_vol_delta value", raw_value(SENS["cell_vol_delta"], {"maxVolDiff": 1}), 1)
check("cell_vol_delta default-disabled", SENS["cell_vol_delta"].entity_registry_enabled_default, False)
check("cycle_soh value rounds", raw_value(SENS["cycle_soh"], {"cycleSoh": 99.9967}), 100.0)
check("max cell vol value", raw_value(SENS["max_cell_vol"], {"maxCellVol": 3361}), 3361)
check("min cell vol value", raw_value(SENS["min_cell_vol"], {"minCellVol": 3352}), 3352)
check("cell vols default-disabled", SENS["min_cell_vol"].entity_registry_enabled_default, False)
check("heater temp value", raw_value(SENS["heater_temp"], {"maxHeatfilmTemp": 35}), 35)
check("accu chg gated when absent", available(SENS["accu_chg_energy"], {}), False)
check("accu chg available when reported", available(SENS["accu_chg_energy"], {"accuChgEnergy": 24894}), True)

# --- status -----------------------------------------------------------------
check("ac_total_power rounds", raw_value(SENS["ac_total_power"], {"acTotalActivePower": 677.4123}), 677.41)
check("grid status passthrough", raw_value(SENS["grid_connection_status"], {"gridConnectionSta": "PANEL_FEED_GRID"}), "PANEL_FEED_GRID")
check("avail charge power value", raw_value(SENS["avail_charge_power"], {"curAvaiToBmsPower": 804}), 804)
check("ai target hidden w/o aiTouValid", available(SENS["ai_tou_target_soc"], {"aiTouTargetSoc": 93, "aiTouValid": False}), False)
check("ai target shown when valid", available(SENS["ai_tou_target_soc"], {"aiTouTargetSoc": 93, "aiTouValid": True}), True)
check("ai target value", raw_value(SENS["ai_tou_target_soc"], {"aiTouTargetSoc": 93}), 93)
check("ac standby value", raw_value(SENS["ac_standby_time"], {"acStandbyTime": 120}), 120)
check("grid code strips prefix", raw_value(SENS["grid_code"], {"gridCodeSelection": "GRID_STD_CODE_VDE_4105"}), "VDE_4105")
check("device role value", raw_value(SENS["device_role"], {"seriesConnectDeviceStatus": "MASTER"}), "MASTER")
check("local IP decodes little-endian", raw_value(SENS["local_ip"], {"iotIpAddress": 464693440}), "192.168.178.27")
check("gateway IP decodes little-endian", raw_value(SENS["gateway_ip"], {"iotGatewayAddress": 28485824}), "192.168.178.1")
check("local IP unset -> None", raw_value(SENS["local_ip"], {"iotIpAddress": 0}), None)
check("local IP hidden when absent", available(SENS["local_ip"], {}), False)
check("local IP shown when present", available(SENS["local_ip"], {"iotIpAddress": 464693440}), True)
check("local IP default-disabled", SENS["local_ip"].entity_registry_enabled_default, False)
check("has_meter reads nested cloudMetter", raw_value(BIN["has_meter"], {"cloudMetter": {"hasMeter": True}}), True)
check("meter phase A reads nested", raw_value(SENS["meter_phase_a"], {"cloudMetter": {"phaseAPower": 42.0}}), 42.0)
check("meter phase A reads flattened", raw_value(SENS["meter_phase_a"], {"cloudMetter.phaseAPower": 41.0}), 41.0)

check("no local meter -> no dynamic sensors", dev.dynamic_entity_descriptions(Platform.SENSOR, {"localMeter": {"online": 0, "model": "NONE", "sn": ""}}), [])
check("meter discovery via model", dev.dynamic_entity_descriptions(Platform.SENSOR, {"localMeter": {"online": 0, "model": "SMR"}}) != [], True)
METER_Q = {"localMeter": {"online": 1, "model": "SMR", "totalPwr": 512.5, "totalImportKwh": 1234.5, "totalExportKwh": 99.9, "phaseAPower": 100.0, "phaseAVol": 230.1, "phaseACur": 0.5}}
DYN = {d.key: d for d in dev.dynamic_entity_descriptions(Platform.SENSOR, METER_Q)}
check("local meter sensor count", len(DYN), 12)
check("local meter power (nested)", raw_value(DYN["local_meter_power"], METER_Q), 512.5)
check("local meter power (flattened)", raw_value(DYN["local_meter_power"], {"localMeter.totalPwr": 300.0}), 300.0)
check("local meter import kWh", raw_value(DYN["local_meter_import_energy"], METER_Q), 1234.5)
check("local meter export kWh", raw_value(DYN["local_meter_export_energy"], METER_Q), 99.9)
check("local meter phase A voltage", raw_value(DYN["local_meter_phase_a_voltage"], METER_Q), 230.1)
check("local meter unavailable when offline", available(DYN["local_meter_power"], {"localMeter": {"online": 0}}), False)
check("local meter available when online", available(DYN["local_meter_power"], METER_Q), True)

# --- inverter-temp fallback -------------------------------------------------
inv = SENS["inv_temp"]
check("inv_temp prefers invNtcTemp3", raw_value(inv, {"invNtcTemp3": 50, "invTempNtc": 58}), 50)
check("inv_temp falls back to invTempNtc", raw_value(inv, {"invTempNtc": 58}), 58)
check("inv_temp available via fallback", available(inv, {"invTempNtc": 58}), True)
check("inv_temp unavailable w/o either", available(inv, {}), False)

# --- binary sensors ---------------------------------------------------------
off = BIN["off_grid"]
check("off_grid on when islanded", bool(raw_value(off, {"sysOffgrid": True})), True)
check("off_grid off on grid", bool(raw_value(off, {"sysOffgrid": False})), False)

water = BIN["water_ingress"]
check("water ingress clear", bool(raw_value(water, {"waterInFlag": 0})), False)
check("water ingress detected", bool(raw_value(water, {"waterInFlag": 1})), True)

prob = BIN["problem"]
check("problem clear -> False", raw_value(prob, {"errCode": 0, "allErrCode": 0}), False)
check("problem set via errCode", raw_value(prob, {"errCode": 7}), True)
check("problem set via devErrcode list", raw_value(prob, {"devErrcodeList": {"devErrcode": [12]}}), True)
check("problem empty err list -> False", raw_value(prob, {"devErrcodeList": {"devErrcode": []}}), False)
check("problem set via bmsProtectState1", raw_value(prob, {"bmsProtectState1": 4}), True)
check("problem set via bmsAlarmState2", raw_value(prob, {"bmsAlarmState2": 1}), True)
check("problem clear incl. protect/alarm", raw_value(prob, {"bmsProtectState1": 0, "bmsAlarmState2": 0}), False)
check("problem set via invFault", raw_value(prob, {"invFault": 3}), True)
check("problem set via gridFault", raw_value(prob, {"gridFault": 1}), True)
check("problem set via dabFaultLock", raw_value(prob, {"dabFaultLock": 1}), True)
check("problem clear incl. pcs registers", raw_value(prob, {"gridFault": 0, "invFault": 0, "pfcFault": 0, "dabFault": 0, "mpptFaultComm": 0}), False)
check("problem ignores mpptPv4Fault", raw_value(prob, {"errCode": 0, "mpptPv4Fault": 16}), False)
check("problem unknown w/o fields -> None", raw_value(prob, {}), None)
check("problem unavailable w/o fields", available(prob, {}), False)
check("problem available when clear", available(prob, {"errCode": 0}), True)

# --- storm-guard guard ------------------------------------------------------
storm = BIN["storm_guard"]
check("storm guard hidden when absent", available(storm, {}), False)
check("storm guard shown when present", available(storm, {"stormPatternEnable": False}), True)

# --- LED light (was a brightness number; now a light, off = 0%) -------------
check("led_brightness number removed", "led_brightness" in NUM, False)
led = LIGHTS["led"]
check("led reads brightness %", raw_value(led, {"brightness": 100}), 100)
check("led set 40% -> cfgBrightness", led.command_fn(40, {}), {"cfgBrightness": 40})
check("led off -> cfgBrightness 0", led.command_fn(0, {}), {"cfgBrightness": 0})
check("led available when present", available(led, {"brightness": 100}), True)

# --- undocumented flag ------------------------------------------------------
check("led flagged undocumented", led.undocumented, True)
check("calendar_soh flagged undocumented", SENS["calendar_soh"].undocumented, True)
check("problem flagged undocumented", BIN["problem"].undocumented, True)
# A documented entity stays unflagged.
check("battery SoC NOT flagged", SENS["cms_batt_soc"].undocumented, False)

print(f"\nRESULT: {'PASS' if not fails else f'{fails} FAILED'}")
sys.exit(1 if fails else 0)
