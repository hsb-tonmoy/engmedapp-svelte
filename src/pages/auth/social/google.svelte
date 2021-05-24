<script>
  import { onMount } from "svelte";

  import { params } from "@roxi/routify";

  import { socialLogin } from "../../../components/Auth/socialStore.js";

  const provider = "google-oauth2";

  let code = $params.code;

  onMount(() => {
    try {
      socialLogin(provider, code);
    } catch (err) {
      console.log(err);
    }

    console.log(provider + code);
  });
</script>
