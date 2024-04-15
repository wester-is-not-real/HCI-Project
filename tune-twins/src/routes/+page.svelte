<script>
    import { qr } from '@svelte-put/qr/svg';
    import camera_icon_50 from '$lib/images/camera_icon_50.png';
</script>

<main>
    <h1 class="text-3xl font-bold flex justify-center mt-20" style="white-space: nowrap;">Scan QR code to reveal similar music</h1>

    <div class="flex justify-center mt-20">
        <svg class="w-1/5"
            use:qr={{
            data: 'https://svelte-put.vnphanquang.com/docs/qr',
            logo: '',
            shape: 'circle',
            }}
        />
    </div>

    <div class="flex justify-center mt-40">
        <button tabindex="0" class="btn btn-lg flex items-center rounded-full">
            <img alt="QR Icon" src="{camera_icon_50}" />
        </button>
    </div>
</main>
