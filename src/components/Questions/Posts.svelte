<script>
  import { createEventDispatcher } from "svelte";
  import Post from "./Post.svelte";
  export let questions;

  const dispatch = createEventDispatcher();

  function handleFilter() {
    dispatch("filter");
  }
</script>

{#each questions.results as question, index (index)}
  <Post on:filter={handleFilter} {question} />
{/each}
