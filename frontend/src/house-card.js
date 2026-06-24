/* EcoFlow House Card — the whole-home energy-flow illustration.
 *
 * Recreates the EcoFlow app's "space" view: a rendered house with the
 * battery/inverter box in front, live Grid / Solar / Home figures across the
 * top, the battery state below, and animated energy-flow lines between them.
 *
 * The house render and every overlay are the app's own assets (reverse-
 * engineered from the consumer APK) — the flow lines are the original Lottie
 * animations, played via lottie-web. They share the house's coordinate system
 * (house 2340×1680, overlays 1170×840), so pinning each overlay to the same
 * box aligns it pixel-perfectly, exactly as the app composes the scene.
 *
 * Entities are auto-discovered from the ecoflow_iot integration (shared with
 * the EcoFlow Energy Card); the play rules mirror the app — solar flows when
 * PV > 0, grid in/out by sign, battery charge/discharge by sign, and the SoC
 * fill is seeked to frame = level%. */

import { LitElement, html } from "lit";
import lottie from "lottie-web/build/player/lottie_light";
import { HOUSE_CARD_TYPE } from "./const.js";
import { entityMap, streamDevices } from "./entities.js";
import { fmtPower, isEntityId, isTemplate, numState, splitPower } from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
import {
  DEFAULT_HOUSE_STYLE,
  FLOWS,
  batteryBoxUrl,
  batteryHasOverlays,
  flowUrl,
  houseUrl,
  solarFlowName,
} from "./houses.js";
import { houseCardStyles } from "./house-styles.js";

// Power magnitude (W) below which a path is treated as idle (no flow shown).
const ACTIVE_W = 1;

export class EcoFlowHouseCard extends LitElement {
  static styles = houseCardStyles;

  static get properties() {
    return { hass: {}, _config: {} };
  }

  constructor() {
    super();
    // key -> { anim, file, ready, mode } for each mounted flow Lottie. Flows are
    // mounted lazily on first activation and then kept (paused when idle) so we
    // never churn lottie instances on every state update.
    this._flowAnims = {};
  }

  connectedCallback() {
    super.connectedCallback();
    ensureHaComponents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    for (const rec of Object.values(this._flowAnims)) rec.anim?.destroy();
    this._flowAnims = {};
  }

  setConfig(config) {
    this._config = config || {};
  }

  static getConfigElement() {
    return document.createElement(`${HOUSE_CARD_TYPE}-editor`);
  }

  static getStubConfig() {
    return { house: DEFAULT_HOUSE_STYLE };
  }

  getCardSize() {
    return 7;
  }

  _t(key, vars) {
    return localize(this.hass, key, vars);
  }

  _show(key, def = true) {
    return this._config[key] ?? def;
  }

  /* -- entity resolution (mirrors the energy card) -- */

  get _device() {
    const devices = streamDevices(this.hass);
    if (!devices.length) return null;
    if (this._config.device) {
      return devices.find((d) => d.deviceId === this._config.device) || devices[0];
    }
    return devices[0];
  }

  _state(slot) {
    const override = this._config.entities?.[slot];
    if (override) {
      if (isEntityId(override) && !isTemplate(override)) return this.hass.states[override];
      return { state: override, attributes: {} };
    }
    const id = this._map?.[slot];
    return id ? this.hass.states[id] : undefined;
  }

  _entityId(slot) {
    const override = this._config.entities?.[slot];
    if (override && isEntityId(override) && !isTemplate(override)) return override;
    return this._map?.[slot];
  }

