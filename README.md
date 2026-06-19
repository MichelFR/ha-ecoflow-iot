# EcoFlow IoT for Home Assistant

A clean, production-ready custom integration for EcoFlow devices built on the
**official EcoFlow Developer API** (the `accessKey`/`secretKey` IoT Open Platform).
It uses **MQTT for live data and control**, and automatically **falls back to the
HTTP REST API** when MQTT is unavailable.

It aims for **feature parity with the official EcoFlow developer documentation**
(<https://developer-eu.ecoflow.com/us/document/introduction>): every supported
device's documented quota fields and set-commands are mapped to Home Assistant
entities.

Device definitions are organised into category packages that mirror the EcoFlow
developer-docs catalog, and resolution is automatic from each device's serial
number. Adding another device later is a single new module.

## Supported devices

Resolved automatically by serial-number prefix (with quota-based fallback). ~1,190
entities are mapped across the fleet from the official quota schemas. Each link below
lists every sensor / binary sensor / switch / number / select for that device
(generated from the code — see [`docs/devices/`](docs/devices/README.md)).

| Category | Devices |
|---|---|
| **Power Stations** | [Delta 2](docs/devices/power_stations/delta_2.md) · [Delta 2 Max](docs/devices/power_stations/delta_2_max.md) · [Delta 3 Max](docs/devices/power_stations/delta_3_max.md) · [Delta 3 Max Plus](docs/devices/power_stations/delta_3_max_plus.md) · [Delta Pro](docs/devices/power_stations/delta_pro.md) · [Delta Pro 3](docs/devices/power_stations/delta_pro_3.md) · [Delta Pro Ultra](docs/devices/power_stations/delta_pro_ultra.md) · [River 2 Pro](docs/devices/power_stations/river_2_pro.md) |
| **Solar Systems** | [Stream](docs/devices/solar_systems/stream.md) (Ultra / Ultra X / AC / AC Pro / Pro) · [Stream Microinverter](docs/devices/solar_systems/stream_microinverter.md) · [PowerStream](docs/devices/solar_systems/power_stream.md) |
| **Home Battery** | [PowerOcean](docs/devices/home_battery/power_ocean.md) |
| **Smart Living** | [Glacier](docs/devices/smart_living/glacier.md) · [Power Kits](docs/devices/smart_living/power_kits.md) · [Smart Plug](docs/devices/smart_living/smart_plug.md) · [WAVE](docs/devices/smart_living/wave.md) |
| **Whole-Home Backup** | [Smart Home Panel](docs/devices/whole_home_backup/smart_home_panel.md) · [Smart Home Panel 2](docs/devices/whole_home_backup/smart_home_panel_2.md) |

The full entity reference index lives in [`docs/devices/README.md`](docs/devices/README.md);
regenerate it after changing entities with `python3 scripts/gen_device_docs.py`.

Devices are matched by **serial-number prefix**. If Home Assistant shows an
**"Unsupported EcoFlow device (`XXXX`)" repair**, your device's prefix isn't mapped
yet — check [`KNOWN_PREFIXES.md`](KNOWN_PREFIXES.md), and if it's missing please
[open an issue](https://github.com/MichelFR/ha-ecoflow-iot/issues) with the prefix (not your
full serial) so it can be added.

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
- **Energy Dashboard ready** — devices expose cumulative `Wh` energy sensors (solar
  production, grid import/export, battery charge/discharge, per-device consumption),
  derived from live power where the API reports only watts, so they plug straight into
  Home Assistant's **Energy** dashboard. See the
  [Energy Dashboard setup guide](docs/energy_dashboard.md) for the per-device mapping and
  the grid/battery sign conventions.
- **Bundled Lovelace card** — an **EcoFlow Energy** card for Stream devices, with the
  device image, an animated battery bar, live Solar and Grid power, today's solar
  production (with an optional forecast comparison) and a tap-to-expand per-panel
  breakdown. Entities are auto-detected; it ships with the integration and registers
  itself, so no manual resource setup is needed. See [EcoFlow Energy card](#ecoflow-energy-card).
- Config flow with region selection, reauth, options (poll interval, MQTT staleness,
  MQTT enable/disable), and redacted diagnostics.

## Requirements

1. An EcoFlow developer account at <https://developer.ecoflow.com> (EU:
   <https://developer-eu.ecoflow.com>). Under **Security**, create an **AccessKey** and
   **SecretKey** (approval can take a few days).
2. Your device must be bound to the same EcoFlow account.

## Installation

### Option A — HACS (recommended)

[![Open your Home Assistant instance and open this repository inside HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=MichelFR&repository=ha-ecoflow-iot&category=integration)

1. Click the button above to add this repository to HACS — or add it manually:
   **HACS → ⋮ (top-right) → Custom repositories**, URL
   `https://github.com/MichelFR/ha-ecoflow-iot`, category **Integration**.
2. Search for **EcoFlow IoT** in HACS and click **Download**.
3. **Restart Home Assistant.**

### Option B — Manual

1. Download the latest [release](https://github.com/MichelFR/ha-ecoflow-iot/releases)
   (or clone this repo).
2. Copy the `custom_components/ecoflow_iot` folder into your Home Assistant
   `config/custom_components/` directory (so you have
   `config/custom_components/ecoflow_iot/`).
3. **Restart Home Assistant.**

### Configure

[![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ecoflow_iot)

1. Go to **Settings → Devices & Services → Add Integration**, search for
   **EcoFlow IoT** (or use the button above).
2. Choose your **Region** (Europe = `api-e.ecoflow.com`, Global/US =
   `api.ecoflow.com`) and paste your **Access Key** and **Secret Key**.
3. That's it — every device bound to your account is discovered automatically and
   its sensors/controls are created. Live values stream over MQTT within seconds.

### Using it

- **Entities:** each device gets sensors (battery, solar, grid, power flow, energy
  totals…), controls (switches/numbers/selects for the documented settings) and an
  always-available **Connection** diagnostic sensor. See
  [Supported devices](#supported-devices) for the full per-device list.
- **Energy dashboard:** the cumulative `Wh`/`kWh` energy sensors carry the right
  `device_class`/`state_class`, so they can be added to Home Assistant's **Energy**
  dashboard. For the Stream, see the [Energy Dashboard setup guide](docs/energy_dashboard.md)
  (which sensor goes in each field, plus the grid/battery sign conventions).
- **Options** (gear icon on the integration): HTTP poll interval, MQTT staleness
  threshold, and an MQTT on/off toggle. HTTP-only values (marked 🌐 in the per-device
  docs) are refreshed over HTTP on the poll interval even while MQTT is connected, but
  only for devices that have such entities.
- **Re-authentication:** if you rotate your API keys, Home Assistant prompts you to
  re-enter them — no need to delete the integration.

### EcoFlow Energy card

The integration bundles a custom Lovelace card, **EcoFlow Energy**, tailored to Stream
devices (Ultra / Ultra X / AC / AC Pro / Pro). It serves and registers itself, so in the
common case you just add it from the dashboard's card picker.

- **Add it:** edit a dashboard → **+ Add Card** → search for **EcoFlow Energy**. With a
  single Stream it auto-detects everything; with more than one, pick the device in the
  card's visual editor.
- **Shows:** the device photo, an animated battery bar (with charge/discharge rate),
  **Solar power**, **Grid power** (import/export), and **today's solar production** with
  an optional forecast comparison. Tap **Solar power** for a per-panel (per-MPPT)
  breakdown; tap **Solar today** for an hourly production graph with the forecast curve
  overlaid (like the Energy dashboard's Solar production card).
- **Solar forecast:** uses the **same forecast configured in Home Assistant's Energy
  dashboard** (Settings → Dashboards → Energy → Solar panels). The card's editor lists
  those forecast providers so you can choose which to include; the dashed forecast curve
  and the "X / Y kWh" comparison are drawn from them. If no Energy-dashboard forecast is
  set up, the card simply omits the comparison.
- **Editor:** an ABRP-style visual editor — Appearance toggles, an Entities page for
  overriding any auto-detected entity (Auto / Entity / Custom-template), a **Solar
  panels** page to rename, re-map or hide each panel, and a **Solar forecast** page to
  pick which forecast providers to use.
- **Today's total** is read from the recorder's statistics for the cumulative Solar
  energy sensor (the same source as the Energy Dashboard), so the **recorder** must be
  enabled (it is by default).
- The card is auto-registered as a dashboard resource when Lovelace runs in **storage
  mode** (the default UI mode). In **YAML mode**, add the resource manually:
  `/ecoflow_iot/ecoflow-energy-card.js` as a **JavaScript Module**.

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

Every device exposes an always-available **Connection** diagnostic sensor
(`connected` / `connecting` / `disconnected`, plus data source and last-update).

The complete per-device entity tables (sensors, binary sensors, switches, numbers,
selects — with device class, unit, underlying quota key and diagnostic/disabled
flags) are generated from the device definitions and live under
[`docs/devices/`](docs/devices/README.md). See the per-device links in
[Supported devices](#supported-devices) above. Regenerate them with:

```bash
python3 scripts/gen_device_docs.py
```

## Architecture

```
custom_components/ecoflow_iot/
├── api/                  # signing (auth.py), HTTP client, MQTT client, errors
├── devices/              # device layer (mirrors the EcoFlow docs catalog)
│   ├── base.py           #   EcoFlowDevice + entity-description dataclasses
│   ├── commands.py       #   command builders (stream envelope / legacy / cmdSet)
│   ├── __init__.py       #   DEVICE_REGISTRY + resolve_device(sn, quota)
│   ├── power_stations/   #   delta_2, delta_2_max, delta_3_max(_plus), delta_pro(_3/_ultra), river_2_pro
│   ├── solar_systems/    #   stream, power_stream
│   ├── home_battery/     #   power_ocean
│   ├── smart_living/     #   glacier, power_kits, smart_plug, wave
│   └── whole_home_backup/#   smart_home_panel, smart_home_panel_ii
├── coordinator.py        # MQTT push + HTTP fallback, write dispatch, connection state
├── entity.py             # shared entity base (device info, availability, value extraction)
└── sensor.py / binary_sensor.py / switch.py / number.py / select.py
```

**Adding a device** = drop one `devices/<category>/<model>.py` with an `EcoFlowDevice`
subclass (declaring its `model`, `sn_prefixes`, `matches()`, per-platform
`entity_descriptions()`, and `command_fn`s) and register it in `devices/__init__.py`.
No platform code changes. Each device's command style is handled by its
`command_fn`/`build_command`: the Stream/Delta-3 envelope (`cmdId/cmdFunc`), the legacy
`moduleType`/`operateType` body, the `cmdSet`/`id` body, or `cmdCode` — all built via
`devices/commands.py`.

`resolve_device()` is **SN-prefix-authoritative**: a serial's prefix selects the model;
quota fields only disambiguate models that share a prefix (e.g. Delta 3 Max vs Max Plus)
or identify devices with an unknown serial.

## Disclaimer

Not affiliated with or endorsed by EcoFlow. Device definitions are generated from the
official EcoFlow developer documentation (quota schemas + set-commands); some
per-firmware fields, units, or command parameters may still need on-device verification.
