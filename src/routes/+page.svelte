<script>
  import { categories } from '$lib/data/categories';
  import { featuredItems } from '$lib/data/featured-items';
  import FoodCard from '$lib/components/FoodCard.svelte';
  import CategorySection from '$lib/components/CategorySection.svelte';
</script>

<div>
  <!-- Hero Section -->
  <section class="relative h-[60vh] flex items-center justify-center">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="Hero"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>
    <div class="relative text-center text-white">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Campuseats</h1>
      <p class="text-xl md:text-2xl">Delicious food at your fingertips</p>
    </div>
  </section>

  <!-- New Arrivals Section -->
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">New Arrivals</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each featuredItems as item (item.id)}
          <FoodCard {...item} />
        {/each}
      </div>
    </div>
  </section>

  <!-- Categories Section -->
  <CategorySection {categories} />
</div>