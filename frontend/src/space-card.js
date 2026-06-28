/* EcoFlow Space Card — the full-screen whole-home dashboard.
 *
 * Recreates the EcoFlow app's "space" screen: a left sidebar of nav buttons and
 * a main area. The first ("home") tab shows the house illustration (shared with
 * the House card — same 2340×1680 render + 1170×840 overlays and the same
 * animated Grid / Solar / Home / battery flows) with fully configurable floating
 * overlays, a weather widget and a row of stat tiles. Every other tab is
 * user-defined (icon + label) and embeds an existing Lovelace view by path,
 * rendered inline.
 *
 * Everything is configurable from the visual editor; entities are auto-
 * discovered from the ecoflow_iot integration exactly like the other cards, and
 * any overlay/tile may instead be bound to an explicit entity or a live Jinja
 * template. */

import { LitElement, html } from "lit";
import { SPACE_CARD_TYPE } from "./const.js";
import { entityMap, streamDevices } from "./entities.js";
import { isEntityId, isTemplate, numState, splitKWh, splitPower } from "./format.js";
import {
  fetchEnergyTotals,
  fetchHourlyWh,
  fetchSolarForecasts,
  forecastHourly,
  forecastTodayWh,
  mergeForecastWhHours,
} from "./energy.js";
import { renderForecastGraph } from "./views/forecast-graph.js";
import { renderPanels } from "./views/panels.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
import {
  DEFAULT_HOUSE_STYLE,
  batteryBoxUrl,
  batteryHasOverlays,
  flowTheme,
  houseImageUrl,
} from "./houses.js";
import { ACTIVE_W, FlowController, deriveFlowStates } from "./flows.js";
import { spaceCardStyles } from "./space-styles.js";

// The scene's auto-discovered sensor slots (same keys the House card reads).
const SLOT_GRID = "sensor.grid_power";
const SLOT_GRID_RAW = "sensor.sys_grid_power";
const SLOT_SOLAR = "sensor.pv_total";
const SLOT_LOAD = "sensor.sys_load";
const SLOT_BAT = "sensor.bat_power";
const SLOT_SOC = "sensor.cms_batt_soc";
const SLOT_LOAD_FROM_GRID = "sensor.load_from_grid";
const SLOT_LOAD_FROM_PV = "sensor.load_from_pv";
const SLOT_LOAD_FROM_BAT = "sensor.load_from_bat";
const SLOT_BACKUP = "number.backup_reserve";

// Anchor -> CSS translate so x/y pin the chosen point of the overlay.
const ANCHORS = {
  center: "translate(-50%, -50%)",
  "top-left": "translate(0, 0)",
  "top-center": "translate(-50%, 0)",
  "top-right": "translate(-100%, 0)",
  "bottom-left": "translate(0, -100%)",
  "bottom-center": "translate(-50%, -100%)",
  "bottom-right": "translate(-100%, -100%)",
};

// Energy-flow accent colours (HA's Energy dashboard theme vars, with fallbacks).
const C_SOLAR = "var(--energy-solar-color, #ff9800)";
const C_IMPORT = "var(--energy-grid-consumption-color, #488fc2)";
const C_EXPORT = "var(--energy-grid-return-color, #8353d1)";
const C_BAT_IN = "var(--energy-battery-in-color, #3ddc84)";
const C_BAT_OUT = "var(--energy-battery-out-color, #f06292)";

/* Pre-defined overlays: auto-bind to the discovered EcoFlow power sensors,
 * format W -> kW, and colour the value dynamically (solar amber, grid
 * import/export, battery charge/discharge). An explicit entity/template still
 * overrides the data source; label/icon/colour can still be overridden too. */
export const OVERLAY_PRESETS = {
  solar: {
    labelKey: "card.solar",
    icon: "mdi:solar-power-variant",
    slot: SLOT_SOLAR,
    format: "power",
    color: (v) => (v > ACTIVE_W ? C_SOLAR : null),
  },
  grid: {
    labelKey: "house.grid",
    icon: "mdi:transmission-tower",
    slot: SLOT_GRID,
    slotFallback: SLOT_GRID_RAW,
    format: "power-abs",
    color: (v) => (v > ACTIVE_W ? C_IMPORT : v < -ACTIVE_W ? C_EXPORT : null),
  },
  battery: {
    labelKey: "card.battery",
    icon: "mdi:home-battery",
    slot: SLOT_BAT,
    format: "power-abs",
    color: (v) => (v > ACTIVE_W ? C_BAT_IN : v < -ACTIVE_W ? C_BAT_OUT : null),
    secondarySlot: SLOT_SOC,
    secondaryUnit: "%",
  },
};

