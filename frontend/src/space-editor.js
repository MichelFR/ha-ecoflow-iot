/* Visual editor for the EcoFlow Space Card, styled after the House card's
 * editor (a root device picker + a list of setting groups, each opening a
 * subpage). Pages cover appearance (house render reused from the House card),
 * the weather entity, the floating overlays (positioned by dragging on a live
 * preview), the bottom tiles, and the sidebar tabs (each embedding a Lovelace
 * view by path). */

import { LitElement, html, css } from "lit";
import { SPACE_CARD_TYPE, PLATFORM } from "./const.js";
import { OVERLAY_PRESETS, TILE_PRESETS } from "./space-card.js";
import { isEntityId, isTemplate } from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
import {
  BATTERY_BOXES,
  DEFAULT_BATTERY,
  DEFAULT_HOUSE_MODE,
  DEFAULT_HOUSE_STYLE,
  HOUSE_MODES,
  HOUSE_STYLES,
  batteryBoxUrl,
  houseImageUrl,
  housePreviewUrl,
} from "./houses.js";

const DEVICE_SCHEMA = [
  { name: "device", selector: { device: { integration: PLATFORM } } },
];

const PAGES = [
  { id: "appearance", icon: "mdi:palette-outline" },
  { id: "weather", icon: "mdi:weather-partly-cloudy" },
  { id: "overlays", icon: "mdi:label-multiple-outline" },
  { id: "tiles", icon: "mdi:card-text-outline" },
  { id: "tabs", icon: "mdi:dock-left" },
];

// Auto-discoverable scene slots an overlay/tile can bind to (with a label key).
const SLOT_OPTIONS = [
  "sensor.pv_total",
  "sensor.sys_load",
  "sensor.grid_power",
  "sensor.bat_power",
  "sensor.cms_batt_soc",
];

