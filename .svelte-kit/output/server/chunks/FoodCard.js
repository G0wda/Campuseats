import { c as create_ssr_component, g as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { S as Shopping_cart } from "./shopping-cart.js";
const FoodCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { name } = $$props;
  let { price } = $$props;
  let { image } = $$props;
  let { category } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0) $$bindings.price(price);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0) $$bindings.category(category);
  return `<a${add_attribute("href", `/item/${id}`, 0)} class="group block"><div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"><div class="relative h-48 overflow-hidden"><img${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"> <div class="absolute top-2 right-2 bg-slate-900 text-white px-2 py-1 rounded-full text-sm">₹${escape(price)}</div></div> <div class="p-4"><div class="flex justify-between items-start mb-2"><div><h3 class="text-lg font-semibold text-gray-800">${escape(name)}</h3> <p class="text-sm text-gray-600">${escape(category)}</p></div> <button class="bg-slate-900 text-white p-1.5 rounded-full hover:bg-slate-700 transition-colors" aria-label="${"Add " + escape(name, true) + " to cart"}">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { size: 16 }, {}, {})}</button></div></div></div></a>`;
});
export {
  FoodCard as F
};
