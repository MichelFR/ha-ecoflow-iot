"""Constants for the EcoFlow IoT integration."""

from __future__ import annotations

from datetime import timedelta
from typing import Final

DOMAIN: Final = "ecoflow_iot"

# Config entry keys
CONF_ACCESS_KEY: Final = "access_key"
CONF_SECRET_KEY: Final = "secret_key"
CONF_REGION: Final = "region"

# Options keys
CONF_POLL_INTERVAL: Final = "poll_interval"
CONF_MQTT_STALE_SECONDS: Final = "mqtt_stale_seconds"
CONF_MQTT_REFRESH_INTERVAL: Final = "mqtt_refresh_interval"
CONF_ENABLE_MQTT: Final = "enable_mqtt"
CONF_MQTT_INSECURE_TLS: Final = "mqtt_insecure_tls"
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

# operateType that asks a device to report its full latest quota snapshot. This
# is the refresh message the EcoFlow app publishes to the device's get topic
# (reverse-engineered from the Android app's MqttManager.fetchAllDeviceData).
OPERATE_LATEST_QUOTAS: Final = "latestQuotas"

# Defaults / tuning.
DEFAULT_POLL_INTERVAL: Final = 60  # seconds
INTEGRAL_WRITE_INTERVAL: Final = timedelta(seconds=10)
INTEGRAL_WRITE_THRESHOLD_WH: Final = 1.0
DEFAULT_MQTT_STALE_SECONDS: Final = 120  # consider MQTT stale after this many seconds
# How often to actively pull fresh data over MQTT by publishing a "latestQuotas"
# get request (0 disables). The official app does this rather than relying purely
# on the broker pushing — devices throttle their push cadence when idle, so a
# passive subscriber sees data go stale even while the connection stays up.
DEFAULT_MQTT_REFRESH_INTERVAL: Final = 20  # seconds
DEFAULT_ENABLE_MQTT: Final = True
DEFAULT_MQTT_INSECURE_TLS: Final = False
# Consecutive poll ticks with the MQTT connection nominally CONNECTED but every
# device stale before the coordinator force-reconnects the broker session. A
# connection can claim to be up while delivering nothing (broker-side
# subscription loss, half-open socket); only a reconnect restores live data.
MQTT_WATCHDOG_TICKS: Final = 3
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


def redact_sn(sn: str) -> str:
    """Serial as shown in logs and error messages: type prefix + last 3 chars."""
    if len(sn) <= SN_PREFIX_LEN + 3:
        return sn[:SN_PREFIX_LEN] + "…"
    return f"{sn[:SN_PREFIX_LEN]}…{sn[-3:]}"

# quota/all business code for devices the open API refuses to serve at all
# ("current device is not allowed to get device info"), e.g. Delta Mini, River 2.
API_CODE_DEVICE_NOT_ALLOWED: Final = "1006"

MANUFACTURER: Final = "EcoFlow"

# --- Bundled Lovelace card ---------------------------------------------------
# The integration ships an "EcoFlow Energy" card under ``www/`` and serves that
# whole folder over HTTP at ``/ecoflow_iot`` (the card JS plus device images).
# The card JS is auto-registered as a Lovelace resource in storage mode, so most
# users never have to add it by hand.
CARD_ASSET_BASE: Final = f"/{DOMAIN}"  # serves custom_components/ecoflow_iot/www
CARD_FILENAME: Final = "ecoflow-energy-card.js"
CARD_URL: Final = f"{CARD_ASSET_BASE}/{CARD_FILENAME}"
