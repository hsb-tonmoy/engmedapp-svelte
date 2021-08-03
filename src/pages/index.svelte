<script>
  import { metatags } from "@roxi/routify";
  metatags.title = "EngMedApp - Home";
  metatags.description = "Description coming soon...";
</script>

<!-- routify:options index=1 -->
<!-- routify:options title="Home" -->

<div
  class="flex flex-col justify-center items-center w-full h-screen bg-secondaryLight bg-cover home-bg"
>
  <h2
    class="font-mulish text-3xl md:text-5xl lg:text-6xl 3xl:text-7xl leading-snug text-ematext text-center font-extrabold"
  >
    Get the richest question bank <br /> with all the answers.
  </h2>

  <div class="px-4 md:p-0">
    <form class="flex flex-row flex-nowrap items-center mt-10 search-box">
      <svg
        class="absolute ml-6 w-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.80772 0C3.95128 0 0 3.95128 0 8.80772C0 13.6644 3.95128 17.6154 8.80772 17.6154C13.6644 17.6154 17.6154 13.6644 17.6154 8.80772C17.6154 3.95128 13.6644 0 8.80772 0ZM8.80772 15.9894C4.84777 15.9894 1.62604 12.7677 1.62604 8.80776C1.62604 4.84781 4.84777 1.62604 8.80772 1.62604C12.7677 1.62604 15.9894 4.84777 15.9894 8.80772C15.9894 12.7677 12.7677 15.9894 8.80772 15.9894Z"
          fill="#16355C"
        />
        <path
          d="M19.7621 18.6123L15.1007 13.951C14.7831 13.6334 14.2687 13.6334 13.9511 13.951C13.6335 14.2683 13.6335 14.7833 13.9511 15.1006L18.6124 19.7619C18.7712 19.9207 18.9791 20.0001 19.1872 20.0001C19.3951 20.0001 19.6032 19.9207 19.7621 19.7619C20.0797 19.4446 20.0797 18.9297 19.7621 18.6123Z"
          fill="#16355C"
        />
      </svg>
      <input
        autofocus
        type="search"
        name="search"
        class="flex flex-grow sm:w-full w-10/12 max-w-full h-20 md:w-96 lg:w-120 pl-14 pr-12 text-base bg-secondaryLight border border-primary rounded-l"
        placeholder="Write your question"
      />
      <button
        class="max-w-full sm:w-auto font-mulish bg-primary text-xs text-white text-center sm:px-12 md:px-16 px-8 h-20 rounded-r"
        type="submit">Search</button
      >
    </form>
  </div>
</div>
<div class="hidden lg:flex flex-col justify-center items-center w-full py-28">
  <h2
    class="font-poppins text-4xl leading-snug text-ematext text-center font-medium"
  >
    Find previous question papers with answers <br /> by Years and Sessions.
  </h2>
  <div class="flex justify-between mt-12">
    <button
      class="bg-primary px-10 text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2021</button
    >
    <button
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2020</button
    >
    <button
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2019</button
    >
    <button
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2018</button
    >
    <button
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2017</button
    >
    <button
      class="ml-1 lg:ml-4 2xl:ml-8 3xl:ml-12 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg h-16"
      >2016</button
    >
  </div>
  <div class="flex flex-wrap justify-between mt-8">
    <button
      class="bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg "
      >January</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >February</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >March</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >April</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >May</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >June</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >July</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >August</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >September</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >October</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >November</button
    >
    <button
      class="ml-1 2xl:ml-3 3xl:ml-4 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >December</button
    >
  </div>
  <button
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
