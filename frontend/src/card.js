/* The EcoFlow Energy card — bundled with the EcoFlow IoT integration.
 *
 * A compact energy card for EcoFlow Stream devices: device image, an animated
 * battery bar, live Solar and Grid power, and today's solar production with an
 * optional forecast comparison (the same forecast configured in Home
 * Assistant's Energy dashboard). Tapping Solar power opens a per-panel
 * breakdown; tapping Solar today opens an hourly production/forecast graph.
 * Entities are auto-discovered from the ecoflow_iot integration. */

import { LitElement, html } from "lit";
import { CARD_TYPE } from "./const.js";
import { deviceImageUrl } from "./device-image.js";
import { entityMap, streamDevices } from "./entities.js";
import {
  fetchHourlyWh,
  fetchSolarForecasts,
  forecastHourly,
  forecastTodayWh,
  mergeForecastWhHours,
} from "./energy.js";
import { fmtPower, isEntityId, isTemplate, numState } from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
import { fetchTodayWh } from "./statistics.js";
import { cardStyles } from "./styles.js";
import { panelData, renderPanels } from "./views/panels.js";
import { renderForecastGraph } from "./views/forecast-graph.js";

const STATS_REFRESH_MS = 5 * 60 * 1000;

export class EcoFlowEnergyCard extends LitElement {
  static styles = cardStyles;

  static get properties() {
    return {
      hass: {},
      _config: {},
      _dialog: { state: true },
    };
  }

  constructor() {
    super();
    this._dialog = null; // null | "panels" | "today"
    this._todayWh = undefined; // undefined = not fetched, null = unavailable
    this._forecasts = {}; // raw energy/solar_forecast result
    this._forecastsFetched = false;
    this._hourly = null; // {hour: Wh} actual, lazily fetched for the graph
  }

