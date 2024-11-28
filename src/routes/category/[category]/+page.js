import { menuItems } from '$lib/data/menu-items';

export const load = ({ params }) => {
  const category = params.category;
  const categoryData = menuItems[category];

  return {
    category,
    categoryData
  };
};