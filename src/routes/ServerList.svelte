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

<table>
  <thead>
    <tr>
      <th>Server Name</th>
      <th>Population</th>
      <th>H1emu Version</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {#each servers as server}
      <tr>
        <td>{server.name} ({server.region}) #{server.serverId}</td>
        <td>{server.populationNumber}/{server.maxPopulationNumber}</td>
        <td>h1z1-server {server.h1emuVersion}</td>
        <td
          >{server.locked ? "locked" : server.allowedAccess ? "Up" : "Down"}</td
        >
      </tr>
    {/each}
  </tbody>
</table>
