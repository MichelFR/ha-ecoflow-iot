# EcoFlow Delta 2 Max

**Category:** Power Stations · **Auto-detected by SN prefix:** `R351`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_2_max.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `pd.soc` |  |
| Total input power | power | W | `pd.wattsInSum` |  |
| Total output power | power | W | `pd.wattsOutSum` |  |
| Remaining time | duration | min | `pd.remainTime` | D |
| USB 1 power | power | W | `pd.usb1Watts` |  |
| USB 2 power | power | W | `pd.usb2Watts` |  |
| QC USB 1 power | power | W | `pd.qcUsb1Watts` | ○ |
| QC USB 2 power | power | W | `pd.qcUsb2Watts` | ○ |
| USB-C 1 power | power | W | `pd.typec1Watts` |  |
| USB-C 2 power | power | W | `pd.typec2Watts` |  |
| USB-C 1 temperature | temperature | °C | `pd.typec1Temp` | D ○ |
| USB-C 2 temperature | temperature | °C | `pd.typec2Temp` | D ○ |
| Car output power | power | W | `pd.carWatts` |  |
| Car port temperature | temperature | °C | `pd.carTemp` | D ○ |
| Wireless charging power | power | W | `pd.wireWatts` | ○ |
| PV1 power | power | W | `pd.pv1ChargeWatts` |  |
| PV2 power | power | W | `pd.pv2ChargeWatts` |  |
| Inverter output power | power | W | `pd.invOutWatts` | ○ |
| Inverter input power | power | W | `pd.invInWatts` | ○ |
| XT150 port 1 power | power | W | `pd.XT150Watts1` | ○ |
| XT150 port 2 power | power | W | `pd.XT150Watts2` | ○ |
| Total AC charged | energy | Wh | `pd.chgPowerAC` |  |
| Total DC charged | energy | Wh | `pd.chgPowerDC` |  |
| Total solar charged | energy | Wh | `pd.chgSunPower` |  |
| Total AC discharged | energy | Wh | `pd.dsgPowerAC` |  |
| Total DC discharged | energy | Wh | `pd.dsgPowerDC` |  |
| PD standby time | duration | min | `pd.standbyMin` | D ○ |
| Backup reserve | — | % | `pd.bpPowerSoc` | D |
| Wi-Fi signal | signal_strength | dBm | `pd.wifiRssi` | D ○ |
| AC charging power | power | W | `inv.inputWatts` |  |
| AC discharge power | power | W | `inv.outputWatts` |  |
| Inverter output voltage | voltage | V | `inv.invOutVol` | D |
| Inverter output current | current | A | `inv.invOutAmp` | D |
| Inverter output frequency | frequency | Hz | `inv.invOutFreq` | D |
| AC input voltage | voltage | V | `inv.acInVol` | D |
| AC input current | current | A | `inv.acInAmp` | D |
| AC input frequency | frequency | Hz | `inv.acInFreq` | D |
| Inverter temperature | temperature | °C | `inv.outTemp` | D |
| DC input voltage | voltage | V | `inv.dcInVol` | D |
| DC input current | current | A | `inv.dcInAmp` | D |
| DC input temperature | temperature | °C | `inv.dcInTemp` | D ○ |
| AC fast charging limit | power | W | `inv.FastChgWatts` | D |
| AC slow charging limit | power | W | `inv.SlowChgWatts` | D |
| AC standby time | duration | min | `inv.standbyMin` | D ○ |
| PV1 input power | power | W | `mppt.inWatts` |  |
| PV1 input voltage | voltage | V | `mppt.inVol` | D ○ |
| PV1 input current | current | A | `mppt.inAmp` | D ○ |
| PV1 MPPT temperature | temperature | °C | `mppt.mpptTemp` | D ○ |
| PV2 input power | power | W | `mppt.pv2InWatts` |  |
| PV2 input voltage | voltage | V | `mppt.pv2InVol` | D ○ |
| PV2 input current | current | A | `mppt.pv2InAmp` | D ○ |
| PV2 MPPT temperature | temperature | °C | `mppt.pv2MpptTemp` | D ○ |
| Car output power | power | W | `mppt.carOutWatts` |  |
| Car output voltage | voltage | V | `mppt.carOutVol` | D ○ |
| Car output current | current | A | `mppt.carOutAmp` | D ○ |
| Car port temperature | temperature | °C | `mppt.carTemp` | D ○ |
| Car standby time | duration | min | `mppt.carStandbyMin` | D ○ |
| DC24V temperature | temperature | °C | `mppt.dc24vTemp` | D ○ |
| DC charging current limit | current | A | `mppt.dcChgCurrent` | D |
| PV2 DC charging current limit | current | A | `mppt.pv2DcChgCurrent` | D ○ |
| Battery SOC (BMS) | battery | % | `bms_bmsStatus.soc` | ○ |
| Battery voltage | voltage | V | `bms_bmsStatus.vol` | D ○ |
| Battery current | current | A | `bms_bmsStatus.amp` | D ○ |
| Battery temperature | temperature | °C | `bms_bmsStatus.temp` | D |
| Battery health | — | % | `bms_bmsStatus.soh` | D |
| Battery design capacity | energy_storage | mAh | `bms_bmsStatus.designCap` | D ○ |
| Battery remaining capacity | — | mAh | `bms_bmsStatus.remainCap` | D ○ |
| Battery full capacity | — | mAh | `bms_bmsStatus.fullCap` | D ○ |
| Battery input power | power | W | `bms_bmsStatus.inputWatts` | ○ |
| Battery output power | power | W | `bms_bmsStatus.outputWatts` | ○ |
| Max cell voltage | voltage | MILLIVOLT | `bms_bmsStatus.maxCellVol` | D ○ |
| Min cell voltage | voltage | MILLIVOLT | `bms_bmsStatus.minCellVol` | D ○ |
| Max cell temperature | temperature | °C | `bms_bmsStatus.maxCellTemp` | D ○ |
| Min cell temperature | temperature | °C | `bms_bmsStatus.minCellTemp` | D ○ |
| Battery remaining time | duration | min | `bms_bmsStatus.remainTime` | D ○ |
| EMS charging voltage | voltage | V | `bms_emsStatus.chgVol` | D ○ |
| EMS charging current | current | A | `bms_emsStatus.chgAmp` | D ○ |
| Charge limit | — | % | `bms_emsStatus.maxChargeSoc` | D |
| Discharge limit | — | % | `bms_emsStatus.minDsgSoc` | D |
| Time to full | duration | min | `bms_emsStatus.chgRemainTime` | D |
| Time to empty | duration | min | `bms_emsStatus.dsgRemainTime` | D |
| Generator on SOC | — | % | `bms_emsStatus.minOpenOilEb` | D ○ |
| Generator off SOC | — | % | `bms_emsStatus.maxCloseOilEb` | D ○ |
| LCD displayed SOC | — | % | `bms_emsStatus.lcdShowSoc` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| AC output enabled | power | `inv.cfgAcEnabled` |  |
| X-Boost enabled | — | `inv.cfgAcXboost` | D |
| Car charger enabled | power | `mppt.carState` |  |
| DC24V output enabled | power | `mppt.dc24vState` | D ○ |
| DC (USB) output enabled | power | `pd.dcOutState` |  |
| UPS mode | — | `bms_emsStatus.openUpsFlag` | D |
| AC charging paused | — | `inv.chgPauseFlag` | D |
| PV1 charging paused | — | `mppt.chgPauseFlag` | D ○ |
| PV2 charging paused | — | `mppt.pv2ChgPauseFlag` | D ○ |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| AC output | `inv.cfgAcEnabled` |  |
| X-Boost | `inv.cfgAcXboost` |  |
| DC (USB) output | `pd.dcOutState` |  |
| Car charger | `mppt.carState` |  |
| Silent mode | `pd.beepMode` |  |
| AC always on | `pd.newAcAutoOnCfg` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge limit | % | 50–100 (step 1) | `bms_emsStatus.maxChargeSoc` |  |
| Discharge limit | % | 0–30 (step 1) | `bms_emsStatus.minDsgSoc` |  |
| Backup reserve level | % | 0–100 (step 1) | `pd.bpPowerSoc` |  |
| PD standby time | min | 0–5999 (step 1) | `pd.standbyMin` |  |
| AC standby time | min | 0–5999 (step 1) | `inv.standbyMin` |  |
| Car standby time | min | 0–5999 (step 1) | `mppt.carStandbyMin` |  |
| AC fast charging power | W | 100–2400 (step 100) | `inv.FastChgWatts` |  |
| AC slow charging power | W | 100–700 (step 100) | `inv.SlowChgWatts` |  |
| Generator on SOC | % | 0–30 (step 1) | `bms_emsStatus.minOpenOilEb` |  |
| Generator off SOC | % | 50–100 (step 1) | `bms_emsStatus.maxCloseOilEb` |  |

---

_Entity totals: 109 — 84 sensor, 9 binary_sensor, 6 switch, 10 number, 0 select._
