<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Username from "../components/Auth/Username.svelte";
  import { user } from "../components/Auth/store.js";
</script>

{#if $user && !$user.username}
  <Username />
{:else}
  <Nav />
  <slot />
  <Footer />
{/if}
