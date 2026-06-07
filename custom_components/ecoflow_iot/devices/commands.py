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
