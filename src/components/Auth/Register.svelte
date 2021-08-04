<script>
  import { register, register_status } from "./store.js";
  import { getAuthURL } from "./socialStore.js";
  let email, name, password, re_password;
  const handleSubmit = () => register(email, name, password, re_password);

  export let signin = false;

  $: if ($register_status === "success") {
    email = "";
    name = "";
    password = "";
    re_password = "";
  }
</script>

<h1
  class="-ml-2 font-mulish text-ematext font-semibold text-3xl xl:text-5xl mb-8"
>
  Welcome to EMA
</h1>
<span class="font-mulish text-ematext text-sm font-normal"
  >Already have an account? <a
    on:click={() => {
      signin = false;
    }}
    href="#"
    class="font-semibold"
    style="color: #26C3E5">Sign in</a
  ></span
>
{#if register_status}
  <div class="message flex items-center mt-6 w-11/12 md:w-auto">
    {#if $register_status === "success"}
      <span class="font-mulish bg-green-500 px-3 py-2 text-white text-sm"
        >Registration Successful! Please check your e-mail for an activation
        link.</span
      >
    {:else if $register_status === "email_exists"}
      <span class="font-mulish bg-red-600 bg-r px-3 py-2 text-white text-sm"
        >An account already exists with this e-mail. <a
          class="text-ematext"
          on:click={() => {
            signin = false;
          }}
          href="">Click here</a
        > to sign-in</span
      >
    {:else if $register_status === "password_mismatch"}
      <span class="font-mulish bg-red-600 bg-r px-3 py-2 text-white text-sm"
        >Your passwords don't match. Please re-type the passwords and try again.</span
      >
    {:else if $register_status === "password_similar"}
      <span class="font-mulish bg-red-600 bg-r px-3 py-2 text-white text-sm"
        >Your password is too similar to your name/e-mail. Please choose a
        different password and try again.</span
      >
    {/if}
  </div>
{/if}
<form
  on:submit|preventDefault={handleSubmit}
  class="sign-in flex flex-col mt-6"
>
  <label class="font-mulish text-ematext text-xs font-base" for="email"
    >E-mail</label
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
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <input
      class="border rounded-md pl-8 py-2 w-11/12 xl:w-2/5 mt-2 outline-none"
      placeholder="yourmail@email.com"
      bind:value={email}
      name="email"
      type="email"
    />
  </div>
  <label class="font-mulish text-ematext text-xs font-base mt-4" for="name"
    >First name</label
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
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <input
      class="border rounded-md pl-8 py-2 w-11/12 xl:w-2/5 mt-2 outline-none"
      placeholder="Your name"
      bind:value={name}
      name="name"
      type="text"
    />
  </div>
  <label class="font-mulish text-ematext text-xs font-base mt-4" for="password"
    >Password</label
  >

  <div class="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 absolute ml-2 text-primary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clip-rule="evenodd"
      />
    </svg>
    <input
      class="border rounded-md pl-8 py-2 w-11/12 xl:w-2/5 mt-2 outline-none"
      placeholder="********"
      bind:value={password}
      name="password"
      type="password"
    />
  </div>
  <label class="font-mulish text-ematext text-xs font-base mt-4" for="password"
    >Confirm password</label
  >

  <div class="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 absolute ml-2 text-primary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clip-rule="evenodd"
      />
    </svg>
    <input
      class="border rounded-md pl-8 py-2 w-11/12 xl:w-2/5 mt-2 outline-none"
      placeholder="********"
      bind:value={re_password}
      name="password"
      type="password"
    />
  </div>
  <span class="flex justify-end mt-2 w-11/12 xl:w-2/5">
    <a
      href="/"
      class="font-mulish text-xs text-ematext hover:text-primary"
      style="color: #4F4F4F">Forgot Password?</a
    >
  </span>
  <span class="flex mt-6 w-11/12 xl:w-2/5">
    <button
      type="submit"
      class="bg-primary hover:bg-opacity-80 w-full py-4 text-white text-xs rounded"
      >Sign Up</button
    ></span
  >
</form>

<style>
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
</style>
