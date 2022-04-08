<script>
  // @ts-nocheck
  // get data from props
  export let user;
  export let tag;
</script>

<div class="card card-compact w-96 border shadow-x1 mt-5">
  <figure>
    <img src={user.image} alt="avatar" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{user.name}</h2>
    <h3 class="card-side">{tag}</h3>
  </div>
</div>
