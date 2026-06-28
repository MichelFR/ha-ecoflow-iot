/* Shared lottie flow-animation lifecycle for the energy-flow illustration.
 *
 * The house render and the space view both draw the same animated grid / solar
 * / home / battery flows over the house image (the reverse-engineered app
 * Lotties). This controller owns those lottie instances: it mounts each lazily
 * on first activation, then keeps it (paused when idle) so we never churn
 * instances on every state update, and destroys them on teardown.
 *
 * The host renders a `data-flow="<key>"` container per flow inside its render
 * root, computes the live `states`, and calls sync(); the controller does the
 * rest. Asset names come from houses.js so both cards stay in lockstep. */

import lottie from "lottie-web/build/player/lottie_light";
import { FLOWS, flowUrl, solarFlowName } from "./houses.js";

// Power magnitude (W) below which a path is treated as idle (no flow shown).
export const ACTIVE_W = 1;

/* The flow layers and when each is active, in z-order (declared first =
 * underneath). Files are the reverse-engineered app assets. The bat_* layers
 * are drawn on/around the battery box, so they only apply when the chosen
 * battery render has matching overlays (see batteryHasOverlays). */
export const FLOW_DEFS = [
  { key: "solar", file: (s) => solarFlowName(s.route), active: (s) => s.solar > ACTIVE_W },
  { key: "grid_in", file: () => FLOWS.grid_in, active: (s) => s.grid > ACTIVE_W },
  { key: "grid_out", file: () => FLOWS.grid_out, active: (s) => s.grid < -ACTIVE_W },
  { key: "home", file: () => FLOWS.home, active: (s) => s.load > ACTIVE_W },
  { key: "bat_in", file: () => FLOWS.bat_in, active: (s) => s.bat > ACTIVE_W, bat: true },
  { key: "bat_out", file: () => FLOWS.bat_out, active: (s) => s.bat < -ACTIVE_W, bat: true },
  // SoC fill sits on the battery box and is seeked to the level, not played.
  { key: "bat_soc", file: () => FLOWS.bat_soc, active: (s) => s.soc != null, mode: "soc", bat: true },
  { key: "bat_chg", file: () => FLOWS.bat_chg, active: (s) => s.bat > ACTIVE_W, bat: true },
  { key: "bat_dsg", file: () => FLOWS.bat_dsg, active: (s) => s.bat < -ACTIVE_W, bat: true },
];

export class FlowController {
  constructor() {
    // key -> { anim, file, ready, mode } for each mounted flow Lottie.
    this._anims = {};
  }

  /* Mount/play/pause every flow to match the current scene.
   * opts = { hass, showFlows, batOverlays, states }. */
  sync(renderRoot, { hass, showFlows, batOverlays, states }) {
    if (!renderRoot) return;
    for (const def of FLOW_DEFS) {
      const container = renderRoot.querySelector(`[data-flow="${def.key}"]`);
      if (!container) continue;
      const active = showFlows && def.active(states) && (!def.bat || batOverlays);
      this._setFlow(hass, container, def, active, states);
    }
  }

  destroy() {
    for (const rec of Object.values(this._anims)) rec.anim?.destroy();
    this._anims = {};
  }

  _setFlow(hass, container, def, active, states) {
    const key = def.key;
    const file = def.file(states);
    const mode = def.mode || "play";
    let rec = this._anims[key];

    // Mount lazily on first activation; reload only if the chosen file changed
    // (e.g. the solar route).
    if (active && (!rec || rec.file !== file)) {
      rec?.anim?.destroy();
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: mode !== "soc",
        autoplay: false,
        path: flowUrl(file, hass),
        // Top-align like the house image so the scene keeps a clear band at the
        // bottom for the battery readout (see the stage's aspect ratio).
        rendererSettings: { preserveAspectRatio: "xMidYMin meet" },
      });
      rec = this._anims[key] = { anim, file, ready: false, mode };
      anim.addEventListener("DOMLoaded", () => {
        rec.ready = true;
        this._applyFlow(rec, active, states);
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
}
