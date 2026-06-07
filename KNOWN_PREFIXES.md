# EcoFlow serial-number prefixes

EcoFlow serial numbers start with a device-type code (e.g. `R331…` = Delta 2,
`HJ31…` = PowerOcean). This integration resolves each device **by its SN prefix**
(see `sn_prefixes` on each device class in `custom_components/ecoflow_iot/devices/`).

> ⚠️ **There is no official EcoFlow prefix→model table.** EcoFlow's own API resolves
> devices by a `productName`/`deviceType` field, not by serial prefix, and publishes no
> prefix registry. The list below is **community best-effort**, compiled from the
> EcoFlow developer-doc example serials, real user-reported serials, and the
> [ioBroker.ecoflow-mqtt](https://github.com/foxthefox/ioBroker.ecoflow-mqtt) device
> table (`lib/ecoflow_data.js`). Treat it as a reference, not ground truth.

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
     <https://github.com/MichelFR/ha-ecoflow/issues>
2. In the issue, please include: the **4-char prefix**, the **exact model name**, and —
   if you can — a redacted `quota/all` sample (Developer Tools → the integration's
   diagnostics). **Never post your full serial number** publicly.

New prefixes are cheap to add: it's usually a one-line change to the matching device's
`sn_prefixes`.

## Supported today (implemented in this integration)

| Prefix(es) | Model | Confidence |
|---|---|---|
| `R331` | Delta 2 | high (docs + multiple sources) |
| `R351` | Delta 2 Max | medium |
| `R621` | River 2 Pro | medium |
| `DCABZ` | Delta Pro | medium |
| `MR51` | Delta Pro 3 | high |
| `Y711` | Delta Pro Ultra | high |
| `D3N1`, `D3M1` | Delta 3 Max / Delta 3 Max Plus | high (`D3M1` shared — disambiguated by quota `powGetPv2`) |
| `BK` (`BK11`/`BK31`/`BK41`/`BK51`/`BK61`) | Stream AC / AC Pro / Ultra / Ultra X / Pro / Microinverter | high |
| `HW51` | PowerStream | medium |
| `HW52` | Smart Plug | medium |
| `HJ31`, `J32E` | PowerOcean | high (`HJ31` docs, `J32E` field-observed) |
| `BX11Z` | Glacier | medium |
| `M106Z`/`M109Z`/`M102Z`/`M10EZ`/`M10E1`/`M106W` | Power Kits | medium |
| `KT21ZCH2` | WAVE (Air Conditioner) | medium |
| `SP10` | Smart Home Panel | medium |
| `HD31` | Smart Home Panel 2 | medium |

## Sources

- EcoFlow developer documentation example serials (per-device specs).
- Real user-reported serials in community issues
  (e.g. tolwi/hassio-ecoflow-cloud issues).
- ioBroker.ecoflow-mqtt device table:
  <https://github.com/foxthefox/ioBroker.ecoflow-mqtt/blob/main/lib/ecoflow_data.js>
  (most complete community list — hand-maintained, contains placeholders and at least
  one known error, so cross-check before relying on an entry).
