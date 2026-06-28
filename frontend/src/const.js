export const CARD_TYPE = "ecoflow-energy-card";
export const HOUSE_CARD_TYPE = "ecoflow-house-card";
export const PLATFORM = "ecoflow_iot";
// Folder served by the integration over HTTP (see const.py CARD_ASSET_BASE):
// the bundled card JS and device images both live under it.
export const ASSET_BASE = "/ecoflow_iot";

/* Resolve a root-relative asset path against the Home Assistant instance.
 *
 * Under Home Assistant Cast (e.g. casting a dashboard to a Google Nest Hub) the
 * receiver page is served from cast.home-assistant.io, so a bare path like
 * `/ecoflow_iot/...` would resolve against THAT origin (404) instead of the HA
 * server — the house image and Lottie flows would silently vanish. hassUrl()
 * rebases the path onto the actual instance URL. In a normal browser it returns
 * the same-origin absolute URL; an already-absolute URL passes through
 * unchanged, and falsy input (no image) is returned as-is so callers' truthiness
 * checks keep working. Falls back to the raw path on very old frontends. */
export function assetUrl(path, hass) {
  if (!path) return path;
  return hass?.hassUrl ? hass.hassUrl(path) : path;
}
