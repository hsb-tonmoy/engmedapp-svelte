<!-- routify:options title="Questions" -->
<script>
  import { metatags, params } from "@roxi/routify";
  import { onMount } from "svelte";
  import authAxios from "../../components/Auth/authAxios";
  import Filters from "../../components/Questions/Filters.svelte";
  import { filters, sort } from "../../components/Questions/store.js";
  import Search from "../../components/Layout/Search.svelte";
  import Posts from "../../components/Questions/Posts.svelte";
  import Pagination from "svelte-pagination";
  import Spinner from "../../components/Spinner.svelte";
  import NotFound from "../../components/NotFound.svelte";

  const API_URL = import.meta.env.VITE_API_URL;

  metatags.title = "EngMedApp - Questions";
  metatags.description = "EngMedApp - Questions";

  let loading = true;

  if ($params) {
    if ($params["board"] && $params["board"] !== "") {
      $filters.boards = { value: $params["board"] };
    }
    if ($params["level"] && $params["level"] !== "") {
      $filters.levels = { value: $params["level"] };
    }
    if ($params["paper"] && $params["paper"] !== "") {
      $filters.papers = { value: decodeURIComponent($params["paper"]) };
    }
    if ($params["year"] && $params["year"] !== "") {
      $filters.years = { value: $params["year"] };
    }
    if ($params["session"] && $params["session"] !== "") {
      $filters.sessions = { value: decodeURIComponent($params["session"]) };
    }
    if ($params["tag"] && $params["tag"] !== "") {
      $filters.tags = { name: $params["tag"] };
    }
    if ($params["query"] && $params["query"] !== "") {
      $filters.query = $params["query"];
    }
  }

  $: questions_url = `questions/list?&board__name__in=${
    $filters.boards ? $filters.boards.value : ""
  }&level__name__in=${
    $filters.levels ? $filters.levels.value : ""
  }&paper__name__in=${
    $filters.papers ? encodeURIComponent($filters.papers.value) : ""
  }&year__name__in=${
    $filters.years ? $filters.years.value : ""
  }&session__name__in=${
    $filters.sessions ? encodeURIComponent($filters.sessions.value) : ""
  }&tags__name__in=${
    $filters.tags ? encodeURIComponent($filters.tags.name) : ""
  }&query=${
    $filters.query ? encodeURIComponent($filters.query) : ""
  }&ordering=${$sort ? $sort : ""}`;

  let questions = [];

  const fetchQuestions = async (page = 1) => {
    await authAxios
      .get(API_URL + questions_url + `&page=${page}`)
      .then((res) => {
        questions = res.data;
      })
      .catch((err) => console.log(err))
      .finally(() => (loading = false));
  };

  const handleFilter = () => fetchQuestions();

  let checkedValue = 1;

  function handlePagination(e) {
    const { selected } = e.detail;
    checkedValue = selected;
    fetchQuestions(checkedValue);
  }

  onMount(() => {
    fetchQuestions();
  });
</script>

<!-- routify:options index=2 -->

