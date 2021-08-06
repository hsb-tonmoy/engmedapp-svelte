<script>
  const API_URL = "https://api.engmedapp.com/";
  import { params } from "@roxi/routify";

  let id = $params.id;

  let profile;

  async function fetchprofile(id) {
    const response = await fetch(`${API_URL}accounts/profile/${id}`);
    profile = await response.json();
  }
  $: if (id) fetchprofile(id);
</script>

{#if profile}
  <slot scoped={{ profile }}>Loading...</slot>
{/if}
