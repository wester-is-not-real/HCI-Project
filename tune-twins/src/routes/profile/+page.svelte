<script>
    import { goto } from '$app/navigation';
    import avatar_icon from '$lib/images/avatar_icon.png';
    import { loggedInwith, platformIndex, signedIn } from '$lib/stores';

    /** @type {import('./$types').PageData} */
	export let data;

    function signOut() {
        document.cookie = 'access' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        $signedIn = false;
        goto("/");
    }

</script>
<main>
    <div class="flex justify-center rounded-full overflow-hidden">
        <img class="w-20 h-20" alt="Avatar Icon" src="{avatar_icon}" />
    </div>
    <div class="flex flex-col mt-14">
        <button class="btn btn-lg btn-outline btn-success no-animation">Logged in with {loggedInwith[data.platform]}</button>
        <button class="btn btn-lg mt-20 btn-primary" on:click={signOut}>Logout</button>
    </div>
</main>