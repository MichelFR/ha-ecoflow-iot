"""Import the EcoFlow device package under a Home Assistant stub and exercise
resolve_device + entity_descriptions for every model. No HA install required."""
import sys, types
from dataclasses import dataclass, field
from pathlib import Path


class Auto(str):
    """A str that yields more Autos on attribute access (enums/units/Platform)."""
    def __getattr__(self, name):
        return Auto(f"{self}.{name}")


from typing import Any  # noqa: E402


@dataclass(frozen=True, kw_only=True)
class StubEntityDescription:
    key: str = ""
    name: Any = None
    device_class: Any = None
    native_unit_of_measurement: Any = None
    state_class: Any = None
    entity_category: Any = None
    entity_registry_enabled_default: bool = True
    options: Any = None
    native_min_value: Any = None
    native_max_value: Any = None
    native_step: Any = None
    mode: Any = None
    translation_key: Any = None
    icon: Any = None
    suggested_display_precision: Any = None


def _make_component(modname):
    m = types.ModuleType(modname)
    def __getattr__(name, _m=m):
        if name.endswith("EntityDescription"):
            return StubEntityDescription
        return Auto(name)
    m.__getattr__ = __getattr__
    return m


def install_ha_stub():
    ha = types.ModuleType("homeassistant")
    ha.__path__ = []
    sys.modules["homeassistant"] = ha
    comps = types.ModuleType("homeassistant.components"); comps.__path__ = []
    sys.modules["homeassistant.components"] = comps
    for c in ("sensor", "binary_sensor", "switch", "number", "select", "light"):
        sys.modules[f"homeassistant.components.{c}"] = _make_component(
            f"homeassistant.components.{c}"
        )
    const = types.ModuleType("homeassistant.const")
    const.__getattr__ = lambda name: Auto(name)
    sys.modules["homeassistant.const"] = const
    exc = types.ModuleType("homeassistant.exceptions")
    exc.HomeAssistantError = type("HomeAssistantError", (Exception,), {})
    sys.modules["homeassistant.exceptions"] = exc


install_ha_stub()
root = Path(__file__).resolve().parents[1] / "custom_components"
sys.path.insert(0, str(root))
# Inject a bare 'ecoflow_iot' package so its heavy __init__.py is NOT executed;
# we only want to import the self-contained devices subpackage.
pkg = types.ModuleType("ecoflow_iot")
pkg.__path__ = [str(root / "ecoflow_iot")]
sys.modules["ecoflow_iot"] = pkg

from ecoflow_iot.devices import (  # noqa: E402
    DEVICE_REGISTRY,
    is_silenced,
    resolve_device,
)

# Silenced third-party devices: recognised but intentionally unsupported.
assert is_silenced("SM2AE4B063E5168C"), "SM2A should be silenced"
assert is_silenced("SM3AZAB1234567890"), "SM3A should be silenced"
assert is_silenced("DBABZ5XE1234567"), "DBAB (Delta Mini) should be silenced"
assert is_silenced("R601ZAB5HEBH0000"), "R60 (River 2) should be silenced"
assert not is_silenced("R621ZEB1XE8S0029"), "R62 (River 2 Pro) must not be silenced"
assert not is_silenced("HW52ZDH1RF3J0033"), "HW52 must not be silenced"

PLATFORMS = [Auto("Platform.SENSOR"), Auto("Platform.BINARY_SENSOR"),
             Auto("Platform.SWITCH"), Auto("Platform.NUMBER"), Auto("Platform.SELECT")]

print(f"Registry has {len(DEVICE_REGISTRY)} device classes\n")

