import * as universal from '../entries/pages/item/_id_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/item/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/item/[id]/+page.js";
export const imports = ["_app/immutable/nodes/4.DW-4iK9N.js","_app/immutable/chunks/scheduler.I_uqlSKq.js","_app/immutable/chunks/index.Dnod5cps.js","_app/immutable/chunks/cartStore.Df5Pd-qO.js","_app/immutable/chunks/index.ULM4vl0B.js","_app/immutable/chunks/stores.D42pt2Xz.js","_app/immutable/chunks/entry.YSNzN-GH.js"];
export const stylesheets = ["_app/immutable/assets/cartStore.CLpmFrbv.css"];
export const fonts = [];
