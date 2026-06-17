"""Base device abstraction and entity-description types.

A device subclass declares its entity descriptions per platform and how to turn a
control request into a command payload. Everything device-specific lives in a
subclass (e.g. :mod:`stream`); the platform files stay generic.
"""

from __future__ import annotations

from collections.abc import Callable, Mapping
from dataclasses import dataclass
from enum import Enum
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


class GridRole(Enum):
    """How an entity derives its value from a *signed* grid-power source.

    The source field (``mqtt_key``) is first normalised to the Home Assistant
    grid convention (import positive, export negative) according to the
    ``invert_grid_sign`` option, then the role selects what the entity exposes.
    Used for Stream's ``gridConnectionPower``, whose firmware sign is the
    opposite of HA's convention (see :data:`const.DEFAULT_INVERT_GRID_SIGN`).
    """

    SIGNED = "signed"  # the normalised signed power itself (W)
    IMPORT = "import"  # max(signed, 0): instantaneous power drawn from the grid
    EXPORT = "export"  # max(-signed, 0): instantaneous power fed to the grid

    def leg_power(self, signed: float) -> float:
        """Non-negative power for the IMPORT/EXPORT leg of a signed grid value.

        ``signed`` is W in HA convention (import positive, export negative).
        """
        if self is GridRole.IMPORT:
            return max(signed, 0.0)
        if self is GridRole.EXPORT:
            return max(-signed, 0.0)
        raise ValueError(f"leg_power is only defined for IMPORT/EXPORT, not {self}")


@dataclass(frozen=True, kw_only=True)
class _EcoFlowDescription:
    """Fields shared by every EcoFlow entity description."""

    mqtt_key: str = ""
    value_fn: ValueFn | None = None
    # Computes the value from the whole quota map (overrides mqtt_key lookup).
    quota_value_fn: Callable[[Mapping[str, Any]], Any] | None = None
    available_fn: AvailableFn | None = None
    http_only: bool = False
    # When set, the entity derives its value from the signed grid-power field
    # ``mqtt_key`` (normalised via the ``invert_grid_sign`` option) per the role.
    grid_role: GridRole | None = None


@dataclass(frozen=True, kw_only=True)
class EcoFlowSensorEntityDescription(_EcoFlowDescription, SensorEntityDescription):
    """Describes a read-only sensor."""


# Given the full quota map, return the instantaneous power (in W) to integrate,
# or None to pause integration (value missing / device offline).
PowerFn = Callable[[Mapping[str, Any]], float | None]


@dataclass(frozen=True, kw_only=True)
class EcoFlowIntegralSensorEntityDescription(EcoFlowSensorEntityDescription):
    """A sensor that integrates an instantaneous power (W) into energy (Wh).

    For devices that report power but no cumulative energy counter (e.g. Stream
    grid/solar): the sensor platform accumulates ``power_fn(quota) * dt`` over
    time and reports a monotonically increasing Wh total, usable directly as an
    Energy-Dashboard source. ``power_fn`` should return a non-negative value (or
    None) so the running total only ever increases.

    ``power_fn`` is optional when ``grid_role`` is set (IMPORT/EXPORT): the
    instantaneous power is then derived from the normalised signed grid field.
    """

    power_fn: PowerFn | None = None


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

    def has_http_only_entities(self) -> bool:
        """Whether any entity on any platform is marked ``http_only``.

        Used by the coordinator to decide if the device needs the slow HTTP
        refresh while MQTT is connected.
        """
        return any(
            desc.http_only
            for platform in (
                Platform.SENSOR,
                Platform.BINARY_SENSOR,
                Platform.SWITCH,
                Platform.NUMBER,
                Platform.SELECT,
            )
            for desc in self.entity_descriptions(platform)
        )

    def build_command(self, command: dict[str, Any]) -> dict[str, Any]:
        """Map a ``command_fn`` result into the on-the-wire command payload.

        The default is identity: a device's ``command_fn`` returns the full
        command body (e.g. the legacy ``{"moduleType": .., "operateType": ..,
        "params": {..}}`` shape), and the coordinator adds ``sn``/``id``/
        ``version``. Devices that use a fixed routing envelope (e.g. Stream)
        override this to wrap the returned ``params``.
        """
        return command
