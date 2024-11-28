import { c as create_ssr_component, i as each, g as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { F as FoodCard } from "../../chunks/FoodCard.js";
const categories = [
  {
    id: "chats",
    name: "Chats & Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: "meals",
    name: "Meals",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
  },
  {
    id: "beverages",
    name: "Juices & Beverages",
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38"
  },
  {
    id: "ice-cream",
    name: "Ice Creams",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a"
  },
  {
    id: "bakery",
    name: "Bakery & Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
  },
  {
    id: "chinese",
    name: "Chinese",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  }
];
const featuredItems = [
  {
    id: "1",
    name: "Masala Dosa",
    price: 60,
    category: "South Indian",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    description: "Crispy dosa served with potato masala, coconut chutney, and sambar"
  },
  {
    id: "2",
    name: "Butter Chicken",
    price: 180,
    category: "North Indian",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    description: "Tender chicken in rich tomato and butter gravy"
  },
  {
    id: "3",
    name: "Veg Fried Rice",
    price: 90,
    category: "Chinese",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    description: "Wok-tossed rice with fresh vegetables and soy sauce"
  }
];
const CategorySection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categories: categories2 } = $$props;
  if ($$props.categories === void 0 && $$bindings.categories && categories2 !== void 0) $$bindings.categories(categories2);
  return `<section class="py-12 bg-gray-50"><div class="max-w-7xl mx-auto px-4"><h2 class="text-3xl font-bold text-gray-800 mb-8 text-center" data-svelte-h="svelte-vuqqjk">Food Categories</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">${each(categories2, (category) => {
    return `<a${add_attribute("href", `/category/${category.id}`, 0)} class="group relative overflow-hidden rounded-lg shadow-md aspect-square hover:shadow-xl transition-shadow duration-300"><img${add_attribute("src", category.image, 0)}${add_attribute("alt", category.name, 0)} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end"><h3 class="text-white text-xl font-semibold p-4 w-full text-center">${escape(category.name)} </h3></div> </a>`;
  })}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div> <section class="relative h-[60vh] flex items-center justify-center" data-svelte-h="svelte-4hwong"><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Hero" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/50"></div></div> <div class="relative text-center text-white"><h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Campuseats</h1> <p class="text-xl md:text-2xl">Delicious food at your fingertips</p></div></section>  <section class="py-12"><div class="max-w-7xl mx-auto px-4"><h2 class="text-3xl font-bold text-gray-800 mb-8" data-svelte-h="svelte-19e50xn">New Arrivals</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(featuredItems, (item) => {
    return `${validate_component(FoodCard, "FoodCard").$$render($$result, Object.assign({}, item), {}, {})}`;
  })}</div></div></section>  ${validate_component(CategorySection, "CategorySection").$$render($$result, { categories }, {}, {})}</div>`;
});
export {
  Page as default
};
