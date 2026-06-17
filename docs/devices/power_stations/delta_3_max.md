# EcoFlow Delta 3 Max

**Category:** Power Stations · **Auto-detected by SN prefix:** `D3N1`, `D3M1`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_3_max.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Total input power | power | W | `powInSumW` |  |
| Total output power | power | W | `powOutSumW` |  |
| AC input power | power | W | `powGetAcIn` |  |
| AC output power | power | W | `powGetAcOut` |  |
| Solar / car input power | power | W | `powGetPv` |  |
| DC 12V output power | power | W | `powGet12v` |  |
| USB-C 1 output power | power | W | `powGetTypec1` | 🔧 💤 |
| USB-C 2 output power | power | W | `powGetTypec2` | 🔧 💤 |
| USB-C 3 output power | power | W | `powGetTypec3` | 🔧 💤 |
| USB-A 1 output power | power | W | `powGetQcusb1` | 🔧 💤 |
| USB-A 2 output power | power | W | `powGetQcusb2` | 🔧 💤 |
| Battery | battery | % | `cmsBattSoc` |  |
| Time to empty | duration | min | `cmsDsgRemTime` | 🔧 |
| Time to full | duration | min | `cmsChgRemTime` | 🔧 |
| Charge upper limit | battery | % | `cmsMaxChgSoc` | 🔧 💤 |
| Discharge lower limit | battery | % | `cmsMinDsgSoc` | 🔧 💤 |
| Backup reserve level | battery | % | `backupReverseSoc` | 🔧 💤 |
| Solar energy | energy | Wh | _integrated_ |  |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| AC output | power | `flowInfoAcOut` |  |
| DC 12V output | power | `flowInfo12v` |  |
| Energy backup | power | `energyBackupEn` | 🔧 |
| Buzzer | — | `enBeep` | 🔧 💤 |
| X-Boost | — | `xboostEn` | 🔧 |
| Bypass output disabled | — | `bypassOutDisable` | 🔧 💤 |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| AC output switch | `flowInfoAcOut` |  |
| DC 12V output switch | `flowInfo12v` |  |
| Energy backup switch | `energyBackupEn` |  |
| Buzzer switch | `enBeep` |  |
| X-Boost switch | `xboostEn` |  |
| Bypass output disable switch | `bypassOutDisable` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge upper limit | % | 50–100 (step 1) | `cmsMaxChgSoc` |  |
| Discharge lower limit | % | 0–30 (step 1) | `cmsMinDsgSoc` |  |
| Backup reserve | % | 0–50 (step 1) | `backupReverseSoc` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| Charge / discharge state | idle, discharging, charging | _derived_ | 🔧 💤 |

---

_Entity totals: 34 — 18 sensor, 6 binary_sensor, 6 switch, 3 number, 1 select._
