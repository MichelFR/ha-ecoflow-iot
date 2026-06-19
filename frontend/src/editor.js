/* Visual editor, styled after the ABRP card's editor: the root shows the
 * device picker and a list of setting groups; each subpage carries its display
 * toggles plus the entity slots it covers. Every slot offers Automatic
 * (discovered entity), Entity (any entity) or Custom (fixed value / template),
 * the same pattern core cards use for composite values. */

import { LitElement, html, css } from "lit";
import { CARD_TYPE, PLATFORM } from "./const.js";
import { entityMap, streamDevices } from "./entities.js";
import { isEntityId, isTemplate } from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";

const DEVICE_SCHEMA = [
  { name: "device", selector: { device: { integration: PLATFORM } } },
];

// Toggles per subpage: [config key, default, icon]. Labels from translations
// (toggle.<key> / short.<key>); only deviations from the default are stored.
const TOGGLES = {
  appearance: [
    ["show_image", true, "mdi:image-outline"],
    ["show_battery", true, "mdi:battery-high"],
    ["show_today", true, "mdi:white-balance-sunny"],
    ["show_grid", true, "mdi:transmission-tower"],
    ["show_panels", true, "mdi:solar-panel"],
  ],
  forecast: [["show_forecast", true, "mdi:chart-line"]],
};

// Entity slots per subpage: [slot key, icon]; labels from slot.<key>.
const PAGE_SLOTS = {
  entities: [
    ["sensor.cms_batt_soc", "mdi:battery-high"],
    ["sensor.pv_total", "mdi:solar-power-variant"],
    ["sensor.grid_power", "mdi:transmission-tower"],
    ["sensor.solar_energy", "mdi:lightning-bolt"],
    ["sensor.pv1_power", "mdi:solar-panel"],
    ["sensor.pv2_power", "mdi:solar-panel"],
    ["sensor.pv3_power", "mdi:solar-panel"],
    ["sensor.pv4_power", "mdi:solar-panel"],
  ],
  forecast: [["sensor.forecast_today", "mdi:weather-sunny"]],
};

// Slots with no auto-discovery default to the Entity picker (e.g. an external
// solar-forecast entity the integration can't provide).
const ENTITY_ONLY_SLOTS = new Set(["sensor.forecast_today"]);

const PAGES = [
  { id: "appearance", icon: "mdi:palette-outline" },
  { id: "entities", icon: "mdi:tune-variant" },
  { id: "forecast", icon: "mdi:weather-partly-cloudy" },
];

