<script>
  import logo from "$lib/images/farm-bay-logo.svg";
  import { page } from "$app/stores";
  import Animate from "$lib/components/Animate.svelte";

  let mobile_menu = false;

  function menuToggle() {
    mobile_menu = !mobile_menu;
  }
</script>

<Animate>
  <nav class="bg-gray-100 fixed z-50 h-16 w-full">
    <div class="px-8 mx-auto ">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!--logo-->
          <div>
            <a href="/" class="flex items-center py-2 px-3 text-gray-700">
              <img src={logo} class="mr-1 h-12 w-100" alt="" />
            </a>
          </div>

          <!-- primary nav -->
        </div>

        <!-- secondary nav -->
        <div class="hidden md:flex items-center stext-center space-x-1">
          <ul class="flex">
            <a class="" href="/">
              <li
                class:text-brandgold={$page.url.pathname === "/"}
                class="mr-5 hover:text-gray-900 py-6 px-2 font-medium"
              >
                Home
              </li></a
            >
            <a class="" href="/about">
              <li
                class:text-brandgold={$page.url.pathname === "/about"}
                class="mr-5 hover:text-brandgold py-6 px-3 "
              >
                About
              </li></a
            >
            <a class="" href="/service">
              <li
                class:text-brandgold={$page.url.pathname === "/service"}
                class="mr-5 hover:text-brandgold py-6 px-3 inline-block"
              >
                AgroBusiness
              </li></a
            >
            <a class="" href="/team">
              <li
                class:text-brandgold={$page.url.pathname === "/team"}
                class="mr-5 hover:text-brandgold py-6 px-3 "
              >
                Team
              </li></a
            >

            <a class="" href="/blog">
              <li
                class:text-brandgold={$page.url.pathname === "/blog"}
                class="mr-5 hover:text-brandgold py-6 px-3 "
              >
                Blog
              </li></a
            >

            <a class="" href="/contact">
              <li
                class:text-brandgold={$page.url.pathname === "/contact"}
                class="mr-5 hover:text-brandgold py-6 px-3"
              >
                Contact
              </li></a
            >
          </ul>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <span
              class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
            >
              <a
                href="https://www.facebook.com/Farm.BayZw/"
                class="ml-3 text-brandblue hover:text-brandgold"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/FBayzw"
                class="ml-3 text-brandblue hover:text-brandgold"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/farm_bayzw/"
                class="ml-3 text-brandblue hover:text-brandgold"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@farm_bayzw"
                class="ml-3 text-brandblue hover:text-brandgold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2859 3333"
                  class="w-5 h-5"
                  fill="currentColor"
                  stroke="currentColor"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  ><path
                    d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
                  /></svg
                >
              </a>
            </span>
          </div>
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button on:click={menuToggle} class="mobile-menu-button">
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
    <div
      class:hidden={!mobile_menu}
      class="mobile-menu  md:hidden bg-brandgold"
    >
      <a href="/" class="block py-2 px-4 text-sm hover:bg-yellow-500">Home</a>
      <a href="/about" class="block py-2 px-4 text-sm hover:bg-yellow-500"
        >About</a
      >
      <a href="/service" class="block py-2 px-4 text-sm hover:bg-yellow-500"
        >Agro-Business</a
      >
      <a href="/team" class="block py-2 px-4 text-sm hover:bg-yellow-500"
        >Team</a
      >
      <a href="/blog" class="block py-2 px-4 text-sm hover:bg-yellow-500"
        >Blog</a
      >
      <a href="/contact" class="block py-2 px-4 text-sm hover:bg-yellow-500"
        >Contact</a
      >
    </div>
  </nav>
</Animate>
