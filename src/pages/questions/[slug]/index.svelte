<script>
  export let scoped;
  $: question = scoped.question;
</script>

<svelte:head>
  <script
    src="https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image"></script>
</svelte:head>

<section>
  <!-- Questions Body -->
  <div
    class="flex flex-col flex-wrap gap-y-2 xl:flex-row xl:flex-nowrap xl:gap-y-0 xl:gap-x-4 px-4 md:px-12 lg:px-20 xl:px-52 3xl:px-64 py-4 xl:py-8"
  >
    <!-- Questions Details -->
    <article
      class="flex flex-col w-full xl:w-8/12 bg-white rounded-lg py-8 pl-4 pr-4 md:pl-5 xl:pl-7 md:pr-12 xl:pr-20"
    >
      <span class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
        >{question.board.name} > {question.level.name} > {question.paper.name}
        > {question.year.name} > {question.session.name}</span
      >
      <span
        class="question-title font-mulish text-base md:text-lg text-black font-medium"
        >{question.title}
      </span>
      <div class="question-details mt-4 ml-4">
        <span class="font-mulish text-sm text-black leading-relaxed mt-2">
          {@html question.content}
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
    <aside class="flex flex-col items-start w-full xl:w-4/12">
      <div
        class="viewed-questions flex flex-col w-full items-start bg-white rounded-lg px-4 md:px-7 pt-8 pb-6"
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
  .viewed-questions > ul > li:last-of-type > hr,
  .teachers > hr:last-of-type,
  article > hr:last-of-type {
    display: none;
  }

  .viewed-questions {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
</style>
