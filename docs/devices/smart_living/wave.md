# EcoFlow WAVE

**Category:** Smart Living · **Auto-detected by SN prefix:** `KT21ZCH2`

> Generated from `custom_components/ecoflow_iot/devices/smart_living/wave.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Ambient temperature | temperature | °C | `pd.envTemp` |  |
| Air outlet temperature | temperature | °C | `pd.coolTemp` |  |
| Condensation temperature | temperature | °C | `pd.condTemp` | D |
| Condensation zone return air temperature | temperature | °C | `pd.heatEnv` | D |
| Evaporation temperature | temperature | °C | `pd.evapTemp` | D |
| Evaporation zone return air temperature | temperature | °C | `pd.airInTemp` | D |
| Exhaust temperature | temperature | °C | `pd.motorOutTemp` | D |
| Set temperature (Celsius) | temperature | °C | `pd.setTempCel` | D |
| NTC temperature | temperature | °C | `pd.tempNtc` | D ○ |
| AC input power | power | W | `pd.acPwrIn` |  |
| System power | power | W | `pd.sysPowerWatts` |  |
| PV input power | power | W | `pd.mpptPwr` |  |
| Battery output power | power | W | `pd.batPwrOut` |  |
| AC input voltage | voltage | V | `power.acVoltRms` | D |
| AC input current | current | A | `power.acCurrRms` | D |
| AC input frequency | frequency | Hz | `pd.acFreq` | D |
| Battery | battery | % | `bms.bmsSoc` |  |
| Battery (PD) | battery | % | `pd.batSoc` | ○ |
| Battery voltage | voltage | V | `pd.batVolt` | D |
| BMS voltage | voltage | V | `bms.bmsVol` | D ○ |
| BMS current | current | A | `bms.bmsCur` | D |
| Battery time to full | duration | min | `pd.batChgRemain` | D |
| Battery time to empty | duration | min | `pd.batDsgRemain` | D |
| Timer remaining | duration | min | `pd.timeRemain` |  |
| Water level | — | — | `pd.waterValue` |  |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Cool/Heat mode available | running | `pd.refEn` |  |
| Battery hardware present | connectivity | `bms.bmsHwFlag` | D |
| Battery software present | connectivity | `bms.bmsSwFlag` | D ○ |
| Battery undervoltage | problem | `pd.bmsUnderVoltage` | D |
| High pressure protection | safety | `motor.hpProtFlg` | D |
| Energy-saving shutdown | power_save | `motor.ecoStopFlag` | D |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| Power | `pd.powerMode` |  |
| Buzzer | `pd.beepEn` |  |
| Timer | `pd.timeEn` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Set temperature | °C | 16–30 (step 1) | `pd.setTemp` |  |
| Timer duration | min | 0–65535 (step 1) | `pd.timeSet` |  |
| Screen timeout | s | 0–3600 (step 1) | `pd.idleTime` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| Mode | cool, heat, fan | `pd.mainMode` |  |
| Sub-mode | max, sleep, eco, manual | `pd.pdSubMode` |  |
| Fan speed | low, medium, high | `pd.fanValue` |  |
| Light strip | follow_screen, always_on, always_off | `pd.rgbState` |  |
| Automatic drainage | manual_on, no_drain_on, manual_off, no_drain_off | `pd.wteFthEn` |  |
| Temperature display | ambient, outlet | `pd.tempDisplay` |  |

---

_Entity totals: 43 — 25 sensor, 6 binary_sensor, 3 switch, 3 number, 6 select._
