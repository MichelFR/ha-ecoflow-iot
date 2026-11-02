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
    // Whole-system load + grid + per-source split, used by the house card's
    // energy-flow overlay (the EcoFlow app's "space" view drives the same).
    "sys_load",
    "sys_grid_power",
    "load_from_pv",
    "load_from_grid",
    "load_from_bat",
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
    "device_role",
  ],
  binary_sensor: ["battery_charging"],
  number: ["max_charge_soc", "min_discharge_soc", "backup_reserve"],
  switch: ["ac1", "ac2", "ac_socket", "feed_in"],
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
 * total solar-power sensor (pv_total). Returns [{deviceId, device, ents}].
 *
 * Cached on the entity/device registry objects: `hass` is replaced on every
 * state change, but hass.entities / hass.devices keep their identity until the
 * registry itself changes, so the full registry scan only re-runs then (the
 * cards call this on every render). */
const devicesCache = new WeakMap(); // hass.entities -> { devReg, devices }
export function streamDevices(hass) {
  const reg = hass.entities;
  if (!reg) return [];
  const cached = devicesCache.get(reg);
  if (cached && cached.devReg === hass.devices) return cached.devices;

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
  devicesCache.set(reg, { devReg: hass.devices, devices });
  return devices;
}

function roleOf(hass, device) {
  const ent = device.ents.find((e) => keyOf(e) === "device_role");
  return ent ? hass.states?.[ent.entity_id]?.state : undefined;
}

export function systemRole(hass, devices, device) {
  const role = roleOf(hass, device);
  if (role === "SLAVE") return role;
  if (role !== "MASTER") return undefined;
  return devices.some((d) => d !== device && roleOf(hass, d) === "SLAVE")
    ? role
    : undefined;
}

export function roleEntityIds(devices) {
  return devices
    .map((d) => d.ents.find((e) => keyOf(e) === "device_role")?.entity_id)
    .filter(Boolean);
}

export function followMaster(hass, devices, picked) {
  if (!picked || roleOf(hass, picked) !== "SLAVE") return picked;
  const masters = devices.filter((d) => roleOf(hass, d) === "MASTER");
  return masters.length === 1 ? masters[0] : picked;
}

/* Whether anything a card renders from could have changed between two hass
 * objects: the registries, the locale, or one of the given entity states.
 * Used by the cards' shouldUpdate so the constant firehose of unrelated state
 * changes (every hass set) doesn't re-render them. */
export function relevantStatesChanged(oldHass, hass, ids) {
  if (!oldHass || !hass) return true;
  if (
    oldHass.entities !== hass.entities ||
    oldHass.devices !== hass.devices ||
    oldHass.locale !== hass.locale ||
    oldHass.language !== hass.language ||
    // Theme switches (incl. dark mode) restyle the scene / house render.
    oldHass.themes !== hass.themes
  ) {
    return true;
  }
  for (const id of ids) {
    if (id && oldHass.states[id] !== hass.states[id]) return true;
  }
  return false;
}

/* Map "<domain>.<key>" slot -> entity_id for the given entities. Primary match
 * is the translation_key; the battery level falls back to its device_class so
 * registries predating the translation_keys still resolve it.
 *
 * Cached per ents array (stable via the streamDevices cache) — the mapping only
 * depends on registry data plus static attributes (device_class / unit). */
const entityMapCache = new WeakMap(); // ents -> map
export function entityMap(hass, ents) {
  const cached = entityMapCache.get(ents);
  if (cached) return cached;
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
  entityMapCache.set(ents, map);
  return map;
}
