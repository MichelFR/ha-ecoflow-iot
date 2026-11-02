"""Tests for SHP2 circuit names, split-phase metadata, and entity attributes."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import ha_stubs  # noqa: F401
from ecoflow_iot.devices.whole_home_backup.smart_home_panel_ii import (
    _circuit_amp_numbers,
    _circuit_metadata,
    _circuit_sensors,
)
from ecoflow_iot.number import EcoFlowNumber
from ecoflow_iot.sensor import EcoFlowSensor


def make_flat_quota(
    first_circuit: int,
    second_circuit: int,
    first_name: str,
    second_name: str | None = None,
) -> dict[str, object]:
    """Build a redacted quota shape seen in SHP2 diagnostics."""
    root = "pd303_mc.loadIncreInfo.hall1IncreInfo."
    resolved_second_name = (
        second_name if second_name is not None else f"Circuit {second_circuit}"
    )
    quota = {
        f"{root}ch{first_circuit}Info.chName": first_name,
        f"{root}ch{first_circuit}Info.splitphase.linkMark": True,
        f"{root}ch{first_circuit}Info.splitphase.linkCh": second_circuit,
        f"{root}ch{first_circuit}Info.setAmp": 50,
        f"{root}ch{second_circuit}Info.chName": resolved_second_name,
        f"{root}ch{second_circuit}Info.splitphase.linkMark": True,
        f"{root}ch{second_circuit}Info.splitphase.linkCh": first_circuit,
        f"{root}ch{second_circuit}Info.setAmp": 50,
        f"loadIncreInfo.hall1IncreInfo.ch{first_circuit}Info.chName": first_name,
        f"loadIncreInfo.hall1IncreInfo.ch{first_circuit}Info.setAmp": 50,
        f"loadIncreInfo.hall1IncreInfo.ch{second_circuit}Info.chName": (
            resolved_second_name
        ),
        f"loadIncreInfo.hall1IncreInfo.ch{second_circuit}Info.setAmp": 50,
    }
    return quota


def test_split_phase_pair_uses_first_custom_label_from_either_leg() -> None:
    """Prefer the lower leg's custom name, then the higher leg's custom name."""
    quota = make_flat_quota(5, 7, "Circuit 5", "Car Charger")
    for circuit in (5, 7):
        metadata = _circuit_metadata(quota, circuit)
        assert metadata["circuit_name"] == "Car Charger"
        assert metadata["circuit_numbers"] == [5, 7]
        assert metadata["paired_circuit"] == (7 if circuit == 5 else 5)

    quota = make_flat_quota(5, 7, "Lower Leg", "Upper Leg")
    assert _circuit_metadata(quota, 7)["circuit_name"] == "Lower Leg"


def test_default_names_fall_back_to_lower_circuit_number() -> None:
    quota = make_flat_quota(5, 7, "Circuit 5", "Circuit 7")
    assert _circuit_metadata(quota, 7)["circuit_name"] == "Circuit 5"
    assert _circuit_metadata({}, 1)["circuit_name"] == "Circuit 1"


def test_prefixed_metadata_and_unprefixed_power_match_diagnostic_shape() -> None:
    """Match the diagnostic's duplicated labels and separate live power field."""
    quota = make_flat_quota(6, 8, "Air Conditioner")
    # The diagnostic quota contains both pd303_mc-prefixed and unprefixed
    # chName/setAmp fields. Split-phase metadata is prefixed; live power is a
    # separate top-level array. Circuit labels and readings here are test data.
    quota["loadInfo.hall1Watt"] = [
        0, 0, 0, 0, 0, 100, 0, 120, 0, 0, 0, 0
    ]
    sensor = make_sensor_probe(
        next(item for item in _circuit_sensors() if item.key == "circuit_6_watt"),
        quota,
    )
    assert sensor.native_value == 100
    assert sensor.extra_state_attributes["circuit_numbers"] == [6, 8]
    for circuit in (6, 8):
        channel = f"ch{circuit}Info"
        assert quota[f"pd303_mc.loadIncreInfo.hall1IncreInfo.{channel}.chName"] == (
            quota[f"loadIncreInfo.hall1IncreInfo.{channel}.chName"]
        )
        assert quota[f"pd303_mc.loadIncreInfo.hall1IncreInfo.{channel}.setAmp"] == (
            quota[f"loadIncreInfo.hall1IncreInfo.{channel}.setAmp"]
        )


