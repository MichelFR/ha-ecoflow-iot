"""EcoFlow PowerOcean device definition.

The PowerOcean is a whole-home battery / inverter system with three-phase grid
support, one or more MPPT PV strings and an optional EV charger (PowerPulse),
heat-pump (PowerHeat) and heating-rod (PowerGlow) accessory.

All quota fields are read-only telemetry; the public API documentation does not
define any set commands for this product family.  Field names and units follow
the PowerOcean public quota schema exactly.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorStateClass,
)
from homeassistant.const import (
    EntityCategory,
    Platform,
    UnitOfElectricCurrent,
    UnitOfElectricPotential,
    UnitOfPower,
    UnitOfTemperature,
)

from ..base import (
    EcoFlowBinarySensorEntityDescription,
    EcoFlowDevice,
    EcoFlowSensorEntityDescription,
    _EcoFlowDescription,
)
from ..helpers import (
    round2 as _round2,
)


# ---------------------------------------------------------------------------
# Value helpers
# ---------------------------------------------------------------------------

def _nested(outer_key: str, inner_key: str):
    """Return a quota_value_fn that extracts ``quota[outer_key][inner_key]``."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        obj = quota.get(outer_key)
        if not isinstance(obj, dict):
            return None
        val = obj.get(inner_key)
        if val is None:
            return None
        return round(float(val), 2)

    return _fn


def _mppt_pv_power(string_index: int):
    """Return a quota_value_fn for the power of PV string ``string_index`` (0-based).

    mpptHeartBeat is a list of MPPT controller dicts, each containing
    ``mpptPv`` — a list of PV-string dicts with ``pwr``.  The spec example
    shows one MPPT controller with two PV strings; we expose individual
    strings directly.
    """

    def _fn(quota: Mapping[str, Any]) -> float | None:
        heartbeat = quota.get("mpptHeartBeat")
        if not isinstance(heartbeat, list) or not heartbeat:
            return None
        # Flatten all PV strings across all MPPT controllers in order.
        strings: list[dict[str, Any]] = []
        for controller in heartbeat:
            if isinstance(controller, dict):
                pv_list = controller.get("mpptPv")
                if isinstance(pv_list, list):
                    strings.extend(pv_list)
        if string_index >= len(strings):
            return None
        pwr = strings[string_index].get("pwr")
        if pwr is None:
            return None
        return round(float(pwr), 2)

    return _fn


