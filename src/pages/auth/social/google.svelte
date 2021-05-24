<script>
  import { onMount } from "svelte";

  import { params } from "@roxi/routify";

  // import { socialLogin } from "../../../components/Auth/socialStore.js";

  const API_URL = "https://api.engmedapp.com/";

  const provider = "google-oauth2";

  let code = $params.code;

  async function socialLogin(provider, code) {
    authenticating.set(true);
    const res = await fetch(API_URL + "accounts/social/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        provider,
        code,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      access_token.set(data.token);
      await authenticate();
    } else if (res.status === 400) {
      loginError.set("Please try again.");
      authenticating.set(false);
      window.location.replace("/login");
    } else {
      console.log(res.status + res.statusText);
      authenticating.set(false);
    }
  }

  onMount(() => {
    try {
      socialLogin(provider, code);
    } catch (err) {
      console.log(err);
    }
  });
</script>
