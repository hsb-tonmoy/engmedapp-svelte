<script>
  import Login from "../../components/Auth/Login.svelte";
  import { authenticating, user } from "../../components/Auth/store.js";

  /**
   * We don't want SSR for the content of protected pages. If we did,
   * `$ready()` should be called if the user failed to authenticate.
   * Otherwise Routify will wait indefinitely for `<slot />` to load.
   * */
  // $: if (!$authenticating && !$user) $ready()
</script>

{#if $user}
  {#if $user.account_type !== 1 || $user.account_type !== 2}
    <slot />
  {:else}
    <h1>Unauthorized</h1>
  {/if}
{:else if $authenticating}
  <h2>authenticating...</h2>
{:else}
  <Login />
{/if}
