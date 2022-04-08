<script>
  import { onMount } from "svelte";
  import Card from "$lib/Card.svelte";

  let votes = [];
  let voteendpoint = "http://localhost:1717/api/results";

  onMount(async function () {
    const response = await fetch(voteendpoint);
    const userdata = await response.json();
    votes = userdata.data;
    console.log(votes);
  });

  /*
  [
    {house: godavari, boyscaptain boysvicecaptain girlscaptain girlsvicecaptain
  ]
  */

  const winners = [
    {
      house: "godavari",
      boysCaptain: "",
      boysViceCaptain: "",
      girlsCaptain: "",
      girlsViceCaptain: "",
    },
    {
      house: "narmada",
      boysCaptain: "",
      boysViceCaptain: "",
      girlsCaptain: "",
      girlsViceCaptain: "",
    },
    {
      house: "sutlej",
      boysCaptain: "",
      boysViceCaptain: "",
      girlsCaptain: "",
      girlsViceCaptain: "",
    },
    {
      house: "cauvery",
      boysCaptain: "",
      boysViceCaptain: "",
      girlsCaptain: "",
      girlsViceCaptain: "",
    },
  ];

  var goduBoys = votes.filter(function (item) {
    return item.house == "godavari" && item.gender == "male";
  });
  var goduGirls = votes.filter(function (item) {
    return item.house == "godavari" && item.gender == "female";
  });

  var sutlejBoys = votes.filter(function (item) {
    return item.house == "sutlej" && item.gender == "male";
  });
  var sutlejGirls = votes.filter(function (item) {
    return item.house == "sutlej" && item.gender == "female";
  });

  var narmadaBoys = votes.filter(function (item) {
    return item.house == "narmada" && item.gender == "male";
  });
  var narmadaGirls = votes.filter(function (item) {
    return item.house == "narmada" && item.gender == "female";
  });

  var cauveryBoys = votes.filter(function (item) {
    return item.house == "cauvery" && item.gender == "male";
  });
  var cauveryGirls = votes.filter(function (item) {
    return item.house == "cauvery" && item.gender == "female";
  });

  winners[0].boysCaptain = Math.max(goduBoys.map((a) => a.voteCount));
  winners[0].boysViceCaptain = Math.min(goduBoys.map((a) => a.voteCount));

  winners[0].girlsCaptain = Math.max(goduGirls.map((a) => a.voteCount));
  winners[0].girlsViceCaptain = Math.min(goduGirls.map((a) => a.voteCount));

  winners[1].boysCaptain = Math.max(narmadaBoys.map((a) => a.voteCount));
  winners[1].boysViceCaptain = Math.min(narmadaBoys.map((a) => a.voteCount));

  winners[1].girlsCaptain = Math.max(narmadaGirls.map((a) => a.voteCount));
  winners[1].girlsViceCaptain = Math.min(narmadaGirls.map((a) => a.voteCount));

  winners[2].boysCaptain = Math.max(sutlejBoys.map((a) => a.voteCount));
  winners[2].boysViceCaptain = Math.min(sutlejBoys.map((a) => a.voteCount));

  winners[2].girlsCaptain = Math.max(sutlejGirls.map((a) => a.voteCount));
  winners[2].girlsViceCaptain = Math.min(sutlejGirls.map((a) => a.voteCount));

  winners[3].boysCaptain = Math.max(cauveryBoys.map((a) => a.voteCount));
  winners[3].boysViceCaptain = Math.min(cauveryBoys.map((a) => a.voteCount));

  winners[3].girlsCaptain = Math.max(cauveryGirls.map((a) => a.voteCount));
  winners[3].girlsViceCaptain = Math.min(cauveryGirls.map((a) => a.voteCount));

  console.log(winners);
</script>

<img src="sishya.svg" alt="" />

<div class="overflow-x-auto m-10">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th class="text-lg">Name</th>
        <th class="text-lg">House</th>
        <th class="text-lg">Vote Count</th>
      </tr>
    </thead>
    <tbody>
      {#if votes.length > 0}
        {#each votes as vote}
          <tr>
            <td class="text-lg capitalize">{vote.name}</td>
            <td class="text-lg capitalize">{vote.house}</td>
            <td class="text-lg capitalize">{vote.voteCount}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<h2>Godavari</h2>
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
    <div class="flex w-full">
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        2
      </div>
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        2
      </div>
    </div>
  </div>

  <div class="divider" />
  <h2>Sutlej</h2>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
    <div class="flex w-full">
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        1
      </div>
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        2
      </div>
    </div>
  </div>

  <div class="divider" />
  <h2>Narmada</h2>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
    <div class="flex w-full">
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        1
      </div>
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        2
      </div>
    </div>
  </div>

  <div class="divider" />
  <h2>Cauvery</h2>
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
    <div class="flex w-full">
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        1
      </div>
      <div
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
      >
        2
      </div>
    </div>
  </div>
</div>
