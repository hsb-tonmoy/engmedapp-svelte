<script>
  const API_URL = import.meta.env.VITE_API_URL;

  import { params } from "@roxi/routify";
  $: slug = $params.slug;

  let teacher;
  async function fetchTeacher(slug) {
    try {
      const res = await fetch(`${API_URL}teachers/teachers/${slug}`);
      teacher = await res.json();
    } catch (err) {
      console.log(err);
    }
  }
  $: if (slug) fetchTeacher(slug);
</script>

{#if teacher}
  <slot scoped={{ teacher }}>Loading...</slot>
{/if}