/* Pre-defined tiles: today's figures from the Home Assistant Energy dashboard
 * (energy/get_prefs + statistics). An explicit entity/template overrides the
 * source. */
export const TILE_PRESETS = {
  solar_today: {
    labelKey: "space.preset.solar_today",
    icon: "mdi:solar-power",
    color: C_SOLAR,
    energyKey: "solar",
    format: "energy",
    secondaryKey: "space.today",
  },
  usage: {
    labelKey: "space.preset.usage",
    icon: "mdi:home-lightning-bolt",
    color: C_IMPORT,
    energyKey: "consumption",
    format: "energy",
    secondaryKey: "space.today",
  },
  energy_independence: {
    labelKey: "space.preset.energy_independence",
    icon: "mdi:leaf",
    color: C_BAT_IN,
    energyKey: "independence",
    format: "percent",
  },
};

export class EcoFlowSpaceCard extends LitElement {
  static styles = spaceCardStyles;

  static get properties() {
    return { hass: {}, _config: {}, _tab: { state: true }, _dialog: { state: true } };
  }

  constructor() {
    super();
    this._tab = 0;
    this._flows = new FlowController();
    // Live results of any overlay/tile Jinja templates, keyed by template text.
    this._tmplUnsub = {};
    this._tmplResults = {};
    // Embedded-view state for the active custom tab.
    this._embed = { path: null, status: null, els: [] };
    // Today's Energy-dashboard totals for preset tiles (null = unavailable,
    // undefined = not fetched yet); refreshed on a timer.
    this._energy = undefined;
    this._energyTimer = null;
    // Top-bar clock text; ticked once a second but only re-renders on change.
    this._clock = "";
    this._clockTimer = null;
    // "Solar today" dialog (reuses the Energy card's forecast graph).
    this._dialog = null;
    this._solarHourly = {};
    this._solarTotalWh = undefined;
    this._solarForecasts = {};
    this._fcTip = null;
  }

