"""HTTP REST client for the EcoFlow open platform API."""

from __future__ import annotations

import logging
from typing import Any

from aiohttp import ClientError, ClientSession

from ..const import (
    PATH_CERTIFICATION,
    PATH_DEVICE_LIST,
    PATH_QUOTA,
    PATH_QUOTA_ALL,
    REGION_BASE_URLS,
)
from . import auth
from .errors import EcoFlowApiError, EcoFlowAuthError, EcoFlowConnectionError

_LOGGER = logging.getLogger(__name__)

# Business codes that indicate the credentials themselves are bad.
_AUTH_CODES = {"6042", "7015", "401", "7005"}


class EcoFlowHttpClient:
    """Signed REST client.

    One instance per config entry; reused for validation, polling and the write
    fallback path.
    """

    def __init__(
        self,
        session: ClientSession,
        region: str,
        access_key: str,
        secret_key: str,
    ) -> None:
        """Initialise the client for a region and credential pair."""
        self._session = session
        self._access_key = access_key
        self._secret_key = secret_key
        self._base_url = REGION_BASE_URLS.get(region, REGION_BASE_URLS["eu"])

    async def device_list(self) -> list[dict[str, Any]]:
        """Return the list of devices bound to the developer account."""
        data = await self._request("GET", PATH_DEVICE_LIST)
        return data if isinstance(data, list) else []

    async def get_all_quota(self, sn: str) -> dict[str, Any]:
        """Return the full quota snapshot for a device."""
        data = await self._request("GET", PATH_QUOTA_ALL, params={"sn": sn})
        return data if isinstance(data, dict) else {}

    async def set_quota(self, sn: str, command: dict[str, Any]) -> dict[str, Any]:
        """Send a control command via the REST fallback path.

        ``command`` is the device-specific payload (already containing ``params``
        and any routing fields); ``sn`` is injected/overwritten here.
        """
        body = {**command, "sn": sn}
        return await self._request("PUT", PATH_QUOTA, body=body) or {}

    async def get_certification(self) -> dict[str, Any]:
        """Return MQTT broker credentials and connection details."""
        data = await self._request("GET", PATH_CERTIFICATION)
        if not isinstance(data, dict) or "certificateAccount" not in data:
            raise EcoFlowApiError("0", "certification response missing fields")
        return data

    async def _request(
        self,
        method: str,
        path: str,
        *,
        params: dict[str, Any] | None = None,
        body: dict[str, Any] | None = None,
    ) -> Any:
        """Perform a signed request and unwrap the ``data`` field."""
        sign_params = params if method == "GET" else body
        headers = auth.sign_headers(
            self._access_key, self._secret_key, sign_params
        )
        url = f"{self._base_url}{path}"
        if method == "GET" and params:
            url = f"{url}?{auth.query_string(params)}"

        request_kwargs: dict[str, Any] = {"headers": headers}
        if body is not None:
            headers["Content-Type"] = "application/json;charset=UTF-8"
            request_kwargs["json"] = body

        try:
            async with self._session.request(
                method, url, **request_kwargs
            ) as response:
                response.raise_for_status()
                payload = await response.json()
        except ClientError as err:
            raise EcoFlowConnectionError(str(err)) from err

        code = str(payload.get("code"))
        if code != "0":
            message = payload.get("message", "unknown error")
            if code in _AUTH_CODES or "accessKey" in message:
                raise EcoFlowAuthError(message)
            raise EcoFlowApiError(code, message)

        return payload.get("data")
