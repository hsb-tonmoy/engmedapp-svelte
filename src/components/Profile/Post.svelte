<script>
  export let question;
</script>

<article class="flex flex-col">
  <div class="flex">
    <div class="flex flex-col w-11/12">
      <span class="breadcrumbs font-mulish text-xs text-ematextgray mb-4"
        >{question.board.name} > {question.level.name} > {question.paper.name} >
        {question.year.name} > {question.session.name}</span
      >
      <div
        class="question-title flex justify-between font-mulish text-base md:text-md text-black font-medium"
      >
        <a href={`/questions/${question.slug}`}>{question.title} </a>
      </div>
      <div class="question-details mt-4 ml-3 pr-5">
        <span class="font-mulish text-sm text-black">
          {question.excerpt}
        </span>
      </div>
      <hr class="my-4" style="border-color: #CCD9E9" />
    </div>
    <div class="flex justify-end items-start w-1/12">
      <button class="text-white bg-primary p-1"
        ><svg
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
    </div>
  </div>
  <h4 class="font-mulish text-black font-bold mb-3">Answer</h4>
  <span class="font-mulish text-sm text-black">
    Lorem ipsunnm dognlor svfbit amet, consectetur adipiscing elit. Ut cras
    interdum elit cursus. Hac snged feugiat maecenas ultricies. Fermentum metus,
    sed vitae c sdphanlor svfbit scretra convallis. Quam mattis dapibus vitae
    vivamus non volutpat est tellus.
  </span>
</article>
