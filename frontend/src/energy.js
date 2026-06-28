/* Energy-dashboard WebSocket helpers — the card uses the SAME solar forecast as
 * Home Assistant's native Energy dashboard.
 *
 * `energy/solar_forecast` takes no parameters: it returns hourly Wh for exactly
 * the forecast providers (config entries) configured under the Energy
 * dashboard's Solar settings, keyed by config-entry id. So the card can't pick
 * arbitrary providers — it consumes whatever the Energy dashboard provides, and
 * the editor lets the user narrow that set. */

export async function fetchSolarForecasts(hass) {
  if (!hass?.callWS) return {};
  try {
    return (await hass.callWS({ type: "energy/solar_forecast" })) || {};
  } catch (e) {
    return {};
  }
}

/* The forecast providers available to choose from: the config entries the
 * Energy dashboard returns forecasts for, decorated with a human title. */
export async function fetchForecastConfigEntries(hass) {
  const forecasts = await fetchSolarForecasts(hass);
  const ids = Object.keys(forecasts);
  if (!ids.length) return [];
  let entries = [];
  try {
    entries = (await hass.callWS({ type: "config_entries/get" })) || [];
  } catch (e) {
    entries = [];
  }
  const byId = new Map(entries.map((e) => [e.entry_id, e]));
  return ids.map((id) => ({
    id,
    title: byId.get(id)?.title || byId.get(id)?.domain || id,
    domain: byId.get(id)?.domain || "",
  }));
}

/* Merge selected providers' wh_hours into one {ISO: Wh} map (summed by hour).
 * `selectedIds` undefined = all providers; [] = none. */
export function mergeForecastWhHours(forecasts, selectedIds) {
  const ids =
    selectedIds === undefined ? Object.keys(forecasts || {}) : selectedIds;
  const merged = {};
  for (const id of ids) {
    const wh = forecasts?.[id]?.wh_hours;
    if (!wh) continue;
    for (const [ts, val] of Object.entries(wh)) {
      const n = Number(val);
      if (Number.isFinite(n)) merged[ts] = (merged[ts] || 0) + n;
    }
  }
  return merged;
}

/* Bucket a {ISO: Wh} map into {localHour: Wh} for the local day of `ref`. */
export function forecastHourly(whHours, ref = new Date()) {
  const y = ref.getFullYear();
  const m = ref.getMonth();
  const d = ref.getDate();
  const hours = {};
  for (const [ts, val] of Object.entries(whHours || {})) {
    const dt = new Date(ts);
    if (Number.isNaN(dt.getTime())) continue;
    if (dt.getFullYear() === y && dt.getMonth() === m && dt.getDate() === d) {
      hours[dt.getHours()] = (hours[dt.getHours()] || 0) + val;
    }
  }
  return hours;
}

/* Total forecast Wh for the local day of `ref`, or null when none. */
export function forecastTodayWh(whHours, ref = new Date()) {
  const hours = forecastHourly(whHours, ref);
  const keys = Object.keys(hours);
  if (!keys.length) return null;
  return keys.reduce((sum, h) => sum + hours[h], 0);
}

/* The Energy dashboard's configured sources, grouped into the statistic ids the
 * Space card's preset tiles read (solar production, grid in/out, battery
 * in/out). Returns null when the dashboard isn't set up. */
export async function fetchEnergyPrefs(hass) {
  if (!hass?.callWS) return null;
  try {
    return (await hass.callWS({ type: "energy/get_prefs" })) || null;
  } catch (e) {
    return null;
  }
}

export function energyStatIds(prefs) {
  const r = { solar: [], gridFrom: [], gridTo: [], batIn: [], batOut: [] };
  for (const s of prefs?.energy_sources || []) {
    if (s.type === "solar" && s.stat_energy_from) r.solar.push(s.stat_energy_from);
    if (s.type === "battery") {
      if (s.stat_energy_to) r.batIn.push(s.stat_energy_to);
      if (s.stat_energy_from) r.batOut.push(s.stat_energy_from);
    }
    if (s.type === "grid") {
      for (const f of s.flow_from || []) if (f.stat_energy_from) r.gridFrom.push(f.stat_energy_from);
      for (const t of s.flow_to || []) if (t.stat_energy_to) r.gridTo.push(t.stat_energy_to);
    }
  }
  return r;
}

