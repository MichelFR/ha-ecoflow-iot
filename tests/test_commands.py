"""Unit tests for the HA-independent command-payload builder."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

_PATH = (
    Path(__file__).resolve().parents[1]
    / "custom_components"
    / "ecoflow_iot"
    / "devices"
    / "commands.py"
)
_spec = importlib.util.spec_from_file_location("ef_commands", _PATH)
commands = importlib.util.module_from_spec(_spec)
sys.modules["ef_commands"] = commands
_spec.loader.exec_module(commands)


def test_build_stream_command_wraps_envelope():
    payload = commands.build_stream_command({"cfgRelay2Onoff": True})
    assert payload == {
        "cmdId": 17,
        "cmdFunc": 254,
        "dirDest": 1,
        "dirSrc": 1,
        "dest": 2,
        "needAck": True,
        "params": {"cfgRelay2Onoff": True},
    }


def test_build_stream_command_does_not_mutate_envelope():
    commands.build_stream_command({"a": 1})
    commands.build_stream_command({"b": 2})
    # The shared template must keep its original keys only.
    assert "params" not in commands.STREAM_ENVELOPE
