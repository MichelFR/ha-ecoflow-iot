/* Today's produced energy for an integral energy sensor, read from the
 * recorder's long-term statistics — the same source the Energy Dashboard uses.
 * The Stream integration exposes only a cumulative (total_increasing) solar
 * energy sensor, so "today" is the statistic's change over the current day. */

export async function fetchTodayWh(hass, statisticId) {
  if (!hass?.callWS || !statisticId) return null;
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  try {
    const res = await hass.callWS({
      type: "recorder/statistics_during_period",
      start_time: start.toISOString(),
      statistic_ids: [statisticId],
      period: "day",
      types: ["change"],
    });
    const rows = res?.[statisticId];
    if (!Array.isArray(rows) || !rows.length) return null;
    let total = 0;
    let seen = false;
    for (const row of rows) {
      const change = Number(row.change);
      if (Number.isFinite(change)) {
        total += change;
        seen = true;
      }
    }
    return seen ? total : null; // Wh (matches the sensor's unit)
  } catch (e) {
    return null;
  }
}
