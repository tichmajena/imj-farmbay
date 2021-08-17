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
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg px-8 pt-4 pb-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-xl mb-3 font-medium title-font">
          Get intouch
        </h2>
        <p class="leading-relaxed text-gray-600" />
        <div class="mb-3">
          <div class="flex">
            <div class="h-4 w-4 pt-1">
              <img src={phone_ic} loading="lazy" alt="" class="w-full" />
            </div>
            <div class="flex flex-wrap mb-2">
              <a href="tel:+263773516700" class="link ml-3 text-sm"
                >+26377 351 6700,</a
              >
              <a href="tel:+263719516700" class="link ml-3 text-sm"
                >+26371 951 6700</a
              >
              <a href="tel:+263779480896" class="link ml-3 text-sm"
                >+26377 948 0896</a
              >
            </div>
          </div>
          <div class="flex">
            <div class="h-4 w-4 pt-1">
              <img src={mail_ic} loading="lazy" alt="" class="w-full" />
            </div>
            <div class="flex flex-col mb-2">
              <a href="mailto:info@farmbay.co.zw" class="link ml-3 text-sm"
                >info@farmbay.co.zw</a
              >
              <a href="mailto:finance@farmbay.co.zw" class="link ml-3 text-sm"
                >finance@farmbay.co.zw</a
              >
              <a href="mailto:sales@farmbay.co.zw" class="link ml-3 text-sm"
                >sales@farmbay.co.zw</a
              >
              <a
                href="mailto:procurement@farmbay.co.zw"
                class="link ml-3 text-sm">procurement@farmbay.co.zw</a
              >
              <a href="mailto:marketing@farmbay.co.zw" class="link ml-3 text-sm"
                >marketing@farmbay.co.zw</a
              >
            </div>
          </div>
          <div class="hidden">
            <div class="h-4 w-4 pt-1">
              <img src={place_ic} loading="lazy" alt="" class="w-full" />
            </div>
            <div class="flex flex-col">
              <a href="" class="link ml-3 text-sm"
                >Farm Bay Pvt Reedbuck Farm Acturus, Goromonzi.</a
              >
            </div>
          </div>
        </div>
        <div class="relative mb-4">
          <label for="email" class="hidden leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="hidden leading-7 text-sm text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
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
