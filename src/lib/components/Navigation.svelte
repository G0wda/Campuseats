<script>
const navLinks = [
  { href: '/ready', text: 'Ready to serve' },
  { href: '/new', text: 'New Arrivals' },
  { href: '/nammakudla', text: 'Namma Kudla' },
  { href: '/kitex', text: 'Kitchen Express' },
  { href: '/northeast', text: 'NorthEast' }
];
</script>

<nav class="w-full bg-slate-100 p-2 sm:p-4">
  <div class="container mx-auto">
    <div class="flex overflow-x-auto sm:flex-wrap gap-2 sm:justify-evenly scrollbar-hide">
      {#each navLinks as {href, text}}
        <a {href} 
          class="flex-shrink-0 whitespace-nowrap py-2 px-3 sm:px-4 border border-gray-300 rounded-lg 
                 hover:bg-slate-300 text-sm sm:text-base transition-colors">
          {text}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>