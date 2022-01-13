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

      <hr class="divider my-4" style="border-color: #CCD9E9" />
    </div>
  </div>
</article>
