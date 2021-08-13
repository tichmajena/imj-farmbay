<script>
  import Animate from "$lib/Animate.svelte";
  import pic from "$lib/farmbay-bg-01.jpg";
</script>

<Animate>
  <section class="w-full">
    <div class="w-full max-w-screen-xl mx-auto">
      <div>
        <img src={pic} alt="" />
      </div>

      <div class="flex  flex-row">
        <div class="m-8 w-1/2">
          <img src={pic} alt="" />
        </div>

        <div class="m-7 w-1/2">
          <h2 class="text-2xl text-gray-700">Operations</h2>
          <p class="font-thin text-gray-500">
            Farm Bay is uniquely situated 35km from Harare...Our operations are
            situated on a 124 ha with two 40m boreholes, two tractors, sizeable
            workforce and drip irrigation.
          </p>
        </div>
      </div>
      <div class="flex flex-row m-8">
        <div class="w-1/2 pr-10">
          <h2 class="text-2xl mb-4 text-gray-700">Production</h2>
          <p class="font-thin text-gray-500">
            Farm Bay produces peas, fresh & dried tomatoes on a sizeable
            hectarage and a further 30ha is strategically set aside and
            projected to produce garlic, ginger, shelling & export peas, all
            pepper varieties, courgettes, red and yellow onions and watermelons.
          </p>
          <p class="font-thin text-gray-500 mt-2">
            We have also embarked on a project that has seen 15 hectares being
            dedicated for floriculture, such as chrysanthemums production which
            is on a small scale as a pilot project. As a member of the Export
            Flower Growers Association of Zimbabwe, this gives us an opportunity
            to tap into the cut flower global producers market with our core
            flower bouquets ranging from; Roses, Solidago, Gypsohila, Tuberosa,
            Asters, Burplerium and Leatrice
          </p>
        </div>
        <div class="flex space-y-5 w-1/2 flex-col">
          <img src={pic} alt="" class="w-50" />
          <img src={pic} alt="" class="w-50" />
          <img src={pic} alt="" class="w-50" />
        </div>
      </div>
      <div class="flex  flex-row">
        <div class="m-8">
          <img src={pic} alt="" />
        </div>

        <div class="m-5 ">
          <h2 class="text-2xl text-gray-700">Sustainability</h2>
          <p class="font-thin text-gray-500">
            We have and are still reinforcing our Sustainable horticultural
            practices in order to reduce production input, reduce environmental
            impact, increase resource use efficiency, and improve water body and
            soil biodiversity
          </p>
        </div>
      </div>

      <div class="md:flex md:flex-row  m-8">
        <div class="">
          <h2 class="text-2xl text-gray-700">Agro Processing</h2>
          <div class="">
            <li class="font-thin text-gray-500">Pineapple Dried fruit.</li>
            <li class="font-thin text-gray-500">Apple dried fruit.</li>
            <li class="font-thin text-gray-500">Mango dried fruit.</li>
            <li class="font-thin text-gray-500">Banana Dried fruit.</li>
          </div>
        </div>
        <div class="">
          <p class="m-8 text-gray-700">Extras</p>

          <li class=" text-gray-500">Mawuyu</li>
          <li class=" text-gray-500">Mopane Worms</li>
        </div>

        <div class=" m-8">
          <h2 class="text-2xl  text-gray-700">Fruits</h2>
          <div class="">
            <li class=" text-gray-500">Strawberries</li>
            <li class=" text-gray-500">Watermellon</li>
            <li class=" text-gray-500">Paw Paw</li>
            <li class=" text-gray-500">Mangos</li>
          </div>
        </div>

        <div class="">
          <h2 class="text-2xl mb-4 text-gray-700">Fruits</h2>
          <div>
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
          </div>
        </div>
      </div>

      <div />
    </div>
    <div class="text-center m-8">
      <h2 class="text-2xl mb-4 text-gray-700">Certification</h2>
      <p class="font-thin text-gray-500 mb-4 mt-2">
        Our Agro-Business aspiring to being a BRC Global Standards (version 7) &
        Global Gap Standards accredited. It will also adhere to USFDA FSMA
        regulations. BRC certification is expected by 2022.We are also targeting
        the Kosher & Organic certification to be attained by March 2022
      </p>
    </div>
  </section>
</Animate>