def test_metadata_updates_and_entity_identity_remains_per_leg() -> None:
    quota = make_flat_quota(6, 8, "Air Conditioner")
    description = next(
        item for item in _circuit_sensors() if item.key == "circuit_6_watt"
    )
    sensor = make_sensor_probe(description, quota)
    assert sensor.extra_state_attributes["circuit_name"] == "Air Conditioner"

    quota["pd303_mc.loadIncreInfo.hall1IncreInfo.ch6Info.chName"] = "Mini Split"
    assert sensor.extra_state_attributes["circuit_name"] == "Mini Split"
    assert description.name == "Circuit 6 power"
    assert description.key == "circuit_6_watt"


def test_invalid_pairing_falls_back_to_single_leg() -> None:
    for invalid_partner in (0, 13, True, "8", 6, None):
        quota = make_flat_quota(6, 8, "AC")
        quota["pd303_mc.loadIncreInfo.hall1IncreInfo.ch6Info.splitphase.linkCh"] = (
            invalid_partner
        )
        assert _circuit_metadata(quota, 6)["circuit_numbers"] == [6]


def test_unprefixed_http_and_nested_metadata_remain_supported() -> None:
    flat_http_quota: dict[str, object] = {
        "loadIncreInfo.hall1IncreInfo.ch1Info.chName": "Office",
    }
    assert _circuit_metadata(flat_http_quota, 1)["circuit_name"] == "Office"

    nested_http_quota: dict[str, object] = {
        "loadIncreInfo": {
            "hall1IncreInfo": {
                "ch1Info": {
                    "chName": " Office ",
                    "splitphase": {"linkMark": True, "linkCh": 2},
                },
                "ch2Info": {
                    "chName": "Circuit 2",
                    "splitphase": {"linkMark": True, "linkCh": 1},
                },
            }
        }
    }
    assert _circuit_metadata(nested_http_quota, 1)["circuit_name"] == "Office"
    assert _circuit_metadata(nested_http_quota, 1)["circuit_numbers"] == [1, 2]

    nested_prefixed_quota: dict[str, object] = {
        "pd303_mc": {
            "loadIncreInfo": {
                "hall1IncreInfo": {"ch1Info": {"chName": "Office"}}
            }
        }
    }
    assert _circuit_metadata(nested_prefixed_quota, 1)["circuit_name"] == "Office"


class SensorProbe(EcoFlowSensor):
    @property
    def _quota(self) -> dict[str, object]:
        return self.quota


class NumberProbe(EcoFlowNumber):
    @property
    def _quota(self) -> dict[str, object]:
        return self.quota


def make_sensor_probe(description: object, quota: dict[str, object]) -> EcoFlowSensor:
    """Create a sensor without constructing HA coordinator state."""
    # Bypassing __init__ avoids Home Assistant's coordinator setup; these tests
    # exercise only description callbacks and quota-backed values.
    sensor = object.__new__(SensorProbe)
    sensor.entity_description = description
    sensor.quota = quota
    return sensor


def make_number_probe(description: object, quota: dict[str, object]) -> EcoFlowNumber:
    """Create a number without constructing HA coordinator state."""
    # Bypassing __init__ avoids Home Assistant's coordinator setup; these tests
    # exercise only description callbacks and quota-backed values.
    number = object.__new__(NumberProbe)
    number.entity_description = description
    number.quota = quota
    return number


def test_all_per_circuit_entities_share_metadata_attributes() -> None:
    quota = make_flat_quota(6, 8, "Air Conditioner")
    set_amp = next(
        item for item in _circuit_sensors() if item.key == "circuit_6_set_amp"
    )
    max_amp = next(
        item for item in _circuit_amp_numbers() if item.key == "circuit_6_max_amp"
    )

    for entity in (
        make_sensor_probe(set_amp, quota),
        make_number_probe(max_amp, quota),
    ):
        attributes = entity.extra_state_attributes
        assert attributes["circuit_name"] == "Air Conditioner"
        assert attributes["paired_circuit"] == 8
        assert attributes["circuit_numbers"] == [6, 8]


def run_tests() -> None:
    test_split_phase_pair_uses_first_custom_label_from_either_leg()
    test_default_names_fall_back_to_lower_circuit_number()
    test_prefixed_metadata_and_unprefixed_power_match_diagnostic_shape()
    test_metadata_updates_and_entity_identity_remains_per_leg()
    test_invalid_pairing_falls_back_to_single_leg()
    test_unprefixed_http_and_nested_metadata_remain_supported()
    test_all_per_circuit_entities_share_metadata_attributes()


if __name__ == "__main__":
    run_tests()
    print("SHP2 metadata: PASS")
