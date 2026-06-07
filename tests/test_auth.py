"""Unit tests for the request-signing logic (no Home Assistant required)."""

from __future__ import annotations

import hashlib
import hmac
import importlib.util
import sys
from pathlib import Path

# Load the auth module directly so the test suite does not import Home Assistant.
_AUTH_PATH = (
    Path(__file__).resolve().parents[1]
    / "custom_components"
    / "ecoflow_iot"
    / "api"
    / "auth.py"
)
_spec = importlib.util.spec_from_file_location("ef_auth", _AUTH_PATH)
auth = importlib.util.module_from_spec(_spec)
sys.modules["ef_auth"] = auth
_spec.loader.exec_module(auth)


def test_hmac_reference_vector():
    """The signing primitive matches the canonical HMAC-SHA256 test vector."""
    expected = hmac.new(b"secret", b"hello", hashlib.sha256).hexdigest()
    assert expected == (
        "88aab3ede8d3adf94d26ab90d3bafd4a2083070c3bcce9c014ee04a443847c0b"
    )


def test_flatten_nested_and_arrays():
    """Nested dicts, scalar arrays and object arrays flatten as documented."""
    flat = auth.flatten_params(
        {
            "name": "demo1",
            "ids": [1, 2, 3],
            "deviceInfo": {"id": 1},
            "deviceList": [{"id": 1}, {"id": 2}],
        }
    )
    assert flat == {
        "name": "demo1",
        "ids[0]": "1",
        "ids[1]": "2",
        "ids[2]": "3",
        "deviceInfo.id": "1",
        "deviceList[0].id": "1",
        "deviceList[1].id": "2",
    }


def test_booleans_render_lowercase():
    assert auth.flatten_params({"a": True, "b": False}) == {"a": "true", "b": "false"}


def test_sign_string_sorts_and_appends_suffix():
    """The canonical sign string is ASCII-sorted with the auth triplet appended."""
    suffix = "accessKey=ak&nonce=345164&timestamp=1671171709428"
    sign_string = auth.build_sign_string(
        {
            "name": "demo1",
            "ids": [1, 2, 3],
            "deviceInfo": {"id": 1},
            "deviceList": [{"id": 1}, {"id": 2}],
        },
        suffix,
    )
    assert sign_string == (
        "deviceInfo.id=1&deviceList[0].id=1&deviceList[1].id=2&"
        "ids[0]=1&ids[1]=2&ids[2]=3&name=demo1&" + suffix
    )


def test_sign_string_no_params_is_just_suffix():
    suffix = "accessKey=ak&nonce=1&timestamp=2"
    assert auth.build_sign_string(None, suffix) == suffix
    assert auth.build_sign_string({}, suffix) == suffix


def test_sign_headers_shape_and_determinism():
    headers = auth.sign_headers(
        "ak", "sk", {"sn": "X"}, nonce="345164", timestamp="1671171709428"
    )
    assert set(headers) == {"accessKey", "nonce", "timestamp", "sign"}
    assert headers["accessKey"] == "ak"
    # Recompute the signature independently.
    sign_string = "sn=X&accessKey=ak&nonce=345164&timestamp=1671171709428"
    expected = hmac.new(
        b"sk", sign_string.encode(), hashlib.sha256
    ).hexdigest()
    assert headers["sign"] == expected


def test_query_string_matches_signed_params():
    assert auth.query_string({"b": 2, "a": 1}) == "a=1&b=2"
