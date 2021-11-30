<script>
  let query;
</script>

<div class="px-4 md:p-0">
  <form
    on:submit|preventDefault={() => {
      window.location.href = `/questions?query=${query}`;
    }}
    class="flex flex-row flex-nowrap items-center mt-10 search-box"
  >
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
      bind:value={query}
      autofocus
      type="text"
      name="search"
      class="flex flex-grow sm:w-full w-10/12 max-w-full h-20 md:w-96 lg:w-120 pl-14 pr-12 text-base bg-secondaryLight border border-primary rounded-l outline-none"
      placeholder="Write your question"
    />
    <button
      class="max-w-full sm:w-auto font-mulish bg-primary text-xs text-white text-center sm:px-12 md:px-16 px-8 h-20 rounded-r"
      type="submit">Search</button
    >
  </form>
</div>
