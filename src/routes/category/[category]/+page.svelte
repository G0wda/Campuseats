<script>
  import FoodCard from '$lib/components/FoodCard.svelte';
  
  export let data;
  const { categoryData } = data;
</script>

{#if categoryData}
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">{categoryData.title}</h1>
        {#if categoryData.description}
          <p class="text-gray-600">{categoryData.description}</p>
        {/if}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each categoryData.items as item (item.id)}
          <FoodCard {...item} />
        {/each}
      </div>
    </div>
  </div>
{:else}
  <div class="text-center py-12">Category not found</div>
{/if}