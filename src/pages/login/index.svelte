<script>
  import { login, authenticating, user } from "../../components/Auth/store.js";
  import { getAuthURL } from "../../components/Auth/socialStore.js";
  import { goto } from "@roxi/routify";
  // if user is already logged in, we don't want them on the login page
  $: if ($user) $goto("/");

  let email, password;

  const handleSubmit = () => login(email, password);
</script>

<!-- routify:options index=false -->
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
      class="font-mulish text-ematext font-semibold text-3xl xl:text-5xl mb-8"
    >
      Sign in to EMA
    </h1>
    <span class="font-mulish text-ematext text-sm font-normal"
      >Don’t have account? <a
        href="/"
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
      <label
        class="font-mulish text-ematext text-xs font-base mt-4"
        for="password">Password</label
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
</style>
