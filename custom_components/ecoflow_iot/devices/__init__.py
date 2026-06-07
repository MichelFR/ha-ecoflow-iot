"""Device registry: resolve a serial number + quota snapshot to a device class.

Adding support for a new EcoFlow device family means writing one module with an
:class:`~.base.EcoFlowDevice` subclass and appending it to ``DEVICE_REGISTRY`` —
no platform code changes required.
"""

from __future__ import annotations

import logging
from collections.abc import Mapping
from typing import Any

from .base import EcoFlowDevice
from .stream import StreamDevice, StreamMicroinverterDevice

_LOGGER = logging.getLogger(__name__)

# Order matters: more specific matchers should come first. The battery-less
# microinverter is checked before the full Stream (whose matcher is permissive).
DEVICE_REGISTRY: tuple[type[EcoFlowDevice], ...] = (
    StreamMicroinverterDevice,
    StreamDevice,
)


def resolve_device(sn: str, quota: Mapping[str, Any]) -> EcoFlowDevice | None:
    """Return a device instance for the given serial, or None if unsupported."""
    for device_cls in DEVICE_REGISTRY:
        if device_cls.matches(sn, quota):
            return device_cls(sn)
    _LOGGER.warning("No EcoFlow device handler matched serial %s", sn)
    return None


__all__ = [
    "DEVICE_REGISTRY",
    "EcoFlowDevice",
    "StreamDevice",
    "StreamMicroinverterDevice",
    "resolve_device",
]
