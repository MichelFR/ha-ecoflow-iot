# EcoFlow PowerStream

**Category:** Solar Systems · **Auto-detected by SN prefix:** `HW51`

> Generated from `custom_components/ecoflow_iot/devices/solar_systems/power_stream.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `20_1.batSoc` |  |
| Battery voltage | voltage | V | `20_1.batInputVolt` | D |
| Battery current | current | A | `20_1.batInputCur` | D |
| Battery power | power | W | `20_1.batInputWatts` |  |
| Battery temperature | temperature | °C | `20_1.batTemp` | D |
| Time to full | duration | min | `20_1.chgRemainTime` | D |
| Time to empty | duration | min | `20_1.dsgRemainTime` | D |
| Solar string 1 power | power | W | `20_1.pv1InputWatts` |  |
| Solar string 1 voltage | voltage | V | `20_1.pv1InputVolt` | D ○ |
| Solar string 1 current | current | A | `20_1.pv1InputCur` | D ○ |
| Solar string 1 temperature | temperature | °C | `20_1.pv1Temp` | D ○ |
| Solar string 2 power | power | W | `20_1.pv2InputWatts` |  |
| Solar string 2 voltage | voltage | V | `20_1.pv2InputVolt` | D ○ |
| Solar string 2 current | current | A | `20_1.pv2InputCur` | D ○ |
| Solar string 2 temperature | temperature | °C | `20_1.pv2Temp` | D ○ |
| Inverter output power | power | W | `20_1.invOutputWatts` |  |
| Inverter output current | current | A | `20_1.invOutputCur` | D ○ |
| Inverter frequency | frequency | Hz | `20_1.invFreq` | D |
| Inverter temperature | temperature | °C | `20_1.invTemp` | D |
| Custom load power setpoint | power | W | `20_1.permanentWatts` | D |
| Dynamic load power | power | W | `20_1.dynamicWatts` | D ○ |
| INV power after derating | power | W | `20_1.floadLimitOut` | D ○ |
| PV power after derating | power | W | `20_1.invOutputLoadLimit` | D ○ |
| BAT power after derating | power | W | `20_1.batOutputLoadLimit` | D ○ |
| Limited AC output (low PV) | power | W | `20_1.pvPowerLimitAcPower` | D ○ |
| LLC input voltage | voltage | V | `20_1.llcInputVolt` | D ○ |
| LLC temperature | temperature | °C | `20_1.llcTemp` | D ○ |
| Wi-Fi signal | signal_strength | dBm | `20_1.wifiRssi` | D ○ |
| Rated power | power | W | `20_1.ratedPower` | D ○ |
| LED brightness | — | — | `20_1.invBrightness` | D ○ |
| Restart count | — | — | `20_1.resetCount` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Solar string 1 active | running | `20_1.pv1CtrlMpptOffFlag` | D |
| Solar string 2 active | running | `20_1.pv2CtrlMpptOffFlag` | D |
| Battery active | running | `20_1.batOffFlag` | D |
| Inverter on | running | `20_1.invOnOff` | D |
| Anti-backflow active | — | `20_1.antiBackFlowFlag` | D ○ |
| INV module derated | — | `20_1.uwloadLimitFlag` | D ○ |
| PV module derated | — | `20_1.invLoadLimitFlag` | D ○ |
| BAT module derated | — | `20_1.batLoadLimitFlag` | D ○ |
| Feed-in protection | — | `20_1.feedProtect` | D |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Custom load power | W | 0–600 (step 1) | `20_1.permanentWatts` |  |
| Discharge limit | % | 1–30 (step 1) | `20_1.lowerLimit` |  |
| Charge limit | % | 70–100 (step 1) | `20_1.upperLimit` |  |
| LED brightness | — | 0–1023 (step 1) | `20_1.invBrightness` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| Power supply priority | 0, 1 | `20_1.supplyPriority` |  |

---

_Entity totals: 45 — 31 sensor, 9 binary_sensor, 0 switch, 4 number, 1 select._
