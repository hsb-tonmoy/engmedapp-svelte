<script>
  import { metatags } from "@roxi/routify";
  import Search from "../../components/Layout/TeacherSearch.svelte";
  import Table from "../../components/Teachers/Table.svelte";
  import Filters from "../../components/Teachers/Filters.svelte";

  metatags.title = "EngMedApp - Teachers' Database";
  metatags.description = "EngMedApp - Teachers' Database";
</script>

<main class="flex flex-col w-full my-8 lg:my-[3.75rem]">
  <section id="header" class="flex flex-col px-4 sm:px-6 lg:px-[8.5rem]">
    <h1
      id="slogan"
      class="font-mulish text-lg md:text-xl lg:text-2xl leading-snug text-ematext font-medium"
    >
      Teachers' Database
    </h1>
    <Search />
    <div class="mt-10 mb-6">
      <Filters />
    </div>
  </section>
  <Table />
</main>
