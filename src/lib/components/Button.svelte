<script>
  export let href = "";

  const classes = "hover:text-gray-600 font-semibold";
</script>

{#if href}
  <a class={classes} {href}><slot /></a>
{:else}
  <button class={classes}><slot /></button>
{/if}
