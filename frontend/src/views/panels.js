/* The "Solar panels" dialog: each detected PV string as a labelled row with a
 * power bar sized relative to the strongest string, plus a total. Opened by
 * tapping the Solar power stat on the card. */

import { html } from "lit";
import { fmtPower, numState } from "../format.js";
import { localize } from "../localize.js";

export function panelData(card) {
  const panels = [];
  for (let i = 1; i <= 4; i++) {
    const cfg = card._config.panels?.[i] || {};
    if (cfg.hidden) continue; // per-panel hide from the editor
    const slot = `sensor.pv${i}_power`;
    const state = card._state(slot);
    if (!state) continue;
    panels.push({
      i,
      watts: numState(state),
      id: card._entityId(slot),
      name: cfg.name || null,
      // Configured max output (W): the dialog scales this panel's bar to it
      // (utilization) instead of relative to the strongest string.
      max: Number(cfg.max) > 0 ? Number(cfg.max) : null,
    });
  }
  return panels;
}

export function renderPanels(card) {
  const t = (key, vars) => localize(card.hass, key, vars);
  const panels = panelData(card);
  if (!panels.length) {
    return html`<div class="empty">${t("panels.none")}</div>`;
  }
  // Panels with a configured max scale to it (true utilization); the rest
  // scale relative to the strongest string, as before.
  const relMax = Math.max(1, ...panels.map((p) => p.watts || 0));
  // Total = the device's combined-output sensor (pv_total) when present —
  // taps through to its more-info — falling back to the sum of the strings.
  const totalId = card._entityId("sensor.pv_total");
  const totalW = numState(card._state("sensor.pv_total"));
  const total =
    totalW != null ? totalW : panels.reduce((sum, p) => sum + (p.watts || 0), 0);
  const totalMax = panels.every((p) => p.max)
    ? panels.reduce((sum, p) => sum + p.max, 0)
    : null;

  return html`<div class="panels">
    ${panels.map(
      (p) => html`<div
        class="panel-row clickable"
        @click=${() => card._moreInfoId(p.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${p.name ||
            t("panels.panel", { n: p.i })}
          </span>
          <span class="panel-val"
            >${fmtPower(p.watts) ?? "–"}${p.max
              ? html`<span class="panel-max"> / ${fmtPower(p.max)}</span>`
              : ""}</span
          >
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(
              2,
              Math.min(100, ((p.watts || 0) / (p.max || relMax)) * 100)
            )}%"
          ></div>
        </div>
      </div>`
    )}
    <div
      class="panel-total ${totalId ? "clickable" : ""}"
      @click=${totalId ? () => card._moreInfoId(totalId) : null}
    >
      <span>${t("panels.total")}</span>
      <span
        >${fmtPower(total) ?? "–"}${totalMax
          ? html`<span class="panel-max"> / ${fmtPower(totalMax)}</span>`
          : ""}</span
      >
    </div>
  </div>`;
}
