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
