<script>
    import { goto } from '$app/navigation';
  
    // Function to handle the back navigation
    const goBack = () => {
      goto('/');
    };
  </script>
  
  <button 
    on:click={goBack} 
    class=" bg-slate-900 text-white py-2 px-4 rounded-lg font-bold shadow-md hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition transform active:scale-95"
  >
    ← Back
  </button>
  