  connectedCallback() {
    super.connectedCallback();
    ensureHaComponents();
    // Preset tiles read the Energy dashboard; refresh now and every 5 minutes
    // (statistics only tick a few times an hour, so polling is cheap).
    this._refreshEnergy();
    this._energyTimer = setInterval(() => this._refreshEnergy(), 5 * 60 * 1000);
    this._clock = this._formatClock();
    this._clockTimer = setInterval(() => {
      const s = this._formatClock();
      if (s !== this._clock) {
        this._clock = s;
        this.requestUpdate();
      }
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._flows.destroy();
    for (const unsub of Object.values(this._tmplUnsub)) {
      if (typeof unsub === "function") unsub();
    }
    this._tmplUnsub = {};
    if (this._energyTimer) clearInterval(this._energyTimer);
    this._energyTimer = null;
    if (this._clockTimer) clearInterval(this._clockTimer);
    this._clockTimer = null;
  }

  /* Under Home Assistant Cast the frontend is served from cast.home-assistant.io
   * and proxies to the instance, so hassUrl() points at a different origin than
   * the page. There's no HA header on Cast, so the card should fill the whole
   * screen (see --ef-view / :host([cast])). */
  _reflectCast() {
    let cast = false;
    try {
      const u = this.hass?.hassUrl?.("/");
      if (u) cast = new URL(u, location.href).origin !== location.origin;
    } catch (e) {
      /* ignore */
    }
    this.toggleAttribute("cast", cast);
  }

  _formatClock() {
    const d = new Date();
    try {
      return d.toLocaleTimeString(this.hass?.locale?.language || undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return d.toTimeString().slice(0, 5);
    }
  }

  firstUpdated() {
    // When rendered inside the card-editor's preview (hui-card-preview), cap the
    // height so the full-screen card doesn't overflow the short preview pane.
    let node = this;
    for (let i = 0; i < 8 && node; i++) {
      const host = node.getRootNode?.()?.host;
      if (host && /^hui-(card-preview|dialog-edit-card)/.test(host.localName || "")) {
        this.toggleAttribute("in-preview", true);
        break;
      }
      node = host;
    }
  }

  async _refreshEnergy() {
    if (!this.hass) return;
    // Only hit the WS if a preset tile actually needs Energy-dashboard data.
    const needs = (this._config.tiles || []).some(
      (t) =>
        TILE_PRESETS[t.preset] &&
        !isTemplate(t.template) &&
        !(t.entity && isEntityId(t.entity)) &&
        !t.slot
    );
    if (!needs) return;
    const totals = await fetchEnergyTotals(this.hass);
    this._energy = totals;
    this.requestUpdate();
  }

  setConfig(config) {
    this._config = config || {};
  }

  static getConfigElement() {
    return document.createElement(`${SPACE_CARD_TYPE}-editor`);
  }

  /* The out-of-the-box card: presets that auto-discover the EcoFlow integration
   * and pull today's figures from the Energy dashboard, so a freshly added card
   * already looks like the app with no manual entity wiring. */
  static getStubConfig() {
    return {
      tabs: [{ id: "home", icon: "mdi:home", label: "Home" }],
      overlays: [
        { id: "solar", preset: "solar", x: 30, y: 27, anchor: "center" },
        { id: "grid", preset: "grid", x: 22, y: 62, anchor: "center" },
        { id: "battery", preset: "battery", x: 52, y: 62, anchor: "center" },
      ],
      tiles: [
        { id: "solar", preset: "solar_today" },
        { id: "usage", preset: "usage" },
        { id: "independence", preset: "energy_independence" },
      ],
      house: DEFAULT_HOUSE_STYLE,
    };
  }

  getCardSize() {
    return 12;
  }

  _t(key, vars) {
    return localize(this.hass, key, vars);
  }

  _show(key, def = true) {
    return this._config[key] ?? def;
  }

  /* -- entity resolution (mirrors the House / Energy cards) -- */

  get _device() {
    const devices = streamDevices(this.hass);
    if (!devices.length) return null;
    if (this._config.device) {
      return devices.find((d) => d.deviceId === this._config.device) || devices[0];
    }
    return devices[0];
  }

  _slotEntity(slot) {
    return this._map?.[slot];
  }

  // Compatibility shims so the shared panels view (views/panels.js) can read
  // the scene's per-string PV sensors from this card.
  _state(slot) {
    return this._slotState(slot);
  }
  _entityId(slot) {
    return this._slotEntity(slot);
  }
  _moreInfoId(entityId) {
    this._moreInfo(entityId);
  }

  _slotState(slot) {
    const id = this._slotEntity(slot);
    return id ? this.hass.states[id] : undefined;
  }

  /* Grid power, positive = importing (the grid_power sensor carries the
   * invert_grid_sign fix; sys_grid_power is the raw, oppositely-signed value). */
  _grid() {
    const grid = this._slotState(SLOT_GRID);
    return numState(grid != null ? grid : this._slotState(SLOT_GRID_RAW));
  }

  _flowStates() {
    const route = parseInt(this._config.house || DEFAULT_HOUSE_STYLE, 10) || 1;
    // No device: a synthetic "sunny day" so every flow animates in the preview.
    if (!this._device) {
      return deriveFlowStates({ grid: -400, solar: 1500, load: 700, bat: 500, soc: 65, backup: 20, loadFromPv: 700, route });
    }
    return deriveFlowStates({
      grid: this._grid(),
      solar: numState(this._slotState(SLOT_SOLAR)),
      load: numState(this._slotState(SLOT_LOAD)),
      bat: numState(this._slotState(SLOT_BAT)),
      soc: numState(this._slotState(SLOT_SOC)),
      backup: numState(this._slotState(SLOT_BACKUP)),
      loadFromGrid: numState(this._slotState(SLOT_LOAD_FROM_GRID)),
      loadFromPv: numState(this._slotState(SLOT_LOAD_FROM_PV)),
      loadFromBat: numState(this._slotState(SLOT_LOAD_FROM_BAT)),
      route,
    });
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      })
    );
  }

  /* -- "Solar today" dialog (same hourly-production + forecast graph as the
   * EcoFlow Energy card; opened from the solar overlay / tile) -- */

  async _openSolar() {
    this._dialog = "solar";
    if (this._solarTotalWh === undefined) await this._refreshSolar();
  }

