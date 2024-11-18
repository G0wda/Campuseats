<script>
	const offers = [
		{
			title: 'First Order Discount',
			code: 'FIRST50',
			discount: '50% OFF',
			description: 'Get 50% off on your first order',
			validUntil: '2024-02-28',
			image: 'https://source.unsplash.com/400x300?food-discount-1'
		},
		{
			title: 'Weekend Special',
			code: 'WEEKEND25',
			discount: '25% OFF',
			description: 'Save 25% on all orders during weekends',
			validUntil: '2024-03-31',
			image: 'https://source.unsplash.com/400x300?food-discount-2'
		}
		// Add more offers as needed
	];
</script>

<svelte:head>
	<title>Offers - FoodieHub</title>
</svelte:head>

<div class="container py-8">
	<h1 class="text-2xl font-bold mb-8">Special Offers</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each offers as offer}
			<div class="bg-white rounded-lg shadow-md overflow-hidden">
				<img 
					src={offer.image} 
					alt={offer.title}
					class="w-full h-48 object-cover"
				>
				<div class="p-6">
					<div class="flex items-center justify-between mb-4">
						<h2 class="text-xl font-semibold">{offer.title}</h2>
						<span class="text-primary font-bold">{offer.discount}</span>
					</div>
					<p class="text-gray-600 mb-4">{offer.description}</p>
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm text-gray-500">Use code:</p>
							<p class="font-mono font-semibold">{offer.code}</p>
						</div>
						<div class="text-right">
							<p class="text-sm text-gray-500">Valid until:</p>
							<p class="font-semibold">{new Date(offer.validUntil).toLocaleDateString()}</p>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>