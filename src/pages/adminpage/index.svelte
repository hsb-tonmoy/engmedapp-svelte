<script>
  import { goto } from "@roxi/routify";
  import Login from "./_login.svelte";
</script>

<main>
  <Login
    on:success={() => {
      $goto("/adminpage/dashboard/");
    }}
  />
</main>
