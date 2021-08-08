<script>
  import { form } from "svelte-forms";
  import { goto } from "@roxi/routify";
  import { getCredentials } from "./store.js";

  const API_URL = "https://api.engmedapp.com/";

  const fields = { username: "" };

  const usernameForm = form(
    () => ({
      username: { value: fields.username, validators: ["required"] },
    }),
    {
      initCheck: false,
      validateOnChange: false,
      stopAtFirstError: false,
      stopAtFirstFieldError: false,
    }
  );

  let username_status, submitting;

  $: if (username_status === "success") {
    setTimeout(() => {
      $goto("/login");
    }, 5000);
  }

  async function usernameChange(username) {
    submitting = true;
    try {
      const res = await fetch(API_URL + "auth/users/me/", {
        method: "PATCH",
        body: JSON.stringify({
          username,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT " + localStorage.getItem("access"),
        },
      });
      if (res.ok && res.status === 200) {
        username_status = "successful";
        getCredentials();
      } else if (!res.ok && res.status === 400) {
        username_status = "exists";
      } else {
        console.log(res.status + res.statusText);
      }
    } catch (err) {
      console.log(err);
    }
    submitting = false;
  }

  const handleSubmit = () => {
    usernameForm.validate();
    if ($usernameForm.valid) {
      usernameChange(fields.username);
    }
  };
</script>

<section class="flex flex-wrap w-full h-screen">
  <div
    class="login-bg flex justify-start pl-4 md:pl-0 md:justify-around items-start bg-cover bg-center w-full md:w-1/2 xl:w-2/5"
  >
    <div class="flex items-center py-4">
      <div class="flex-shrink-0">
        <a href="/">
          <img
            class="h-8 w-8"
            src="/images/EMA-fullColor.png"
            alt="EngMedApp"
          />
        </a>
      </div>
      <a href="/">
        <p class="font-mulish font-bold text-ematext text-base ml-4">
          EngMed App
        </p>
      </a>
    </div>
  </div>
  <div
    class="flex flex-col justify-center pl-6 md:pl-12 xl:pl-24 w-full md:w-1/2 xl:w-3/5"
  >
    <h1
      class="-ml-2 font-mulish text-ematext font-semibold text-3xl xl:text-5xl mb-4"
    >
      Choose a Username
    </h1>
    <span class="font-mulish text-ematext text-xs font-normal"
      >You must choose a username to complete your registration or you can <a
        class="font-semibold"
        href="/logout"
        >logout
      </a>and do this later.</span
    >

    {#if username_status}
      <div class="message flex items-center mt-6 w-11/12 md:w-auto">
        {#if username_status === "exists"}
          <span class="font-mulish bg-red-600 bg-r px-3 py-2 text-white text-sm"
            >This username is taken. Please try a different one.</span
          >
        {:else if username_status === "successful"}
          <span class="font-mulish bg-green-500 px-3 py-2 text-white text-sm"
            >Username successfully set! Redirecting you to the homepage. <a
              class="text-primary"
              href="/"
              >Click here
            </a>if you're not redirected automatically.</span
          >
        {/if}
      </div>
    {/if}
    <form
      on:submit|preventDefault={handleSubmit}
      class="sign-in flex flex-col mt-10"
    >
      <label class="font-mulish text-ematext text-xs font-base" for="username"
        >Username</label
      >

      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 absolute ml-2 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <input
          class="border rounded-md pl-8 py-2 w-11/12 xl:w-2/5 mt-2 outline-none"
          placeholder="john_smith"
          bind:value={fields.username}
          name="username"
          type="text"
        />
      </div>
      {#if $usernameForm.fields.username.errors.includes("required")}
        <p class="text-red-600 font-poppins font-medium text-xs mt-2">
          Username can't be blank
        </p>
      {/if}

      <span class="flex mt-6 w-11/12 xl:w-2/5">
        <button
          type="submit"
          class="flex justify-center items-center gap-x-2 bg-primary hover:bg-opacity-80 w-full py-4 text-white text-xs rounded"
          >Submit{#if submitting}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="spinner h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd"
              />
            </svg>
          {/if}</button
        ></span
      >
    </form>
  </div>
</section>

<style>
  .login-bg {
    background-image: url("/images/sign-in.svg");
  }

  input::placeholder {
    font-family: "Mulish", sans-serif;
    font-size: 0.85rem;
    color: #818181;
  }

  input {
    border: 1px solid #dcdcdc;
  }

  input:focus {
    border: 2px solid #43989d;
  }

  .sign-in svg {
    top: 1.35rem;
  }

  .spinner {
    animation: transform 1s infinite;
    transform: rotate(180deg);
  }

  @keyframes transform {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }
</style>
