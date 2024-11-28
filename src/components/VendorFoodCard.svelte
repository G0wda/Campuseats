<script>
    import { ShoppingCart } from 'lucide-svelte';
    import { addToCart } from '../stores/cartStore';
    import toast from 'svelte-french-toast';
  
    export let id;
    export let name;
    export let price;
    export let image;
  
    function handleAddToCart(e) {
      e.preventDefault();
      addToCart({ id, name, price, image });
      toast.success(`${name} added to cart!`);
    }
  </script>
  
  <a href={`/item/${id}`} class="group">
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div class="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div class="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
          ₹{price}
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-lg font-semibold text-gray-800">{name}</h3>
          </div>
          <button
            on:click={handleAddToCart}
            class="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  </a>