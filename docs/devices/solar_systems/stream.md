# EcoFlow Stream

**Category:** Solar Systems · **Auto-detected by SN prefix:** `BK`

> Generated from `custom_components/ecoflow_iot/devices/solar_systems/stream.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `cmsBattSoc` |  |
| Battery (BMS) | battery | % | `bmsBattSoc` | ○ |
| Battery health | — | % | `cmsBattSoh` | D |
| Battery voltage | voltage | V | `vol` | D |
| Battery current | current | A | `amp` | D |
| Battery temperature | temperature | °C | `temp` |  |
| Battery capacity | energy_storage | Wh | `cmsBattFullEnergy` | D |
| Battery cycles | — | — | `cycles` | D |
| Time to full | duration | min | `cmsChgRemTime` | D |
| Time to empty | duration | min | `cmsDsgRemTime` | D |
| Total charged | energy | Wh | `accuChgEnergy` |  |
| Total discharged | energy | Wh | `accuDsgEnergy` |  |
| Battery power | power | W | `powGetBpCms` |  |
| Load power | power | W | `powGetSysLoad` |  |
| Load from battery | power | W | `powGetSysLoadFromBp` | ○ |
| Load from grid | power | W | `powGetSysLoadFromGrid` | ○ |
| Load from solar | power | W | `powGetSysLoadFromPv` | ○ |
| Grid power | power | W | `gridConnectionPower` |  |
| System grid power | power | W | `sysGridConnectionPower` | ○ |
| Grid voltage | voltage | V | `gridConnectionVol` | D |
| Grid frequency | frequency | Hz | `gridConnectionFreq` | D |
| Inverter temperature | temperature | °C | `invNtcTemp3` | D |
| Meter phase A power | power | W | `cloudMetter.phaseAPower` | ○ |
| Solar power | power | W | `powGetPvSum` |  |
| Solar string 1 power | power | W | _computed_ |  |
| Solar string 1 voltage | voltage | V | `plugInInfoPvVol` | D ○ |
| Solar string 1 current | current | A | `plugInInfoPvAmp` | D ○ |
| Solar string 2 power | power | W | _computed_ |  |
| Solar string 2 voltage | voltage | V | `plugInInfoPv2Vol` | D ○ |
| Solar string 2 current | current | A | `plugInInfoPv2Amp` | D ○ |
| Solar string 3 power | power | W | _computed_ |  |
| Solar string 3 voltage | voltage | V | `plugInInfoPv3Vol` | D ○ |
| Solar string 3 current | current | A | `plugInInfoPv3Amp` | D ○ |
| Solar string 4 power | power | W | _computed_ |  |
| Solar string 4 voltage | voltage | V | `plugInInfoPv4Vol` | D ○ |
| Solar string 4 current | current | A | `plugInInfoPv4Amp` | D ○ |
| AC socket 1 power | power | W | `powGetSchuko1` |  |
| AC socket 2 power | power | W | `powGetSchuko2` |  |
| Wi-Fi signal | signal_strength | dBm | `moduleWifiRssi` | D ○ |
| Feed-in power limit | power | W | `feedGridModePowLimit` | D |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Battery heater | heat | `bmsBattHeating` | D |
| Smart meter connected | connectivity | `cloudMetter.hasMeter` | D |
| Storm guard | — | `stormPatternEnable` | D |
| Solar string 1 connected | connectivity | `plugInInfoPvFlag` | D ○ |
| Solar string 2 connected | connectivity | `plugInInfoPv2Flag` | D ○ |
| Solar string 3 connected | connectivity | `plugInInfoPv3Flag` | D ○ |
| Solar string 4 connected | connectivity | `plugInInfoPv4Flag` | D ○ |

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

_Entity totals: 56 — 40 sensor, 7 binary_sensor, 4 switch, 4 number, 1 select._
