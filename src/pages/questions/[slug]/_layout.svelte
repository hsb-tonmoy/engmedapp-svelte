<script>
  const API_URL = "https://api.engmedapp.com/";
  import { params } from "@roxi/routify";
  $: slug = $params.slug;

  let question;
  async function fetchquestion(slug) {
    const response = await fetch(`${API_URL}questions/question/${slug}`);
    question = await response.json();
  }
  $: if (slug) fetchquestion(slug);
</script>

{#if question}
  <slot scoped={{ question }}>Loading...</slot>
{/if}
