/* Auto-discovery of EcoFlow Stream entities via the entity registry.
 *
 * The Stream sensors carry stable translation_keys (set in the integration's
 * Python), so the card can find them regardless of the user's language or a
 * renamed entity_id. The battery level also falls back to its device_class. */

import { PLATFORM } from "./const.js";

// translation_keys the card consumes, grouped by entity domain.
export const KNOWN_KEYS = {
  sensor: [
    "cms_batt_soc",
    "bat_power",
    "pv_total",
    "grid_power",
    "solar_energy",
    "pv1_power",
    "pv2_power",
    "pv3_power",
    "pv4_power",
    "schuko1_power",
    "schuko2_power",
    // Battery-detail metrics shown in the battery dialog.
    "soh",
    "bat_temp",
    "chg_rem_time",
    "dsg_rem_time",
    "full_energy",
    "cycles",
    "calendar_soh",
  ],
  binary_sensor: ["battery_charging"],
  number: ["max_charge_soc", "min_discharge_soc", "backup_reserve"],
  switch: ["ac1", "ac2"],
};

export function ecoflowEntities(hass) {
  return Object.values(hass.entities || {}).filter(
    (e) => e.platform === PLATFORM
  );
}

export function keyOf(ent) {
  if (ent.translation_key) return ent.translation_key;
  const obj = ent.entity_id.split(".")[1];
  const idx = obj.lastIndexOf("_");
  return idx >= 0 ? obj.slice(idx + 1) : obj;
}

/* Group EcoFlow entities by device; a Stream / solar device is one exposing the
 * total solar-power sensor (pv_total). Returns [{deviceId, device, ents}]. */
export function streamDevices(hass) {
  const byDevice = new Map();
  for (const ent of ecoflowEntities(hass)) {
    if (!ent.device_id) continue;
    if (!byDevice.has(ent.device_id)) byDevice.set(ent.device_id, []);
    byDevice.get(ent.device_id).push(ent);
  }
  const devices = [];
  for (const [deviceId, ents] of byDevice) {
    if (ents.some((e) => keyOf(e) === "pv_total")) {
      devices.push({ deviceId, device: hass.devices?.[deviceId], ents });
    }
  }
  return devices;
}

/* Map "<domain>.<key>" slot -> entity_id for the given entities. Primary match
 * is the translation_key; the battery level falls back to its device_class so
 * registries predating the translation_keys still resolve it. */
export function entityMap(hass, ents) {
  const map = {};
  for (const ent of ents) {
    const [domain] = ent.entity_id.split(".");
    const tk = ent.translation_key;
    if (tk && (KNOWN_KEYS[domain] || []).includes(tk)) {
      map[`${domain}.${tk}`] = ent.entity_id;
    }
  }
  if (!map["sensor.cms_batt_soc"]) {
    for (const ent of ents) {
      if (!ent.entity_id.startsWith("sensor.")) continue;
      const st = hass.states?.[ent.entity_id];
      if (
        st?.attributes?.device_class === "battery" &&
        st?.attributes?.unit_of_measurement === "%"
      ) {
        map["sensor.cms_batt_soc"] = ent.entity_id;
        break;
      }
    }
  }
  return map;
}
