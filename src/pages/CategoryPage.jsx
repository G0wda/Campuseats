import React from 'react';
import { useParams } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import BackButton from '../components/BackButton';

const categoryData = {
  'chats': {
    title: 'Chats & Snacks',
    description: 'Delicious street food and quick bites',
    items: [
      {
        id: 'chat1',
        name: 'Pani Puri',
        price: 40,
        category: 'Chats',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
        description: 'Crispy puris filled with spicy and tangy water'
      },
      {
        id: 'chat2',
        name: 'Samosa',
        price: 20,
        category: 'Snacks',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
        description: 'Crispy pastry filled with spiced potatoes'
      },
      {
        id: 'chat3',
        name: 'Bhel Puri',
        price: 45,
        category: 'Chats',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84',
        description: 'Puffed rice mixed with vegetables and tangy chutneys'
      }
    ]
  },
  'meals': {
    title: 'Meals',
    description: 'Complete meal options for lunch and dinner',
    items: [
      {
        id: 'meal1',
        name: 'Thali Special',
        price: 150,
        category: 'Meals',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
        description: 'Complete Indian meal with roti, rice, dal, and curries'
      },
      {
        id: 'meal2',
        name: 'Biryani',
        price: 180,
        category: 'Meals',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
        description: 'Fragrant rice cooked with spices and choice of protein'
      }
    ]
  },
  'beverages': {
    title: 'Juices & Beverages',
    description: 'Refreshing drinks and smoothies',
    items: [
      {
        id: 'bev1',
        name: 'Fresh Orange Juice',
        price: 60,
        category: 'Beverages',
        image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38',
        description: 'Freshly squeezed orange juice'
      },
      {
        id: 'bev2',
        name: 'Mango Lassi',
        price: 70,
        category: 'Beverages',
        image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5',
        description: 'Creamy mango yogurt smoothie'
      }
    ]
  },
  'ice-cream': {
    title: 'Ice Creams',
    description: 'Cool and creamy desserts',
    items: [
      {
        id: 'ice1',
        name: 'Belgian Chocolate',
        price: 90,
        category: 'Ice Cream',
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a',
        description: 'Rich chocolate ice cream with chocolate chunks'
      },
      {
        id: 'ice2',
        name: 'Strawberry Sundae',
        price: 110,
        category: 'Ice Cream',
        image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e',
        description: 'Strawberry ice cream with fresh fruits and nuts'
      }
    ]
  },
  'bakery': {
    title: 'Bakery & Cakes',
    description: 'Fresh baked goods and desserts',
    items: [
      {
        id: 'bake1',
        name: 'Chocolate Cake',
        price: 350,
        category: 'Cakes',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
        description: 'Rich chocolate cake with ganache frosting'
      },
      {
        id: 'bake2',
        name: 'Butter Croissant',
        price: 60,
        category: 'Bakery',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
        description: 'Flaky and buttery French croissant'
      }
    ]
  },
  'chinese': {
    title: 'Chinese',
    description: 'Indo-Chinese favorites',
    items: [
      {
        id: 'ch1',
        name: 'Veg Noodles',
        price: 120,
        category: 'Chinese',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246',
        description: 'Stir-fried noodles with vegetables'
      },
      {
        id: 'ch2',
        name: 'Manchurian',
        price: 140,
        category: 'Chinese',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
        description: 'Vegetable balls in spicy gravy'
      }
    ]
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryInfo = category ? categoryData[category] : null;

  if (!categoryInfo) {
    return <div className="text-center py-12">Category not found</div>;
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{categoryInfo.title}</h1>
          {categoryInfo.description && (
            <p className="text-gray-600">{categoryInfo.description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryInfo.items.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;