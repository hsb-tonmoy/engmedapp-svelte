<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import Select from "svelte-select";
  import { filters, sort } from "./store.js";
  import loadTags from "./tags.js";
  import Item from "./TagItem.svelte";

  const API_URL = import.meta.env.VITE_API_URL;

  const dispatch = createEventDispatcher();

  let boards = [];
  let levels = [];
  let papers = [];
  let years = [];
  let sessions = [];

  const tagIdentifier = "id";
  const getTagLabel = (option) => option.name;
  const getSelectionLabel = (option) => option.name;

  let sorting = [
    { label: "Date Added: Newest", value: "published" },
    { label: "Date Added: Oldest", value: "-published" },
    { label: "A-Z", value: "title" },
    { label: "Z-A", value: "-title" },
    { label: "By Board", value: "board" },
    { label: "By Level", value: "level" },
    { label: "By Paper", value: "paper" },
    { label: "By Year", value: "year" },
    { label: "By Session", value: "session" },
  ];
  const fetchBoards = async () => {
    const res = await fetch(API_URL + "questions/board/");
    const data = await res.json();

    boards = data;

    boards = boards.map((elem) => {
      return {
        ...elem,
        value: elem.name,
        label: elem.name,
      };
    });
  };
  const fetchLevels = async () => {
    const res = await fetch(API_URL + "questions/level/");
    const data = await res.json();

    levels = data;

    levels = levels.map((elem) => {
      return {
        ...elem,
        value: elem.name,
        label: elem.name,
      };
    });
  };
  const fetchPapers = async () => {
    const res = await fetch(API_URL + "questions/paper/");
    const data = await res.json();

    papers = data;

    papers = papers.map((elem) => {
      return {
        ...elem,
        value: elem.name,
        label: elem.name,
      };
    });
  };
  const fetchYears = async () => {
    const res = await fetch(API_URL + "questions/year/");
    const data = await res.json();

    years = data;

    years = years.map((elem) => {
      return {
        ...elem,
        value: elem.name,
        label: elem.name,
      };
    });
  };
  const fetchSessions = async () => {
    const res = await fetch(API_URL + "questions/session/");
    const data = await res.json();

    sessions = data;

    sessions = sessions.map((elem) => {
      return {
        ...elem,
        value: elem.name,
        label: elem.name,
      };
    });
  };

  onMount(() => {
    fetchBoards();
    fetchLevels();
    fetchPapers();
    fetchYears();
    fetchSessions();
  });
</script>

<div
  class="flex flex-wrap justify-center gap-y-2 md:gap-y-0 md:flex-nowrap gap-x-4 md:gap-x-2 w-full lg:w-auto px-6 lg:px-6 md:px-2 py-4 -m-8 bg-white font-mulish text-sm font-normal"
  style="box-shadow: 0px 4px 10px rgba(67, 152, 157, 0.2);"
>
  <span class="select-filter">
    <Select
      items={boards}
      placeholder="Boards"
      value={$filters.boards ? $filters.boards.value : null}
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        $filters["boards"] = event.detail;
      }}
      on:clear={() => {
        $filters["boards"] = null;
      }}
    />
  </span>
  <span class="select-filter">
    <Select
      items={levels}
      value={$filters.levels ? $filters.levels.value : null}
      placeholder="Levels"
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        $filters["levels"] = event.detail;
      }}
      on:clear={() => {
        $filters["levels"] = null;
      }}
    />
  </span>
  <span class="select-filter">
    <Select
      items={papers}
      value={$filters.papers ? $filters.papers.value : null}
      placeholder="Papers"
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        $filters["papers"] = event.detail;
      }}
      on:clear={() => {
        $filters["papers"] = null;
      }}
    />
  </span>
  <span class="select-filter">
    <Select
      items={years}
      value={$filters.years ? $filters.years.value : null}
      placeholder="Years"
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        $filters["years"] = event.detail;
      }}
      on:clear={() => {
        $filters["years"] = null;
      }}
    />
  </span>
  <span class="select-filter">
    <Select
      items={sessions}
      value={$filters.sessions ? $filters.sessions.value : null}
      placeholder="Sessions"
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        $filters["sessions"] = event.detail;
      }}
      on:clear={() => {
        $filters["sessions"] = null;
      }}
    />
  </span>
  <span class="select-filter">
    <Select
      loadOptions={loadTags}
      {tagIdentifier}
      {getSelectionLabel}
      {getTagLabel}
      {Item}
      value={$filters.tags ? $filters.tags : null}
      placeholder="Tags"
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        $filters["tags"] = event.detail;
      }}
      on:clear={() => {
        $filters["tags"] = null;
      }}
    />
  </span>
  <button
    on:click={() => dispatch("filter")}
    class="text-white bg-primary rounded-sm w-2/5 md:w-auto md:text-xs px-4 md:px-6 py-2"
    >Apply Filter</button
  >

  <button
    class="flex flex-col font-medium mt-2 ml-1 md:ml-0 md:mt-0 md:ml-2 text-xs text-ematext"
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
    ><select
      class="-ml-1"
      bind:value={$sort}
      on:change={() => dispatch("filter")}
    >
      {#each sorting as sorts, index (index)}
        <option value={sorts.value}>
          {sorts.label}
        </option>
      {/each}
    </select>
  </button>
</div>

<style lang="postcss">
  .select-filter {
    --background: #f1feff;
    --border: 1px solid #f1feff;
    --borderHoverColor: #f1feff;
    --borderFocusColor: #43989d;
    --borderRadius: 0.125rem;
    --placeholderColor: #16355c;
  }

  .select-filter :global(.indicator) {
    @apply flex items-center;
  }

  .select-filter :global(svg) {
    height: 70%;
    @apply text-ematext;
  }
</style>
