<script>
    export let vendors;
  </script>
  
  <div class="hidden md:flex space-x-8 font-serif">
    {#each vendors as vendor (vendor.id)}
    <a href={`/vendor/${vendor.id}`}>{vendor.name}</a>
    {/each}
  </div>