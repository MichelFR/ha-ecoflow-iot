# EcoFlow Smart Meter

**Category:** Solar Systems · **Auto-detected by SN prefix:** `BK21`

> Generated from `custom_components/ecoflow_iot/devices/solar_systems/stream.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT) · ⚠️ = undocumented (reverse-engineered, may break).

> ⚠️ **Heads-up:** entities flagged ⚠️ are reverse-engineered from live device data and are **not part of EcoFlow's documented API**. They may change behaviour or stop working after a device firmware or EcoFlow app update.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Grid import energy | energy | Wh | _integrated_ | ⚠️ |
| Grid export energy | energy | Wh | _integrated_ | ⚠️ |
| Grid power | power | W | `powGetSysGrid` | ⚠️ |
| Total active energy | energy | kWh | `gridConnectionDataRecord.totalActiveEnergy` | ⚠️ |
| Total reactive energy | — | kvarh | `gridConnectionDataRecord.totalReactiveEnergy` | 🔧 💤 ⚠️ |
| Power factor | power_factor | — | `gridConnectionPowerFactor` | 🔧 💤 ⚠️ |
| Phase L1 power | power | W | `gridConnectionPowerL1` | ⚠️ |
| Phase L1 voltage | voltage | V | `gridConnectionVolL1` | 🔧 💤 ⚠️ |
| Phase L1 current | current | A | `gridConnectionAmpL1` | 🔧 💤 ⚠️ |
| Phase L2 power | power | W | `gridConnectionPowerL2` | ⚠️ |
| Phase L2 voltage | voltage | V | `gridConnectionVolL2` | 🔧 💤 ⚠️ |
| Phase L2 current | current | A | `gridConnectionAmpL2` | 🔧 💤 ⚠️ |
| Phase L3 power | power | W | `gridConnectionPowerL3` | ⚠️ |
| Phase L3 voltage | voltage | V | `gridConnectionVolL3` | 🔧 💤 ⚠️ |
| Phase L3 current | current | A | `gridConnectionAmpL3` | 🔧 💤 ⚠️ |
| Grid connection status | — | — | `gridConnectionSta` | 🔧 ⚠️ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Phase L1 connected | plug | `gridConnectionFlagL1` | 🔧 ⚠️ |
| Phase L2 connected | plug | `gridConnectionFlagL2` | 🔧 ⚠️ |
| Phase L3 connected | plug | `gridConnectionFlagL3` | 🔧 ⚠️ |
| Problem | problem | _computed_ | 🔧 ⚠️ |

---

_Entity totals: 20 — 16 sensor, 4 binary_sensor, 0 switch, 0 number, 0 select, 0 light, 0 button._
