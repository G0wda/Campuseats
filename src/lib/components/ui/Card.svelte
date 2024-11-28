<script>
  export let hover = true;
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden {hover ? 'transition-transform duration-300 hover:scale-105' : ''}">
  <slot />
</div>