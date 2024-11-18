<script>
	import { Minus, Plus, Trash2 } from 'lucide-svelte';

	let cartItems = [
		{
			name: 'Margherita Pizza',
			restaurant: 'Pizza Palace',
			price: 14.99,
			quantity: 1,
			image: 'https://source.unsplash.com/400x300?pizza'
		},
		{
			name: 'Sushi Roll',
			restaurant: 'Sushi Master',
			price: 18.99,
			quantity: 2,
			image: 'https://source.unsplash.com/400x300?sushi'
		}
	];

	$: subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
	$: deliveryFee = 4.99;
	$: total = subtotal + deliveryFee;

	function updateQuantity(index, delta) {
		cartItems[index].quantity = Math.max(1, cartItems[index].quantity + delta);
		cartItems = cartItems;
	}

	function removeItem(index) {
		cartItems = cartItems.filter((_, i) => i !== index);
	}
</script>

<svelte:head>
	<title>Cart - FoodieHub</title>
</svelte:head>

<div class="container py-8">
	<h1 class="text-2xl font-bold mb-8">Your Cart</h1>

	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Cart Items -->
		<div class="flex-1">
			{#if cartItems.length > 0}
				<div class="space-y-4">
					{#each cartItems as item, i}
						<div class="bg-white p-4 rounded-lg shadow-md flex gap-4">
							<img src={item.image} alt={item.name} class="w-24 h-24 object-cover rounded">
							<div class="flex-1">
								<h3 class="font-semibold">{item.name}</h3>
								<p class="text-gray-600 text-sm">{item.restaurant}</p>
								<div class="flex items-center justify-between mt-4">
									<div class="flex items-center gap-2">
										<button 
											class="p-1 rounded-full hover:bg-gray-100"
											on:click={() => updateQuantity(i, -1)}
										>
											<Minus size={16} />
										</button>
										<span class="w-8 text-center">{item.quantity}</span>
										<button 
											class="p-1 rounded-full hover:bg-gray-100"
											on:click={() => updateQuantity(i, 1)}
										>
											<Plus size={16} />
										</button>
									</div>
									<span class="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
									<button 
										class="text-red-500 hover:text-red-600"
										on:click={() => removeItem(i)}
									>
										<Trash2 size={20} />
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="text-center py-12">
					<p class="text-gray-600">Your cart is empty</p>
					<a href="/menu" class="btn-primary inline-block mt-4">Browse Menu</a>
				</div>
			{/if}
		</div>

		<!-- Order Summary -->
		{#if cartItems.length > 0}
			<div class="w-full lg:w-96">
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h2 class="text-lg font-semibold mb-4">Order Summary</h2>
					<div class="space-y-2 mb-4">
						<div class="flex justify-between">
							<span class="text-gray-600">Subtotal</span>
							<span>${subtotal.toFixed(2)}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Delivery Fee</span>
							<span>${deliveryFee.toFixed(2)}</span>
						</div>
						<div class="h-px bg-gray-200 my-4"></div>
						<div class="flex justify-between font-semibold">
							<span>Total</span>
							<span>${total.toFixed(2)}</span>
						</div>
					</div>
					<a href="/checkout" class="btn-primary w-full text-center">
						Proceed to Checkout
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>