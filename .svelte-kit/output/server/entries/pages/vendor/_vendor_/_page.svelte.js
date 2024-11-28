import { c as create_ssr_component, h as subscribe, v as validate_component, g as add_attribute, e as escape, i as each } from "../../../../chunks/ssr.js";
import { F as FoodCard } from "../../../../chunks/FoodCard.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores.js";
const BackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="bg-slate-900 text-white py-2 px-4 rounded-lg font-bold shadow-md hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition transform active:scale-95" data-svelte-h="svelte-jq9aaa">← Back</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categoryData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.vendor;
  categoryData = $page.data.categoryData;
  $$unsubscribe_page();
  return `${categoryData ? `<div class="py-6">${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})} <div class="max-w-7xl mx-auto px-4"${add_attribute("key", $page.params.vendor, 0)}><div class="text-center mb-8"><h1 class="text-3xl font-bold text-gray-800 mb-2">${escape(categoryData.title)}</h1> ${categoryData.description ? `<p class="text-gray-600">${escape(categoryData.description)}</p>` : ``}</div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(categoryData.items, (item) => {
    return `${validate_component(FoodCard, "FoodCard").$$render($$result, Object.assign({}, item), {}, {})}`;
  })}</div></div></div>` : `<div class="text-center py-12" data-svelte-h="svelte-1ch9cwc">Category not found</div>`}`;
});
export {
  Page as default
};
