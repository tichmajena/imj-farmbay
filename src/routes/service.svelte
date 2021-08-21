<script context="module">
  import { browser } from "$app/env";
  export const prerender = true;
  export const router = browser;
</script>

<script>
  import Animate from "$lib/components/Animate.svelte";
  import Header from "$lib/components/Header.svelte";
  import pic from "$lib/images/farmbay-bg-01.jpg";
  import tractor_ic from "$lib/icons/farm-tractor.svg";
  import farm_ic from "$lib/icons/farm.svg";
  import certification_ic from "$lib/icons/certificate-medal-quality.svg";
  import irrigation_ic from "$lib/icons/agriculture-irrigation.svg";
</script>

<Animate>
  <section>
    <Header background={pic}
      ><span class="text-gray-200">AGRO BUSINESS</span></Header
    >
  </section>
  <section class="bg-gray-200 text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
      >
        <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <img src={farm_ic} class="sm:w-16 sm:h-16 w-10 h-10" alt="" />
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Operations
          </h2>
          <p class="leading-relaxed text-base">
            Farm Bay is uniquely situated 35km from Harare...Our operations are
            situated on a 124 ha with two 40m boreholes, two tractors, sizeable
            workforce and drip irrigation.
          </p>
        </div>
      </div>
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
      >
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Production
          </h2>
          <p class="leading-relaxed text-base">
            Farm Bay produces peas, fresh & dried tomatoes on a sizeable
            hectarage and a further 30ha is strategically set aside and
            projected to produce garlic, ginger, shelling & export peas, all
            pepper varieties, courgettes, red and yellow onions and watermelons.
          </p>
          <p class="leading-relaxed text-base">
            We have also embarked on a project that has seen 15 hectares being
            dedicated for floriculture, such as chrysanthemums production which
            is on a small scale as a pilot project. As a member of the Export
            Flower Growers Association of Zimbabwe, this gives us an opportunity
            to tap into the cut flower global producers market with our core
            flower bouquets ranging from; Roses, Solidago, Gypsohila, Tuberosa,
            Asters, Burplerium and Leatrice
          </p>
        </div>
        <div
          class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <img src={tractor_ic} class="sm:w-16 sm:h-16 w-10 h-10" alt="" />
        </div>
      </div>
      <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
        <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <img src={irrigation_ic} class="sm:w-16 sm:h-16 w-10 h-10" alt="" />
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Sustainability
          </h2>
          <p class="leading-relaxed text-base">
            We have and are still reinforcing our Sustainable horticultural
            practices in order to reduce production input, reduce environmental
            impact, increase resource use efficiency, and improve water body and
            soil biodiversity
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="w-full ">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="flex flex-col md:w-8/12 my-8 mx-auto p-8">
        <div class="mb-14">
          <h2
            class="lg:text-8xl  md:text-7xl sm:text-6xl text-5xl font-bold mb-4 text-gray-300"
          >
            Agro Processing
          </h2>
          <div class="pl-24">
            <ul class="text-2xl">
              <li class="text-gray-500">Pineapple Dried fruit.</li>
              <li class="text-gray-500">Apple dried fruit.</li>
              <li class="text-gray-500">Mango dried fruit.</li>
              <li class="text-gray-500">Banana Dried fruit.</li>
            </ul>
            <h3 class=" text-gray-700 text-lg font-medium mt-4">EXTRAS</h3>
            <ul class="text-2xl">
              <li class=" text-gray-500">Mawuyu</li>
              <li class=" text-gray-500">Mopane Worms</li>
              <li class=" text-gray-500">Macademia Nuts</li>
              <li class=" text-gray-500">Tumeric</li>
            </ul>
          </div>
        </div>

        <div class="mb-14">
          <h2
            class="lg:text-8xl  md:text-7xl sm:text-6xl text-5xl font-bold mb-4 text-gray-300"
          >
            Fruits
          </h2>
          <div class="pl-24">
            <ul class="text-2xl">
              <li class=" text-gray-500">Strawberries</li>
              <li class=" text-gray-500">Watermellon</li>
              <li class=" text-gray-500">Paw Paw</li>
              <li class=" text-gray-500">Mangos</li>
            </ul>
          </div>
        </div>

        <div class="mb-14">
          <h2
            class="lg:text-8xl  md:text-7xl sm:text-6xl text-5xl font-bold mb-4 text-gray-300"
          >
            Vegetables
          </h2>
          <div class="pl-24">
            <ul class="text-2xl">
              <li class=" text-gray-500">Tomatoes</li>
              <li class=" text-gray-500">Peas</li>
              <li class=" text-gray-500">Carrots</li>
              <li class=" text-gray-500">Onions</li>
              <li class=" text-gray-500">Rape</li>
              <li class=" text-gray-500">Garlic</li>
              <li class=" text-gray-500">Brocccoli</li>
              <li class=" text-gray-500">Cauflower</li>
              <li class=" text-gray-500">Potatoes</li>
              <li class=" text-gray-500">Green Beans</li>
              <li class=" text-gray-500">Ginger</li>
              <li class=" text-gray-500">Yellow Green Red Peppers</li>
            </ul>
          </div>
        </div>
      </div>

      <div />
    </div>
  </section>
  <section class="bg-brandgold p-8">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="text-center md:w-8/12 mx-auto m-8">
        <div class="h-16 w-16 mx-auto mb-8 text-red-400">
          <img src={certification_ic} alt="" />
        </div>
        <h2 class="text-2xl mb-4 text-brandblue">Certification</h2>
        <p class="text-brandblue mb-4 mt-2">
          Our Agro-Business aspiring to being a BRC Global Standards (version 7)
          & Global Gap Standards accredited. It will also adhere to USFDA FSMA
          regulations. BRC certification is expected by 2022.We are also
          targeting the Kosher & Organic certification to be attained by March
          2022.
        </p>
      </div>
    </div>
  </section>
</Animate>
