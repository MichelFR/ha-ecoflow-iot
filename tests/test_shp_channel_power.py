"""SHP1 per-channel power (issue #12): chWatt from channelPower.infoList /
bare infoList (MQTT push), exercised under the HA stub with real diag data."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import ha_stubs  # noqa: E402,F401

from ecoflow_iot.devices import resolve_device  # noqa: E402
from ecoflow_iot.devices.whole_home_backup.smart_home_panel import (  # noqa: E402
    _ch_watt,
    _ch_watt_list,
)

PUSHED = [
    {"powType": 0, "chWatt": 21.609043},
    {"powType": 0, "chWatt": 438.55655},
    {"powType": 0, "chWatt": 0.0},
    {"powType": 0, "chWatt": 190.65593},
    {"powType": 0, "chWatt": 0.0},
    {"powType": 0, "chWatt": 0.0},
    {"powType": 0, "chWatt": 64.09113},
    {"powType": 0, "chWatt": 0.0},
    {"powType": 0, "chWatt": 35.995102},
    {"powType": 0, "chWatt": 0.0},
    {"powType": 1, "chWatt": 0.0},
    {"powType": 0, "chWatt": 0.0},
]
SNAPSHOT = [{"powType": 0, "chWatt": 79.178955}] + PUSHED[1:]

# Pushed (unprefixed) copy wins over the HTTP snapshot copy.
quota = {"infoList": PUSHED, "channelPower.infoList": SNAPSHOT}
assert _ch_watt_list(quota) is PUSHED
assert _ch_watt(quota, 0) == 21.61
assert _ch_watt(quota, 1) == 438.56
assert _ch_watt(quota, 10) == 0.0

# HTTP-only quota (no push yet) falls back to the prefixed key.
quota = {"channelPower.infoList": SNAPSHOT}
assert _ch_watt_list(quota) is SNAPSHOT
assert _ch_watt(quota, 0) == 79.18

# Missing / malformed data is None, never an exception.
assert _ch_watt({}, 0) is None
assert _ch_watt({"infoList": []}, 0) is None
assert _ch_watt({"infoList": [{"foo": 1}]}, 0) is None
assert _ch_watt({"infoList": PUSHED}, 12) is None
assert _ch_watt({"infoList": "garbage"}, 0) is None
assert _ch_watt({"infoList": [{"chWatt": 5.0}, 7]}, 1) is None

from ecoflow_iot.devices.whole_home_backup.smart_home_panel import (  # noqa: E402
    _ch_name,
    _ch_split_phase,
    _energy_info_state,
    _energy_info_value,
    _row_sum,
)


def _padded(name: str) -> list[int]:
    raw = list(name.encode())
    return raw + [0] * (64 - len(raw))


# Structures taken from the issue #12 diagnostics dump.
DIAG = {
    "loadChInfo.info": [
        {"iconNum": 14, "chName": _padded("Foyer")},
        {"iconNum": 3, "chName": _padded("Master Bedroom")},
        {"iconNum": 15, "chName": _padded("Refrigerator")},
        {"iconNum": 0, "chName": [0] * 64},
    ],
    "mainsLoadWatt.watth": [[2, 2, 12, 32, 10] + [0] * 19, [300, 310, 36] + [0] * 21],
    "backupLoadWatt.watth": [[0] * 24, [0, 0, 1] + [0] * 21],
    "topupLoadWatt.watth": [[231] + [0] * 23, [740, 2, 2] + [0] * 21],
    "heartbeat.energyInfos": [
        {
            "batteryPercentage": 87,
            "outputPower": 0.0,
            "emsBatTemp": 33,
            "chargeTime": 12302,
            "dischargeTime": 20729,
            "fullCap": 80000.0,
            "stateBean": {"isConnect": 1, "isGridCharge": 0, "isPowerOutput": 1},
        },
        {
            "batteryPercentage": 89,
            "outputPower": 0.0,
            "emsBatTemp": 33,
            "chargeTime": 14201,
            "dischargeTime": 21302,
            "fullCap": 80000.0,
            "stateBean": {"isConnect": 1, "isGridCharge": 0, "isPowerOutput": 0},
        },
    ],
    "chUseInfo.isEnable": [True, True, False],
    "selfCheck.vIn": [122.15235, 122.157555],
    "splitPhaseInfo.cfgList": [{"linkMark": 0, "linkCh": 0}, {"linkMark": 1, "linkCh": 2}],
}

# Channel names decode from the null-padded byte arrays.
assert _ch_name(DIAG, 0) == "Foyer"
assert _ch_name(DIAG, 1) == "Master Bedroom"
assert _ch_name(DIAG, 3) is None  # all-zero name
assert _ch_name(DIAG, 9) is None  # out of range
assert _ch_name({"loadChInfo": {"info": DIAG["loadChInfo.info"]}}, 2) == "Refrigerator"
assert _ch_name({}, 0) is None
assert _ch_name({"loadChInfo.info": [{"chName": "junk"}]}, 0) is None

# Daily energy = row sums of the hourly Wh matrices.
assert _row_sum(DIAG, "mainsLoadWatt.watth", 0) == 58.0
assert _row_sum(DIAG, "mainsLoadWatt.watth", 1) == 646.0
assert _row_sum(DIAG, "backupLoadWatt.watth", 1) == 1.0
assert _row_sum(DIAG, "topupLoadWatt.watth", 1) == 744.0
assert _row_sum(DIAG, "mainsLoadWatt.watth", 5) is None
assert _row_sum({}, "mainsLoadWatt.watth", 0) is None
assert _row_sum({"mainsLoadWatt.watth": [3]}, 0, 0) is None

# Battery-port state from heartbeat.energyInfos.
assert _energy_info_value(DIAG, 0, "batteryPercentage") == 87
assert _energy_info_value(DIAG, 1, "batteryPercentage") == 89
assert _energy_info_value(DIAG, 2, "batteryPercentage") is None
assert _energy_info_state(DIAG, 0, "isConnect") is True
assert _energy_info_state(DIAG, 0, "isGridCharge") is False
assert _energy_info_state(DIAG, 1, "isPowerOutput") is False
assert _energy_info_state(DIAG, 0, "missing") is None
assert _energy_info_state({}, 0, "isConnect") is None

# Split-phase link flags.
assert _ch_split_phase(DIAG, 0) is False
assert _ch_split_phase(DIAG, 1) is True
assert _ch_split_phase(DIAG, 5) is None

# Descriptions: expected keys, unique, sane defaults.
dev = resolve_device("SP10ZAW5ZE9E0052", {})
descs = dev.entity_descriptions(ha_stubs._Auto("Platform.SENSOR"))
keys = [d.key for d in descs]
assert len(keys) == len(set(keys))
watt_keys = [k for k in keys if k.endswith("_watt") and "output" not in k]
assert watt_keys == [f"ch{i}_watt" for i in range(1, 11)] + [
    "battery_port1_watt",
    "battery_port2_watt",
], watt_keys
for i in range(1, 11):
    for suffix in ("name", "grid_watth", "backup_watth", "in_vol"):
        assert f"ch{i}_{suffix}" in keys
for p in (1, 2):
    for suffix in ("soc", "output_watt", "temp", "charge_time", "discharge_time",
                   "full_cap", "charge_watth"):
        assert f"battery_port{p}_{suffix}" in keys

by_key = {d.key: d for d in descs}
assert by_key["battery_port1_watt"].entity_registry_enabled_default is False
assert by_key["battery_port1_soc"].entity_registry_enabled_default is True
assert by_key["ch1_in_vol"].entity_registry_enabled_default is False
assert by_key["ch3_watt"].quota_value_fn({"infoList": PUSHED}) == 0.0
assert by_key["ch3_watt"].available_fn({"infoList": PUSHED})
assert not by_key["ch3_watt"].available_fn({})
assert by_key["ch1_name"].quota_value_fn(DIAG) == "Foyer"
assert by_key["ch1_grid_watth"].quota_value_fn(DIAG) == 58.0
assert by_key["battery_port2_soc"].quota_value_fn(DIAG) == 89
assert by_key["battery_port2_charge_watth"].quota_value_fn(DIAG) == 744.0

bdescs = dev.entity_descriptions(ha_stubs._Auto("Platform.BINARY_SENSOR"))
bkeys = [d.key for d in bdescs]
assert len(bkeys) == len(set(bkeys))
for i in range(1, 11):
    assert f"ch{i}_in_use" in bkeys
    assert f"ch{i}_split_phase" in bkeys
for p in (1, 2):
    for suffix in ("connected", "grid_charge", "output"):
        assert f"battery_port{p}_{suffix}" in bkeys
bby_key = {d.key: d for d in bdescs}
assert bby_key["battery_port1_connected"].quota_value_fn(DIAG) is True
assert bby_key["ch2_split_phase"].quota_value_fn(DIAG) is True
assert bby_key["ch3_in_use"].quota_value_fn(DIAG) is False

print("OK: SHP channel power tests passed")
