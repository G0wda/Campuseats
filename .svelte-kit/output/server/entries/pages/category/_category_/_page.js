const menuItems = {
  "chats": {
    title: "Chats & Snacks",
    description: "Delicious street food and quick bites",
    items: [
      {
        id: "chat1",
        name: "Pani Puri",
        price: 40,
        category: "Chats",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: "Crispy puris filled with spicy and tangy water",
        ingredients: ["Semolina Puris", "Spiced Water", "Potato Mix", "Chutney"]
      },
      {
        id: "chat2",
        name: "Samosa",
        price: 20,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: "Crispy pastry filled with spiced potatoes",
        ingredients: ["Flour", "Potatoes", "Peas", "Indian Spices"]
      }
    ]
  },
  "meals": {
    title: "Meals",
    description: "Complete meal options for lunch and dinner",
    items: [
      {
        id: "meal1",
        name: "Thali Special",
        price: 150,
        category: "Meals",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
        description: "Complete Indian meal with roti, rice, dal, and curries",
        ingredients: ["Rice", "Roti", "Dal", "Vegetables", "Curd", "Pickle"]
      }
    ]
  },
  "beverages": {
    title: "Juices & Beverages",
    description: "Refreshing drinks and smoothies",
    items: [
      {
        id: "bev1",
        name: "Fresh Orange Juice",
        price: 60,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38",
        description: "Freshly squeezed orange juice",
        ingredients: ["Fresh Oranges", "Ice"]
      }
    ]
  }
};
const load = ({ params }) => {
  const category = params.category;
  const categoryData = menuItems[category];
  return {
    category,
    categoryData
  };
};
export {
  load
};
