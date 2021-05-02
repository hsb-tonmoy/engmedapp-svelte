<script>
  import Upload from "./upload.svelte";
  let upload;

  let modalState = false;
</script>

<button
  on:click={() => {
    modalState = !modalState;
  }}
  class="tracking-wider text-white inline-flex items-center space-x-2 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white text-sm"
>
  <span> Add Media </span>

  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
      />
    </svg>
  </span>
</button>

{#if modalState}
  <!-- component -->
  <div class="bg-gray-500 h-screen w-screen sm:px-8 md:px-16 sm:py-8">
    <main class="container mx-auto max-w-screen-lg h-full">
      <!-- file upload modal -->
      <article
        aria-label="File Upload Modal"
        class="relative h-full flex flex-col bg-white shadow-xl rounded-md"
      >
        <!-- overlay -->
        <div
          id="overlay"
          class="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md"
        />

        <!-- scroll area -->
        <section class="h-full overflow-auto p-8 w-full h-full flex flex-col">
          <Upload bind:this={upload} />
        </section>

        <!-- sticky footer -->
        <footer class="flex justify-end px-8 pb-8 pt-4">
          <button
            on:click={() => {
              upload.handleFilesUpload();
            }}
            id="submit"
            class="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
          >
            Upload now
          </button>
          <button
            on:click={() => {
              modalState = !modalState;
            }}
            id="cancel"
            class="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
          >
            Cancel
          </button>
        </footer>
      </article>
    </main>
  </div>
{/if}
