<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import "../app.css";
    import { onMount } from 'svelte';
    import { themeChange } from 'theme-change';
    // initialize theme change
    onMount(() => {
        themeChange(false);
    });
</script>
  
<NavBar/>
<slot />