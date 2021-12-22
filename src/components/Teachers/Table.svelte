<script>
  import Grid from "gridjs-svelte";
  import { html } from "gridjs";
  let grid;

  const data = [
    {
      photo: html(
        '<img src="https://engmedapp.s3.amazonaws.com/media/profiles/avatar.png" />'
      ),
      name: "Andrey Popov",
      affiliation: "Freelancer",
      subjects: "Algebra",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
    },
    {
      name: "Jennifer Joey",
      affiliation: "Govt. Lab School",
      subjects: "Literature",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
    },
    {
      name: "John Doe",
      affiliation: "Freelancer",
      subjects: "Mathematics D",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
    },
    {
      name: "Zandhro Vhylendo",
      affiliation: "Dhanmondi Boys",
      subjects: "English",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
    },
    {
      name: "Jessica Perker",
      affiliation: "Viqarunnisa Noon High School",
      subjects: "Physics",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
    },
    {
      name: "Imet Chub",
      affiliation: "Scholastica",
      subjects: "Chemistry",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
    },
    {
      name: "Abu Musa",
      affiliation: "Maple Leaf",
      subjects: "Biology",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
    },
    {
      name: "Rakesh Khan",
      affiliation: "Green Dale",
      subjects: "History",
      location: "Dhaka, Bangladesh",
      timezone: "GMT+6",
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

<Grid sort={true} {className} bind:instance={grid} {data} />

<style global lang="postcss">
  .teachers-container {
    @apply w-full bg-[#FAFCFF] px-4 sm:px-6 lg:px-[7.5rem] text-left;
  }
  .teachers-table {
    @apply w-full;
  }
  .teachers-thead {
    @apply py-0;
  }

  .teachers-th {
    @apply pb-0 pt-6 px-4 font-lato font-bold text-base text-black capitalize;
    border-bottom: 1px solid #ccd9e9;
  }

  .teachers-td {
    @apply px-4 py-4 font-mulish font-medium text-sm text-[#16355C];
    border-bottom: 1px solid rgba(204, 217, 233, 0.6);
    min-width: 100px !important;
  }

  .gridjs-tr:hover {
    @apply bg-[#ebf2fc];
  }

  .teachers-td img {
    @apply rounded-full w-[1.785rem] h-[1.785rem] mr-2;
  }
</style>
