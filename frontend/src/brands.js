/* Integration brand icons — the same images Home Assistant shows for an
 * integration/config entry, served from brands.home-assistant.io. */

export function brandIconUrl(hass, domain) {
  if (!domain) return null;
  const dark = hass?.themes?.darkMode ? "dark_" : "";
  return `https://brands.home-assistant.io/${domain}/${dark}icon.png`;
}
