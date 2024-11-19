<script>
import Header from './lib/components/Header.svelte';
import Navigation from './lib/components/Navigation.svelte';
import Hero from './lib/components/Hero.svelte';
import Categories from './lib/components/Categories.svelte';
import PopularDishes from './lib/components/PopularDishes.svelte';
import WhyChooseUs from './lib/components/WhyChooseUs.svelte';
</script>

<svelte:head>
  <title>CampusEats - Order Delicious Food Online</title>
  <meta name="description" content="Order food online from the best restaurants in your area" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Header />
  <Navigation />
  <Hero />
  <Categories />
  <PopularDishes />
  <WhyChooseUs />
</div>

<style>
  :global(html) {
    overflow-x: hidden;
  }
  
  :global(body) {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
  }

  :global(.container) {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>