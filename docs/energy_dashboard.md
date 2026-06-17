# Home Assistant Energy Dashboard setup

This guide explains which EcoFlow entities to use in **Settings → Energy**, and the
sign conventions that trip people up. It walks through the **Stream** family in detail,
then lists the equivalent sensors on the rest of the fleet.

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

| Energy dialog field | Energy sensor (required) | Power sensor (optional) | Power type |
|---|---|---|---|
| **Solar panels** → *Solar production energy* | **Solar energy** | Solar power | — |
| **Grid** → *Grid consumption* (energy consumed from the grid) | **Grid import energy** | Grid power | **Standard** |
| **Grid** → *Return to grid* (energy returned to the grid) | **Grid export energy** | (same Grid power sensor) | — |
| **Battery** → *Energy going into the battery* | **Battery charge energy** | Battery power | **Inverted** |
| **Battery** → *Energy coming out of the battery* | **Battery discharge energy** | (same Battery power sensor) | — |
| **Battery** → *Battery state of charge sensor* | — | **Battery** (SoC) | — |
| **Individual devices** | **AC socket 1 energy** / **AC socket 2 energy** | — | — |

> The **Stream Microinverter** has no battery and no AC sockets, so only the solar and
> grid rows apply to it.

## Other devices

The same derived `Wh` sensors (enabled by default, integrated from the device's live
power) are now exposed across the fleet. Pick the matching entity for each Energy
Dashboard field:

| Derived sensor(s) | Devices |
|---|---|
| **Solar energy** (Solar production) | Delta 2 / 2 Max / 3 Max / 3 Max Plus / Pro / Pro 3 / Pro Ultra, River 2 Pro, PowerStream, PowerOcean, Power Kits, Wave |
| **Battery charge / discharge energy** (Home battery in/out) | Delta 2 / 2 Max / Pro, Power Kits, Glacier *(separate in/out sensors)*; PowerOcean, PowerStream *(single signed sensor — see caveat)* |
| **Grid import / export energy** (Grid consumption / Return) | PowerOcean, Smart Home Panel II *(single signed sensor — see caveat)* |
| **Energy** / **Energy consumption** (Individual devices) | Smart Plug, Wave |
| **Home energy** (whole-home load) | Smart Home Panel II |

Devices that expose only device-total power and no battery-specific reading
(Delta 3 Max / 3 Max Plus / Pro 3 / Pro Ultra, River 2 Pro) get **Solar energy** only —
there's no clean battery in/out signal to integrate. Smart Home Panel (v1) keeps its
native daily `Grid energy today` counter.

## Sign conventions (Standard vs Inverted)

These only matter for the optional **power** overlay ("Type of power measurement"). HA's
**Standard** means *positive = consumption / draw*. Match it as follows:

- **Grid power → Standard.** Our `Grid power` (`gridConnectionPower`) is positive when
  importing and negative when feeding in — that *is* HA's standard grid convention.
- **Battery power → Inverted.** Our `Battery power` (`powGetBpCms`) is positive when
  **charging** and negative when discharging. HA's standard battery convention is the
  opposite (positive = discharge), so choose **Inverted**.

"Two sensors" doesn't apply — we expose a single signed power sensor for grid and for
battery, not separate import/export or charge/discharge power sensors.

**Verify empirically after saving:** with the battery clearly charging, or the grid
clearly importing (load on, no sun), the live flow should point the right way. If it's
reversed, flip Standard ↔ Inverted.

## Common pitfall — don't swap import/export

The two grid energy fields are easy to mix up:

- *Grid consumption* = energy consumed **from** the grid → **Grid import energy**
- *Return to grid* = energy returned **to** the grid → **Grid export energy**

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
- **Signed-sensor sign convention may need flipping.** Where battery or grid energy is
  derived from a *single signed* reading — PowerOcean (`bpPwr`, `sysGridPwr`), PowerStream
  (`batInputWatts`), Smart Home Panel II (`gridWatt`) — the charge/discharge or
  import/export split assumes a sign convention that isn't fully documented. If the two
  look swapped (e.g. discharge climbs while charging), just select the opposite sensor in
  the dialog, or open an issue and the default will be corrected.
