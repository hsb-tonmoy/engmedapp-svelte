<script>
  import { onMount } from "svelte";
  import authAxios from "../Auth/authAxios";

  import Post from "./Post.svelte";

  const API_URL = import.meta.env.VITE_API_URL;

  export let username;

  let questions = [];

  $: questions_url = `questions/questions/?explanations__author__username=${username}`;

  const fetchQuestions = async (page = 1) => {
    await authAxios
      .get(API_URL + questions_url + `&page=${page}`)
      .then((res) => {
        questions = res.data;
      })
      .catch((err) => console.log(err));
  };

  onMount(async () => {
    await fetchQuestions();
  });

  $: console.log(questions);
</script>

{#each questions.results as question, index (index)}
  <Post {question} />
{/each}
