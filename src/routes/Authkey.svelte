<script>
  import AuthKeyGenerator from "../AuthKeyGenerator.svelte";
</script>

<div class="relative">
  <img class="h-[722px] w-full object-cover" src="./bg2.jpg" />
  <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>

  <!-- Centering content and stacking text and button vertically -->
  <div
    class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
  >
    <h2 class="text-white text-3xl font-bold text-center">
      Generate a new authkey and keep it safe !
    </h2>
    <AuthKeyGenerator />
    <p class="text-yellow-500 text-2xl text-center">
      ⚠️This authkey has to be approved on <a
        href="https://discord.com/invite/RM6jNkj"
        class="text-purple-600 font-bold">H1emu Discord</a
      > to have access to Official Servers or Community servers that require it.⚠️
    </p>
  </div>
</div>