  async _refreshSolar() {
    const id = this._slotEntity("sensor.solar_energy");
    const ref = new Date();
    const from = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
    const hours = id ? await fetchHourlyWh(this.hass, id, from) : null;
    this._solarHourly = hours || {};
    this._solarTotalWh = hours
      ? Object.values(hours).reduce((s, w) => s + (w || 0), 0)
      : null;
    this._solarForecasts = await fetchSolarForecasts(this.hass);
    this.requestUpdate();
  }

  _renderSolarDialog() {
    const ref = new Date();
    const merged = mergeForecastWhHours(this._solarForecasts || {});
    const graph = renderForecastGraph(this, {
      actual: this._solarHourly || {},
      forecast: forecastHourly(merged, ref),
      totalWh: this._solarTotalWh,
      forecastWh: forecastTodayWh(merged, ref),
      currentHour: ref.getHours(),
      showForecast: Object.keys(merged).length > 0,
      title: this._t("card.today"),
    });
    return html`<ha-adaptive-dialog
      open
      width="large"
      header-title=${this._t("card.solar")}
      @closed=${() => (this._dialog = null)}
    >
      <div class="dlg-body">
        ${graph}
        <div class="dlg-section">${this._t("panels.title")}</div>
        ${renderPanels(this)}
      </div>
    </ha-adaptive-dialog>`;
  }

  /* -- live templates for overlays / tiles -- */

  async _syncTemplates() {
    if (!this.hass?.connection) return;
    const templates = [];
    for (const ov of this._config.overlays || []) {
      if (isTemplate(ov.template)) templates.push(ov.template);
      if (isTemplate(ov.secondary)) templates.push(ov.secondary);
    }
    for (const tile of this._config.tiles || []) {
      if (isTemplate(tile.template)) templates.push(tile.template);
      if (isTemplate(tile.secondary)) templates.push(tile.secondary);
    }
    for (const template of templates) {
      if (this._tmplUnsub[template]) continue;
      this._tmplUnsub[template] = true; // guard against re-subscribing while awaiting
      try {
        this._tmplUnsub[template] = await this.hass.connection.subscribeMessage(
          (msg) => {
            this._tmplResults[template] = msg.result;
            this.requestUpdate();
          },
          { type: "render_template", template }
        );
      } catch (e) {
        this._tmplResults[template] = "⚠";
        this.requestUpdate();
      }
    }
    // Drop subscriptions for templates no longer referenced.
    for (const known of Object.keys(this._tmplUnsub)) {
      if (!templates.includes(known)) {
        const unsub = this._tmplUnsub[known];
        if (typeof unsub === "function") unsub();
        delete this._tmplUnsub[known];
        delete this._tmplResults[known];
      }
    }
  }

  /* Display an entity's state respecting its Home Assistant formatting (display
   * precision, locale grouping, device_class), split into { num, unit } so they
   * can be sized separately. Falls back to the raw state on older frontends or
   * when reading an attribute. */
  _entityDisplay(st, spec) {
    const attrUnit = st.attributes?.unit_of_measurement || "";
    if (!spec.attribute && typeof this.hass.formatEntityState === "function") {
      try {
        const full = this.hass.formatEntityState(st);
        if (full != null && full !== "") {
          let num = full;
          if (attrUnit && full.endsWith(attrUnit)) {
            num = full.slice(0, full.length - attrUnit.length).trim();
          }
          return { num, unit: spec.unit ?? (num === full ? "" : attrUnit) };
        }
      } catch (e) {
        /* fall through to raw */
      }
    }
    const raw = spec.attribute ? st.attributes?.[spec.attribute] : st.state;
    const num = raw == null || raw === "" ? "–" : String(raw);
    return { num, unit: num === "–" ? "" : spec.unit ?? (spec.attribute ? "" : attrUnit) };
  }

  /* Format a raw value per a preset's format hint into { n, u }. */
  _fmt(format, raw) {
    const n = Number(raw);
    if (format === "power") return splitPower(n);
    if (format === "power-abs") return splitPower(Math.abs(n));
    if (format === "energy") return splitKWh(n);
    if (format === "percent")
      return { n: Number.isFinite(n) ? String(Math.round(n)) : "–", u: "%" };
    return { n: raw == null || raw === "" ? "–" : String(raw), u: "" };
  }

