<script lang="ts">
  import axios from "axios";
  let servers: any[] = [];
  async function updateServersData() {
    try {
      let req = await axios.get("http://loginserver.h1emu.com/servers");
      const serverData = req.data.filter((e: any) => !e.isDisabled);
      servers = serverData;
    } catch (e) {
      console.error(e);
    }
  }
  updateServersData();
</script>

<table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-50">
    <tr>
      <th class="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Server Name</th>
      <th class="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Population</th>
      <th class="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">H1emu Version</th>
      <th class="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    {#each servers as server}
      <tr class="hover:bg-gray-100">
        <td class="px-6 py-4 whitespace-nowrap">{server.name} ({server.region}) #{server.serverId}</td>
        <td class="px-6 py-4 whitespace-nowrap">{server.populationNumber}/{server.maxPopulationNumber}</td>
        <td class="px-6 py-4 whitespace-nowrap">h1z1-server {server.h1emuVersion}</td>
        <td class="px-6 py-4 whitespace-nowrap">{server.locked ? "locked" : server.allowedAccess ? "Up" : "Down"}</td>
      </tr>
    {/each}
  </tbody>
</table>
