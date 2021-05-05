<script>
  export let editor_instance;
  let size = [];
  let alt_tag;

  $: image_url = "";

  function image_insert(image, index) {
    if (size[index] === "large") {
      image_url = image.image_large;
    } else if (size[index] === "med") {
      image_url = image.image_med;
    } else if (size[index] === "thumb") {
      image_url = image.image_thumb;
    } else if (size[index] === "full") {
      image_url = image.image;
    }

    let html = `<img src='${image_url}' alt='${alt_tag}'><br />`;

    editor_instance.insertHtml(html);
  }
  export let imageData;
</script>

<div class="overflow-hidden flex items-center justify-center">
  <table class="min-w-full table-auto">
    <thead class="justify-between">
      <tr class="bg-gray-800">
        <th class="px-16 py-2">
          <span class="text-gray-300">Image</span>
        </th>
        <th class="px-16 py-2">
          <span class="text-gray-300">File Name</span>
        </th>
        <th class="px-16 py-2">
          <span class="text-gray-300">Alt Tag</span>
        </th>
        <th class="px-16 py-2">
          <span class="text-gray-300">Size</span>
        </th>

        <th class="px-16 py-2">
          <span class="text-gray-300" />
        </th>
      </tr>
    </thead>
    <tbody class="bg-gray-200">
      {#each imageData as image, index (image.id)}
        <tr class="bg-white border-4 border-gray-200">
          <td class="px-16 py-2 flex flex-row items-center">
            <img class="h-8 w-10 object-cover" src={image.image_thumb} alt="" />
          </td>
          <td class="px-16 py-2 align-middle">
            <span class="text-center py-2 font-semibold">{image.file_name}</span
            >
          </td>
          <td class="px-16 py-2">
            <input
              type="text"
              bind:value={alt_tag}
              name="Alt Tag"
              placeholder={image.alt_tag}
              class="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </td>
          <td class="px-16 py-2 align-middle">
            <select class="py-2" bind:value={size[index]}>
              <option value="large">Large</option>
              <option value="med">Medium</option>
              <option value="thumb">Thumbnail</option>
              <option value="full">Full</option>
            </select>
          </td>

          <td class="px-16 py-2 align-middle">
            <button
              on:click={() => image_insert(image, index)}
              type="button"
              class="bg-blue-300 text-sm text-white px-4 py-2">Insert</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
