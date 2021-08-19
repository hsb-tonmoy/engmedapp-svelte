<script>
  import Post from "./Post.svelte";

  export let questions;
</script>

{#each questions.results as question (question.slug)}
  <Post {question} />
{/each}
