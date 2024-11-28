import * as universal from '../entries/pages/category/_category_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/category/_category_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/category/[category]/+page.js";
export const imports = ["_app/immutable/nodes/3.BTj9VFi-.js","_app/immutable/chunks/scheduler.I_uqlSKq.js","_app/immutable/chunks/index.Dnod5cps.js","_app/immutable/chunks/cartStore.Df5Pd-qO.js","_app/immutable/chunks/index.ULM4vl0B.js","_app/immutable/chunks/FoodCard.dCOzts_P.js"];
export const stylesheets = ["_app/immutable/assets/cartStore.CLpmFrbv.css"];
export const fonts = [];
