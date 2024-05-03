<script>
    import { qr } from '@svelte-put/qr/svg';
    import camera_icon_50 from '$lib/images/camera_icon_50.png';
    import { goto } from '$app/navigation';
    import { signedIn } from '$lib/stores';

    /** @type {import('./$types').PageData} */
	export let data;
    
    if (data.access) {
        signedIn.set(true)
    }
    // @ts-ignore
    function onKeyDown(e) {
		switch(e.keyCode) {
			case 39:
			    goto('/createplaylist');
				break;
		}
	}
</script>


<main>
    <div>
        <h1 class="text-xl font-bold flex justify-center mt-20" style="white-space: nowrap;">Scan QR code to reveal similar music</h1>
    </div>

    <div class="flex justify-center mt-20">
        <svg class="w-1/2"
            use:qr={{
                data: 'https://svelte-put.vnphanquang.com/docs/qr',
                logo: '',
                shape: 'circle',
            }}
        />
    </div>

    <div class="flex justify-center mt-20">
        <button tabindex="0" class="btn btn-lg flex items-center rounded-full">
            <img alt="QR Icon" src="{camera_icon_50}" />
        </button>
    </div>
</main>

<svelte:window on:keydown={onKeyDown} />