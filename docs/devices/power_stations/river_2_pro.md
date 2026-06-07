# EcoFlow River 2 Pro

**Category:** Power Stations · **Auto-detected by SN prefix:** `R621`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/river_2_pro.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `pd.soc` |  |
| Time to full | duration | min | `bms_bmsStatus.remainTime` | D |
| Time to empty | duration | min | `bms_emsStatus.dsgRemainTime` | D |
| Total output power | power | W | `pd.wattsOutSum` |  |
| DC output power | power | W | `pd.carWatts` |  |
| USB-A output power | power | W | `pd.usb1Watts` | D ○ |
| USB-C input power | power | W | `pd.typecChaWatts` | D ○ |
| USB-C output power | power | W | `pd.typec1Watts` | D ○ |
| AC input power | power | W | `inv.inputWatts` |  |
| AC output power | power | W | `inv.outputWatts` |  |
| Solar input power | power | W | `mppt.inWatts` |  |
| AC output voltage | voltage | V | `mppt.cfgAcOutVol` | D ○ |
| Charge limit (reported) | — | % | `bms_emsStatus.maxChargeSoc` | D ○ |
| Discharge limit (reported) | — | % | `bms_emsStatus.minDsgSoc` | D ○ |
| Backup reserve (reported) | — | % | `pd.bpPowerSoc` | D ○ |
| AC output frequency (raw) | frequency | Hz | `mppt.cfgAcOutFreq` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| 12V DC output | power | `pd.carState` |  |
| Energy management | running | `pd.watchIsConfig` | D |
| AC output enabled | power | `mppt.cfgAcEnabled` |  |
| X-Boost | — | `mppt.cfgAcXboost` | D |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| AC output | `mppt.cfgAcEnabled` |  |
| X-Boost | `mppt.cfgAcXboost` |  |
| 12V DC output | `pd.carState` |  |
| Energy management | `pd.watchIsConfig` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge limit | % | 50–100 (step 1) | `bms_emsStatus.maxChargeSoc` |  |
| Discharge limit | % | 0–30 (step 1) | `bms_emsStatus.minDsgSoc` |  |
| Backup reserve | % | 0–100 (step 1) | `pd.bpPowerSoc` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| AC output frequency | 50 Hz, 60 Hz | _derived_ |  |

---

_Entity totals: 28 — 16 sensor, 4 binary_sensor, 4 switch, 3 number, 1 select._
