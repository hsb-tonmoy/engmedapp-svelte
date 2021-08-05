<script>
  import { onMount } from "svelte";
  import { params } from "@roxi/routify";

  const API_URL = "https://api.engmedapp.com/";

  let uid = $params.uid;
  let token = $params.token;

  let status;

  export const activate = async (uid, token) => {
    try {
      const res = await fetch(API_URL + "auth/users/activation/", {
        method: "POST",
        body: JSON.stringify({
          uid,
          token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 204) {
        status = "success";
      } else if (res.status === 400) {
        status = "invalid";
      } else if (res.status === 403) {
        status = "forbidden";
      }
    } catch (err) {
      console.log(err);
    }
  };

  onMount(() => {
    activate(uid, token);
  });
</script>

<div class="flex justify-content items-center w-full py-8">
  {#if status === "success"}
    <span class="font-mulish bg-green-500 px-3 py-2 text-white text-sm"
      >Activation Successful! <a class="text-ematext" href="/login"
        >Click here</a
      >to sign-in.</span
    >
  {:else if status === "invalid"}
    <span class="font-mulish bg-red-600 bg-r px-3 py-2 text-white text-sm"
      >Invalid activation URL. <a class="text-ematext" href="/login"
        >Click here</a
      > to re-send the activation URL.</span
    >
  {:else if status === "forbidden"}
    <span class="font-mulish bg-red-600 bg-r px-3 py-2 text-white text-sm"
      >Your account is already activated.</span
    >
  {/if}
</div>
