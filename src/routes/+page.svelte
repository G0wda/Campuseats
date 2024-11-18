<script>
	import { Search, Star, Clock, TrendingUp } from 'lucide-svelte';
</script>

<svelte:head>
	<title>FoodieHub - Order Delicious Food Online</title>
	<meta name="description" content="Order food online from the best restaurants in your area" />
</svelte:head>

<div class="relative h-[600px] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80')">
	<div class="absolute inset-0 bg-dark/50"></div>
	<div class="container relative h-full flex flex-col items-center justify-center text-white text-center">
		<h1 class="text-5xl font-bold mb-6">Delicious Food Delivered</h1>
		<p class="text-xl mb-8">Order from your favorite restaurants with just a few clicks</p>
		
		<div class="w-full max-w-2xl bg-white rounded-full p-2 flex">
			<input 
				type="text" 
				placeholder="Search for restaurants or dishes..." 
				class="flex-1 px-4 text-dark focus:outline-none"
			>
			<button class="btn-primary">
				<Search size={20} />
			</button>
		</div>
	</div>
</div>

<section class="py-16">
	<div class="container">
		<h2 class="text-3xl font-bold text-center mb-12">Popular Dishes</h2>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			{#each Array(4) as _, i}
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<img 
						src="https://source.unsplash.com/400x300?food-{i+1}" 
						alt="Food" 
						class="w-full h-48 object-cover"
					>
					<div class="p-4">
						<div class="flex items-center justify-between mb-2">
							<h3 class="font-semibold">Delicious Dish</h3>
							<div class="flex items-center text-yellow-500">
								<Star size={16} fill="currentColor" />
								<span class="ml-1">4.5</span>
							</div>
						</div>
						<p class="text-gray-600 text-sm mb-4">Restaurant Name</p>
						<div class="flex items-center justify-between">
							<span class="font-bold text-primary">$12.99</span>
							<button class="btn-secondary text-sm">Add to Cart</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-16 bg-gray-50">
	<div class="container">
		<h2 class="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full text-primary">
					<Clock size={32} />
				</div>
				<h3 class="font-semibold mb-2">Fast Delivery</h3>
				<p class="text-gray-600">Hot food delivered to your doorstep in minutes</p>
			</div>
			<div class="text-center">
				<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full text-primary">
					<Star size={32} />
				</div>
				<h3 class="font-semibold mb-2">Best Quality</h3>
				<p class="text-gray-600">Handpicked restaurants with quality food</p>
			</div>
			<div class="text-center">
				<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full text-primary">
					<TrendingUp size={32} />
				</div>
				<h3 class="font-semibold mb-2">Great Offers</h3>
				<p class="text-gray-600">Regular discounts and special deals</p>
			</div>
		</div>
	</div>
</section>