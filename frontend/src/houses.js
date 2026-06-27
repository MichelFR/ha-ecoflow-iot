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

/* Whether a config carries a user-uploaded house image (light and/or dark). */
export function hasCustomHouseImage(config) {
  return !!(config?.house_image || config?.house_image_dark);
}

/* The house render to show: a custom upload when present (mode-aware — the dark
 * variant at night, falling back to whichever single variant was uploaded),
 * otherwise the selected built-in style. */
export function houseImageUrl(config, hass) {
  const light = config?.house_image;
  const dark = config?.house_image_dark;
  if (light || dark) {
    const mode = resolveHouseMode(config?.house_mode, hass);
    return mode === "night" ? dark || light : light || dark;
  }
  return houseUrl(config?.house, config?.house_mode, hass);
}

/* A fixed preview image (day render) for a style, used by the editor gallery. */
export function housePreviewUrl(style) {
  const key = HOUSE_STYLES.includes(style) ? style : DEFAULT_HOUSE_STYLE;
  return `${ASSET_BASE}/houses/day_${key}.webp`;
}

/* Every bundled house render, as { name, url } — used by the editor to bundle
 * the whole set into a zip so users can trace one into a custom illustration. */
export function houseAssetFiles() {
  const files = [];
  for (const mode of ["day", "night"])
    for (const key of HOUSE_STYLES)
      files.push({
        name: `${mode}_${key}.webp`,
        url: `${ASSET_BASE}/houses/${mode}_${key}.webp`,
      });
  return files;
}

// The battery/inverter device renders that sit in front of the house. The app
// picks one per device type; here it's selectable. Keys are the asset names;
// friendly labels come from translations (house.battery.<key>).
export const BATTERY_BOXES = [
  "re_space_system_battery",
  "re_space_system_battery_gateway",
  "re305_or_re306_battery",
  "re305_or_re306_device",
  "re305_device",
  "re306_device",
  "re306_dpu_battery",
  "po_space_re305_battery",
  "po_space_battery",
  "po_space_battery_system_battery",
  "po_space_battery_ats",
  "po_space_battery_shp32",
  "po_space_battery_system_dpu",
  "jt303_space_battery",
  "jt321_space_battery",
  "dc303_space_battery",
];

// EcoFlow Stream — the device this card is built around.
export const DEFAULT_BATTERY = "re_space_system_battery";

export function batteryBoxUrl(key) {
  const k = BATTERY_BOXES.includes(key) ? key : DEFAULT_BATTERY;
  return `${ASSET_BASE}/batteries/${k}.webp`;
}

// The on-battery overlays (SoC fill, charge/discharge glow, battery flow lines)
// are drawn at a fixed spot that only matches the Stream system battery, so
// they're shown only for it; other renders display statically (the house-
// anchored grid/solar/home flows still animate).
const BATTERY_WITH_OVERLAYS = new Set([
  "re_space_system_battery",
  "re_space_system_battery_gateway",
]);

export function batteryHasOverlays(key) {
  return BATTERY_WITH_OVERLAYS.has(key || DEFAULT_BATTERY);
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
