<script>
  export let variant = 'primary';
  export let size = 'md';
  export let type = 'button';
  
  const variants = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  $: classes = `${variants[variant]} ${sizes[size]} rounded-lg transition-colors`;
</script>

<button {type} class={classes} on:click>
  <slot />
</button>