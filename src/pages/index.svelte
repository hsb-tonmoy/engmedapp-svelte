<script>
  import { metatags } from "@roxi/routify";
  metatags.title = "EngMedApp - Home";
  metatags.description = "Description coming soon...";
</script>

<!-- routify:options index=1 -->
<!-- routify:options title="Home" -->

<div
  class="flex flex-col justify-center items-center w-full h-screen bg-cover home-bg"
>
  <h2
    class="font-mulish text-5xl leading-snug text-ematext text-center font-bold"
  >
    Get the richest question bank <br /> with all the answers.
  </h2>
  <div class="flex flex-row items-center mt-10 search-box">
    <form class="flex items-center">
      <svg
        class="pl-4 mr-4"
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
        type="text"
        name="search"
        class="pl-10 pr-12 text-base rounded-l"
        placeholder="Write your question"
      />
      <button
        class="font-mulish text-xs bg-primary text-white px-8 rounded-r"
        type="submit">Search</button
      >
    </form>
  </div>
</div>
<div class="flex flex-col justify-center items-center w-full py-40">
  <h2
    class="font-poppins text-4xl leading-snug text-ematext text-center font-semibold"
  >
    Find previous question papers with answers <br /> by Years and Sessions.
  </h2>
  <div class="flex justify-between mt-12">
    <button
      class="bg-primary px-10 text-white duration-300 font-mulish font-bold text-lg rounded-lg year-button"
      >2021</button
    >
    <button
      class="ml-4 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg year-button"
      >2020</button
    >
    <button
      class="ml-4 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg year-button"
      >2019</button
    >
    <button
      class="ml-4 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg year-button"
      >2018</button
    >
    <button
      class="ml-4 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg year-button"
      >2017</button
    >
    <button
      class="ml-4 bg-secondary hover:bg-primary px-10 text-primary hover:text-white duration-300 font-mulish font-bold text-lg rounded-lg year-button"
      >2016</button
    >
  </div>
  <div class="flex justify-between mt-8">
    <button
      class="bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg "
      >January</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >February</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >March</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >April</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >May</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >June</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >July</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >August</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >September</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >October</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >November</button
    >
    <button
      class="ml-1 bg-secondary hover:bg-primary px-3 py-3 text-primary hover:text-white duration-300 font-mulish font-bold text-xs rounded-lg"
      >December</button
    >
  </div>
  <button
    class="h-10 mt-16 border border-primary rounded-lg hover:bg-primary text-primary hover:text-white duration-300 font-mulish font-bold text-xs px-12"
    >View all</button
  >
</div>

<style>
  .home-bg {
    background-color: #f1feff;
    background-image: url("https://engmedapp.s3.amazonaws.com/media/home-bg.png");
  }
  .search-box {
    box-shadow: 0 6px 17px 0 rgba(19, 75, 79, 0.2);
  }
  .search-box svg {
    position: absolute;
    width: 30px;
  }
  .search-box input {
    width: 25rem;
    height: 45px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #80bfc2;
  }

  .search-box input::placeholder {
    font-family: "Mulish", sans-serif;
    font-size: 0.75rem;
    color: #98b2c5;
  }

  .search-box button {
    height: 45px;
  }
  .year-button {
    height: 4rem;
  }
</style>
