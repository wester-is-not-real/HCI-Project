import { writable } from 'svelte/store';

// Initialize the store with the initial value (e.g., false for not logged in)
export let signedIn = writable(false);
export let isSignInModalOpen = writable(false);
export let isCreateAccountModalOpen = writable(false);
export let isForgotPasswordModalOpen = writable(false);
export let invalidAuth = writable(false);

const initialState = [false, false, false, false];
export const loggedInwith = ["Spotify", "Apple Music", "Youtube Music", "Amazon Music", "Tidal"];

export const playlists = writable(initialState);


export function resetPlaylists() {
    playlists.set(initialState);
}

export let platformIndex = writable(0);