  /* Build an overlay's display: preset defaults (label/icon/format/colour/slot)
   * merged with any explicit overrides. Value source priority: template >
   * explicit entity > explicit slot > preset slot (auto-discovered). */
  _overlayView(ov) {
    const p = ov.preset ? OVERLAY_PRESETS[ov.preset] : null;
    const view = {
      label: ov.label ?? (p ? this._t(p.labelKey) : ""),
      icon: ov.icon ?? p?.icon,
      num: "",
      unit: "",
      color: ov.color || null,
      entityId: ov.tap_entity || null,
      secondary: "",
      dot: ov.dot,
    };

    if (isTemplate(ov.template)) {
      const r = this._tmplResults[ov.template];
      view.num = r == null ? "…" : String(r);
      view.unit = r == null ? "" : ov.unit || "";
    } else {
      const eid =
        (ov.entity && isEntityId(ov.entity) && ov.entity) ||
        (ov.slot && this._slotEntity(ov.slot)) ||
        (p?.slot && this._slotEntity(p.slot)) ||
        (p?.slotFallback && this._slotEntity(p.slotFallback)) ||
        null;
      const st = eid ? this.hass.states[eid] : null;
      if (st) {
        if (p?.format) {
          const raw = ov.attribute ? st.attributes?.[ov.attribute] : st.state;
          const f = this._fmt(p.format, raw);
          view.num = f.n;
          view.unit = ov.unit ?? f.u;
          if (!view.color && p.color) view.color = p.color(Number(raw));
        } else {
          const d = this._entityDisplay(st, ov);
          view.num = d.num;
          view.unit = d.unit;
        }
        view.entityId = ov.tap_entity || eid;
        if (p?.secondarySlot) {
          const sid = this._slotEntity(p.secondarySlot);
          const ss = sid ? this.hass.states[sid] : null;
          const sv = ss ? Number(ss.state) : NaN;
          if (Number.isFinite(sv)) view.secondary = `${Math.round(sv)}${p.secondaryUnit || ""}`;
        }
      } else {
        view.entityId = ov.tap_entity || eid;
      }
    }
    if (ov.secondary) view.secondary = this._resolveValue(ov.secondary);
    return view;
  }

  /* Build a tile's display. A preset pulls today's value from the Energy
   * dashboard unless an explicit entity/template/slot overrides the source;
   * label/icon/colour come from the preset and can be overridden. */
  _tileView(tile) {
    const p = tile.preset ? TILE_PRESETS[tile.preset] : null;
    const view = {
      label: tile.label ?? (p ? this._t(p.labelKey) : ""),
      icon: tile.icon ?? p?.icon,
      color: tile.color || p?.color || null,
      num: "–",
      unit: "",
      entityId: tile.tap_entity || null,
      secondary: "",
    };
    const hasSource =
      isTemplate(tile.template) || (tile.entity && isEntityId(tile.entity)) || tile.slot;

    if (p && !hasSource) {
      const val = this._energy ? this._energy[p.energyKey] : null;
      if (val != null) {
        const f = this._fmt(p.format, val);
        view.num = f.n;
        view.unit = tile.unit ?? f.u;
      }
    } else if (isTemplate(tile.template)) {
      const r = this._tmplResults[tile.template];
      view.num = r == null ? "…" : String(r);
      view.unit = r == null ? "" : tile.unit || "";
    } else {
      const eid =
        (tile.entity && isEntityId(tile.entity) && tile.entity) ||
        (tile.slot && this._slotEntity(tile.slot)) ||
        null;
      const st = eid ? this.hass.states[eid] : null;
      if (st) {
        if (p?.format) {
          const raw = tile.attribute ? st.attributes?.[tile.attribute] : st.state;
          const f = this._fmt(p.format, raw);
          view.num = f.n;
          view.unit = tile.unit ?? f.u;
        } else {
          const d = this._entityDisplay(st, tile);
          view.num = d.num;
          view.unit = d.unit;
        }
        view.entityId = tile.tap_entity || eid;
      }
    }
    view.secondary = tile.secondary
      ? this._resolveValue(tile.secondary)
      : p?.secondaryKey
        ? this._t(p.secondaryKey)
        : "";
    return view;
  }

