/* Bundled device product images served from the integration's www/devices
 * folder. `match` (optional) auto-selects an image from the device's registry
 * model name; entries without `match` are selectable only via the editor's
 * image picker. Ordered specific-first so auto-detection picks the best fit. */

import { ASSET_BASE } from "./const.js";

export const DEVICE_IMAGES = [
  { key: "delta-2-max", name: "Delta 2 Max", match: /delta 2 max/i },
  { key: "delta-2", name: "Delta 2", match: /delta 2/i },
  { key: "delta-3-max-plus", name: "Delta 3 Max Plus", match: /delta 3 max plus/i },
  { key: "delta-3-max", name: "Delta 3 Max", match: /delta 3 max/i },
  { key: "delta-pro-ultra", name: "Delta Pro Ultra", match: /delta pro ultra/i },
  { key: "delta-pro-3", name: "Delta Pro 3", match: /delta pro 3/i },
  { key: "delta-pro", name: "Delta Pro", match: /delta pro/i },
  { key: "river-2-pro", name: "River 2 Pro", match: /river 2 pro/i },
  {
    key: "stream-microinverter",
    name: "Stream Microinverter",
    match: /stream microinverter/i,
  },
  { key: "stream-ultra", name: "Stream Ultra", match: /stream/i },
  { key: "stream-ultra-x", name: "Stream Ultra X" },
  { key: "powerstream", name: "PowerStream", match: /powerstream/i },
  { key: "glacier", name: "Glacier", match: /glacier/i },
  { key: "power-kits", name: "Power Kits", match: /power kits/i },
  { key: "smart-plug", name: "Smart Plug", match: /smart plug/i },
  { key: "wave", name: "WAVE", match: /wave/i },
  {
    key: "smart-home-panel-2",
    name: "Smart Home Panel 2",
    match: /smart home panel 2/i,
  },
  { key: "smart-home-panel", name: "Smart Home Panel", match: /smart home panel/i },
];

export function imageUrlForKey(key) {
  return DEVICE_IMAGES.some((d) => d.key === key)
    ? `${ASSET_BASE}/devices/${key}.png`
    : null;
}

/* The WebP variant of a bundled device PNG (served via <picture> with the PNG
 * as fallback), or null for non-bundled / custom image URLs. Matches on a
 * substring rather than a prefix so it still recognises our bundled images once
 * assetUrl() has rebased them to an absolute instance URL (Home Assistant
 * Cast). */
export function webpVariant(url) {
  return typeof url === "string" &&
    url.includes(`${ASSET_BASE}/`) &&
    url.endsWith(".png")
    ? `${url.slice(0, -4)}.webp`
    : null;
}

/* The image auto-selected for a device model, or null. */
export function deviceImageUrl(model) {
  const key = autoImageKey(model);
  return key ? imageUrlForKey(key) : null;
}

export function autoImageKey(model) {
  if (!model) return null;
  const entry = DEVICE_IMAGES.find((d) => d.match && d.match.test(model));
  return entry ? entry.key : null;
}
