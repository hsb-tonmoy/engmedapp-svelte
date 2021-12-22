<script>
  import Select from "svelte-select";

  const API_URL = import.meta.env.VITE_API_URL;

  const subjects = [
    "English",
    "Bangla",
    "Mathematics",
    "Literature",
    "Physics",
    "Chemistry",
    "Biology",
  ];
  const locations = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
  ];

  let subject, location;
</script>

<div class="flex gap-x-1">
  <span class="select-filter">
    <Select
      items={subjects}
      placeholder="Subjects"
      value={subject}
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        console.log(subject);
      }}
      on:clear={() => {
        subject = null;
      }}
    />
  </span>
  <span class="select-filter">
    <Select
      items={locations}
      placeholder="Location"
      value={location}
      containerClasses="min-w-25 flex items-center"
      showChevron={true}
      on:select={(event) => {
        console.log(location);
      }}
      on:clear={() => {
        location = null;
      }}
    />
  </span>
</div>

<style lang="postcss">
  .select-filter {
    --background: #f9f9f9;
    --border: 1px solid #f1feff;
    --borderHoverColor: #f1feff;
    --borderFocusColor: #43989d;
    --borderRadius: 0.125rem;
    --placeholderColor: #43989d;
  }

  .select-filter :global(.indicator) {
    @apply flex items-center;
  }

  .select-filter :global(svg) {
    height: 70%;
    @apply text-ematext;
  }
</style>
