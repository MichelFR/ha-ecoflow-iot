# Home Assistant Energy Dashboard setup

This guide explains which EcoFlow entities to use in **Settings → Energy**, and the
sign conventions that trip people up. It currently covers the **Stream** family
(Ultra / Ultra X / AC / AC Pro / Pro, and the Microinverter); other devices expose
power but mostly not cumulative energy yet.

## Two kinds of sensor

The Energy Dashboard has two layers, and each category dialog reflects them:

- **Energy** (`Wh`/`kWh`, `device_class: energy`, `state_class: total_increasing`) —
  **required**. This drives the history graphs, long-term statistics and cost tracking.
- **Power** (`W`, `state_class: measurement`) — **optional** (since HA **2025.12**). It
  only adds the real-time "watts flowing" overlay; it does *not* feed statistics or cost.
  The battery dialog also takes an optional **state-of-charge (%)** sensor.

So you can always leave the power/SoC fields empty — the dashboard still works fully
from the energy sensors.

## Stream → dashboard mapping

All energy sensors below are `total_increasing` Wh and **enabled by default**. The
grid/solar/socket/battery energy sensors are *derived* by integrating the device's live
power (the Stream developer API does not report cumulative energy in its live quota).

| Energy dialog | Energy sensor (required) | Power sensor (optional) | Power type |
|---|---|---|---|
| **Solar panels** → *Energie der PV-Erzeugung* | **Solar energy** | Solar power | — |
| **Grid** → *Aus dem Netz bezogene Energie* (consumption / import) | **Grid import energy** | Grid power | **Standard** |
| **Grid** → *In das Netz eingespeiste Energie* (return / export) | **Grid export energy** | (same Grid power sensor) | — |
| **Battery** → *In die Batterie geladene Energie* (charged in) | **Battery charge energy** | Battery power | **Inverted** |
| **Battery** → *Aus der Batterie entladene Energie* (discharged out) | **Battery discharge energy** | (same Battery power sensor) | — |
| **Battery** → *Batterieladezustand-Sensor* (SoC %) | — | **Battery** (SoC) | — |
| **Individual devices** | **AC socket 1 energy** / **AC socket 2 energy** | — | — |

> The **Stream Microinverter** has no battery and no AC sockets, so only the solar and
> grid rows apply to it.

## Sign conventions (Standard vs Inverted)

These only matter for the optional **power** overlay ("Art der Leistungsmessung"). HA's
**Standard** means *positive = consumption / draw*. Match it as follows:

- **Grid power → Standard.** Our `Grid power` (`gridConnectionPower`) is positive when
  importing and negative when feeding in — that *is* HA's standard grid convention.
- **Battery power → Inverted.** Our `Battery power` (`powGetBpCms`) is positive when
  **charging** and negative when discharging. HA's standard battery convention is the
  opposite (positive = discharge), so choose **Inverted**.

"Zwei Sensoren" (two sensors) doesn't apply — we expose a single signed power sensor for
grid and for battery, not separate import/export or charge/discharge power sensors.

**Verify empirically after saving:** with the battery clearly charging, or the grid
clearly importing (load on, no sun), the live flow should point the right way. If it's
reversed, flip Standard ↔ Inverted.

## Common pitfall — don't swap import/export

The two grid energy fields are easy to mix up:

- *Aus dem Netz **bezogene** Energie* = energy drawn **from** the grid → **Grid import energy**
- *In das Netz **eingespeiste** Energie* = energy fed **into** the grid → **Grid export energy**

If swapped, your consumption and return — and any cost/feed-in tracking — will be
backwards. (Tell-tale: the auto-filled display name shows the wrong sensor.)

## Accuracy notes

- **Derived energy is integrated from live power.** Totals are monotonic
  (`total_increasing`), **restored across restarts** so statistics stay continuous, and
  integration **pauses while the device is offline** rather than guessing across the gap.
- **Grid sensors measure the Stream's own grid port**, not a whole-house meter, so they
  reflect the device's exchange with the grid and can drift from your utility meter.
- The legacy **Total charged / Total discharged** sensors (`accuChgEnergy` /
  `accuDsgEnergy`) are **disabled by default** — those quota fields aren't in the
  documented schema and aren't reported by current firmware. Use **Battery charge
  energy** / **Battery discharge energy** instead.
