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

<footer class="bg-gray-900 text-white">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <button on:click={clickedH1emuLogo} class="flex items-center">
          <span
            class="self-center block h-[49px] w-[129px] bg-[url('/h1emu_logo_white.png')] bg-contain bg-no-repeat bg-center transition-transform duration-200"
          ></span>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-white uppercase"
          >
            Resources
          </h2>
          <ul class="text-gray-400 font-medium">
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
            class="mb-6 text-sm font-semibold text-white uppercase"
          >
            Follow us
          </h2>
          <ul class="text-gray-400 font-medium">
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
            class="mb-6 text-sm font-semibold text-white uppercase"
          >
            Legal
          </h2>
          <ul class="text-gray-400 font-medium">
            <li class="mb-4">
              <a href="/" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-400"
        >© 2024 <a href="https://flowbite.com/" class="hover:underline"
          >H1EMU</a
        >. All Rights Reserved. H1Emu is not affiliated with H1Z1.com, H1Z1:
        Just Survive or Daybreak Game Company LLC, H1Z1 and the H1Z1 logo are
        trademarks of the Daybreak Game Company LLC</span
      >
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a href="https://facebook.com" class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="sr-only">Facebook page</span>
        </a>
        <a href="https://instagram.com" class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.773.13 4.52.392 3.467 1.445 2.414 2.498 2.152 3.751 2.094 5.03 2.036 6.31 2.022 6.734 2.022 12s.014 5.69.072 6.97c.058 1.279.32 2.532 1.373 3.585 1.053 1.053 2.306 1.315 3.585 1.373 1.28.058 1.704.072 6.97.072s5.69-.014 6.97-.072c1.279-.058 2.532-.32 3.585-1.373 1.053-1.053 1.315-2.306 1.373-3.585.058-1.28.072-1.704.072-6.97s-.014-5.69-.072-6.97c-.058-1.279-.32-2.532-1.373-3.585C19.48 2.414 18.227 2.152 16.948 2.094 15.668 2.036 15.244 2.022 12 2.022z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0-2.163a8.325 8.325 0 110 16.65 8.325 8.325 0 010-16.65z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="sr-only">Instagram page</span>
        </a>
        <a href="https://twitter.com" class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z"
            />
          </svg>
          <span class="sr-only">Twitter page</span>
        </a>
        <a href="https://github.com" class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  </div>
</footer>
