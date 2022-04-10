<script>
  let name;
  let section;
  let gender;
  let house;
  let grade;


  const handleSubmit = async () => {
    

    const apiurl = "https://sishyavoting2022.herokuapp.com/api/users/add";
    const req = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        grade,
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
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
        class="radio w-5 h-5 align-middle"
        required
      />
      Sutlej</label
    ><br />
    <p class="text-2xl"><strong>Grade:</strong></p>
    <label for="6">
      <input
        type="radio"
        id="6"
        value="6"
        bind:group={grade}
        name="grade"
        class="radio w-5 h-5 align-middle"
        required
      />
      6</label
    ><br />
    <label for="7">
      <input
        type="radio"
        id="7"
        value="7"
        bind:group={grade}
        name="grade"
        class="radio w-5 h-5 align-middle"
        required
      />
      7</label
    ><br />
    <label for="8">
      <input
        type="radio"
        id="8"
        value="8"
        bind:group={grade}
        name="grade"
        class="radio w-5 h-5 align-middle"
        required
      />
      8</label
    ><br />
    <label for="9">
      <input
        type="radio"
        id="9"
        value="9"
        bind:group={grade}
        name="grade"
        class="radio w-5 h-5 align-middle"
        required
      />
      9</label
    ><br />
    <label for="10">
      <input
        type="radio"
        id="10"
        value="10"
        bind:group={grade}
        name="grade"
        class="radio w-5 h-5 align-middle"
        required
      />
      10</label
    ><br />
    <label for="11">
      <input
        type="radio"
        id="11"
        value="11"
        bind:group={grade}
        name="grade"
        class="radio w-5 h-5 align-middle"
        required
      />
      11</label
    ><br />
    <label for="12">
      <input
        type="radio"
        id="12"
        value="12"
        bind:group={grade}
        name="grade"
        class="radio w-5 h-5 align-middle"
        required
      />
      12</label
    ><br />
  </div>
  <button
    class="btn m-5 -ml-1 rounded-md w-24 text-md bg-gray-700"
    on:click|preventDefault={handleSubmit}>Submit</button
  >
</form>
