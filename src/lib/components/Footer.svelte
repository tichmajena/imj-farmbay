<script>
  import { page } from "$app/stores";
  import Animate from "$lib/Animate.svelte";
  let twitter;

  function onTwitter() {
    twitter = "https://twitter.com/FBayzw";
  }
</script>

<Animate>
  <footer class="text-white body-font bg-brandblue">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap md:text-left text-center order-first">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-white tracking-widest  text-3xl mb-3"
          >
            Menu
          </h2>
          <nav class="list-none mb-10">
            <ul class="flex flex-col">
              <a class="" href="/">
                <li
                  class:text-brandgold={$page.path === "/"}
                  class="mr-5 hover:text-brandgold "
                >
                  Home
                </li></a
              >
              <a class="" href="/about">
                <li
                  class:text-brandgold={$page.path === "/about"}
                  class="mr-5 hover:text-brandgold "
                >
                  About
                </li></a
              >
              <a class="" href="/service">
                <li
                  class:text-brandgold={$page.path === "/service"}
                  class="mr-5 hover:text-brandgold"
                >
                  Service
                </li></a
              >
              <a class="" href="/team">
                <li
                  class:text-brandgold={$page.path === "/team"}
                  class="mr-5 hover:text-brandgold "
                >
                  Team
                </li></a
              >

              <a class="" href="/contact">
                <li
                  class:text-brandgold={$page.path === "/contact"}
                  class="mr-5 hover:text-brandgold"
                >
                  Contact
                </li></a
              >
            </ul>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-white text-3xl tracking-widest mb-3"
          >
            Contact
          </h2>
          <nav class="list-none mb-10">
            <h2 class="text-white">Farm Bay</h2>

            <h2 class="text-white">Reedbuck Farm</h2>

            <h2 class="text-white">Acturus, Goromonzi</h2>
            <h2 class="text-white">+263 773 516 700</h2>
            <h2 class="text-white">+263719 516 700</h2>
          </nav>
        </div>

        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <div
            class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
          >
            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-white"
                >Name or Email</label
              >
              <input
                label="name"
                type="text"
                id="footer-field"
                name="footer-field"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-brandgold text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label for="footer-field" class="leading-7 text-sm text-white"
                >Phone Number</label
              >

              <input
                label="name"
                type="number"
                id="footer-field"
                name="footer-field"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label for="footer-field" class="leading-7 text-sm text-white"
                >Message</label
              >

              <textarea
                id="message"
                name="message"
                cols="20"
                rows="5"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div>
            <button
              class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-brandgold border-0 py-2 px-6 focus:outline-none hover:text-brandblue rounded"
              >Send</button
            >
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          >
            <a class="text-white">
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
            <a class="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                on:click={onTwitter}
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
            <a class="ml-3 text-white">
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
            <a class="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</Animate>
