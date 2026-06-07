"""Request signing for the EcoFlow open platform API.

The platform authenticates every request with an HMAC-SHA256 signature built from
the (flattened, ASCII-sorted) request parameters plus ``accessKey``, ``nonce`` and
``timestamp``. See the developer docs ("generalInfo") for the canonical algorithm.
"""

from __future__ import annotations

import hashlib
import hmac
import random
import time
from typing import Any


def flatten_params(params: Any, prefix: str = "") -> dict[str, str]:
    """Flatten nested dicts/lists into dotted/indexed ``key -> value`` string pairs.

    Examples:
        ``{"a": {"b": 1}}``        -> ``{"a.b": "1"}``
        ``{"ids": [1, 2]}``        -> ``{"ids[0]": "1", "ids[1]": "2"}``
        ``{"l": [{"id": 1}]}``     -> ``{"l[0].id": "1"}``

    Booleans are rendered as lowercase ``true``/``false`` and numbers as their
    plain string form, matching the reference implementations.
    """
    flat: dict[str, str] = {}

    if isinstance(params, dict):
        for key, value in params.items():
            child = f"{prefix}.{key}" if prefix else str(key)
            flat.update(flatten_params(value, child))
    elif isinstance(params, (list, tuple)):
        for index, value in enumerate(params):
            flat.update(flatten_params(value, f"{prefix}[{index}]"))
    else:
        flat[prefix] = _stringify(params)

    return flat


def _stringify(value: Any) -> str:
    """Render a scalar the way the signing algorithm expects."""
    if isinstance(value, bool):
        return "true" if value else "false"
    return str(value)


def build_sign_string(params: dict[str, Any] | None, suffix: str) -> str:
    """Return the canonical string that gets HMAC-signed.

    ``suffix`` is the already-built ``accessKey=..&nonce=..&timestamp=..`` part.
    """
    if not params:
        return suffix
    flat = flatten_params(params)
    sorted_pairs = "&".join(f"{key}={flat[key]}" for key in sorted(flat))
    return f"{sorted_pairs}&{suffix}"


def query_string(params: dict[str, Any]) -> str:
    """Return the flattened, ASCII-sorted query string sent for signed GET calls.

    The exact bytes used for signing must match what is appended to the URL.
    """
    flat = flatten_params(params)
    return "&".join(f"{key}={flat[key]}" for key in sorted(flat))


def generate_nonce() -> str:
    """Return a random 6-digit nonce."""
    return f"{random.randint(0, 999999):06d}"


def current_timestamp_ms() -> str:
    """Return the current time in milliseconds as a string."""
    return str(int(time.time() * 1000))


def sign_headers(
    access_key: str,
    secret_key: str,
    params: dict[str, Any] | None = None,
    *,
    nonce: str | None = None,
    timestamp: str | None = None,
) -> dict[str, str]:
    """Compute the four signed headers for a request.

    Returns a dict with ``accessKey``, ``nonce``, ``timestamp`` and ``sign``.
    """
    nonce = nonce or generate_nonce()
    timestamp = timestamp or current_timestamp_ms()
    suffix = f"accessKey={access_key}&nonce={nonce}&timestamp={timestamp}"
    sign_string = build_sign_string(params, suffix)
    signature = hmac.new(
        secret_key.encode("utf-8"),
        sign_string.encode("utf-8"),
        hashlib.sha256,
    ).hexdigest()
    return {
        "accessKey": access_key,
        "nonce": nonce,
        "timestamp": timestamp,
        "sign": signature,
    }
