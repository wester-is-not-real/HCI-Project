<script>
    import { goto } from "$app/navigation";
  import { invalidAuth, isSignInModalOpen, platformIndex, signedIn } from "$lib/stores";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function openForgotModal() {
    dispatch('handleOpenForgotModal');
  }

  function close() {
    $isSignInModalOpen = false;
    $invalidAuth = false;
  }
  
  function login() {
    document.cookie = 'access' + "=" + ('true' || "") + "; path=/";
    document.cookie = 'platform' + "=" + ($platformIndex || "") + "; path=/";
    window.location.reload();
  }

</script>

<!--Initially just the Sign In button-->
<!-- <button class="btn mr-8 modal-button" on:click={()=>$isSignInModalOpen =true}>Sign In</button> -->
<!--If Sign In button is pressed, open modal-->
<dialog id="signInModal" class="modal" class:modal-open={$isSignInModalOpen}>
    <!-- {#if form?.message}
        <p style="bg-error">{form.message}</p>
    {/if} -->
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <!--This form allows you to close modal by clicking x-->
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={close}>✕</button>
            </form>
            <form class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" name ="email" placeholder="email" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" name= "password" placeholder="password" class="input input-bordered" required />
                    <form method="dialog">
                        <!-- <a href="#" class="label-text-alt link link-hover">Forgot password?</a> -->
                        <button class="label-text-alt link link-hover" on:click={openForgotModal}>Forgot password?</button>
                    </form>
                </div>
                {#if $invalidAuth}
                    <p class="text-error font-semibold ml-2 mt-2">Email or password is not valid</p>
                {/if}
                <div class="form-control mt-6">
                    <button class="btn btn-primary" on:click={login}>Login</button>
                </div>
            </form>
        </div>
    </div>
    <!--This form allows you to close modal by clicking outside of it-->
    <form method="dialog" class="modal-backdrop">
        <button on:click={close}></button>
    </form>
</dialog>

<style>
    button:hover{
        color: white; /* Change text color on hover */
    }
</style>