# EcoFlow IoT for Home Assistant

A clean, production-ready custom integration for EcoFlow devices built on the
**official EcoFlow Developer API** (the `accessKey`/`secretKey` IoT Open Platform).
It uses **MQTT for live data and control**, and automatically **falls back to the
HTTP REST API** when MQTT is unavailable.

It aims for **feature parity with the official EcoFlow developer documentation**
(<https://developer-eu.ecoflow.com/us/document/introduction>): every supported
device's documented quota fields and set-commands are mapped to Home Assistant
entities.

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

## Supported devices

Resolved automatically by serial-number prefix. ~1,190 entities are mapped across the
fleet from the official quota schemas. Each link lists every entity for that device:

| Category | Devices |
|---|---|
| **Power Stations** | [Delta 2](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/delta_2.md) · [Delta 2 Max](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/delta_2_max.md) · [Delta 3 Max](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/delta_3_max.md) · [Delta 3 Max Plus](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/delta_3_max_plus.md) · [Delta Pro](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/delta_pro.md) · [Delta Pro 3](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/delta_pro_3.md) · [Delta Pro Ultra](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/delta_pro_ultra.md) · [River 2 Pro](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/power_stations/river_2_pro.md) |
| **Solar Systems** | [Stream](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/solar_systems/stream.md) (Ultra / Ultra X / AC / AC Pro / Pro) · [Stream Microinverter](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/solar_systems/stream_microinverter.md) · [PowerStream](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/solar_systems/power_stream.md) |
| **Home Battery** | [PowerOcean](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/home_battery/power_ocean.md) |
| **Smart Living** | [Glacier](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/smart_living/glacier.md) · [Power Kits](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/smart_living/power_kits.md) · [Smart Plug](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/smart_living/smart_plug.md) · [WAVE](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/smart_living/wave.md) |
| **Whole-Home Backup** | [Smart Home Panel](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/whole_home_backup/smart_home_panel.md) · [Smart Home Panel 2](https://github.com/MichelFR/ha-ecoflow/blob/main/docs/devices/whole_home_backup/smart_home_panel_2.md) |

## Requirements

1. An EcoFlow developer account at <https://developer.ecoflow.com> (EU:
   <https://developer-eu.ecoflow.com>). Under **Security**, create an **AccessKey** and
   **SecretKey** (approval can take a few days).
2. Your device must be bound to the same EcoFlow account.

## Configure

1. Go to **Settings → Devices & Services → Add Integration**, search for **EcoFlow IoT**.
2. Choose your **Region** (Europe = `api-e.ecoflow.com`, Global/US = `api.ecoflow.com`)
   and paste your **Access Key** and **Secret Key**.
3. Every device bound to your account is discovered automatically and its
   sensors/controls are created. Live values stream over MQTT within seconds.

## Using it

- **Entities:** each device gets sensors (battery, solar, grid, power flow, energy
  totals…), controls (switches/numbers/selects) and an always-available **Connection**
  diagnostic sensor.
- **Energy dashboard:** cumulative `Wh`/`kWh` sensors carry the right `state_class`, so
  they can be added to Home Assistant's **Energy** dashboard.
- **Options** (gear icon): HTTP poll interval, MQTT staleness threshold, MQTT on/off.
- **Re-authentication:** if you rotate your API keys, Home Assistant prompts you to
  re-enter them — no need to delete the integration.

---

Full documentation, install instructions and source:
<https://github.com/MichelFR/ha-ecoflow>
