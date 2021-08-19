<script>
  import { onMount } from "svelte";
  import authAxios from "../../components/Auth/authAxios";
  import Filters from "../../components/Questions/Filters.svelte";
  import { filters } from "../../components/Questions/store.js";
  import Posts from "../../components/Questions/Posts.svelte";
  import Spinner from "../../components/Spinner.svelte";

  const API_URL = "https://api.engmedapp.com/";

  let loading = true;

  $: questions_url = `questions/list?&board__name__in=${
    $filters.boards ? $filters.boards.name : ""
  }&level__name__in=${
    $filters.levels ? $filters.levels.name : ""
  }&paper__name__in=${
    $filters.papers ? encodeURIComponent($filters.papers.name) : ""
  }&year__name__in=${
    $filters.years ? $filters.years.name : ""
  }&session__name__in=${
    $filters.sessions ? encodeURIComponent($filters.sessions.name) : ""
  }`;

  let questions = [];

  const fetchQuestions = async () => {
    await authAxios
      .get(API_URL + questions_url)
      .then((res) => {
        questions = res.data;
      })
      .catch((err) => console.log(err))
      .finally(() => (loading = false));
  };

  const handleFilter = () => fetchQuestions();

  onMount(() => {
    fetchQuestions();
  });
</script>

<section style="background-color: #F0F0F0">
  <div
    class="flex flex-col justify-center items-center w-full px-2 py-20 bg-secondaryLight"
  >
    <h2
      class="font-mulish text-xl md:text-2xl lg:text-3xl leading-snug text-ematext text-center font-semibold"
    >
      Find question papers with answers <br /> Filter by Boards, Levels, Papers,
      Years and Sessions.
    </h2>
    <form
      class="flex flex-col gap-y-2 md:gap-0 md:flex-row md:flex-nowrap items-center mt-10 search-box"
    >
      <input
        type="search"
        name="search"
        class="flex flex-grow w-full max-w-full h-14 md:w-96 px-8 text-base bg-secondaryLight border border-primary rounded-l"
        placeholder="Write your question"
      />
      <button
        class="max-w-full w-full md:w-auto font-mulish bg-primary text-xs text-white text-center sm:px-12 md:px-16 px-8 h-14 rounded-r"
        type="submit">Search</button
      >
    </form>
  </div>
  <!-- Filter -->
  <div class="flex justify-center">
    <Filters on:filter={handleFilter} />
  </div>

  <!-- Questions Body -->
  <div
    class="flex flex-col flex-wrap gap-y-2 xl:flex-row xl:flex-nowrap xl:gap-y-0 xl:gap-x-4 justify-center py-20 mx-4 md:mx-8 xl:mx-16 2xl:mx-32 3xl:mx-48"
  >
    <!-- Questions List -->
    <article
      class:centered={loading}
      class="flex flex-col w-full xl:w-3/4 bg-white rounded-lg py-8 pl-4 pr-4 md:pl-5 xl:pl-7 md:pr-12 xl:pr-20"
    >
      {#if loading}
        <Spinner />
      {:else}
        <Posts {questions} />
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
</style>
