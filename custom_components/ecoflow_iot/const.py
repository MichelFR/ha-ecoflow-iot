"""Constants for the EcoFlow IoT integration."""

from __future__ import annotations

from typing import Final

DOMAIN: Final = "ecoflow_iot"

# Config entry keys
CONF_ACCESS_KEY: Final = "access_key"
CONF_SECRET_KEY: Final = "secret_key"
CONF_REGION: Final = "region"

# Options keys
CONF_POLL_INTERVAL: Final = "poll_interval"
CONF_MQTT_STALE_SECONDS: Final = "mqtt_stale_seconds"
CONF_ENABLE_MQTT: Final = "enable_mqtt"
CONF_INVERT_GRID_SIGN: Final = "invert_grid_sign"
# Transient options-flow checkbox (never persisted): queues a one-shot reset of
# the grid energy totals, applied when the entities are recreated on reload.
CONF_RESET_GRID_ENERGY: Final = "reset_grid_energy"
# Integral-energy sensor keys the reset checkbox zeroes.
RESET_ENERGY_KEYS: Final = ("grid_import_energy", "grid_export_energy")
# hass.data slot holding the set of entity unique_ids queued for reset.
DATA_RESET_ENERGY_IDS: Final = "reset_energy_ids"

# Regions -> REST base URL.
REGION_EU: Final = "eu"
REGION_GLOBAL: Final = "global"

REGION_BASE_URLS: Final[dict[str, str]] = {
    REGION_EU: "https://api-e.ecoflow.com",
    REGION_GLOBAL: "https://api.ecoflow.com",
}
DEFAULT_REGION: Final = REGION_EU

# REST API paths (all under the signed open platform).
PATH_DEVICE_LIST: Final = "/iot-open/sign/device/list"
PATH_QUOTA_ALL: Final = "/iot-open/sign/device/quota/all"
PATH_QUOTA: Final = "/iot-open/sign/device/quota"
PATH_CERTIFICATION: Final = "/iot-open/sign/certification"

# MQTT topic suffixes: /open/{certificateAccount}/{sn}/<suffix>
TOPIC_PREFIX: Final = "/open"
TOPIC_QUOTA: Final = "quota"
TOPIC_STATUS: Final = "status"
TOPIC_SET: Final = "set"
TOPIC_SET_REPLY: Final = "set_reply"
TOPIC_GET: Final = "get"
TOPIC_GET_REPLY: Final = "get_reply"

# Defaults / tuning.
DEFAULT_POLL_INTERVAL: Final = 60  # seconds
DEFAULT_MQTT_STALE_SECONDS: Final = 120  # consider MQTT stale after this many seconds
DEFAULT_ENABLE_MQTT: Final = True
# Stream firmware reports gridConnectionPower with the opposite sign to Home
# Assistant's grid convention (it reports feeding the grid as POSITIVE, despite
# the docs claiming feed-in is negative). Default to normalising it so that
# import is positive / export is negative; users whose unit already matches HA
# can turn this off.
DEFAULT_INVERT_GRID_SIGN: Final = True
SET_ACK_TIMEOUT: Final = 8.0  # seconds to await an MQTT set_reply before HTTP fallback
# How many leading SN characters identify a device type. Shown to the user for
# unsupported devices (the full serial is never surfaced).
SN_PREFIX_LEN: Final = 4

MANUFACTURER: Final = "EcoFlow"

# --- Bundled Lovelace card ---------------------------------------------------
# The integration ships an "EcoFlow Energy" card under ``www/`` and serves that
# whole folder over HTTP at ``/ecoflow_iot`` (the card JS plus device images).
# The card JS is auto-registered as a Lovelace resource in storage mode, so most
# users never have to add it by hand.
CARD_ASSET_BASE: Final = f"/{DOMAIN}"  # serves custom_components/ecoflow_iot/www
CARD_FILENAME: Final = "ecoflow-energy-card.js"
CARD_URL: Final = f"{CARD_ASSET_BASE}/{CARD_FILENAME}"
