<script context="module">
  import { browser } from "$app/env";
  export const prerender = true;
  export const router = browser;
</script>

<script>
  import fresh_tomatoes from "$lib/media/fresh_tomatoes.jpg";
  import dried_tomatoes from "$lib/media/dried_tomatoes.jpg";
  import broccoli from "$lib/media/broccoli.jpg";
  import cauliflower from "$lib/media/cauliflower.jpg";
  import red_onion from "$lib/media/red_onions.jpg";
  import peas from "$lib/media/peas.jpg";
  import mangetout from "$lib/media/mangetout.jpg";
  import sugarsnap from "$lib/media/sugarsnap-1.jpg";
  import carrots from "$lib/media/carrots.jpg";
  import watermelons from "$lib/media/watermelon.jpg";
  import farai from "$lib/media/FaraiRChinomona.jpg";

  import picture from "$lib/media/farm-bay-hero.jpg";
  import Animate from "$lib/components/Animate.svelte";
  import ProductInsights from "$lib/components/ProductInsights.svelte";
  import IconCard from "$lib/components/IconCard.svelte";

  import tomato_ic from "$lib/icons/tomato-vegetable.svg";
  import mango_ic from "$lib/icons/mango.svg";
  import motif from "$lib/icons/farm-bay-motif-white-01.svg";
  import TeamCard from "$lib/components/TeamCard.svelte";

  import farmec from "$lib/media/Farmec-Logo.svg";
  import freshco from "$lib/media/Fresh-co.png";
  import mlambo from "$lib/media/Mlambo-holdings.png";
  import zfc from "$lib/media/ZFC-ltd-logo.png";
</script>

<Animate>
  <section class="w-full bg-gray-200">
    <div class="hero bg-blend-overlay relative z-0 overflow-hidden">
      <img
        class="relative z-0 h-full w-full object-cover"
        src={picture}
        alt=""
      />
      <div
        class="absolute h-full w-full flex justify-center items-center inset-0 z-10 bg-black opacity-60"
      >
        <img src={motif} class="hidden lg:w-3/12 w-8/12 opacity-10" alt="" />
      </div>
    </div>
    <div class="w-full relative z-10 -m-24 max-w-screen-xl  mx-auto">
      <div
        class="bg-white pt-8 pb-24 px-4 text-center w-9/12 mx-auto rounded-lg shadow-md"
      >
        <h1
          class="text-brandblue sm:text-4xl text-3xl font-medium title-font mb-4"
        >
          Welcome
        </h1>
        <p class="text-brandblue lg:w-2/3 mx-auto leading-relaxed text-base">
          Farm Bay is an exclusive Agro-business situated 40km North East of
          Harare, in Goromonzi, Mashonaland East. Farm Bay has vested interests
          in local & global export produce & processing.
        </p>
      </div>
      <div
        class="bg-brandblue flex md:flex-row flex-col w-8/12 mx-auto items-center -mt-8 py-8 rounded-lg"
      >
        <div
          class="sm:w-1/3 text-center sm:pr-8 sm:py-8 rounded-full flex flex-col justify-center h-full"
        >
          <div class="-mt-20 md:mt-0 mb-4 md:mb-0 md:-ml-10 w-24 h-24  ">
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

          <p class="text-white mx-8 lg:w-10/12 mb-4 leading-relaxed text-base">
            Our Director’s Message Farmbay aspires to be an agri-business of
            note contributing to the global food and nutrition security. Our
            major drivers are export crops fruits, vegetables and oil-seeds
            among others : Tomatoes (fresh & dried), Peas, Asparagus, Melons,
            Strawberries, Citrus, Passion fruit and Sesame seeds with hope to
            expand our produce as we grow. We are commited to healthy living and
            our goal is to provide the freshest, healthiest and nutritious foods
            whilst sustaining our farm environment, employee welfare and the
            community at large.
          </p>
          <p class="text-white mx-8 lg:w-10/12 mb-4 leading-relaxed text-base">
            We adhere to a SIP value system:
            Sustainability-Integrity-Partnerships
          </p>

          <p class="text-white mx-8 lg:w-10/12 leading-relaxed text-base">
            At Farm Bay, we believe that we are what we eat, hence our primary
            motivation to provide fresh, healthy and nutritious farm fresh
            produce for the global community.
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
                  class="text-3xl md:text-4xl sm:text-3xl  font-medium title-font mb-32 text-gray-500"
                >
                  Our Agro-Business
                </h1>
                <div
                  class="flex flex-col md:flex-row flex-wrap sm:-m-4 -mx-4 mb-10 -mt-4 md:space-y-0 space-y-6"
                >
                  <IconCard>
                    <span slot="icon">
                      <img src={mango_ic} class="w-16 h-16" alt="" />
                    </span>
                    <span slot="title">Agro-Processing</span>
                  </IconCard>
                  <IconCard>
                    <span slot="icon">
                      <img src={tomato_ic} class="w-16 h-16" alt="" />
                    </span>
                    <span slot="title">Vegetables</span>
                  </IconCard>
                  <IconCard>
                    <span slot="icon">
                      <img src={mango_ic} class="w-16 h-16" alt="" />
                    </span>
                    <span slot="title">Fruits</span>
                  </IconCard>
                </div>
                <a href="/service">
                  <button
                    class="flex items-center mx-auto mt-16 text-white bg-brandblue border-0 py-2 px-8 focus:outline-none hover:text-brandgold rounded text-lg"
                    >Learm more <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg></button
                  ></a
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
    <div class="bg-brandblue py-24 w-full">
      <div class="w-full relative z-10 -m-24 max-w-screen-xl  mx-auto">
        <div class="w-full md:w-9/12 lg:w-6/12 p-8 mx-auto">
          <h2 class="text-white md:text-4xl text-3xl text-center mb-6">
            2020 Produce Insight
          </h2>
          <p class="text-white text-center mb-6">
            Due to the Covid 19 Pandemic which ensured lockdowns and an uptake
            in fresh produce consumption and production. Farm Bay produced
            considerable fresh produce, mainly peas, onions, and tomatoes
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-1 gap-4">
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
            <span class="text-brandgold" slot="statistic">5000 kgs </span>
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
    </div>
  </section>
  <section>
    <div class="w-full relative z-10 max-w-screen-xl  mx-auto">
      <h1
        class="text-3xl md:text-4xl sm:text-3xl text-center font-medium title-font my-16 text-gray-500"
      >
        Our Partners
      </h1>
      <div class="flex md:flex-row flex-col items-center w-full mx-auto mb-16">
        <!--  -->
        <div class="md:w-1/4 w-full p-5 flex justify-center">
          <img src={farmec} alt="" class="h-16" />
        </div>
        <div class="md:w-1/4 w-full p-5 flex justify-center">
          <img src={freshco} alt="" class="h-16" />
        </div>
        <div class="md:w-1/4 w-full p-5 flex justify-center">
          <img src={zfc} alt="" class="h-16" />
        </div>
        <div class="md:w-1/4 w-full p-5 flex justify-center">
          <img src={mlambo} alt="" class="h-32 -mt-8" />
        </div>
      </div>
    </div>
  </section>
</Animate>

<style>
  .hero {
    height: 92vh;
  }
</style>