cases = [
    ("BK11ZEBB2H350011", {"cmsBattSoc": 50}, "StreamDevice"),
    ("BK11ZEBB2H350011", {"gridConnectionPower": 1}, "StreamMicroinverterDevice"),
    ("BK11ZEBB2H350011", {}, "StreamDevice"),
    # Smart Meter shares the BK serial space but is its own (tiny) device —
    # it must not resolve as a Stream regardless of quota content (issue #5).
    ("BK21Z1BB7H500011", {}, "SmartMeterDevice"),
    ("BK21Z1BB7H500011", {"gridConnectionSta": "PANEL_GRID_IN"}, "SmartMeterDevice"),
    ("ES21ZE1B2J6H0060", {}, "Stream5000Device"),
    ("ES22ZE1B2J6H0060", {}, "Stream5000Device"),
    ("HW513000SF767194", {}, "PowerStreamDevice"),
    ("HW52ZDH1RF3J0033", {}, "SmartPlugDevice"),
    # EcoFlow x Shelly devices are silenced (recognised, but not served by the
    # open API) — resolve_device returns None; the coordinator skips them
    # without a repair (see is_silenced / SILENCED_SN_PREFIXES).
    ("SM2AE4B063E5168C", {}, None),
    ("DBABZ5XE1234567", {}, None),
    ("R601ZAB5HEBH0000", {}, None),
    ("R331ZEB4ZEAL0528", {}, "Delta2Device"),
    ("R351ZFB4HF6L0030", {}, "Delta2MaxDevice"),
    ("R621ZEB1XE8S0029", {}, "River2ProDevice"),
    ("DCABZ12345678", {}, "DeltaProDevice"),
    ("DCABA12345678", {}, "DeltaProDevice"),
    ("DCEBZ12345678", {}, "DeltaProDevice"),
    (
        "DXXX12345678",
        {"bmsMaster.soc": 50, "pd.soc": 50, "inv.cfgAcEnabled": 1},
        "DeltaProDevice",
    ),
    ("DXXX12345678", {"bmsMaster.soc": 50, "pd.wattsInSum": 0}, "DeltaProDevice"),
    ("MR51ZAS2PG330026", {}, "DeltaPro3Device"),
    ("Y711ZAB4SFAU0069", {}, "DeltaProUltraDevice"),
    ("D3N1ZE1A9HCE0009", {}, "Delta3MaxDevice"),
    ("D3M1ZA1A9H7H0136", {"powGetPv2": 0}, "Delta3MaxPlusDevice"),
    ("D3M1ZA1A9H7H0136", {}, "Delta3MaxDevice"),
    ("HJ31ZDH2ZF690029", {}, "PowerOceanDevice"),
    ("J32EZAB1234567890", {}, "PowerOceanDevice"),
    ("BX11ZCB4EF2E0002", {}, "GlacierDevice"),
    ("M106Z1234567890", {}, "PowerKitsDevice"),
    ("KT21ZCH2ZF170012", {}, "WaveDevice"),
    ("SP10ZAW5ZE9E0052", {}, "SmartHomePanelDevice"),
    ("HD31ZAS4ZFAP0018", {}, "SmartHomePanel2Device"),
    # Synthetic variant serials: a 4th SN char the integration didn't list
    # before. These exercise the family-code prefixes (R33/R35/R62/Y71/MR5/
    # BX1/KT2/HD3/HJ3/M10) broadened from the decompiled app's device registry,
    # so model variants no longer raise an "unsupported device" repair.
    ("R332ZEB4ZEAL9999", {}, "Delta2Device"),
    ("R352ZFB4HF6L9999", {}, "Delta2MaxDevice"),
    ("R622ZEB1XE8S9999", {}, "River2ProDevice"),
    ("Y712ZAB4SFAU9999", {}, "DeltaProUltraDevice"),
    ("MR52ZAS2PG339999", {}, "DeltaPro3Device"),
    ("BX12ZCB4EF2E9999", {}, "GlacierDevice"),
    ("KT22ZCH2ZF179999", {}, "WaveDevice"),
    ("HD32ZAS4ZFAP9999", {}, "SmartHomePanel2Device"),
    ("HJ32ZDH2ZF699999", {}, "PowerOceanDevice"),
    ("M109Z9999999999", {}, "PowerKitsDevice"),
    ("D3M2ZA1A9H7H9999", {"powGetPv2": 0}, "Delta3MaxPlusDevice"),
    ("D3M2ZA1A9H7H9999", {}, "Delta3MaxDevice"),
]

fails = 0
for sn, quota, expected in cases:
    dev = resolve_device(sn, quota)
    got = type(dev).__name__ if dev else None
    ok = got == expected
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {sn:18} q={str(quota):28} -> {got}  (want {expected})")

print("\n--- entity_descriptions sanity (counts per device) ---")
total = 0
for cls in DEVICE_REGISTRY:
    dev = cls("TESTSN")
    counts = {}
    for p in PLATFORMS:
        descs = dev.entity_descriptions(p)
        # unique-key check
        keys = [d.key for d in descs]
        assert len(keys) == len(set(keys)), f"{cls.__name__} dup keys on {p}"
        counts[p.split('.')[-1]] = len(descs)
    n = sum(counts.values()); total += n
    print(f"{cls.__name__:28} {counts}  total={n}")

print(f"\nTOTAL entity descriptions across fleet: {total}")
print(f"\nRESULT: {len(cases)-fails}/{len(cases)} resolution cases passed")
sys.exit(1 if fails else 0)
