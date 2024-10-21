<script lang="ts">
  let generatedAuthkey = "";
  function generateAuthKey() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz=_";
    for (let i = 0; i < 40; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedAuthkey += characters[randomIndex];
    }
  }
</script>

{#if generatedAuthkey}
  <div
    class="mt-4 bg-[#d6131a] text-white text-2xl p-4 transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#d6131a]"
  >
    Your authkey : {generatedAuthkey}
  </div>
{:else}
  <button
    class="mt-4 bg-[#d6131a] text-white text-2xl p-4 transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#d6131a]"
    on:click={generateAuthKey}
  >
    Generate your authkey
  </button>
{/if}
