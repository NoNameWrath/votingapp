<script>
  import { onMount } from "svelte";
  import Card from "$lib/Card.svelte";

  let votes = [];
  let voteendpoint = "https://voting-soulninja-dev.vercel.app/api/results";

  onMount(async function () {
    const response = await fetch(voteendpoint);
    const userdata = await response.json();
    votes = userdata.data;
    console.log(votes);
  });
  let showWinners = false;

  let winners = [
    {
      house: "cauvery",
      boysCaptain: "",
      boysViceCaptain: "",
      girlsCaptain: "",
      girlsViceCaptain: "",
    },
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
  ];

  const getCaptains = async () => {
    // cauvery boys (votes 0 and 1)
    if (votes[0].voteCount > votes[1].voteCount) {
      winners[0].boysCaptain = votes[0]._id;
      winners[0].boysViceCaptain = votes[1]._id;
    } else if (votes[1].voteCount > votes[0].voteCount) {
      winners[0].boysCaptain = votes[1]._id;
      winners[0].boysViceCaptain = votes[0]._id;
    } else {
      console.log("equal");
    }

    // cauvery girls ( votes 2 and 3)
    if (votes[2].voteCount > votes[3].voteCount) {
      winners[0].girlsCaptain = votes[2]._id;
      winners[0].girlsViceCaptain = votes[3]._id;
    } else if (votes[3].voteCount > votes[2].voteCount) {
      winners[0].girlsCaptain = votes[3]._id;
      winners[0].girlsViceCaptain = votes[2]._id;
    }

    // godavari boys ( votes 4 and 5 )
    if (votes[4].voteCount > votes[5].voteCount) {
      winners[1].boysCaptain = votes[4]._id;
      winners[1].boysViceCaptain = votes[5]._id;
    } else if (votes[5].voteCount > votes[4].voteCount) {
      winners[1].boysCaptain = votes[5]._id;
      winners[1].boysViceCaptain = votes[4]._id;
    }

    // godavari girls ( votes 6 and 7 )
    if (votes[6].voteCount > votes[7].voteCount) {
      winners[1].girlsCaptain = votes[6]._id;
      winners[1].girlsViceCaptain = votes[7]._id;
    } else if (votes[7].voteCount > votes[6].voteCount) {
      winners[1].girlsCaptain = votes[7]._id;
      winners[1].girlsViceCaptain = votes[6]._id;
    }

    // narmada boys (votes 8 and 9)
    if (votes[8].voteCount > votes[9].voteCount) {
      winners[2].boysCaptain = votes[8]._id;
      winners[2].boysViceCaptain = votes[9]._id;
    } else if (votes[9].voteCount > votes[8].voteCount) {
      winners[2].boysCaptain = votes[9]._id;
      winners[2].boysViceCaptain = votes[8]._id;
    }

    // narmada girls ( votes 10 and 11)
    if (votes[10].voteCount > votes[11].voteCount) {
      winners[2].girlsCaptain = votes[10]._id;
      winners[2].girlsViceCaptain = votes[11]._id;
    } else if (votes[11].voteCount > votes[10].voteCount) {
      winners[2].girlsCaptain = votes[11]._id;
      winners[2].girlsViceCaptain = votes[10]._id;
    }

    // sutlej boys ( votes 12 and 13)
    if (votes[12].voteCount > votes[13].voteCount) {
      winners[3].boysCaptain = votes[12]._id;
      winners[3].boysViceCaptain = votes[13]._id;
    } else if (votes[13].voteCount > votes[12].voteCount) {
      winners[3].boysCaptain = votes[13]._id;
      winners[3].boysViceCaptain = votes[12]._id;
    }

    // sutlej girls ( votes 14 and 15 )
    if (votes[14].voteCount > votes[15].voteCount) {
      winners[3].girlsCaptain = votes[14]._id;
      winners[3].girlsViceCaptain = votes[15]._id;
    } else if (votes[15].voteCount > votes[14].voteCount) {
      winners[3].girlsCaptain = votes[15]._id;
      winners[3].girlsViceCaptain = votes[14]._id;
    }

    console.log(winners);
    showWinners = true;
  };

  function getCaptain(id) {
    return votes.find((x) => x._id === id);
  }
</script>

<img src="sishya.svg" alt="" />

<div class="overflow-x-auto m-10 -mb-5">
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

<div class="btn m-10" on:click={getCaptains}>Get Captains</div>

{#if showWinners}
  <h1 class="text-3xl font-semibold ml-10">Boys</h1>
  <h2 class="ml-10 text-2xl">Cauvery</h2>
  <div class="flex flex-col w-full">
    <div class="grid  card  rounded-box place-items-center">
      <div class="flex w-full">
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[0].boysCaptain)} tag="Captain" />
        </div>
        <div class="grid flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[0].boysViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>

    <div class="divider" />
    <h2 class="ml-10  text-2xl">Godavari</h2>
    <div class="grid  card  rounded-box place-items-center">
      <div class="flex w-full">
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[1].boysCaptain)} tag="Captain" />
        </div>
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[1].boysViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>

    <div class="divider" />
    <h2 class="ml-10  text-2xl">Narmada</h2>
    <div class="grid  card  rounded-box place-items-center">
      <div class="flex w-full">
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[2].boysCaptain)} tag="Captain" />
        </div>
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[2].boysViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>

    <div class="divider" />
    <h2 class="ml-10 md-10 text-2xl">Sutlej</h2>
    <div class="grid  card  rounded-box place-items-center">
      <div class="flex w-full">
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[3].boysCaptain)} tag="Captain" />
        </div>
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[3].boysViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-3xl font-semibold ml-10">Girls</h1>
  <h2 class="ml-10 text-2xl">Cauvery</h2>
  <div class="flex flex-col w-full">
    <div class="grid  card  rounded-box place-items-center">
      <div class="flex w-full">
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[0].girlsCaptain)} tag="Captain" />
        </div>
        <div class="grid  flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[0].girlsViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>

    <div class="divider" />
    <h2 class="ml-10 text-2xl">Godavari</h2>
    <div class="grid   card  rounded-box place-items-center">
      <div class="flex w-full">
        <div class="grid   flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[1].girlsCaptain)} tag="Captain" />
        </div>
        <div class="grid   flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[1].girlsViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>

    <div class="divider" />
    <h2 class="ml-10 text-2xl">Narmada</h2>
    <div class="grid   card  rounded-box place-items-center">
      <div class="flex w-full">
        <div class="grid   flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[2].girlsCaptain)} tag="Captain" />
        </div>
        <div class="grid   flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[2].girlsViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>

    <div class="divider" />
    <h2 class="ml-10 text-2xl">Sutlej</h2>
    <div class="grid   card  rounded-box place-items-center mb-24">
      <div class="flex w-full">
        <div class="grid   flex-grow card  rounded-box place-items-center">
          <Card user={getCaptain(winners[3].girlsCaptain)} tag="Captain" />
        </div>
        <div class="grid   flex-grow card  rounded-box place-items-center">
          <Card
            user={getCaptain(winners[3].girlsViceCaptain)}
            tag="Vice Captain"
          />
        </div>
      </div>
    </div>
  </div>
{/if}
