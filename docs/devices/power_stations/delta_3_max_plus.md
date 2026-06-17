# EcoFlow Delta 3 Max Plus

**Category:** Power Stations · **Auto-detected by SN prefix:** `D3M1`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_3_max_plus.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `cmsBattSoc` |  |
| Time to full | duration | min | `cmsChgRemTime` | 🔧 |
| Time to empty | duration | min | `cmsDsgRemTime` | 🔧 |
| Charge/discharge state | — | — | `cmsChgDsgState` | 🔧 |
| Total input power | power | W | `powInSumW` |  |
| AC input power | power | W | `powGetAcIn` |  |
| Solar / car input power (PV1) | power | W | `powGetPv` |  |
| Solar / car input power (PV2) | power | W | `powGetPv2` |  |
| Total output power | power | W | `powOutSumW` |  |
| DC 12V output power | power | W | `powGet12v` |  |
| USB-C1 output power | power | W | `powGetTypec1` | 💤 |
| USB-C2 output power | power | W | `powGetTypec2` | 💤 |
| USB-C3 output power | power | W | `powGetTypec3` | 💤 |
| USB-A1 output power | power | W | `powGetQcusb1` | 💤 |
| USB-A2 output power | power | W | `powGetQcusb2` | 💤 |
| Backup reserve (read back) | — | % | `backupReverseSoc` | 🔧 💤 |
| Charge upper limit (read back) | — | % | `cmsMaxChgSoc` | 🔧 💤 |
| Discharge lower limit (read back) | — | % | `cmsMinDsgSoc` | 🔧 💤 |
| Solar energy | energy | Wh | _integrated_ |  |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Battery charging | battery_charging | `cmsChgDsgState` |  |
| AC output | power | `flowInfoAcOut` |  |
| AC2 output | power | `flowInfoAc2Out` |  |
| DC output | power | `flowInfo12v` |  |
| Energy backup enabled | — | `energyBackupEn` | 🔧 |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| AC output | `flowInfoAcOut` |  |
| AC2 output | `flowInfoAc2Out` |  |
| DC 12V output | `flowInfo12v` |  |
| Energy backup | `energyBackupEn` |  |
| Buzzer | `enBeep` |  |
| X-Boost | `xboostEn` |  |
| Bypass output disable | `bypassOutDisable` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge upper limit | % | 50–100 (step 1) | `cmsMaxChgSoc` |  |
| Discharge lower limit | % | 0–30 (step 1) | `cmsMinDsgSoc` |  |
| Backup reserve | % | 0–50 (step 1) | `backupReverseSoc` |  |

---

_Entity totals: 34 — 19 sensor, 5 binary_sensor, 7 switch, 3 number, 0 select._
