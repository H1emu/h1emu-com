<script lang="ts">
  const queryString = window.location.search;

  const params = new URLSearchParams(queryString);

  const error_code = params.get("code");
  const error_info = params.get("info");

  let potential_fix;
  switch (error_code) {
    case "G14":
      potential_fix =
        "Delete your character and create a new one with a different name.";
      break;
    default:
      potential_fix = null;
      break;
  }
</script>

<div
  class="z-[100] mx-auto px-[15px] md:max-w-[750px] lg:max-w-[970px] xl:max-w-[1170px] p-8"
>
  <div
    class="full-w mt-20 mb-20 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
      Error {error_code}
    </h5>
    <p class="mb-3 font-normal text-gray-400">
      {error_info}
    </p>
    {#if potential_fix}
      <h6 class="mb-2 text-1xl font-bold text-orange-400">
        Potential fix:
        {potential_fix}
      </h6>
    {/if}
  </div>
</div>

<style>
  @media (max-width: 600px) {
    .full-w {
      padding: 10px;
    }
    h5 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
</style>
