/* Shared lottie flow-animation lifecycle for the energy-flow illustration.
 *
 * The house render and the space view both draw the same animated grid / solar
 * / home / battery flows over the house image (the reverse-engineered app
 * Lotties). This controller owns those lottie instances: it mounts each lazily
 * on first activation, then keeps it (paused when idle) so we never churn
 * instances on every state update, and destroys them on teardown.
 *
 * Flows are grouped into THEMES, one per device family — the selected battery
 * render picks the theme (see flowTheme in houses.js):
 *   - re_space : the original Stream set the card shipped with
 *   - bk621    : STREAM Ultra / Ultra X (battery) — bkseriesmodule
 *   - bk620    : STREAM AC / Microinverter (no battery)
 * Each theme lists its layers; the host renders one `data-flow="<key>"`
 * container per key (a superset across themes), computes the live `states`, and
 * calls sync(). Containers whose key isn't in the active theme are hidden. */

import lottie from "lottie-web/build/player/lottie_light";
import { FLOWS, flowUrl, solarFlowName, bkRoute, poRoute } from "./houses.js";

// Power magnitude (W) below which a path is treated as idle (no flow shown).
export const ACTIVE_W = 1;

/* Derive the BK grid/home split the flow themes need from the raw readings.
 * Mirrors SystemEnergyView: grid divides into the part feeding the home
 * (gridToHome) and the part to/from the device (gridToDevice — positive charges
 * the battery, negative exports), and device->home is the load met by PV +
 * battery (deviceToHome). Uses the load_from_* sensors when present, else a sign
 * fallback. Pass-through fields (solar/bat/soc/route) are kept for the re_space
 * theme, which ignores the derived ones. */
export function deriveFlowStates(s) {
  const grid = Number.isFinite(s.grid) ? s.grid : 0;
  const load = Number.isFinite(s.load) ? s.load : 0;
  const gridToHome = Number.isFinite(s.loadFromGrid)
    ? Math.max(0, s.loadFromGrid)
    : Math.max(0, Math.min(grid, load));
  const gridToDevice = grid - gridToHome;
  const deviceToHome =
    Number.isFinite(s.loadFromPv) || Number.isFinite(s.loadFromBat)
      ? (s.loadFromPv || 0) + (s.loadFromBat || 0)
      : Math.max(0, load - gridToHome);
  return { ...s, gridToHome, gridToDevice, deviceToHome };
}

/* A layer: { key, zone, file(states), active(states), mode?, seek? }.
 *   zone "bg"  -> drawn behind the battery box (grid / solar / home routes)
 *   zone "on"  -> drawn on the box (SoC fill + charge/discharge glow); only when
 *                 the chosen render has matching overlays (batOverlays).
 *   mode "seek" -> the lottie is a 0..101 fill seeked to seek(states), not played.
 *
 * BK grid model (mirrors SystemEnergyView): grid splits into the part feeding the
 * home (gridToHome) and the part to/from the device (gridToDevice, + charging /
 * - exporting); device->home is the load met by PV+battery (deviceToHome). */
