<script>
  const API_URL = "https://api.engmedapp.com/";

  import { params } from "@roxi/routify";

  import authAxios from "../../../components/Auth/authAxios.js";

  let id = $params.id;

  let profile;

  async function fetchprofile(id) {
    await authAxios
      .get(`${API_URL}accounts/profile/${id}`)
      .then((res) => {
        profile = res.data;
      })
      .catch((err) => console.log(err));
  }
  $: if (id) fetchprofile(id);
</script>

{#if profile}
  <slot scoped={{ profile }}>Loading...</slot>
{/if}
