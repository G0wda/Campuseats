<script>
import { Star } from 'lucide-svelte';

const dishes = Array(4).fill().map((_, i) => ({
  id: i + 1,
  name: 'Delicious Dish',
  restaurant: 'Restaurant Name',
  rating: 4.5,
  price: 12.99,
  image: `https://source.unsplash.com/400x300?food-${i+1}`
}));
</script>

<section class="py-6 sm:py-8 md:py-16 px-2 sm:px-4">
  <div class="container mx-auto">
    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Popular Dishes</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {#each dishes as dish}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={dish.image}
            alt="Food"
            class="w-full h-40 sm:h-48 object-cover"
          >
          <div class="p-3 sm:p-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-sm sm:text-base">{dish.name}</h3>
              <div class="flex items-center text-yellow-500">
                <Star size={16} fill="currentColor" />
                <span class="ml-1 text-sm">{dish.rating}</span>
              </div>
            </div>
            <p class="text-gray-600 text-xs sm:text-sm mb-3">{dish.restaurant}</p>
            <div class="flex items-center justify-between">
              <span class="font-bold text-primary text-sm sm:text-base">${dish.price}</span>
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs sm:text-sm transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>