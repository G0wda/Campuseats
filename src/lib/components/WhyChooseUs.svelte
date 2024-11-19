<script>
import { Clock, Star } from 'lucide-svelte';

const features = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Hot food delivered to your seat in minutes'
  },
  {
    icon: Star,
    title: 'Best Quality',
    description: 'Handpicked restaurants with quality food'
  }
];
</script>

<section class="py-6 sm:py-8 md:py-16 bg-gray-50 px-2 sm:px-4">
  <div class="container mx-auto">
    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
      Why Choose Us
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
      {#each features as feature}
        <div class="text-center p-4">
          <div class="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-blue-100 rounded-full text-blue-500">
            <svelte:component this={feature.icon} size={28} />
          </div>
          <h3 class="font-semibold mb-2 text-base sm:text-lg">{feature.title}</h3>
          <p class="text-gray-600 text-sm sm:text-base">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>