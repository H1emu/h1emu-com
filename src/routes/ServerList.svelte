<script lang="ts">
  import axios from "axios";
  import { onDestroy, onMount } from "svelte";
  let officialServers: any[] = $state([]);
  let communityServers: any[] = $state([]);
  let totalPlayers = $state(0);
  let totalServers = $state(0);
  const protocol = window.location.protocol === "https:" ? "https" : "http";
  const serverListUrl = `${protocol}://loginserver.h1emu.com/servers`;
  let serverUpdateInterval = 0;

  function getPopulation(server: any) {
    if (server.id !== 11 || server.id !== 12) {
      return server.populationNumber / server.maxPopulationNumber;
    } else {
      switch (server.populationLevel) {
        case 0:
          return "LOW";
        case 1:
          return "MEDIUM";
        case 2:
          return "HIGH";
        case 3:
          return "FULL";
      }
    }
  }
  function convertLastWipeToDate(e: any) {
    // TODO: redo this better i'm just bored rn
    if (!e.lastWipe) {
      e.lastWipe = `unknown`;
      return e;
    }
    const now = new Date().getTime() / 1000;
    const seconds = Math.floor(now - e.lastWipe);

    if (seconds < 60) {
      if (seconds === 1) {
        e.lastWipe = `${seconds} second ago`;
      } else {
        e.lastWipe = `${seconds} seconds ago`;
      }
      return e;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      if (minutes === 1) {
        e.lastWipe = `${minutes} minute ago`;
      } else {
        e.lastWipe = `${minutes} minutes ago`;
      }
      return e;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      if (hours === 1) {
        e.lastWipe = `${hours} hour ago`;
      } else {
        e.lastWipe = `${hours} hours ago`;
      }
      return e;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      if (days === 1) {
        e.lastWipe = `${days} day ago`;
      } else {
        e.lastWipe = `${days} days ago`;
      }
      return e;
    }

    const months = Math.floor(days / 30);
    if (months === 1) {
      e.lastWipe = `${months} month ago`;
    } else {
      e.lastWipe = `${months} months ago`;
    }
    return e;
  }
  async function updateServersData() {
    try {
      let req = await axios.get(serverListUrl);
      const serverData: any[] = req.data.filter((e: any) => !e.isDisabled);
      totalServers = serverData.length;
      totalPlayers = 0;
      serverData.forEach((server) => {
        totalPlayers += server.populationNumber;
      });
      officialServers = serverData.filter((e: any) => e.IsOfficial);
      officialServers.map(convertLastWipeToDate);

      communityServers = serverData.filter((e: any) => !e.IsOfficial);
      // Sort community servers by populationNumber in descending order
      communityServers.sort((a, b) => b.populationNumber - a.populationNumber);
      communityServers.map(convertLastWipeToDate);
    } catch (e) {
      console.error(e);
    }
  }
  function getStatus(server: any) {
    if (server.locked) {
      return "Locked 🔒";
    } else {
      if (server.allowedAccess) {
        return "Online ✅";
      } else {
        return "Offline ❌";
      }
    }
  }
  function startUpdateInterval() {
    serverUpdateInterval = setInterval(updateServersData, 2_000);
  }
  function stopUpdateInterval() {
    clearInterval(serverUpdateInterval);
  }
  function handleVisibilityChange() {
    if (document.hidden) {
      stopUpdateInterval();
    } else {
      startUpdateInterval();
    }
  }

  onMount(() => {
    updateServersData();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    startUpdateInterval();
    onDestroy(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopUpdateInterval();
    });
  });
</script>

<div class="container mx-auto px-4 py-6">
  <div
    class="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-6 inline-block mt-9"
  >
    <p>Total Servers: {totalServers}</p>
  </div>
  <div
    class="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-6 inline-block"
  >
    <p>Total Players: {totalPlayers}</p>
  </div>
  <h2 class="text-2xl font-bold text-gray-200 mb-4">Official Servers</h2>
  <table
    class="min-w-full divide-y divide-gray-700 shadow-lg rounded-lg overflow-hidden"
  >
    <thead class="bg-gray-800">
      <tr>
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Server Name</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Last Wipe</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >H1emu Version</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Population</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Status</th
        >
      </tr>
    </thead>
    <tbody class="bg-gray-900 divide-y divide-gray-700">
      {#each officialServers as server}
        <tr class="hover:bg-gray-700 transition duration-200 ease-in-out">
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            ><strong>{server.name} ({server.region})</strong><br />
            <i>{server.description}</i></td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.lastWipe}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{getPopulation(server)}
            {server.queueSize ? "(" + server.queueSize + " in queue)" : ""}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{getStatus(server)}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>

  <h2 class="text-2xl font-bold text-gray-200 mt-8 mb-4">Community Servers</h2>
  <table
    class="min-w-full divide-y divide-gray-700 shadow-lg rounded-lg overflow-hidden"
  >
    <thead class="bg-gray-800">
      <tr>
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Server Name</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Last Wipe</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >H1emu Version</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Population</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
          >Status</th
        >
      </tr>
    </thead>
    <tbody class="bg-gray-900 divide-y divide-gray-700">
      {#each communityServers as server}
        <tr class="hover:bg-gray-700 transition duration-200 ease-in-out">
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            ><strong>{server.name} ({server.region})</strong><br />
            <i>{server.description}</i></td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.lastWipe}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.populationNumber}/{server.maxPopulationNumber}
            {server.queueSize ? "(" + server.queueSize + " in queue)" : ""}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{getStatus(server)}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  @media (max-width: 600px) {
    .container {
      padding: 10px;
    }
    h2 {
      font-size: 1.5rem;
    }
    th,
    td {
      font-size: 0.875rem;
      padding: 8px;
    }
  }
</style>
