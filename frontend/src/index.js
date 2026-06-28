/* EcoFlow cards — bundled with the EcoFlow IoT integration.
 *
 * Two Lovelace cards for EcoFlow Stream devices, both auto-discovering their
 * entities from the ecoflow_iot integration:
 *
 *  - EcoFlow Energy Card: device image, an animated battery bar, live Solar and
 *    Grid power, and today's solar production with an optional forecast.
 *  - EcoFlow House Card: the whole-home energy-flow illustration — a rendered
 *    house with the battery box and animated Grid / Solar / Home / battery
 *    flows, mirroring the EcoFlow app's "space" view.
 *
 * Built on Home Assistant's own frontend elements (ha-card, ha-dialog,
 * ha-switch, ha-form, ha-icon, ha-state-icon); Lit and lottie-web are bundled
 * at build time so the module is self-contained. */

import { CARD_TYPE, HOUSE_CARD_TYPE, SPACE_CARD_TYPE } from "./const.js";
import { EcoFlowEnergyCard } from "./card.js";
import { EcoFlowEnergyCardEditor } from "./editor.js";
import { EcoFlowHouseCard } from "./house-card.js";
import { EcoFlowHouseCardEditor } from "./house-editor.js";
import { EcoFlowSpaceCard } from "./space-card.js";
import { EcoFlowSpaceCardEditor } from "./space-editor.js";

customElements.define(CARD_TYPE, EcoFlowEnergyCard);
customElements.define(`${CARD_TYPE}-editor`, EcoFlowEnergyCardEditor);
customElements.define(HOUSE_CARD_TYPE, EcoFlowHouseCard);
customElements.define(`${HOUSE_CARD_TYPE}-editor`, EcoFlowHouseCardEditor);
customElements.define(SPACE_CARD_TYPE, EcoFlowSpaceCard);
customElements.define(`${SPACE_CARD_TYPE}-editor`, EcoFlowSpaceCardEditor);

window.customCards = window.customCards || [];
window.customCards.push(
  {
    type: CARD_TYPE,
    name: "EcoFlow Energy Card",
    description:
      "EcoFlow Stream card with device image, battery bar, solar & grid power, today's production and forecast.",
    preview: true,
    documentationURL: "https://github.com/MichelFR/ha-ecoflow-iot",
  },
  {
    type: HOUSE_CARD_TYPE,
    name: "EcoFlow House Card",
    description:
      "Whole-home energy-flow illustration: a house with the battery box and animated grid, solar, home and battery flows.",
    preview: true,
    documentationURL: "https://github.com/MichelFR/ha-ecoflow-iot",
  },
  {
    type: SPACE_CARD_TYPE,
    name: "EcoFlow Space Card",
    description:
      "Full-screen whole-home dashboard: the house illustration with configurable floating overlays, a weather widget, stat tiles and a sidebar that embeds other Lovelace views.",
    preview: true,
    documentationURL: "https://github.com/MichelFR/ha-ecoflow-iot",
  }
);
