<script>
	import { Search, Filter } from 'lucide-svelte';
	import FoodCard from '$lib/components/FoodCard.svelte';

	const cuisineTypes = ['All', 'Italian', 'Japanese', 'Indian', 'Mexican', 'Chinese'];
	const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-Free'];
	let selectedCuisine = 'All';
	let selectedDietary = [];
	
	const foods = [
		{
			name: 'Margherita Pizza',
			restaurant: 'Pizza Palace',
			price: 14.99,
			rating: 4.5,
			image: 'https://source.unsplash.com/400x300?pizza'
		},
		{
			name: 'Sushi Roll',
			restaurant: 'Sushi Master',
			price: 18.99,
			rating: 4.8,
			image: 'https://source.unsplash.com/400x300?sushi'
		},
		// Add more items as needed
	];
</script>

<svelte:head>
	<title>Menu - FoodieHub</title>
</svelte:head>

<div class="container py-8">
	<div class="flex flex-col md:flex-row gap-8">
		<!-- Filters Sidebar -->
		<div class="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
			<h2 class="font-semibold text-lg mb-4">Filters</h2>
			
			<div class="mb-6">
				<h3 class="font-medium mb-2">Cuisine Type</h3>
				<div class="space-y-2">
					{#each cuisineTypes as cuisine}
						<label class="flex items-center">
							<input
								type="radio"
								name="cuisine"
								value={cuisine}
								bind:group={selectedCuisine}
								class="mr-2"
							>
							{cuisine}
						</label>
					{/each}
				</div>
			</div>
			
			<div class="mb-6">
				<h3 class="font-medium mb-2">Dietary</h3>
				<div class="space-y-2">
					{#each dietaryOptions as option}
						<label class="flex items-center">
							<input
								type="checkbox"
								bind:group={selectedDietary}
								value={option}
								class="mr-2"
							>
							{option}
						</label>
					{/each}
				</div>
			</div>
			
			<div>
				<h3 class="font-medium mb-2">Price Range</h3>
				<input type="range" class="w-full" min="0" max="100" step="10">
				<div class="flex justify-between text-sm text-gray-600">
					<span>$0</span>
					<span>$100</span>
				</div>
			</div>
		</div>

		<!-- Menu Items Grid -->
		<div class="flex-1">
			<div class="flex items-center gap-4 mb-6">
				<div class="flex-1 relative">
					<input
						type="text"
						placeholder="Search menu items..."
						class="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
					>
					<Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
				</div>
				<select class="px-4 py-2 rounded-lg border focus:outline-none focus:border-primary">
					<option>Sort by: Popular</option>
					<option>Price: Low to High</option>
					<option>Price: High to Low</option>
					<option>Rating</option>
				</select>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each foods as food}
					<FoodCard {...food} />
				{/each}
			</div>
		</div>
	</div>
</div>