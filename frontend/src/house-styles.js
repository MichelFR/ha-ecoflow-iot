/* Styles for the EcoFlow House Card. The stage holds the house render with
 * every flow / battery overlay stacked on top in one coordinate box. */

import { css } from "lit";

export const houseCardStyles = css`
  :host {
    display: block;
  }
  ha-card {
    overflow: hidden;
    position: relative;
    /* Contain every internal z-index in the card's own stacking context so the
       figures / lines can't paint over Home Assistant's nav. */
    isolation: isolate;
    z-index: 0;
  }
  .title {
    font-size: 1.05em;
    font-weight: 600;
    color: var(--primary-text-color);
    padding: 14px 16px 0;
  }
  .empty {
    padding: 24px 16px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  /* The illustration: house render with overlays pinned to the same box. The
     2340×1680 house and 1170×840 overlays share an aspect ratio, so object-fit:
     contain on each lines them up exactly. */
  /* The house render is 2340×1680; the stage is a touch taller so a clear band
     is left at the bottom for the battery readout. The house and every overlay
     are top-aligned (object-position / preserveAspectRatio) so they stay
     mutually aligned and that band stays free of the illustration. */
  .stage {
    position: relative;
    width: 100%;
    aspect-ratio: 2340 / 1920;
  }
  .layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  img.layer {
    object-fit: contain;
    object-position: top center;
  }
  .flow {
    transition: opacity 0.4s ease;
  }
  /* Flow paths between sources and the house sit under the battery box; the SoC
     fill and charge/discharge glow sit on top of it. */
  .z-bg {
    z-index: 1;
  }
  .box {
    z-index: 2;
  }
  .z-box {
    z-index: 3;
  }

  /* Leader lines dropping from each figure into the scene (app-style). */
  .leaders {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
  }
  .leader {
    position: absolute;
    width: 1px;
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, var(--primary-text-color) 38%, transparent),
      transparent
    );
  }
  .leader.grid {
    left: 6.5%;
    top: 13%;
    height: 62%;
  }
  .leader.solar {
    left: 44.5%;
    top: 13%;
    height: 34%;
  }
  .leader.home {
    left: 70%;
    top: 13%;
    height: 50%;
  }

  /* Top figures — Grid · Solar · Home. Each figure is left-aligned at the x of
     its leader line (below), so the figure sits directly above its line. A soft
     scrim of the card surface keeps them legible over the render behind them. */
  .stats {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    height: clamp(70px, 18%, 112px);
    background: linear-gradient(
      to bottom,
      var(--ha-card-background, var(--card-background-color, #fff)) 30%,
      transparent
    );
  }
  .stat {
    position: absolute;
    top: clamp(8px, 3%, 20px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    border-radius: 10px;
    /* no left padding so the text's left edge sits exactly on the leader line */
    padding: 4px 8px 4px 0;
  }
  .stat.col-grid {
    left: 6.5%;
  }
  .stat.col-solar {
    left: 44.5%;
  }
  .stat.col-home {
    left: 70%;
  }
  .stat.clickable {
    cursor: pointer;
  }
  .stat.clickable:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  .stat-value {
    color: var(--primary-text-color, #fff);
    line-height: 1.1;
    white-space: nowrap;
  }
  .stat-value .num {
    font-size: clamp(15px, 4.2vw, 26px);
    font-weight: 700;
  }
  .stat-value .unit {
    font-size: 0.62em;
    font-weight: 600;
    margin-left: 2px;
    opacity: 0.7;
  }
  .stat-label {
    font-size: clamp(10px, 2.2vw, 13px);
    color: var(--secondary-text-color);
    margin-top: 2px;
  }
  .stat.solar .stat-value .num {
    color: var(--energy-solar-color, #ff9800);
  }
  .stat.import .stat-value .num {
    color: var(--energy-grid-consumption-color, #488fc2);
  }
  .stat.export .stat-value .num {
    color: var(--energy-grid-return-color, #8353d1);
  }

  /* Battery readout in the clear band below the house — no container needed. */
  .battery {
    position: absolute;
    left: 50%;
    bottom: clamp(2px, 1.5%, 14px);
    transform: translateX(-50%);
    z-index: 3;
    text-align: center;
    border-radius: 12px;
    padding: 4px 12px;
  }
  .battery.clickable {
    cursor: pointer;
  }
  .battery.clickable:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  .battery-line {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-text-color, #fff);
    font-weight: 700;
    font-size: clamp(13px, 3.4vw, 18px);
    white-space: nowrap;
  }
  .battery-line ha-icon {
    --mdc-icon-size: 1.05em;
    color: var(--secondary-text-color);
  }
  .battery.charge .battery-line ha-icon {
    color: var(--energy-battery-in-color, #3ddc84);
  }
  .battery.discharge .battery-line ha-icon {
    color: var(--energy-battery-out-color, #f06292);
  }
  .battery-soc {
    color: var(--primary-text-color, #fff);
  }
  .battery-label {
    font-size: clamp(10px, 2.2vw, 13px);
    margin-top: 1px;
    color: var(--secondary-text-color);
  }
  .battery.charge .battery-label {
    color: var(--energy-battery-in-color, #3ddc84);
  }
  .battery.discharge .battery-label {
    color: var(--energy-battery-out-color, #f06292);
  }
`;
