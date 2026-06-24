/* Visual editor for the EcoFlow House Card: device picker, a gallery to pick
 * the house illustration, display toggles, the solar-flow route, and optional
 * entity overrides for the values that drive the scene. */

import { LitElement, html, css } from "lit";
import { HOUSE_CARD_TYPE, PLATFORM } from "./const.js";
import { entityMap, streamDevices } from "./entities.js";
import { isEntityId, isTemplate } from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
import {
  DEFAULT_HOUSE_MODE,
  DEFAULT_HOUSE_STYLE,
  HOUSE_MODES,
  HOUSE_STYLES,
  housePreviewUrl,
} from "./houses.js";

const DEVICE_SCHEMA = [
  { name: "device", selector: { device: { integration: PLATFORM } } },
];

// [config key, default, icon]
const TOGGLES = [
  ["show_flows", true, "mdi:transit-connection-variant"],
  ["show_grid", true, "mdi:transmission-tower"],
  ["show_solar", true, "mdi:solar-power-variant"],
  ["show_home", true, "mdi:home-lightning-bolt"],
  ["show_battery", true, "mdi:home-battery"],
];

// Entity slots the scene reads; each offers an optional override.
const SLOTS = [
  ["sensor.sys_grid_power", "mdi:transmission-tower"],
  ["sensor.pv_total", "mdi:solar-power-variant"],
  ["sensor.sys_load", "mdi:home-lightning-bolt"],
  ["sensor.bat_power", "mdi:battery-charging"],
  ["sensor.cms_batt_soc", "mdi:battery-high"],
];

export class EcoFlowHouseCardEditor extends LitElement {
  static get properties() {
    return { hass: {}, _config: {}, _showEntities: { state: true } };
  }

  constructor() {
    super();
    this._showEntities = false;
  }

  connectedCallback() {
    super.connectedCallback();
    ensureHaComponents();
  }

  setConfig(config) {
    this._config = config || {};
  }

  _t(key, vars) {
    return localize(this.hass, key, vars);
  }

  _defaults() {
    const devices = streamDevices(this.hass);
    const device =
      (this._config.device &&
        devices.find((d) => d.deviceId === this._config.device)) ||
      devices[0];
    return device ? entityMap(this.hass, device.ents) : {};
  }

  render() {
    if (!this.hass) return html``;
    const style = this._config.house || DEFAULT_HOUSE_STYLE;
    const mode = this._config.house_mode || DEFAULT_HOUSE_MODE;
    const route = this._config.solar_route || "auto";

    return html`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${DEVICE_SCHEMA}
        .computeLabel=${() => this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>

      <div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="house-grid">
        ${HOUSE_STYLES.map(
          (key) => html`<button
            class="house-opt ${style === key ? "on" : ""}"
            title=${this._t("house.editor.style_n", { n: key })}
            @click=${() => this._set("house", key, DEFAULT_HOUSE_STYLE)}
          >
            <img src=${housePreviewUrl(key)} loading="lazy" alt=${key} />
            <span class="house-label">${this._t("house.editor.style_n", { n: key })}</span>
          </button>`
        )}
      </div>

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      <div class="modes">
        ${HOUSE_MODES.map(
          (m) => html`<button
            class="mode ${mode === m ? "on" : ""}"
            @click=${() => this._set("house_mode", m, DEFAULT_HOUSE_MODE)}
          >
            ${this._t(`house.mode.${m}`)}
          </button>`
        )}
      </div>

      ${TOGGLES.map(([key, def, icon]) => this._renderToggle(key, def, icon))}

      <div class="section">
        <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t(
          "house.editor.solar_route"
        )}
      </div>
      <div class="hint">${this._t("house.editor.solar_route_hint")}</div>
      <select
        class="route"
        .value=${String(route)}
        @change=${(ev) => this._set("solar_route", ev.target.value, "auto")}
      >
        <option value="auto">${this._t("editor.automatic")}</option>
        ${[1, 2, 3, 4, 5, 6, 7].map(
          (n) => html`<option value=${String(n)} ?selected=${String(route) === String(n)}>
            ${this._t("house.editor.route_n", { n })}
          </option>`
        )}
      </select>

      <button class="disclosure" @click=${() => (this._showEntities = !this._showEntities)}>
        <ha-icon icon="mdi:tune-variant"></ha-icon>
        <span>${this._t("house.editor.entities")}</span>
        <ha-icon icon=${this._showEntities ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
      </button>
      ${this._showEntities
        ? html`<div class="hint">${this._t("house.editor.entities_hint")}</div>
            ${SLOTS.map(([slot, icon]) => this._renderSlot(slot, icon))}`
        : ""}`;
  }

  _renderToggle(key, def, icon) {
    return html`<div class="row">
      <ha-icon icon=${icon}></ha-icon>
      <span class="row-label">${this._t(`house.toggle.${key}`)}</span>
      <ha-switch
        .checked=${this._config[key] ?? def}
        @change=${(ev) => this._set(key, ev.target.checked, def)}
      ></ha-switch>
    </div>`;
  }

  _renderSlot(slot, icon) {
    const override = this._config.entities?.[slot] || "";
    const auto = this._defaults()[slot];
    const value = isEntityId(override) && !isTemplate(override) ? override : "";
    return html`<div class="slot">
      <ha-icon icon=${icon}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{ value }}
        .schema=${[{ name: "value", selector: { entity: {} } }]}
        .computeLabel=${() =>
          `${this._t(`slot.${slot}`)}${auto ? ` (${this._t("editor.auto_value", { value: auto })})` : ""}`}
        @value-changed=${(ev) => {
          ev.stopPropagation();
          this._setOverride(slot, ev.detail.value.value || "");
        }}
      ></ha-form>
    </div>`;
  }

  /* -- config plumbing (only deviations from defaults are persisted) -- */

  _deviceChanged(ev) {
    ev.stopPropagation();
    const config = { ...this._config, ...ev.detail.value, type: `custom:${HOUSE_CARD_TYPE}` };
    if (!config.device) delete config.device;
    this._dispatch(config);
  }

  _set(key, value, def) {
    const config = { ...this._config, type: `custom:${HOUSE_CARD_TYPE}` };
    if (value === def || value === "" || value == null) delete config[key];
    else config[key] = value;
    this._dispatch(config);
  }

  _setOverride(slot, value) {
    const entities = { ...(this._config.entities || {}) };
    if (!value) delete entities[slot];
    else entities[slot] = value;
    const config = { ...this._config, entities, type: `custom:${HOUSE_CARD_TYPE}` };
    if (!Object.keys(entities).length) delete config.entities;
    this._dispatch(config);
  }

  _dispatch(config) {
    this._config = config;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }

  static get styles() {
    return css`
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
      .house-label {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
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
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 10px;
      }
      select.route {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid var(--divider-color);
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 0.95em;
      }
      .disclosure {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 14px 4px 4px;
        cursor: pointer;
        font-size: 1em;
      }
      .disclosure span {
        flex: 1;
        text-align: left;
        font-weight: 600;
      }
      .disclosure ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .slot {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .slot > ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        flex: 0 0 auto;
      }
      .slot-form {
        flex: 1;
        margin-bottom: 8px;
      }
    `;
  }
}
