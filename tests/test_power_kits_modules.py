"""Power Kits: each entity reads its field from its own module.

The open API nests Power Kits data by module type and serial
(``{"bbcin": {"<moduleSn>": {...}}}``) and several modules share field names
(batWatts, batVol, hs1Temp, dayEnergy, inWatts …). Bare-key reads either found
nothing (nested HTTP snapshot) or could show another module's value.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import ha_stubs  # noqa: E402,F401

from homeassistant.const import Platform  # noqa: E402

from ecoflow_iot.devices.smart_living.power_kits import (  # noqa: E402
    PowerKitsDevice,
    _module_view,
)

DEV = PowerKitsDevice("M106ZAB4Z000001F")


def _by_key(platform):
    return {d.key: d for d in DEV.entity_descriptions(platform)}


SENSORS = _by_key(Platform.SENSOR)
SWITCHES = _by_key(Platform.SWITCH)

# Shape of the HTTP GetAllQuotaResponse (spec), with a distinct value per module.
NESTED = {
    "bbcin": {"M1093-DCIN-CA7C3": {"batWatts": 11, "batVol": 51000, "hs1Temp": 21, "dayEnergy": 101}},
    "bbcout": {"M1093-DCOUT-1": {"batWatts": 22, "batVol": 52000, "hs1Temp": 22, "dayEnergy": 202,
                                 "dcOutSta": 1}},
    "kitscc": {"M1094-SCC-1": {"batWatts": 33, "batVol": 53000, "hs1Temp": 23, "dayEnergy": 303,
                               "pv1InWatts": 120, "pv2InWatts": 80}},
    "bp2000": {"M102Z3B4ZE6H0009": {"inWatts": 44, "outWatts": 4, "soc": 87}},
    "ichigh": {"M1095-ICH-1": {"inWatts": 55, "outWatts": 5}},
    "bmsTotal": {"totalSoc": 88, "totalInWatts": 66, "totalOutWatts": 6},
    "ldac": {"M1096-LDAC-1": {"acChWatt": [1, 2, 3, 4, 5, 6], "acTotalWatts": 21}},
}


def value(desc, quota):
    return desc.quota_value_fn(quota)


def test_shared_fields_resolve_per_module() -> None:
    assert value(SENSORS["bbcin_bat_watts"], NESTED) == 11
    assert value(SENSORS["bbcout_bat_watts"], NESTED) == 22
    assert value(SENSORS["kitscc_bat_watts"], NESTED) == 33
    assert value(SENSORS["bbcin_hs1_temp"], NESTED) == 21
    assert value(SENSORS["bbcout_hs1_temp"], NESTED) == 22
    assert value(SENSORS["kitscc_hs1_temp"], NESTED) == 23
    # value_fn scaling still applies (mV -> V) on the module's own field.
    assert value(SENSORS["bbcin_bat_vol"], NESTED) != value(SENSORS["kitscc_bat_vol"], NESTED)
    # inWatts exists on both the battery packs and ichigh.
    assert value(SENSORS["bp_in_watts"], NESTED) == 44
    assert value(SENSORS["ichigh_in_watts"], NESTED) == 55


def test_system_totals_and_circuits() -> None:
    assert value(SENSORS["bp_total_soc"], NESTED) == 88
    assert value(SENSORS["total_in_watts"], NESTED) == 66
    assert value(SENSORS["ldac_ch3_watts"], NESTED) == 3
    assert SENSORS["ldac_ch3_watts"].available_fn(NESTED) is True
    # Integrated solar energy sums the solar controller's PV inputs.
    assert SENSORS["solar_energy"].power_fn(NESTED) == 200


def test_switch_state_reads_own_module() -> None:
    assert value(SWITCHES["bbcout_dc_out"], NESTED) is True


def test_flat_and_dotted_layouts_still_resolve() -> None:
    flat = {"dcInWatts": 7, "totalSoc": 50}
    assert value(SENSORS["bbcin_dc_in_watts"], flat) == 7
    assert value(SENSORS["bp_total_soc"], flat) == 50
    dotted = {"bbcin.M1093-DCIN-CA7C3.batWatts": 9, "kitscc.M1094-SCC-1.batWatts": 8}
    assert value(SENSORS["bbcin_bat_watts"], dotted) == 9
    assert value(SENSORS["kitscc_bat_watts"], dotted) == 8


def test_first_serial_is_used_for_multiple_modules() -> None:
    quota = {"bp2000": {"B-2": {"soc": 20}, "B-1": {"soc": 10}}}
    assert _module_view(quota, ("bp2000", "bp5000")) == {"soc": 10}


if __name__ == "__main__":
    tests = [v for k, v in dict(globals()).items() if k.startswith("test_")]
    for t in tests:
        t()
    print(f"Power Kits module scoping: {len(tests)} tests PASS")
