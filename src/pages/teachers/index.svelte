<script>
  import { onMount } from "svelte";
  import { metatags } from "@roxi/routify";
  import Search from "../../components/Layout/TeacherSearch.svelte";
  import Table from "../../components/Teachers/Table.svelte";
  import Filters from "../../components/Teachers/Filters.svelte";

  metatags.title = "EngMedApp - Teachers' Database";
  metatags.description = "EngMedApp - Teachers' Database";

  const API_URL = import.meta.env.VITE_API_URL;

  let loading = true;

  let teachers = [];

  let query;

  const fetchTeachers = async () => {
    try {
      const res = await fetch(API_URL + "teachers/teachers/");
      const data = await res.json();
      teachers = data;
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  };

  onMount(async () => {
    await fetchTeachers();
  });
</script>

<main class="flex flex-col w-full my-8 lg:my-[3.75rem]">
  <section id="header" class="flex flex-col px-4 sm:px-6 lg:px-[8.5rem]">
    <h1
      id="slogan"
      class="font-mulish text-lg md:text-xl lg:text-2xl leading-snug text-ematext font-medium"
    >
      Teachers' Database
    </h1>
    <Search bind:query />
    <div class="mt-10 mb-6">
      <Filters />
    </div>
  </section>
  {#if !loading}
    <Table bind:query data={teachers} />
  {/if}
</main>
