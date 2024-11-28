<script>
  import { X, Minus, Plus, Trash2 } from 'lucide-svelte';
  import { cartItems } from '../stores/cartStore';

  export let isOpen = false;

  $: total = $cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  function handleQuantityChange(id, newQuantity) {
    if (newQuantity < 1) {
      cartItems.removeFromCart(id);
    } else {
      cartItems.updateQuantity(id, newQuantity);
    }
  }

  function handleKeyDown(event, callback) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50">
    <div 
      class="absolute inset-0 bg-black bg-opacity-50" 
      on:click={() => isOpen = false}
      on:keydown={(e) => handleKeyDown(e, () => isOpen = false)}
      role="button"
      tabindex="0"
      aria-label="Close cart overlay"
    />
    <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-lg font-semibold">Your Cart</h2>
        <button 
          on:click={() => isOpen = false}
          class="p-1 hover:bg-gray-100 rounded-full"
          aria-label="Close cart"
        >
          <X size={24} />
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        {#if $cartItems.length === 0}
          <p class="text-center text-gray-500 mt-4">Your cart is empty</p>
        {:else}
          <div class="space-y-4">
            {#each $cartItems as item (item.id)}
              <div class="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.name} class="h-16 w-16 object-cover rounded" />
                <div class="flex-1">
                  <h3 class="font-medium">{item.name}</h3>
                  <p class="text-gray-600">₹{item.price}</p>
                </div>
                <div class="flex items-center space-x-2">
                  <button
                    on:click={() => handleQuantityChange(item.id, item.quantity - 1)}
                    class="p-1 hover:bg-gray-100 rounded"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span class="w-8 text-center">{item.quantity}</span>
                  <button
                    on:click={() => handleQuantityChange(item.id, item.quantity + 1)}
                    class="p-1 hover:bg-gray-100 rounded"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    on:click={() => cartItems.removeFromCart(item.id)}
                    class="p-1 hover:bg-gray-100 rounded text-red-500"
                    aria-label="Remove from cart"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <div class="border-t p-4">
        <div class="flex justify-between mb-4">
          <span class="font-semibold">Total:</span>
          <span class="font-semibold">₹{total}</span>
        </div>
        <button
          class="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={$cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
{/if}