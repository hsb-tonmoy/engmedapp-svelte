<script>
  import { onMount } from "svelte";
  import Pagination from "svelte-pagination";
  import Spinner from "../Spinner.svelte";
  import NotFound from "../NotFound.svelte";
  import authAxios from "../Auth/authAxios";

  import Post from "./Post.svelte";

  const API_URL = import.meta.env.VITE_API_URL;

  export let username;

  let loading = true;

  $: questions = { results: [] };

  $: questions_url = `questions/questions/?explanations__author__username=${username}`;

  const fetchQuestions = async (page = 1) => {
    await authAxios
      .get(API_URL + questions_url + `&page=${page}`)
      .then((res) => {
        questions = res.data;
      })
      .catch((err) => console.log(err))
      .finally(() => (loading = false));
  };

  onMount(async () => {
    await fetchQuestions();
  });

  let checkedValue = 1;

  function handlePagination(e) {
    const { selected } = e.detail;
    checkedValue = selected;
    fetchQuestions(checkedValue);
  }
</script>

<div class="border rounded-md py-5 px-6" style="border-color: #CCD9E9">
  {#if loading}
    <Spinner />
  {:else if questions.count > 0}
    {#each questions.results as question, index (index)}
      <Post {question} />
    {/each}
    <div class="flex flex-col">
      <Pagination
        pageCount={questions.total_pages + 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        on:change={handlePagination}
        containerClassName={"pagination-container"}
        pageClassName={"page-class"}
        pageLinkClassName={"page-link-class"}
        activeClassName={"page-active-class"}
        activeLinkClassName={"page-active-link-class"}
        previousClassName={"previous-class"}
        previousLinkClassName={"previous-link-class"}
        nextClassName={"next-class"}
        nextLinkClassName={"next-link-class"}
        breakClassName={"break-class"}
        breakLinkClassName={"break-link-class"}
      />
    </div>
  {:else if questions.count === 0}
    <NotFound />
    <p class="font-mulish text-sm mt-4">
      Sorry, but it looks like we couldn't find what you're looking for!
    </p>
  {/if}
</div>

<style lang="postcss">
  :global(.pagination-container) {
    display: flex !important;
    padding: 0 !important;
    @apply self-end items-center gap-x-2 mt-4;
  }

  :global(.page-class, .break-class) {
    @apply border px-3 pb-1 rounded-md;
    border-color: #dfe3e8;
  }

  :global(.page-class:hover, .break-class:hover) {
    @apply border-primary px-3 pb-1 rounded-md;
  }

  :global(.page-link-class, .previous-link-class, .next-link-class, .break-link-class) {
    @apply font-mulish text-xs text-ematextgray font-extrabold;
  }

  :global(.page-active-class) {
    @apply border-primary bg-primary;
  }

  :global(.page-active-link-class) {
    @apply text-white;
  }

  :global(.previous-class, .next-class) {
    background-color: #caf4f8;
    border-color: #caf4f8;
    @apply border p-2 rounded-md;
  }
</style>
