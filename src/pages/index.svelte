<script>
  import { metatags } from "@roxi/routify";
  import { goto } from "@roxi/routify";
  import Search from "../components/Layout/QuestionSearch.svelte";
  metatags.title = "EngMedApp - Home";
  metatags.description = "EngMedAp";

  function onFilter(attr, prop) {
    $goto(`/questions?${attr}=${encodeURIComponent(prop)}`);
  }
</script>

<!-- routify:options index=1 -->
<!-- routify:options title="Home" -->

<div
  class="flex flex-col justify-center items-center w-full h-screen bg-secondaryLight bg-cover home-bg"
>
  <h2
    class="font-mulish text-3xl md:text-5xl lg:text-6xl 3xl:text-7xl leading-snug text-ematext text-center font-extrabold"
  >
    Get the richest question banks <br /> with all the answers.
  </h2>

  <Search />
</div>
<div class="hidden lg:flex flex-col justify-center items-center w-full py-28">
  <h2
    class="font-poppins text-4xl leading-snug text-ematext text-center font-medium"
  >
    Find previous question papers with answers <br /> by Years and Sessions.
  </h2>
  <div class="flex justify-between mt-12">
    <button
      on:click={() => {
        onFilter("year", "2021");
      }}
      class="bg-primary px-10 text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2021</button
    >
    <button
      on:click={() => {
        onFilter("year", "2020");
      }}
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2020</button
    >
    <button
      on:click={() => {
        onFilter("year", "2019");
      }}
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2019</button
    >
    <button
      on:click={() => {
        onFilter("year", "2018");
      }}
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2018</button
    >
    <button
      on:click={() => {
        onFilter("year", "2017");
      }}
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2017</button
    >
    <button
      on:click={() => {
        onFilter("year", "2016");
      }}
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2016</button
    >
  </div>
  <div class="flex flex-wrap justify-between mt-8">
    <button
      on:click={() => {
        onFilter("session", "Jan Feb");
      }}
      class="bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg "
      >Jan Feb</button
    >
    <button
      on:click={() => {
        onFilter("session", "May Jun");
      }}
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >May Jun</button
    >
    <button
      on:click={() => {
        onFilter("session", "Aug Sep");
      }}
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >Aug Sep</button
    >
    <button
      on:click={() => {
        onFilter("session", "Oct Nov");
      }}
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >Oct Nov</button
    >
  </div>
  <button
    on:click={() => {
      $goto("/questions");
    }}
    class="h-10 mt-16 border border-primary rounded-lg hover:bg-primary text-primary hover:text-white duration-300 font-mulish font-bold text-xs px-12"
    >View all</button
  >
</div>

<div
  class="flex flex-col justify-center items-center w-full py-16 bg-white lg:bg-secondary"
>
  <h2
    class="font-poppins text-4xl leading-snug text-ematext text-center font-medium"
  >
    EMA tag cloud.
  </h2>
</div>

<div
  class="flex flex-wrap gap-y-2 md:flex-nowrap md:gap-0 justify-around items-center w-full lg:px-5 3xl:px-60 py-10 bg-cover home-stat"
>
  <!-- A Level Stat -->
  <div class="flex flex-col w-full md:w-auto stat">
    <img src="/images/icons/O-level.svg" alt="a-level" />
    <span class="text-white text-center font-poppins font-medium text-base mt-2"
      >11,000 Set of O Level questions</span
    >
  </div>
  <div class="flex flex-col w-full md:w-auto stat">
    <img src="/images/icons/As-level.svg" alt="a-level" />
    <span class="text-white text-center font-poppins font-medium text-base mt-2"
      >7,399 Set of AS Level questions</span
    >
  </div>
  <div class="flex flex-col w-full md:w-auto stat">
    <img src="/images/icons/A-level.svg" alt="a-level" />
    <span class="text-white text-center font-poppins font-medium text-base mt-2"
      >2,738 Set of A Level questions</span
    >
  </div>
</div>

<style>
  .home-bg {
    background-image: url("https://engmedapp.s3.amazonaws.com/media/home-bg.png");
  }
  .search-box {
    box-shadow: 0 6px 17px 0 rgba(19, 75, 79, 0.2);
  }

  .search-box input::placeholder {
    font-family: "Mulish", sans-serif;
    font-size: 1rem;
    color: #98b2c5;
  }

  .home-stat {
    background: url("/images/stat-background.png");
  }

  .stat img {
    height: 55px;
  }
</style>
