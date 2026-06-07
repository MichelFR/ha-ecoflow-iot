# EcoFlow Stream Microinverter

**Category:** Solar Systems · **Auto-detected by SN prefix:** `BK`

> Generated from `custom_components/ecoflow_iot/devices/solar_systems/stream.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Grid power | power | W | `gridConnectionPower` |  |
| System grid power | power | W | `sysGridConnectionPower` | ○ |
| Grid voltage | voltage | V | `gridConnectionVol` | D |
| Grid frequency | frequency | Hz | `gridConnectionFreq` | D |
| Inverter temperature | temperature | °C | `invNtcTemp3` | D |
| Meter phase A power | power | W | `cloudMetter.phaseAPower` | ○ |
| Solar power | power | W | `powGetPvSum` |  |
| Solar string 1 power | power | W | _computed_ |  |
| Solar string 1 voltage | voltage | V | `plugInInfoPvVol` | D ○ |
| Solar string 1 current | current | A | `plugInInfoPvAmp` | D ○ |
| Solar string 2 power | power | W | _computed_ |  |
| Solar string 2 voltage | voltage | V | `plugInInfoPv2Vol` | D ○ |
| Solar string 2 current | current | A | `plugInInfoPv2Amp` | D ○ |
| Wi-Fi signal | signal_strength | dBm | `moduleWifiRssi` | D ○ |
| Feed-in power limit | power | W | `feedGridModePowLimit` | D |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Solar string 1 connected | connectivity | `plugInInfoPvFlag` | D ○ |
| Solar string 2 connected | connectivity | `plugInInfoPv2Flag` | D ○ |

---

_Entity totals: 17 — 15 sensor, 2 binary_sensor, 0 switch, 0 number, 0 select._
