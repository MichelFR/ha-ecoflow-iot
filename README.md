# EcoFlow IoT for Home Assistant

A clean, production-ready custom integration for EcoFlow devices built on the
**official EcoFlow Developer API** (the `accessKey`/`secretKey` IoT Open Platform).
It uses **MQTT for live data and control**, and automatically **falls back to the
HTTP REST API** when MQTT is unavailable.

First supported family: **EcoFlow Stream** (Ultra / Ultra X / AC / AC Pro / Pro and
the Stream Microinverter). The architecture is built to add more devices later by
dropping in a single device-definition module.

## Features

- **MQTT-first, HTTP fallback** — real-time push updates over TLS MQTT; HTTP polling
  kicks in only when MQTT is disconnected or stale, keeping cloud API usage minimal.
- **Control over MQTT with HTTP fallback** — set commands are published over MQTT and
  confirmed via `set_reply`; if MQTT is down or unacknowledged, the command is retried
  over HTTP `PUT`.
- **MQTT connection status sensor** — an always-available diagnostic sensor per device
  showing `connected` / `connecting` / `disconnected`, plus the active data source and
  last MQTT update time.
- **Full entity coverage** — sensors (battery, solar per-MPPT, grid/AC, inverter, power
  flow, energy totals), binary sensors, switches, numbers and a mode select.
- Config flow with region selection, reauth, options (poll interval, MQTT staleness,
  MQTT enable/disable), and redacted diagnostics.

## Requirements

1. An EcoFlow developer account at <https://developer.ecoflow.com> (EU:
   <https://developer-eu.ecoflow.com>). Under **Security**, create an **AccessKey** and
   **SecretKey** (approval can take a few days).
2. Your device must be bound to the same EcoFlow account.

## Installation (HACS)

1. HACS → Integrations → ⋮ → **Custom repositories** → add this repo as an *Integration*.
2. Install **EcoFlow IoT**, then restart Home Assistant.
3. Settings → Devices & Services → **Add Integration** → *EcoFlow IoT*.
4. Choose your **Region** (Europe = `api-e.ecoflow.com`, Global/US = `api.ecoflow.com`)
   and enter your **Access Key** and **Secret Key**.

## How data flows

```
EcoFlow Cloud ──MQTT (TLS 8883)──▶ live quota push ──▶ entities (instant)
        │                                  ▲
        └──HTTP REST (signed) ─ fallback ──┘  (only when MQTT down/stale)
```

- Reads: MQTT updates merge into a per-device quota snapshot and push to HA. The polling
  tick performs an HTTP `quota/all` refresh only when MQTT is disconnected or no message
  has arrived within the staleness window.
- Writes: published to `/open/{account}/{sn}/set`, correlated to the device's
  `set_reply`; on timeout/disconnect, the same payload is sent via HTTP `PUT`.

## Connection resilience (MQTT down → HTTP → auto-recover)

The integration degrades gracefully and recovers on its own — you don't need to
reload it after a network blip:

1. **MQTT keeps reconnecting in the background.** The MQTT client runs paho's own
   network loop, which automatically retries the initial connection and reconnects
   after any unexpected drop, with built-in backoff (≈1s, doubling up to ~120s). The
   loop is only stopped when you remove/reload the integration.
2. **HTTP covers the gap.** While MQTT is not connected (or no MQTT message has
   arrived within the staleness window), the periodic poll falls back to the HTTP
   REST API, so entities keep updating — just at the poll interval instead of in
   real time. The **Connection** sensor shows `connecting` and `data_source: http`.
3. **Auto-recovery.** When MQTT reconnects, it **re-subscribes** to all topics and
   the Connection sensor returns to `connected`. As soon as live messages resume,
   HTTP polling automatically stops again (`data_source: mqtt`).
4. **Rotated credentials.** If the broker rejects the stored credentials (they are
   rotated by EcoFlow during maintenance), the client re-fetches a fresh certificate
   from the API and reconnects, rather than looping on stale credentials.

In short: a temporary MQTT outage causes a short switch to slower HTTP polling and an
automatic return to real-time MQTT once connectivity is restored.

## Manual test checklist

1. Add the integration; confirm a device and its entities are created.
2. The **Connection** sensor shows `connected` and `data_source: mqtt`.
3. Battery/solar/grid values update live (within seconds) without polling.
4. Temporarily block outbound MQTT (port 8883): the Connection sensor flips to
   `disconnected`, `data_source` becomes `http`, and values keep updating on the poll
   interval.
5. Toggle an AC socket switch / change the charge-limit number: the device reacts and
   the new state survives a refresh.
6. Download diagnostics (device page → ⋮ → *Download diagnostics*) and verify keys are
   redacted.

## Entities per device

Every device also gets a **Connection** diagnostic sensor (enum:
`connected` / `connecting` / `disconnected`) that is always available.

Legend: **D** = diagnostic entity · **○** = disabled by default (enable in the
entity settings) · *Quota key* is the underlying API field.

<details>
<summary><b>EcoFlow Stream</b> (Ultra / Ultra X / AC / AC Pro / Pro) — full feature set</summary>

#### Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `cmsBattSoc` | |
| Battery (BMS) | battery | % | `bmsBattSoc` | ○ |
| Battery health | — | % | `cmsBattSoh` | D |
| Battery voltage | voltage | V | `vol` | D |
| Battery current | current | A | `amp` | D |
| Battery temperature | temperature | °C | `temp` | |
| Battery capacity | energy_storage | Wh | `cmsBattFullEnergy` | D |
| Battery cycles | — | — | `cycles` | D |
| Time to full | duration | min | `cmsChgRemTime` | D |
| Time to empty | duration | min | `cmsDsgRemTime` | D |
| Total charged | energy | Wh | `accuChgEnergy` | |
| Total discharged | energy | Wh | `accuDsgEnergy` | |
| Battery power | power | W | `powGetBpCms` | |
| Load power | power | W | `powGetSysLoad` | |
| Load from battery | power | W | `powGetSysLoadFromBp` | ○ |
| Load from grid | power | W | `powGetSysLoadFromGrid` | ○ |
| Load from solar | power | W | `powGetSysLoadFromPv` | ○ |
| Grid power | power | W | `gridConnectionPower` | |
| System grid power | power | W | `sysGridConnectionPower` | ○ |
| Grid voltage | voltage | V | `gridConnectionVol` | D |
| Grid frequency | frequency | Hz | `gridConnectionFreq` | D |
| Inverter temperature | temperature | °C | `invNtcTemp3` | D |
| Meter phase A power | power | W | `cloudMetter.phaseAPower` | ○ |
| Solar power | power | W | `powGetPvSum` | |
| Solar string _N_ power | power | W | `powGetPv`_N_ (or `plugInInfoPv`_N_`Amp × Vol`) | for _N_ = 1–4 |
| Solar string _N_ voltage | voltage | V | `plugInInfoPv`_N_`Vol` | D ○, _N_ = 1–4 |
| Solar string _N_ current | current | A | `plugInInfoPv`_N_`Amp` | D ○, _N_ = 1–4 |
| AC socket 1 power | power | W | `powGetSchuko1` | |
| AC socket 2 power | power | W | `powGetSchuko2` | |
| Wi-Fi signal | signal_strength | dBm | `moduleWifiRssi` | D ○ |
| Feed-in power limit | power | W | `feedGridModePowLimit` | D |

#### Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Battery heater | heat | `bmsBattHeating` | D |
| Smart meter connected | connectivity | `cloudMetter.hasMeter` | D |
| Storm guard | — | `stormPatternEnable` | D |
| Solar string _N_ connected | connectivity | `plugInInfoPv`_N_`Flag` | D ○, _N_ = 1–4 |

#### Switches

| Entity | Quota key | Command |
|---|---|---|
| AC socket 1 | `relay2Onoff` | `cfgRelay2Onoff` |
| AC socket 2 | `relay3Onoff` | `cfgRelay3Onoff` |
| Self-powered mode | `energyStrategyOperateMode.operateSelfPoweredOpen` | `cfgEnergyStrategyOperateMode` |
| Grid feed-in | `feedGridMode` | `cfgFeedGridMode` (2 = on, 1 = off) |

#### Numbers

| Entity | Unit | Range | Command |
|---|---|---|---|
| Charge limit | % | 50–100 | `cfgMaxChgSoc` (sent with `cfgMinDsgSoc`) |
| Discharge limit | % | 0–30 | `cfgMinDsgSoc` (sent with `cfgMaxChgSoc`) |
| Backup reserve | % | 3–95 | `cfgBackupReverseSoc` |
| Feed-in power limit | W | 0–800 | `cfgFeedGridModePowLimit` |

#### Selects

| Entity | Options | Command |
|---|---|---|
| Operating mode | self-powered · scheduled · time-of-use · intelligent | `cfgEnergyStrategyOperateMode.operate*Open` |

</details>

<details>
<summary><b>EcoFlow Stream Microinverter</b> — grid-tie inverter, 2 PV strings, no battery</summary>

#### Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Grid power | power | W | `gridConnectionPower` | |
| System grid power | power | W | `sysGridConnectionPower` | ○ |
| Grid voltage | voltage | V | `gridConnectionVol` | D |
| Grid frequency | frequency | Hz | `gridConnectionFreq` | D |
| Inverter temperature | temperature | °C | `invNtcTemp3` | D |
| Meter phase A power | power | W | `cloudMetter.phaseAPower` | ○ |
| Solar power | power | W | `powGetPvSum` | |
| Solar string _N_ power | power | W | `powGetPv`_N_ (or `plugInInfoPv`_N_`Amp × Vol`) | for _N_ = 1–2 |
| Solar string _N_ voltage | voltage | V | `plugInInfoPv`_N_`Vol` | D ○, _N_ = 1–2 |
| Solar string _N_ current | current | A | `plugInInfoPv`_N_`Amp` | D ○, _N_ = 1–2 |
| Wi-Fi signal | signal_strength | dBm | `moduleWifiRssi` | D ○ |
| Feed-in power limit | power | W | `feedGridModePowLimit` | D |

#### Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Solar string _N_ connected | connectivity | `plugInInfoPv`_N_`Flag` | D ○, _N_ = 1–2 |

No switches, numbers or selects (no battery / relays to control).

</details>

## Architecture

```
custom_components/ecoflow_iot/
├── api/            # signing (auth.py), HTTP client, MQTT client, errors
├── devices/        # base device + registry; stream.py holds the Stream entity maps
├── coordinator.py  # MQTT push + HTTP fallback, write dispatch, connection state
├── entity.py       # shared entity base (device info, availability, value extraction)
└── sensor.py / binary_sensor.py / switch.py / number.py / select.py
```

Adding a new device = add a `devices/<model>.py` with an `EcoFlowDevice` subclass and
register it in `devices/__init__.py`. No platform changes needed.

## Disclaimer

Not affiliated with or endorsed by EcoFlow. Field names follow the public quota schema
and authoritative community references; some per-firmware fields may vary.
