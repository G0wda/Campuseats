<script>
const categories = [
  { href: '/categories/juice-drinks', text: 'Juices and Drinks' },
  { href: '/categories/meals', text: 'Meals' },
  { href: '/categories/chats', text: 'Chats' },
  { href: '/categories/icecream', text: 'Ice Creams' },
  { href: '/categories/bakey', text: 'Bakery and Cakes' },
  { href: '/categories/chinesse', text: 'Chinesse' }
];
</script>

<section class="w-full py-4 sm:py-6 px-2 sm:px-4 bg-slate-200">
  <div class="container mx-auto">
    <h2 class="text-lg sm:text-xl md:text-2xl text-center mb-4">Categories</h2>
    <div class="flex overflow-x-auto sm:flex-wrap sm:justify-around gap-2 pb-2 scrollbar-hide">
      {#each categories as {href, text}}
        <a {href} 
          class="flex-shrink-0 whitespace-nowrap py-2 px-3 sm:px-4 border border-gray-300 
                 rounded-lg hover:bg-slate-300 text-sm sm:text-base transition-colors">
          {text}
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>