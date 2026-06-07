# AGENTS.md

Working notes for AI agents and contributors on this repo (`ha-ecoflow`, a Home
Assistant custom integration for EcoFlow devices built on the **official EcoFlow
developer API**). Read this before adding devices or touching the device layer.

## Project layout

```
custom_components/ecoflow_iot/
├── api/            auth (HMAC signing), http_client, mqtt_client, errors
├── devices/        device layer, grouped into category packages that mirror the docs
│   ├── base.py     EcoFlowDevice + entity-description dataclasses
│   ├── helpers.py  reusable value_fn transforms (milli/deci/centi/round*/to_bool/…)
│   ├── commands.py command builders (stream envelope / legacy / cmdSet)
│   ├── __init__.py DEVICE_REGISTRY + resolve_device(sn, quota)
│   └── <category>/ power_stations, solar_systems, home_battery, smart_living, whole_home_backup
├── coordinator.py  MQTT-first + HTTP fallback, write dispatch, connection state
├── entity.py       shared entity base
└── sensor.py / binary_sensor.py / switch.py / number.py / select.py
docs/devices/       GENERATED per-device entity tables (do not hand-edit)
scripts/gen_device_docs.py   regenerates docs/devices/
tests/              test_auth, test_commands, test_helpers, test_registry
```

## How to fetch the EcoFlow device docs

The developer portal (`developer-eu.ecoflow.com`) is a JS SPA — fetching the page
URLs returns only the shell. The real content is a JSON API on **`api-e.ecoflow.com`**
(no auth needed for docs):

| Endpoint | Returns |
|---|---|
| `GET /iot-open/document/category/tree` | the device catalog (categories) |
| `GET /iot-open/document/search?keyword=<kw>` | search nodes; union broad keywords (`a e delta river stream power wave glacier smart panel ocean …`) to enumerate every device. Param **must** be `keyword`. |
| `GET /iot-open/document/{documentId}` | `{data:{title, ossFileUrl, fileType, categoryName}}` |

The `ossFileUrl` is a **Markdown file** containing the field tables
(`<table class="code-table">`: quota keys, types, descriptions) and the set/get
command JSON. `fileType` may say `docx` but the content is still markdown — just use it.
A doc page URL `…/document/PP?id=<id>` maps `id` straight to `{documentId}`.

Quick pull of one device:
```bash
id=2058826514068836353   # e.g. Delta 2
url=$(curl -s "https://api-e.ecoflow.com/iot-open/document/$id" | python3 -c "import sys,json;print(json.load(sys.stdin)['data']['ossFileUrl'])")
curl -s "$url" -o spec.md
```

(The API was discovered by downloading the SPA's webpack chunks from
`cdn-fe.ecoflow.com/ef-open-platform/static/js/` with `curl --compressed` and grepping
for `/iot-open/document`.)

The separate **device control/data API** (what the integration actually talks to) is the
signed open platform: `/iot-open/sign/device/{list,quota,quota/all}` and
`/iot-open/sign/certification` (MQTT creds). See `custom_components/ecoflow_iot/api/`.

## How to add a device

1. Fetch its spec markdown (above).
2. Create `devices/<category>/<model>.py` with an `EcoFlowDevice` subclass:
   - `model = "EcoFlow …"`, `sn_prefixes = (...)` (from example SNs in the spec).
   - `matches(cls, sn, quota)` — SN-prefix first; quota keys only to disambiguate a
     shared prefix or an unknown serial.
   - `entity_descriptions(self, platform)` returning the typed descriptions per
     platform (use `EcoFlow{Sensor,BinarySensor,Switch,Number,Select}EntityDescription`).
   - Read transforms via `value_fn=` from `devices/helpers.py` — do **not** redefine
     scalers locally.
   - Controls: `command_fn=lambda value, quota: <params>`; pick the device's command
     style and (if it wraps a fixed envelope) override `build_command`. Builders are in
     `devices/commands.py`:
     - **Stream / Delta 3 envelope** — `build_command` → `build_stream_command(params)`
       (`cmdId 17 / cmdFunc 254 / …`).
     - **Legacy** — `build_legacy_command(moduleType, operateType, params)` (most older
       Delta/River; `build_command` stays identity).
     - **cmdSet/id** — `build_cmd_set_command(cmdSet, id, params)` (original Delta Pro).
     - **cmdCode** — `command_fn` returns `{"cmdCode": "...", "params": {...}}` directly.
3. Register the class in `devices/__init__.py` `DEVICE_REGISTRY`. Order matters only for
   shared SN prefixes (put the more-specific class first, e.g. Delta 3 Max Plus before
   Max; Stream Microinverter before Stream).
4. Regenerate docs: `python3 scripts/gen_device_docs.py`.
5. Verify (below). The README links resolve automatically only for the categories listed
   there — add a link if you add a category.

The platform files (`sensor.py`, …) are generic and need **no changes** for a new device.

## Conventions

- `resolve_device()` is **SN-prefix-authoritative**; quota heuristics are a fallback.
- Entity descriptions use real English `name=` labels (not `translation_key`), except the
  Connection sensor and Stream operating-mode select which are translated.
- `docs/devices/**` is generated — never hand-edit; change the device module then rerun
  the generator.
- Device spec markdowns are **not committed** (licensing); fetch on demand.

## Verify

No Home Assistant install is required for the checks (they run under a stub):
```bash
python3 -m py_compile custom_components/ecoflow_iot/**/*.py        # syntax
python3 tests/test_registry.py                                     # import + SN resolution
python3 tests/test_auth.py tests/test_commands.py tests/test_helpers.py  # unit (or pytest)
python3 scripts/gen_device_docs.py                                 # docs in sync
```
`tests/test_registry.py` imports the whole device package under a fake `homeassistant`
module and asserts each SN resolves to the right class with unique entity keys.