/* Each statistic's stored unit, so today's change can be normalised to kWh.
 * EcoFlow energy sensors are in Wh (the Energy card divides solar_energy by
 * 1000); the Energy dashboard mixes Wh / kWh / MWh sources, so we must convert
 * per statistic or the totals are off by 1000×. */
async function fetchStatUnits(hass) {
  try {
    const list = (await hass.callWS({ type: "recorder/list_statistic_ids" })) || [];
    const map = {};
    for (const s of list) {
      map[s.statistic_id] =
        s.statistics_unit_of_measurement || s.unit_of_measurement || s.display_unit_of_measurement || "";
    }
    return map;
  } catch (e) {
    return {};
  }
}

function toKWh(value, unit) {
  const u = (unit || "").toLowerCase();
  if (u === "wh") return value / 1000;
  if (u === "mwh") return value * 1000;
  return value; // kWh (or unknown) assumed already in kWh
}

/* Sum of today's `change` across the given statistic ids, each normalised to
 * kWh by its stored unit. Mirrors the Energy card's working approach: request
 * HOURLY buckets from local midnight and sum their per-hour change (a single
 * `day` bucket can come back as the lifetime total on some recorders). */
async function todayKWh(hass, statIds, units) {
  if (!hass?.callWS || !statIds.length) return 0;
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  try {
    const res = await hass.callWS({
      type: "recorder/statistics_during_period",
      start_time: from.toISOString(),
      statistic_ids: statIds,
      period: "hour",
      types: ["change"],
    });
    let sum = 0;
    for (const id of statIds) {
      let s = 0;
      for (const row of res?.[id] || []) {
        const c = Number(row.change);
        if (Number.isFinite(c)) s += c;
      }
      sum += toKWh(s, units[id]);
    }
    return sum;
  } catch (e) {
    return 0;
  }
}

/* Today's energy totals from the Energy dashboard: solar produced, grid
 * import/export, battery in/out, derived home consumption and self-sufficiency
 * (%). Null when the dashboard isn't configured. All values in kWh. */
export async function fetchEnergyTotals(hass) {
  const prefs = await fetchEnergyPrefs(hass);
  if (!prefs) return null;
  const ids = energyStatIds(prefs);
  const units = await fetchStatUnits(hass);
  const [solar, gridImport, gridExport, batIn, batOut] = await Promise.all([
    todayKWh(hass, ids.solar, units),
    todayKWh(hass, ids.gridFrom, units),
    todayKWh(hass, ids.gridTo, units),
    todayKWh(hass, ids.batIn, units),
    todayKWh(hass, ids.batOut, units),
  ]);
  // Standard HA energy balance: what the home actually consumed today.
  const consumption = solar + gridImport + batOut - gridExport - batIn;
  const independence =
    consumption > 0
      ? Math.max(0, Math.min(100, Math.round((1 - gridImport / consumption) * 100)))
      : null;
  return { solar, gridImport, gridExport, batIn, batOut, consumption, independence };
}

/* Hourly produced energy (Wh per local hour) over [start, end] (default today),
 * from the recorder's statistics for a cumulative energy sensor. */
export async function fetchHourlyWh(hass, statisticId, start, end) {
  if (!hass?.callWS || !statisticId) return null;
  const now = new Date();
  const from =
    start instanceof Date
      ? start
      : new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const msg = {
    type: "recorder/statistics_during_period",
    start_time: from.toISOString(),
    statistic_ids: [statisticId],
    period: "hour",
    types: ["change"],
  };
  if (end instanceof Date) msg.end_time = end.toISOString();
  try {
    const res = await hass.callWS(msg);
    const rows = res?.[statisticId];
    if (!Array.isArray(rows)) return null;
    const hours = {};
    for (const row of rows) {
      const dt = new Date(row.start);
      const change = Number(row.change);
      if (Number.isNaN(dt.getTime()) || !Number.isFinite(change)) continue;
      hours[dt.getHours()] = (hours[dt.getHours()] || 0) + change;
    }
    return hours;
  } catch (e) {
    return null;
  }
}
