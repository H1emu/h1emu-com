<script lang="ts">
  let count = 0;
  function clickedH1emuLogo() {
    count += 1;
    if (count > 10) {
      // DON'T ASK ABOUT THIS OR YOU'RE FIRED
      window.open("https://quentingruber.github.io/h1z1-server-website/");
    }
  }
</script>

<footer class="bg-white dark:bg-gray-900">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <button on:click={clickedH1emuLogo} class="flex items-center">
          <span
            class="self-center block h-[49px] w-[129px] bg-[url('assets/h1emu_logo_white.png')] bg-contain bg-no-repeat bg-center transition-transform duration-200"
          ></span>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Resources
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="https://github.com/H1emu" class="hover:underline"
                >Github</a
              >
            </li>
            <li class="mb-4">
              <a
                href="https://github.com/H1emu/h1emu-com"
                class="hover:underline">Website Source Code</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Follow us
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a
                href="https://discord.com/invite/RM6jNkj"
                class="hover:underline">Discord</a
              >
            </li>
            <li>
              <a href="https://x.com/playH1Emu" class="hover:underline"
                >Twitter/X</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Legal
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >© 2024 <a href="https://flowbite.com/" class="hover:underline"
          >H1EMU</a
        >. All Rights Reserved. H1Emu is not affiliated with H1Z1.com, H1Z1:
        Just Survive or Daybreak Game Company LLC, H1Z1 and the H1Z1 logo are
        trademarks of the Daybreak Game Company LLC</span
      >
    </div>
  </div>
</footer>
