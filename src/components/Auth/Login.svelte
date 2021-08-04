<script>
  import { login, authenticating, user } from "./store.js";
  import { getAuthURL } from "./socialStore.js";
  let email, password;
  const handleSubmit = () => login(email, password);

  export let signin = false;
</script>

<h1
  class="-ml-2 font-mulish text-ematext font-semibold text-3xl xl:text-5xl mb-8"
>
  Sign in to EMA
</h1>
<span class="font-mulish text-ematext text-sm font-normal"
  >Don’t have account? <a
    on:click={() => {
      signin = true;
    }}
    href="#"
    class="font-semibold"
    style="color: #26C3E5">Sign up</a
  ></span
>

<form
  on:submit|preventDefault={handleSubmit}
  class="sign-in flex flex-col mt-10"
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
      >Sign In</button
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
