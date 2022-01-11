<script>
  const API_URL = import.meta.env.VITE_API_URL;

  import { params } from "@roxi/routify";
  $: slug = $params.slug;

  let question;
  async function fetchquestion(slug) {
    try {
      const response = await fetch(`${API_URL}questions/questions/${slug}`);
      question = await response.json();
    } catch (err) {
      console.log(err);
    }
  }
  $: if (slug) fetchquestion(slug);
</script>

{#if question}
  <slot scoped={{ question }}>Loading...</slot>
{/if}
