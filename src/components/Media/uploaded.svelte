<script>
  export let imageData;

  let insertData = {
    size: "",
    alt_tag: "",
  };
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
      {#each imageData as image (image.id)}
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
              bind:value={insertData.alt_tag}
              name="Alt Tag"
              placeholder={image.alt_tag}
              class="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </td>
          <td class="px-16 py-2 align-middle">
            <select class="py-2" bind:value={insertData.size}>
              <option value="large">Large</option>
              <option value="med">Medium</option>
              <option value="thumb">Thumbnail</option>
              <option value="full">Full</option>
            </select>
          </td>

          <td class="px-16 py-2 align-middle">
            <button
              type="button"
              class="bg-blue-300 text-sm text-white px-4 py-2">Insert</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
