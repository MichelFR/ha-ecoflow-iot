/* EcoFlow Energy Card — bundled with the EcoFlow IoT integration.
 *
 * A Lovelace card for EcoFlow Stream devices: device image, an animated battery
 * bar, live Solar and Grid power, and today's solar production with an optional
 * forecast comparison; tapping Solar power reveals a per-panel breakdown.
 * Entities are auto-discovered from the ecoflow_iot integration.
 *
 * Built on Home Assistant's own frontend elements (ha-card, ha-dialog,
 * ha-switch, ha-form, ha-icon, ha-state-icon); Lit is bundled at build time so
 * the module is self-contained. */

import { CARD_TYPE } from "./const.js";
import { EcoFlowEnergyCard } from "./card.js";
import { EcoFlowEnergyCardEditor } from "./editor.js";

customElements.define(CARD_TYPE, EcoFlowEnergyCard);
customElements.define(`${CARD_TYPE}-editor`, EcoFlowEnergyCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: CARD_TYPE,
  name: "EcoFlow Energy Card",
  description:
    "EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",
  preview: true,
  documentationURL: "https://github.com/MichelFR/ha-ecoflow-iot",
});
