"""Base entity for EcoFlow IoT platforms."""

from __future__ import annotations

from typing import Any

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
from .models import DeviceState


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

    @property
    def _quota(self) -> dict[str, Any]:
        state = self._state
        return state.quota if state else {}

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
            return desc.quota_value_fn(self._quota)
        value = self._quota.get(desc.mqtt_key)
        if value is None:
            return None
        if desc.value_fn is not None:
            return desc.value_fn(value)
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
        value = self._quota.get(desc.mqtt_key)
        if value is None:
            return None
        return self._grid_sign * float(value)
