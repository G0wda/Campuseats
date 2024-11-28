<script>
  import { page } from '$app/stores';
  import { ShoppingCart, User, Menu, X} from 'lucide-svelte';
  import { cartItems } from '../stores/cartStore';
  import CartSidebar from './CartSidebar.svelte';
  import SubNavBar from './SubNavBar.svelte';
  import {vendors}  from '$lib/data/vendors'; 
 
  let isCartOpen = false;
  let isMobileMenuOpen = false;
  $: totalItems = $cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  const closeMobileMenu = () => {
    isMobileMenuOpen = false;
  };
</script>

<nav class="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-around  items-center h-16">
      
      <a href="/" class="flex items-center space-x-2" on:click={closeMobileMenu}>
        <img src="/logo.png"  class="h-14 w-[50px] rounded-3xl" alt="">
        <span class="text-xl font-bold">CampusEats</span>
      </a>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        <SubNavBar {vendors}/>
      </div>

      <div class="flex items-center space-x-4">
        <button 
          class="hover:text-orange-200 relative"
          on:click={() => isCartOpen = true}
        >
          <ShoppingCart size={24} />
          {#if totalItems > 0}
            <span class="absolute -top-2 -right-2 bg-slate-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          {/if}
        </button>
        <button class="hover:text-orange-200">
          <User size={24} />
        </button>
        <button 
          class="md:hidden hover:text-orange-200"
          on:click={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {#if isMobileMenuOpen}
            <X size={24} />
          {:else}
            <Menu size={24} />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMobileMenuOpen}
      <div class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {#each vendors as vendor (vendor.id)}
            <a href={`/vendor/${vendor.id}`}>{vendor.name}</a><br>
           {/each}
        </div>
      </div>
    {/if}
  </div>
</nav>

<CartSidebar bind:isOpen={isCartOpen} />