  _moreInfo(slot) {
    const entityId = this._entityId(slot);
    if (!entityId) return;
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      })
    );
  }

  /* -- live values -- */

  /* Grid power, positive = importing from the grid — the same sensor and sign
   * convention as the Energy card (grid_power has the invert_grid_sign fix
   * applied; sys_grid_power is the raw, oppositely-signed value). */
  _grid() {
    const grid = this._state("sensor.grid_power");
    return numState(grid != null ? grid : this._state("sensor.sys_grid_power"));
  }

  _flowStates() {
    const grid = this._grid();
    const solar = numState(this._state("sensor.pv_total"));
    const load = numState(this._state("sensor.sys_load"));
    const bat = numState(this._state("sensor.bat_power"));
    const soc = numState(this._state("sensor.cms_batt_soc"));

    // The solar flow is drawn for the chosen house, so its route follows the
    // house style (house 1 -> re_space_solar_1, and so on).
    const route = parseInt(this._config.house || DEFAULT_HOUSE_STYLE, 10) || 1;

    return { grid, solar, load, bat, soc, route };
  }

  /* The flow layers and when each is active, in z-order (declared first =
   * underneath). Files are the reverse-engineered app assets. */
  _flowDefs() {
    return [
      { key: "solar", file: (s) => solarFlowName(s.route), active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", file: () => FLOWS.grid_in, active: (s) => s.grid > ACTIVE_W },
      { key: "grid_out", file: () => FLOWS.grid_out, active: (s) => s.grid < -ACTIVE_W },
      { key: "home", file: () => FLOWS.home, active: (s) => s.load > ACTIVE_W },
      // The bat_* layers are drawn on/around the battery box, so they only
      // apply to a battery whose overlays line up (see _syncFlows).
      { key: "bat_in", file: () => FLOWS.bat_in, active: (s) => s.bat > ACTIVE_W, bat: true },
      { key: "bat_out", file: () => FLOWS.bat_out, active: (s) => s.bat < -ACTIVE_W, bat: true },
      // SoC fill sits on the battery box and is seeked to the level, not played.
      { key: "bat_soc", file: () => FLOWS.bat_soc, active: (s) => s.soc != null, mode: "soc", bat: true },
      { key: "bat_chg", file: () => FLOWS.bat_chg, active: (s) => s.bat > ACTIVE_W, bat: true },
      { key: "bat_dsg", file: () => FLOWS.bat_dsg, active: (s) => s.bat < -ACTIVE_W, bat: true },
    ];
  }

  /* -- lottie lifecycle -- */

  updated(changed) {
    super.updated(changed);
    this._syncFlows();
  }

  _syncFlows() {
    if (!this.renderRoot || !this._device) return;
    const showFlows = this._show("show_flows");
    // The on-battery overlays only line up with a battery that has them.
    const batOverlays =
      this._show("show_battery") && batteryHasOverlays(this._config.battery);
    const states = this._flowStates();
    for (const def of this._flowDefs()) {
      const container = this.renderRoot.querySelector(`[data-flow="${def.key}"]`);
      if (!container) continue;
      const active =
        showFlows && def.active(states) && (!def.bat || batOverlays);
      this._setFlow(container, def, active, states);
    }
  }

  _setFlow(container, def, active, states) {
    const key = def.key;
    const file = def.file(states);
    const mode = def.mode || "play";
    let rec = this._flowAnims[key];

    // Mount lazily on first activation; reload only if the chosen file changed
    // (e.g. the solar route).
    if (active && (!rec || rec.file !== file)) {
      rec?.anim?.destroy();
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: mode !== "soc",
        autoplay: false,
        path: flowUrl(file),
        // Top-align like the house image so the scene keeps a clear band at the
        // bottom for the battery readout (see the stage's aspect ratio).
        rendererSettings: { preserveAspectRatio: "xMidYMin meet" },
      });
      rec = this._flowAnims[key] = { anim, file, ready: false, mode };
      anim.addEventListener("DOMLoaded", () => {
        rec.ready = true;
        this._applyFlow(rec, active, this._flowStates());
      });
    }

    if (rec) this._applyFlow(rec, active, states);
    container.style.opacity = active ? "1" : "0";
  }

  _applyFlow(rec, active, states) {
    if (!rec.ready) return;
    if (rec.mode === "soc") {
      // 0..100% -> the fill animation's frames (re_space_bat_soc spans 0..101).
      rec.anim.goToAndStop(Math.max(0, Math.min(100, states.soc ?? 0)), true);
      return;
    }
    if (active) rec.anim.play();
    else rec.anim.pause();
  }

  /* -- rendering -- */

  render() {
    if (!this.hass) return html``;
    const device = this._device;
    if (!device) {
      return html`<ha-card
        ><div class="empty">${this._t("card.no_device")}</div></ha-card
      >`;
    }
    this._map = entityMap(this.hass, device.ents);

    const title = this._config.title && !isTemplate(this._config.title) ? this._config.title : "";
    const showBattery = this._show("show_battery");

    return html`<ha-card>
      ${title ? html`<div class="title">${title}</div>` : ""}
      <div class="stage">
        <img
          class="layer house"
          src=${houseUrl(this._config.house, this._config.house_mode, this.hass)}
          alt=""
        />
        <div class="layer flow z-bg" data-flow="solar"></div>
        <div class="layer flow z-bg" data-flow="grid_in"></div>
        <div class="layer flow z-bg" data-flow="grid_out"></div>
        <div class="layer flow z-bg" data-flow="home"></div>
        <div class="layer flow z-bg" data-flow="bat_in"></div>
        <div class="layer flow z-bg" data-flow="bat_out"></div>
        ${showBattery
          ? html`<img
              class="layer box"
              src=${batteryBoxUrl(this._config.battery)}
              alt=""
            />`
          : ""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${showBattery ? this._renderBattery() : ""}
      </div>
    </ha-card>`;
  }

  /* Thin leader lines dropping from each top figure into the scene, as the app
   * draws them. Decorative; one per shown column. */
  _renderLeaders() {
    return html`<div class="leaders">
      ${this._show("show_grid") ? html`<span class="leader grid"></span>` : ""}
      ${this._show("show_solar") ? html`<span class="leader solar"></span>` : ""}
      ${this._show("show_home") ? html`<span class="leader home"></span>` : ""}
    </div>`;
  }

  _renderStats() {
    const s = this._flowStates();
    const cols = [];
    if (this._show("show_grid")) {
      const importing = s.grid > ACTIVE_W;
      const exporting = s.grid < -ACTIVE_W;
      cols.push({
        slot: "sensor.grid_power",
        fallback: "sensor.sys_grid_power",
        anchor: "col-grid",
        value: s.grid != null ? Math.abs(s.grid) : null,
        label: importing
          ? this._t("house.from_grid")
          : exporting
            ? this._t("house.to_grid")
            : this._t("house.grid"),
        cls: importing ? "import" : exporting ? "export" : "",
      });
    }
    if (this._show("show_solar")) {
      cols.push({
        slot: "sensor.pv_total",
        anchor: "col-solar",
        value: s.solar,
        label: this._t("card.solar"),
        cls: s.solar > ACTIVE_W ? "solar" : "",
      });
    }
    if (this._show("show_home")) {
      cols.push({
        slot: "sensor.sys_load",
        anchor: "col-home",
        value: s.load,
        label: this._t("house.home"),
        cls: s.load > ACTIVE_W ? "home" : "",
      });
    }
    if (!cols.length) return "";

    return html`<div class="stats">
      ${cols.map((c) => {
        const split = splitPower(c.value);
        return html`<div
          class="stat ${c.anchor} ${c.cls} clickable"
          @click=${() => this._moreInfo(this._entityId(c.slot) ? c.slot : c.fallback || c.slot)}
        >
          <div class="stat-value">
            <span class="num">${split.n}</span><span class="unit">${split.u}</span>
          </div>
          <div class="stat-label">${c.label}</div>
        </div>`;
      })}
    </div>`;
  }

  _renderBattery() {
    const soc = numState(this._state("sensor.cms_batt_soc"));
    const bat = numState(this._state("sensor.bat_power"));
    const charging = bat != null && bat > ACTIVE_W;
    const discharging = bat != null && bat < -ACTIVE_W;
    const cls = charging ? "charge" : discharging ? "discharge" : "";
    const label = charging
      ? this._t("card.charging")
      : discharging
        ? this._t("card.discharging")
        : this._t("house.idle");
    const power = bat != null && (charging || discharging) ? fmtPower(Math.abs(bat)) : null;

    return html`<div
      class="battery ${cls} clickable"
      @click=${() => this._moreInfo(this._entityId("sensor.cms_batt_soc") ? "sensor.cms_batt_soc" : "sensor.bat_power")}
    >
      <div class="battery-line">
        ${power
          ? html`<ha-icon
              icon=${charging ? "mdi:flash" : "mdi:battery-arrow-down"}
            ></ha-icon
            ><span class="battery-power">${power}</span>`
          : ""}
        ${soc != null
          ? html`<span class="battery-soc">${Math.round(soc)}%</span>`
          : ""}
      </div>
      <div class="battery-label">${label}</div>
    </div>`;
  }
}
