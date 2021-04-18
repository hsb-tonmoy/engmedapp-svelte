<script>
  export let scoped;
  $: question = scoped.question;
</script>

<svelte:head>
  <script
    src="https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image"></script>
</svelte:head>

<article>
  {@html question.content}
</article>
