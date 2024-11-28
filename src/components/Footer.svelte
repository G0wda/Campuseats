<script>
  import { Phone, Mail, Clock } from 'lucide-svelte';
</script>

<footer class="bg-gray-800 flex items-center text-white pt-8 pb-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
        <div class="space-y-2">
          <p class="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 1234567890</span>
          </p>
          <p class="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 1122334455</span>
          </p>
          <p class="flex items-center gap-2">
            <Mail size={16} />
            <span>campuseats@gmail.com</span>
          </p>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Opening Hours</h3>
        <div class="space-y-2">
          <p class="flex items-center gap-2">
            <Clock size={16} />
            <span>Mon - Fri: 8:00 AM - 8:00 PM</span>
          </p>
          <p class="flex items-center gap-2">
            <Clock size={16} />
            <span>Sat: 9:00 AM - 6:00 PM</span>
          </p>
        </div>
      </div>
      
     
    </div>
    
    <div class="border-t border-gray-700 mt-8 pt-6 text-center">
      <p>&copy; {new Date().getFullYear()} College Canteen. All rights reserved.</p>
      <p>Designed and Developed by Edwin's Lab</p>
    </div>
  </div>
</footer>