<script>
  // @ts-nocheck
  // get data from props
  export let user;
  export let tag;
</script>

<div class="bg-gray-800 rounded-lg shadow-lg border-2 mt-10 border-gray-700">
  <div class="w-96 h-96 overflow-hidden">
    <img
      src="captains/{user.image}.jpeg"
      alt="avatar"
      class="rounded max-w-full h-auto"
    />
  </div>
  <div class="card-body">
    <h2 class="card-title text-white">{user.name}</h2>
    <h3 class="card-side text-white">{tag}</h3>
  </div>
</div>
