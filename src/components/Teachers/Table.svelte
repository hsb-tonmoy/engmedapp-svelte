<script>
  import Grid from "gridjs-svelte";
  import { html } from "gridjs";

  let grid;

  export let query;

  export let data;

  $: data_queried = data;

  $: if (query && query !== "") {
    data_queried = data.filter((teacher) => {
      return teacher.name.includes(query);
    });
  } else if (query === "") {
    data_queried = data;
  }

  const columns = [
    {
      id: "profile_pic",
      name: "Profile Pic",
      hidden: true,
    },
    {
      id: "slug",
      name: "Slug",
      hidden: true,
    },
    {
      id: "name",
      name: "Name",
      formatter: (cell, row) =>
        html(
          `<span class="flex items-center gap-x-1"><img src="${row.cells[0].data}" />${cell}</span>`
        ),
    },
    {
      id: "institute",
      name: "Affiliation",
    },
    {
      id: "subjects_taught",
      name: "Subjects",
    },
    {
      id: "location",
      name: "Location",
    },
    {
      id: "time_zone",
      name: "Timezone",
    },
  ];

  const className = {
    container: "teachers-container",
    table: "teachers-table",
    thead: "teachers-thead",
    th: "teachers-th",
    td: "teachers-td",
  };
</script>

<Grid
  sort={true}
  {className}
  bind:instance={grid}
  {columns}
  data={data_queried}
/>

<style global lang="postcss">
  .teachers-container {
    @apply w-full pb-10 bg-[#FAFCFF] px-4 sm:px-6 lg:px-[7.5rem] text-left;
  }
  .teachers-table {
    @apply w-full;
  }
  .teachers-thead {
    @apply py-0;
  }

  .teachers-th {
    @apply pb-0 pt-6 px-4 font-lato font-bold text-base text-black capitalize cursor-pointer;
    border-bottom: 1px solid #ccd9e9;
  }

  .teachers-td {
    @apply px-4 py-4 font-mulish font-medium text-sm text-[#16355C];
    border-bottom: 1px solid rgba(204, 217, 233, 0.6);
    min-width: 100px !important;
  }

  .teachers-td:nth-of-type(1) {
    width: 30px !important;
  }

  .gridjs-tr:hover {
    @apply bg-[#ebf2fc];
  }

  .teachers-td img {
    @apply rounded-full w-[1.785rem] h-[1.785rem] mr-2;
  }
</style>
