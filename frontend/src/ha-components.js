/* Nudge the frontend into defining ha-dialog / ha-switch / ha-form, which are
 * lazy-loaded; importing a more-info control pulls in the whole stack. The
 * dialogs degrade gracefully if an element is missing. */

let componentsLoaded = false;

export async function ensureHaComponents() {
  if (componentsLoaded) return;
  componentsLoaded = true;
  try {
    const helpers = await window.loadCardHelpers?.();
    await helpers?.importMoreInfoControl?.("light");
  } catch (e) {
    /* ignore — elements degrade gracefully */
  }
}
