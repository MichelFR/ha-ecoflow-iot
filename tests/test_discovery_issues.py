"""Discovery repairs are linked to the config entry and refreshed.

Stale "unsupported device" / "not served" repairs must be deleted on the next
setup, current ones kept (with their ignore flag), and a device whose quota
fetch merely failed must not lose its repair.

Run directly: ``python3 tests/test_discovery_issues.py`` (or via pytest).
"""

from __future__ import annotations

import asyncio
import re
import sys
import types
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import test_coordinator_staleness as base  # noqa: E402  (installs the HA stub)

coordinator_module = base.coordinator_module
EcoFlowCoordinator = base.EcoFlowCoordinator
EcoFlowApiError = base.EcoFlowApiError
EcoFlowError = base.EcoFlowError


class FakeIssueRegistry:
    """Just enough of HA 2026.11's issue registry refresh semantics."""

    def __init__(self) -> None:
        self.issues: dict[str, dict] = {}
        self._refresh: dict | None = None

    def _touch(self, issue_id: str) -> None:
        if self._refresh is not None:
            self._refresh["untouched"].discard(issue_id)

    def async_create_issue(self, hass, domain, issue_id, **kwargs) -> None:
        self.issues[issue_id] = {**self.issues.get(issue_id, {}), **kwargs}
        self._touch(issue_id)

    def async_keep_issue(self, hass, domain, issue_id) -> None:
        self._touch(issue_id)

    def async_refresh_issues(self, hass, domain, *, issue_id_pattern=None,
                             issue_ids=None, config_entry_id=None):
        reg = self
        pattern = re.compile(issue_id_pattern or "")
        scope = {
            i for i, data in self.issues.items()
            if pattern.match(i)
            and (config_entry_id is None or data.get("config_entry_id") == config_entry_id)
        }

        class Refresh:
            def __enter__(self_inner):
                reg._refresh = {"untouched": set(scope)}
                return self_inner

            def __exit__(self_inner, exc_type, exc, tb):
                untouched = reg._refresh["untouched"]
                reg._refresh = None
                if exc_type is None:
                    for issue_id in untouched:
                        reg.issues.pop(issue_id, None)

        return Refresh()


class Http:
    def __init__(self, listed, quotas) -> None:
        self.listed = listed
        self.quotas = quotas

    async def device_list(self):
        return [{"sn": sn, "online": 1} for sn in self.listed]

    async def get_all_quota(self, sn):
        result = self.quotas[sn]
        if isinstance(result, Exception):
            raise result
        return result


def make(reg: FakeIssueRegistry, http: Http, entries: int = 1) -> EcoFlowCoordinator:
    coordinator_module.ir = types.SimpleNamespace(
        IssueSeverity=types.SimpleNamespace(WARNING="warning"),
        async_create_issue=reg.async_create_issue,
        async_keep_issue=reg.async_keep_issue,
        async_refresh_issues=reg.async_refresh_issues,
    )
    coord = EcoFlowCoordinator.__new__(EcoFlowCoordinator)
    coord.hass = types.SimpleNamespace(
        config_entries=types.SimpleNamespace(
            async_entries=lambda domain: [object()] * entries
        )
    )
    coord.config_entry = types.SimpleNamespace(entry_id="entry1")
    coord._http = http
    coord._enable_mqtt = False
    coord.devices = {}
    coord.unmapped = {}
    return coord


def setup(coord) -> None:
    try:
        asyncio.run(coord.async_setup())
    except Exception:  # UpdateFailed stub: nothing resolvable, that's fine here
        pass


def test_stale_repair_deleted_current_kept_and_linked():
    reg = FakeIssueRegistry()
    reg.issues["unsupported_device_OLD1"] = {"ignored": True}  # pre-2026.11, no owner
    reg.issues["device_not_served_P351"] = {"ignored": True}
    reg.issues["other_issue"] = {}
    http = Http(["P351AAAA"], {"P351AAAA": EcoFlowApiError("1006", "not allowed")})
    coord = make(reg, http)
    coord.config_entry.entry_id = "entry1"
    setup(coord)

    assert "unsupported_device_OLD1" not in reg.issues  # device gone -> repair gone
    assert reg.issues["device_not_served_P351"]["config_entry_id"] == "entry1"
    assert reg.issues["device_not_served_P351"]["ignored"] is True  # state kept
    assert "other_issue" in reg.issues  # outside the pattern


def test_failed_fetch_keeps_existing_repair():
    reg = FakeIssueRegistry()
    reg.issues["device_not_served_P351"] = {"config_entry_id": "entry1"}
    http = Http(["P351AAAA"], {"P351AAAA": EcoFlowError("timeout")})
    setup(make(reg, http))

    assert "device_not_served_P351" in reg.issues


def test_multiple_entries_only_refresh_own_repairs():
    reg = FakeIssueRegistry()
    reg.issues["unsupported_device_OTHR"] = {"config_entry_id": "entry2"}
    reg.issues["unsupported_device_MINE"] = {"config_entry_id": "entry1"}
    http = Http([], {})
    setup(make(reg, http, entries=2))

    assert "unsupported_device_OTHR" in reg.issues
    assert "unsupported_device_MINE" not in reg.issues


if __name__ == "__main__":
    fails = 0
    for name, fn in list(globals().items()):
        if name.startswith("test_") and callable(fn):
            try:
                fn()
                print(f"OK  {name}")
            except AssertionError as err:
                fails += 1
                print(f"XX  {name}: {err!r}")
    print("\nRESULT:", "PASS" if not fails else f"{fails} FAIL")
    sys.exit(1 if fails else 0)
