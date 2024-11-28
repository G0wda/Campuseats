<script>
  import { page } from '$app/stores';
  import { ShoppingCart } from 'lucide-svelte';
  import { cartItems } from '../../../stores/cartStore';
  import toast from 'svelte-french-toast';

  const itemData = {
    '1': {
      name: 'Masala Dosa',
      price: 60,
      category: 'South Indian',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
      description: 'Crispy dosa served with potato masala, coconut chutney, and sambar',
      ingredients: ['Rice', 'Urad Dal', 'Potato', 'Spices'],
      preparationTime: '15 minutes'
    }
  };

  $: id = $page.params.id;
  $: item = itemData[id];

  function handleAddToCart() {
    cartItems.addToCart({ id, name: item.name, price: item.price, image: item.image });
    toast.success(`${item.name} added to cart!`);
  }
</script>

{#if item}
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            class="w-full h-[400px] object-cover"
          />
        </div>
        
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">{item.name}</h1>
            <p class="text-lg text-gray-600">{item.category}</p>
          </div>
          
          <p class="text-gray-700">{item.description}</p>
          
          <div>
            <h3 class="font-semibold text-gray-800 mb-2">Ingredients:</h3>
            <ul class="list-disc list-inside text-gray-700">
              {#each item.ingredients as ingredient}
                <li>{ingredient}</li>
              {/each}
            </ul>
          </div>
          
          <div>
            <p class="text-gray-700">
              <span class="font-semibold">Preparation Time:</span> {item.preparationTime}
            </p>
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-gray-800">₹{item.price}</span>
            <button
              on:click={handleAddToCart}
              class="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-700 transition-colors"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="text-center py-12">Item not found</div>
{/if}