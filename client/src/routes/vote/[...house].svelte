<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { page } from "$app/stores";
  const params = $page.params.house;
  import Confetti from "$lib/Confetti.svelte";

  let house, gender;
  let users = [];
  let selectedUser;
  let cap1 = { image: "sishya" };
  let cap2 = { image: "sishya" };
  let selectedChoice;
  let confirm = false;
  let confetti = false;

  [house, gender] = params.split("/");
  const usersendpoint = `https://sishyavoting2022.herokuapp.com/api/users?house=${house}&gender=${gender}`;
  const captainendpoint = `https://sishyavoting2022.herokuapp.com/api/vote?house=${house}&gender=${gender}`;

  onMount(async function () {
    const userresponse = await fetch(usersendpoint);
    const userdata = await userresponse.json();
    users = userdata.data;

    const captainresponse = await fetch(captainendpoint);
    const captaindata = await captainresponse.json();
    cap1 = captaindata.data[0];
    cap2 = captaindata.data[1];
  });

  const vote = async () => {
    if (!confirm) {
      confirm = !confirm;
    } else {
      const endpoint = `https://sishyavoting2022.herokuapp.com/api/vote`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: selectedUser._id,
          choice: selectedChoice._id,
        }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        confetti = true;
        await new Promise((r) => setTimeout(r, 500));
        window.location.href = `/vote/${house}`;
      }
    }
  };
</script>

<div>
  {#if confetti}
    <Confetti durationInSeconds={1} />
  {/if}
  <div class="grid place-content-center">
    <div class="mb-3 xl:w-96 m-10">
      <p class="text-md">Select your name</p>
      <select
        class="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label=".form-select-lg example"
        bind:value={selectedUser}
      >
        {#each users as user}
          <option value={user} disabled={user.voted}
            >{user.name} - Grade {user.grade}</option
          >
        {/each}
      </select>
    </div>
  </div>

  <div class="grid place-content-center">
    <div class="flex w-full">
      <div
        class="grid flex-grow card h-96 w-96 m-10 rounded-box place-items-center"
      >
        <img
          src="../../captains/{cap1.image}.jpeg"
          alt="picture of {cap1.name}"
        />
      </div>
      <div
        class="grid flex-grow card rounded-box m-10 h-96 w-96 place-items-center"
      >
        <img
          src="../../captains/{cap2.image}.jpeg"
          alt="picture of {cap2.name}"
        />
      </div>
    </div>
  </div>

  <div class="grid place-content-center">
    <div class="flex">
      <div class="grid h-10 mr-64 flex-grow card place-items-center">
        <label class="text-2xl">
          <input
            type="radio"
            bind:group={selectedChoice}
            value={cap1}
            class="radio w-7 h-7 mr-2 pt-1 align-middle"
          />{cap1.name}
        </label>
      </div>
      <div class="grid h-10 flex-grow ml-12 card place-items-center">
        <label class="text-2xl">
          <input 
          
            type="radio"
            bind:group={selectedChoice}
            value={cap2}
            class="radio w-7 h-7 mr-2 pt-1 align-middle"
          />{cap2.name}
        </label>
      </div>
    </div>
  </div>

  <div class="grid place-content-center m-24">
    {#if confetti}
      <Confetti durationInSeconds={1} />
    {/if}

    <button
      class="btn w-32 {confirm ? 'bg-green-700' : 'bg-gray-700'}"
      disabled={selectedUser != undefined && selectedChoice != undefined
        ? false
        : true}
      on:click={vote}
    >
      {#if !confirm}
        Vote
      {:else}
        Confirm
      {/if}
    </button>

    {#if confetti}
      <Confetti durationInSeconds={1} />
    {/if}
  </div>
</div>
