import { css } from "lit";

export const cardStyles = css`
  ha-card {
    padding: 20px;
  }
  .empty {
    padding: 8px;
    color: var(--secondary-text-color);
  }
  .clickable {
    cursor: pointer;
  }

  /* header: name + device image */
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    min-height: 132px;
  }
  .head-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .name {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.15;
  }
  .subtitle {
    color: var(--secondary-text-color);
    font-size: 0.95em;
  }
  .device-img {
    max-width: 46%;
    max-height: 150px;
    object-fit: contain;
    margin: -10px -6px 0 0;
    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.28));
  }

  /* battery */
  .battery {
    margin-top: 6px;
  }
  .batt-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .batt-row ha-icon,
  .batt-row ha-state-icon {
    --mdc-icon-size: 26px;
    color: var(--state-icon-color, var(--primary-text-color));
  }
  .soc {
    font-size: 1.9em;
    font-weight: 700;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    padding: 4px 10px;
    border-radius: 14px;
    font-weight: 600;
    font-size: 0.9em;
  }
  .chip ha-icon {
    --mdc-icon-size: 16px;
  }
  .chip.charge {
    color: var(--energy-solar-color, #ff9800);
    background: color-mix(
      in srgb,
      var(--energy-solar-color, #ff9800) 18%,
      transparent
    );
  }
  .chip.discharge {
    color: var(--state-sensor-battery-high-color, #43a047);
    background: color-mix(
      in srgb,
      var(--state-sensor-battery-high-color, #43a047) 18%,
      transparent
    );
  }
  .bar {
    height: 12px;
    border-radius: 6px;
    background: var(--divider-color);
    margin: 10px 0 4px;
    overflow: hidden;
    position: relative;
  }
  .fill {
    height: 100%;
    border-radius: 6px;
    background: var(--state-sensor-battery-high-color, #43a047);
    transition: width 0.4s ease;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .fill.low {
    background: var(--error-color, #db4437);
  }
  .fill.charging::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 45%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
    animation: sweep 1.6s linear infinite;
  }
  @keyframes sweep {
    from {
      transform: translateX(-110%);
    }
    to {
      transform: translateX(330%);
    }
  }
  /* limit zones (behind the fill) and marker lines (on top) */
  .zone {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
  .zone.floor {
    left: 0;
    background: repeating-linear-gradient(
      45deg,
      rgba(127, 127, 127, 0.4) 0 4px,
      transparent 4px 8px
    );
  }
  .zone.cap {
    background: rgba(127, 127, 127, 0.28);
  }
  .mark {
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 2px;
    margin-left: -1px;
    z-index: 2;
    border-radius: 1px;
  }
  .mark.charge {
    background: var(--energy-solar-color, #ff9800);
  }
  .mark.discharge {
    background: var(--error-color, #db4437);
  }
  .mark.reserve {
    background: var(--primary-text-color);
    opacity: 0.7;
  }
  .batt-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
    margin: 8px 0 2px;
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  .bl {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    padding: 2px 4px;
    margin: -2px -4px;
    transition: background-color 0.15s ease;
  }
  .bl:hover {
    background: var(--secondary-background-color);
  }
  .bl ha-icon {
    --mdc-icon-size: 15px;
  }
  .bl b {
    color: var(--primary-text-color);
    font-weight: 700;
  }
  .bl-dot {
    width: 8px;
    height: 8px;
    border-radius: 2px;
  }
  .bl-dot.charge {
    background: var(--energy-solar-color, #ff9800);
  }
  .bl-dot.discharge {
    background: var(--error-color, #db4437);
  }
  .bl-dot.reserve {
    background: var(--primary-text-color);
    opacity: 0.7;
  }

  /* AC sockets */
  .ac {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }
  .ac-socket {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 10px 12px;
    transition: filter 0.15s ease;
  }
  .ac-socket:hover {
    filter: brightness(1.08);
  }
  .ac-icon {
    --mdc-icon-size: 24px;
    color: var(--secondary-text-color);
  }
  .ac-icon.on {
    color: var(--state-switch-active-color, var(--primary-color));
  }
  .ac-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }
  .ac-name {
    color: var(--secondary-text-color);
    font-size: 0.82em;
  }
  .ac-power {
    font-weight: 700;
    color: var(--primary-text-color);
  }

  /* power stats */
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }
  .stat {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: filter 0.15s ease, transform 0.1s ease;
  }
  .stat.clickable:hover {
    filter: brightness(1.08);
  }
  .stat.clickable:active {
    transform: scale(0.99);
  }
  .stat-head {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }
  .stat-head ha-icon {
    --mdc-icon-size: 18px;
  }
  .stat-head .more {
    margin-left: auto;
    opacity: 0.6;
    --mdc-icon-size: 16px;
  }
  .stat-value {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .stat-sub {
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  .solar .stat-value {
    color: var(--energy-solar-color, #ff9800);
  }
  .grid.import .stat-value {
    color: var(--energy-grid-consumption-color, #488fc2);
  }
  .grid.export .stat-value {
    color: var(--energy-grid-return-color, #8353d1);
  }

  /* today's production + forecast */
  .today {
    margin-top: 16px;
    padding: 14px;
    border-radius: 14px;
    background: var(--secondary-background-color);
    transition: filter 0.15s ease;
  }
  .today.clickable:hover {
    filter: brightness(1.08);
  }
  .today-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .today-more {
    align-self: center;
    margin-left: auto;
    color: var(--secondary-text-color);
    --mdc-icon-size: 18px;
  }
  .today-more + .today-value {
    margin-left: 8px;
  }
  .today-head ha-icon {
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
    align-self: center;
  }
  .today-label {
    color: var(--secondary-text-color);
    font-size: 0.9em;
  }
  .today-value {
    margin-left: auto;
    font-size: 1.6em;
    font-weight: 800;
    color: var(--energy-solar-color, #ff9800);
  }
  .today-unit {
    font-size: 0.6em;
    font-weight: 600;
  }
  .fc-bar {
    height: 10px;
    border-radius: 5px;
    background: var(--divider-color);
    margin: 12px 0 6px;
    overflow: hidden;
  }
  .fc-fill {
    height: 100%;
    border-radius: 5px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-fill.met {
    background: var(--state-sensor-battery-high-color, #43a047);
  }
  .fc-legend {
    display: flex;
    justify-content: space-between;
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  .fc-legend b {
    color: var(--primary-text-color);
    font-weight: 700;
  }

  /* dialog */
  .dlg-body {
    padding: 4px 4px 8px;
  }
  .panels {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .panel-row {
    padding: 10px 8px;
    border-radius: 10px;
    transition: background-color 0.15s ease;
  }
  .panel-row:hover {
    background: var(--secondary-background-color);
  }
  .panel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-text-color);
  }
  .panel-name ha-icon {
    --mdc-icon-size: 20px;
    color: var(--energy-solar-color, #ff9800);
  }
  .panel-val {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .pbar {
    height: 7px;
    border-radius: 4px;
    background: var(--divider-color);
    margin-top: 7px;
    overflow: hidden;
  }
  .pfill {
    height: 100%;
    border-radius: 4px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.4s ease;
  }
  .panel-total {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 10px 8px 2px;
    border-top: 1px solid var(--divider-color);
    font-weight: 700;
    color: var(--primary-text-color);
  }

  /* forecast / production graph */
  .fc-graph-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .fc-graph-title {
    font-weight: 700;
    font-size: 1.15em;
    color: var(--primary-text-color);
  }
  .fc-graph-total {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 5px 12px;
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .chart {
    width: 100%;
    height: auto;
    display: block;
  }
  .fc-grid {
    stroke: var(--divider-color);
    stroke-width: 1;
  }
  .fc-axis {
    fill: var(--secondary-text-color);
    font-size: 13px;
    font-family: inherit;
  }
  .fc-axis-y,
  .fc-unit {
    text-anchor: end;
  }
  .fc-axis-x {
    text-anchor: middle;
  }
  .fc-actual {
    fill: var(--energy-solar-color, #ff9800);
  }
  .fc-line {
    fill: none;
    stroke: var(--primary-text-color);
    stroke-width: 2;
    stroke-dasharray: 6 5;
    stroke-linejoin: round;
    opacity: 0.85;
  }
  .fc-graph-legend {
    display: flex;
    gap: 18px;
    justify-content: center;
    margin-top: 10px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }
  .lg {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .lg::before {
    content: "";
    width: 14px;
    height: 3px;
    border-radius: 2px;
  }
  .lg-actual::before {
    height: 12px;
    width: 10px;
    border-radius: 2px;
    background: var(--energy-solar-color, #ff9800);
  }
  .lg-fc::before {
    background: repeating-linear-gradient(
      90deg,
      var(--primary-text-color) 0 6px,
      transparent 6px 11px
    );
  }
`;
