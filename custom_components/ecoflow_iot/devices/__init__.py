"""Device registry: resolve a serial number + quota snapshot to a device class.

Adding support for a new EcoFlow device family means writing one module with an
:class:`~.base.EcoFlowDevice` subclass and appending it to ``DEVICE_REGISTRY`` —
no platform code changes required. Modules are grouped into category packages
that mirror the EcoFlow developer-docs catalog (power_stations, home_battery,
smart_living, solar_systems, whole_home_backup).
"""

from __future__ import annotations

import logging
from collections.abc import Mapping
from typing import Any

from ..const import SN_PREFIX_LEN
from .base import EcoFlowDevice
from .home_battery import PowerOceanDevice
from .power_stations import (
    Delta2Device,
    Delta2MaxDevice,
    Delta3MaxDevice,
    Delta3MaxPlusDevice,
    DeltaPro3Device,
    DeltaProDevice,
    DeltaProUltraDevice,
    River2ProDevice,
)
from .smart_living import (
    GlacierDevice,
    PowerKitsDevice,
    SmartPlugDevice,
    WaveDevice,
)
from .solar_systems import (
    PowerStreamDevice,
    StreamDevice,
    StreamMicroinverterDevice,
)
from .whole_home_backup import SmartHomePanel2Device, SmartHomePanelDevice

_LOGGER = logging.getLogger(__name__)

# Registry order matters only when two classes can match the same device:
#   - Delta3MaxPlusDevice precedes Delta3MaxDevice (shared D3M1 SN prefix; the
#     PLUS is identified by its second PV input ``powGetPv2``).
#   - StreamMicroinverterDevice precedes StreamDevice (shared BK SN prefix; the
#     microinverter is the battery-less variant).
DEVICE_REGISTRY: tuple[type[EcoFlowDevice], ...] = (
    # Power Stations
    Delta2Device,
    Delta2MaxDevice,
    Delta3MaxPlusDevice,
    Delta3MaxDevice,
    DeltaProDevice,
    DeltaPro3Device,
    DeltaProUltraDevice,
    River2ProDevice,
    # Home battery
    PowerOceanDevice,
    # Smart living
    GlacierDevice,
    PowerKitsDevice,
    SmartPlugDevice,
    WaveDevice,
    # Solar systems
    StreamMicroinverterDevice,
    StreamDevice,
    PowerStreamDevice,
    # Whole-home backup
    SmartHomePanel2Device,
    SmartHomePanelDevice,
)


def resolve_device(sn: str, quota: Mapping[str, Any]) -> EcoFlowDevice | None:
    """Return a device instance for the given serial, or None if unsupported.

    Resolution is SN-prefix-authoritative: a device whose ``sn_prefixes`` match
    the serial wins over any quota-based heuristic (which could otherwise be
    satisfied by a sibling model). When several classes share an SN prefix
    (e.g. the Delta 3 MAX / MAX PLUS), the quota snapshot disambiguates them.
    """
    prefix_matches = [
        device_cls
        for device_cls in DEVICE_REGISTRY
        if any(sn.startswith(p) for p in device_cls.sn_prefixes)
    ]
    if len(prefix_matches) == 1:
        return prefix_matches[0](sn)
    if len(prefix_matches) > 1:
        # Multiple models share this SN prefix; let the quota decide.
        for device_cls in prefix_matches:
            if device_cls.matches(sn, quota):
                return device_cls(sn)
        return prefix_matches[-1](sn)  # fall back to the most generic candidate

    # Unknown serial: fall back to quota-based matchers in registry order.
    for device_cls in DEVICE_REGISTRY:
        if device_cls.matches(sn, quota):
            return device_cls(sn)

    _LOGGER.warning(
        "No EcoFlow device handler matched serial prefix %s", sn[:SN_PREFIX_LEN]
    )
    return None


__all__ = ["DEVICE_REGISTRY", "EcoFlowDevice", "resolve_device"]
