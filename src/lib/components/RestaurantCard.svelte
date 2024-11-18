<script>
	import { Star, Clock } from 'lucide-svelte';
	export let name = '';
	export let cuisine = '';
	export let rating = 0;
	export let deliveryTime = '';
	export let image = '';
</script>

<a href="/restaurants/{name.toLowerCase().replace(/\s+/g, '-')}" class="block">
	<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
		<img 
			src={image} 
			alt={name}
			class="w-full h-48 object-cover"
		>
		<div class="p-4">
			<h3 class="font-semibold text-lg mb-1">{name}</h3>
			<p class="text-gray-600 text-sm mb-3">{cuisine}</p>
			<div class="flex items-center justify-between">
				<div class="flex items-center text-yellow-500">
					<Star size={16} fill="currentColor" />
					<span class="ml-1">{rating}</span>
				</div>
				<div class="flex items-center text-gray-600">
					<Clock size={16} />
					<span class="ml-1">{deliveryTime}</span>
				</div>
			</div>
		</div>
	</div>
</a>