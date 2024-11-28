<script>
  export let categories;
</script>

<section class="py-12 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Food Categories</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each categories as category (category.id)}
        <a
          href={`/category/${category.id}`}
          class="group relative overflow-hidden rounded-lg shadow-md aspect-square hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={category.image}
            alt={category.name}
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <h3 class="text-white text-xl font-semibold p-4 w-full text-center">
              {category.name}
            </h3>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>