const ANCHOR_OPTIONS = [
  "center",
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const TOGGLES = [
  ["show_flows", true, "mdi:transit-connection-variant"],
  ["show_battery", true, "mdi:home-battery"],
];

let UID = 0;
const newId = (prefix) => `${prefix}_${Date.now().toString(36)}_${UID++}`;

/* Parse a stored CSS colour (#hex or rgb(...)) to [r,g,b] for the native
 * color_rgb selector; returns undefined for anything else (e.g. var(--…)). */
function parseColor(v) {
  if (typeof v !== "string") return undefined;
  let m = v.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (m) {
    let h = m[1];
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  m = v.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (m) return [+m[1], +m[2], +m[3]];
  return undefined;
}

export class EcoFlowSpaceCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _page: { state: true },
      _sel: { state: true },
    };
  }

  constructor() {
    super();
    this._config = {}; // HA may render (after .hass) before setConfig runs
    this._page = null;
    this._sel = null; // selected overlay id (for the drag preview highlight)
    this._modes = {}; // transient value-source mode per overlay/tile id
    this._drag = null;
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

  /* -- root -- */

  _renderRoot() {
    return html`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${DEVICE_SCHEMA}
        .computeLabel=${() => this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      <div class="nav">
        ${PAGES.map(
          (page) => html`<button class="nav-row" @click=${() => (this._page = page.id)}>
            <ha-icon class="nav-icon" icon=${page.icon}></ha-icon>
            <span class="nav-labels">
              <span class="nav-label">${this._t(`space.page.${page.id}`)}</span>
              <span class="nav-secondary">${this._summary(page.id)}</span>
            </span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>`
        )}
      </div>`;
  }

  _summary(pageId) {
    if (pageId === "appearance") {
      const style = this._config.house || DEFAULT_HOUSE_STYLE;
      const mode = this._config.house_mode || DEFAULT_HOUSE_MODE;
      return `${this._t("house.editor.style_n", { n: style })} · ${this._t(`house.mode.${mode}`)}`;
    }
    if (pageId === "weather") {
      return this._config.weather?.entity || this._t("editor.automatic");
    }
    if (pageId === "overlays") {
      return this._t("space.n_items", { n: (this._config.overlays || []).length });
    }
    if (pageId === "tiles") {
      return this._t("space.n_items", { n: (this._config.tiles || []).length });
    }
    if (pageId === "tabs") {
      return this._t("space.n_items", { n: this._tabs().length });
    }
    return "";
  }

  _renderSubpage(page) {
    return html`<div class="subpage-head">
        <button class="back" @click=${() => (this._page = null)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="subpage-title">${this._t(`space.page.${page.id}`)}</span>
      </div>
      ${page.id === "appearance"
        ? this._renderAppearance()
        : page.id === "weather"
          ? this._renderWeather()
          : page.id === "overlays"
            ? this._renderOverlays()
            : page.id === "tiles"
              ? this._renderTiles()
              : this._renderTabs()}`;
  }

  /* -- appearance (house render reused from the House card) -- */

  _renderAppearance() {
    const style = this._config.house || DEFAULT_HOUSE_STYLE;
    const mode = this._config.house_mode || DEFAULT_HOUSE_MODE;
    const battery = this._config.battery || DEFAULT_BATTERY;
    return html`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      <div class="grid">
        ${HOUSE_STYLES.map(
          (key) => html`<button
            class="opt ${style === key ? "on" : ""}"
            @click=${() => this._set("house", key, DEFAULT_HOUSE_STYLE)}
          >
            <img src=${housePreviewUrl(key, this.hass)} loading="lazy" alt=${key} />
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

      <div class="section">
        <ha-icon icon="mdi:home-battery-outline"></ha-icon>${this._t("house.editor.battery")}
      </div>
      <div class="grid small">
        ${BATTERY_BOXES.map(
          (key) => html`<button
            class="opt ${battery === key ? "on" : ""}"
            title=${this._t(`house.battery.${key}`)}
            @click=${() => this._set("battery", key, DEFAULT_BATTERY)}
          >
            <span
              class="batt-thumb"
              style=${`background-image:url(${batteryBoxUrl(key, this.hass)})`}
            ></span>
          </button>`
        )}
      </div>

      <div class="section">
        <ha-icon icon="mdi:eye-outline"></ha-icon>${this._t("house.page.display")}
      </div>
      ${TOGGLES.map(([key, def, icon]) => this._renderToggle(key, def, icon))}`;
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

  /* -- weather -- */

  _renderWeather() {
    const entity = this._config.weather?.entity || "";
    return html`<div class="hint top-hint">${this._t("space.weather_hint")}</div>
      <ha-form
        .hass=${this.hass}
        .data=${{ value: entity }}
        .schema=${[{ name: "value", selector: { entity: { domain: "weather" } } }]}
        .computeLabel=${() => this._t("space.weather_entity")}
        @value-changed=${(ev) => {
          ev.stopPropagation();
          this._setWeather("entity", ev.detail.value.value || "");
        }}
      ></ha-form>
      ${this._textField(this._t("space.f_low"), this._config.weather?.low || "", (v) =>
        this._setWeather("low", v)
      )}
      ${this._scaleField(this._t("space.f_weather_size"), this._config.weather_size, (v) =>
        this._set("weather_size", v, 1)
      )}

      <div class="section">
        <ha-icon icon="mdi:clock-outline"></ha-icon>${this._t("space.clock_title")}
      </div>
      <div class="row">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="row-label">${this._t("space.clock_show")}</span>
        <ha-switch
          .checked=${this._config.clock ?? false}
          @change=${(ev) => this._set("clock", ev.target.checked, false)}
        ></ha-switch>
      </div>
      ${this._config.clock
        ? html`<div class="row">
              <ha-icon icon="mdi:calendar-outline"></ha-icon>
              <span class="row-label">${this._t("space.clock_date")}</span>
              <ha-switch
                .checked=${this._config.clock_date ?? false}
                @change=${(ev) => this._set("clock_date", ev.target.checked, false)}
              ></ha-switch>
            </div>
            ${this._scaleField(this._t("space.f_clock_size"), this._config.clock_size, (v) =>
              this._set("clock_size", v, 1)
            )}`
        : ""}`;
  }

  _setWeather(key, value) {
    const weather = { ...(this._config.weather || {}) };
    if (!value) delete weather[key];
    else weather[key] = value;
    const config = { ...this._config, weather, type: `custom:${SPACE_CARD_TYPE}` };
    if (!Object.keys(weather).length) delete config.weather;
    this._dispatch(config);
  }

  /* -- overlays (drag-to-position preview + list) -- */

  _renderOverlays() {
    const overlays = this._config.overlays || [];
    return html`<div class="hint top-hint">${this._t("space.overlays_hint")}</div>
      <div
        class="preview"
        @pointermove=${this._onDragMove}
        @pointerup=${this._onDragEnd}
        @pointerleave=${this._onDragEnd}
      >
        <img class="preview-img" src=${houseImageUrl(this._config, this.hass)} alt="" />
        ${overlays.map(
          (ov) => html`<button
            class="chip ${this._sel === ov.id ? "sel" : ""}"
            style=${`left:${ov.x ?? 50}%;top:${ov.y ?? 50}%`}
            @pointerdown=${(e) => this._onDragStart(e, ov.id)}
            @click=${() => (this._sel = ov.id)}
          >
            ${ov.icon ? html`<ha-icon icon=${ov.icon}></ha-icon>` : ""}
            <span>${ov.label || ov.id}</span>
          </button>`
        )}
      </div>

      ${overlays.map((ov, i) => this._renderOverlayEditor(ov, i))}

      <button class="add-btn" @click=${this._addOverlay}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_overlay")}</span>
      </button>`;
  }

  _renderOverlayEditor(ov, i) {
    const open = this._sel === ov.id;
    const mode = this._sourceMode(ov);
    return html`<div class="item ${open ? "open" : ""}">
      <div class="item-head" @click=${() => (this._sel = open ? null : ov.id)}>
        ${ov.icon ? html`<ha-icon icon=${ov.icon}></ha-icon>` : html`<ha-icon icon="mdi:label-outline"></ha-icon>`}
        <span class="item-title">${ov.label || ov.id}</span>
        <ha-icon class="chev" icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
      </div>
      ${open
        ? html`<div class="item-body">
            ${this._renderPresetField("overlays", ov, i, OVERLAY_PRESETS)}
            ${this._textField(this._t("space.f_label"), ov.label || "", (v) =>
              this._updateItem("overlays", i, { label: v })
            )}
            ${this._iconField(this._t("space.f_icon"), ov.icon, (v) =>
              this._updateItem("overlays", i, { icon: v })
            )}
            ${ov.preset ? "" : this._renderSourceField("overlays", ov, i, mode)}
            ${this._textField(this._t("space.f_unit"), ov.unit ?? "", (v) =>
              this._updateItem("overlays", i, { unit: v || undefined })
            )}
            ${this._textField(this._t("space.f_secondary"), ov.secondary || "", (v) =>
              this._updateItem("overlays", i, { secondary: v || undefined })
            )}
            ${this._colorField(this._t("space.f_dot"), ov.dot, (v) =>
              this._updateItem("overlays", i, { dot: v })
            )}
            ${this._selectField(
              this._t("space.f_anchor"),
              ANCHOR_OPTIONS,
              ov.anchor || "center",
              (v) => this._updateItem("overlays", i, { anchor: v }),
              (a) => this._t(`space.anchor.${a}`)
            )}
            <div class="xy">
              ${this._numField("X %", ov.x ?? 50, (v) => this._updateItem("overlays", i, { x: v }))}
              ${this._numField("Y %", ov.y ?? 50, (v) => this._updateItem("overlays", i, { y: v }))}
            </div>
            ${this._colorField(this._t("space.f_color"), ov.color, (v) =>
              this._updateItem("overlays", i, { color: v })
            )}
            ${this._scaleField(this._t("space.f_size"), ov.size, (v) =>
              this._updateItem("overlays", i, { size: v === 1 ? undefined : v })
            )}
            <button class="del-btn" @click=${() => this._removeItem("overlays", i)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`
        : ""}
    </div>`;
  }

  /* Preset picker: "None (custom)" + the registry keys. Choosing a preset clears
   * any explicit source so it auto-binds; choosing None leaves it custom. */
  _renderPresetField(listKey, item, i, presets) {
    const options = ["", ...Object.keys(presets)];
    return html`${this._selectField(
        this._t("space.f_preset"),
        options,
        item.preset || "",
        (v) => {
          const patch = { preset: v || undefined };
          if (v) {
            patch.slot = undefined;
            patch.entity = undefined;
            patch.template = undefined;
          }
          this._updateItem(listKey, i, patch);
        },
        (k) => (k ? this._t(`space.preset.${k}`) : this._t("space.preset_none"))
      )}
      ${item.preset
        ? html`<div class="hint">${this._t("space.preset_hint")}</div>`
        : ""}`;
  }

  /* value source: auto (slot) / entity / template */
  _sourceMode(item) {
    if (this._modes[item.id]) return this._modes[item.id];
    if (isTemplate(item.template)) return "template";
    if (item.entity) return "entity";
    return "auto";
  }

  _renderSourceField(listKey, item, i, mode) {
    return html`<div class="src-modes">
        ${["auto", "entity", "template"].map(
          (id) => html`<button
            class="mode ${mode === id ? "on" : ""}"
            @click=${() => {
              this._modes = { ...this._modes, [item.id]: id };
              // Clear the other source fields so resolution is unambiguous.
              const patch = { slot: undefined, entity: undefined, template: undefined };
              this._updateItem(listKey, i, patch);
            }}
          >
            ${this._t(`space.src_${id}`)}
          </button>`
        )}
      </div>
      ${mode === "auto"
        ? this._selectField(
            this._t("space.f_slot"),
            SLOT_OPTIONS,
            item.slot || SLOT_OPTIONS[0],
            (v) => this._updateItem(listKey, i, { slot: v }),
            (s) => this._t(`slot.${s}`)
          )
        : mode === "entity"
          ? html`<ha-form
              .hass=${this.hass}
              .data=${{ value: isEntityId(item.entity) ? item.entity : "" }}
              .schema=${[{ name: "value", selector: { entity: {} } }]}
              .computeLabel=${() => this._t("editor.entity")}
              @value-changed=${(ev) => {
                ev.stopPropagation();
                this._updateItem(listKey, i, { entity: ev.detail.value.value || undefined });
              }}
            ></ha-form>`
          : html`<ha-form
              .hass=${this.hass}
              .data=${{ value: isTemplate(item.template) ? item.template : "" }}
              .schema=${[{ name: "value", selector: { template: {} } }]}
              .computeLabel=${() => this._t("editor.value_template")}
              @value-changed=${(ev) => {
                ev.stopPropagation();
                this._updateItem(listKey, i, { template: ev.detail.value.value || undefined });
              }}
            ></ha-form>`}`;
  }

  _addOverlay() {
    const overlays = [...(this._config.overlays || [])];
    const id = newId("ov");
    overlays.push({ id, label: "Overlay", x: 50, y: 50, anchor: "center", slot: SLOT_OPTIONS[0] });
    this._setList("overlays", overlays);
    this._sel = id;
  }

  /* -- tiles -- */

  _renderTiles() {
    const tiles = this._config.tiles || [];
    return html`<div class="hint top-hint">${this._t("space.tiles_hint")}</div>
      ${this._scaleField(this._t("space.f_tiles_size"), this._config.tiles_size, (v) =>
        this._set("tiles_size", v, 1)
      )}
      ${tiles.map((tile, i) => this._renderTileEditor(tile, i))}
      <button class="add-btn" @click=${this._addTile}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tile")}</span>
      </button>`;
  }

  _renderTileEditor(tile, i) {
    const open = this._sel === tile.id;
    const mode = this._sourceMode(tile);
    return html`<div class="item ${open ? "open" : ""}">
      <div class="item-head" @click=${() => (this._sel = open ? null : tile.id)}>
        ${tile.icon ? html`<ha-icon icon=${tile.icon}></ha-icon>` : html`<ha-icon icon="mdi:card-outline"></ha-icon>`}
        <span class="item-title">${tile.label || tile.id}</span>
        <span class="reorder">
          <button @click=${(e) => { e.stopPropagation(); this._moveItem("tiles", i, -1); }}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button @click=${(e) => { e.stopPropagation(); this._moveItem("tiles", i, 1); }}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
        </span>
      </div>
      ${open
        ? html`<div class="item-body">
            ${this._renderPresetField("tiles", tile, i, TILE_PRESETS)}
            ${this._textField(this._t("space.f_label"), tile.label || "", (v) =>
              this._updateItem("tiles", i, { label: v })
            )}
            ${this._iconField(this._t("space.f_icon"), tile.icon, (v) =>
              this._updateItem("tiles", i, { icon: v })
            )}
            ${this._colorField(this._t("space.f_icon_color"), tile.color, (v) =>
              this._updateItem("tiles", i, { color: v })
            )}
            ${tile.preset ? "" : this._renderSourceField("tiles", tile, i, mode)}
            ${this._textField(this._t("space.f_unit"), tile.unit ?? "", (v) =>
              this._updateItem("tiles", i, { unit: v || undefined })
            )}
            ${this._textField(this._t("space.f_secondary"), tile.secondary || "", (v) =>
              this._updateItem("tiles", i, { secondary: v || undefined })
            )}
            <button class="del-btn" @click=${() => this._removeItem("tiles", i)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`
        : ""}
    </div>`;
  }

  _addTile() {
    const tiles = [...(this._config.tiles || [])];
    const id = newId("tile");
    tiles.push({ id, label: "Tile", slot: SLOT_OPTIONS[0] });
    this._setList("tiles", tiles);
    this._sel = id;
  }

  /* -- tabs -- */

  _tabs() {
    return this._config.tabs && this._config.tabs.length
      ? this._config.tabs
      : [{ id: "home", icon: "mdi:home", label: "Home" }];
  }

  _renderTabs() {
    const tabs = this._tabs();
    return html`<div class="row">
        <ha-icon icon="mdi:label-outline"></ha-icon>
        <span class="row-label">${this._t("space.rail_labels")}</span>
        <ha-switch
          .checked=${this._config.rail_labels ?? false}
          @change=${(ev) => this._set("rail_labels", ev.target.checked, false)}
        ></ha-switch>
      </div>
      ${this._selectField(
        this._t("space.rail_align"),
        ["start", "center", "end"],
        this._config.rail_align || "start",
        (v) => this._set("rail_align", v, "start"),
        (a) => this._t(`space.align.${a}`)
      )}
      ${this._scaleField(this._t("space.f_rail_size"), this._config.rail_size, (v) =>
        this._set("rail_size", v, 1)
      )}
      <div class="hint top-hint" style="margin-top:14px">${this._t("space.tabs_hint")}</div>
      ${tabs.map((tab, i) =>
        i === 0 ? this._renderHomeTab(tab) : this._renderTabEditor(tab, i)
      )}
      <button class="add-btn" @click=${this._addTab}>
        <ha-icon icon="mdi:plus"></ha-icon><span>${this._t("space.add_tab")}</span>
      </button>`;
  }

  _renderHomeTab(tab) {
    return html`<div class="item">
      <div class="item-head static">
        <ha-icon icon=${tab.icon || "mdi:home"}></ha-icon>
        <span class="item-title">${tab.label || this._t("house.home")}</span>
        <span class="badge">${this._t("space.home_tab")}</span>
      </div>
    </div>`;
  }

  _renderTabEditor(tab, i) {
    const open = this._sel === `tab${i}`;
    return html`<div class="item ${open ? "open" : ""}">
      <div class="item-head" @click=${() => (this._sel = open ? null : `tab${i}`)}>
        <ha-icon icon=${tab.icon || "mdi:view-dashboard-outline"}></ha-icon>
        <span class="item-title">${tab.label || tab.path || `Tab ${i}`}</span>
        <ha-icon class="chev" icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
      </div>
      ${open
        ? html`<div class="item-body">
            ${this._textField(this._t("space.f_label"), tab.label || "", (v) =>
              this._updateItem("tabs", i, { label: v })
            )}
            ${this._iconField(this._t("space.f_icon"), tab.icon, (v) =>
              this._updateItem("tabs", i, { icon: v })
            )}
            ${this._textField(
              this._t("space.f_path"),
              tab.path || "",
              (v) => this._updateItem("tabs", i, { path: v }),
              this._t("space.path_hint")
            )}
            <button class="del-btn" @click=${() => this._removeItem("tabs", i)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon><span>${this._t("space.remove")}</span>
            </button>
          </div>`
        : ""}
    </div>`;
  }

  _addTab() {
    const tabs = [...this._tabs()];
    tabs.push({ id: newId("tab"), icon: "mdi:view-dashboard-outline", label: "View", path: "" });
    this._setList("tabs", tabs);
    this._sel = `tab${tabs.length - 1}`;
  }

  /* -- small field helpers -- */

  /* Text field via ha-form — a bare <ha-textfield> isn't reliably registered for
   * a bundled custom card, so the inputs rendered invisible. ha-form loads its
   * own components. */
  _textField(label, value, onChange, helper) {
    return html`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{ value: value ?? "" }}
      .schema=${[{ name: "value", selector: { text: {} } }]}
      .computeLabel=${() => label}
      .computeHelper=${() => helper || ""}
      @value-changed=${(ev) => {
        ev.stopPropagation();
        onChange(ev.detail.value.value ?? "");
      }}
    ></ha-form>`;
  }

  /* Icon field using Home Assistant's native icon selector (mdi picker). */
  _iconField(label, value, onChange) {
    return html`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{ value: value ?? "" }}
      .schema=${[{ name: "value", selector: { icon: {} } }]}
      .computeLabel=${() => label}
      @value-changed=${(ev) => {
        ev.stopPropagation();
        onChange(ev.detail.value.value || undefined);
      }}
    ></ha-form>`;
  }

  /* Colour field using HA's native RGB colour picker; stored as a CSS
   * "rgb(r, g, b)" string. The picker has no clear control, so a reset button
   * is shown once a colour is set (removes it / restores the default). */
  _colorField(label, value, onChange) {
    return html`<div class="color-field">
      <ha-form
        class="field"
        .hass=${this.hass}
        .data=${{ value: parseColor(value) }}
        .schema=${[{ name: "value", selector: { color_rgb: {} } }]}
        .computeLabel=${() => label}
        @value-changed=${(ev) => {
          ev.stopPropagation();
          const v = ev.detail.value.value;
          onChange(Array.isArray(v) ? `rgb(${v[0]}, ${v[1]}, ${v[2]})` : undefined);
        }}
      ></ha-form>
      ${value
        ? html`<button
            class="color-clear"
            title=${this._t("space.clear_color")}
            @click=${() => onChange(undefined)}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>`
        : ""}
    </div>`;
  }

  _numField(label, value, onChange) {
    return html`<ha-form
      class="field num"
      .hass=${this.hass}
      .data=${{ value }}
      .schema=${[{ name: "value", selector: { number: { min: 0, max: 100, mode: "box" } } }]}
      .computeLabel=${() => label}
      @value-changed=${(ev) => {
        const n = Number(ev.detail.value.value);
        if (Number.isFinite(n)) onChange(Math.max(0, Math.min(100, Math.round(n))));
      }}
    ></ha-form>`;
  }

  /* A size multiplier (×) slider, 0.5–3, default 1. */
  _scaleField(label, value, onChange) {
    return html`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{ value: value ?? 1 }}
      .schema=${[
        { name: "value", selector: { number: { min: 0.5, max: 3, step: 0.1, mode: "slider" } } },
      ]}
      .computeLabel=${() => label}
      @value-changed=${(ev) => {
        ev.stopPropagation();
        const n = Number(ev.detail.value.value);
        onChange(Number.isFinite(n) ? n : 1);
      }}
    ></ha-form>`;
  }

  /* A dropdown via ha-form's select selector — reliable value binding (a raw
   * ha-select's @selected/index is flaky on re-render). */
  _selectField(label, options, value, onChange, labelFn) {
    const opts = options.map((o) => ({ value: o, label: labelFn ? labelFn(o) : o || "—" }));
    return html`<ha-form
      class="field"
      .hass=${this.hass}
      .data=${{ value }}
      .schema=${[{ name: "value", selector: { select: { options: opts, mode: "dropdown" } } }]}
      .computeLabel=${() => label}
      @value-changed=${(ev) => {
        ev.stopPropagation();
        onChange(ev.detail.value.value ?? "");
      }}
    ></ha-form>`;
  }

  /* -- drag-to-position -- */

  _onDragStart(ev, id) {
    ev.preventDefault();
    this._sel = id;
    const preview = this.renderRoot.querySelector(".preview");
    this._drag = { id, rect: preview.getBoundingClientRect() };
    preview.setPointerCapture?.(ev.pointerId);
  }

  _onDragMove(ev) {
    if (!this._drag) return;
    const { rect, id } = this._drag;
    const x = Math.max(0, Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((ev.clientY - rect.top) / rect.height) * 100));
    const overlays = this._config.overlays || [];
    const idx = overlays.findIndex((o) => o.id === id);
    if (idx < 0) return;
    this._updateItem("overlays", idx, { x: Math.round(x), y: Math.round(y) });
  }

  _onDragEnd() {
    this._drag = null;
  }

  /* -- config plumbing (only deviations from defaults persisted) -- */

  _deviceChanged(ev) {
    ev.stopPropagation();
    const config = { ...this._config, ...ev.detail.value, type: `custom:${SPACE_CARD_TYPE}` };
    if (!config.device) delete config.device;
    this._dispatch(config);
  }

  _set(key, value, def) {
    const config = { ...this._config, type: `custom:${SPACE_CARD_TYPE}` };
    if (value === def || value === "" || value == null) delete config[key];
    else config[key] = value;
    this._dispatch(config);
  }

  _setList(key, arr) {
    const config = { ...this._config, type: `custom:${SPACE_CARD_TYPE}` };
    if (!arr || !arr.length) delete config[key];
    else config[key] = arr;
    this._dispatch(config);
  }

  _updateItem(key, i, patch) {
    const arr = [...(key === "tabs" ? this._tabs() : this._config[key] || [])];
    if (!arr[i]) return;
    const next = { ...arr[i], ...patch };
    // Strip undefined keys so the stored config stays clean.
    for (const k of Object.keys(next)) if (next[k] === undefined) delete next[k];
    arr[i] = next;
    this._setList(key, arr);
  }

  _removeItem(key, i) {
    const arr = [...(key === "tabs" ? this._tabs() : this._config[key] || [])];
    arr.splice(i, 1);
    this._setList(key, arr);
    this._sel = null;
  }

  _moveItem(key, i, dir) {
    const arr = [...(this._config[key] || [])];
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    this._setList(key, arr);
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
      }
      .section ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 8px;
      }
      .grid.small {
        grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
      }
      .opt {
        border: 2px solid transparent;
        border-radius: 12px;
        background: var(--secondary-background-color);
        padding: 4px;
        cursor: pointer;
      }
      .opt.on {
        border-color: var(--primary-color);
      }
      .opt img {
        width: 100%;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 6px;
      }
      .batt-thumb {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-position: center 58%;
        background-size: 200%;
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
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin: 4px 4px 10px;
      }
      .top-hint {
        margin: 0 4px 12px;
      }

      /* drag preview */
      .preview {
        position: relative;
        width: 100%;
        aspect-ratio: 2340 / 1680;
        border-radius: 12px;
        overflow: hidden;
        background: #1b1f24;
        margin-bottom: 16px;
        touch-action: none;
        user-select: none;
      }
      .preview-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: top center;
      }
      .chip {
        position: absolute;
        transform: translate(-50%, -50%);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 2px solid transparent;
        background: rgba(20, 24, 28, 0.78);
        color: #fff;
        border-radius: 10px;
        padding: 3px 8px;
        font-size: 0.78em;
        cursor: grab;
        white-space: nowrap;
      }
      .chip:active {
        cursor: grabbing;
      }
      .chip.sel {
        border-color: var(--primary-color);
      }
      .chip ha-icon {
        --mdc-icon-size: 15px;
      }

      /* list items */
      .item {
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        border-radius: 12px;
        margin-bottom: 8px;
        overflow: hidden;
      }
      .item.open {
        border-color: var(--primary-color);
      }
      .item-head {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        cursor: pointer;
      }
      .item-head.static {
        cursor: default;
      }
      .item-head > ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
      .item-title {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .chev {
        color: var(--secondary-text-color);
      }
      .badge {
        font-size: 0.72em;
        color: var(--secondary-text-color);
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
        border-radius: 8px;
        padding: 2px 8px;
      }
      .reorder {
        display: inline-flex;
      }
      .reorder button {
        border: none;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        padding: 2px;
      }
      .item-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 4px 12px 14px;
      }
      .field {
        width: 100%;
      }
      .color-field {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .color-field .field {
        flex: 1;
        min-width: 0;
      }
      .color-clear {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
      }
      .color-clear:hover {
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      .color-clear ha-icon {
        --mdc-icon-size: 18px;
      }
      .xy {
        display: flex;
        gap: 10px;
      }
      .xy .num {
        flex: 1;
      }
      .src-modes {
        display: flex;
        background: var(--secondary-background-color);
        border-radius: 10px;
        padding: 3px;
      }
      .add-btn,
      .del-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 8px 4px;
        font-size: 0.92em;
      }
      .add-btn {
        color: var(--primary-color);
        margin-top: 4px;
      }
      .del-btn {
        color: var(--error-color, #db4437);
        align-self: flex-start;
      }
      .add-btn ha-icon,
      .del-btn ha-icon {
        --mdc-icon-size: 18px;
      }
    `;
  }
}
