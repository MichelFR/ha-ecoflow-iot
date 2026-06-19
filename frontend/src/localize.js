/* Tiny i18n layer for the card and its editor; the language follows the Home
 * Assistant user profile, English is the fallback. Add a language by dropping
 * translations/<lang>.json and registering it here. */

import en from "./translations/en.json";

const TRANSLATIONS = { en };

export function language(hass) {
  return (hass?.locale?.language || hass?.language || "en").split("-")[0];
}

function lookup(table, key) {
  const value = key.split(".").reduce((node, part) => node?.[part], table);
  return typeof value === "string" ? value : undefined;
}

export function localize(hass, key, vars = {}) {
  const table = TRANSLATIONS[language(hass)] || TRANSLATIONS.en;
  let text = lookup(table, key) ?? lookup(TRANSLATIONS.en, key) ?? key;
  for (const [name, value] of Object.entries(vars)) {
    text = text.replace(`{${name}}`, value);
  }
  return text;
}
