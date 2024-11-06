<script>
  import { Link, Route, Router } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Download from "./routes/Download.svelte";
  import ServerList from "./routes/ServerList.svelte";
  import HowToPlay from "./routes/HowToPlay.svelte";
  import Authkey from "./routes/Authkey.svelte";
</script>

<Router>
  <nav
    class="absolute z-[100] nav left-0 right-0 mx-auto px-[15px] w-full md:max-w-[750px] lg:max-w-[970px] xl:max-w-[1170px]"
  >
    <div class="flex flex-wrap relative">
      <div class="w-full">
        <div class="menu-list hidden md:block">
          <ul class="home-nav flex items-center space-x-4 float-left">
            <li class="border-none inline-block align-middle">
              <Link
                to="/"
                class="block h-[49px] w-[129px] bg-[url('h1emu_logo_white.png')] bg-contain bg-no-repeat bg-center transition-transform duration-200"
              ></Link>
            </li>
            <li class="border-none inline-block align-middle">
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li class="border-none inline-block align-middle">
              <a href="https://github.com/QuentinGruber/h1z1-server/releases">
                <span>Updates</span>
              </a>
            </li>
            <li class="border-none inline-block align-middle">
              <Link to="/serverlist">
                <span>Servers</span>
              </Link>
            </li>
            <!-- <li class="border-none inline-block align-middle"> -->
            <!--   <Link to="/howtoplay"> -->
            <!--     <span>How to play</span> -->
            <!--   </Link> -->
            <!-- </li> -->
            <li class="border-none inline-block align-middle">
              <a href="https://chartscf.h1emu.com">
                <span>Charts</span>
              </a>
            </li>
            <li class="border-none inline-block align-middle">
              <a href="https://www.patreon.com/h1emu">
                <span>Support us</span>
              </a>
            </li>
          </ul>
          <div
            class="ml-auto text-[0px] leading-[64px] uppercase font-['Tahoma',sans-serif] float-right"
          >
            <Link
              to="/download"
              class="flex items-center h-[64px] leading-[64px]"
            >
              <div
                class="bg-[#d6131a] text-white text-2xl px-4 h-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#d6131a]"
              >
                Play Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <Route path="/serverlist" component={ServerList} />
  <Route path="/download" component={Download} />
  <Route path="/howtoplay" component={HowToPlay} />
  <Route path="/authkey" component={Authkey} />
  <Route path="*" component={Home} />
</Router>
