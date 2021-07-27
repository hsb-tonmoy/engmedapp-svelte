<script>
  import { user } from "./Auth/store.js";
  import { isActive, url, layout } from "@roxi/routify";

  let menuProfile = true;

  function toggleProfile() {
    menuProfile = !menuProfile;
  }
</script>

<nav class="bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-around h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="h-8 w-8" src="/images/EMA-fullColor.png" alt="Workflow" />
        </div>
        <p class="font-mulish font-bold text-ematext text-base ml-4">
          EMA EngMed App
        </p>
      </div>
      <div class="flex justify-around items-center">
        <a
          href="/questions"
          class="text-sm text-ematext hover:underline hover:text-primary font-mulish"
          >Question papers</a
        >
        <a
          href="/questions"
          class="ml-8 text-sm text-ematext hover:underline hover:text-primary font-mulish"
          >Teacher's database</a
        >

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
      </div>
    </div>
  </div>
</nav>
