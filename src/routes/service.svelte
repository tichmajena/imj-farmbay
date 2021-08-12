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

      <div class="flex flex-row">
        <div>
          <img src={pic} alt="" />
        </div>

        <div>
          <h2 class="text-2xl text-gray-700">Operations</h2>
          <p class="font-thin text-gray-500">
            Farm Bay is uniquely situated 35km from Harare...Our operations are
            situated on a 124 ha with two 40m boreholes, two tractors, sizeable
            workforce and drip irrigation.
          </p>
        </div>
      </div>
      <div class="">LINE</div>
      <div class="flex flex-row">
        <div>
          <h2 class="text-2xl text-gray-700">Production</h2>
          <p class="font-thin text-gray-500">
            Farm Bay produces peas, fresh & dried tomatoes on a sizeable
            hectarage and a further 30ha is strategically set aside and
            projected to produce garlic, ginger, shelling & export peas, all
            pepper varieties, courgettes, red and yellow onions and watermelons.
          </p>
          <p class="font-thin text-gray-500">
            We have also embarked on a project that has seen 15 hectares being
            dedicated for floriculture, such as chrysanthemums production which
            is on a small scale as a pilot project. As a member of the Export
            Flower Growers Association of Zimbabwe, this gives us an opportunity
            to tap into the cut flower global producers market with our core
            flower bouquets ranging from; Roses, Solidago, Gypsohila, Tuberosa,
            Asters, Burplerium and Leatrice
          </p>
        </div>

      </div>
    </div>
  </section>
</Animate>
