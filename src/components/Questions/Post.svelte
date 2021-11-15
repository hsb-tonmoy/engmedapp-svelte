<script>
  export let question;
  import { createEventDispatcher } from "svelte";

  import { filters } from "./store.js";

  const dispatch = createEventDispatcher();

  function onFilter(attr, prop) {
    $filters[attr] = { value: prop };
    dispatch("filter");
  }
</script>

<span class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
  ><a
    href="#"
    on:click={() => {
      onFilter("boards", question.level.name);
    }}>{question.board.name}</a
  >
  >
  <a
    href="#"
    on:click={() => {
      onFilter("levels", question.level.name);
    }}>{question.level.name}</a
  >
  >
  <a
    href="#"
    on:click={() => {
      onFilter("papers", question.paper.name);
    }}>{question.paper.name}</a
  >
  >
  <a
    href="#"
    on:click={() => {
      onFilter("years", question.year.name);
    }}>{question.year.name}</a
  >
  >
  <a
    href="#"
    on:click={() => {
      onFilter("sessions", question.session.name);
    }}>{question.session.name}</a
  ></span
>
<span
  class="question-title font-mulish text-base md:text-lg text-black font-medium"
  ><a href="/questions/{question.slug}">{question.title}</a>
</span>
<div class="question-details mt-4 ml-4">
  <span class="font-mulish text-sm text-black mt-2">
    {question.excerpt}
  </span>
</div>
<div
  class="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between items-center gap-x-1 mt-10"
>
  <div class="tags">
    <span class="font-mulish text-xs font-medium mr-2">Related Tags:</span>
    {#each question.tags as tag}
      <button
        class="px-3 py-1 text-primary text-xs rounded-full"
        style="background-color: #E9FDFF">{tag}</button
      >
    {/each}
  </div>
  <div class="builder">
    <button
      class="flex items-center px-3 py-2 mt-4 md:mt-0 text-prmary hover:text-white bg-white hover:bg-primary duration-300 border border-primary text-xs rounded-full"
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
<hr class="my-8" style="border-color: #CCD9E9" />
