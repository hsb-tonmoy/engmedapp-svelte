<script>
  import { onMount } from "svelte";
  import { params } from "@roxi/routify";
  import { goto } from "@roxi/routify";

  import Nav from "../../../../../components/Layout/Nav.svelte";

  const API_URL = import.meta.env.VITE_API_URL;

  let uid = $params.uid;
  let token = $params.token;

  let status;

  const activate = async (uid, token) => {
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

  $: if (status === "success" || status === "forbidden") {
    setTimeout(() => {
      $goto("/login");
    }, 5000);
  }

  onMount(() => {
    activate(uid, token);
  });
</script>

<Nav />

<section
  class="flex justify-center items-center w-full mt-12 xl:mt-0 xl:h-screen"
>
  <div
    class="flex flex-col justify-center shadow-md bg-white py-12 md:py-24 px-6 md:px-12"
  >
    <span
      class={status === "success"
        ? "border-green-500 w-auto border-l-4"
        : "border-red-600 w-auto border-l-4"}
    >
      <h1
        class="font-mulish font-semibold text-ematext text-xl md:text-3xl uppercase ml-2"
      >
        Account Activation
      </h1>
    </span>
    <div class="mt-5 self-center">
      {#if status === "success"}
        <span class="font-poppins text-black text-sm md:text-md"
          >Activation Successful! Redirecting you to the sign-in page. <a
            class="text-primary"
            href="/login"
            >Click here
          </a>if you're not redirected automatically.</span
        >
      {:else if status === "invalid"}
        <span class="font-poppins text-black text-sm md:text-md"
          >Invalid activation URL! <a class="text-primary" href="/login"
            >Click here</a
          > to re-send the activation URL.</span
        >
      {:else if status === "forbidden"}
        <span class="font-poppins text-black text-sm md:text-md"
          >Your account is already activated. Redirecting you to the sign-in
          page. <a class="text-primary" href="/login">Click here </a>if you're
          not redirected automatically.</span
        >
      {/if}
    </div>
  </div>
</section>
