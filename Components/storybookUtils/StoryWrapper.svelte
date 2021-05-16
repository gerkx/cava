<div>
    <slot />
</div>

<script lang="ts">
    import { onMount } from 'svelte';
    import starlette from 'starlette';

    onMount(() => starlette.initAs('AEFT', 'gradient', 0))
</script>

<style lang="scss">
    :root {
    font-size:16px;
    box-sizing: border-box;
    --color-bg: rgb(35,35,35)
  }  

  div {
    background-color: var(--color-bg);
    padding: 5rem;
    height: 150px;
    font-size: 25px;
  }
</style>