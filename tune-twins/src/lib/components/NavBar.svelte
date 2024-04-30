<script lang="ts">
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import AccountBubble from './AccountBubble.svelte';
  import theme_icon from '$lib/images/theme_icon.png';
  import { page } from '$app/stores';
    import { redirect } from '@sveltejs/kit';
    import { goto } from '$app/navigation';
  // let signedIn = false;
  // initialize theme change
  function goHome() {
    goto('/');
  }
  onMount(() => {
    themeChange(false);
  });
</script>

<!-- Navigation Bar Svelte Component -->
  <nav class="navbar">
    <!-- Section containing the -->
    <section class="flex items-center">
      <button class="btn btn-ghost" on:click={goHome}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </button>
    </section>
    <section class="flex items-center py-1">
      <section class="dropdown dropdown-left ml-8 mr-1">
        <!-- <button class="btn btn-outline btn-primary">Theme</button> -->
        <div tabindex="0" role="button" class="btn btn-xm btn-ghost m-1 btn-circle ">
          <!-- Theme -->
          <!-- <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg> -->
          <div class="w-5 h-5 rounded-full overflow-hidden">
            <img alt="Theme Icon" src="{theme_icon}" />
          </div>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
          <li><input  data-set-theme="dark" data-act-class="ACTIVECLASS" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
          <li><input data-set-theme="light" data-act-class="ACTIVECLASS" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
          <li><input data-set-theme="synthwave" data-act-class="ACTIVECLASS" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Synthwave" value="synthwave"/></li>
          <li><input data-set-theme="halloween" data-act-class="ACTIVECLASS" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Halloween" value="halloween"/></li>
          <li><input data-set-theme="retro" data-act-class="ACTIVECLASS" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
          <li><input data-set-theme="valentine" data-act-class="ACTIVECLASS" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
        </ul>
      </section>
      <AccountBubble />
    </section>
  </nav>

  <style>
    .navbar{
      display: flex;
      justify-content: space-between;
    }
  </style>
