<script context="module">
  import { browser, dev } from "$app/env";
  export const prerender = true;
  export const router = browser;
</script>

<script>
  import Animate from "$lib/components/Animate.svelte";
  import picture from "$lib/media/image1.jpeg";
  import mail_ic from "$lib/icons/mail-solid.svg";
  import phone_ic from "$lib/icons/phone-solid.svg";
  import place_ic from "$lib/icons/place-solid.svg";
</script>

<Animate>
  <section class="text-gray-600  body-font relative">
    <img class="absolute z-0 h-full w-full object-cover" src={picture} alt="" />
    <div class="absolute inset-0 bg-black bg-opacity-50 z-10">
      <!-- <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
      /> -->
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Feedback
        </h2>
        <p class="leading-relaxed text-gray-600" />
        <div class="div-block-13">
          <div class="flex">
            <div class="h-5 w-5">
              <img
                src="images/phone-solid.svg"
                loading="lazy"
                alt=""
                class="w-full"
              />
            </div>
            <div class="div-block-16">
              <a href="tel:+263242668026" class="link">(024) 2668026 / </a>
              <a href="tel:+263242668096" class="link">2668096/ </a>
              <a href="tel:+263242668543" class="link">2668543</a>
            </div>
          </div>
          <div class="flex">
            <div class="h-5 w-5">
              <img
                src="images/mail-solid.svg"
                loading="lazy"
                alt=""
                class="w-full"
              />
            </div>
            <div class="div-block-16">
              <a href="mailto:info@farmbay.co.zw" class="link"
                >info@farmbay.co.zw</a
              >
              <a href="mailto:info@farmbay.co.zw" class="link"
                >finance@farmbay.co.zw</a
              >
              <a href="mailto:info@farmbay.co.zw" class="link"
                >sales@farmbay.co.zw</a
              >
              <a href="mailto:info@farmbay.co.zw" class="link"
                >procurement@farmbay.co.zw</a
              >
              <a href="mailto:info@farmbay.co.zw" class="link"
                >marketing@farmbay.co.zw</a
              >
            </div>
          </div>
          <div class="flex">
            <div class="h-5 w-5">
              <img
                src="images/place-solid.svg"
                loading="lazy"
                alt=""
                class="w-full"
              />
            </div>
            <div class="div-block-16">
              <a href="mailto:info@zimkings.com" class="link"
                >Farm Bay Pvt Reedbuck Farm Acturus, Goromonzi.</a
              >
            </div>
          </div>
        </div>
        <p class="leading-relaxed mb-5 text-gray-600">Acturus, Goromonzi</p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          class="text-white bg-brandblue border-0 py-2 px-6 focus:outline-none hover:text-brandgold rounded text-lg"
          >Send</button
        >
      </div>
    </div>
  </section>
</Animate>
