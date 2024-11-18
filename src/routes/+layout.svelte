<script>
	import '../app.css';
	import { Search, ShoppingCart, User } from 'lucide-svelte';
</script>

<div class="min-h-screen flex flex-col">
	<header class="bg-white shadow-sm">
		<nav class="container py-4 flex items-center justify-between">
			<a href="/" class="text-2xl font-bold text-primary">FoodieHub</a>
			
			<div class="flex items-center gap-8">
				<a href="/menu" class="hover:text-primary">Menu</a>
				<a href="/restaurants" class="hover:text-primary">Restaurants</a>
				<a href="/offers" class="hover:text-primary">Offers</a>
			</div>
			
			<div class="flex items-center gap-6">
				<button class="hover:text-primary">
					<Search size={24} />
				</button>
				<a href="/cart" class="hover:text-primary">
					<ShoppingCart size={24} />
				</a>
				<a href="/account" class="hover:text-primary">
					<User size={24} />
				</a>
			</div>
		</nav>
	</header>

	<main class="flex-1">
		<slot />
	</main>

	<footer class="bg-dark text-white py-12">
		<div class="container">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h3 class="text-xl font-bold mb-4">FoodieHub</h3>
					<p class="text-gray-400">Delicious food delivered to your doorstep</p>
				</div>
				<div>
					<h4 class="font-semibold mb-4">Quick Links</h4>
					<ul class="space-y-2 text-gray-400">
						<li><a href="/about" class="hover:text-white">About Us</a></li>
						<li><a href="/contact" class="hover:text-white">Contact</a></li>
						<li><a href="/faq" class="hover:text-white">FAQ</a></li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold mb-4">Legal</h4>
					<ul class="space-y-2 text-gray-400">
						<li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
						<li><a href="/terms" class="hover:text-white">Terms of Service</a></li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold mb-4">Follow Us</h4>
					<div class="flex gap-4">
						<a href="#" class="text-gray-400 hover:text-white">Facebook</a>
						<a href="#" class="text-gray-400 hover:text-white">Twitter</a>
						<a href="#" class="text-gray-400 hover:text-white">Instagram</a>
					</div>
				</div>
			</div>
			<div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
				<p>&copy; 2024 FoodieHub. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>