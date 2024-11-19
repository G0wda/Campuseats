<script>
import { Search } from 'lucide-svelte';
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-4 py-3">
    <div class="flex flex-col sm:flex-row items-center justify-around ">
      <!-- Logo/Title -->
      <a href="/" class="text-2xl font-bold text-primary">
        CampusEats
      </a>

      <!-- Search Bar -->
      <div class="w-full sm:w-96 relative">
        <div class="relative">
          <input 
            type="search" 
            placeholder="Search for food..." 
            class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          >
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
        </div>
      </div>

      <!-- Actions -->
      
    </div>
  </div>
</header>