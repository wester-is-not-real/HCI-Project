<script>
    import { isForgotPasswordModalOpen, invalidAuth } from "$lib/stores";
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();

    function returntoSignIn() {
        dispatch('handleForgottoSignIn');
    }
</script>

<dialog id="my_modal_2" class="modal" class:modal-open={$isForgotPasswordModalOpen}>
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <!--This form allows you to close modal by clicking x-->
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={returntoSignIn}>✕</button>
            </form>
            <form class="card-body" method="post" action="auth/?/forgotPassword">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Enter your email</span>
                    </label>
                    <input type="email" name ="email" placeholder="Enter your email" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Enter a new password</span>
                    </label>
                    <input type="password" name= "password" placeholder="Enter a password" class="input input-bordered" required />
                    <label class="label">
                        <span class="label-text">Confirm new password</span>
                    </label>
                    <input type="password" name= "password-confirmation" placeholder="Confirm password" class="input input-bordered" required />
                </div>
                {#if $invalidAuth}
                    <p class="text-error font-semibold ml-2 mt-2">Passwords do not match</p>
                {/if}
                <div class="form-control mt-6">
                    <button class="btn btn-primary" type = "submit">Change password</button>
                </div>
            </form>
        </div>
    </div>
    <!--This form allows you to close modal by clicking outside of it-->
    <form method="dialog" class="modal-backdrop">
        <button on:click={()=>$isForgotPasswordModalOpen = false}></button>
    </form>
</dialog>

<style>
    button:hover{
        color: white; /* Change text color on hover */
    }
</style>