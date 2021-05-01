<script>
  import authAxios from "../components/Auth/authAxios.js";
  import Dropzone from "svelte-file-dropzone";

  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];

    let formData = new FormData();
    formData.append("file_name", acceptedFiles[0].name);
    formData.append("alt_tag", acceptedFiles[0].name);
    formData.append("image", acceptedFiles[0]);

    let config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
    };

    authAxios
      .post("media_lib/images/", formData, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRemoveFile(e, index) {
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

<div style="margin: 5px;">
  {#if files.accepted.length > 0}
    <button on:click={handleRemoveAll}>RemoveAll</button>
  {/if}
  {#each files.accepted as item, index}
    <div>
      <span>{item.name}</span>
      <button on:click={(e) => handleRemoveFile(e, index)}>Remove</button>
    </div>
  {/each}
</div>

<!-- routify:options index=false -->
