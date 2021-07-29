<script>
  import { onMount } from "svelte";
  const API_URL = "https://api.engmedapp.com/";
  import { convertDate } from "../../components/utils/convertDate.js";
  let questions = [];
  let boards = [];
  let levels = [];
  let papers = [];
  let years = [];
  let sessions = [];

  const fetchQuestions = async () => {
    const res = await fetch(API_URL + "questions/list/");
    const data = await res.json();

    questions = data;
  };

  const fetchBoards = async () => {
    const res = await fetch(API_URL + "questions/boards/");
    const data = await res.json();

    boards = data;
  };
  const fetchLevels = async () => {
    const res = await fetch(API_URL + "questions/levels/");
    const data = await res.json();

    levels = data;
  };
  const fetchPapers = async () => {
    const res = await fetch(API_URL + "questions/papers/");
    const data = await res.json();

    papers = data;
  };
  const fetchBYears = async () => {
    const res = await fetch(API_URL + "questions/years/");
    const data = await res.json();

    years = data;
  };
  const fetchSessions = async () => {
    const res = await fetch(API_URL + "questions/sessions/");
    const data = await res.json();

    sessions = data;
  };

  onMount(() => {
    fetchQuestions();
    fetchBoards();
    fetchLevels();
    fetchPapers();
    fetchBYears();
    fetchSessions();
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
    <div
      class="flex flex-wrap justify-center gap-y-2 md:gap-y-0 md:flex-nowrap gap-x-4 md:gap-x-2 w-full lg:w-11/12 lg:w-auto px-6 py-4 -m-8 bg-white"
      style="box-shadow: 0px 4px 10px rgba(67, 152, 157, 0.2);"
    >
      <button
        class="flex items-center justify-between font-mulish text-sm font-normal bg-secondaryLight rounded-sm w-2/5 md:w-auto px-4 py-2"
        >Board &nbsp; <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
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
        </svg></button
      >
      <button
        class="flex items-center justify-between font-mulish text-sm font-normal bg-secondaryLight rounded-sm w-2/5 md:w-auto px-4 py-2"
        >Level &nbsp; <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
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
        </svg></button
      ><button
        class="flex items-center justify-between font-mulish text-sm font-normal bg-secondaryLight rounded-sm w-2/5 md:w-auto px-4 py-2"
        >Paper &nbsp; <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
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
        </svg></button
      ><button
        class="flex items-center justify-between font-mulish text-sm font-normal bg-secondaryLight rounded-sm w-2/5 md:w-auto px-4 py-2"
        >Year &nbsp; <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
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
        </svg></button
      ><button
        class="flex items-center justify-between font-mulish text-sm font-normal bg-secondaryLight rounded-sm w-2/5 md:w-auto px-4 py-2"
        >Session &nbsp; <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
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
        </svg></button
      >
      <button
        class="font-mulish text-sm text-white font-normal bg-primary rounded-sm w-2/5 md:w-auto px-4 md:px-6 py-2"
        >Apply Filter</button
      >

      <button
        class="flex flex-col font-mulish font-medium mt-2 ml-1 md:ml-0 md:mt-0 md:ml-2 text-xs text-ematext"
        ><span class="flex items-center mb-1" style="color: #677D8D"
          >Sort By &nbsp; <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg></span
        >Relevance</button
      >
    </div>
  </div>

  <!-- Questions Body -->
  <div
    class="flex flex-col flex-wrap gap-y-2 xl:flex-row xl:flex-nowrap xl:gap-y-0 xl:gap-x-4 justify-center py-20 mx-4 md:mx-8 xl:mx-16 2xl:mx-32"
  >
    <!-- Questions List -->
    <article
      class="flex flex-col w-full xl:w-3/4 bg-white rounded-lg py-8 pl-4 pr-4 md:pl-5 xl:pl-7 md:pr-12 xl:pr-20"
    >
      <span class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
        >Edexcel > O > Computer Science > 2010 > February</span
      >
      <span
        class="question-title font-mulish text-base md:text-lg text-black font-medium"
        >Question 1: The net horizontal force on a box F as a function of the
        horizontal position x is shown below.
      </span>
      <div class="question-details mt-4 ml-4">
        <img src="/images/question-detail-test.png" alt="question-detail" />
        <span class="font-mulish text-sm text-black mt-2">
          What is the work done on the box from x = 0m to 2.0m? Round answer to
          two significant digits.
        </span>
      </div>
      <div
        class="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between items-center gap-x-1 mt-10"
      >
        <div class="tags">
          <span class="font-mulish text-xs font-medium mr-2">Related Tags:</span
          >
          <button
            class="px-3 py-1 text-primary text-xs rounded-full"
            style="background-color: #E9FDFF">Edexcel</button
          >
          <button
            class="px-3 py-1 text-primary text-xs rounded-full"
            style="background-color: #E9FDFF">Computer Science</button
          >
          <button
            class="px-3 py-1 text-primary text-xs rounded-full"
            style="background-color: #E9FDFF">2010</button
          >
        </div>
        <div class="builder">
          <button
            class="flex items-center px-3 py-2 text-white bg-primary text-xs rounded-full"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>&nbsp; Add to builder</button
          >
        </div>
      </div>
      <hr class="mt-8 mb-16" style="border-color: #CCD9E9" />
    </article>
    <!-- Sidebar -->
    <aside class="flex flex-col items-start w-full xl:w-1/4">
      <div
        class="viewed-questions flex flex-col w-full items-start bg-white rounded-lg px-4 md:px-7 pt-8"
      >
        <h3 class="text-sm text-lg lg:text-base 2xl:text-lg font-semibold">
          Most viewed questions
        </h3>
        <ul class="list-none mt-5">
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation of momentum from Newton’s Laws?
            <hr class="my-4" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation?
            <hr class="my-4" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation of momentum from Newton’s Laws?
            <hr class="my-4" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation of momentum from Newton’s Laws?
            <hr class="my-4" style="border-color: #CCD9E9" />
          </li>
          <li class="font-mulish text-sm" style="color: #274C67">
            How do I prove conservation?
            <hr class="my-4" style="border-color: #CCD9E9" />
          </li>
        </ul>
      </div>
      <div
        class="teachers flex flex-col items-start bg-white w-full rounded-lg px-4 mt-4 md:px-7 pt-8"
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

<style>
  .viewed-questions > ul > li:last-of-type > hr {
    display: hidden;
  }
</style>
