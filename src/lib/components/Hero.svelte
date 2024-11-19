<script>
export let title = "Delicious Food Delivered";
export let subtitle = "Order from your favorite vendor with just a few clicks";
export let imageUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80";
</script>

<div class="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] bg-cover bg-center" 
     style="background-image: url('{imageUrl}')">
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="container relative h-full flex flex-col items-center justify-center text-white text-center px-4">
    <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">{title}</h1>
    <p class="text-base sm:text-lg md:text-xl">{subtitle}</p>
  </div>
</div>