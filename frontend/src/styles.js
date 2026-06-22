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
  /* <picture> wrappers shouldn't affect layout; the inner <img> is the box. */
  picture {
    display: contents;
  }

  /* header: name + AC on the left, battery/device circle on the right */
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }
  .head-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
  }
  .name {
    font-size: 1.4em;
    font-weight: 700;
    line-height: 1.15;
  }
  .subtitle {
    color: var(--secondary-text-color);
    font-size: 0.95em;
  }
  /* battery / device circle (right of the header, vertically centred) */
  .batt-circle {
    position: relative;
    width: 152px;
    height: 152px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--secondary-background-color);
  }
  /* energy-flow particles: small dots that stream inward (absorbed into the
     device) while charging and outward while discharging — replaces the old
     pulsing glow. Lives behind the device image so particles visually merge
     into / emerge from the device near the centre.

     State changes are animated, never an instant swap: the whole layer fades
     via opacity (.show), the dot colour transitions between charge/discharge,
     and going idle pauses the animation in place (instead of snapping the dots
     to the centre) so they fade out gracefully. */
  .batt-particles {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.55s ease;
  }
  .batt-particles.show {
    opacity: 1;
  }
  .batt-particles .particle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    margin: -2.5px 0 0 -2.5px;
    border-radius: 50%;
    opacity: 0;
    will-change: transform, opacity;
    transition: background-color 0.55s ease, box-shadow 0.55s ease;
  }
  .batt-particles.charge .particle {
    background-color: var(--state-sensor-battery-high-color, #43a047);
    box-shadow: 0 0 5px color-mix(in srgb, var(--state-sensor-battery-high-color, #43a047) 70%, transparent);
    animation: particle-charge 1.6s linear infinite;
  }
  .batt-particles.discharge .particle {
    background-color: var(--info-color, #2196f3);
    box-shadow: 0 0 5px color-mix(in srgb, var(--info-color, #2196f3) 70%, transparent);
    animation: particle-discharge 1.6s linear infinite;
  }
  /* while fading out (idle) keep the dots frozen where they are rather than
     letting the animation reset them to the centre. */
  .batt-particles:not(.show) .particle {
    animation-play-state: paused;
  }
  @keyframes particle-charge {
    0% {
      transform: rotate(var(--angle)) translateY(-64px) scale(1);
      opacity: 0;
    }
    15%,
    80% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateY(-22px) scale(0.3);
      opacity: 0;
    }
  }
  @keyframes particle-discharge {
    0% {
      transform: rotate(var(--angle)) translateY(-22px) scale(0.3);
      opacity: 0;
    }
    15%,
    80% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateY(-64px) scale(1);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .batt-particles .particle {
      animation: none !important;
    }
  }
  .batt-ring {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .ring-track {
    fill: none;
    stroke: var(--divider-color);
    stroke-width: 5;
  }
  .ring-fill {
    fill: none;
    stroke: var(--state-sensor-battery-high-color, #43a047);
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease, stroke 0.55s ease;
  }
  .ring-fill.low {
    stroke: var(--error-color, #db4437);
  }
  .ring-fill.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-fill.discharge {
    stroke: var(--info-color, #2196f3);
  }
  /* a spark that travels around the ring while charging / discharging; fades
     in/out (.show) and transitions colour rather than popping on state change */
  .ring-spin {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform-box: fill-box;
    opacity: 0;
    transition: opacity 0.55s ease, stroke 0.55s ease;
  }
  .ring-spin.show {
    opacity: 1;
  }
  .ring-spin.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
    animation: ring-spin 1.5s linear infinite;
  }
  .ring-spin.discharge {
    stroke: var(--info-color, #2196f3);
    animation: ring-spin 1.9s linear infinite reverse;
  }
  .ring-spin:not(.show) {
    animation-play-state: paused;
  }
  @keyframes ring-spin {
    to {
      transform: rotate(360deg);
    }
  }
  /* charge / discharge / reserve limit ticks on the ring */
  .ring-tick {
    stroke-width: 2.4;
    stroke-linecap: round;
  }
  .ring-tick.charge {
    stroke: var(--state-sensor-battery-high-color, #43a047);
  }
  .ring-tick.discharge {
    stroke: var(--error-color, #db4437);
  }
  .ring-tick.reserve {
    stroke: var(--primary-text-color);
  }
  .batt-circle .device-img {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 58%;
    max-height: 58%;
    object-fit: contain;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
  }
  .batt-icon {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    --mdc-icon-size: 56px;
    color: var(--state-icon-color, var(--primary-text-color));
  }
  .batt-badge {
    position: absolute;
    left: 50%;
    bottom: -3px;
    transform: translateX(-50%);
    background: var(--card-background-color, var(--ha-card-background));
    border: 1px solid var(--divider-color);
    border-radius: 13px;
    padding: 1px 11px;
    font-weight: 800;
    font-size: 1.05em;
    color: var(--primary-text-color);
  }
  .batt-speed {
    position: absolute;
    left: 50%;
    top: -3px;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 3px;
    border-radius: 13px;
    padding: 2px 9px;
    font-size: 0.78em;
    font-weight: 700;
    white-space: nowrap;
    background: var(--card-background-color, var(--ha-card-background));
    border: 1px solid var(--divider-color);
  }
  .batt-speed ha-icon {
    --mdc-icon-size: 14px;
  }
  .batt-speed.charge {
    color: var(--state-sensor-battery-high-color, #43a047);
  }
  .batt-speed.discharge {
    color: var(--info-color, #2196f3);
  }

  /* AC sockets (stacked, compact, in the header's left column) */
  .ac {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 14px;
  }
  .ac-socket {
    display: flex;
    align-items: center;
    gap: 9px;
    background: var(--secondary-background-color);
    border-radius: 12px;
    padding: 6px 10px;
    transition: filter 0.15s ease;
  }
  .ac-socket:hover {
    filter: brightness(1.08);
  }
  .ac-socket ha-switch {
    --mdc-switch-track-width: 32px;
    transform: scale(0.85);
    transform-origin: right center;
  }
  .ac-icon {
    --mdc-icon-size: 19px;
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
    font-size: 0.8em;
    line-height: 1.2;
  }
  .ac-power {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .ac-power .metric-num {
    font-size: 1.05em;
  }

  /* power stats */
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }
  /* a configured stat list can hold any number of tiles — let them wrap. */
  .stats.custom {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
  .stat {
    background: var(--secondary-background-color);
    border-radius: 14px;
    padding: 14px;
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
  .stat-head ha-icon,
  .stat-head ha-state-icon {
    --mdc-icon-size: 18px;
  }
  .stat-head .more {
    margin-left: auto;
    opacity: 0.6;
    --mdc-icon-size: 16px;
  }
  .stat-value {
    font-weight: 700;
    color: var(--primary-text-color);
  }
  .stat-sub {
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  /* shared number + muted unit, used for every primary value */
  .metric {
    display: inline-flex;
    align-items: baseline;
    gap: 3px;
  }
  .metric-num {
    font-size: 1.4em;
    font-weight: 800;
    line-height: 1;
  }
  .metric-unit {
    font-size: 0.78em;
    font-weight: 600;
    opacity: 0.8;
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
    --mdc-icon-size: 18px;
    color: var(--energy-solar-color, #ff9800);
    align-self: center;
  }
  .today-label {
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }
  .today-value {
    margin-left: auto;
    font-weight: 800;
    color: var(--energy-solar-color, #ff9800);
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

  /* battery detail dialog */
  .batt-detail {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 4px 2px 6px;
  }
  .batt-hero {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  img.batt-hero-img {
    width: 96px;
    height: 96px;
    object-fit: contain;
  }
  ha-icon.batt-hero-img {
    --mdc-icon-size: 72px;
    color: var(--secondary-text-color);
  }
  .batt-hero-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .batt-hero-pct {
    font-size: 2.6em;
    font-weight: 700;
    line-height: 1;
    color: var(--primary-text-color);
  }
  .batt-hero-u {
    font-size: 0.45em;
    font-weight: 600;
    color: var(--secondary-text-color);
    margin-left: 2px;
  }
  .batt-hero-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.95em;
    font-weight: 600;
    color: var(--secondary-text-color);
  }
  .batt-hero-status ha-icon {
    --mdc-icon-size: 18px;
  }
  .batt-hero-status.charge {
    color: var(--state-sensor-battery-high-color, #43a047);
  }
  .batt-hero-status.discharge {
    color: var(--info-color, #2196f3);
  }
  .batt-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .batt-tile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border-radius: 12px;
    background: var(--secondary-background-color);
  }
  .batt-tile.clickable {
    cursor: pointer;
    transition: filter 0.15s ease;
  }
  .batt-tile.clickable:hover {
    filter: brightness(1.06);
  }
  .batt-tile > ha-icon {
    --mdc-icon-size: 22px;
    color: var(--primary-color);
    flex: 0 0 auto;
  }
  .batt-tile-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .batt-tile-val {
    font-size: 1.05em;
    font-weight: 700;
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .batt-tile-label {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .confirm-body {
    padding: 4px 4px 0;
  }
  .confirm-text {
    color: var(--secondary-text-color);
    font-size: 0.95em;
    line-height: 1.45;
  }
  .confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;
  }
  .text-btn,
  .filled-btn {
    border: none;
    border-radius: 20px;
    padding: 10px 18px;
    font-size: 0.95em;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.15s ease, background-color 0.15s ease;
  }
  .text-btn {
    background: transparent;
    color: var(--primary-color);
  }
  .text-btn:hover {
    background: color-mix(in srgb, var(--primary-color) 10%, transparent);
  }
  .filled-btn {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    padding: 10px 24px;
  }
  .filled-btn.danger {
    background: var(--error-color, #db4437);
    color: #fff;
  }
  .filled-btn:hover {
    filter: brightness(1.08);
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

  /* produced-vs-forecast progress (red) */
  .fc-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: -2px 0 12px;
  }
  .fc-progress-track {
    flex: 1;
    height: 8px;
    border-radius: 6px;
    background: var(--secondary-background-color);
    overflow: hidden;
  }
  .fc-progress-fill {
    height: 100%;
    border-radius: 6px;
    background: var(--energy-solar-color, #ff9800);
    transition: width 0.5s ease;
  }
  .fc-progress-label {
    font-size: 0.85em;
    font-weight: 700;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  /* the live, in-progress hour: same solar colour as the other bars, set apart
   * by a gentle pulse + glow that reads as "still rising" */
  .fc-current {
    transform-box: fill-box;
    transform-origin: bottom;
    animation: fc-pulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 3px var(--energy-solar-color, #ff9800));
  }
  @keyframes fc-pulse {
    0%,
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
    50% {
      opacity: 0.6;
      transform: scaleY(1.04);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .fc-current {
      animation: none;
    }
  }

  /* hover / touch tooltip */
  .fc-hit {
    fill: transparent;
    pointer-events: all;
    cursor: pointer;
  }
  .fc-band {
    fill: var(--primary-text-color);
    opacity: 0.06;
  }
  .fc-tip-box {
    fill: var(--card-background-color, #1c1c1c);
    stroke: var(--divider-color);
    stroke-width: 1;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }
  .fc-tip-time {
    fill: var(--primary-text-color);
    font-size: 15px;
    font-weight: 700;
  }
  .fc-tip-line {
    fill: var(--secondary-text-color);
    font-size: 14px;
  }
  .fc-tip-line .v {
    fill: var(--primary-text-color);
    font-weight: 700;
  }
`;
