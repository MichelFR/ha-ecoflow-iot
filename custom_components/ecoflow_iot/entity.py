"""Base entity for EcoFlow IoT platforms."""

from __future__ import annotations

import math
from typing import Any

from homeassistant.core import callback
from homeassistant.helpers.device_registry import DeviceInfo
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import (
    CONF_INVERT_GRID_SIGN,
    DEFAULT_INVERT_GRID_SIGN,
    DOMAIN,
    MANUFACTURER,
)
from .coordinator import EcoFlowCoordinator
from .devices.base import _EcoFlowDescription
from .devices.helpers import quota_get
from .models import DeviceState


def finite_or_none(value: Any) -> Any:
    """Map NaN / ±inf floats to None (unknown); pass everything else through.

    Some firmware reports ``NaN`` for values it has no reading for yet (e.g. the
    Stream's local-meter energy totals before the meter's first sample). Home
    Assistant rejects non-finite states on numeric sensors, so treat them as
    "no value" instead.
    """
    if isinstance(value, float) and not math.isfinite(value):
        return None
    return value


class EcoFlowEntity(CoordinatorEntity[EcoFlowCoordinator]):
    """Common base for all EcoFlow entities."""

    _attr_has_entity_name = True

    def __init__(
        self,
        coordinator: EcoFlowCoordinator,
        sn: str,
        description: _EcoFlowDescription,
    ) -> None:
        """Bind the entity to a device serial and description."""
        super().__init__(coordinator)
        self._sn = sn
        self.entity_description = description  # type: ignore[assignment]
        self._attr_unique_id = f"{sn}_{description.key}"
        if description.translation_placeholders is not None:
            self._attr_translation_placeholders = dict(
                description.translation_placeholders
            )
        device = coordinator.devices[sn]
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, sn)},
            manufacturer=MANUFACTURER,
            model=device.model_name,
            name=device.model_name,
            serial_number=sn,
        )

    @property
    def _state(self) -> DeviceState | None:
        return self.coordinator.data.get(self._sn)

    @callback
    def _handle_coordinator_update(self) -> None:
        pushed = self.coordinator.pushed_sn
        if pushed is not None and pushed != self._sn:
            return
        super()._handle_coordinator_update()

    @property
    def _quota(self) -> dict[str, Any]:
        state = self._state
        return state.quota if state else {}

    @property
    def extra_state_attributes(self) -> dict[str, Any] | None:
        """Expose dynamic metadata provided by the entity description."""
        desc: _EcoFlowDescription = self.entity_description  # type: ignore[assignment]
        if desc.attributes_fn is None:
            return None
        return dict(desc.attributes_fn(self._quota))

    @property
    def available(self) -> bool:
        """Entity is available when the device is online and reporting."""
        state = self._state
        if not super().available or state is None or not state.online:
            return False
        desc: _EcoFlowDescription = self.entity_description  # type: ignore[assignment]
        if desc.available_fn is not None:
            return desc.available_fn(self._quota)
        return True

    def _raw_value(self) -> Any:
        """Return the entity's value from quota, applying value/quota fns."""
        desc: _EcoFlowDescription = self.entity_description  # type: ignore[assignment]
        if desc.quota_value_fn is not None:
            return finite_or_none(desc.quota_value_fn(self._quota))
        value = finite_or_none(quota_get(self._quota, desc.mqtt_key))
        if value is None:
            return None
        if desc.value_fn is not None:
            return finite_or_none(desc.value_fn(value))
        return value

    @property
    def _grid_sign(self) -> float:
        """+1 or -1, multiplied into a raw grid-power field to normalise it.

        Normalises to Home Assistant's grid convention (import positive, export
        negative). Stream firmware reports the opposite sign, so the default
        (``invert_grid_sign`` on) flips it.
        """
        options = self.coordinator.config_entry.options
        inverted = options.get(CONF_INVERT_GRID_SIGN, DEFAULT_INVERT_GRID_SIGN)
        return -1.0 if inverted else 1.0

    def _signed_grid_power(self) -> float | None:
        """Signed grid power (W) normalised to HA convention, or None."""
        desc: _EcoFlowDescription = self.entity_description  # type: ignore[assignment]
        value = finite_or_none(self._quota.get(desc.mqtt_key))
        if value is None:
            return None
        return finite_or_none(self._grid_sign * float(value))
