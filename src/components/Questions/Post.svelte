<script>
  import { bookmark, bookmarked } from "../svg/questions.js";
  import { user } from "../Auth/store.js";
  import authAxios from "../Auth/authAxios.js";

  export let question;

  function onFilter(attr, prop) {
    window.location.href = `/questions?${attr}=${encodeURIComponent(prop)}`;
  }

  let isBookmarked;

  $: if (question.is_bookmarked && question.is_bookmarked === 1) {
    isBookmarked = true;
  } else if (!question.is_bookmarked || question.is_bookmarked === 0) {
    isBookmarked = false;
  }

  async function handleBookmark() {
    if ($user) {
      let bookmark = isBookmarked ? 0 : 1;
      await authAxios
        .put(`questions/questions/${question.slug}?bookmark=${bookmark}`, {
          board: question.board.id,
          level: question.level.id,
          paper: question.paper.id,
          year: question.year.id,
          session: question.session.id,
          status: question.status,
          author: question.author.id,
          slug: question.slug,
        })
        .then((res) => {
          if (res.status === 200) {
            isBookmarked = !isBookmarked;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!$user) {
      window.location.href = "/login";
    }
  }
</script>

<div class="flex justify-between">
  <span class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
    ><a
      href="#"
      class="hover:text-black"
      on:click={() => {
        onFilter("board", question.board.name);
      }}>{question.board.name}</a
    >
    >
    <a
      href="#"
      class="hover:text-black"
      on:click={() => {
        onFilter("level", question.level.name);
      }}>{question.level.name}</a
    >
    >
    <a
      href="#"
      class="hover:text-black"
      on:click={() => {
        onFilter("paper", question.paper.name);
      }}>{question.paper.name}</a
    >
    >
    <a
      href="#"
      class="hover:text-black"
      on:click={() => {
        onFilter("year", question.year.name);
      }}>{question.year.name}</a
    >
    >
    <a
      href="#"
      class="hover:text-black"
      on:click={() => {
        onFilter("session", question.session.name);
      }}>{question.session.name}</a
    ></span
  >
  {#if isBookmarked}
    <span on:click={handleBookmark} class="bookmark cursor-pointer text-ematext"
      >{@html bookmarked}</span
    >
  {:else}
    <span on:click={handleBookmark} class="bookmark cursor-pointer text-ematext"
      >{@html bookmark}</span
    >
  {/if}
</div>
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
        on:click={() => {
          onFilter("tag", tag);
        }}
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
<hr class="my-8" style="border-color: rgba(204, 217, 233, 0.6)" />
