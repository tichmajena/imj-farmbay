<script>
  import fresh_tomatoes from "/fresh_tomatoes.jpg";
  import dried_tomatoes from "/dried_tomatoes.jpg";
  import broccoli from "/broccoli.jpg";
  import cauliflower from "/cauliflower.jpg";
  import red_onion from "/red_onions.jpg";
  import peas from "/peas.jpg";
  import mangetout from "/mangetout.jpg";
  import sugarsnap from "/sugarsnap-1.jpg";
  import carrots from "/carrots.jpg";
  import watermelons from "/watermelon.jpg";
  import farai from "/FaraiRChinomona.jpg";

  import picture from "/media/image1.jpeg";
  import Animate from "$lib/Animate.svelte";
  import ProductInsights from "$lib/components/ProductInsights.svelte";
</script>

<Animate>
  <section class="w-full bg-gray-200">
    <div>
      <img src={picture} alt="" />
    </div>
    <div class="w-full max-w-screen-xl  mx-auto">
      <div class="bg-white py-10  px-24 text-center">
        <h1
          class="text-brandblue sm:text-4xl text-3xl font-medium title-font mb-4"
        >
          Welcome
        </h1>
        <p class="text-brandblue lg:w-2/3 mx-auto leading-relaxed text-base">
          Farm Bay is an exclusive business situated 40km North East of Harare,
          in Goromonzi, Mashonaland East. Farm Bay has vested interests in local
          & global export produce & processing.
        </p>
      </div>
      <div class="bg-brandblue flex  h-64 rounded-lg">
        <div
          class="sm:w-1/3 text-center sm:pr-8 sm:py-8 rounded-full flex flex-col h-full  mb-4"
        >
          <div class="w-24 h-24  ">
            <img
              alt="gallery"
              class=" inset-0 w-full  rounded-full h-full items-center"
              src={farai}
            />
          </div>
        </div>
        <div>
          <h2
            class="text-white mx-8 sm:text-4xl text-3xl font-medium title-font mb-4"
          >
            Our Director's Message
          </h2>

          <p class="text-white mx-8 lg:w-2/3 leading-relaxed text-base">
            Farm Bay aspires to be an agri-business of note contributing to the
            global food and nutrition security.Special diets and Organics are
            the new norm due to new different diseases and illnesses there is
            need to supply the market with untainted nutrition for the general
            wellness of the planet. consumers are now conscious of what they eat
            so its intergral to offer
          </p>
        </div>
      </div>
      <!-- Gallery -->
      <div class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <h1
                  class="text-3xl md:text-5xl sm:text-3xl  font-medium title-font mb-4 text-gray-500"
                >
                  Produce Insight
                </h1>
                <div
                  class="flex flex-wrap sm:-m-4 -mx-4 mb-10 -mt-4 md:space-y-0 space-y-6"
                >
                  <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center"
                  >
                    <div
                      class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>

                    <div class="flex-grow">
                      <h2
                        class="text-gray-900 text-lg title-font font-medium mb-3"
                      >
                        Agro Processing
                      </h2>
                      <a class="mt-3 text-indigo-500 inline-flex items-center"
                        >Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center"
                  >
                    <div
                      class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3" />
                        <circle cx="6" cy="18" r="3" />
                        <path
                          d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                        />
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2
                        class="text-gray-900 text-lg title-font font-medium mb-3"
                      >
                        Fruits
                      </h2>
                      <a class="mt-3 text-indigo-500 inline-flex items-center"
                        >Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center"
                  >
                    <div
                      class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2
                        class="text-gray-900 text-lg title-font font-medium mb-3"
                      >
                        Vegetables
                      </h2>
                      <a class="mt-3 text-indigo-500 inline-flex items-center"
                        >Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >Button</button
                >
              </div>
            </section>
          </div>
          <div>
            <div>
              <!-- <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
        OUR TEAM
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them.
      </p>
    </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-brandblue w-full">
      <div class="w-1/2 p-8">
        <h2 class="text-white text-2xl">2020 Produce Insight</h2>
        <p class="text-white">
          Due to the Covid 19 Pandemic which ensured lockdowns and an uptake in
          fresh produce consumption and production. Farm Bay produced
          considerable fresh produce, mainly peas, onions, and tomatoes
        </p>
      </div>
      <div class="grid grid-cols-5 mb-1 gap-4">
        <ProductInsights img_src={fresh_tomatoes}>
          <span class="text-brandgold" slot="statistic">5000kg</span>
          <span slot="produce" class="text-white">Fresh Tomatoes</span>
        </ProductInsights>

        <ProductInsights img_src={dried_tomatoes}>
          <span class="text-brandgold" slot="statistic">3000kg</span>
          <span slot="produce" class="text-white">Dried Tomatoes</span>
        </ProductInsights>

        <ProductInsights img_src={broccoli}>
          <span class="text-brandgold" slot="statistic">5 000 kgs</span>
          <span slot="produce" class="text-white">Broccoli</span>
        </ProductInsights>

        <ProductInsights img_src={cauliflower}>
          <span class="text-brandgold" slot="statistic"
            >r 5 class="text-white"000 kgs
          </span>
          <span slot="produce">Cauliflower</span>
        </ProductInsights>

        <ProductInsights img_src={red_onion}>
          <span class="text-brandgold" slot="statistic">25 000 kgs</span>
          <span slot="produce">Red Onions</span>
        </ProductInsights>

        <ProductInsights img_src={peas}>
          <span class="text-brandgold" slot="statistic">35 000kgs</span>
          <span slot="produce" class="text-white">Shelled green peas </span>
        </ProductInsights>

        <ProductInsights img_src={mangetout}>
          <span class="text-brandgold" slot="statistic">10 000 kgs</span>
          <span slot="produce">Mangetout</span>
        </ProductInsights>

        <ProductInsights img_src={sugarsnap}>
          <span class="text-brandgold" slot="statistic">7 000 kgs</span>
          <span slot="produce" class="text-white">Sugarsnap </span>
        </ProductInsights>

        <ProductInsights img_src={carrots}>
          <span class="text-brandgold" slot="statistic">5 000kgs</span>
          <span slot="produce" class="text-white">Carrots</span>
        </ProductInsights>

        <ProductInsights img_src={watermelons}>
          <span class="text-brandgold" slot="statistic">6 tons</span>
          <span slot="produce" class="text-white">Watermelons </span>
        </ProductInsights>
      </div>
    </div>
  </section>
</Animate>
