/* Shared chrome for the three card editors (Energy / House / Space): the root
 * nav list, subpage header, display-toggle rows, dropdown fields and the
 * house-style / battery galleries, plus the CSS behind them. Each editor keeps
 * its own pages and card-specific fields; hosts must provide `hass`, `_config`,
 * `_page` and `_set(key, value, def)`. */

import { css, html } from "lit";
import { localize } from "./localize.js";
import {
  BATTERY_BOXES,
  HOUSE_MODES,
  HOUSE_STYLES,
  batteryBoxUrl,
  housePreviewUrl,
} from "./houses.js";

export function renderNav(host, pages, pageLabel, summary) {
  return html`<div class="nav">
    ${pages.map(
      (page) => html`<button
        class="nav-row"
        @click=${() => (host._page = page.id)}
      >
        <ha-icon class="nav-icon" icon=${page.icon}></ha-icon>
        <span class="nav-labels">
          <span class="nav-label">${pageLabel(page.id)}</span>
          <span class="nav-secondary">${summary(page.id)}</span>
        </span>
        <ha-icon icon="mdi:chevron-right"></ha-icon>
      </button>`
    )}
  </div>`;
}

export function renderSubpageHead(host, title) {
  return html`<div class="subpage-head">
    <button class="back" @click=${() => (host._page = null)}>
      <ha-icon icon="mdi:chevron-left"></ha-icon>
    </button>
    <span class="subpage-title">${title}</span>
  </div>`;
}

export function renderToggle(host, label, key, def, icon) {
  return html`<div class="row">
    <ha-icon icon=${icon}></ha-icon>
    <span class="row-label">${label}</span>
    <ha-switch
      .checked=${host._config[key] ?? def}
      @change=${(ev) => host._set(key, ev.target.checked, def)}
    ></ha-switch>
  </div>`;
}

/* Dropdown via ha-form's select selector — reliable value binding (a raw
 * ha-select's @selected/index is flaky on re-render). */
export function renderSelect(host, label, options, value, onChange, labelFn) {
  const opts = options.map((o) => ({
    value: o,
    label: labelFn ? labelFn(o) : o || "—",
  }));
  return html`<ha-form
    class="field"
    .hass=${host.hass}
    .data=${{ value }}
    .schema=${[
      { name: "value", selector: { select: { options: opts, mode: "dropdown" } } },
    ]}
    .computeLabel=${() => label}
    @value-changed=${(ev) => {
      ev.stopPropagation();
      onChange(ev.detail.value.value ?? "");
    }}
  ></ha-form>`;
}

export function renderGridSourceSelect(host) {
  const source = host._config.grid_source || "app";
  return html`${renderSelect(
    host,
    localize(host.hass, "editor.grid_source"),
    ["app", "device", "entity"],
    source,
    (v) => host._set("grid_source", v, "app"),
    (k) => localize(host.hass, `editor.grid_source_${k}`)
  )}
  ${source === "entity"
    ? html`<ha-form
          class="field"
          .hass=${host.hass}
          .data=${{ value: host._config.grid_entity || "" }}
          .schema=${[
            {
              name: "value",
              selector: { entity: { domain: "sensor" } },
            },
          ]}
          .computeLabel=${() => localize(host.hass, "editor.grid_entity")}
          @value-changed=${(ev) => {
            ev.stopPropagation();
            host._set("grid_entity", ev.detail.value.value ?? "", "");
          }}
        ></ha-form>
        <div class="hint">
          ${localize(host.hass, "editor.grid_entity_hint")}
        </div>`
    : ""}`;
}

export function renderHouseGallery(host, selected, onPick) {
  return html`<div class="house-grid">
    ${HOUSE_STYLES.map((key) => {
      const label = localize(host.hass, "house.editor.style_n", { n: key });
      return html`<button
        class="house-opt ${selected === key ? "on" : ""}"
        title=${label}
        @click=${() => onPick(key)}
      >
        <img src=${housePreviewUrl(key, host.hass)} loading="lazy" alt=${key} />
        <span class="pick-label">${label}</span>
      </button>`;
    })}
  </div>`;
}

export function renderModeButtons(host, selected, onPick) {
  return html`<div class="modes">
    ${HOUSE_MODES.map(
      (m) => html`<button
        class="mode ${selected === m ? "on" : ""}"
        @click=${() => onPick(m)}
      >
        ${localize(host.hass, `house.mode.${m}`)}
      </button>`
    )}
  </div>`;
}