export const FLOW_THEMES = {
  re_space: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => solarFlowName(s.route), active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => FLOWS.grid_in, active: (s) => s.grid > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => FLOWS.grid_out, active: (s) => s.grid < -ACTIVE_W },
      { key: "home", zone: "bg", file: () => FLOWS.home, active: (s) => s.load > ACTIVE_W },
      { key: "bat_in", zone: "bg", file: () => FLOWS.bat_in, active: (s) => s.bat > ACTIVE_W },
      { key: "bat_out", zone: "bg", file: () => FLOWS.bat_out, active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => FLOWS.bat_soc, mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => FLOWS.bat_chg, active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => FLOWS.bat_dsg, active: (s) => s.bat < -ACTIVE_W },
    ],
  },
  bk621: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `bk621/house_solar_lottie_${bkRoute(s.route)}`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => "bk621/grid_to_device_lottie", active: (s) => s.gridToDevice > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "bk621/device_to_grid_lottie", active: (s) => s.gridToDevice < -ACTIVE_W },
      { key: "grid_home", zone: "bg", file: () => "bk621/grid_to_home_lottie", active: (s) => s.gridToHome > ACTIVE_W },
      { key: "home", zone: "bg", file: (s) => `bk621/house_device_home_lottie_${bkRoute(s.route)}`, active: (s) => s.deviceToHome > ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => "bk621/house_soc_lottie", mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => "bk621/house_soc_charging_lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => "bk621/house_soc_discharging_lottie", active: (s) => s.bat < -ACTIVE_W },
    ],
  },
  bk620: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `bk620/house_solar_lottie_${bkRoute(s.route)}`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "bk621/device_to_grid_lottie", active: (s) => s.grid < -ACTIVE_W },
      { key: "grid_home", zone: "bg", file: () => "bk621/grid_to_home_lottie", active: (s) => s.gridToHome > ACTIVE_W },
      { key: "home", zone: "bg", file: () => "bk620/house_device_home_lottie", active: (s) => s.deviceToHome > ACTIVE_W },
    ],
  },
  // PowerOcean (NewPOSystemEnergyView). Single-battery: grid by sign, like
  // re_space, plus a seek-to-backup_reserve overlay. re305 = E7 battery, re306 =
  // DPU (Delta Pro Ultra); both share the OceanPro grid/solar/home routes.
  re305: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `re305/Space_Style${poRoute(s.route)}_Solar_OceanPro_Com`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => "re305/Space_Com_GridIn_OceanProOceanPanel_Com", active: (s) => s.grid > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "re305/Space_Com_GridOut_OceanProAdvanced_Com", active: (s) => s.grid < -ACTIVE_W },
      { key: "home", zone: "bg", file: () => "re305/Space_Com_DeviceToHome_OceanPro_Com", active: (s) => s.load > ACTIVE_W },
      { key: "bat_in", zone: "bg", file: () => "re305/OceanPro_E7_Bat_In_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_out", zone: "bg", file: () => "re305/OceanPro_E7_Bat_Out_Lottie", active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => "re305/OceanPro_E7_BatSoc_Lottie", mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => "re305/OceanPro_E7_Bat_Charging_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => "re305/OceanPro_E7_Bat_Discharging_Lottie", active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_backup", zone: "on", file: () => "re305/OceanPro_E7_Bat_Backup_Ratio_Lottie", mode: "seek", seek: (s) => s.backup, active: (s) => s.backup > 0 && s.backup < 100 },
    ],
  },
  re306: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `re305/Space_Style${poRoute(s.route)}_Solar_OceanPro_Com`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => "re305/Space_Com_GridIn_OceanProOceanPanel_Com", active: (s) => s.grid > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "re305/Space_Com_GridOut_OceanProAdvanced_Com", active: (s) => s.grid < -ACTIVE_W },
      { key: "home", zone: "bg", file: () => "re305/Space_Com_DeviceToHome_OceanPro_Com", active: (s) => s.load > ACTIVE_W },
      { key: "bat_in", zone: "bg", file: () => "re306/OceanPro_Panel_DpuBat_In_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_out", zone: "bg", file: () => "re306/OceanPro_Panel_DpuBat_Out_Lottie", active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => "re306/OceanPro_Panel_DpuBatSoc_Lottie", mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => "re306/OceanPro_Panel_DpuBat_Charging_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => "re306/OceanPro_Panel_DpuBat_Discharging_Lottie", active: (s) => s.bat < -ACTIVE_W },
    ],
  },
};

export class FlowController {
  constructor() {
    // key -> { anim, file, ready, mode, seek } for each mounted flow Lottie.
    this._anims = {};
  }

  /* Mount/play/pause every flow to match the current scene.
   * opts = { hass, theme, showFlows, batOverlays, states }. */
  sync(renderRoot, { hass, theme, showFlows, batOverlays, states }) {
    if (!renderRoot) return;
    const layers = (FLOW_THEMES[theme] || FLOW_THEMES.re_space).layers;
    const used = new Set();
    for (const def of layers) {
      const container = renderRoot.querySelector(`[data-flow="${def.key}"]`);
      if (!container) continue;
      used.add(def.key);
      const active = showFlows && def.active(states) && (def.zone !== "on" || batOverlays);
      this._setFlow(hass, container, def, active, states);
    }
    // Hide any container whose key isn't in the active theme (pause its lottie).
    for (const container of renderRoot.querySelectorAll("[data-flow]")) {
      if (used.has(container.dataset.flow)) continue;
      this._anims[container.dataset.flow]?.anim?.pause();
      container.style.opacity = "0";
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
    // (e.g. the solar route or a theme switch).
    if (active && (!rec || rec.file !== file)) {
      rec?.anim?.destroy();
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: mode !== "seek",
        autoplay: false,
        path: flowUrl(file, hass),
        // Top-align like the house image so the scene keeps a clear band at the
        // bottom for the battery readout (see the stage's aspect ratio).
        rendererSettings: { preserveAspectRatio: "xMidYMin meet" },
      });
      rec = this._anims[key] = { anim, file, ready: false, mode, seek: def.seek };
      anim.addEventListener("DOMLoaded", () => {
        rec.ready = true;
        this._applyFlow(rec, active, states);
      });
    }

    if (rec) {
      rec.seek = def.seek;
      this._applyFlow(rec, active, states);
    }
    container.style.opacity = active ? "1" : "0";
  }

  _applyFlow(rec, active, states) {
    if (!rec.ready) return;
    if (rec.mode === "seek") {
      // 0..100% -> the fill animation's frames (the SoC lotties span 0..101).
      rec.anim.goToAndStop(Math.max(0, Math.min(100, rec.seek?.(states) ?? 0)), true);
      return;
    }
    if (active) rec.anim.play();
    else rec.anim.pause();
  }
}
