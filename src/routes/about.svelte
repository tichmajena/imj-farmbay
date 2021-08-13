<script>
  import Animate from "$lib/components/Animate.svelte";
  import pic from "$lib/images/farmbay-bg-01.jpg";
</script>

<Animate>
  <section class="w-full">
    <div class="w-full max-w-screen-xl mx-auto">
      <div>
        <img src={pic} alt="" />
      </div>
      <div class="bg-brandblue">
        <div class="flex flex-row ">
          <div class="text-white m-8">
            <p class="font-thin">
              Farm Bay aspires to be an agri-business of note contributing to
              the global food and nutrition security. Special diets and Organics
              are the new norm due to new different diseases and illness there
              is need to supply the market with untainted nutrition for the
              general wellness of the planet. Consumers are now considous of
              what they eat ensures a healthy and nutritionally enriched world.
            </p>
          </div>

          <div class="m-8">
            <h2 class="text-white text-xl mb-4 ">Vision</h2>
            <p class="text-white font-thin mt-8">
              To be positioned as a first choice agro business for our partners
            </p>
            <h2 class="text-white mt-4 mb-4  text-xl">Mission</h2>
            <p class="text-white font-thin">
              Farm Bay is uniquely positioned to evolve into a leading premier
              exporter of premium fruits & vegetables to the global market under
              global certification standards.
            </p>
          </div>
        </div>
        <div class=" text-white">
          <h2 class="text-2xl text-center">Our Values</h2>
          <div class="flex flex-row space-x-4 m-8 text-white">
            <div>
              <h2 class="font-bold">Sustainability</h2>
              <p class="font-thin">
                We are intentional about our systems thereby ensuring that we do
                not compromise the Agro-Business’ social, economic and &
                environmental fabric.
              </p>
            </div>
            <div>
              <h2 class="font-bold">Integrity</h2>
              <p class="font-thin">
                We conduct our agro-business processes and practices in an
                uncompromising way thereby positioning us to ensure we adhere to
                global business standards.
              </p>
            </div>
            <div>
              <h2 class="font-bold">Partners</h2>
              <p class="font-thin">
                Our partners are an integral part of our value chain associates
                such as Human Capital, Market players, shareholders
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-2xl text-center text-gray-700">Our History</h2>
      </div>
      <div class="flex flex-row space-x-4 m-8">
        <div>
          <h2 class="font-bold text-gray-700">Market Gardening</h2>
          <p class="font-thin text-gray-500">
            What started out as a passion project doing peas and tomatoes by our
            then full time employed Director took time to set out a vision and a
            mission through trial and error to establish the beginnings of Farm
            Bay.
          </p>
        </div>
        <div>
          <h2 class="font-bold text-gray-700">Farm Bay</h2>
          <p class="font-thin text-gray-500">
            With a bigger vision to contributing to food security production, be
            a global export market player for Zimbabwe. Farm Bay is now being
            positioned to broaden its fruit and vegetable production, develop
            and operate state of the art infrastructure with plans for a Pack
            House, Cooling facility, 3 more boreholes, employee infrastructure
            and sustainable farming practises..
          </p>
        </div>
      </div>
    </div>
  </section>
</Animate>
