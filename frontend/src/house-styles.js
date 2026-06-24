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
  .stage {
    position: relative;
    width: 100%;
    aspect-ratio: 2340 / 1680;
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

  /* Top figures — Grid · Solar · Home — over the sky, like the app. */
  .stats {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    display: flex;
    padding: clamp(10px, 3.5%, 22px) clamp(12px, 4%, 28px) 0;
    gap: 4px;
  }
  .stat {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    padding: 4px 6px;
  }
  /* centre + right columns, evoking the app's three-column header */
  .stat:nth-child(2) {
    align-items: center;
    text-align: center;
  }
  .stat:last-child:nth-child(3) {
    align-items: flex-end;
    text-align: right;
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

  /* Battery readout below the box. */
  .battery {
    position: absolute;
    left: 50%;
    bottom: clamp(6px, 3%, 22px);
    transform: translateX(-50%);
    z-index: 9;
    text-align: center;
    border-radius: 12px;
    padding: 4px 10px;
  }
  .battery.clickable {
    cursor: pointer;
  }
  .battery.clickable:hover {
    background: rgba(255, 255, 255, 0.06);
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
