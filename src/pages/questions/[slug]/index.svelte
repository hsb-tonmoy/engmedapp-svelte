<script>
  import { metatags } from "@roxi/routify";
  import { convertDate } from "../../../components/utils/convertDate.js";
  import Explanation from "../../../components/Questions/Explanation.svelte";

  export let scoped;
  $: question = scoped.question;

  metatags.title = `EngMedApp - ${scoped.question.title}`;
  metatags.description = scoped.question.excerpt;

  let numOfAnswers = scoped.question.explanations.length;

  if (scoped.question.verified_explanation.length > 1) {
    numOfAnswers = numOfAnswers + 1;
  }

  function onFilter(attr, prop) {
    window.location.href = `/questions?${attr}=${encodeURIComponent(prop)}`;
  }
</script>

<svelte:head>
  <script
    src="https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image"></script>
</svelte:head>

<section>
  <!-- Questions Body -->
  <div
    class="flex flex-col flex-wrap gap-y-2 xl:flex-row xl:flex-nowrap xl:gap-y-0 xl:gap-x-4 px-4 md:px-8 lg:px-12 xl:px-48 3xl:px-100 py-4 xl:py-8"
  >
    <article
      class="flex flex-col w-full xl:w-3/4 bg-white py-8 md:pl-5 xl:pl-7 md:pr-12 xl:pr-16"
    >
      <!-- Questions Details -->
      <div class="flex flex-col md:pl-4">
        <span class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
          ><a
            href="#"
            on:click={() => {
              onFilter("board", question.board.name);
            }}>{question.board.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("level", question.level.name);
            }}>{question.level.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("paper", question.paper.name);
            }}>{question.paper.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("year", question.year.name);
            }}>{question.year.name}</a
          >
          >
          <a
            href="#"
            on:click={() => {
              onFilter("session", question.session.name);
            }}>{question.session.name}</a
          ></span
        >
        <span
          class="question-title font-mulish text-lg md:text-xl text-black font-semibold"
          >{question.title}
        </span>
        <div class="question-details mt-4 ml-4">
          <span class="font-mulish text-sm text-black leading-relaxed mt-2">
            {@html question.content}
          </span>
        </div>
        <div
          class="flex flex-col gap-y-4 md:gap-y-0 md:flex-row flex-wrap md:flex-nowrap justify-between items-center gap-x-1 mt-10"
        >
          <div class="tags">
            <span class="font-mulish text-xs font-medium mr-2"
              >Related Tags:</span
            >
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
              class="flex items-center px-3 py-2 text-prmary hover:text-white bg-white hover:bg-primary duration-300 border border-primary text-xs rounded-full"
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
      </div>
      <!-- Explanations -->
      <div class="flex flex-col mt-12">
        <span class="font-mulish text-base font-bold"
          >{numOfAnswers}
          {numOfAnswers === 1 || numOfAnswers === 0
            ? "Answer"
            : "Answers"}</span
        >
        {#if question.verified_explanation}
          <!-- Verified Explanation -->
          <div
            class="flex flex-col mt-4 py-4 md:py-8 px-3 md:px-8 rounded-lg font-medium"
            style="background-color: #F9F9F9"
          >
            <span class="font-mulish text-sm text-black leading-relaxed"
              >{@html question.verified_explanation}
            </span>
            <div
              class="flex flex-col gap-y-4 md:gap-y-0 md:flex-row items-center md:justify-between mt-4 md:mt-12"
            >
              <div
                class="flex gap-x-4 text-xs font-mulish font-bold"
                style="color: #5E666D"
              >
                <button>Share</button>
                <button>Report</button>
                <button>Comment</button>
                <button>Edit</button>
              </div>
              <div class="flex flex-col gap-y-2 font-bold font-mulish text-xs">
                <span
                  class="flex self-center items-center text-white pl-2 pr-3 rounded-md"
                  style="background-color: #DCB323"
                  ><img
                    class="mt-1"
                    src="/images/icons/verified.svg"
                    alt="verified"
                  />Explanation Verified</span
                >
                <span class="text-primary"
                  >Answered {convertDate(question.published)}</span
                >
              </div>
            </div>
          </div>
          <hr class="mt-8 mb-2" style="border-color: #A1A5B1" />
        {/if}
        {#each question.explanations as explanation}
          <Explanation {explanation} />
        {/each}
      </div>
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

<style>
  .exp > :global(hr:last-of-type) {
    display: none;
  }

  .viewed-questions {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
</style>
