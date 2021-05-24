<script>
  import { onMount } from "svelte";

  import { params } from "@roxi/routify";

  import { socialLogin } from "../../../components/Auth/socialStore.js";

  const provider = "google-oauth2";

  let code = $params.code;

  console.log(code);

  onMount(() => {
    socialLogin(provider, code);
  });
</script>
