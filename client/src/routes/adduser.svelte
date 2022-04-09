<script>
  let name;
  let section;
  let gender;
  let house;

  const handleSubmit = async () => {
    console.log(name);
    console.log(section);
    console.log(gender);
    console.log(house);

    const apiurl = "http://localhost:1717/api/users/add";
    const req = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        section,
        gender,
        house,
      }),
    }).then((req) => req.json());
    if (req.status === "ok") {
      window.location.href = "/";
    }
  };
</script>

<form>
  <strong class="text-2xl"
    >Name<strong
      ><br />
      <input
        type="text"
        name="Name"
        class="mt-2 mb-5 input input-bordered w-full max-w-xs"
        bind:value={name}
        required
      /><br />
    </strong></strong
  >

  <p class="text-2xl"><strong>Choose your section:</strong></p>
  <div class="mt-2 mb-5">
    <label for="A">
      <input
        type="radio"
        id="A"
        name="section"
        value="A"
        bind:group={section}
        class="radio w-5 h-5"
        required
      />
      A</label
    > <br />
    <label for="B">
      <input
        type="radio"
        id="B"
        value="B"
        bind:group={section}
        name="section"
        class="radio w-5 h-5"
        required
      />
      B</label
    ><br />
    <label for="C">
      <input
        type="radio"
        value="C"
        bind:group={section}
        name="section"
        id="C"
        class="radio w-5 h-5"
        required
      />
      C</label
    ><br />
  </div>

  <p class="text-2xl"><strong>Gender:</strong></p>
  <div class="mb-5 mt-2">
    <label for="M">
      <input
        type="radio"
        id="M"
        name="gender"
        value="male"
        bind:group={gender}
        class="radio w-5 h-5"
        required
      />
      Male</label
    ><br />
    <label for="F">
      <input
        type="radio"
        name="gender"
        id="F"
        bind:group={gender}
        value="female"
        class="radio w-5 h-5"
        required
      />
      Female</label
    ><br />
  </div>

  <p class="text-2xl"><strong>House:</strong></p>

  <div class="mb-5 mt-2">
    <label for="Cauvery"
      ><input
        type="radio"
        id="Cauvery"
        name="house"
        bind:group={house}
        value="cauvery"
        class="radio w-5 h-5"
        required
      />
      Cauvery</label
    ><br />
    <label for="Godavari">
      <input
        type="radio"
        id="Godavari"
        bind:group={house}
        value="godavari"
        name="house"
        class="radio w-5 h-5"
        required
      />
      Godavari</label
    ><br />
    <label>
      <input
        type="radio"
        value="narmada"
        bind:group={house}
        name="house"
        class="radio w-5 h-5"
        required
        id="Narmada"
      />
      Narmada</label
    ><br />
    <label for="Sutlej">
      <input
        type="radio"
        id="Sutlej"
        value="sutlej"
        bind:group={house}
        name="house"
        class="radio w-5 h-5"
        required
      />
      Sutlej</label
    ><br />
  </div>
  <button
    class="btn m-5 -ml-1 rounded-md w-24 text-md bg-gray-700"
    on:click|preventDefault={handleSubmit}>Submit</button
  >
</form>
