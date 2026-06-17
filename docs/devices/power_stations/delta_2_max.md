# EcoFlow Delta 2 Max

**Category:** Power Stations · **Auto-detected by SN prefix:** `R351`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_2_max.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `pd.soc` |  |
| Total input power | power | W | `pd.wattsInSum` |  |
| Total output power | power | W | `pd.wattsOutSum` |  |
| Remaining time | duration | min | `pd.remainTime` | 🔧 |
| USB 1 power | power | W | `pd.usb1Watts` |  |
| USB 2 power | power | W | `pd.usb2Watts` |  |
| QC USB 1 power | power | W | `pd.qcUsb1Watts` | 💤 |
| QC USB 2 power | power | W | `pd.qcUsb2Watts` | 💤 |
| USB-C 1 power | power | W | `pd.typec1Watts` |  |
| USB-C 2 power | power | W | `pd.typec2Watts` |  |
| USB-C 1 temperature | temperature | °C | `pd.typec1Temp` | 🔧 💤 |
| USB-C 2 temperature | temperature | °C | `pd.typec2Temp` | 🔧 💤 |
| Car output power | power | W | `pd.carWatts` |  |
| Car port temperature | temperature | °C | `pd.carTemp` | 🔧 💤 |
| Wireless charging power | power | W | `pd.wireWatts` | 💤 |
| PV1 power | power | W | `pd.pv1ChargeWatts` |  |
| PV2 power | power | W | `pd.pv2ChargeWatts` |  |
| Inverter output power | power | W | `pd.invOutWatts` | 💤 |
| Inverter input power | power | W | `pd.invInWatts` | 💤 |
| XT150 port 1 power | power | W | `pd.XT150Watts1` | 💤 |
| XT150 port 2 power | power | W | `pd.XT150Watts2` | 💤 |
| Total AC charged | energy | Wh | `pd.chgPowerAC` |  |
| Total DC charged | energy | Wh | `pd.chgPowerDC` |  |
| Total solar charged | energy | Wh | `pd.chgSunPower` |  |
| Total AC discharged | energy | Wh | `pd.dsgPowerAC` |  |
| Total DC discharged | energy | Wh | `pd.dsgPowerDC` |  |
| PD standby time | duration | min | `pd.standbyMin` | 🔧 💤 |
| Backup reserve | — | % | `pd.bpPowerSoc` | 🔧 |
| Wi-Fi signal | signal_strength | dBm | `pd.wifiRssi` | 🔧 💤 |
| AC charging power | power | W | `inv.inputWatts` |  |
| AC discharge power | power | W | `inv.outputWatts` |  |
| Inverter output voltage | voltage | V | `inv.invOutVol` | 🔧 |
| Inverter output current | current | A | `inv.invOutAmp` | 🔧 |
| Inverter output frequency | frequency | Hz | `inv.invOutFreq` | 🔧 |
| AC input voltage | voltage | V | `inv.acInVol` | 🔧 |
| AC input current | current | A | `inv.acInAmp` | 🔧 |
| AC input frequency | frequency | Hz | `inv.acInFreq` | 🔧 |
| Inverter temperature | temperature | °C | `inv.outTemp` | 🔧 |
| DC input voltage | voltage | V | `inv.dcInVol` | 🔧 |
| DC input current | current | A | `inv.dcInAmp` | 🔧 |
| DC input temperature | temperature | °C | `inv.dcInTemp` | 🔧 💤 |
| AC fast charging limit | power | W | `inv.FastChgWatts` | 🔧 |
| AC slow charging limit | power | W | `inv.SlowChgWatts` | 🔧 |
| AC standby time | duration | min | `inv.standbyMin` | 🔧 💤 |
| PV1 input power | power | W | `mppt.inWatts` |  |
| PV1 input voltage | voltage | V | `mppt.inVol` | 🔧 💤 |
| PV1 input current | current | A | `mppt.inAmp` | 🔧 💤 |
| PV1 MPPT temperature | temperature | °C | `mppt.mpptTemp` | 🔧 💤 |
| PV2 input power | power | W | `mppt.pv2InWatts` |  |
| PV2 input voltage | voltage | V | `mppt.pv2InVol` | 🔧 💤 |
| PV2 input current | current | A | `mppt.pv2InAmp` | 🔧 💤 |
| PV2 MPPT temperature | temperature | °C | `mppt.pv2MpptTemp` | 🔧 💤 |
| Car output power | power | W | `mppt.carOutWatts` |  |
| Car output voltage | voltage | V | `mppt.carOutVol` | 🔧 💤 |
| Car output current | current | A | `mppt.carOutAmp` | 🔧 💤 |
| Car port temperature | temperature | °C | `mppt.carTemp` | 🔧 💤 |
| Car standby time | duration | min | `mppt.carStandbyMin` | 🔧 💤 |
| DC24V temperature | temperature | °C | `mppt.dc24vTemp` | 🔧 💤 |
| DC charging current limit | current | A | `mppt.dcChgCurrent` | 🔧 |
| PV2 DC charging current limit | current | A | `mppt.pv2DcChgCurrent` | 🔧 💤 |
| Battery SOC (BMS) | battery | % | `bms_bmsStatus.soc` | 💤 |
| Battery voltage | voltage | V | `bms_bmsStatus.vol` | 🔧 💤 |
| Battery current | current | A | `bms_bmsStatus.amp` | 🔧 💤 |
| Battery temperature | temperature | °C | `bms_bmsStatus.temp` | 🔧 |
| Battery health | — | % | `bms_bmsStatus.soh` | 🔧 |
| Battery design capacity | energy_storage | mAh | `bms_bmsStatus.designCap` | 🔧 💤 |
| Battery remaining capacity | — | mAh | `bms_bmsStatus.remainCap` | 🔧 💤 |
| Battery full capacity | — | mAh | `bms_bmsStatus.fullCap` | 🔧 💤 |
| Battery input power | power | W | `bms_bmsStatus.inputWatts` | 💤 |
| Battery output power | power | W | `bms_bmsStatus.outputWatts` | 💤 |
| Max cell voltage | voltage | MILLIVOLT | `bms_bmsStatus.maxCellVol` | 🔧 💤 |
| Min cell voltage | voltage | MILLIVOLT | `bms_bmsStatus.minCellVol` | 🔧 💤 |
| Max cell temperature | temperature | °C | `bms_bmsStatus.maxCellTemp` | 🔧 💤 |
| Min cell temperature | temperature | °C | `bms_bmsStatus.minCellTemp` | 🔧 💤 |
| Battery remaining time | duration | min | `bms_bmsStatus.remainTime` | 🔧 💤 |
| EMS charging voltage | voltage | V | `bms_emsStatus.chgVol` | 🔧 💤 |
| EMS charging current | current | A | `bms_emsStatus.chgAmp` | 🔧 💤 |
| Charge limit | — | % | `bms_emsStatus.maxChargeSoc` | 🔧 |
| Discharge limit | — | % | `bms_emsStatus.minDsgSoc` | 🔧 |
| Time to full | duration | min | `bms_emsStatus.chgRemainTime` | 🔧 |
| Time to empty | duration | min | `bms_emsStatus.dsgRemainTime` | 🔧 |
| Generator on SOC | — | % | `bms_emsStatus.minOpenOilEb` | 🔧 💤 |
| Generator off SOC | — | % | `bms_emsStatus.maxCloseOilEb` | 🔧 💤 |
| LCD displayed SOC | — | % | `bms_emsStatus.lcdShowSoc` | 🔧 💤 |
| Solar energy | energy | Wh | _integrated_ |  |
| Battery charge energy | energy | Wh | _integrated_ |  |
| Battery discharge energy | energy | Wh | _integrated_ |  |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| AC output enabled | power | `inv.cfgAcEnabled` |  |
| X-Boost enabled | — | `inv.cfgAcXboost` | 🔧 |
| Car charger enabled | power | `mppt.carState` |  |
| DC24V output enabled | power | `mppt.dc24vState` | 🔧 💤 |
| DC (USB) output enabled | power | `pd.dcOutState` |  |
| UPS mode | — | `bms_emsStatus.openUpsFlag` | 🔧 |
| AC charging paused | — | `inv.chgPauseFlag` | 🔧 |
| PV1 charging paused | — | `mppt.chgPauseFlag` | 🔧 💤 |
| PV2 charging paused | — | `mppt.pv2ChgPauseFlag` | 🔧 💤 |

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

_Entity totals: 112 — 87 sensor, 9 binary_sensor, 6 switch, 10 number, 0 select._
