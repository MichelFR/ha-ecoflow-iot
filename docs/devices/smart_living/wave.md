# EcoFlow WAVE

<p align="center"><img src="../../../custom_components/ecoflow_iot/www/devices/wave.webp" alt="EcoFlow WAVE" width="240"></p>

**Category:** Smart Living · **Auto-detected by SN prefix:** `KT2`

> Generated from `custom_components/ecoflow_iot/devices/smart_living/wave.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT) · ⚠️ = undocumented (reverse-engineered, may break).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Ambient temperature | temperature | °C | `pd.envTemp` |  |
| Air outlet temperature | temperature | °C | `pd.coolTemp` |  |
| Air outlet temperature (sensor) | temperature | °C | `pd.coolEnv` | 🔧 💤 |
| Condensation temperature | temperature | °C | `pd.condTemp` | 🔧 |
| Condensation zone return air temperature | temperature | °C | `pd.heatEnv` | 🔧 |
| Evaporation temperature | temperature | °C | `pd.evapTemp` | 🔧 |
| Evaporation zone return air temperature | temperature | °C | `pd.airInTemp` | 🔧 |
| Exhaust temperature | temperature | °C | `pd.motorOutTemp` | 🔧 |
| Set temperature (Celsius) | temperature | °C | `pd.setTempCel` | 🔧 |
| NTC temperature | temperature | °C | `pd.tempNtc` | 🔧 💤 |
| Power module max temperature | temperature | °C | `power.tempMax` | 🔧 💤 |
| AC input power | power | W | `pd.acPwrIn` |  |
| System power | power | W | `pd.sysPowerWatts` |  |
| PV input power | power | W | `pd.mpptPwr` |  |
| Battery output power | power | W | `pd.batPwrOut` |  |
| Battery power | power | W | `pd.batPower` |  |
| Power supply power | power | W | `pd.psdrPower` | 🔧 |
| PV input voltage | voltage | V | `pd.mpptVol` | 🔧 |
| PV input current | current | A | `pd.mpptCur` | 🔧 |
| DC input mode | enum | — | `pd.mpptWork` |  |
| AC input voltage | voltage | V | `power.acVoltRms` | 🔧 |
| AC input current | current | A | `power.acCurrRms` | 🔧 |
| AC input frequency | frequency | Hz | `pd.acFreq` | 🔧 |
| Battery | battery | % | `bms.bmsSoc` |  |
| Battery (PD) | battery | % | `pd.batSoc` | 💤 |
| Battery voltage | voltage | V | `pd.batVolt` | 🔧 |
| BMS voltage | voltage | V | `bms.bmsVol` | 🔧 💤 |
| BMS current | current | A | `bms.bmsCur` | 🔧 |
| Battery current | current | A | `pd.batCurr` | 🔧 |
| Battery state | enum | — | `bms.bmsChgDsgSts` |  |
| Discharge limit | — | % | `bms.bmsMinDsgSoc` | 🔧 |
| Charge limit | — | % | `bms.bmsMaxChgSoc` | 🔧 |
| Battery remaining capacity | — | mAh | `bms.remainCap` | 🔧 💤 |
| Battery time to full | duration | min | `pd.batChgRemain` | 🔧 |
| Battery time to empty | duration | min | `pd.batDsgRemain` | 🔧 |
| Timer remaining | duration | min | `pd.timeRemain` |  |
| Water level | — | — | `pd.waterValue` |  |
| Fan level | — | — | `pd.fanSts` |  |
| Compressor speed | — | REVOLUTIONS_PER_MINUTE | `motor.compressorRpm` | 🔧 💤 |
| Condenser fan speed | — | REVOLUTIONS_PER_MINUTE | `motor.condeFanRpm` | 🔧 💤 |
| Evaporator fan speed | — | REVOLUTIONS_PER_MINUTE | `motor.evapFanRpm` | 🔧 💤 |
| Solar energy | energy | Wh | _integrated_ |  |
| Energy consumption | energy | Wh | _integrated_ |  |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Cool/Heat mode available | running | `pd.refEn` |  |
| Battery hardware present | connectivity | `bms.bmsHwFlag` | 🔧 |
| Battery software present | connectivity | `bms.bmsSwFlag` | 🔧 💤 |
| Battery undervoltage | problem | `pd.bmsUnderVoltage` | 🔧 |
| High pressure protection | safety | `motor.hpProtFlg` | 🔧 |
| Energy-saving shutdown | — | `motor.ecoStopFlag` | 🔧 |
| Powered by AC | power | `pd.powerSrc` |  |
| Powered by solar/car input | power | `pd.powerSrc` |  |
| Powered by main battery | power | `pd.powerSrc` |  |
| Powered by extra battery | power | `pd.powerSrc` | 💤 |

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
| Temperature unit | celsius, fahrenheit | `pd.tempSys` |  |

---

_Entity totals: 66 — 43 sensor, 10 binary_sensor, 3 switch, 3 number, 7 select, 0 light, 0 button._
