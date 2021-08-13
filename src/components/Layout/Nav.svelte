<script>
  import { user } from "../Auth/store.js";
  import { isActive, url, layout } from "@roxi/routify";
  import { fade } from "svelte/transition";
  let profileDropdown = true;
  let hamburger = true;
</script>

<!-- Nav Starts -->
<nav
  class="bg-white"
  on:click|self={() => {
    if (profileDropdown === false) {
      profileDropdown = true;
    }
  }}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between lg:justify-around h-16">
      <div class="flex items-center">
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
      <!-- Full Menu -->
      <div class="hidden lg:flex gap-x-6 justify-around items-center">
        <a
          href="/questions"
          class="text-sm text-ematext hover:underline hover:text-primary font-mulish"
          class:font-bold={$isActive("/questions")}
          class:text-primary={$isActive("/questions")}>Question papers</a
        >
        <a
          href="/teachers"
          class="text-sm text-ematext hover:underline hover:text-primary font-mulish"
          >Teacher's database</a
        >
        {#if $user}
          <div class="logged-in flex items-center">
            <!-- Builder Icon -->
            <a href="/questions" class="ml-20 text-sm text-ematext"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg></a
            >
            <!-- Notification Icon -->
            <a href="/questions" class="ml-4 text-sm text-ematext"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg></a
            >
            <div
              on:click={() => (profileDropdown = !profileDropdown)}
              class="user flex items-center gap-x-2 ml-10"
            >
              <a href="#"
                ><img
                  class="w-8 h-8 rounded-full"
                  src={$user.profile_pic}
                  alt="profile_pic"
                /></a
              >
              <!-- Profile Dropdown -->
              <div
                class:hidden={profileDropdown}
                class="absolute flex flex-col gap-y-2 top-12 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none font-mulish text-xs text-ematext"
              >
                <a
                  href="/profile"
                  class="px-4 py-3 hover:bg-gray-100 duration-300">Profile</a
                >
                <a href="#" class="px-4 py-3 hover:bg-gray-100 duration-300"
                  >Bookmarks</a
                >
                <a
                  href="/logout"
                  class="px-4 py-3 hover:bg-red-400 hover:text-white duration-300"
                  >Logout</a
                >
              </div>
              <a href="#" class="font-mulish text-xs text-ematext"
                >{$user.username}</a
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        {:else}
          <div class="flex ml-8 gap-x-6 items-center">
            <a
              href="/login?register=true"
              class="text-sm text-ematext hover:underline hover:text-primary font-mulish"
              >Sign up</a
            ><a
              href="/login"
              class="px-10 py-2 rounded text-sm text-white bg-primary font-mulish"
              >Login</a
            >
          </div>
        {/if}
      </div>
      <!-- Hamburger Menu -->
      <div
        transition:fade
        on:click={() => {
          hamburger = !hamburger;
        }}
        class="flex lg:hidden"
      >
        {#if hamburger}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        {/if}
      </div>
    </div>
  </div>
  <!-- Mobile Menu -->
  <div
    class:hidden={hamburger}
    class="mobile-menu flex flex-col gap-y-2 absolute w-full px-5 py-5 bg-white font-mulish text-sm text-ematext"
  >
    <a
      href="/"
      class="hover:text-primary py-2"
      class:font-bold={$isActive("/")}
      class:text-primary={$isActive("/")}>Home</a
    >
    <a
      href="/questions"
      class="hover:text-primary py-2"
      class:font-bold={$isActive("/questions")}
      class:text-primary={$isActive("/questions")}>Question papers</a
    >
    <a href="/teachers" class="hover:text-primary py-2">Teacher's database</a>
    <hr class="w-full" style="border-color: #F3F4F6" />
    <div class="user-section flex flex-wrap justify-between">
      {#if $user}
        <div class="flex gap-x-2">
          <div class="logged-in flex items-center">
            <!-- Builder Icon -->
            <a href="/questions" class="text-sm text-ematext"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg></a
            >
            <!-- Notification Icon -->
            <a href="/questions" class="ml-4 text-sm text-ematext"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg></a
            >
          </div>
          <div class="flex">
            <div class="user flex items-center gap-x-2">
              <a href="/user"
                ><img
                  class="w-8 h-8 rounded-full"
                  src={$user.profile_pic}
                  alt="profile_pic"
                /></a
              >

              <a href="#" class="font-mulish text-xs text-ematext"
                >{$user.username}</a
              >
            </div>
          </div>
        </div>
        <hr class="w-full mt-2" style="border-color: #F3F4F6" />
        <div class="flex gap-x-4 w-full">
          <a href="/profile" class="py-3 hover:bg-gray-100 duration-300"
            >Profile</a
          >
          <a href="#" class="py-3 hover:bg-gray-100 duration-300">Bookmarks</a>
          <a
            href="/logout"
            class="py-3 hover:bg-red-400 hover:text-white duration-300"
            >Logout</a
          >
        </div>
      {:else}
        <div class="flex gap-x-6 items-center">
          <a
            href="/login?register=true"
            class="text-sm text-ematext hover:underline hover:text-primary font-mulish"
            >Sign up</a
          ><a
            href="/login"
            class="px-10 py-2 rounded text-sm text-white bg-primary font-mulish"
            >Login</a
          >
        </div>
      {/if}
    </div>
  </div>
</nav>

<style>
  nav,
  .mobile-menu {
    box-shadow: 0px 4px 10px #d2f0f2;
  }
</style>
