/* Value formatting + small predicate helpers. */

export function isTemplate(value) {
  return typeof value === "string" && /\{[{%]/.test(value);
}

export function isEntityId(value) {
  return typeof value === "string" && /^[a-z_]+\.[a-zA-Z0-9_]+$/.test(value);
}

/* Numeric state, or null when unknown/unavailable/non-numeric. */
export function numState(state) {
  const v = Number(state?.state);
  return Number.isFinite(v) ? v : null;
}

/* Power in W -> compact "W" / "kW" string. */
export function fmtPower(watts) {
  if (watts == null || !Number.isFinite(watts)) return null;
  const abs = Math.abs(watts);
  if (abs >= 1000) return `${(watts / 1000).toFixed(2)} kW`;
  return `${Math.round(watts)} W`;
}

/* Energy in Wh -> compact "Wh" / "kWh" string. */
export function fmtEnergyWh(wh, digits = 1) {
  if (wh == null || !Number.isFinite(wh)) return null;
  if (Math.abs(wh) >= 1000) return `${(wh / 1000).toFixed(digits)} kWh`;
  return `${Math.round(wh)} Wh`;
}

/* A state value normalised to kWh (handles Wh / kWh / MWh units). */
export function stateToKWh(state) {
  const v = Number(state?.state);
  if (!Number.isFinite(v)) return null;
  const unit = (state?.attributes?.unit_of_measurement || "").toLowerCase();
  if (unit === "wh") return v / 1000;
  if (unit === "mwh") return v * 1000;
  return v; // kWh (or unitless) assumed
}
