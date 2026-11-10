"""Non-finite (NaN / inf) quota values surface as None, never as a state.

Regression for issue #33: the Stream's local meter reported ``NaN`` for
``totalImportKwh`` / ``totalExportKwh`` and Home Assistant refused to add the
energy sensors ("has the non-finite value: 'nan'").
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import ha_stubs  # noqa: E402,F401
from ecoflow_iot import sensor  # noqa: E402
from ecoflow_iot.devices.base import Platform  # noqa: E402
from ecoflow_iot.devices.solar_systems.stream import StreamDevice  # noqa: E402
from ecoflow_iot.entity import finite_or_none  # noqa: E402

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


class Probe(sensor.EcoFlowSensor):
    """Real EcoFlowSensor value path over a fixed quota (no coordinator)."""

    def __init__(self, desc, quota):
        self.entity_description = desc
        self.quota = quota

    @property
    def _quota(self):
        return self.quota


check("nan -> None", finite_or_none(float("nan")), None)
check("inf -> None", finite_or_none(float("inf")), None)
check("-inf -> None", finite_or_none(float("-inf")), None)
check("finite float kept", finite_or_none(1.5), 1.5)
check("int kept", finite_or_none(0), 0)
check("str kept", finite_or_none("NONE"), "NONE")
check("None kept", finite_or_none(None), None)

meter_q = {"localMeter": {"online": 1, "model": "SMR", "totalPwr": 512.5,
                          "totalImportKwh": math.nan, "totalExportKwh": math.nan}}
dev = StreamDevice("BK11ZE1B2H5K2510")
dyn = {d.key: d for d in dev.dynamic_entity_descriptions(Platform.SENSOR, meter_q)}

check("import energy NaN -> None",
      Probe(dyn["local_meter_import_energy"], meter_q).native_value, None)
check("export energy NaN -> None",
      Probe(dyn["local_meter_export_energy"], meter_q).native_value, None)
check("meter power still read",
      Probe(dyn["local_meter_power"], meter_q).native_value, 512.5)

ok_q = {"localMeter": {**meter_q["localMeter"], "totalImportKwh": 1234.5}}
check("import energy real value",
      Probe(dyn["local_meter_import_energy"], ok_q).native_value, 1234.5)

# mqtt_key path (no quota_value_fn)
sens = {d.key: d for d in dev.entity_descriptions(Platform.SENSOR)}
soc = sens["cms_batt_soc"]
check("mqtt_key NaN -> None", Probe(soc, {soc.mqtt_key: math.nan}).native_value, None)

print("\nRESULT:", "PASS" if not fails else f"{fails} FAIL")
sys.exit(1 if fails else 0)
