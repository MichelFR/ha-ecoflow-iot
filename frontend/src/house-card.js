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
import { HOUSE_CARD_TYPE } from "./const.js";
import { entityMap, streamDevices } from "./entities.js";
import { fmtPower, isEntityId, isTemplate, numState, splitPower } from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
import {
  DEFAULT_HOUSE_STYLE,
  batteryBoxUrl,
  batteryHasOverlays,
  houseImageUrl,
} from "./houses.js";
import { ACTIVE_W, FlowController } from "./flows.js";
import { houseCardStyles } from "./house-styles.js";

export class EcoFlowHouseCard extends LitElement {
  static styles = houseCardStyles;

  static get properties() {
    return { hass: {}, _config: {} };
  }

  constructor() {
    super();
    this._flows = new FlowController();
  }

  connectedCallback() {
    super.connectedCallback();
    ensureHaComponents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._flows.destroy();
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
    // The solar flow is drawn for the chosen house, so its route follows the
    // house style (house 1 -> re_space_solar_1, and so on).
    const route = parseInt(this._config.house || DEFAULT_HOUSE_STYLE, 10) || 1;

    // No device yet: feed a synthetic "sunny day" scene so every flow animates
    // for the preview (solar in, exporting, home load, battery charging). The
    // figures themselves stay blank — see _renderStats.
    if (!this._device) {
      return { grid: -400, solar: 1500, load: 700, bat: 500, soc: 65, route };
    }

    const grid = this._grid();
    const solar = numState(this._state("sensor.pv_total"));
    const load = numState(this._state("sensor.sys_load"));
    const bat = numState(this._state("sensor.bat_power"));
    const soc = numState(this._state("sensor.cms_batt_soc"));

    return { grid, solar, load, bat, soc, route };
  }

  /* -- lottie lifecycle -- */

  updated(changed) {
    super.updated(changed);
    // Runs without a device too, so the no-device preview animates its demo
    // scene (see _flowStates). The on-battery overlays only line up with a
    // battery render that has them.
    this._flows.sync(this.renderRoot, {
      hass: this.hass,
      showFlows: this._show("show_flows"),
      batOverlays:
        this._show("show_battery") && batteryHasOverlays(this._config.battery),
      states: this._flowStates(),
    });
    // Let the styles reserve the title row's height when fitting the card into a
    // panel view (see --ef-title in house-styles); reflected as an attribute so
    // it stays pure CSS with no extra render.
    const hasTitle = !!(this._config?.title && !isTemplate(this._config.title));
    this.toggleAttribute("has-title", hasTitle);
  }

  /* -- rendering -- */

  render() {
    if (!this.hass) return html``;
    const device = this._device;
    // With no device configured, still render the full illustration (animated,
    // see _flowStates) so the card can be previewed — just without any live
    // values, plus a banner that it isn't set up yet.
    const notSetup = !device;
    this._map = device ? entityMap(this.hass, device.ents) : {};

    const title = this._config.title && !isTemplate(this._config.title) ? this._config.title : "";
    const showBattery = this._show("show_battery");

    return html`<ha-card>
      ${title ? html`<div class="title">${title}</div>` : ""}
      <div class="stage">
        <img
          class="layer house"
          src=${houseImageUrl(this._config, this.hass)}
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
              src=${batteryBoxUrl(this._config.battery, this.hass)}
              alt=""
            />`
          : ""}
        <div class="layer flow z-box" data-flow="bat_soc"></div>
        <div class="layer flow z-box" data-flow="bat_chg"></div>
        <div class="layer flow z-box" data-flow="bat_dsg"></div>
        ${this._renderLeaders()} ${this._renderStats()}
        ${showBattery ? this._renderBattery() : ""}
        ${notSetup ? this._renderSetupWarning() : ""}
      </div>
    </ha-card>`;
  }

  /* Banner shown over the illustration when no device is configured: the card
   * still previews (house + animated flows) but carries no live values. */
  _renderSetupWarning() {
    return html`<div class="setup-warning">
      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
      <span>${this._t("house.not_setup")}</span>
    </div>`;
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
    // No device: keep the figures (so the layout reads normally) but show no
    // values — neutral labels and a "–" for each. The flows still animate from
    // the demo scene; only the readouts are blank.
    const blank = !this._device;
    const s = this._flowStates();
    const cols = [];
    if (this._show("show_grid")) {
      const importing = !blank && s.grid > ACTIVE_W;
      const exporting = !blank && s.grid < -ACTIVE_W;
      cols.push({
        slot: "sensor.grid_power",
        fallback: "sensor.sys_grid_power",
        anchor: "col-grid",
        value: blank ? null : s.grid != null ? Math.abs(s.grid) : null,
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
        value: blank ? null : s.solar,
        label: this._t("card.solar"),
        cls: !blank && s.solar > ACTIVE_W ? "solar" : "",
      });
    }
    if (this._show("show_home")) {
      cols.push({
        slot: "sensor.sys_load",
        anchor: "col-home",
        value: blank ? null : s.load,
        label: this._t("house.home"),
        cls: !blank && s.load > ACTIVE_W ? "home" : "",
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
