import { c as create_ssr_component, h as subscribe, g as add_attribute, e as escape, i as each, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Shopping_cart } from "../../../../chunks/shopping-cart.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let item;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const itemData = {
    "1": {
      name: "Masala Dosa",
      price: 60,
      category: "South Indian",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
      description: "Crispy dosa served with potato masala, coconut chutney, and sambar",
      ingredients: ["Rice", "Urad Dal", "Potato", "Spices"],
      preparationTime: "15 minutes"
    }
  };
  id = $page.params.id;
  item = itemData[id];
  $$unsubscribe_page();
  return `${item ? `<div class="py-6"><div class="max-w-7xl mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="rounded-lg overflow-hidden"><img${add_attribute("src", item.image, 0)}${add_attribute("alt", item.name, 0)} class="w-full h-[400px] object-cover"></div> <div class="space-y-6"><div><h1 class="text-3xl font-bold text-gray-800 mb-2">${escape(item.name)}</h1> <p class="text-lg text-gray-600">${escape(item.category)}</p></div> <p class="text-gray-700">${escape(item.description)}</p> <div><h3 class="font-semibold text-gray-800 mb-2" data-svelte-h="svelte-hdt2ne">Ingredients:</h3> <ul class="list-disc list-inside text-gray-700">${each(item.ingredients, (ingredient) => {
    return `<li>${escape(ingredient)}</li>`;
  })}</ul></div> <div><p class="text-gray-700"><span class="font-semibold" data-svelte-h="svelte-b81ffg">Preparation Time:</span> ${escape(item.preparationTime)}</p></div> <div class="flex items-center justify-between"><span class="text-2xl font-bold text-gray-800">₹${escape(item.price)}</span> <button class="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-700 transition-colors">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { size: 20 }, {}, {})} <span data-svelte-h="svelte-1ij41xs">Add to Cart</span></button></div></div></div></div></div>` : `<div class="text-center py-12" data-svelte-h="svelte-1of4b4d">Item not found</div>`}`;
});
export {
  Page as default
};