  /* A bare string that may be a live template, an entity id, or literal text
   * (used for a tile's secondary line). */
  _resolveValue(value) {
    if (!value) return "";
    if (isTemplate(value)) {
      const r = this._tmplResults[value];
      return r == null ? "…" : String(r);
    }
    if (isEntityId(value)) {
      const st = this.hass.states[value];
      if (!st) return "";
      if (typeof this.hass.formatEntityState === "function") {
        try {
          return this.hass.formatEntityState(st);
        } catch (e) {
          /* fall through */
        }
      }
      const unit = st.attributes?.unit_of_measurement;
      return unit ? `${st.state} ${unit}` : st.state;
    }
    return value;
  }

  /* -- lifecycle -- */

  updated(changed) {
    super.updated(changed);
    this._syncTemplates();
    if (changed.has("hass")) this._reflectCast();

    const onHome = this._activeTab().id === "home";
    if (onHome) {
      this._flows.sync(this.renderRoot, {
        hass: this.hass,
        theme: flowTheme(this._config.battery),
        showFlows: this._show("show_flows"),
        batOverlays:
          this._show("show_battery") && batteryHasOverlays(this._config.battery),
        states: this._flowStates(),
      });
    } else {
      this._syncEmbed();
    }
  }

  /* -- embedded Lovelace view (custom tabs) -- */

  _activeTab() {
    const tabs = this._tabs();
    return tabs[this._tab] || tabs[0];
  }

  _tabs() {
    const tabs = (this._config.tabs && this._config.tabs.length
      ? [...this._config.tabs]
      : [{ id: "home", icon: "mdi:home", label: "Home" }]);
    // The first tab is always Home regardless of how it was stored.
    tabs[0] = { ...tabs[0], id: "home", icon: tabs[0].icon || "mdi:home" };
    return tabs;
  }

  async _syncEmbed() {
    const host = this.renderRoot?.querySelector(".embed-host");
    if (!host) return;
    const tab = this._activeTab();
    const path = tab?.path || "";

    if (path && path === this._embed.path && this._embed.els.length) {
      // Same view: Lit re-creates an empty .embed-host each time we return to
      // this tab, so re-attach the (detached) card elements if they're not in
      // the current host, then push the latest hass through.
      if (host.childElementCount === 0) {
        for (const el of this._embed.els) host.appendChild(el);
      }
      for (const el of this._embed.els) el.hass = this.hass;
      return;
    }

    // New view: tear the old one down and rebuild.
    this._embed = { path, status: "loading", els: [] };
    host.innerHTML = "";
    if (!path) {
      this._embed.status = "empty";
      return;
    }

    try {
      const view = await this._fetchView(path);
      if (!view) {
        this._embed.status = "missing";
        host.innerHTML = "";
        this.requestUpdate();
        return;
      }
      const helpers = await window.loadCardHelpers?.();
      if (!helpers) throw new Error("card helpers unavailable");
      const configs = [...(view.cards || [])];
      for (const sec of view.sections || []) configs.push(...(sec.cards || []));
      const els = [];
      for (const cfg of configs) {
        try {
          const el = helpers.createCardElement(cfg);
          el.hass = this.hass;
          host.appendChild(el);
          els.push(el);
        } catch (e) {
          /* skip a single bad card */
        }
      }
      // Guard against a tab switch that happened while we awaited.
      if (this._activeTab()?.path !== path) {
        host.innerHTML = "";
        return;
      }
      this._embed = { path, status: "ready", els };
    } catch (e) {
      this._embed.status = "error";
      this.requestUpdate();
    }
  }

  /* Parse "[dashboardUrlPath/]viewPath" and load that dashboard's config, then
   * find the view by its path (falling back to a numeric index). */
  async _fetchView(path) {
    const parts = String(path).split("/").filter(Boolean);
    const urlPath = parts.length > 1 ? parts[0] : null;
    const viewPath = parts.length > 1 ? parts.slice(1).join("/") : parts[0];
    const cfg = await this.hass.connection.sendMessagePromise({
      type: "lovelace/config",
      url_path: urlPath,
    });
    const views = cfg?.views || [];
    let view = views.find((v) => v.path === viewPath);
    if (!view && /^\d+$/.test(viewPath)) view = views[Number(viewPath)];
    return view;
  }

  /* -- render -- */

