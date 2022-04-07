<script>
  // @ts-nocheck

  import { onMount } from "svelte";

  import { page } from "$app/stores";
  const params = $page.params.house;
  let house, gender;
  [house, gender] = params.split("/");
  const endpoint = `http://localhost:1717/api/users?house=${house}&gender=${gender}`;
  let users = [];

  onMount(async function () {
    const response = await fetch(endpoint);
    const data = await response.json();
    users = data.data;
  });
</script>

<div class="w-96 h-max bg-gray-200 px-1 absolute">
  <ul class="relative">
    {#each users as user}
      <li class="relative">
        <a
          class="flex items-center text-md py-4 px-6 h-12 overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-white transition duration-300 ease-in-out cursor:pointer"
        >
          {user.name}
        </a>
      </li>
    {/each}
  </ul>
</div>
