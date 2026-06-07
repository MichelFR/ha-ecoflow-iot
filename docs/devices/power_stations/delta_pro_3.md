# EcoFlow Delta Pro 3

**Category:** Power Stations · **Auto-detected by SN prefix:** `MR51`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_pro_3.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `cmsBattSoc` |  |
| Battery (BMS) | battery | % | `bmsBattSoc` | 💤 |
| Battery temperature | temperature | °C | `bmsMaxCellTemp` | 🔧 |
| Battery minimum cell temperature | temperature | °C | `bmsMinCellTemp` | 🔧 💤 |
| Battery design capacity | energy_storage | Wh | `bmsDesignCap` | 🔧 💤 |
| Time to full | duration | min | `cmsChgRemTime` | 🔧 |
| Time to empty | duration | min | `cmsDsgRemTime` | 🔧 |
| Main battery time to full | duration | min | `bmsChgRemTime` | 🔧 💤 |
| Main battery time to empty | duration | min | `bmsDsgRemTime` | 🔧 💤 |
| Charge limit | battery | % | `cmsMaxChgSoc` | 🔧 |
| Discharge limit | battery | % | `cmsMinDsgSoc` | 🔧 |
| Backup reserve level | battery | % | `energyBackupStartSoc` | 🔧 |
| Total input power | power | W | `powInSumW` |  |
| Total output power | power | W | `powOutSumW` |  |
| High-voltage AC output power | power | W | `powGetAcHvOut` |  |
| AC output power | power | W | `powGetAc` |  |
| Low-voltage AC output power | power | W | `powGetAcLvOut` |  |
| Low-voltage AC TT-30 output power | power | W | `powGetAcLvTt30Out` | 💤 |
| AC input power | power | W | `powGetAcIn` |  |
| High-voltage solar power | power | W | `powGetPvH` |  |
| Low-voltage solar power | power | W | `powGetPvL` |  |
| USB-C port 1 power | power | W | `powGetTypec1` | 💤 |
| USB-C port 2 power | power | W | `powGetTypec2` | 💤 |
| 12V output power | power | W | `powGet12v` | 💤 |
| 24V output power | power | W | `powGet24v` | 💤 |
| Power In/Out port power | power | W | `powGet5p8` | 💤 |
| USB-A port 1 power | power | W | `powGetQcusb1` | 💤 |
| USB-A port 2 power | power | W | `powGetQcusb2` | 💤 |
| Extra battery port 1 power | power | W | `powGet4p81` | 💤 |
| Extra battery port 2 power | power | W | `powGet4p82` | 💤 |
| AC input frequency | frequency | Hz | `plugInInfoAcInFeq` | 🔧 |
| Low-voltage solar max charge current | current | A | `plugInInfoPvLChgAmpMax` | 🔧 💤 |
| Low-voltage solar max DC input current | current | A | `plugInInfoPvLDcAmpMax` | 🔧 💤 |
| Low-voltage solar max charge voltage | voltage | V | `plugInInfoPvLChgVolMax` | 🔧 💤 |
| High-voltage solar max charge current | current | A | `plugInInfoPvHChgAmpMax` | 🔧 💤 |
| High-voltage solar max DC input current | current | A | `plugInInfoPvHDcAmpMax` | 🔧 💤 |
| High-voltage solar max charge voltage | voltage | V | `plugInInfoPvHChgVolMax` | 🔧 💤 |
| AC max charge power | power | W | `plugInInfoAcInChgPowMax` | 🔧 |
| Power In/Out port max charge power | power | W | `plugInInfo5p8ChgPowMax` | 🔧 💤 |
| Power In/Out port max discharge power | power | W | `plugInInfo5p8DsgPowMax` | 🔧 💤 |
| AC max discharge power | power | W | `plugInInfoAcOutDsgPowMax` | 🔧 💤 |
| AC output frequency | frequency | Hz | `acOutFreq` | 🔧 |
| Screen timeout | duration | s | `screenOffTime` | 🔧 💤 |
| AC standby timeout | duration | min | `acStandbyTime` | 🔧 💤 |
| DC standby timeout | duration | min | `dcStandbyTime` | 🔧 💤 |
| Device standby timeout | duration | min | `devStandbyTime` | 🔧 💤 |
| Smart Generator auto-start SOC | battery | % | `cmsOilOnSoc` | 🔧 💤 |
| Smart Generator auto-stop SOC | battery | % | `cmsOilOffSoc` | 🔧 💤 |
| Generator/solar hybrid mode max SOC | battery | % | `generatorPvHybridModeSocMax` | 🔧 💤 |
| AC always-on minimum SOC | battery | % | `acAlwaysOnMiniSoc` | 🔧 💤 |
| Screen brightness | — | % | `lcdLight` | 🔧 💤 |
| Charge/discharge state | — | — | `cmsChgDsgState` | 🔧 💤 |
| Multi-battery charge/discharge mode | — | — | `multiBpChgDsgMode` | 🔧 💤 |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| High-voltage solar connected | connectivity | `plugInInfoPvHFlag` | 🔧 |
| Low-voltage solar connected | connectivity | `plugInInfoPvLFlag` | 🔧 |
| AC charger connected | plug | `plugInInfoAcInFlag` | 🔧 |
| AC charger plugged | plug | `plugInInfoAcChargerFlag` | 🔧 💤 |
| High-voltage solar charger connected | connectivity | `plugInInfoPvHChargerFlag` | 🔧 💤 |
| Low-voltage solar charger connected | connectivity | `plugInInfoPvLChargerFlag` | 🔧 💤 |
| Extra battery port 1 connected | connectivity | `plugInInfo4p81InFlag` | 🔧 💤 |
| Extra battery port 2 connected | connectivity | `plugInInfo4p82InFlag` | 🔧 💤 |
| Power In/Out port connected | connectivity | `plugInInfo5p8Flag` | 🔧 💤 |
| Battery management system on | power | `cmsBmsRunState` | 🔧 💤 |
| Backup reserve enabled | — | `energyBackupEn` | 🔧 💤 |
| Device sleeping | power | `devSleepState` | 🔧 💤 |
| Generator/solar hybrid mode | — | `generatorPvHybridModeOpen` | 🔧 💤 |
| Generator night care mode | — | `generatorCareModeOpen` | 🔧 💤 |
| Smart Generator auto start/stop | — | `cmsOilSelfStart` | 🔧 |
| X-Boost | — | `xboostEn` | 🔧 |
| AC energy-saving mode | — | `acEnergySavingOpen` | 🔧 |
| Beeper | — | `enBeep` | 🔧 💤 |
| GFCI | — | `llcGFCIFlag` | 🔧 💤 |
| Low-voltage AC always-on | — | `acLvAlwaysOn` | 🔧 💤 |
| High-voltage AC always-on | — | `acHvAlwaysOn` | 🔧 💤 |
| High-voltage AC output active | power | `flowInfoAcHvOut` | 🔧 |
| Low-voltage AC output active | power | `flowInfoAcLvOut` | 🔧 |
| 12V output active | power | `flowInfo12v` | 🔧 💤 |
| AC input active | power | `flowInfoAcIn` | 🔧 💤 |

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
