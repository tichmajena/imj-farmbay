<script>
  import logo from "$lib/farm-bay-logo (1).svg";
  import { page } from "$app/stores";
  import Animate from "$lib/components/Animate.svelte";
</script>

<Animate>
  <nav class="bg-gray-100">
    <div class="px-8 mx-auto ">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!--logo-->
          <div>
            <a href="#" class="flex items-center py-2 px-3 text-gray-700">
              <img src={logo} class="mr-1 w-100 h-12" alt="" />
            </a>
          </div>

          <!-- primary nav -->
        </div>

        <!-- secondary nav -->
        <div class="hidden md:flex text-center space-x-1">
          <ul class="flex">
            <a class="" href="/">
              <li
                class:text-red-500={$page.path === "/"}
                class="mr-5 hover:text-gray-900 py-6 px-2 font-medium"
              >
                Home
              </li></a
            >
            <a class="" href="/about">
              <li
                class:text-red-500={$page.path === "/about"}
                class="mr-5 hover:text-gray-900 py-6 px-2 font-medium "
              >
                About
              </li></a
            >
            <a class="" href="/service">
              <li
                class:text-red-500={$page.path === "/service"}
                class="mr-5 hover:text-gray-900 py-6 px-2 font-medium"
              >
                Service
              </li></a
            >
            <a class="" href="/team">
              <li
                class:text-red-500={$page.path === "/team"}
                class="mr-5 hover:text-gray-900 py-6 px-2 font-medium "
              >
                Team
              </li></a
            >

            <a class="" href="/contact">
              <li
                class:text-red-500={$page.path === "/contact"}
                class="mr-5 hover:text-gray-900 py-6 px-2 font-medium"
              >
                Contact
              </li></a
            >
          </ul>

          <a
            href="#"
            class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >Signup</a
          >
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
    </div>
  </nav>
</Animate>
