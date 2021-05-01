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

    authAxios
      .post("media_lib/images/", formData)
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

<Dropzone on:drop={handleFilesSelect} accept={["image/*"]}>
  <button>Choose images to upload</button>

  <p>or</p>
  <p>Drag and drop them here</p>
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

<!-- routify:options index=False -->
