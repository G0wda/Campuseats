import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BbSc2nQX.js","_app/immutable/chunks/scheduler.I_uqlSKq.js","_app/immutable/chunks/index.Dnod5cps.js","_app/immutable/chunks/cartStore.Df5Pd-qO.js","_app/immutable/chunks/index.ULM4vl0B.js","_app/immutable/chunks/entry.YSNzN-GH.js"];
export const stylesheets = ["_app/immutable/assets/0.DlayFSCc.css","_app/immutable/assets/cartStore.CLpmFrbv.css"];
export const fonts = [];
