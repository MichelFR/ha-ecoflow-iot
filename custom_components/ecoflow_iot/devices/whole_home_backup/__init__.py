"""EcoFlow Whole-Home Backup device definitions."""

from .smart_home_panel import SmartHomePanelDevice
from .smart_home_panel_ii import SmartHomePanel2Device

__all__ = [
    "SmartHomePanel2Device",
    "SmartHomePanelDevice",
]
