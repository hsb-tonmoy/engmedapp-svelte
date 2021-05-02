<script>
  import Dropzone from "svelte-file-dropzone";
  import authAxios from "../../components/Auth/authAxios.js";

  let uploadSuccess = false;

  let returnedData = [];

  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

  export function handleFilesUpload() {
    files.accepted.forEach(async (image) => {
      let formData = new FormData();
      formData.append("file_name", image.name);
      formData.append("alt_tag", image.name);
      formData.append("image", image);

      await fileUpload(formData);
    });
  }

  async function fileUpload(formData) {
    await authAxios
      .post("media_lib/images/", formData)
      .then((res) => {
        if (res.status === 200) {
          returnedData = [res.data, ...returnedData];
          uploadSuccess = true;
          console.log(returnedData);
          files.accepted = [];
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRemoveFile(index) {
    files.accepted.splice(index, 1);
    files.accepted = [...files.accepted];
  }
  function handleRemoveAll() {
    files.accepted = [];
  }
</script>

<Dropzone
  on:drop={handleFilesSelect}
  accept={["image/*"]}
  disableDefaultStyles="true"
  containerClasses="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
>
  <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
    <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
  </p>
  <input id="hidden-input" type="file" multiple class="hidden" />
  <button
    id="button"
    class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
  >
    Upload a file
  </button>
</Dropzone>

<h1 class="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">To Upload</h1>

<ul id="gallery" class="flex flex-1 flex-wrap -m-1">
  {#if files.accepted.length === 0}
    <li
      id="empty"
      class="h-full w-full text-center flex flex-col items-center justify-center items-center"
    >
      <img
        class="mx-auto w-32"
        src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
        alt="no data"
      />
      <span class="text-small text-gray-500">No files selected</span>
    </li>
  {:else}
    {#each files.accepted as image, index}
      <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
        <article
          tabindex="0"
          class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm"
        >
          <img
            src={URL.createObjectURL(image)}
            alt="upload preview"
            class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
          />

          <section
            class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3"
          >
            <h1 class="flex-1">{image.name}</h1>
            <div class="flex">
              <span class="p-1">
                <i>
                  <svg
                    class="fill-current w-4 h-4 ml-auto pt-"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"
                    />
                  </svg>
                </i>
              </span>

              <p class="p-1 size text-xs">
                {image.size > 1024
                  ? image.size > 1048576
                    ? Math.round(image.size / 1048576) + "mb"
                    : Math.round(image.size / 1024) + "kb"
                  : image.size + "b"}
              </p>
              <button
                on:click={() => {
                  handleRemoveFile(index);
                }}
                class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md"
              >
                <svg
                  class="pointer-events-none fill-current w-4 h-4 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="pointer-events-none"
                    d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                  />
                </svg>
              </button>
            </div>
          </section>
        </article>
      </li>
    {/each}
  {/if}
</ul>

<style>
  .hasImage:hover section {
    background-color: rgba(5, 5, 5, 0.4);
  }
  .hasImage:hover button:hover {
    background: rgba(5, 5, 5, 0.45);
  }

  .group:hover .group-hover\:text-blue-800 {
    color: #2b6cb0;
  }
</style>
