# EcoFlow Delta Pro

**Category:** Power Stations · **Auto-detected by SN prefix:** `DCABZ`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_pro.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `bmsMaster.soc` |  |
| Battery temperature | temperature | °C | `bmsMaster.temp` |  |
| Battery input power | power | W | `bmsMaster.inputWatts` |  |
| Battery output power | power | W | `bmsMaster.outputWatts` |  |
| Battery voltage | voltage | V | `bmsMaster.vol` | D ○ |
| Battery current | current | A | `bmsMaster.amp` | D ○ |
| Battery health | — | % | `bmsMaster.soh` | D |
| Battery design capacity | energy_storage | — | `bmsMaster.designCap` | D ○ |
| Battery remaining capacity | energy_storage | — | `bmsMaster.remainCap` | D ○ |
| Battery full capacity | energy_storage | — | `bmsMaster.fullCap` | D ○ |
| Battery time remaining | duration | min | `bmsMaster.remainTime` | D |
| Battery max cell voltage | voltage | MILLIVOLT | `bmsMaster.maxCellVol` | D ○ |
| Battery min cell voltage | voltage | MILLIVOLT | `bmsMaster.minCellVol` | D ○ |
| Battery max cell temperature | temperature | °C | `bmsMaster.maxCellTemp` | D ○ |
| Battery min cell temperature | temperature | °C | `bmsMaster.minCellTemp` | D ○ |
| Battery target charge current | current | mA | `bmsMaster.tagChgAmp` | D ○ |
| Battery SOC (precise) | battery | % | `bmsMaster.f32ShowSoc` | D ○ |
| AC charging power | power | W | `inv.inputWatts` |  |
| AC output power | power | W | `inv.outputWatts` |  |
| AC output voltage | voltage | V | `inv.invOutVol` | D |
| AC output current | current | A | `inv.invOutAmp` | D |
| AC output frequency | frequency | Hz | `inv.invOutFreq` | D |
| AC input voltage | voltage | V | `inv.acInVol` | D |
| AC input current | current | A | `inv.acInAmp` | D |
| AC input frequency | frequency | Hz | `inv.acInFreq` | D |
| Inverter temperature | temperature | °C | `inv.outTemp` | D |
| DC adapter input voltage | voltage | V | `inv.dcInVol` | D ○ |
| DC adapter input current | current | A | `inv.dcInAmp` | D ○ |
| DC adapter temperature | temperature | °C | `inv.dcInTemp` | D ○ |
| AC standby time | duration | min | `inv.cfgStandbyMin` | D ○ |
| AC slow charge power | power | W | `inv.cfgSlowChgWatts` | D ○ |
| AC fast charge power | power | W | `inv.cfgFastChgWatts` | D ○ |
| Solar input power | power | W | `mppt.inWatts` |  |
| Solar input voltage | voltage | V | `mppt.inVol` | D |
| Solar input current | current | A | `mppt.inAmp` | D |
| MPPT output power | power | W | `mppt.outWatts` | D ○ |
| MPPT temperature | temperature | °C | `mppt.mpptTemp` | D |
| DC 12V output power | power | W | `mppt.dcdc12vWatts` |  |
| DC 12V output voltage | voltage | V | `mppt.dcdc12vVol` | D ○ |
| DC 12V output current | current | A | `mppt.dcdc12vAmp` | D ○ |
| Car charger output power | power | W | `mppt.carOutWatts` |  |
| Car charger temperature | temperature | °C | `mppt.carTemp` | D |
| DC 24V temperature | temperature | °C | `mppt.dc24vTemp` | D ○ |
| Car input current limit | current | mA | `mppt.cfgDcChgCurrent` | D ○ |
| Display SOC | battery | % | `pd.soc` | D ○ |
| Total output power | power | W | `pd.wattsOutSum` |  |
| Total input power | power | W | `pd.wattsInSum` |  |
| Time remaining | duration | min | `pd.remainTime` |  |
| USB 1 output power | power | W | `pd.usb1Watts` |  |
| USB 2 output power | power | W | `pd.usb2Watts` |  |
| USB QC1 output power | power | W | `pd.qcUsb1Watts` |  |
| USB QC2 output power | power | W | `pd.qcUsb2Watts` |  |
| USB-C 1 output power | power | W | `pd.typec1Watts` |  |
| USB-C 2 output power | power | W | `pd.typec2Watts` |  |
| USB-C 1 temperature | temperature | °C | `pd.typec1Temp` | D ○ |
| USB-C 2 temperature | temperature | °C | `pd.typec2Temp` | D ○ |
| CAR output power | power | W | `pd.carWatts` |  |
| CAR temperature | temperature | °C | `pd.carTemp` | D ○ |
| Total DC charged | energy | Wh | `pd.chgPowerDc` |  |
| Total solar charged | energy | Wh | `pd.chgSunPower` |  |
| Total AC charged | energy | Wh | `pd.chgPowerAc` |  |
| Total DC discharged | energy | Wh | `pd.dsgPowerDc` |  |
| Total AC discharged | energy | Wh | `pd.dsgPowerAc` |  |
| Wi-Fi signal | signal_strength | dBm | `pd.wifiRssi` | D ○ |
| Screen timeout | duration | s | `pd.lcdOffSec` | D ○ |
| Device standby time | duration | min | `pd.standByMode` | D ○ |
| Time to full | duration | min | `ems.chgRemainTime` | D |
| Time to empty | duration | min | `ems.dsgRemainTime` | D |
| Charge upper limit | — | % | `ems.maxChargeSoc` | D ○ |
| Discharge lower limit | — | % | `ems.minDsgSoc` | D ○ |
| Generator auto-on threshold | — | % | `ems.minOpenOilEbSoc` | D ○ |
| Generator auto-off threshold | — | % | `ems.maxCloseOilEbSoc` | D ○ |
| EMS LCD SOC | battery | % | `ems.lcdShowSoc` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| AC output enabled | power | `inv.cfgAcEnabled` |  |
| X-Boost enabled | — | `inv.cfgAcXboost` | D |
| Car charger enabled | power | `mppt.carState` |  |
| DC 24V output enabled | power | `mppt.dc24vState` |  |
| DC output enabled | power | `pd.dcOutState` |  |
| UPS mode enabled | — | `ems.openUpsFlag` | D |
| AC charging paused | — | `inv.chgPauseFlag` | D ○ |
| PV charging paused | — | `mppt.chgPauseFlag` | D ○ |
| Bypass AC auto start | — | `inv.acPassbyAutoEn` | D |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| AC output | `inv.cfgAcEnabled` |  |
| X-Boost | `inv.cfgAcXboost` |  |
| Car charger | `mppt.carState` |  |
| Beep | `pd.beepState` |  |
| Bypass AC auto start | `inv.acPassbyAutoEn` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge limit | % | 50–100 (step 1) | `ems.maxChargeSoc` |  |
| Discharge limit | % | 0–30 (step 1) | `ems.minDsgSoc` |  |
| Car input current | mA | 0–8000 (step 1000) | `mppt.cfgDcChgCurrent` |  |
| Device standby time | min | 0–5999 (step 1) | `pd.standByMode` |  |
| AC standby time | min | 0–5999 (step 1) | `inv.cfgStandbyMin` |  |
| Screen brightness | — | 0–100 (step 1) | `pd.lcdBrightness` |  |
| AC slow charge power | W | 100–1400 (step 100) | `inv.cfgSlowChgWatts` |  |
| Generator auto-on threshold | % | 0–100 (step 1) | `ems.minOpenOilEbSoc` |  |
| Generator auto-off threshold | % | 0–100 (step 1) | `ems.maxCloseOilEbSoc` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| PV charging type | auto, mppt, adapter | _derived_ |  |
| AC charging mode | full_power, mute | _derived_ |  |

---

_Entity totals: 98 — 73 sensor, 9 binary_sensor, 5 switch, 9 number, 2 select._
