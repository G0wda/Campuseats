<script>
    import { goto } from '$app/navigation';
  
    // Function to handle the back navigation
    const goBack = () => {
      if (history.length > 1) {
        // If there's history, go back
        history.back();
      } else {
        // Otherwise, navigate to a default route (e.g., home)
        goto('/');
      }
    };
  </script>
  
  <button 
    on:click={goBack} 
    class=" bg-orange-500 text-white py-2 px-4 rounded-lg font-bold shadow-md hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition transform active:scale-95"
  >
    ← Back
  </button>
  