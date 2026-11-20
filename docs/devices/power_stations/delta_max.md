# EcoFlow DELTA Max

**Category:** Power Stations · **Auto-detected by SN prefix:** `DACB`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_max.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT) · ⚠️ = undocumented (reverse-engineered, may break).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `bmsMaster.soc` |  |
| Battery input power | power | W | `bmsMaster.inputWatts` |  |
| Battery output power | power | W | `bmsMaster.outputWatts` |  |
| Battery max cell temperature | temperature | °C | `bmsMaster.cellTemp` |  |
| Battery min cell temperature | temperature | °C | `bmsMaster.cellTemp` | 🔧 💤 |
| Charge state | enum | — | `ems.chgState` |  |
| Charge time remaining | duration | min | `ems.chgRemainTime` |  |
| Charge limit | — | % | `ems.maxChargeSoc` | 🔧 |
| Discharge limit | — | % | `ems.minDsgSoc` | 🔧 |
| AC input power | power | W | `inv.inputWatts` |  |
| AC output power | power | W | `inv.outputWatts` |  |
| AC fast charging power | power | W | `inv.cfgFastChgWatts` | 🔧 |
| AC slow charging power | power | W | `inv.cfgSlowChgWatts` | 🔧 |
| Time remaining | duration | min | `pd.remainTime` |  |
| USB-C 1 output power | power | W | `pd.typec1Watts` |  |
| USB-C 2 output power | power | W | `pd.typec2Watts` |  |
| USB-A 1 output power | power | W | `pd.usb1Watts` |  |
| USB-A 2 output power | power | W | `pd.usb2Watts` |  |
| USB-A fast charge 1 output power | power | W | `pd.qcUsb1Watts` |  |
| USB-A fast charge 2 output power | power | W | `pd.qcUsb2Watts` |  |
| Total AC charged | energy | Wh | `pd.chgPowerAc` |  |
| Total DC charged | energy | Wh | `pd.chgPowerDc` |  |
| Total DC discharged | energy | Wh | `pd.dsgPowerDc` |  |
| Screen timeout | duration | s | `pd.lcdOffSec` | 🔧 |
| Device standby time | duration | min | `pd.standByMode` | 🔧 |
| Battery charge energy | energy | Wh | _integrated_ |  |
| Battery discharge energy | energy | Wh | _integrated_ |  |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Battery charging | battery_charging | `ems.chgState` |  |
| X-Boost | — | `inv.cfgAcXboost` | 🔧 |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| AC output | `inv.cfgAcEnabled` |  |
| Car charger | `mppt.carState` |  |
| DC output | `pd.dcOutState` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge limit | % | 50–100 (step 1) | `ems.maxChargeSoc` |  |
| Discharge limit | % | 0–30 (step 1) | `ems.minDsgSoc` |  |
| Device standby time | min | 0–720 (step 1) | `pd.standByMode` |  |
| Screen timeout | s | 0–1800 (step 1) | `pd.lcdOffSec` |  |

---

_Entity totals: 36 — 27 sensor, 2 binary_sensor, 3 switch, 4 number, 0 select, 0 light._
