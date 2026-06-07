"""Pure (HA-independent) command-payload builders.

Kept free of Home Assistant imports so the payload shaping can be unit-tested in
isolation. The Stream family uses the binary-protocol envelope documented for the
public API; only the ``params`` dict differs per control.
"""

from __future__ import annotations

from typing import Any

# Fixed routing fields the Stream firmware expects on every set command.
STREAM_ENVELOPE: dict[str, Any] = {
    "cmdId": 17,
    "cmdFunc": 254,
    "dirDest": 1,
    "dirSrc": 1,
    "dest": 2,
    "needAck": True,
}


def build_stream_command(params: dict[str, Any]) -> dict[str, Any]:
    """Wrap a Stream ``params`` payload in the routing envelope.

    The caller (coordinator) later injects ``sn`` for both transports and
    ``id``/``version`` for the MQTT transport.
    """
    return {**STREAM_ENVELOPE, "params": params}


def build_legacy_command(
    module_type: int, operate_type: str, params: dict[str, Any]
) -> dict[str, Any]:
    """Build a legacy ``moduleType``/``operateType`` command body.

    Used by the older power stations (Delta / River etc.). The coordinator adds
    ``sn``/``id``/``version``.
    """
    return {
        "moduleType": module_type,
        "operateType": operate_type,
        "params": params,
    }


def build_cmd_set_command(
    cmd_set: int, cmd_id: int, params: dict[str, Any] | None = None
) -> dict[str, Any]:
    """Build a ``cmdSet``/``cmdId`` style command body (some Delta/River models).

    The values are merged into ``params`` alongside ``cmdSet`` and ``id`` as the
    firmware expects.
    """
    body = {"cmdSet": cmd_set, "id": cmd_id}
    if params:
        body.update(params)
    return {"params": body}
