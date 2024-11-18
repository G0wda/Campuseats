<script>
	let deliveryDetails = {
		name: '',
		phone: '',
		address: '',
		instructions: ''
	};

	let paymentMethod = 'card';
	let tip = 0;
	const tipOptions = [0, 5, 10, 15, 20];

	function handleSubmit() {
		// Handle order submission
		console.log('Order submitted', { deliveryDetails, paymentMethod, tip });
	}
</script>

<svelte:head>
	<title>Checkout - FoodieHub</title>
</svelte:head>

<div class="container max-w-3xl py-8">
	<h1 class="text-2xl font-bold mb-8">Checkout</h1>

	<form on:submit|preventDefault={handleSubmit} class="space-y-8">
		<!-- Delivery Details -->
		<div class="bg-white p-6 rounded-lg shadow-md">
			<h2 class="text-lg font-semibold mb-4">Delivery Details</h2>
			<div class="space-y-4">
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700 mb-1">
						Full Name
					</label>
					<input
						type="text"
						id="name"
						bind:value={deliveryDetails.name}
						required
						class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
					>
				</div>
				<div>
					<label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						bind:value={deliveryDetails.phone}
						required
						class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
					>
				</div>
				<div>
					<label for="address" class="block text-sm font-medium text-gray-700 mb-1">
						Delivery Address
					</label>
					<textarea
						id="address"
						bind:value={deliveryDetails.address}
						required
						rows="3"
						class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
					></textarea>
				</div>
				<div>
					<label for="instructions" class="block text-sm font-medium text-gray-700 mb-1">
						Delivery Instructions (Optional)
					</label>
					<textarea
						id="instructions"
						bind:value={deliveryDetails.instructions}
						rows="2"
						class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
					></textarea>
				</div>
			</div>
		</div>

		<!-- Payment Method -->
		<div class="bg-white p-6 rounded-lg shadow-md">
			<h2 class="text-lg font-semibold mb-4">Payment Method</h2>
			<div class="space-y-2">
				<label class="flex items-center">
					<input
						type="radio"
						name="payment"
						value="card"
						bind:group={paymentMethod}
						class="mr-2"
					>
					Credit/Debit Card
				</label>
				<label class="flex items-center">
					<input
						type="radio"
						name="payment"
						value="cash"
						bind:group={paymentMethod}
						class="mr-2"
					>
					Cash on Delivery
				</label>
			</div>
		</div>

		<!-- Tip -->
		<div class="bg-white p-6 rounded-lg shadow-md">
			<h2 class="text-lg font-semibold mb-4">Add a Tip</h2>
			<div class="flex gap-2">
				{#each tipOptions as amount}
					<button
						type="button"
						class="px-4 py-2 rounded-lg border {tip === amount ? 'bg-primary text-white' : 'hover:bg-gray-50'}"
						on:click={() => tip = amount}
					>
						{amount}%
					</button>
				{/each}
			</div>
		</div>

		<button type="submit" class="btn-primary w-full">
			Place Order
		</button>
	</form>
</div>