/* Map an EcoFlow device (its registry model string) to a bundled product
 * image served from the integration's www/devices folder. Add more devices by
 * dropping a PNG there and extending MODEL_IMAGES. */

import { ASSET_BASE } from "./const.js";

const MODEL_IMAGES = [[/stream/i, "stream-ultra.png"]];

export function deviceImageUrl(model) {
  if (!model) return null;
  for (const [re, file] of MODEL_IMAGES) {
    if (re.test(model)) return `${ASSET_BASE}/devices/${file}`;
  }
  return null;
}
