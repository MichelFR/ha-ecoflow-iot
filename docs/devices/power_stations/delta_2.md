# EcoFlow Delta 2

**Category:** Power Stations · **Auto-detected by SN prefix:** `R331`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_2.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `pd.soc` |  |
| Total input power | power | W | `pd.wattsInSum` |  |
| Total output power | power | W | `pd.wattsOutSum` |  |
| Remaining time | duration | min | `pd.remainTime` | D |
| USB-C 1 power | power | W | `pd.typec1Watts` |  |
| USB-C 2 power | power | W | `pd.typec2Watts` |  |
| USB-A 1 power | power | W | `pd.usb1Watts` |  |
| USB-A 2 power | power | W | `pd.usb2Watts` |  |
| USB QC 1 power | power | W | `pd.qcUsb1Watts` |  |
| USB QC 2 power | power | W | `pd.qcUsb2Watts` |  |
| Car output power | power | W | `pd.carWatts` |  |
| Car port temperature | temperature | °C | `pd.carTemp` | D |
| USB-C 1 temperature | temperature | °C | `pd.typec1Temp` | D ○ |
| USB-C 2 temperature | temperature | °C | `pd.typec2Temp` | D ○ |
| Total DC charged | energy | Wh | `pd.chgPowerDC` | ○ |
| Total solar charged | energy | Wh | `pd.chgSunPower` |  |
| Total AC charged | energy | Wh | `pd.chgPowerAC` | ○ |
| Total DC discharged | energy | Wh | `pd.dsgPowerDC` | ○ |
| Total AC discharged | energy | Wh | `pd.dsgPowerAC` | ○ |
| USB use time | duration | s | `pd.usbUsedTime` | D ○ |
| USB QC use time | duration | s | `pd.usbqcUsedTime` | D ○ |
| USB-C use time | duration | s | `pd.typecUsedTime` | D ○ |
| Car port use time | duration | s | `pd.carUsedTime` | D ○ |
| Inverter use time | duration | s | `pd.invUsedTime` | D ○ |
| DC charging time | duration | s | `pd.dcInUsedTime` | D ○ |
| MPPT use time | duration | s | `pd.mpptUsedTime` | D ○ |
| Device standby time | duration | min | `pd.standbyMin` | D |
| LCD timeout | duration | s | `pd.lcdOffSec` | D |
| Wi-Fi signal | signal_strength | dBm | `pd.wifiRssi` | D ○ |
| Charge/discharge state | — | — | `pd.chgDsgState` | D |
| Backup reserve level | battery | % | `pd.bpPowerSoc` | D |
| Battery SoC (BMS) | battery | % | `bms_bmsStatus.f32ShowSoc` |  |
| Battery voltage | voltage | V | `bms_bmsStatus.vol` | D |
| Battery current | current | A | `bms_bmsStatus.amp` | D |
| Battery temperature | temperature | °C | `bms_bmsStatus.temp` | D |
| Battery level (BMS integer) | battery | % | `bms_bmsStatus.soc` | D ○ |
| Battery health | — | % | `bms_bmsStatus.soh` | D |
| Battery design capacity | — | mAh | `bms_bmsStatus.designCap` | D ○ |
| Battery full capacity | — | mAh | `bms_bmsStatus.fullCap` | D ○ |
| Battery remaining capacity | — | mAh | `bms_bmsStatus.remainCap` | D ○ |
| Battery time remaining (BMS) | duration | min | `bms_bmsStatus.remainTime` | D ○ |
| Battery input power | power | W | `bms_bmsStatus.inputWatts` |  |
| Battery output power | power | W | `bms_bmsStatus.outputWatts` |  |
| Battery max cell temperature | temperature | °C | `bms_bmsStatus.maxCellTemp` | D ○ |
| Battery min cell temperature | temperature | °C | `bms_bmsStatus.minCellTemp` | D ○ |
| Battery max cell voltage | voltage | MILLIVOLT | `bms_bmsStatus.maxCellVol` | D ○ |
| Battery min cell voltage | voltage | MILLIVOLT | `bms_bmsStatus.minCellVol` | D ○ |
| Battery max MOS temperature | temperature | °C | `bms_bmsStatus.maxMosTemp` | D ○ |
| Battery min MOS temperature | temperature | °C | `bms_bmsStatus.minMosTemp` | D ○ |
| Battery error code | — | — | `bms_bmsStatus.errCode` | D ○ |
| Battery SoC (display) | battery | % | `bms_emsStatus.lcdShowSoc` | ○ |
| Battery SoC (display float) | battery | % | `bms_emsStatus.f32LcdShowSoc` | ○ |
| Charge upper limit | battery | % | `bms_emsStatus.maxChargeSoc` | D |
| Discharge lower limit | battery | % | `bms_emsStatus.minDsgSoc` | D |
| Time to full | duration | min | `bms_emsStatus.chgRemainTime` | D |
| Time to empty | duration | min | `bms_emsStatus.dsgRemainTime` | D |
| EMS charging voltage | voltage | MILLIVOLT | `bms_emsStatus.chgVol` | D ○ |
| EMS charging current | current | mA | `bms_emsStatus.chgAmp` | D ○ |
| EMS charging status | — | — | `bms_emsStatus.chgState` | D |
| Fan level | — | — | `bms_emsStatus.fanLevel` | D |
| BMS model | — | — | `bms_emsStatus.bmsModel` | D ○ |
| Smart Generator on SoC | battery | % | `bms_emsStatus.minOpenOilEb` | D |
| Smart Generator off SoC | battery | % | `bms_emsStatus.maxCloseOilEb` | D |
| BMS warning state | — | — | `bms_emsStatus.bmsWarState` | D ○ |
| AC charging power | power | W | `inv.inputWatts` |  |
| AC output power | power | W | `inv.outputWatts` |  |
| AC output voltage | voltage | V | `inv.invOutVol` | D |
| AC output current | current | A | `inv.invOutAmp` | D |
| AC output frequency | frequency | Hz | `inv.invOutFreq` | D |
| AC input voltage | voltage | V | `inv.acInVol` | D |
| AC input current | current | A | `inv.acInAmp` | D |
| AC input frequency | frequency | Hz | `inv.acInFreq` | D |
| Inverter temperature | temperature | °C | `inv.outTemp` | D |
| DC input voltage | voltage | V | `inv.dcInVol` | D ○ |
| DC input current | current | A | `inv.dcInAmp` | D ○ |
| DC input temperature | temperature | °C | `inv.dcInTemp` | D ○ |
| Charger type | — | — | `inv.chargerType` | D |
| AC fast charge power | power | W | `inv.FastChgWatts` | D ○ |
| AC standby time | duration | min | `inv.standbyMins` | D |
| Inverter error code | — | — | `inv.errCode` | D ○ |
| AC charging mode | — | — | `inv.cfgAcWorkMode` | D |
| Solar input power | power | W | `mppt.inWatts` |  |
| Solar input voltage | voltage | V | `mppt.inVol` | D |
| Solar input current | current | A | `mppt.inAmp` | D |
| MPPT output power | power | W | `mppt.outWatts` | ○ |
| MPPT output voltage | voltage | V | `mppt.outVol` | D ○ |
| MPPT output current | current | A | `mppt.outAmp` | D ○ |
| MPPT temperature | temperature | °C | `mppt.mpptTemp` | D |
| Charging type | — | — | `mppt.chgType` | D |
| Solar charging status | — | — | `mppt.chgState` | D |
| 12 V car output power | power | W | `mppt.carOutWatts` |  |
| 12 V car output voltage | voltage | V | `mppt.carOutVol` | D ○ |
| 12 V car output current | current | A | `mppt.carOutAmp` | D ○ |
| Car charger temperature | temperature | °C | `mppt.carTemp` | D |
| DC 12 V output voltage | voltage | V | `mppt.dcdc12vVol` | D ○ |
| DC 12 V output current | current | A | `mppt.dcdc12vAmp` | D ○ |
| DC 12 V output power | power | W | `mppt.dcdc12vWatts` | ○ |
| DCDC 24 V temperature | temperature | °C | `mppt.dc24vTemp` | D ○ |
| DC max charging current | current | mA | `mppt.dcChgCurrent` | D |
| AC max charging power | power | W | `mppt.cfgChgWatts` | D |
| AC standby (MPPT) | duration | min | `mppt.acStandbyMins` | D ○ |
| Car charger standby time | duration | min | `mppt.carStandbyMin` | D |
| XT60 paddle type | — | — | `mppt.x60ChgType` | D ○ |
| Configured charging type | — | — | `mppt.cfgChgType` | D ○ |
| MPPT fault code | — | — | `mppt.faultCode` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Car charger | power | `mppt.carState` |  |
| DCDC 24 V output | power | `mppt.dc24vState` | D |
| AC output | power | `inv.cfgAcEnabled` |  |
| DC (USB) output | power | `pd.dcOutState` |  |
| UPS mode | — | `bms_emsStatus.openUpsFlag` | D |
| EMS normal | problem | `bms_emsStatus.emsIsNormalFlag` | D |
| X-Boost | — | `inv.cfgAcXboost` |  |
| Solar charging paused | problem | `mppt.chgPauseFlag` | D |
| Buzzer silent | — | `mppt.beepState` | D |
| Car output button | power | `pd.carState` |  |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| DC (USB) output | `pd.dcOutState` |  |
| Car charger | `mppt.carState` |  |
| Buzzer silent mode | `mppt.beepState` |  |
| AC always on | `pd.acAutoOutConfig` |  |
| Prioritize solar charging | `pd.pvChgPrioSet` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Device standby time | min | 0–5999 (step 1) | `pd.standbyMin` |  |
| LCD screen timeout | s | 0–300 (step 10) | `pd.lcdOffSec` |  |
| AC charging power | W | 200–1200 (step 100) | `mppt.cfgChgWatts` |  |
| AC standby time | min | 0–5999 (step 1) | `mppt.acStandbyMins` |  |
| Car charger standby time | min | 0–5999 (step 1) | `mppt.carStandbyMin` |  |
| DC max charging current | mA | 4000–10000 (step 1000) | `mppt.dcChgCurrent` |  |
| Charge upper limit | % | 50–100 (step 1) | `bms_emsStatus.maxChargeSoc` |  |
| Discharge lower limit | % | 0–30 (step 1) | `bms_emsStatus.minDsgSoc` |  |
| Smart Generator on SoC | % | 0–30 (step 1) | `bms_emsStatus.minOpenOilEb` |  |
| Smart Generator off SoC | % | 50–100 (step 1) | `bms_emsStatus.maxCloseOilEb` |  |
| Backup reserve level | % | 5–100 (step 1) | `pd.bpPowerSoc` |  |
| AC always-on minimum SoC | % | 0–100 (step 1) | `pd.minAcoutSoc` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| AC charging mode | full_power, mute | `inv.cfgAcWorkMode` | D |

---

_Entity totals: 133 — 105 sensor, 10 binary_sensor, 5 switch, 12 number, 1 select._
