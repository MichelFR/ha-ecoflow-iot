# EcoFlow serial-number prefixes

EcoFlow serial numbers start with a device-type code (e.g. `R331…` = Delta 2,
`HJ31…` = PowerOcean). This integration resolves each device **by its SN prefix**
(see `sn_prefixes` on each device class in `custom_components/ecoflow_iot/devices/`).

> ⚠️ **EcoFlow publishes no public prefix→model table.** Its own API resolves devices by
> a `productName`/`productType` field, not by serial prefix. The list below is compiled
> from the EcoFlow developer-doc example serials, real user-reported serials, the
> [ioBroker.ecoflow-mqtt](https://github.com/foxthefox/ioBroker.ecoflow-mqtt) device table
> (`lib/ecoflow_data.js`), and — for the family-code prefixes — the EcoFlow **Android
> app's internal device-code registry** (reverse-engineered). The app keys on short
> family codes and distinct codes per model, so a code won't swallow a sibling model.
> Still treat it as a strong reference, not a guarantee — model *names* are not in the app.

## If you got a "Unsupported EcoFlow device (`XXXX`)" repair

When the integration finds a device whose prefix it doesn't recognise, it raises a
Home Assistant **Repairs** issue showing only the prefix (the full serial is never
shown). If that happens:

1. **Find the prefix in the table below.**
   - If it's listed as **supported here but you still got the repair**, your unit likely
     ships a prefix variant we haven't added yet (this is common — e.g. PowerOcean also
     ships as `J32E`, not just `HJ31`). **Open an issue** with the prefix and your model.
   - If it's listed as **known but not yet implemented**, or **not in the table at all**,
     **open an issue** so support can be added:
     <https://github.com/MichelFR/ha-ecoflow-iot/issues>
2. In the issue, please include: the **4-char prefix**, the **exact model name**, and —
   if you can — a redacted `quota/all` sample (Developer Tools → the integration's
   diagnostics). **Never post your full serial number** publicly.

New prefixes are cheap to add: it's usually a one-line change to the matching device's
`sn_prefixes`.

## Supported today (implemented in this integration)

Prefixes below are the **family codes the EcoFlow app itself matches on** (2–3
characters, cross-checked against the app's internal device-code registry —
reverse-engineered from the Android APK). Matching the family code rather than a
full example serial means model **variants** (a different 4th+ character) resolve
correctly instead of raising an "unsupported device" repair.

| Prefix(es) | Model | Confidence |
|---|---|---|
| `R33` | Delta 2 | high (docs + app registry) |
| `R35` | Delta 2 Max | high (app registry) |
| `R62` | River 2 Pro | high (app registry; `R60/R61/R63/R65/R70` are other River models) |
| `DCABZ` | Delta Pro | medium (app family code is broad `DC`; kept narrow to avoid collisions) |
| `MR5` | Delta Pro 3 | high (app registry) |
| `Y71` | Delta Pro Ultra | high (app registry) |
| `D3N`, `D3M` | Delta 3 Max / Delta 3 Max Plus | high (`D3M` shared — disambiguated by quota `powGetPv2`) |
| `BK` (`BK0`–`BK6`, `BK11`, `BK12`) | Stream AC / AC Pro / Ultra / Ultra X / Pro / Microinverter | high (app registry) |
| `HW51` | PowerStream | high (app registry) |
| `HW52` | Smart Plug | high (app registry) |
| `HJ3`, `J32` | PowerOcean | high (`HJ3` docs + app registry, `J32` field-observed) |
| `BX1` | Glacier | high (app registry) |
| `M10` | Power Kits | high (app registry; `M20/M3H` are other products) |
| `KT2` | WAVE (Air Conditioner) | high (app registry) |
| `SP10` | Smart Home Panel | medium |
| `HD3` | Smart Home Panel 2 | high (app registry) |

## Sources

- EcoFlow developer documentation example serials (per-device specs).
- Real user-reported serials in community issues
  (e.g. tolwi/hassio-ecoflow-cloud issues).
- ioBroker.ecoflow-mqtt device table:
  <https://github.com/foxthefox/ioBroker.ecoflow-mqtt/blob/main/lib/ecoflow_data.js>
  (most complete community list — hand-maintained, contains placeholders and at least
  one known error, so cross-check before relying on an entry).
- EcoFlow Android app device-code registry (reverse-engineered): the app stores ~110
  device family codes and identifies each model by a 2–3 char SN prefix (plus
  `productType`/`model` integers from the device-list API). The family codes above were
  cross-checked against it; ~40 further codes exist for models this integration does not
  yet support.
