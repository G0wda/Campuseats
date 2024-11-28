import React from 'react';
import FoodCard from '../components/FoodCard';
import CategorySection from '../components/CategorySection';

const categories = [
  {
    id: 'chats',
    name: 'Chats & Snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950'
  },
  {
    id: 'meals',
    name: 'Meals',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19'
  },
  {
    id: 'beverages',
    name: 'Juices & Beverages',
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38'
  },
  {
    id: 'ice-cream',
    name: 'Ice Creams',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a'
  },
  {
    id: 'bakery',
    name: 'Bakery & Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
  },
  {
    id: 'chinese',
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246'
  },
  {
    id: 'south-indian',
    name: 'South Indian',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921'
  },
  {
    id: 'north-indian',
    name: 'North Indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe'
  }
];

const featuredItems = [
  {
    id: '1',
    name: 'Masala Dosa',
    price: 60,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
    description: 'Crispy dosa served with potato masala, coconut chutney, and sambar'
  },
  {
    id: '2',
    name: 'Butter Chicken',
    price: 180,
    category: 'North Indian',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
    description: 'Tender chicken in rich tomato and butter gravy'
  },
  {
    id: '3',
    name: 'Veg Fried Rice',
    price: 90,
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
    description: 'Wok-tossed rice with fresh vegetables and soy sauce'
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to College Canteen</h1>
          <p className="text-xl md:text-2xl">Delicious food at your fingertips</p>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategorySection categories={categories} />
    </div>
  );
};

export default Home;