export function renderBatteryGallery(host, selected, onPick, dim = false) {
  return html`<div class=${dim ? "batt-grid dim" : "batt-grid"}>
    ${BATTERY_BOXES.map((key) => {
      const label = localize(host.hass, `house.battery.${key}`);
      return html`<button
        class="batt-opt ${selected === key ? "on" : ""}"
        title=${label}
        @click=${() => onPick(key)}
      >
        <span
          class="batt-thumb"
          style=${`background-image:url(${batteryBoxUrl(key, host.hass)})`}
        ></span>
        <span class="pick-label">${label}</span>
      </button>`;
    })}
  </div>`;
}

export const editorStyles = css`
  .nav {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }
  .nav-row {
    display: flex;
    align-items: center;
    gap: 14px;
    border: none;
    background: transparent;
    padding: 12px 6px;
    cursor: pointer;
    text-align: left;
    border-radius: 10px;
    color: var(--primary-text-color);
    transition: background-color 0.15s ease;
  }
  .nav-row:hover {
    background: var(--secondary-background-color);
  }
  .nav-row ha-icon {
    color: var(--secondary-text-color);
    --mdc-icon-size: 20px;
  }
  .nav-labels {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .nav-label {
    font-size: 1em;
  }
  .nav-secondary {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 280px;
  }
  .subpage-head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--card-background-color, var(--ha-card-background));
    padding: 8px 0;
    margin-top: -8px;
  }
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: var(--primary-text-color);
    cursor: pointer;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    transition: background-color 0.15s ease;
  }
  .back:hover {
    background: var(--secondary-background-color);
  }
  .subpage-title {
    font-size: 1.1em;
    font-weight: 600;
  }
  .section {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    margin: 18px 0 8px;
    color: var(--primary-text-color);
  }
  .section ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }
  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 4px;
  }
  .row ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
  }
  .row-label {
    flex: 1;
    color: var(--primary-text-color);
  }
  .row-sub {
    display: block;
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }
  .hint {
    color: var(--secondary-text-color);
    font-size: 0.85em;
    margin: 4px 4px 10px;
  }
  .top-hint {
    margin: 0 4px 10px;
  }
  .dim {
    opacity: 0.45;
    pointer-events: none;
  }
  .modes {
    display: flex;
    background: var(--secondary-background-color);
    border-radius: 10px;
    padding: 3px;
  }
  .mode {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--primary-text-color);
    padding: 9px 0;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.15s ease, color 0.15s ease;
  }
  .mode:hover:not(.on) {
    background: rgba(127, 127, 127, 0.18);
  }
  .mode.on {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    font-weight: 600;
  }
  .field {
    width: 100%;
  }
  .house-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    gap: 8px;
  }
  .house-opt {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    border: 2px solid transparent;
    border-radius: 12px;
    background: var(--secondary-background-color);
    padding: 6px 4px;
    cursor: pointer;
    transition: border-color 0.15s ease, filter 0.15s ease;
  }
  .house-opt:hover {
    filter: brightness(1.1);
  }
  .house-opt.on {
    border-color: var(--primary-color);
  }
  .house-opt img {
    width: 100%;
    aspect-ratio: 2340 / 1680;
    object-fit: contain;
    border-radius: 6px;
  }
  .batt-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
    gap: 8px;
  }
  .batt-opt {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    border: 2px solid transparent;
    border-radius: 12px;
    background: var(--secondary-background-color);
    padding: 6px 4px;
    cursor: pointer;
    transition: border-color 0.15s ease, filter 0.15s ease;
  }
  .batt-opt:hover {
    filter: brightness(1.1);
  }
  .batt-opt.on {
    border-color: var(--primary-color);
  }
  /* The renders frame the box at centre; zoom the thumbnail into it. */
  .batt-thumb {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: center 58%;
    background-size: 200%;
  }
  .pick-label {
    font-size: 0.72em;
    color: var(--secondary-text-color);
    text-align: center;
    line-height: 1.15;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  /* per-panel blocks (shared views/panels-editor.js) */
  .panel-block {
    padding: 6px 4px 12px;
    border-bottom: 1px solid var(--divider-color);
  }
  .panel-title-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
  }
  .panel-title-row ha-icon {
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
  }
  .panel-title {
    flex: 1;
    font-weight: 600;
    color: var(--primary-text-color);
  }
  .panel-block ha-form {
    display: block;
    margin-bottom: 12px;
  }
`;
