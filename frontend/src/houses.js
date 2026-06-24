/* Assets for the house card — the whole-home energy-flow illustration, served
 * from the integration's www/ folder (see device-image.js for the same
 * pattern).
 *
 * Everything composites in one coordinate system: the house renders are
 * 2340×1680 and every overlay (battery box image + flow Lotties) is 1170×840 —
 * the exact half-scale — so an overlay pinned to the same box aligns
 * pixel-perfectly with the house. */

import { ASSET_BASE } from "./const.js";

// The house architectural styles, each shipped as a "day" and a "night" render
// (space_common_bg_day_<n> / _night_<n>).
export const HOUSE_STYLES = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const DEFAULT_HOUSE_STYLE = "1";

// Day / night picture. "auto" follows the time of day (the sun, falling back to
// the active theme's light/dark mode).
export const HOUSE_MODES = ["auto", "day", "night"];

export const DEFAULT_HOUSE_MODE = "auto";

/* Resolve "auto" to "day" or "night": night when the sun is below the horizon,
 * or when no sun entity exists, when the UI theme is dark. */
export function resolveHouseMode(mode, hass) {
  if (mode === "day" || mode === "night") return mode;
  const sun = hass?.states?.["sun.sun"];
  if (sun) return sun.state === "below_horizon" ? "night" : "day";
  return hass?.themes?.darkMode ? "night" : "day";
}

export function houseUrl(style, mode, hass) {
  const key = HOUSE_STYLES.includes(style) ? style : DEFAULT_HOUSE_STYLE;
  return `${ASSET_BASE}/houses/${resolveHouseMode(mode, hass)}_${key}.webp`;
}

/* A fixed preview image (day render) for a style, used by the editor gallery. */
export function housePreviewUrl(style) {
  const key = HOUSE_STYLES.includes(style) ? style : DEFAULT_HOUSE_STYLE;
  return `${ASSET_BASE}/houses/day_${key}.webp`;
}

// The battery/inverter device render that sits in front of the house. The app
// picks this per device type; the Stream uses re_space_system_battery.
export function batteryBoxUrl() {
  return `${ASSET_BASE}/houses/re_space_system_battery.webp`;
}

export function flowUrl(name) {
  return `${ASSET_BASE}/flows/${name}.json`;
}

// Solar flow drawn for the selected house (re_space_solar_1..7) — each house
// render has its panels in a particular place, so the flow follows the house.
// Houses 1..7 use the matching flow; 8 and 9 reuse the closest-fitting one.
const SOLAR_FLOW_BY_HOUSE = { 8: 3, 9: 6 };

export function solarFlowName(houseStyle) {
  const route =
    SOLAR_FLOW_BY_HOUSE[houseStyle] || Math.min(7, Math.max(1, houseStyle || 1));
  return `re_space_solar_${route}`;
}

// Fixed flow assets for the remaining paths (all in www/flows/).
export const FLOWS = {
  grid_in: "re_space_gridin",
  grid_out: "re_space_gridout",
  home: "re_space_home",
  bat_in: "jt303_space_battery_input",
  bat_out: "jt303_space_battery_output",
  bat_chg: "re_space_bat_chg",
  bat_dsg: "re_space_bat_dsg",
  bat_soc: "re_space_bat_soc",
};
