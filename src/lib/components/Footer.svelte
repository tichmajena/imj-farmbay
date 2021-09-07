<script>
  import { page } from "$app/stores";
  import Animate from "$lib/components/Animate.svelte";

  let email;
  let message;
  let sending = false;
  let ready = true;
  let success = false;
  let failed = false;
  let msg = "";

  $: body = {
    email,
    message,
    name: "Name",
    subject: "From Farmbay Website",
  };

  let apiURL =
    "https://cms.farmbay.co.zw/wp-json/contact-form-7/v1/contact-forms/5/feedback";

  async function sendForm() {
    ready = false;
    sending = true;

    let formData = new FormData();

    formData.append("your-name", body.name);
    formData.append("your-email", body.email);
    formData.append("your-subject", body.subject);
    formData.append("your-message", body.message);

    let res = await fetch(apiURL, {
      body: formData,
      method: "post",
    });

    let message = await res.json();
    if (message.status === "mail_sent") {
      sending = false;
      success = true;
    } else {
      sending = false;
      failed = true;
      console.log(message);
      msg = message.message;
    }
  }
</script>

<Animate>
  <footer class="text-white body-font bg-brandblue">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap md:text-left order-first">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-white tracking-widest  text-xl mb-3"
          >
            Menu
          </h2>
          <nav class="list-none mb-10 text-gray-500">
            <ul class="flex flex-col">
              <a class="font-light" href="/">
                <li
                  class:text-brandgold={$page.path === "/"}
                  class="mr-5 hover:text-brandgold "
                >
                  Home
                </li></a
              >
              <a class="font-light" href="/about">
                <li
                  class:text-brandgold={$page.path === "/about"}
                  class="mr-5 hover:text-brandgold "
                >
                  About
                </li></a
              >
              <a class="font-light" href="/service">
                <li
                  class:text-brandgold={$page.path === "/service"}
                  class="mr-5 hover:text-brandgold"
                >
                  Service
                </li></a
              >
              <a class="font-light" href="/team">
                <li
                  class:text-brandgold={$page.path === "/team"}
                  class="mr-5 hover:text-brandgold "
                >
                  Team
                </li></a
              >

              <a class="font-light" href="/blog">
                <li
                  class:text-brandgold={$page.path === "/blog"}
                  class="mr-5 hover:text-brandgold "
                >
                  Blog
                </li></a
              >

              <a class="font-light" href="/contact">
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
            class="title-font font-medium text-white text-xl tracking-widest mb-3"
          >
            Contact
          </h2>
          <div class="list-none mb-10 font-light">
            <h2 class="text-gray-500">Farm Bay</h2>
            <h2 class="text-gray-500">Reedbuck Farm</h2>
            <h2 class="text-gray-500">Acturus, Goromonzi</h2>
            <h2 class="text-gray-500">+263 773 516 700</h2>
            <h2 class="text-gray-500">+263719 516 700</h2>
            <h2 class="text-gray-500">+263779 480 896</h2>
          </div>
        </div>

        <div class="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
          <div
            class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-start items-end md:justify-start"
          >
            <div class="relative sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label
                for="footer-field"
                class="leading-7 hidden text-sm text-white">Email</label
              >
              <input
                label="email"
                type="email"
                bind:value={email}
                id="footer-field"
                name="footer-field"
                placeholder="Your email"
                class="w-full mb-2 bg-gray-700 bg-opacity-50 rounded border border-gray-500 focus:bg-transparent focus:ring-2 focus:ring-brandgold focus:border-brandgold text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                for="footer-field"
                class="leading-7 hidden text-sm text-white">Phone Number</label
              >

              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                bind:value={message}
                cols="20"
                rows="3"
                class="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-500 focus:border-brandgold focus:ring-2 focus:ring-brandgold text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="text-gray-300 text-sm py-2">
            {#if failed}
              {msg}
            {/if}
          </div>
          <div>
            <button
              on:click={sendForm}
              class:bg-brandgold={ready}
              class:bg-green-400={success}
              class:bg-red-400={failed}
              class:bg-yellow-600={sending}
              class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-brandblue border-0 py-2 px-6 focus:outline-none hover:text-brandblue rounded"
            >
              {#if sending}
                <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg> Processing
              {:else if success}
                Received, thank you!
              {:else if failed}
                Somthing went wrong
              {:else if ready}
                Send
              {/if}
            </button>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col h-full">
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          >
            <a
              href="https://www.facebook.com/Farm.BayZw/"
              class="ml-3 text-white hover:text-brandgold"
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
              class="ml-3 text-white  hover:text-brandgold"
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
              class="ml-3 text-white  hover:text-brandgold"
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
              class="ml-3 text-white hover:text-brandgold"
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
    </div>
  </footer>
</Animate>
