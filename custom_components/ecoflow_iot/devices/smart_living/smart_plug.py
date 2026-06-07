"""EcoFlow Smart Plug device definition.

The Smart Plug (WN511 series) is a single-outlet smart plug with relay control,
power/current/voltage/temperature measurement, and indicator LED brightness
control.  All commands use the ``cmdCode`` style (HTTP + MQTT).

Quota keys live under the ``2_1.`` prefix (heartbeat frame).

Scaling notes
-------------
- ``2_1.watts``    : integer in units of **0.1 W**   → divide by 10 for W
- ``2_1.maxCur``   : integer in units of **0.1 A**   → divide by 10 for A
- ``2_1.current``  : integer in units of **mA**       → divide by 1000 for A
- ``2_1.volt``     : integer already in **V**         (no scaling)
- ``2_1.temp``     : integer already in **°C**        (no scaling)
- ``2_1.brightness``: integer **0–1023**
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.number import NumberDeviceClass, NumberMode
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
    EcoFlowDevice,
    EcoFlowNumberEntityDescription,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..helpers import (
    deci as _scale_tenth,
    milli as _scale_1000,
    round2 as _round2,
)

# Example SN from the documentation: "HW52ZDH1RF3J0033"
# SN prefix "HW52" is derived from documented example SNs.
_SN_PREFIXES: tuple[str, ...] = ("HW52",)

# Distinctive quota key that identifies the Smart Plug.
_MARKER_KEY = "2_1.switchSta"


# ---------------------------------------------------------------------------
# Scaling helpers
# ---------------------------------------------------------------------------


# ---------------------------------------------------------------------------
# Sensors
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="plug_power",
        mqtt_key="2_1.watts",
        name="Power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_scale_tenth,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_current",
        mqtt_key="2_1.current",
        name="Current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_voltage",
        mqtt_key="2_1.volt",
        name="Voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_temp",
        mqtt_key="2_1.temp",
        name="Temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_max_current",
        mqtt_key="2_1.maxCur",
        name="Max current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        value_fn=_scale_tenth,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_freq",
        mqtt_key="2_1.freq",
        name="Frequency",
        device_class=SensorDeviceClass.FREQUENCY,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement="Hz",
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
    ),
)

# ---------------------------------------------------------------------------
# Switches
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="plug_switch",
        mqtt_key="2_1.switchSta",
        name="Relay",
        value_fn=bool,
        command_fn=lambda value, _q: {
            "cmdCode": "WN511_SOCKET_SET_PLUG_SWITCH_MESSAGE",
            "params": {"plugSwitch": 1 if value else 0},
        },
    ),
)

# ---------------------------------------------------------------------------
# Numbers
# ---------------------------------------------------------------------------

_NUMBERS: tuple[EcoFlowNumberEntityDescription, ...] = (
    EcoFlowNumberEntityDescription(
        key="plug_brightness",
        mqtt_key="2_1.brightness",
        name="Indicator brightness",
        device_class=NumberDeviceClass.ILLUMINANCE,
        native_min_value=0,
        native_max_value=1023,
        native_step=1,
        mode=NumberMode.SLIDER,
        command_fn=lambda value, _q: {
            "cmdCode": "WN511_SOCKET_SET_BRIGHTNESS_PACK",
            "params": {"brightness": int(value)},
        },
    ),
)


# ---------------------------------------------------------------------------
# Device class
# ---------------------------------------------------------------------------


class SmartPlugDevice(EcoFlowDevice):
    """EcoFlow Smart Plug (WN511 series)."""

    model = "EcoFlow Smart Plug"
    sn_prefixes: tuple[str, ...] = _SN_PREFIXES

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Match by SN prefix or by presence of the distinctive quota key."""
        if any(sn.startswith(prefix) for prefix in cls.sn_prefixes):
            return True
        return _MARKER_KEY in quota

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return list(_SENSORS)
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        if platform == Platform.NUMBER:
            return list(_NUMBERS)
        return []
