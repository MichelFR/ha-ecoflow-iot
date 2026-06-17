# EcoFlow Stream

**Category:** Solar Systems · **Auto-detected by SN prefix:** `BK`

> Generated from `custom_components/ecoflow_iot/devices/solar_systems/stream.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `cmsBattSoc` |  |
| Battery (BMS) | battery | % | `bmsBattSoc` | 💤 |
| Battery health | — | % | `cmsBattSoh` | 🔧 |
| Battery voltage | voltage | V | `vol` | 🔧 |
| Battery current | current | A | `amp` | 🔧 |
| Battery temperature | temperature | °C | `temp` |  |
| Battery capacity | energy_storage | Wh | `cmsBattFullEnergy` | 🔧 |
| Battery cycles | — | — | `cycles` | 🔧 |
| Time to full | duration | min | `cmsChgRemTime` | 🔧 |
| Time to empty | duration | min | `cmsDsgRemTime` | 🔧 |
| Total charged | energy | Wh | `accuChgEnergy` | 💤 |
| Total discharged | energy | Wh | `accuDsgEnergy` | 💤 |
| Battery charge energy | energy | Wh | _integrated_ |  |
| Battery discharge energy | energy | Wh | _integrated_ |  |
| Battery power | power | W | `powGetBpCms` |  |
| Load power | power | W | `powGetSysLoad` |  |
| Load from battery | power | W | `powGetSysLoadFromBp` | 💤 |
| Load from grid | power | W | `powGetSysLoadFromGrid` | 💤 |
| Load from solar | power | W | `powGetSysLoadFromPv` | 💤 |
| Grid power | power | W | `gridConnectionPower` |  |
| System grid power | power | W | `sysGridConnectionPower` | 💤 |
| Grid voltage | voltage | V | `gridConnectionVol` | 🔧 |
| Grid frequency | frequency | Hz | `gridConnectionFreq` | 🔧 |
| Inverter temperature | temperature | °C | `invNtcTemp3` | 🔧 |
| Meter phase A power | power | W | `cloudMetter.phaseAPower` | 💤 |
| Solar power | power | W | `powGetPvSum` |  |
| Solar string 1 power | power | W | _computed_ |  |
| Solar string 1 voltage | voltage | V | `plugInInfoPvVol` | 🔧 💤 |
| Solar string 1 current | current | A | `plugInInfoPvAmp` | 🔧 💤 |
| Solar string 2 power | power | W | _computed_ |  |
| Solar string 2 voltage | voltage | V | `plugInInfoPv2Vol` | 🔧 💤 |
| Solar string 2 current | current | A | `plugInInfoPv2Amp` | 🔧 💤 |
| Solar string 3 power | power | W | _computed_ |  |
| Solar string 3 voltage | voltage | V | `plugInInfoPv3Vol` | 🔧 💤 |
| Solar string 3 current | current | A | `plugInInfoPv3Amp` | 🔧 💤 |
| Solar string 4 power | power | W | _computed_ |  |
| Solar string 4 voltage | voltage | V | `plugInInfoPv4Vol` | 🔧 💤 |
| Solar string 4 current | current | A | `plugInInfoPv4Amp` | 🔧 💤 |
| AC socket 1 power | power | W | `powGetSchuko1` |  |
| AC socket 2 power | power | W | `powGetSchuko2` |  |
| Solar energy | energy | Wh | _integrated_ |  |
| Grid import energy | energy | Wh | `gridConnectionPower` |  |
| Grid export energy | energy | Wh | `gridConnectionPower` |  |
| AC socket 1 energy | energy | Wh | _integrated_ |  |
| AC socket 2 energy | energy | Wh | _integrated_ |  |
| Wi-Fi signal | signal_strength | dBm | `moduleWifiRssi` | 🔧 💤 |
| Feed-in power limit | power | W | `feedGridModePowLimit` | 🔧 |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Battery charging | battery_charging | `powGetBpCms` |  |
| Battery heater | heat | `bmsBattHeating` | 🔧 |
| Smart meter connected | connectivity | `cloudMetter.hasMeter` | 🔧 |
| Storm guard | — | `stormPatternEnable` | 🔧 |
| Solar string 1 connected | connectivity | `plugInInfoPvFlag` | 🔧 💤 |
| Solar string 2 connected | connectivity | `plugInInfoPv2Flag` | 🔧 💤 |
| Solar string 3 connected | connectivity | `plugInInfoPv3Flag` | 🔧 💤 |
| Solar string 4 connected | connectivity | `plugInInfoPv4Flag` | 🔧 💤 |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| AC socket 1 | `relay2Onoff` |  |
| AC socket 2 | `relay3Onoff` |  |
| Self-powered mode | `energyStrategyOperateMode.operateSelfPoweredOpen` |  |
| Grid feed-in | `feedGridMode` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge limit | % | 50–100 (step 1) | `cmsMaxChgSoc` |  |
| Discharge limit | % | 0–30 (step 1) | `cmsMinDsgSoc` |  |
| Backup reserve | % | 3–95 (step 1) | `backupReverseSoc` |  |
| Feed-in power limit | W | 0–800 (step 10) | `feedGridModePowLimit` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| operating_mode | self_powered, scheduled, time_of_use, intelligent | _derived_ |  |

---

_Entity totals: 64 — 47 sensor, 8 binary_sensor, 4 switch, 4 number, 1 select._
