<script>
    import { goto } from '$app/navigation';
    import playlist1 from '$lib/images/playlist1.png';
    import playlist2 from '$lib/images/playlist2.png';
    import playlist3 from '$lib/images/playlist3.png';
    import playlist4 from '$lib/images/playlist4.png';
    import { playlists } from '$lib/stores';

</script>


<main>
    <div class="mt-10">
        <div class="flex flex-row">
            <div class="ml-3 playlistContainer" style="{$playlists[0] ? '' : 'filter: blur(1px);'}">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img class="w-40 h-40 btn btn-square btn-ghost {$playlists[0] ? '' : 'btn-disabled'}" on:click={()=>goto("/playlists/merged")} alt="Playlist 1" src="{playlist1}" />
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="ml-1 btn btn-ghost">Merged Playlist</label>
            </div>

            <div class="ml-12 playlistContainer" style="{$playlists[1] ? '' : 'filter: blur(1px);'}">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img class="w-40 h-40 btn btn-square btn-ghost {$playlists[1] ? '' : 'btn-disabled'}" alt="Playlist 2" src="{playlist2}" on:click={()=>goto("/playlists/yourmostplayed")}/>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="ml-1 btn btn-ghost">Your Most Played</label>
            </div>
        </div>

        <div class="flex flex-row mt-20">
            <div class="ml-3 playlistContainer" style="{$playlists[2] ? '' : 'filter: blur(1px);'}">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img class="w-40 h-40 btn btn-square btn-ghost {$playlists[2] ? '' : 'btn-disabled'}" alt="Playlist 3" src="{playlist3}" on:click={()=>goto("/playlists/theirmostplayed")}/>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="ml-1 btn btn-ghost">Their Most Played</label>
            </div>

            <div class="ml-12 playlistContainer" style="{$playlists[3] ? '' : 'filter: blur(1px);'}">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img class="w-40 h-40 btn btn-square btn-ghost {$playlists[3] ? '' : 'btn-disabled'}" alt="Playlist 4" src="{playlist4}" on:click={()=>goto("/playlists/songsbothlike")}/>
                <!-- svelte-ignore a11y-label-has-associated-control -->
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