  connectedCallback() {
    super.connectedCallback();
    ensureHaComponents();
    this._statsTimer = setInterval(() => {
      this._refreshToday();
      this._refreshForecast();
    }, STATS_REFRESH_MS);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._statsTimer);
    for (const unsub of Object.values(this._tmplUnsub || {})) {
      if (typeof unsub === "function") unsub();
    }
    this._tmplUnsub = {};
  }

  setConfig(config) {
    this._config = config || {};
  }

  static getConfigElement() {
    return document.createElement(`${CARD_TYPE}-editor`);
  }

  static getStubConfig() {
    return {};
  }

  getCardSize() {
    return 6;
  }

  _t(key, vars) {
    return localize(this.hass, key, vars);
  }

  _show(key, def = true) {
    return this._config[key] ?? def;
  }

  /* -- entity resolution -- */

  get _device() {
    const devices = streamDevices(this.hass);
    if (!devices.length) return null;
    if (this._config.device) {
      return (
        devices.find((d) => d.deviceId === this._config.device) || devices[0]
      );
    }
    return devices[0];
  }

  _state(slot) {
    const override = this._config.entities?.[slot];
    if (override) {
      if (isTemplate(override)) {
        const result = this._templateResults?.[override];
        return {
          state: result === undefined ? "unknown" : String(result),
          attributes: {},
        };
      }
      if (isEntityId(override)) return this.hass.states[override];
      return { state: override, attributes: {} };
    }
    const id = this._map?.[slot];
    return id ? this.hass.states[id] : undefined;
  }

  _entityId(slot) {
    const override = this._config.entities?.[slot];
    if (override && isEntityId(override) && !isTemplate(override)) {
      return override;
    }
    return this._map?.[slot];
  }

  /* -- async data: today's total, forecast, hourly -- */

  updated(changed) {
    super.updated(changed);
    if (changed.has("hass") || changed.has("_config")) {
      this._syncTemplates();
      if (this._todayWh === undefined) this._refreshToday();
      if (!this._forecastsFetched) {
        this._forecastsFetched = true;
        this._refreshForecast();
      }
    }
  }

  async _refreshToday() {
    const id = this._entityId("sensor.solar_energy");
    if (!id || !this.hass) return;
    const wh = await fetchTodayWh(this.hass, id);
    if (wh !== this._todayWh) {
      this._todayWh = wh;
      this.requestUpdate();
    }
  }

  async _refreshForecast() {
    if (!this.hass) return;
    this._forecasts = await fetchSolarForecasts(this.hass);
    this.requestUpdate();
  }

  _mergedForecast() {
    return mergeForecastWhHours(
      this._forecasts,
      this._config.forecast_config_entries
    );
  }

  _forecastTodayKWh() {
    const wh = forecastTodayWh(this._mergedForecast());
    return wh != null ? wh / 1000 : null;
  }

  async _openToday() {
    this._dialog = "today";
    const id = this._entityId("sensor.solar_energy");
    if (id && this.hass) {
      const hours = await fetchHourlyWh(this.hass, id);
      if (hours) {
        this._hourly = hours;
        this.requestUpdate();
      }
    }
  }

  /* -- live template rendering for overrides -- */

  async _syncTemplates() {
    if (!this.hass?.connection) return;
    this._tmplUnsub = this._tmplUnsub || {};
    this._templateResults = this._templateResults || {};
    const templates = [
      ...Object.values(this._config.entities || {}),
      this._config.title,
    ].filter((value) => isTemplate(value));
    for (const template of templates) {
      if (this._tmplUnsub[template]) continue;
      this._tmplUnsub[template] = true;
      try {
        this._tmplUnsub[template] = await this.hass.connection.subscribeMessage(
          (msg) => {
            this._templateResults[template] = msg.result;
            this.requestUpdate();
          },
          { type: "render_template", template }
        );
      } catch (e) {
        this._templateResults[template] = "error";
        this.requestUpdate();
      }
    }
    for (const known of Object.keys(this._tmplUnsub)) {
      if (!templates.includes(known)) {
        const unsub = this._tmplUnsub[known];
        if (typeof unsub === "function") unsub();
        delete this._tmplUnsub[known];
        delete this._templateResults[known];
      }
    }
  }

  _moreInfo(slot) {
    this._moreInfoId(this._entityId(slot));
  }

  _moreInfoId(entityId) {
    if (!entityId) return;
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      })
    );
  }

  /* -- rendering -- */

  render() {
    if (!this.hass) return html``;
    const device = this._device;
    if (!device) {
      return html`<ha-card>
        <div class="empty">${this._t("card.no_device")}</div>
      </ha-card>`;
    }
    this._map = entityMap(this.hass, device.ents);

    return html`<ha-card>
      ${this._renderHead(device)}
      ${this._show("show_battery") ? this._renderBattery() : ""}
      ${this._renderStats()}
      ${this._show("show_today") ? this._renderToday() : ""}
      ${this._dialog === "panels"
        ? this._dialogFrame(this._t("panels.title"), renderPanels(this))
        : ""}
      ${this._dialog === "today"
        ? this._dialogFrame(
            this._t("card.today"),
            renderForecastGraph(this, {
              actual: this._hourly || {},
              forecast: forecastHourly(this._mergedForecast()),
              totalWh: this._todayWh,
              showForecast:
                this._show("show_forecast") &&
                Object.keys(this._forecasts || {}).length > 0,
            })
          )
        : ""}
    </ha-card>`;
  }

  _dialogFrame(title, body) {
    return html`<ha-dialog
      open
      header-title=${title}
      @closed=${() => (this._dialog = null)}
    >
      <div class="dlg-body">${body}</div>
    </ha-dialog>`;
  }

  _renderHead(device) {
    const rawTitle = this._config.title;
    const title =
      rawTitle && isTemplate(rawTitle)
        ? String(this._templateResults?.[rawTitle] ?? "")
        : rawTitle;
    const model = device.device?.model;
    const name =
      title ||
      device.device?.name_by_user ||
      device.device?.name ||
      model ||
      this._t("card.device");
    const imageSrc = this._config.image_url || deviceImageUrl(model);

    return html`<div class="head">
      <div class="head-left">
        <div class="name">${name}</div>
        ${model && model !== name
          ? html`<div class="subtitle">${model}</div>`
          : ""}
      </div>
      ${this._show("show_image") && imageSrc
        ? html`<img class="device-img" src="${imageSrc}" alt="${name}" />`
        : ""}
    </div>`;
  }

  _renderBattery() {
    const socState = this._state("sensor.cms_batt_soc");
    if (!socState) return "";
    const soc = numState(socState);
    const batPower = numState(this._state("sensor.bat_power"));
    const charging =
      this._state("binary_sensor.battery_charging")?.state === "on" ||
      (batPower != null && batPower > 1);
    const discharging = !charging && batPower != null && batPower < -1;

    return html`<div class="battery">
      <div
        class="batt-row clickable"
        @click=${() => this._moreInfo("sensor.cms_batt_soc")}
      >
        <ha-state-icon .hass=${this.hass} .stateObj=${socState}></ha-state-icon>
        <span class="soc">${soc != null ? Math.round(soc) : "–"}%</span>
        ${charging && batPower != null
          ? html`<span class="chip charge"
              ><ha-icon icon="mdi:flash"></ha-icon>${fmtPower(
                Math.abs(batPower)
              )}</span
            >`
          : discharging && batPower != null
            ? html`<span class="chip discharge"
                ><ha-icon icon="mdi:battery-arrow-down"></ha-icon>${fmtPower(
                  Math.abs(batPower)
                )}</span
              >`
            : ""}
      </div>
      <div class="bar">
        <div
          class="fill ${charging ? "charging" : ""} ${soc != null && soc <= 15
            ? "low"
            : ""}"
          style="width:${soc ?? 0}%"
        ></div>
      </div>
    </div>`;
  }

  _renderStats() {
    const solar = numState(this._state("sensor.pv_total"));
    const panels = panelData(this);
    const canBreakdown = this._show("show_panels") && panels.length > 0;
    const gridState = this._state("sensor.grid_power");
    const grid = numState(gridState);

    return html`<div class="stats">
      <div
        class="stat solar ${canBreakdown ? "clickable" : ""}"
        @click=${canBreakdown ? () => (this._dialog = "panels") : null}
      >
        <div class="stat-head">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon>${this._t(
            "card.solar"
          )}
          ${canBreakdown
            ? html`<ha-icon class="more" icon="mdi:chevron-right"></ha-icon>`
            : ""}
        </div>
        <div class="stat-value">${fmtPower(solar) ?? "–"}</div>
        ${canBreakdown
          ? html`<div class="stat-sub">
              ${panels.length} ${this._t("panels.title").toLowerCase()}
            </div>`
          : ""}
      </div>
      ${this._show("show_grid")
        ? this._renderGrid(grid)
        : html`<div></div>`}
    </div>`;
  }

  _renderGrid(grid) {
    const importing = grid != null && grid > 1;
    const exporting = grid != null && grid < -1;
    const cls = importing ? "import" : exporting ? "export" : "";
    const label = importing
      ? this._t("card.grid_import")
      : exporting
        ? this._t("card.grid_export")
        : this._t("card.grid_idle");
    const icon = exporting
      ? "mdi:transmission-tower-export"
      : importing
        ? "mdi:transmission-tower-import"
        : "mdi:transmission-tower";

    return html`<div
      class="stat grid ${cls} clickable"
      @click=${() => this._moreInfo("sensor.grid_power")}
    >
      <div class="stat-head"><ha-icon icon=${icon}></ha-icon>${this._t("card.grid")}</div>
      <div class="stat-value">
        ${grid != null ? fmtPower(Math.abs(grid)) : "–"}
      </div>
      <div class="stat-sub">${label}</div>
    </div>`;
  }

  _renderToday() {
    const todayKWh = this._todayWh != null ? this._todayWh / 1000 : null;
    const hasForecastData = Object.keys(this._forecasts || {}).length > 0;
    const forecast =
      this._show("show_forecast") && hasForecastData
        ? this._forecastTodayKWh()
        : null;
    const hasForecast = forecast != null && forecast > 0;
    const pct =
      hasForecast && todayKWh != null
        ? Math.min(100, Math.round((todayKWh / forecast) * 100))
        : null;
    const met = pct != null && pct >= 100;

    return html`<div class="today clickable" @click=${() => this._openToday()}>
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._t("card.today")}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">
          ${todayKWh != null ? todayKWh.toFixed(1) : "–"}<span class="today-unit"
            >&nbsp;kWh</span
          >
        </span>
      </div>
      ${hasForecast
        ? html`<div class="fc-bar">
              <div
                class="fc-fill ${met ? "met" : ""}"
                style="width:${pct}%"
              ></div>
            </div>
            <div class="fc-legend">
              <span>
                <b>${todayKWh != null ? todayKWh.toFixed(1) : "–"}</b> /
                ${forecast.toFixed(1)} kWh
              </span>
              <span>
                ${met
                  ? this._t("card.exceeded")
                  : this._t("card.of_forecast", { pct: pct ?? 0 })}
              </span>
            </div>`
        : ""}
    </div>`;
  }
}
