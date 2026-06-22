/* "Solar today" graph dialog — modelled on Home Assistant's Energy "Solar
 * production" card: hourly produced-energy bars with a dashed forecast curve
 * over them and the day total in the corner. Drawn as a self-contained SVG from
 * the recorder's hourly statistics (bars) and energy/solar_forecast (curve).
 *
 * Extras: a red "produced vs forecast" progress bar across the top, the live
 * current hour drawn as an animated blue bar, and hover/touch tooltips that
 * report the hour and its produced/forecast values. */

import { html, svg } from "lit";
import { localize } from "../localize.js";

const W = 1000;
const H = 340;
const PAD = { l: 46, r: 14, t: 16, b: 28 };

export function renderForecastGraph(
  card,
  { actual, forecast, totalWh, forecastWh, currentHour, showForecast, title }
) {
  const t = (key, vars) => localize(card.hass, key, vars);
  const plotW = W - PAD.l - PAD.r;
  const plotH = H - PAD.t - PAD.b;
  const colW = plotW / 24;
  const xFor = (h) => PAD.l + (h / 24) * plotW;

  let peak = 0;
  for (let h = 0; h < 24; h++) {
    peak = Math.max(peak, (actual[h] || 0) / 1000);
    if (showForecast) peak = Math.max(peak, (forecast[h] || 0) / 1000);
  }
  const niceMax = niceCeil(peak > 0 ? peak : 0.1);
  const yFor = (kwh) => PAD.t + plotH - (kwh / niceMax) * plotH;

  const barW = colW * 0.66;
  const bars = [];
  for (let h = 0; h < 24; h++) {
    const kwh = (actual[h] || 0) / 1000;
    if (kwh <= 0) continue;
    const x = xFor(h + 0.5) - barW / 2;
    const y = yFor(kwh);
    // The in-progress hour is still accumulating: draw it blue and animated.
    const cls = h === currentHour ? "fc-actual fc-current" : "fc-actual";
    bars.push(
      svg`<rect class=${cls} x=${x.toFixed(1)} y=${y.toFixed(1)}
        width=${barW.toFixed(1)} height=${(PAD.t + plotH - y).toFixed(1)} rx="2"></rect>`
    );
  }

  let line = null;
  if (showForecast) {
    const pts = [];
    for (let h = 0; h <= 24; h++) {
      pts.push(`${xFor(h).toFixed(1)},${yFor((forecast[h] || 0) / 1000).toFixed(1)}`);
    }
    line = svg`<polyline class="fc-line" points=${pts.join(" ")}></polyline>`;
  }

  const grid = [];
  const divs = 4;
  for (let i = 0; i <= divs; i++) {
    const v = (niceMax / divs) * i;
    const y = yFor(v);
    grid.push(
      svg`<line class="fc-grid" x1=${PAD.l} y1=${y.toFixed(1)} x2=${W - PAD.r} y2=${y.toFixed(1)}></line>`
    );
    grid.push(
      svg`<text class="fc-axis fc-axis-y" x=${PAD.l - 6} y=${(y + 4).toFixed(1)}>${fmtTick(v)}</text>`
    );
  }
  const xTicks = [];
  for (let h = 0; h <= 24; h += 4) {
    xTicks.push(
      svg`<text class="fc-axis fc-axis-x" x=${xFor(h).toFixed(1)} y=${H - 8}>${h}:00</text>`
    );
  }

  // Produced-vs-forecast progress (red): how much of today's prediction we met.
  const pct =
    showForecast && forecastWh > 0 && totalWh != null
      ? Math.round((totalWh / forecastWh) * 100)
      : null;

  // Hover/touch interaction: one transparent hit column per hour drives a
  // tooltip. Re-render only when the focused hour changes (pointermove within a
  // column is a no-op) to keep it cheap.
  const setTip = (h) => {
    if (card._fcTip !== h) {
      card._fcTip = h;
      card.requestUpdate();
    }
  };
  const clearTip = () => {
    if (card._fcTip != null) {
      card._fcTip = null;
      card.requestUpdate();
    }
  };
  const hits = [];
  for (let h = 0; h < 24; h++) {
    hits.push(
      svg`<rect class="fc-hit" x=${xFor(h).toFixed(1)} y=${PAD.t} width=${colW.toFixed(1)} height=${plotH}
        @pointerenter=${() => setTip(h)} @pointermove=${() => setTip(h)}
        @pointerdown=${() => setTip(h)}></rect>`
    );
  }

  const th = card._fcTip;
  const hasTip = th != null && th >= 0 && th < 24;
  const band = hasTip
    ? svg`<rect class="fc-band" x=${xFor(th).toFixed(1)} y=${PAD.t} width=${colW.toFixed(1)} height=${plotH}></rect>`
    : null;
  const tip = hasTip ? tooltip(th) : null;

  function tooltip(h) {
    const prod = ((actual[h] || 0) / 1000).toFixed(2);
    const fc = ((forecast[h] || 0) / 1000).toFixed(2);
    const bw = 184;
    const bh = showForecast ? 84 : 60;
    let bx = xFor(h + 0.5) - bw / 2;
    bx = Math.max(PAD.l, Math.min(W - PAD.r - bw, bx));
    const by = PAD.t + 6;
    const tx = bx + 12;
    return svg`<g class="fc-tip" pointer-events="none">
      <rect class="fc-tip-box" x=${bx.toFixed(1)} y=${by} width=${bw} height=${bh} rx="7"></rect>
      <text class="fc-tip-time" x=${tx} y=${by + 24}>${pad(h)}:00 – ${pad((h + 1) % 24)}:00</text>
      <text class="fc-tip-line" x=${tx} y=${by + 46}>${t("card.produced")}: <tspan class="v">${prod} kWh</tspan></text>
      ${showForecast
        ? svg`<text class="fc-tip-line" x=${tx} y=${by + 68}>${t("card.forecast")}: <tspan class="v">${fc} kWh</tspan></text>`
        : null}
    </g>`;
  }

  return html`<div class="fc-graph">
    <div class="fc-graph-head">
      <span class="fc-graph-title">${title || t("card.today")}</span>
      <span class="fc-graph-total"
        >${(totalWh != null ? totalWh / 1000 : 0).toFixed(2)} kWh</span
      >
    </div>
    ${pct != null
      ? html`<div class="fc-progress" title=${t("card.of_forecast", { pct })}>
          <div class="fc-progress-track">
            <div
              class="fc-progress-fill"
              style="width:${Math.min(100, pct)}%"
            ></div>
          </div>
          <span class="fc-progress-label">${t("card.of_forecast", { pct })}</span>
        </div>`
      : ""}
    <svg
      class="chart"
      viewBox="0 0 ${W} ${H}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      @pointerleave=${clearTip}
      @pointercancel=${clearTip}
    >
      ${grid}${xTicks}
      <text class="fc-axis fc-unit" x=${PAD.l - 6} y=${PAD.t - 4}>kWh</text>
      ${band}${bars}${line}${hits}${tip}
    </svg>
    ${showForecast
      ? html`<div class="fc-graph-legend">
          <span class="lg lg-actual">${t("card.produced")}</span>
          <span class="lg lg-fc">${t("card.forecast")}</span>
        </div>`
      : ""}
  </div>`;
}

/* Round up to a "nice" axis maximum (1/2/5 * 10^n). */
function niceCeil(v) {
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}

function fmtTick(v) {
  return v >= 10 ? Math.round(v).toString() : v.toFixed(1).replace(/\.0$/, "");
}

function pad(n) {
  return String(n).padStart(2, "0");
}
