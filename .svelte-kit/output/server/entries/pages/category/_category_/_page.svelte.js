import { c as create_ssr_component, e as escape, i as each, v as validate_component } from "../../../../chunks/ssr.js";
import { F as FoodCard } from "../../../../chunks/FoodCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { categoryData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${categoryData ? `<div class="py-6"><div class="max-w-7xl mx-auto px-4"><div class="text-center mb-8"><h1 class="text-3xl font-bold text-gray-800 mb-2">${escape(categoryData.title)}</h1> ${categoryData.description ? `<p class="text-gray-600">${escape(categoryData.description)}</p>` : ``}</div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(categoryData.items, (item) => {
    return `${validate_component(FoodCard, "FoodCard").$$render($$result, Object.assign({}, item), {}, {})}`;
  })}</div></div></div>` : `<div class="text-center py-12" data-svelte-h="svelte-1ch9cwc">Category not found</div>`}`;
});
export {
  Page as default
};