<section style="background-color: #F0F0F0">
  <div
    class="flex flex-col justify-center items-center w-full px-2 py-20 bg-secondaryLight"
  >
    <h2
      id="slogan"
      class="font-mulish text-xl md:text-2xl lg:text-3xl leading-snug text-ematext text-center font-semibold"
    >
      Find question papers with answers <br /> Filter by Boards, Levels, Papers,
      Years and Sessions.
    </h2>
    <Search />
  </div>
  <!-- Filter -->
  <div class="flex justify-center">
    <Filters on:filter={handleFilter} />
  </div>

  <!-- Questions Body -->
  <div class="flex flex-col mx-4 md:mx-8 xl:mx-16 2xl:mx-32 3xl:mx-48">
    {#if $params["query"]}
      <div class="search-terms pt-20 ml-2 text-lg text-gray-700 italic">
        <span class="font-bold">Searching for:</span>

        {decodeURIComponent($params["query"])}
      </div>
    {/if}
    <div
      class="flex flex-col items-start flex-wrap gap-y-2 xl:flex-row xl:flex-nowrap xl:gap-y-0 xl:gap-x-4 justify-center py-20"
    >
      <!-- Questions List -->
      <article
        class:centered={loading || questions.count === 0}
        class="flex flex-col w-full xl:w-3/4 bg-white rounded-lg pt-8 pb-6 pl-4 pr-4 md:pl-5 xl:pl-7 md:pr-12 xl:pr-20"
      >
        {#if loading}
          <Spinner />
        {:else if questions.count > 0}
          <Posts {questions} />
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
        {:else if questions.count === 0}
          <NotFound />
          <p class="font-mulish text-sm mt-4">
            Sorry, but it looks like we couldn't find what you're looking for!
          </p>
        {/if}
      </article>
      <!-- Sidebar -->
      <aside class="flex flex-col items-start w-full xl:w-1/4">
        <div
          class="viewed-questions flex flex-col w-full items-start bg-white rounded-lg px-4 md:px-7 pt-8 pb-6"
        >
          <h3 class="text-sm text-lg lg:text-base 2xl:text-lg font-semibold">
            Most viewed questions
          </h3>
          <ul class="list-none mt-5">
            <li class="font-mulish text-sm" style="color: #274C67">
              How do I prove conservation of momentum from Newton’s Laws?
              <hr class="my-4 w-full" style="border-color: #CCD9E9" />
            </li>
            <li class="font-mulish text-sm" style="color: #274C67">
              How do I prove conservation?
              <hr class="my-4 w-full" style="border-color: #CCD9E9" />
            </li>
            <li class="font-mulish text-sm" style="color: #274C67">
              How do I prove conservation of momentum from Newton’s Laws?
              <hr class="my-4 w-full" style="border-color: #CCD9E9" />
            </li>
            <li class="font-mulish text-sm" style="color: #274C67">
              How do I prove conservation of momentum from Newton’s Laws?
              <hr class="my-4 w-full" style="border-color: #CCD9E9" />
            </li>
            <li class="font-mulish text-sm" style="color: #274C67">
              How do I prove conservation?
              <hr class="my-4 w-full" style="border-color: #CCD9E9" />
            </li>
          </ul>
        </div>
        <div
          class="teachers flex flex-col items-start bg-white w-full rounded-lg px-4 mt-4 md:px-7 pt-8 pb-6"
        >
          <h3 class="text-sm text-lg lg:text-base 2xl:text-lg font-semibold">
            Recommended Teachers
          </h3>
          <hr class="mt-3 mb-7 border-2 w-16" style="border-color: #80BFC2" />
          <!-- Teachers -->
          <div class="flex items-center gap-x-4 w-full">
            <img src="/images/Ellipse 5.png" class="w-10 h-10" alt="andrey" />
            <span class="flex flex-col w-full">
              <p class="text-ematextblue text-sm font-mulish">Andrey Popov</p>
              <p class="text-ematextblue text-xs font-light font-mulish">
                School name
              </p>
            </span>
          </div>
          <hr class="my-4 w-full" style="border-color: #CCD9E9" />
          <div class="flex items-center gap-x-4 w-full">
            <img src="/images/Ellipse 6.png" class="w-10 h-10" alt="andrey" />
            <span class="flex flex-col w-full">
              <p class="text-ematextblue text-sm font-mulish">Andrey Popov</p>
              <p class="text-ematextblue text-xs font-light font-mulish">
                School name
              </p>
            </span>
          </div>
          <hr class="my-4 w-full" style="border-color: #CCD9E9" />
          <div class="flex items-center gap-x-4 w-full">
            <img src="/images/Ellipse 7.png" class="w-10 h-10" alt="andrey" />
            <span class="flex flex-col w-full">
              <p class="text-ematextblue text-sm font-mulish">Andrey Popov</p>
              <p class="text-ematextblue text-xs font-light font-mulish">
                School name
              </p>
            </span>
          </div>
          <hr class="my-4 w-full" style="border-color: #CCD9E9" />
        </div>
        <div class="ads w-full">
          <img class="w-16 h-16" src="/images/ad.png" alt="ad" />
        </div>
      </aside>
    </div>
  </div>
</section>

<style lang="postcss">
  .viewed-questions > ul > li:last-of-type > hr,
  .teachers > hr:last-of-type,
  article > :global(hr:last-of-type) {
    display: none;
  }

  .centered {
    @apply justify-center items-center;
  }

  :global(.pagination-container) {
    display: flex !important;
    padding: 0 !important;
    @apply self-end items-center gap-x-2 mt-16;
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
