<script>
	import { Star } from 'lucide-svelte';
	export let name = '';
	export let restaurant = '';
	export let price = 0;
	export let rating = 0;
	export let image = '';
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden">
	<img 
		src={image} 
		alt={name}
		class="w-full h-48 object-cover"
	>
	<div class="p-4">
		<div class="flex items-center justify-between mb-2">
			<h3 class="font-semibold">{name}</h3>
			<div class="flex items-center text-yellow-500">
				<Star size={16} fill="currentColor" />
				<span class="ml-1">{rating}</span>
			</div>
		</div>
		<p class="text-gray-600 text-sm mb-4">{restaurant}</p>
		<div class="flex items-center justify-between">
			<span class="font-bold text-primary">${price.toFixed(2)}</span>
			<button class="btn-secondary text-sm">Add to Cart</button>
		</div>
	</div>
</div>