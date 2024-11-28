import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import BackButton from '../components/BackButton';

const itemData = {
  '1': {
    name: 'Masala Dosa',
    price: 60,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
    description: 'Crispy dosa served with potato masala, coconut chutney, and sambar',
    ingredients: ['Rice', 'Urad Dal', 'Potato', 'Spices'],
    preparationTime: '15 minutes'
  },
  'ke1': {
    name: 'Veggie Wrap',
    price: 80,
    category: 'Quick Bites',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f',
    description: 'Fresh vegetables wrapped in tortilla with hummus spread',
    ingredients: ['Tortilla', 'Mixed Vegetables', 'Hummus', 'Lettuce', 'Seasonings'],
    preparationTime: '8 minutes'
  },
  // ... rest of the item data remains the same
};

const ItemDetail = () => {
  const { id } = useParams();
  const item = id ? itemData[id] : null;

  if (!item) {
    return <div className="text-center py-12">Item not found</div>;
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.name}</h1>
              <p className="text-lg text-gray-600">{item.category}</p>
            </div>
            
            <p className="text-gray-700">{item.description}</p>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Preparation Time:</span> {item.preparationTime}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-800">₹{item.price}</span>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-700 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;