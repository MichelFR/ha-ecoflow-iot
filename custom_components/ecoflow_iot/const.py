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
SET_ACK_TIMEOUT: Final = 8.0  # seconds to await an MQTT set_reply before HTTP fallback
# How many leading SN characters identify a device type. Shown to the user for
# unsupported devices (the full serial is never surfaced).
SN_PREFIX_LEN: Final = 4

MANUFACTURER: Final = "EcoFlow"