export class EcoFlowEnergyCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _page: { state: true },
      _modes: { state: true },
    };
  }

  constructor() {
    super();
    this._page = null; // null = root, otherwise a PAGES id
    this._modes = {}; // slot key -> "auto" | "entity" | "custom" (UI state)
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

  render() {
    if (!this.hass) return html``;
    const page = PAGES.find((p) => p.id === this._page);
    return page ? this._renderSubpage(page) : this._renderRoot();
  }

  /* Auto-discovered entity map for the selected (or first) device. */
  _defaults() {
    const devices = streamDevices(this.hass);
    const device =
      (this._config.device &&
        devices.find((d) => d.deviceId === this._config.device)) ||
      devices[0];
    return device ? entityMap(this.hass, device.ents) : {};
  }

  /* -- root: device picker + settings list -- */

  _renderRoot() {
    return html`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${DEVICE_SCHEMA}
        .computeLabel=${() => this._t("editor.device")}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="nav">
        ${PAGES.map(
          (page) => html`<button
            class="nav-row"
            @click=${() => (this._page = page.id)}
          >
            <ha-icon class="nav-icon" icon=${page.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`page.${page.id}`)}</span>
              <span class="nav-secondary">${this._summary(page.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`
        )}
      </div>`;
  }

  _summary(pageId) {
    const overridden = (PAGE_SLOTS[pageId] || []).filter(
      ([key]) => this._config.entities?.[key]
    ).length;
    const suffix = overridden
      ? ` · ${this._t("editor.overridden", { n: overridden })}`
      : "";
    const toggles = TOGGLES[pageId] || [];
    if (!toggles.length) {
      return overridden
        ? this._t("editor.overridden", { n: overridden })
        : this._t("editor.automatic");
    }
    const shown = toggles.filter(([key, def]) => this._config[key] ?? def);
    if (!shown.length) return `${this._t("editor.nothing_shown")}${suffix}`;
    return shown.map(([key]) => this._t(`short.${key}`)).join(", ") + suffix;
  }

  /* -- subpages -- */

  _renderSubpage(page) {
    return html`<div class="subpage-head">
        <button class="back" @click=${() => (this._page = null)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`page.${page.id}`)}</span>
      </div>
      ${(TOGGLES[page.id] || []).map(([key, def, icon]) =>
        this._renderToggle(key, def, icon)
      )}
      ${(PAGE_SLOTS[page.id] || []).map(([key, icon]) =>
        this._renderSlot(key, icon)
      )}`;
  }

  _renderToggle(key, def, icon) {
    return html`<div class="row">
      <ha-icon icon=${icon}></ha-icon>
      <span class="row-label">${this._t(`toggle.${key}`)}</span>
      <ha-switch
        .checked=${this._config[key] ?? def}
        @change=${(ev) => this._toggleDisplay(key, def, ev.target.checked)}
      ></ha-switch>
    </div>`;
  }

  /* -- slot editors: Automatic / Entity / Custom -- */

  _slotMode(key, override) {
    if (this._modes[key]) return this._modes[key];
    if (!override) return ENTITY_ONLY_SLOTS.has(key) ? "entity" : "auto";
    return isEntityId(override) && !isTemplate(override) ? "entity" : "custom";
  }

  _renderModeChips(key, mode) {
    const ids = ENTITY_ONLY_SLOTS.has(key)
      ? ["entity", "custom"]
      : ["auto", "entity", "custom"];
    return html`<div class="modes">
      ${ids.map(
        (id) => html`<button
          class="mode ${mode === id ? "on" : ""}"
          @click=${() => {
            this._modes = { ...this._modes, [key]: id };
            if (id === "auto") this._setOverride(key, "");
          }}
        >
          ${this._t(`editor.mode_${id}`)}
        </button>`
      )}
    </div>`;
  }

  _renderSlot(key, icon) {
    const override = this._config.entities?.[key] || "";
    const mode = this._slotMode(key, override);
    const def = this._defaults()[key];

    return html`<div class="section">
        <ha-icon icon=${icon}></ha-icon>${this._t(`slot.${key}`)}
      </div>
      ${this._renderModeChips(key, mode)}
      ${mode === "auto"
        ? html`<div class="hint">
            ${this._t("editor.auto_value", {
              value: def || this._t("editor.not_found"),
            })}
          </div>`
        : mode === "entity"
          ? html`<ha-form
              .hass=${this.hass}
              .data=${{
                value:
                  isEntityId(override) && !isTemplate(override) ? override : "",
              }}
              .schema=${[{ name: "value", selector: { entity: {} } }]}
              .computeLabel=${() => this._t("editor.entity")}
              @value-changed=${(ev) => {
                ev.stopPropagation();
                this._setOverride(key, ev.detail.value.value || "");
              }}
            ></ha-form>`
          : html`<ha-form
              .hass=${this.hass}
              .data=${{
                value:
                  isEntityId(override) && !isTemplate(override) ? "" : override,
              }}
              .schema=${[{ name: "value", selector: { template: {} } }]}
              .computeLabel=${() => this._t("editor.value_template")}
              @value-changed=${(ev) => {
                ev.stopPropagation();
                this._setOverride(key, ev.detail.value.value || "");
              }}
            ></ha-form>`}`;
  }

  /* -- config plumbing -- */

  _withOverride(key, value) {
    const entities = { ...(this._config.entities || {}) };
    if (!value) delete entities[key];
    else entities[key] = value;
    const config = { ...this._config, entities, type: `custom:${CARD_TYPE}` };
    if (!Object.keys(entities).length) delete config.entities;
    return config;
  }

  _setOverride(key, value) {
    this._dispatch(this._withOverride(key, value));
  }

  _toggleDisplay(key, def, checked) {
    const config = { ...this._config, type: `custom:${CARD_TYPE}` };
    // Only persist deviations from the option's default.
    if (checked === def) delete config[key];
    else config[key] = checked;
    this._dispatch(config);
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    const config = {
      ...this._config,
      ...ev.detail.value,
      type: `custom:${CARD_TYPE}`,
    };
    if (!config.device) delete config.device;
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
      .modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
        margin-bottom: 10px;
      }
      .mode {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        padding: 8px 0;
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
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 12px;
      }
      ha-form {
        display: block;
        margin-bottom: 12px;
      }
    `;
  }
}
