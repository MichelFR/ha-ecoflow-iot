# EcoFlow Glacier

**Category:** Smart Living · **Auto-detected by SN prefix:** `BX11Z`

> Generated from `custom_components/ecoflow_iot/devices/smart_living/glacier.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `bms_bmsStatus.f32ShowSoc` |  |
| Battery (integer) | battery | % | `bms_bmsStatus.soc` | D ○ |
| Battery (PD) | battery | % | `pd.batPct` | D ○ |
| Battery voltage | voltage | V | `bms_bmsStatus.vol` | D |
| Battery current | current | A | `bms_bmsStatus.amp` | D |
| Battery input power | power | W | `bms_bmsStatus.inWatts` | D |
| Battery output power | power | W | `bms_bmsStatus.outWatts` | D |
| Battery temperature | temperature | °C | `bms_bmsStatus.tmp` |  |
| Battery health | — | % | `bms_bmsStatus.soh` | D ○ |
| Battery time | duration | min | `pd.batTime` | D |
| Time to full | duration | min | `bms_emsStatus.chgRemain` | D |
| Time to empty | duration | min | `bms_emsStatus.dsgRemain` | D |
| Right zone temperature | temperature | °C | `pd.tmpR` |  |
| Left zone temperature | temperature | °C | `pd.tmpL` |  |
| Single zone temperature | temperature | °C | `pd.tmpAver` |  |
| Ambient temperature | temperature | °C | `pd.ambientTmp` | D |
| Ice zone water temperature | temperature | °C | `pd.tempWater` | D ○ |
| Exhaust temperature | temperature | °C | `pd.exhaustTmp` | D ○ |
| Compressor power | power | W | `pd.motorWat` | D ○ |
| Compressor current | current | A | `pd.motorCur` | D ○ |
| Compressor voltage | voltage | V | `pd.motorVol` | D ○ |
| Compressor speed | — | rpm | `pd.motorSpeed` | D ○ |
| Fan level | — | — | `pd.fanLvl` | D ○ |
| Ice making progress | — | % | `pd.icePercent` |  |
| Ice making duration | duration | s | `pd.iceTm` | D ○ |
| Water level | — | — | `pd.waterLine` | D |
| Right zone setpoint | temperature | °C | `pd.tmpRSet` | D ○ |
| Left zone setpoint | temperature | °C | `pd.tmpLSet` | D ○ |
| Combined zone setpoint | temperature | °C | `pd.tmpMSet` | D ○ |
| Running state | — | — | `pd.fsmState` | D ○ |
| Operating status | — | — | `pd.runState` | D ○ |
| Charger type | — | — | `pd.chgType` | D ○ |
| Error code | — | — | `pd.errCode` | D ○ |
| BMS fault code | — | — | `pd.errBms` | D ○ |
| PD fault code | — | — | `pd.errPd` | D ○ |
| Power fault code | — | — | `pd.errPwr` | D ○ |
| BLDC fault code | — | — | `pd.errBldc` | D ○ |
| 12V auxiliary voltage | voltage | V | `pd.A12Val` | D ○ |
| Battery min cell voltage | voltage | V | `bms_bmsStatus.minCellVol` | D ○ |
| Battery max cell voltage | voltage | V | `bms_bmsStatus.maxCellVol` | D ○ |
| Battery min cell temperature | temperature | °C | `bms_bmsStatus.minCellTmp` | D ○ |
| Battery max cell temperature | temperature | °C | `bms_bmsStatus.maxCellTmp` | D ○ |
| LCD SoC | battery | % | `bms_emsStatus.lcdSoc` | D ○ |
| Screen timeout | duration | s | `pd.blTime` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Power | power | `pd.pwrState` |  |
| Door | door | `pd.doorStat` |  |
| Battery pack | connectivity | `pd.batFlag` | D |
| BMS connected | connectivity | `pd.bmsInFlag` | D ○ |
| XT60 input | plug | `pd.xt60InState` | D ○ |
| XT150 input | plug | `pd.xt150InState` | D ○ |
| Compressor waiting | running | `pd.motorWait` | D ○ |
| Dual zone partition | — | `pd.flagTwoZone` | D |
| Ice ready | — | `pd.iceAlert` |  |
| Car battery low | battery | `pd.carBatLow` | D |
| Ambient sensor reliable | — | `pd.flagAmbintReady` | D ○ |
| EMS charging | battery_charging | `pd.emsChgFlg` | D ○ |
| Compressor allowed | running | `pd.bldcDntWork` | D ○ |
| Ice making allowed | — | `pd.bldcDntIce` | D ○ |
| Battery protection enabled | — | `pd.pwrPbEn` | D |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| ECO mode | `pd.coolMode` |  |
| Buzzer | `pd.beepEn` |  |
| Battery low voltage protection | `pd.pwrPbEn` |  |
| Sensor detection blocking | `pd.sensorAdv` | D ○ |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Right zone setpoint | °C | -25–10 (step 1) | `pd.tmpRSet` |  |
| Left zone setpoint | °C | -25–10 (step 1) | `pd.tmpLSet` |  |
| Combined zone setpoint | °C | -25–10 (step 1) | `pd.tmpMSet` |  |
| Screen timeout | s | 0–3600 (step 10) | `pd.blTime` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| Ice maker | off, small, large | _derived_ |  |
| Battery protection level | low, medium, high | _derived_ |  |
| Temperature unit | celsius, fahrenheit | _derived_ |  |

---

_Entity totals: 70 — 44 sensor, 15 binary_sensor, 4 switch, 4 number, 3 select._
