<script lang="ts">
  import axios from "axios";
  let officialServers: any[] = [];
  let communityServers: any[] = [];
  let totalPlayers = 0;
  let totalServers = 0;
  async function updateServersData() {
    try {
      let req = await axios.get("http://loginserver.h1emu.com/servers");
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
  updateServersData();
  setInterval(updateServersData, 5_000);
</script>

<div class="container mx-auto px-4 py-6">
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
            >{server.name} ({server.region}) #{server.serverId}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.populationNumber}/{server.maxPopulationNumber}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.locked
              ? "locked"
              : server.allowedAccess
                ? "Up"
                : "Down"}</td
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
            >{server.name} ({server.region}) #{server.serverId}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.h1emuVersion}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.populationNumber}/{server.maxPopulationNumber}</td
          >
          <td class="px-6 py-4 whitespace-nowrap text-gray-200"
            >{server.locked
              ? "locked"
              : server.allowedAccess
                ? "Up"
                : "Down"}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>
