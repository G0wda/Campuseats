<script>
	import { Search } from 'lucide-svelte';
	import RestaurantCard from '$lib/components/RestaurantCard.svelte';

	const restaurants = [
		{
			name: 'Pizza Palace',
			cuisine: 'Italian',
			rating: 4.5,
			deliveryTime: '30-45 min',
			image: 'https://source.unsplash.com/400x300?restaurant-1'
		},
		{
			name: 'Sushi Master',
			cuisine: 'Japanese',
			rating: 4.8,
			deliveryTime: '20-35 min',
			image: 'https://source.unsplash.com/400x300?restaurant-2'
		},
		// Add more restaurants as needed
	];
</script>

<svelte:head>
	<title>Restaurants - FoodieHub</title>
</svelte:head>

<div class="container py-8">
	<div class="flex items-center gap-4 mb-8">
		<div class="flex-1 relative">
			<input
				type="text"
				placeholder="Search restaurants..."
				class="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
			>
			<Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
		</div>
		<select class="px-4 py-2 rounded-lg border focus:outline-none focus:border-primary">
			<option>Sort by: Popular</option>
			<option>Rating</option>
			<option>Delivery Time</option>
		</select>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each restaurants as restaurant}
			<RestaurantCard {...restaurant} />
		{/each}
	</div>
</div>