def _mppt_pv_voltage(string_index: int):
    """Return a quota_value_fn for the voltage of PV string ``string_index``."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        heartbeat = quota.get("mpptHeartBeat")
        if not isinstance(heartbeat, list) or not heartbeat:
            return None
        strings: list[dict[str, Any]] = []
        for controller in heartbeat:
            if isinstance(controller, dict):
                pv_list = controller.get("mpptPv")
                if isinstance(pv_list, list):
                    strings.extend(pv_list)
        if string_index >= len(strings):
            return None
        vol = strings[string_index].get("vol")
        if vol is None:
            return None
        return round(float(vol), 2)

    return _fn


def _mppt_pv_current(string_index: int):
    """Return a quota_value_fn for the current of PV string ``string_index``."""

    def _fn(quota: Mapping[str, Any]) -> float | None:
        heartbeat = quota.get("mpptHeartBeat")
        if not isinstance(heartbeat, list) or not heartbeat:
            return None
        strings: list[dict[str, Any]] = []
        for controller in heartbeat:
            if isinstance(controller, dict):
                pv_list = controller.get("mpptPv")
                if isinstance(pv_list, list):
                    strings.extend(pv_list)
        if string_index >= len(strings):
            return None
        amp = strings[string_index].get("amp")
        if amp is None:
            return None
        return round(float(amp), 2)

    return _fn


def _has_heartbeat(quota: Mapping[str, Any]) -> bool:
    hb = quota.get("mpptHeartBeat")
    return isinstance(hb, list) and bool(hb)


# ---------------------------------------------------------------------------
# Sensors — system-level power & battery
# ---------------------------------------------------------------------------

_SYSTEM_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="bp_soc",
        mqtt_key="bpSoc",
        name="Battery",
        device_class=SensorDeviceClass.BATTERY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="%",
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="bp_pwr",
        mqtt_key="bpPwr",
        name="Battery power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="mppt_pwr",
        mqtt_key="mpptPwr",
        name="Solar power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_load_pwr",
        mqtt_key="sysLoadPwr",
        name="Load power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="sys_grid_pwr",
        mqtt_key="sysGridPwr",
        name="Grid power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
    ),
)

# ---------------------------------------------------------------------------
# Sensors — three-phase PCS data
# ---------------------------------------------------------------------------

# Each PCS phase object carries: vol, amp, actPwr, reactPwr, apparentPwr.
# We expose the most useful fields for the default view; diagnostic fields
# are disabled by default.

_PHASE_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    # --- Phase A ---
    EcoFlowSensorEntityDescription(
        key="pcs_a_active_power",
        name="Phase A active power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        quota_value_fn=_nested("pcsAPhase", "actPwr"),
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_a_apparent_power",
        name="Phase A apparent power",
        device_class=SensorDeviceClass.APPARENT_POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="VA",
        quota_value_fn=_nested("pcsAPhase", "apparentPwr"),
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_a_reactive_power",
        name="Phase A reactive power",
        device_class=SensorDeviceClass.REACTIVE_POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="var",
        quota_value_fn=_nested("pcsAPhase", "reactPwr"),
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_a_voltage",
        name="Phase A voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        quota_value_fn=_nested("pcsAPhase", "vol"),
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_a_current",
        name="Phase A current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("pcsAPhase", "amp"),
    ),
    # --- Phase B ---
    EcoFlowSensorEntityDescription(
        key="pcs_b_active_power",
        name="Phase B active power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        quota_value_fn=_nested("pcsBPhase", "actPwr"),
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_b_apparent_power",
        name="Phase B apparent power",
        device_class=SensorDeviceClass.APPARENT_POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="VA",
        quota_value_fn=_nested("pcsBPhase", "apparentPwr"),
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_b_reactive_power",
        name="Phase B reactive power",
        device_class=SensorDeviceClass.REACTIVE_POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="var",
        quota_value_fn=_nested("pcsBPhase", "reactPwr"),
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_b_voltage",
        name="Phase B voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        quota_value_fn=_nested("pcsBPhase", "vol"),
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_b_current",
        name="Phase B current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("pcsBPhase", "amp"),
    ),
    # --- Phase C ---
    EcoFlowSensorEntityDescription(
        key="pcs_c_active_power",
        name="Phase C active power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        quota_value_fn=_nested("pcsCPhase", "actPwr"),
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_c_apparent_power",
        name="Phase C apparent power",
        device_class=SensorDeviceClass.APPARENT_POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="VA",
        quota_value_fn=_nested("pcsCPhase", "apparentPwr"),
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_c_reactive_power",
        name="Phase C reactive power",
        device_class=SensorDeviceClass.REACTIVE_POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="var",
        quota_value_fn=_nested("pcsCPhase", "reactPwr"),
        entity_registry_enabled_default=False,
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_c_voltage",
        name="Phase C voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        entity_category=EntityCategory.DIAGNOSTIC,
        quota_value_fn=_nested("pcsCPhase", "vol"),
    ),
    EcoFlowSensorEntityDescription(
        key="pcs_c_current",
        name="Phase C current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("pcsCPhase", "amp"),
    ),
)

# ---------------------------------------------------------------------------
# Sensors — MPPT / PV strings  (up to 2 per spec example)
# ---------------------------------------------------------------------------

def _pv_string_sensors(count: int) -> tuple[EcoFlowSensorEntityDescription, ...]:
    """Build per-PV-string power/voltage/current sensors (0-based index)."""
    descs: list[EcoFlowSensorEntityDescription] = []
    for i in range(count):
        label = i + 1
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{label}_power",
                name=f"Solar string {label} power",
                device_class=SensorDeviceClass.POWER,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfPower.WATT,
                quota_value_fn=_mppt_pv_power(i),
                available_fn=_has_heartbeat,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{label}_voltage",
                name=f"Solar string {label} voltage",
                device_class=SensorDeviceClass.VOLTAGE,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricPotential.VOLT,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=_mppt_pv_voltage(i),
                available_fn=_has_heartbeat,
            )
        )
        descs.append(
            EcoFlowSensorEntityDescription(
                key=f"pv{label}_current",
                name=f"Solar string {label} current",
                device_class=SensorDeviceClass.CURRENT,
                state_class=SensorStateClass.MEASUREMENT,
                native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
                entity_category=EntityCategory.DIAGNOSTIC,
                entity_registry_enabled_default=False,
                quota_value_fn=_mppt_pv_current(i),
                available_fn=_has_heartbeat,
            )
        )
    return tuple(descs)


# ---------------------------------------------------------------------------
# Sensors — EV charger (PowerPulse accessory)
# ---------------------------------------------------------------------------

_EV_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="ev_pwr",
        mqtt_key="evPwr",
        name="EV charger power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_round2,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Sensors — heating accessories (PowerHeat / PowerGlow)
# ---------------------------------------------------------------------------

_HEAT_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="sector_a_temp",
        name="Zone A temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("sectorA", "tempCurr"),
    ),
    EcoFlowSensorEntityDescription(
        key="sector_b_temp",
        name="Zone B temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("sectorB", "tempCurr"),
    ),
    EcoFlowSensorEntityDescription(
        key="sector_dhw_temp",
        name="Hot water temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("sectorDhw", "tempCurr"),
    ),
    EcoFlowSensorEntityDescription(
        key="hp_temp_inlet",
        name="Heat pump inlet temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("hpMaster", "tempInlet"),
    ),
    EcoFlowSensorEntityDescription(
        key="hp_temp_outlet",
        name="Heat pump outlet temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("hpMaster", "tempOutlet"),
    ),
    EcoFlowSensorEntityDescription(
        key="hp_temp_ambient",
        name="Heat pump ambient temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        quota_value_fn=_nested("hpMaster", "tempAmbient"),
    ),
)

# ---------------------------------------------------------------------------
# Binary sensors
# ---------------------------------------------------------------------------

_BINARY_SENSORS: tuple[EcoFlowBinarySensorEntityDescription, ...] = (
    EcoFlowBinarySensorEntityDescription(
        key="ev_charging",
        mqtt_key="chargingStatus",
        name="EV charging",
        device_class=BinarySensorDeviceClass.BATTERY_CHARGING,
        # The field is a string enum; any non-AVAILABLE value means charging.
        value_fn=lambda v: v not in (None, "EV_CHG_STS_AVAILABLE"),
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------

# Serial-number prefix derived from the two example SNs in the spec:
#   HJ31ZDH2ZF690029 and HJ31ZDH2ZF690025 → prefix "HJ31"
_SN_PREFIXES = ("HJ31",)

# A distinctive top-level quota key that only PowerOcean devices report.
_DISTINCTIVE_KEY = "bpSoc"


class PowerOceanDevice(EcoFlowDevice):
    """EcoFlow PowerOcean whole-home battery / inverter system."""

    model = "EcoFlow PowerOcean"
    sn_prefixes: tuple[str, ...] = _SN_PREFIXES

    # The spec example shows one MPPT controller with 2 PV strings.
    # Subclasses can override this for configurations with more strings.
    pv_string_count = 2

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match on SN prefix or the presence of ``bpSoc`` in the quota."""
        if any(sn.startswith(p) for p in cls.sn_prefixes):
            return True
        return _DISTINCTIVE_KEY in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [
                *_SYSTEM_SENSORS,
                *_PHASE_SENSORS,
                *_pv_string_sensors(self.pv_string_count),
                *_EV_SENSORS,
                *_HEAT_SENSORS,
            ]
        if platform == Platform.BINARY_SENSOR:
            return list(_BINARY_SENSORS)
        return []
