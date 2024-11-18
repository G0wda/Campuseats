<script>
	import '../app.css';
	import { Search, ShoppingCart, User } from 'lucide-svelte';
</script>

<div class="min-h-screen flex flex-col">
	<header class="bg-white shadow-sm">
		<nav class="container py-4 flex items-center justify-around">
			<a href="/" class="text-2xl font-bold text-primary">CampusEats</a>
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
		</nav>
	</header>

	<main class="flex-1">
		<slot />
	</main>

	<footer class="bg-dark text-white py-12">
		<div class="container">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-xl font-bold mb-4">CampusEats</h3>
					<p class="text-gray-400">Delicious food delivered to you in minutes</p>
				</div>
				<div>
					<h4 class="font-semibold mb-4">Quick Links</h4>
					<ul class="space-y-2 text-gray-400">
						<li><a href="/about" class="hover:text-white">About Us</a></li>
						<li><a href="/contact" class="hover:text-white">Contact</a></li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold mb-4">Legal</h4>
					<ul class="space-y-2 text-gray-400">
						<li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
						<li><a href="/terms" class="hover:text-white">Terms of Service</a></li>
					</ul>
				</div>
			</div>
			<div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
				<p>&copy; 2024 CampusEats. All rights reserved.</p>
				<p>Designed and Developed by Edwin's Lab</p>
			</div>
		</div>
	</footer>
</div>