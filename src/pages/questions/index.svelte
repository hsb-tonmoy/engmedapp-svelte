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

<section style="background-color: #E5E5E5">
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
      class="flex gap-x-4 w-auto px-6 py-4 -m-8 bg-white"
      style="box-shadow: 0px 4px 10px rgba(67, 152, 157, 0.2);"
    >
      <button
        class="flex items-center font-mulish text-sm font-normal bg-secondaryLight rounded-sm px-4 py-2"
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
        class="flex items-center font-mulish text-sm font-normal bg-secondaryLight rounded-sm px-4 py-2"
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
        class="flex items-center font-mulish text-sm font-normal bg-secondaryLight rounded-sm px-4 py-2"
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
        class="flex items-center font-mulish text-sm font-normal bg-secondaryLight rounded-sm px-4 py-2"
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
        class="flex items-center font-mulish text-sm font-normal bg-secondaryLight rounded-sm px-4 py-2"
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
        class="font-mulish text-sm text-white font-normal bg-primary rounded-sm px-6 py-2"
        >Apply Filter</button
      >

      <button
        class="flex flex-col font-mulish font-medium ml-2 text-xs text-ematext"
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
</section>
