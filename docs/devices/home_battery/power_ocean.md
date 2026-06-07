# EcoFlow PowerOcean

**Category:** Home Battery · **Auto-detected by SN prefix:** `HJ31`

> Generated from `custom_components/ecoflow_iot/devices/home_battery/power_ocean.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `bpSoc` |  |
| Battery power | power | W | `bpPwr` |  |
| Solar power | power | W | `mpptPwr` |  |
| Load power | power | W | `sysLoadPwr` |  |
| Grid power | power | W | `sysGridPwr` |  |
| Phase A active power | power | W | _computed_ |  |
| Phase A apparent power | apparent_power | VA | _computed_ | 💤 |
| Phase A reactive power | reactive_power | var | _computed_ | 💤 |
| Phase A voltage | voltage | V | _computed_ | 🔧 |
| Phase A current | current | A | _computed_ | 🔧 💤 |
| Phase B active power | power | W | _computed_ |  |
| Phase B apparent power | apparent_power | VA | _computed_ | 💤 |
| Phase B reactive power | reactive_power | var | _computed_ | 💤 |
| Phase B voltage | voltage | V | _computed_ | 🔧 |
| Phase B current | current | A | _computed_ | 🔧 💤 |
| Phase C active power | power | W | _computed_ |  |
| Phase C apparent power | apparent_power | VA | _computed_ | 💤 |
| Phase C reactive power | reactive_power | var | _computed_ | 💤 |
| Phase C voltage | voltage | V | _computed_ | 🔧 |
| Phase C current | current | A | _computed_ | 🔧 💤 |
| Solar string 1 power | power | W | _computed_ |  |
| Solar string 1 voltage | voltage | V | _computed_ | 🔧 💤 |
| Solar string 1 current | current | A | _computed_ | 🔧 💤 |
| Solar string 2 power | power | W | _computed_ |  |
| Solar string 2 voltage | voltage | V | _computed_ | 🔧 💤 |
| Solar string 2 current | current | A | _computed_ | 🔧 💤 |
| EV charger power | power | W | `evPwr` | 💤 |
| Zone A temperature | temperature | °C | _computed_ | 🔧 💤 |
| Zone B temperature | temperature | °C | _computed_ | 🔧 💤 |
| Hot water temperature | temperature | °C | _computed_ | 🔧 💤 |
| Heat pump inlet temperature | temperature | °C | _computed_ | 🔧 💤 |
| Heat pump outlet temperature | temperature | °C | _computed_ | 🔧 💤 |
| Heat pump ambient temperature | temperature | °C | _computed_ | 🔧 💤 |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| EV charging | battery_charging | `chargingStatus` | 💤 |

---

_Entity totals: 34 — 33 sensor, 1 binary_sensor, 0 switch, 0 number, 0 select._
