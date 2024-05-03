<script>
    import playlist2 from '$lib/images/playlist2.png';
    import leftarrow from '$lib/images/leftarrow.png';
    import { goto } from '$app/navigation';

    const playlist = [
		{
			artist: 'Purrple',
			name: 'Missing You',
			audio: `https://www.chosic.com/wp-content/uploads/2022/01/Missing-You.mp3`
		},
		{
			artist: 'Barradeen',
			name: 'Bedtime After a Coffee',
			audio: `https://www.chosic.com/wp-content/uploads/2020/11/barradeen-bedtime-after-a-coffee.mp3`
		},
	]
	
	let playingState = 'paused'
	let songPlayingIndex = 0
	// @ts-ignore
	let song = null

	// @ts-ignore
	function togglePlaying() {
		playingState === 'paused'? play() : pause()
	}
	
	function loadSong() {
		song = new Audio(playlist[songPlayingIndex].audio)
		song.volume = 0.2
		song.play()		
	}

	function play() {
		if (playingState === 'playing') {
			pause()
		}
		
		playingState = 'playing'
		loadSong()
	}
	
	// @ts-ignore
	function playSelectedSong(event) {		
		const songIndex = +event.target.dataset.index
		
		if (songIndex === songPlayingIndex) {
			// @ts-ignore
			songPlayingIndex = null
			return pause()
		}
		
		songPlayingIndex = songIndex
		play()
	}

	function pause() {
		playingState = 'paused'
		// @ts-ignore
		song.pause()
	}

	// @ts-ignore
	function previous() {
		if (songPlayingIndex <= 0) return
		songPlayingIndex -= 1
		play()
	}

	// @ts-ignore
	function next() {
		if (songPlayingIndex >= playlist.length - 1) return
		songPlayingIndex += 1
		play()
	}
</script>
<main>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img class="w-9 h-9 btn btn-square btn-ghost" alt="Left Arrow" src="{leftarrow}" on:click={()=>goto("/playlists")}>
    <div class="ml-3 playlistContainer">
        <img class="w-40 h-40" alt="Playlist 1" src="{playlist2}" />
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="ml-1 btn btn-ghost">Your Most Played</label>
    </div>
    <div class="player bg-primary">
        <div class="playlist">	
            {#each playlist as song, index}
                <div class:playing={index === songPlayingIndex} class="song">
                    <span>{index + 1}.</span> 
                    <button data-index={index} on:click={playSelectedSong}>
                        {playingState === 'playing' && index === songPlayingIndex ? '⏯️' : '▶️'}
                    </button>
                    <span>{song.name} - {song.artist}</span>
                </div>
            {/each}
        </div>
    
        <div class="controls">		
            <button on:click={previous}>⏪️</button>
            <button on:click={togglePlaying}>
                {playingState === 'paused' ? '▶️' : '⏯️'}
            </button>
            <button on:click={next}>⏩</button>
        </div>
    </div>
</main>
<style>
    button {
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        font-weight: 700;
        background: none;
        border: none;
        cursor: pointer;
    }
    
    .player {
        color: hsl(220 20% 80%);
        border-radius: 8px;
    }
    
    .playlist {
        padding: 1rem;
    }
    
    .song {
        display: flex;
        align-items: center;
        padding: 1rem;
    }
    
    .song button {
        padding: 0 0.4rem;
    }
    
    .controls {
        display: flex;
        justify-content: center;
        gap: 24px;
        padding: 1rem 0;
        border-top: 1px solid hsl(220 20% 28%);
    }
    
    .controls button {
        font-size: 2rem;
    }
    
    .playing {
        color: hsl(220 20% 98%);
        border-radius: 8px;
    }
</style>