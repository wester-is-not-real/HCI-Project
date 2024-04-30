<script>
    import playlist1 from '$lib/images/playlist1.png';
    import playlist2 from '$lib/images/playlist2.png';
    import playlist3 from '$lib/images/playlist3.png';
    import playlist4 from '$lib/images/playlist4.png';

</script>


<main>
    <div class="mt-10">
        <div class="flex flex-row">
            <div class="ml-3 playlistContainer">
                <img class="w-40 h-40 btn btn-square btn-ghost" alt="Playlist 1" src="{playlist1}" />
                <label class="ml-1 btn btn-ghost">Merged Playlist</label>
            </div>

            <div class="ml-12 playlistContainer">
                <img class="w-40 h-40 btn btn-square btn-ghost" alt="Playlist 2" src="{playlist2}" />
                <label class="ml-1 btn btn-ghost">Your Most Played</label>
            </div>
        </div>

        <div class="flex flex-row mt-20">
            <div class="ml-3 playlistContainer">
                <img class="w-40 h-40 btn btn-square btn-ghost" alt="Playlist 3" src="{playlist3}" />
                <label class="ml-1 btn btn-ghost">Their Most Played</label>
            </div>

            <div class="ml-12 playlistContainer">
                <img class="w-40 h-40 btn btn-square btn-ghost" alt="Playlist 4" src="{playlist4}" />
                <label class="btn btn-ghost">Songs you might both like</label>
            </div>
        </div>
    </div>
</main>

<style>
    .playlistContainer {
        display: flex;
        flex-direction: column;
        width: 160px;
        height: 208px;
    }
</style>