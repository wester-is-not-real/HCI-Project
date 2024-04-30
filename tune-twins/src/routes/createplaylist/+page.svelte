<script lang="ts">
    import { goto } from '$app/navigation';
    import green_checkmark from '$lib/images/green_checkmark.png';
    
    let pressedStates = Array(4).fill(false);

    function selection(key: number){
        pressedStates[key] = !pressedStates[key];
    }

</script>



<main>
    <div class="flex justify-center">
        <h1 class="text-xl font-bold mt-20" style="white-space: nowrap;">Select which playlists you want to create</h1>
    </div>
    <div class="flex-col mt-20">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex justify-center">
            <h1 class="btn btn-primary w-4/5 mb-5" style="font-size: 1.25rem;" on:click={()=>selection(0)}>
                Merged Playlist
                <div class="w-5 h-5 rounded-full overflow-hidden" style="background: white;">
                    {#if pressedStates[0]}
                        <img alt="Checkmark icon" src="{green_checkmark}" />
                    {/if}
                </div>
            </h1>
        </div>

        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex justify-center">
            <h1 class="btn btn-primary w-4/5 mb-5" style="font-size: 1.25rem;" on:click={()=>selection(1)}>
                Your Most Played
                <div class="w-5 h-5 rounded-full overflow-hidden" style="background: white;">
                    {#if pressedStates[1]}
                        <img alt="Checkmark icon" src="{green_checkmark}" />
                    {/if}
                </div>
                
            </h1>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex justify-center">
            <h1 class="btn btn-primary w-4/5 mb-5" style="font-size: 1.25rem;" on:click={()=>selection(2)}>
                Their Most Played
                <div class="w-5 h-5 rounded-full overflow-hidden" style="background: white;">
                    {#if pressedStates[2]}
                        <img alt="Checkmark icon" src="{green_checkmark}" />
                    {/if}
                </div>
                
            </h1>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex justify-center">
            <h1 class="btn btn-primary w-4/5 mb-10" style="font-size: 1.25rem;" on:click={()=>selection(3)}>
                Songs you might both like
                <div class="w-5 h-5 rounded-full overflow-hidden" style="background: white;">
                    {#if pressedStates[3]}
                        <img alt="Checkmark icon" src="{green_checkmark}" />
                    {/if}
                </div>
                
            </h1>
        </div>

        <div class="flex justify-center">
            <button class="btn btn-success w-1/2" on:click={()=>goto('/playlists')}>Generate</button>
        </div>
    </div>
</main>