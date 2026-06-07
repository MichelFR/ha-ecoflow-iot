"""Base device abstraction and entity-description types.

A device subclass declares its entity descriptions per platform and how to turn a
control request into a command payload. Everything device-specific lives in a
subclass (e.g. :mod:`stream`); the platform files stay generic.
"""

from __future__ import annotations

from collections.abc import Callable, Mapping
from dataclasses import dataclass
from typing import Any

from homeassistant.components.binary_sensor import BinarySensorEntityDescription
from homeassistant.components.number import NumberEntityDescription
from homeassistant.components.select import SelectEntityDescription
from homeassistant.components.sensor import SensorEntityDescription
from homeassistant.components.switch import SwitchEntityDescription
from homeassistant.const import Platform

# A function that, given a single quota value, returns the entity's native value.
ValueFn = Callable[[Any], Any]
# A function that, given the full quota map, decides if the entity is available.
AvailableFn = Callable[[Mapping[str, Any]], bool]
# A function that, given the requested value and the current quota, returns the
# ``params`` payload for a set command.
CommandFn = Callable[[Any, Mapping[str, Any]], dict[str, Any]]


@dataclass(frozen=True, kw_only=True)
class _EcoFlowDescription:
    """Fields shared by every EcoFlow entity description."""

    mqtt_key: str = ""
    value_fn: ValueFn | None = None
    # Computes the value from the whole quota map (overrides mqtt_key lookup).
    quota_value_fn: Callable[[Mapping[str, Any]], Any] | None = None
    available_fn: AvailableFn | None = None
    http_only: bool = False


@dataclass(frozen=True, kw_only=True)
class EcoFlowSensorEntityDescription(_EcoFlowDescription, SensorEntityDescription):
    """Describes a read-only sensor."""


@dataclass(frozen=True, kw_only=True)
class EcoFlowBinarySensorEntityDescription(
    _EcoFlowDescription, BinarySensorEntityDescription
):
    """Describes a read-only binary sensor."""


@dataclass(frozen=True, kw_only=True)
class EcoFlowSwitchEntityDescription(_EcoFlowDescription, SwitchEntityDescription):
    """Describes a controllable on/off switch."""

    command_fn: CommandFn


@dataclass(frozen=True, kw_only=True)
class EcoFlowNumberEntityDescription(_EcoFlowDescription, NumberEntityDescription):
    """Describes a controllable numeric setpoint."""

    command_fn: CommandFn


@dataclass(frozen=True, kw_only=True)
class EcoFlowSelectEntityDescription(_EcoFlowDescription, SelectEntityDescription):
    """Describes a controllable multi-option setting."""

    command_fn: CommandFn
    # Derives the currently-selected option from the full quota map.
    current_option_fn: Callable[[Mapping[str, Any]], str | None]


class EcoFlowDevice:
    """Base class for a supported EcoFlow device family."""

    model: str = "EcoFlow Device"
    sn_prefixes: tuple[str, ...] = ()

    def __init__(self, sn: str) -> None:
        """Bind the device to a serial number."""
        self.sn = sn

    @classmethod
    def matches(cls, sn: str, quota: Mapping[str, Any]) -> bool:
        """Return True if this class handles the given device.

        Default behaviour matches on the serial-number prefix; subclasses may
        override to inspect quota fields.
        """
        return any(sn.startswith(prefix) for prefix in cls.sn_prefixes)

    @property
    def model_name(self) -> str:
        """Return the model name shown in the device registry."""
        return self.model

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        """Return the entity descriptions for a platform (empty by default)."""
        return []

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Map a ``command_fn`` result into the on-the-wire command payload.

        The default is identity: a device's ``command_fn`` returns the full
        command body (e.g. the legacy ``{"moduleType": .., "operateType": ..,
        "params": {..}}`` shape), and the coordinator adds ``sn``/``id``/
        ``version``. Devices that use a fixed routing envelope (e.g. Stream)
        override this to wrap the returned ``params``.
        """
        return command