  render() {
    if (!this.hass) return html``;
    const device = this._device;
    this._map = device ? entityMap(this.hass, device.ents) : {};
    const tabs = this._tabs();
    const active = tabs[this._tab] || tabs[0];

    const railLabels = this._config.rail_labels ?? false;
    const railAlign = this._config.rail_align || "start";
    return html`<ha-card>
      <div class="shell">
        <nav class="rail align-${railAlign} ${railLabels ? "has-labels" : ""}">
          ${tabs.map(
            (tab, i) => html`<button
              class="rail-btn ${i === this._tab ? "on" : ""}"
              title=${tab.label || ""}
              @click=${() => (this._tab = i)}
            >
              <ha-icon icon=${tab.icon || "mdi:view-dashboard-outline"}></ha-icon>
              ${railLabels && tab.label
                ? html`<span class="rail-label">${tab.label}</span>`
                : ""}
            </button>`
          )}
        </nav>
        <div class="main">
          ${active.id === "home" ? this._renderHome() : this._renderEmbed()}
        </div>
      </div>
      ${this._dialog === "solar" ? this._renderSolarDialog() : ""}
    </ha-card>`;
  }

  /* Warn only when the scene depends on auto-discovery and no EcoFlow device is
   * set up — a card built purely from explicit entity/template bindings (or
   * custom overlays) needs no integration, so it shouldn't nag. */
  _needsDevice() {
    // An overlay relies on auto-discovery when it has no explicit entity/template
    // source — either a slot or a preset (which binds to a discovered power
    // sensor). Tiles read the Energy dashboard, not the device, so they're out.
    const autoBound = (item) =>
      !item.entity &&
      !isTemplate(item.template) &&
      (item.slot || OVERLAY_PRESETS[item.preset]);
    return (this._config.overlays || []).some(autoBound);
  }

  _renderHome() {
    const showBattery = this._show("show_battery");
    const warn = !this._device && this._needsDevice();
    return html`<div class="stage-wrap">
      ${this._renderTopBar()}
      <div class="stage">
        <img class="layer house" src=${houseImageUrl(this._config, this.hass)} alt="" />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="grid_home"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${showBattery
          ? html`<img
              class="layer box"
              src=${batteryBoxUrl(this._config.battery, this.hass)}
              alt=""
            />`
          : ""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        <div class="layer flow z-box" data-flow="bat_backup"></div>
        ${this._renderOverlays()}
        ${warn ? this._renderSetupWarning() : ""}
      </div>
      ${this._renderTiles()}
    </div>`;
  }

  _renderTopBar() {
    const title =
      this._config.title && !isTemplate(this._config.title) ? this._config.title : "";
    return html`<div class="topbar">
      <div class="topbar-left">
        ${title ? html`<div class="topbar-title">${title}</div>` : ""}
      </div>
      ${this._renderClock()} ${this._renderWeather()}
    </div>`;
  }

  _renderClock() {
    if (!(this._config.clock ?? false)) return html`<span class="topbar-center"></span>`;
    const scale = this._config.clock_size || 1;
    return html`<div class="topbar-center">
      <div class="clock" style=${`--ef-scale:${scale}`}>
        <span class="clock-time">${this._clock || this._formatClock()}</span>
        ${this._config.clock_date
          ? html`<span class="clock-date">${this._formatDate()}</span>`
          : ""}
      </div>
    </div>`;
  }

  _formatDate() {
    try {
      return new Date().toLocaleDateString(this.hass?.locale?.language || undefined, {
        weekday: "short",
        day: "numeric",
        month: "short",
      });
    } catch (e) {
      return "";
    }
  }

  _renderWeather() {
    const id = this._config.weather?.entity;
    const st = id ? this.hass.states[id] : null;
    if (!st) return html`<div class="topbar-right"></div>`;
    const a = st.attributes || {};
    const tempUnit =
      a.temperature_unit || this.hass.config?.unit_system?.temperature || "°";
    // Night low: an explicit config value wins (shown as-is), else today's
    // forecast low (rounded, with the temperature unit appended).
    const configLow = this._resolveValue(this._config.weather?.low);
    let lowText = "";
    if (configLow !== "") {
      lowText = configLow;
    } else if (Array.isArray(a.forecast) && a.forecast.length) {
      const fl = a.forecast[0].templow ?? a.forecast[0].temperature;
      if (fl != null) lowText = `${Math.round(fl)} ${tempUnit}`;
    }
    const scale = this._config.weather_size || 1;
    return html`<div class="topbar-right">
      <button
        class="weather"
        style=${`--ef-scale:${scale}`}
        @click=${() => this._moreInfo(id)}
        title=${st.state}
      >
        ${a.temperature != null
          ? html`<span class="w-grp"
              ><ha-icon icon="mdi:thermometer"></ha-icon
              ><span>${Math.round(a.temperature)} ${tempUnit}</span></span
            >`
          : ""}
        ${a.humidity != null
          ? html`<span class="w-grp"
              ><ha-icon icon="mdi:water-percent"></ha-icon
              ><span>${Math.round(a.humidity)} %</span></span
            >`
          : ""}
        ${lowText
          ? html`<span class="w-grp moon"
              ><ha-icon icon="mdi:weather-night"></ha-icon
              ><span>${lowText}</span></span
            >`
          : ""}
      </button>
    </div>`;
  }

