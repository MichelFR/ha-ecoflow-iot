/* The grid figure + feed-in badge, shared by the Energy, House and Space cards
 * so all three read and present the grid identically. */

import { html } from "lit";
import { ACTIVE_W } from "./flows.js";
import { localize } from "./localize.js";

/* One grid reading for every card, from a deriveFlowStates() result whose
 * `grid` is import-positive.
 *
 * The default ("app") figure prefers the whole-home split: "From grid" is
 * load_from_grid (the home load actually met by the grid) and "To grid" the
 * derived exportToGrid — the device's own grid port is the wrong signal for
 * both (it reads 0 W / negative while the device merely feeds the home). With
 * grid_source "device" the cards feed loadFrom* as null and the port value is
 * the figure.
 *
 * `overridden` marks a user-configured grid entity/template, which then IS the
 * figure (import-positive) — previously the derived split shadowed such an
 * override on the House card (#8, #9). */
export function gridInput(config, readNum, readEntityNum) {
  if (config.grid_source === "entity" && config.grid_entity) {
    return {
      grid: readEntityNum(config.grid_entity),
      overridden: true,
      entityId: config.grid_entity,
    };
  }
  const ents = config.entities || {};
  if (ents["sensor.grid_power"]) {
    return { grid: readNum("sensor.grid_power"), overridden: true };
  }
  if (ents["sensor.sys_grid_power"]) {
    const raw = readNum("sensor.sys_grid_power");
    return { grid: raw == null ? null : -raw, overridden: true };
  }
  const grid = readNum("sensor.grid_power");
  if (grid != null) return { grid, overridden: false };
  const raw = readNum("sensor.sys_grid_power");
  return { grid: raw == null ? null : -raw, overridden: false };
}

export function gridReading(s, overridden = false) {
  const grid = Number.isFinite(s.grid) ? s.grid : null;
  if (overridden) {
    return {
      value: grid == null ? null : Math.abs(grid),
      importing: grid != null && grid > ACTIVE_W,
      exporting: grid != null && grid < -ACTIVE_W,
      fromSplit: false,
    };
  }
  const fromGrid = Number.isFinite(s.loadFromGrid)
    ? Math.max(0, s.loadFromGrid)
    : null;
  const importing =
    fromGrid != null ? fromGrid > ACTIVE_W : grid != null && grid > ACTIVE_W;
  const exporting = !importing && s.exportToGrid > ACTIVE_W;
  return {
    value: importing
      ? fromGrid != null
        ? fromGrid
        : grid
      : exporting
        ? s.exportToGrid
        : fromGrid != null
          ? 0
          : grid != null
            ? Math.abs(grid)
            : null,
    importing,
    exporting,
    fromSplit: fromGrid != null,
  };
}

/* The EcoFlow app marks the grid figure with an amber badge while grid feed-in
 * is switched off; mirror it next to each card's grid value. Tapping the badge
 * opens the feed-in switch. Renders nothing when the switch is missing or on. */
const BADGE_STYLE =
  "color:var(--warning-color,#f5a623);--mdc-icon-size:15px;" +
  "cursor:pointer;vertical-align:middle;margin-left:2px;";

export function feedInOffBadge(host) {
  const id = host._map?.["switch.feed_in"];
  const st = id ? host.hass?.states?.[id] : undefined;
  if (!st || st.state !== "off") return "";
  const open = (e) => {
    e.stopPropagation();
    host.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId: id },
        bubbles: true,
        composed: true,
      })
    );
  };
  return html`<ha-icon
    icon="mdi:transmission-tower-off"
    style=${BADGE_STYLE}
    title=${localize(host.hass, "card.feed_in_off")}
    @click=${open}
  ></ha-icon>`;
}
