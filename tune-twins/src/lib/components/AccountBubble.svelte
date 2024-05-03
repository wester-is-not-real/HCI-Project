<script lang="ts">
    import { goto } from '$app/navigation';
    import avatar_icon from '$lib/images/avatar_icon.png';
    import { invalidAuth, isCreateAccountModalOpen, isForgotPasswordModalOpen, isSignInModalOpen, platformIndex, signedIn } from '$lib/stores'; 
    import { stringify } from 'postcss';
    import CreateAccount from './CreateAccount.svelte';
    import ForgotPassword from './ForgotPassword.svelte';
    import SignIn from './SignIn.svelte';

    function handleOpenForgotModal (){
        $isSignInModalOpen = false; 
        $isForgotPasswordModalOpen = true;
        $invalidAuth = false;
    }

    function handleForgottoSignIn (){
        $isForgotPasswordModalOpen = false;
        $isSignInModalOpen = true;
        $invalidAuth = false;
    }

    function signOut() {
        document.cookie = 'access' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'platform' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        $signedIn = false;
        goto("/");
    }

    function signIn(key: number) {
        $isSignInModalOpen = true;
        $platformIndex = key;
    }
</script>

{#if $isCreateAccountModalOpen}
    <CreateAccount/>
{/if}

{#if $isSignInModalOpen}
    <SignIn on:handleOpenForgotModal={handleOpenForgotModal} />
{/if}

{#if $isForgotPasswordModalOpen}
    <ForgotPassword on:handleForgottoSignIn={handleForgottoSignIn}/>
{/if}

<div class="dropdown dropdown-end">
        <div class="flex-none">
            <button tabindex="0" class="btn btn-md flex items-center rounded-full px-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              <div class="avatar {$signedIn ? 'online' : 'offline'}">
                <div class="w-8 h-8 rounded-full overflow-hidden">
                    <img alt="Avatar Icon" src="{avatar_icon}" />
                </div>
              </div>
            </button>
        </div>
    {#if $signedIn}
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a href="/profile">Profile</a></li>
            <li>
                <a href="/pastmatch" class="justify-between">
                    Past Matches
                    <span class="badge">New</span>
                </a>
                </li>
            <li><a href="/settings">Settings</a></li>
            <li><a on:click={signOut}>Logout</a></li>
        </ul>
        
    {:else}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <!-- <li><button class="justify-between" on:click={()=>$isCreateAccountModalOpen = true}>Create an account</button></li> -->
            <li><button class="justify-between" on:click={()=>signIn(0)}>Log in with Spotify</button></li>
            <li><button class="justify-between" on:click={()=>signIn(1)}>Log in with Apple Music</button></li>
            <li><button class="justify-between" on:click={()=>signIn(2)}>Log in with Youtube Music</button></li>
            <li><button class="justify-between" on:click={()=>signIn(3)}>Log in with Amazon Music</button></li>
            <li><button class="justify-between" on:click={()=>signIn(4)}>Log in with Tidal</button></li>
        </ul>
    {/if}
    
</div>