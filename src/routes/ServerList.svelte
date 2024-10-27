<script lang="ts">
  import axios from "axios";
  let officialServers: any[] = [];
  let communityServers: any[] = [];
  async function updateServersData() {
    try {
      let req = await axios.get("http://loginserver.h1emu.com/servers");
      const serverData = req.data.filter((e: any) => !e.isDisabled);
      officialServers = serverData.filter((e: any) => e.IsOfficial);
      communityServers = serverData.filter((e: any) => !e.IsOfficial);
    } catch (e) {
      console.error(e);
    }
  }
  updateServersData();
  setInterval(updateServersData, 5_000);
</script>

<img class="h-[200px] w-full object-cover" src="./bg1.jpg" />
<div class="container mx-auto px-4 py-6">
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Official Servers</h2>
  <table class="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
    <thead class="bg-gray-100">
      <tr>
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >Server Name</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >Population</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >H1emu Version</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >Status</th
        >
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each officialServers as server}
        <tr class="hover:bg-gray-50 transition duration-200 ease-in-out">
          <td class="px-6 py-4 whitespace-nowrap"
            >{server.name} ({server.region}) #{server.serverId}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{server.populationNumber}/{server.maxPopulationNumber}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >h1z1-server {server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{server.locked ? "locked" : server.allowedAccess ? "Up" : "Down"}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>

  <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Community Servers</h2>
  <table class="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
    <thead class="bg-gray-100">
      <tr>
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >Server Name</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >Population</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >H1emu Version</th
        >
        <th
          class="px-6 py-4 whitespace-nowrap text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
          >Status</th
        >
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each communityServers as server}
        <tr class="hover:bg-gray-50 transition duration-200 ease-in-out">
          <td class="px-6 py-4 whitespace-nowrap"
            >{server.name} ({server.region}) #{server.serverId}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{server.populationNumber}/{server.maxPopulationNumber}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >h1z1-server {server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap"
            >{server.locked ? "locked" : server.allowedAccess ? "Up" : "Down"}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>
