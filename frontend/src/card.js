/* The EcoFlow Energy card — bundled with the EcoFlow IoT integration.
 *
 * A compact energy card for EcoFlow Stream devices: device image, an animated
 * battery bar, live Solar and Grid power, and today's solar production with an
 * optional forecast comparison (the same forecast configured in Home
 * Assistant's Energy dashboard). Tapping Solar power opens a per-panel
 * breakdown; tapping Solar today opens an hourly production/forecast graph.
 * Entities are auto-discovered from the ecoflow_iot integration. */

import { LitElement, html, svg } from "lit";
import { CARD_TYPE, assetUrl } from "./const.js";
import { deviceImageUrl, imageUrlForKey, webpVariant } from "./device-image.js";
import { entityMap, streamDevices } from "./entities.js";
import {
  fetchHourlyWh,
  fetchSolarForecasts,
  forecastHourly,
  forecastTodayWh,
  mergeForecastWhHours,
} from "./energy.js";
import {
  fmtDuration,
  fmtEnergyWh,
  fmtPower,
  isEntityId,
  isTemplate,
  numState,
  splitKWh,
  splitPower,
} from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
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
      _confirmAc: { state: true },
    };
  }

  constructor() {
    super();
    this._dialog = null; // null | "panels" | "today" | "battery"
    this._confirmAc = null; // {slot,label} awaiting turn-off confirmation
    this._battDir = ""; // last battery flow ("charge"/"discharge"); kept so the
    // particle/spark layer can fade out in place instead of snapping when idle
    this._todayWh = undefined; // undefined = not fetched, null = unavailable
    this._hourly = {}; // {hour: Wh} actual production for the range
    this._forecasts = {}; // raw energy/solar_forecast result
    this._forecastsFetched = false;
    this._period = null; // {start,end} from an energy period selector, if bound
    this._collUnsub = null; // energy-collection unsubscribe
    this._collProp = undefined; // currently-bound connection property
  }

  connectedCallback() {
    super.connectedCallback();
    ensureHaComponents();
    this._statsTimer = setInterval(() => {
      this._refreshData();
      this._refreshForecast();
    }, STATS_REFRESH_MS);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._statsTimer);
    if (this._collUnsub) this._collUnsub();
    this._collUnsub = null;
    this._collProp = undefined;
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
      this._bindEnergyCollection();
      if (this._todayWh === undefined) this._refreshData();
      if (!this._forecastsFetched) {
        this._forecastsFetched = true;
        this._refreshForecast();
      }
    }
  }

  async _refreshData() {
    const id = this._entityId("sensor.solar_energy");
    if (!id || !this.hass) return;
    const { start, end } = this._dataRange();
    const hours = await fetchHourlyWh(this.hass, id, start, end);
    this._hourly = hours || {};
    this._todayWh = hours
      ? Object.values(hours).reduce((sum, wh) => sum + (wh || 0), 0)
      : null;
    this.requestUpdate();
  }

  async _refreshForecast() {
    if (!this.hass) return;
    this._forecasts = await fetchSolarForecasts(this.hass);
    this.requestUpdate();
  }

  /* The date range to show: a hui-energy-period-selector's selection when a
   * collection_key is configured, otherwise today. */
  _dataRange() {
    if (this._period?.start instanceof Date) {
      return {
        start: this._period.start,
        end: this._period.end instanceof Date ? this._period.end : new Date(),
        ref: this._period.start,
      };
    }
    const now = new Date();
    return {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      end: now,
      ref: now,
    };
  }

  /* Follow an Energy-dashboard date selection: when collection_key is set, join
   * the shared energy collection (the same one a hui-energy-period-selector
   * drives) and re-fetch for its selected period. */
  _bindEnergyCollection() {
    const key = this._config.collection_key;
    const prop = key ? `_${key}` : null;
    if (prop !== this._collProp) {
      if (this._collUnsub) this._collUnsub();
      this._collUnsub = null;
      this._collProp = prop;
      this._period = null;
    }
    if (!prop || this._collUnsub || !this.hass?.connection) return;
    const coll = this.hass.connection[prop];
    if (!coll || typeof coll.subscribe !== "function") return; // not ready yet
    const apply = () => {
      this._period = { start: coll.start, end: coll.end };
      this._refreshData();
    };
    this._collUnsub = coll.subscribe(() => apply());
    apply();
  }

  _mergedForecast() {
    return mergeForecastWhHours(
      this._forecasts,
      this._config.forecast_config_entries
    );
  }

  _forecastTodayKWh() {
    const wh = forecastTodayWh(this._mergedForecast(), this._dataRange().ref);
    return wh != null ? wh / 1000 : null;
  }

  /* Whether the active range (an Energy date selection, if bound) refers to
   * today. Without a bound collection the range is always today. */
  _isToday() {
    const ref = this._dataRange().ref;
    const now = new Date();
    return (
      ref.getFullYear() === now.getFullYear() &&
      ref.getMonth() === now.getMonth() &&
      ref.getDate() === now.getDate()
    );
  }

  /* "Solar today", or the selected date when an energy period is active. */
  _periodLabel() {
    if (this._isToday()) return this._t("card.today");
    return this._dataRange().ref.toLocaleDateString(
      this.hass?.locale?.language || undefined,
      { weekday: "short", day: "numeric", month: "short" }
    );
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

    // When bound to an Energy date selector and a day other than today is
    // selected, the live tiles (battery, grid, AC) all show current data and
    // are unrelated to the chosen day — so collapse to just the solar
    // production / forecast graph for that day.
    if (!this._isToday()) {
      return html`<ha-card>${this._forecastGraph()}</ha-card>`;
    }

    return html`<ha-card>
      ${this._renderHead(device)}
      ${this._renderStats()}
      ${this._show("show_today") ? this._renderToday() : ""}
      ${this._dialog === "panels"
        ? this._dialogFrame(this._t("panels.title"), renderPanels(this))
        : ""}
      ${this._dialog === "today"
        ? this._dialogFrame(this._periodLabel(), this._forecastGraph(), "large")
        : ""}
      ${this._dialog === "battery"
        ? this._dialogFrame(this._t("battery.title"), this._renderBatteryDetail())
        : ""}
      ${this._confirmAc ? this._renderConfirmAc() : ""}
    </ha-card>`;
  }

  /* All card dialogs use ha-adaptive-dialog: a centered dialog on desktop and a
   * bottom sheet on mobile (HA 2026.3+). width: small | medium | large | full. */
  _dialogFrame(title, body, width = "medium") {
    return html`<ha-adaptive-dialog
      open
      width=${width}
      header-title=${title}
      @closed=${() => (this._dialog = null)}
    >
      <div class="dlg-body">${body}</div>
    </ha-adaptive-dialog>`;
  }

  /* Resolved device image URL: explicit override, configured key, else auto.
   * Rebased onto the HA instance so bundled images still load under Home
   * Assistant Cast (see assetUrl). */
  _imageSrc(device) {
    const model = device?.device?.model;
    return assetUrl(
      this._config.image_url ||
        (this._config.image
          ? imageUrlForKey(this._config.image)
          : deviceImageUrl(model)),
      this.hass
    );
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
    const imageSrc = this._imageSrc(device);

    return html`<div class="head">
      <div class="head-left">
        <div class="name">${name}</div>
        ${model && model !== name
          ? html`<div class="subtitle">${model}</div>`
          : ""}
        ${this._show("show_ac") ? this._renderAc() : ""}
      </div>
      ${this._renderBatteryCircle(imageSrc, name)}
    </div>`;
  }

  /* Circular battery + device gauge: a SoC ring around the device image that
   * changes colour and shows a travelling spark while charging / discharging,
   * with the level as a badge and the charge/discharge speed as a chip. */
  _renderBatteryCircle(imageSrc, name) {
    const socState = this._state("sensor.cms_batt_soc");
    const showImg = this._show("show_image") && imageSrc;
    if (!socState && !showImg) return "";

    const soc = numState(socState);
    const batPower = numState(this._state("sensor.bat_power"));
    const charging =
      this._state("binary_sensor.battery_charging")?.state === "on" ||
      (batPower != null && batPower > 1);
    const discharging = !charging && batPower != null && batPower < -1;
    const ringState = charging
      ? "charge"
      : discharging
        ? "discharge"
        : soc != null && soc <= 15
          ? "low"
          : "";
    const active = charging ? "charge" : discharging ? "discharge" : "";
    // Keep the last flow direction so the particles/spark keep their colour and
    // motion while fading out when the battery goes idle (rather than vanishing
    // or snapping). `flowing` drives the fade; `dir` drives colour + direction.
    if (active) this._battDir = active;
    const dir = active || this._battDir;
    const flowing = !!active;

    const C = 2 * Math.PI * 44; // ring circumference (r=44 in the 100x100 viewBox)
    const pct = soc != null ? Math.max(0, Math.min(100, soc)) : 0;

    // Charge / discharge / reserve limits as small radial ticks on the ring.
    const ticks = [
      {
        v: numState(this._state("number.min_discharge_soc")),
        cls: "discharge",
        label: this._t("card.discharge_limit"),
      },
      {
        v: numState(this._state("number.backup_reserve")),
        cls: "reserve",
        label: this._t("card.reserve"),
      },
      {
        v: numState(this._state("number.max_charge_soc")),
        cls: "charge",
        label: this._t("card.charge_limit"),
      },
    ].filter((t) => t.v != null);

    return html`<div
      class="batt-circle clickable ${active}"
      @click=${() => (this._dialog = "battery")}
    >
      ${socState
        ? html`<svg class="batt-ring" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="44"></circle>
            <circle
              class="ring-fill ${ringState}"
              cx="50"
              cy="50"
              r="44"
              transform="rotate(-90 50 50)"
              style="stroke-dasharray:${C.toFixed(1)};stroke-dashoffset:${(
                C *
                (1 - pct / 100)
              ).toFixed(1)}"
            ></circle>
            ${dir
              ? svg`<circle
                  class="ring-spin ${dir} ${flowing ? "show" : ""}"
                  cx="50"
                  cy="50"
                  r="44"
                  stroke-dasharray="16 261"
                ></circle>`
              : ""}
            ${ticks.map((t) => {
              const a = (Math.max(0, Math.min(100, t.v)) / 100) * 2 * Math.PI;
              const sin = Math.sin(a);
              const cos = Math.cos(a);
              return svg`<line
                class="ring-tick ${t.cls}"
                x1=${(50 + 39.5 * sin).toFixed(1)}
                y1=${(50 - 39.5 * cos).toFixed(1)}
                x2=${(50 + 48.5 * sin).toFixed(1)}
                y2=${(50 - 48.5 * cos).toFixed(1)}
              ><title>${t.label} ${Math.round(t.v)}%</title></line>`;
            })}
          </svg>`
        : ""}
      ${socState && dir
        ? html`<div class="batt-particles ${dir} ${flowing ? "show" : ""}">
            ${Array.from({ length: 12 }, (_, i) => {
              const angle = i * 30; // evenly spaced around the ring
              // decorrelate phase from angle (5 is coprime with 12) so the
              // flow reads as a steady radial stream rather than a swirl.
              const delay = (((i * 5) % 12) / 12) * 1.6;
              return html`<span
                class="particle"
                style="--angle:${angle}deg;animation-delay:${delay.toFixed(2)}s"
              ></span>`;
            })}
          </div>`
        : ""}
      ${showImg
        ? html`<picture
            >${webpVariant(imageSrc)
              ? html`<source
                  srcset=${webpVariant(imageSrc)}
                  type="image/webp"
                />`
              : ""}<img class="device-img" src="${imageSrc}" alt="${name}"
          /></picture>`
        : socState
          ? html`<ha-state-icon
              class="batt-icon"
              .hass=${this.hass}
              .stateObj=${socState}
            ></ha-state-icon>`
          : html`<ha-icon
              class="batt-icon"
              icon="mdi:home-lightning-bolt"
            ></ha-icon>`}
      ${socState && (charging || discharging) && batPower != null
        ? html`<span class="batt-speed ${active}">
            <ha-icon
              icon=${charging ? "mdi:flash" : "mdi:battery-arrow-down"}
            ></ha-icon>${fmtPower(Math.abs(batPower))}
          </span>`
        : ""}
      ${socState
        ? html`<span class="batt-badge"
            >${soc != null ? Math.round(soc) : "–"}%</span
          >`
        : ""}
    </div>`;
  }

  /* Battery detail dialog: device image + SoC hero, then a grid of battery
   * metric tiles (each opens its own more-info on tap). */
  _renderBatteryDetail() {
    const device = this._device;
    const imageSrc = this._show("show_image") && this._imageSrc(device);
    const name = device?.device?.name || device?.device?.model || this._t("card.device");
    const soc = numState(this._state("sensor.cms_batt_soc"));
    const batPower = numState(this._state("sensor.bat_power"));
    const charging =
      this._state("binary_sensor.battery_charging")?.state === "on" ||
      (batPower != null && batPower > 1);
    const discharging = !charging && batPower != null && batPower < -1;
    const active = charging ? "charge" : discharging ? "discharge" : "";
    const statusIcon = charging
      ? "mdi:flash"
      : discharging
        ? "mdi:battery-arrow-down"
        : "mdi:battery";
    const statusLabel = charging
      ? this._t("card.charging")
      : discharging
        ? this._t("card.discharging")
        : this._t("battery.idle");
    const speed =
      (charging || discharging) && batPower != null
        ? fmtPower(Math.abs(batPower))
        : null;

    const tiles = [
      { slot: "sensor.soh", icon: "mdi:heart-pulse", label: this._t("battery.health") },
      { slot: "sensor.calendar_soh", icon: "mdi:calendar-heart", label: this._t("battery.calendar_health") },
      { slot: "sensor.bat_temp", icon: "mdi:thermometer", label: this._t("battery.temperature") },
      ...(charging
        ? [{ slot: "sensor.chg_rem_time", icon: "mdi:battery-clock", label: this._t("battery.time_to_full") }]
        : []),
      ...(discharging
        ? [{ slot: "sensor.dsg_rem_time", icon: "mdi:battery-clock", label: this._t("battery.time_to_empty") }]
        : []),
      { slot: "sensor.full_energy", icon: "mdi:battery-high", label: this._t("battery.capacity") },
      { slot: "sensor.cycles", icon: "mdi:battery-sync", label: this._t("battery.cycles") },
    ]
      .map((t) => ({ ...t, value: this._battTileValue(t.slot) }))
      .filter((t) => t.value != null);

    return html`<div class="batt-detail">
      <div class="batt-hero">
        ${imageSrc
          ? html`<picture
              >${webpVariant(imageSrc)
                ? html`<source srcset=${webpVariant(imageSrc)} type="image/webp" />`
                : ""}<img class="batt-hero-img" src=${imageSrc} alt=${name}
            /></picture>`
          : html`<ha-icon class="batt-hero-img" icon="mdi:home-battery"></ha-icon>`}
        <div class="batt-hero-info">
          <span class="batt-hero-pct"
            >${soc != null ? Math.round(soc) : "–"}<span class="batt-hero-u">%</span></span
          >
          <span class="batt-hero-status ${active}">
            <ha-icon icon=${statusIcon}></ha-icon>${statusLabel}${speed
              ? ` · ${speed}`
              : ""}
          </span>
        </div>
      </div>
      ${tiles.length
        ? html`<div class="batt-grid">
            ${tiles.map((t) => {
              const id = this._entityId(t.slot);
              return html`<div
                class="batt-tile ${id ? "clickable" : ""}"
                @click=${id ? () => this._moreInfoId(id) : null}
              >
                <ha-icon icon=${t.icon}></ha-icon>
                <div class="batt-tile-text">
                  <span class="batt-tile-val">${t.value}</span>
                  <span class="batt-tile-label">${t.label}</span>
                </div>
              </div>`;
            })}
          </div>`
        : ""}
    </div>`;
  }

  /* A battery metric formatted for a tile, using the entity's unit, or null. */
  _battTileValue(slot) {
    const st = this._state(slot);
    const v = numState(st);
    if (v == null) return null;
    const unit = st.attributes?.unit_of_measurement || "";
    if (unit === "W") return fmtPower(v);
    if (unit === "Wh") return fmtEnergyWh(v);
    if (unit === "kWh") return fmtEnergyWh(v * 1000);
    if (unit === "min") return fmtDuration(v);
    if (unit === "%") return `${Math.round(v)}%`;
    if (unit) return `${Math.round(v)} ${unit}`;
    return String(Math.round(v));
  }

  _renderAc() {
    const sockets = [
      { sw: "switch.ac1", pw: "sensor.schuko1_power", label: this._t("card.ac1") },
      { sw: "switch.ac2", pw: "sensor.schuko2_power", label: this._t("card.ac2") },
    ]
      .map((s) => ({
        ...s,
        swState: this._state(s.sw),
        pwState: this._state(s.pw),
      }))
      .filter((s) => s.swState || s.pwState);
    if (!sockets.length) return "";

    return html`<div class="ac">
      ${sockets.map((s) => {
        const on = s.swState?.state === "on";
        const power = numState(s.pwState);
        return html`<div
          class="ac-socket clickable"
          @click=${() => this._moreInfoId(this._entityId(s.pw) || this._entityId(s.sw))}
        >
          <ha-icon class="ac-icon ${on ? "on" : ""}" icon="mdi:power-socket-de"></ha-icon>
          <div class="ac-info">
            <span class="ac-name">${s.label}</span>
            <span class="ac-power">
              ${s.swState && !on
                ? this._t("card.off")
                : power != null
                  ? this._metric(splitPower(power))
                  : s.pwState
                    ? "—"
                    : ""}
            </span>
          </div>
          ${s.swState
            ? html`<ha-switch
                .checked=${on}
                @click=${(ev) => ev.stopPropagation()}
                @change=${() => this._toggleSwitch(s.sw, s.label)}
              ></ha-switch>`
            : ""}
        </div>`;
      })}
    </div>`;
  }

  _toggleSwitch(slot, label) {
    const id = this._entityId(slot);
    const st = id ? this.hass.states[id] : null;
    if (!id || !st) return;
    if (st.state === "on") {
      // Two-step: confirm before cutting power to a socket.
      this._confirmAc = { slot, label };
    } else {
      this.hass.callService("switch", "turn_on", { entity_id: id });
    }
  }

  _renderConfirmAc() {
    const { label } = this._confirmAc;
    const close = () => (this._confirmAc = null);
    return html`<ha-adaptive-dialog
      open
      width="small"
      header-title=${this._t("confirm.title")}
      @closed=${close}
    >
      <div class="confirm-body">
        <div class="confirm-text">
          ${this._t("confirm.ac_off", { name: label })}
        </div>
        <div class="confirm-actions">
          <button class="text-btn" @click=${close}>
            ${this._t("confirm.cancel")}
          </button>
          <button
            class="filled-btn danger"
            @click=${() => {
              const id = this._entityId(this._confirmAc.slot);
              if (id) {
                this.hass.callService("switch", "turn_off", { entity_id: id });
              }
              this._confirmAc = null;
            }}
          >
            ${this._t("confirm.turn_off")}
          </button>
        </div>
      </div>
    </ha-adaptive-dialog>`;
  }

  /* A value as a large number + a smaller muted unit, used uniformly. */
  _metric(split) {
    return html`<span class="metric"
      ><span class="metric-num">${split.n}</span
      ><span class="metric-unit">${split.u}</span></span
    >`;
  }

  _renderStats() {
    // A configured `stats` list replaces the built-in Solar + Grid tiles with
    // arbitrary entities, each with its own tap action. Absent `stats` keeps
    // the default behaviour below (solar breakdown + grid import/export).
    if (Array.isArray(this._config.stats)) {
      return html`<div class="stats custom">
        ${this._config.stats.map((item) => this._renderCustomStat(item))}
      </div>`;
    }

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
        <div class="stat-value">${this._metric(splitPower(solar))}</div>
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
        ${this._metric(splitPower(grid != null ? Math.abs(grid) : null))}
      </div>
      <div class="stat-sub">${label}</div>
    </div>`;
  }

  /* A user-configured stat tile: any entity, optional name/icon, and a native
   * Home Assistant tap action (more-info by default). */
  _renderCustomStat(item) {
    if (!item || (!item.entity && !item.name)) return html``;
    const stateObj = item.entity ? this.hass.states[item.entity] : undefined;
    const name =
      item.name || stateObj?.attributes?.friendly_name || item.entity || "";
    const action = item.tap_action;
    const clickable = !action || action.action !== "none";
    return html`<div
      class="stat ${clickable ? "clickable" : ""}"
      @click=${clickable
        ? () => this._handleAction(action, item.entity)
        : null}
    >
      <div class="stat-head">
        ${item.icon
          ? html`<ha-icon icon=${item.icon}></ha-icon>`
          : stateObj
            ? html`<ha-state-icon
                .hass=${this.hass}
                .stateObj=${stateObj}
              ></ha-state-icon>`
            : html`<ha-icon icon="mdi:gauge"></ha-icon>`}
        ${name}
      </div>
      <div class="stat-value">${this._metric(this._statValue(stateObj))}</div>
    </div>`;
  }

  /* Format an arbitrary entity state as { n, u } for the metric display:
   * watts collapse to W/kW, other numbers keep their unit, non-numeric states
   * (e.g. "on") show as-is. */
  _statValue(stateObj) {
    const raw = stateObj?.state;
    if (raw == null || raw === "unavailable" || raw === "unknown") {
      return { n: "–", u: "" };
    }
    const num = numState(stateObj);
    const unit = stateObj.attributes?.unit_of_measurement || "";
    if (num == null) return { n: raw, u: "" };
    if (unit === "W") return splitPower(num);
    const n = Number.isInteger(num) ? String(num) : num.toFixed(1);
    return { n, u: unit };
  }

  /* Minimal Home Assistant action handler for tap actions configured via the
   * native ui-action editor. Covers the common actions; unknown ones fall back
   * to more-info. */
  _handleAction(action, entityId) {
    const cfg = action || { action: "more-info" };
    const type = cfg.action || "more-info";
    if (type === "none") return;
    if (cfg.confirmation) {
      const text =
        cfg.confirmation.text || this._t("card.confirm_action") || "Are you sure?";
      if (!window.confirm(text)) return;
    }
    switch (type) {
      case "more-info":
        this._moreInfoId(cfg.entity || entityId);
        return;
      case "toggle": {
        const id = cfg.entity || entityId;
        if (id) {
          this.hass.callService("homeassistant", "toggle", { entity_id: id });
        }
        return;
      }
      case "navigate":
        if (cfg.navigation_path) {
          history.pushState(null, "", cfg.navigation_path);
          this.dispatchEvent(
            new CustomEvent("location-changed", {
              detail: { replace: false },
              bubbles: true,
              composed: true,
            })
          );
        }
        return;
      case "url":
        if (cfg.url_path) {
          window.open(cfg.url_path, cfg.new_tab === false ? "_self" : "_blank");
        }
        return;
      case "perform-action":
      case "call-service": {
        const svc = cfg.perform_action || cfg.service;
        const [domain, service] = (svc || "").split(".", 2);
        if (domain && service) {
          this.hass.callService(
            domain,
            service,
            cfg.data || cfg.service_data || {},
            cfg.target
          );
        }
        return;
      }
      default:
        this._moreInfoId(cfg.entity || entityId);
    }
  }

  /* The hourly solar production graph with the forecast curve over it, for the
   * active range. Shown in the "today" dialog and inline for a past day. */
  _forecastGraph() {
    const ref = this._dataRange().ref;
    const merged = this._mergedForecast();
    return renderForecastGraph(this, {
      title: this._periodLabel(),
      actual: this._hourly || {},
      forecast: forecastHourly(merged, ref),
      totalWh: this._todayWh,
      forecastWh: forecastTodayWh(merged, ref),
      // Only "today" has an in-progress hour to animate (blue bar).
      currentHour: this._isToday() ? new Date().getHours() : null,
      showForecast:
        this._show("show_forecast") &&
        Object.keys(this._forecasts || {}).length > 0,
    });
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

    return html`<div
      class="today clickable"
      @click=${() => (this._dialog = "today")}
    >
      <div class="today-head">
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
        <span class="today-label">${this._periodLabel()}</span>
        <ha-icon class="today-more" icon="mdi:chart-bar"></ha-icon>
        <span class="today-value">${this._metric(splitKWh(todayKWh))}</span>
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
