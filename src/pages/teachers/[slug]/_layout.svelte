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
  <div class="bg-[#f6f6f6] px-4 sm:px-6 lg:px-[8.5rem] py-24">
    <slot scoped={{ teacher }}>Loading...</slot>
  </div>
{/if}
