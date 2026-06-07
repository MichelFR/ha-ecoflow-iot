# EcoFlow Delta Pro 3

**Category:** Power Stations · **Auto-detected by SN prefix:** `MR51`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_pro_3.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `cmsBattSoc` |  |
| Battery (BMS) | battery | % | `bmsBattSoc` | ○ |
| Battery temperature | temperature | °C | `bmsMaxCellTemp` | D |
| Battery minimum cell temperature | temperature | °C | `bmsMinCellTemp` | D ○ |
| Battery design capacity | energy_storage | Wh | `bmsDesignCap` | D ○ |
| Time to full | duration | min | `cmsChgRemTime` | D |
| Time to empty | duration | min | `cmsDsgRemTime` | D |
| Main battery time to full | duration | min | `bmsChgRemTime` | D ○ |
| Main battery time to empty | duration | min | `bmsDsgRemTime` | D ○ |
| Charge limit | battery | % | `cmsMaxChgSoc` | D |
| Discharge limit | battery | % | `cmsMinDsgSoc` | D |
| Backup reserve level | battery | % | `energyBackupStartSoc` | D |
| Total input power | power | W | `powInSumW` |  |
| Total output power | power | W | `powOutSumW` |  |
| High-voltage AC output power | power | W | `powGetAcHvOut` |  |
| AC output power | power | W | `powGetAc` |  |
| Low-voltage AC output power | power | W | `powGetAcLvOut` |  |
| Low-voltage AC TT-30 output power | power | W | `powGetAcLvTt30Out` | ○ |
| AC input power | power | W | `powGetAcIn` |  |
| High-voltage solar power | power | W | `powGetPvH` |  |
| Low-voltage solar power | power | W | `powGetPvL` |  |
| USB-C port 1 power | power | W | `powGetTypec1` | ○ |
| USB-C port 2 power | power | W | `powGetTypec2` | ○ |
| 12V output power | power | W | `powGet12v` | ○ |
| 24V output power | power | W | `powGet24v` | ○ |
| Power In/Out port power | power | W | `powGet5p8` | ○ |
| USB-A port 1 power | power | W | `powGetQcusb1` | ○ |
| USB-A port 2 power | power | W | `powGetQcusb2` | ○ |
| Extra battery port 1 power | power | W | `powGet4p81` | ○ |
| Extra battery port 2 power | power | W | `powGet4p82` | ○ |
| AC input frequency | frequency | Hz | `plugInInfoAcInFeq` | D |
| Low-voltage solar max charge current | current | A | `plugInInfoPvLChgAmpMax` | D ○ |
| Low-voltage solar max DC input current | current | A | `plugInInfoPvLDcAmpMax` | D ○ |
| Low-voltage solar max charge voltage | voltage | V | `plugInInfoPvLChgVolMax` | D ○ |
| High-voltage solar max charge current | current | A | `plugInInfoPvHChgAmpMax` | D ○ |
| High-voltage solar max DC input current | current | A | `plugInInfoPvHDcAmpMax` | D ○ |
| High-voltage solar max charge voltage | voltage | V | `plugInInfoPvHChgVolMax` | D ○ |
| AC max charge power | power | W | `plugInInfoAcInChgPowMax` | D |
| Power In/Out port max charge power | power | W | `plugInInfo5p8ChgPowMax` | D ○ |
| Power In/Out port max discharge power | power | W | `plugInInfo5p8DsgPowMax` | D ○ |
| AC max discharge power | power | W | `plugInInfoAcOutDsgPowMax` | D ○ |
| AC output frequency | frequency | Hz | `acOutFreq` | D |
| Screen timeout | duration | s | `screenOffTime` | D ○ |
| AC standby timeout | duration | min | `acStandbyTime` | D ○ |
| DC standby timeout | duration | min | `dcStandbyTime` | D ○ |
| Device standby timeout | duration | min | `devStandbyTime` | D ○ |
| Smart Generator auto-start SOC | battery | % | `cmsOilOnSoc` | D ○ |
| Smart Generator auto-stop SOC | battery | % | `cmsOilOffSoc` | D ○ |
| Generator/solar hybrid mode max SOC | battery | % | `generatorPvHybridModeSocMax` | D ○ |
| AC always-on minimum SOC | battery | % | `acAlwaysOnMiniSoc` | D ○ |
| Screen brightness | — | % | `lcdLight` | D ○ |
| Charge/discharge state | — | — | `cmsChgDsgState` | D ○ |
| Multi-battery charge/discharge mode | — | — | `multiBpChgDsgMode` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| High-voltage solar connected | connectivity | `plugInInfoPvHFlag` | D |
| Low-voltage solar connected | connectivity | `plugInInfoPvLFlag` | D |
| AC charger connected | plug | `plugInInfoAcInFlag` | D |
| AC charger plugged | plug | `plugInInfoAcChargerFlag` | D ○ |
| High-voltage solar charger connected | connectivity | `plugInInfoPvHChargerFlag` | D ○ |
| Low-voltage solar charger connected | connectivity | `plugInInfoPvLChargerFlag` | D ○ |
| Extra battery port 1 connected | connectivity | `plugInInfo4p81InFlag` | D ○ |
| Extra battery port 2 connected | connectivity | `plugInInfo4p82InFlag` | D ○ |
| Power In/Out port connected | connectivity | `plugInInfo5p8Flag` | D ○ |
| Battery management system on | power | `cmsBmsRunState` | D ○ |
| Backup reserve enabled | — | `energyBackupEn` | D ○ |
| Device sleeping | power | `devSleepState` | D ○ |
| Generator/solar hybrid mode | — | `generatorPvHybridModeOpen` | D ○ |
| Generator night care mode | — | `generatorCareModeOpen` | D ○ |
| Smart Generator auto start/stop | — | `cmsOilSelfStart` | D |
| X-Boost | — | `xboostEn` | D |
| AC energy-saving mode | — | `acEnergySavingOpen` | D |
| Beeper | — | `enBeep` | D ○ |
| GFCI | — | `llcGFCIFlag` | D ○ |
| Low-voltage AC always-on | — | `acLvAlwaysOn` | D ○ |
| High-voltage AC always-on | — | `acHvAlwaysOn` | D ○ |
| High-voltage AC output active | power | `flowInfoAcHvOut` | D |
| Low-voltage AC output active | power | `flowInfoAcLvOut` | D |
| 12V output active | power | `flowInfo12v` | D ○ |
| AC input active | power | `flowInfoAcIn` | D ○ |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| High-voltage AC output | `flowInfoAcHvOut` |  |
| Low-voltage AC output | `flowInfoAcLvOut` |  |
| 12V output | `flowInfo12v` |  |
| X-Boost | `xboostEn` |  |
| Beeper | `enBeep` |  |
| AC energy-saving mode | `acEnergySavingOpen` |  |
| Smart Generator auto start/stop | `cmsOilSelfStart` |  |
| GFCI | `llcGFCIFlag` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge limit | % | 50–100 (step 1) | `cmsMaxChgSoc` |  |
| Discharge limit | % | 0–30 (step 1) | `cmsMinDsgSoc` |  |
| Backup reserve level | % | 5–100 (step 1) | `energyBackupStartSoc` |  |
| Low-voltage solar max DC input current | A | 1–15 (step 1) | `plugInInfoPvLDcAmpMax` |  |
| High-voltage solar max DC input current | A | 1–15 (step 1) | `plugInInfoPvHDcAmpMax` |  |
| AC max charge power | W | 200–3000 (step 100) | `plugInInfoAcInChgPowMax` |  |
| Power In/Out port max charge power | W | 200–3000 (step 100) | `plugInInfo5p8ChgPowMax` |  |
| Smart Generator auto-start SOC | % | 0–30 (step 1) | `cmsOilOnSoc` |  |
| Smart Generator auto-stop SOC | % | 50–100 (step 1) | `cmsOilOffSoc` |  |
| Screen timeout | s | 0–600 (step 10) | `screenOffTime` |  |
| AC standby timeout | min | 0–720 (step 30) | `acStandbyTime` |  |
| DC standby timeout | min | 0–720 (step 30) | `dcStandbyTime` |  |
| Device standby timeout | min | 0–720 (step 30) | `devStandbyTime` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| Multi-battery charge/discharge mode | default, auto_voltage, main_priority | _derived_ |  |

---

_Entity totals: 100 — 53 sensor, 25 binary_sensor, 8 switch, 13 number, 1 select._
