<script lang="ts">
  import axios from "axios";
  import { onDestroy } from "svelte";
  let officialServers: any[] = [];
  let communityServers: any[] = [];
  let totalPlayers = 0;
  let totalServers = 0;
  const protocol = window.location.protocol === "https:" ? "https" : "http";
  const serverListUrl = `${protocol}://loginservercf.h1emu.com/servers`;
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
      communityServers = serverData.filter((e: any) => !e.IsOfficial);
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
  updateServersData();
  const serverUpdateInterval = setInterval(updateServersData, 5_000);
  onDestroy(() => {
    clearInterval(serverUpdateInterval);
  });
</script>

<div class="hero-section relative">
  <img class="h-[520px] w-full object-cover" src="./hero-bg.jpg" alt="Hero Background" />
  <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
  <div class="absolute inset-0 flex flex-col items-center justify-center space-y-4">
    <h1 class="text-white text-4xl font-bold text-center">Server List</h1>
    <a href="https://discord.com/invite/RM6jNkj">
      <button class="mt-4 bg-[#800080] text-white text-2xl p-4 transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#800080]">
        Join the Discord Community
      </button>
    </a>
  </div>
</div>

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
            >{server.name} ({server.region})</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.populationNumber}/{server.maxPopulationNumber}</td
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
            >{server.name} ({server.region})</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.populationNumber}/{server.maxPopulationNumber}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{getStatus(server)}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="testimonials-section bg-gray-800 py-8">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-white text-center mb-6">What Our Users Say</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="testimonial bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-800">"H1EMU has brought back so many memories. The community is amazing!"</p>
        <p class="text-gray-600 mt-2">- User A</p>
      </div>
      <div class="testimonial bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-800">"I never thought I'd play H1Z1 again. Thank you, H1EMU!"</p>
        <p class="text-gray-600 mt-2">- User B</p>
      </div>
      <div class="testimonial bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-800">"The dedication of the team is truly inspiring. Keep up the great work!"</p>
        <p class="text-gray-600 mt-2">- User C</p>
      </div>
    </div>
  </div>
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