  _renderOverlays() {
    const overlays = this._config.overlays || [];
    if (!overlays.length) return "";
    return html`<div class="overlays">
      ${overlays.map((ov) => {
        const v = this._overlayView(ov);
        const style = `left:${ov.x ?? 50}%;top:${ov.y ?? 50}%;transform:${
          ANCHORS[ov.anchor] || ANCHORS.center
        };--ef-scale:${ov.size || 1};${v.color ? `--ef-ov-color:${v.color};` : ""}`;
        const onTap =
          ov.preset === "solar"
            ? () => this._openSolar()
            : () => this._moreInfo(v.entityId);
        return html`<button
          class="overlay ${v.entityId || ov.preset === "solar" ? "clickable" : ""}"
          style=${style}
          @click=${onTap}
        >
          ${v.label
            ? html`<span class="ov-label"
                >${v.icon ? html`<ha-icon class="ov-ic" icon=${v.icon}></ha-icon>` : ""}
                <span>${v.label}</span>
                ${ov.dot
                  ? html`<span class="ov-dot" style=${`background:${ov.dot}`}></span>`
                  : ""}</span
              >`
            : ""}
          ${v.num !== ""
            ? html`<span class="ov-value"
                ><span class="ov-num">${v.num}</span
                >${v.unit ? html`<span class="ov-unit">${v.unit}</span>` : ""}
                ${v.secondary ? html`<span class="ov-sec">· ${v.secondary}</span>` : ""}</span
              >`
            : ""}
        </button>`;
      })}
    </div>`;
  }

  _renderTiles() {
    const tiles = this._config.tiles || [];
    if (!tiles.length) return "";
    const scale = this._config.tiles_size || 1;
    return html`<div class="tiles" style=${`--ef-scale:${scale}`}>
      ${tiles.map((tile) => {
        const v = this._tileView(tile);
        const secCls = v.secondary.startsWith("+")
          ? "pos"
          : v.secondary.startsWith("-")
            ? "neg"
            : "";
        const onTap =
          tile.preset === "solar_today"
            ? () => this._openSolar()
            : () => this._moreInfo(v.entityId);
        return html`<button
          class="tile ${v.entityId || tile.preset === "solar_today" ? "clickable" : ""}"
          @click=${onTap}
        >
          <div class="tile-head">
            <span class="tile-label">${v.label || ""}</span>
            ${v.icon
              ? html`<ha-icon
                  icon=${v.icon}
                  style=${v.color ? `color:${v.color}` : ""}
                ></ha-icon>`
              : ""}
          </div>
          <div class="tile-value">
            <span class="tile-num">${v.num || "–"}</span
            >${v.unit ? html`<span class="tile-unit">${v.unit}</span>` : ""}
          </div>
          ${v.secondary ? html`<div class="tile-secondary ${secCls}">${v.secondary}</div>` : ""}
        </button>`;
      })}
    </div>`;
  }

  _renderSetupWarning() {
    return html`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`;
  }

  _renderEmbed() {
    const status = this._embed.status;
    return html`<div class="embed">
      ${status === "missing" || status === "error"
        ? html`<div class="embed-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <span>${this._t("space.embed_missing")}</span>
          </div>`
        : status === "empty"
          ? html`<div class="embed-msg">
              <ha-icon icon="mdi:link-variant-off"></ha-icon>
              <span>${this._t("space.embed_empty")}</span>
            </div>`
          : ""}
      <div class="embed-host"></div>
    </div>`;
  }
}
