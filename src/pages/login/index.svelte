<script>
  import { metatags } from "@roxi/routify";
  metatags.title = "EngMedApp - Login";

  import { user } from "../../components/Auth/store.js";
  import Login from "../../components/Auth/Login.svelte";
  import Register from "../../components/Auth/Register.svelte";
  import { params } from "@roxi/routify";
  import { goto } from "@roxi/routify";

  $: if ($user) $goto("/");
</script>

<!-- routify:options index=false -->
<section class="flex flex-wrap w-full h-screen">
  <div
    class="login-bg flex justify-start pl-4 md:pl-0 md:justify-around items-start bg-cover bg-center w-full md:w-1/2 xl:w-2/5"
  >
    <div class="flex items-center py-4">
      <div class="flex-shrink-0">
        <a href="/">
          <img
            class="h-8 w-8"
            src="/images/EMA-fullColor.png"
            alt="EngMedApp"
          />
        </a>
      </div>
      <a href="/">
        <p class="font-mulish font-bold text-ematext text-base ml-4">
          EngMed App
        </p>
      </a>
    </div>
  </div>
  <div
    class="flex flex-col justify-center pl-6 md:pl-12 xl:pl-24 w-full md:w-1/2 xl:w-3/5"
  >
    {#if $params.register === "true"}
      <Register />
    {:else}
      <Login />
    {/if}
  </div>
</section>

<style>
  .login-bg {
    background-image: url("/images/sign-in.svg");
  }
</style>
