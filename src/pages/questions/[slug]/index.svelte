<script>
  export let scoped;
  $: question = scoped.question;
</script>

<article>
  {@html question.content}
</article>
