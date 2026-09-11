"""Integral energy sensors write state at most every 10 s or on a >= 1 Wh step."""

from __future__ import annotations

import sys
import types
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import ha_stubs  # noqa: E402,F401
from ecoflow_iot import sensor  # noqa: E402

writes: list[float] = []


class Probe(sensor.EcoFlowIntegralSensor):
    def __init__(self):
        self._energy_wh = 0.0
        self._last_power = None
        self._last_ts = None
        self._written_wh = None
        self._written_ts = None
        self.power = 100.0
        self.now = datetime(2026, 1, 1, tzinfo=timezone.utc)

    def _current_power(self):
        return self.power

    def async_write_ha_state(self):
        writes.append(round(self._energy_wh, 3))


sensor.dt_util = types.SimpleNamespace(utcnow=lambda: probe.now)
probe = Probe()

fails = 0


def check(label, got, want):
    global fails
    ok = got == want
    fails += not ok
    print(f"{'OK ' if ok else 'XX '} {label}: got {got!r} want {want!r}")


probe._accumulate(write=True)
check("first sample writes", len(writes), 1)

for _ in range(9):
    probe.now += timedelta(seconds=1)
    probe._accumulate(write=True)
check("100 W x 9 s (0.25 Wh) within 10 s: no write", len(writes), 1)

probe.now += timedelta(seconds=1)
probe._accumulate(write=True)
check("10 s elapsed: writes", len(writes), 2)
check("accumulated 10 s at 100 W", writes[-1], round(100 * 10 / 3600, 3))

probe.power = 5000.0
probe.now += timedelta(seconds=1)
probe._accumulate(write=True)
check("1 s at ~2.5 kW avg (0.7 Wh): no write", len(writes), 2)
probe.now += timedelta(seconds=1)
probe._accumulate(write=True)
check("next second crosses 1 Wh since last write: writes", len(writes), 3)

probe.power = 0.0
for _ in range(5):
    probe.now += timedelta(seconds=1)
    probe._accumulate(write=True)
check("idle 5 s at 0 W: no write", len(writes), 3)

print(f"\nRESULT: {'PASS' if not fails else f'{fails} FAILED'}")
sys.exit(1 if fails else 0)
