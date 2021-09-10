<script context="module">
  import { browser } from "$app/env";
  export const prerender = true;
  export const router = browser;

  export const load = async ({ fetch }) => {
    //! This should be the name of the route, in this case  it's 'blog'
    const res = await fetch("/service.json");

    const json = await res.json();

    if (res.ok) {
      //const jsonData = await res.json();
      let rawArray = json.pictures;
      console.log(rawArray);
      // .map works like for each
      const images = rawArray.map((imageObj) => {
        return { id: imageObj.ID, src: imageObj.guid };
      });
      console.log(images);

      // When you return a prop the name should be the same as the one in "export let ..." in the script section
      return {
        props: { images },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import Animate from "$lib/components/Animate.svelte";
  import Header from "$lib/components/Header.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import pic from "$lib/images/farmbay-bg-01.jpg";
  import tractor_ic from "$lib/icons/farm-tractor.svg";
  import farm_ic from "$lib/icons/farm.svg";
  import certification_ic from "$lib/icons/certificate-medal-quality.svg";
  import irrigation_ic from "$lib/icons/agriculture-irrigation.svg";
  import id from "$lib/icons/id-icon.svg";
  import org from "$lib/icons/org-icon.svg";
  import IconCard from "$lib/components/IconCard.svelte";
  export let images;
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
          class="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <img src={farm_ic} class="sm:w-16 sm:h-16 w-16 h-16" alt="" />
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
          class="sm:w-32 sm:order-none order-first sm:h-32 h-32 w-32 sm:ml-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <img src={tractor_ic} class="sm:w-16 sm:h-16 w-16 h-16" alt="" />
        </div>
      </div>
      <div
        class="flex items-center mb-32 lg:w-3/5 mx-auto sm:flex-row flex-col"
      >
        <div
          class="sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <img src={irrigation_ic} class="sm:w-16 sm:h-16 w-16 h-16" alt="" />
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
    <div class="w-full max-w-screen-xl mx-auto ">
      <div class="flex flex-col md:w-8/12 my-8 mx-auto p-8">
        <div class="mb-14">
          <h2
            class="lg:text-8xl  md:text-7xl sm:text-6xl text-5xl font-bold mb-4 text-gray-300"
          >
            Agro Processing
          </h2>
          <div class="pl-24">
            <h3 class=" text-gray-300 sm:text-4xl md:text-6xl  mt-4">EXTRAS</h3>
            <ul class="text-2xl">
              <li class=" text-gray-500">Mawuyu</li>
              <li class=" text-gray-500">Mopane Worms</li>
              <li class=" text-gray-500">Tumeric</li>
            </ul>

            <h3 class=" text-gray-300 sm:text-3xl md:text-3xl mt-4">
              ORGANIC & NATURAL PRODUCTS
            </h3>

            <h3 class=" text-gray-700 text-lg font-medium mt-4">TEAS</h3>
            <ul class="text-2xl">
              <li class=" text-gray-500">Ressurection Herbal Tea</li>
              <li class=" text-gray-500">Rosella Tea</li>
              <li class=" text-gray-500">Zumbani Tea</li>
            </ul>

            <h3 class=" text-gray-700 text-lg font-medium mt-4">
              HERBS AND SPICES
            </h3>
            <ul class="text-2xl">
              <li class=" text-gray-500">Lavender fresh or dried</li>
              <li class=" text-gray-500">Lemon grass fresh or dried</li>
              <li class=" text-gray-500">ZLemon flakes or powder</li>
              <li class=" text-gray-500">Ginger flakes or powder or fresh</li>
              <li class=" text-gray-500">Rosemary fresh or dried</li>
              <li class=" text-gray-500">Marjorum fresh or dried</li>
              <li class=" text-gray-500">Mallow fresh or dried</li>
              <li class=" text-gray-500">Artemisia fresh or dried</li>
              <li class=" text-gray-500">Fever few fresh or dried</li>
              <li class=" text-gray-500">Mint fresh or dried</li>
              <li class=" text-gray-500">Catnip fresh or dried</li>
              <li class=" text-gray-500">Gotu kola fresh or dried</li>
              <li class=" text-gray-500">Oregano fresh or dried</li>
              <li class=" text-gray-500">Cayenne pepper raw dried or powder</li>
              <li class=" text-gray-500">ZGreat plantain fresh or dried</li>
              <li class=" text-gray-500">Milk thistle fresh or dried</li>
              <li class=" text-gray-500">Thyme fresh or dried</li>
              <li class=" text-gray-500">Nettle fresh or dried</li>
              <li class=" text-gray-500">Worm wood fresh or dried</li>
              <li class=" text-gray-500">Soap wort fresh or dried</li>
              <li class=" text-gray-500">Basil fresh or dried</li>
              <li class=" text-gray-500">Alfafa fresh or dried</li>
              <li class=" text-gray-500">Tarragon fresh or dried</li>
              <li class=" text-gray-500">Garlic flakes or powder</li>
              <li class=" text-gray-500">Resurrection bush powder</li>
              <li class=" text-gray-500">Makoni bush flakes</li>
              <li class=" text-gray-500">Avocado seed powder</li>
              <li class=" text-gray-500">Sorrel fresh</li>
              <li class=" text-gray-500">Dandelion fresh or dried</li>
              <li class=" text-gray-500">Moringa bark powder</li>
              <li class=" text-gray-500">Chilli flakes and powder</li>
              <li class=" text-gray-500">Aloe fresh and dried</li>
              <li class=" text-gray-500">Onion powder</li>
              <li class=" text-gray-500">Carrot flakes or powder</li>
              <li class=" text-gray-500">Parsley fresh and dried</li>
              <li class=" text-gray-500">Celery fresh and dried</li>
              <li class=" text-gray-500">French marigold fresh and dried</li>
              <li class=" text-gray-500">Calendula fresh and dried</li>
              <li class=" text-gray-500">Rosella</li>
              <li class=" text-gray-500">Garlic chive fresh</li>
            </ul>
            <h3 class=" text-gray-300 sm:text-3xl md:text-3xl mt-4">
              BAOBAB PRODUCTS
            </h3>
            <ul class="text-2xl">
              <li class=" text-gray-500">Baobab Juice</li>
              <li class=" text-gray-500">Baobab Powder</li>
              <li class=" text-gray-500">Baobab Fruits</li>
            </ul>

            <h2 class="text-gray-300 sm:text-3xl md:text-3xl mt-4">BUTTER</h2>
            <ul class="text-2xl">
              <li class=" text-gray-500">Peanut Butter</li>
              <li class=" text-gray-500">Tahini Butter</li>
            </ul>

            <h2 class="text-gray-300 sm:text-3xl md:text-3xl mt-4">
              SESAME PRODUCTS
            </h2>
            <ul class="text-2xl">
              <li class=" text-gray-500">Sesame Oil</li>
              <li class=" text-gray-500">Sesame Seeds Black and White</li>
              <li class=" text-gray-500">Sesame Natural seed</li>
              <li class=" text-gray-500">Sesame Dehulled Seed</li>
            </ul>

            <h2 class="text-gray-300 sm:text-3xl md:text-3xl mt-4">
              MACADAMIA
            </h2>
            <ul class="text-2xl">
              <li class=" text-gray-500">Macadamia nuts</li>
              <li class=" text-gray-500">Macadamia oil</li>
              <li class=" text-gray-500">Macademia Nuts</li>
            </ul>
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
                <li class=" text-gray-500">Granadilla (Passion Fruit)</li>
                <li class=" text-gray-500">Berries</li>
              </ul>
              <h3 class=" text-gray-700 text-lg font-medium mt-4">
                DRIED FRUITS
              </h3>
              <ul class="text-2xl">
                <li class=" text-gray-500">Dried Pineapple.</li>
                <li class=" text-gray-500">Dried Bananas.</li>
                <li class=" text-gray-500">Flavored Banana Chips.</li>
                <li class="text-gray-500">Pineapple Dried fruit.</li>
                <li class="text-gray-500">Apple dried fruit.</li>
                <li class="text-gray-500">Mango dried fruit.</li>
                <li class="text-gray-500">Banana Dried fruit.</li>
              </ul>
            </div>
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
              <li class=" text-gray-500">Asparagus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full bg-brandblue">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex items-center text-white mb-32 lg:w-3/5 mx-auto sm:flex-row flex-col"
      >
        <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <IconCard>
            <span slot="icon"><img src={org} alt="" class="w-16 h-16" /></span>
          </IconCard>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-white text-lg title-font font-medium mb-2">Market</h2>
          <p class="leading-relaxed text-base">
            We used the value chain development approach of starting from
            understanding what the market wants then using information gathered
            to inform the Farm Bay Strategy of the horticultural produce for
            production and processing This approach is underpinned by market
            -led production concept . Our study results highlighted
            opportunities for Farm Bay to be a competitive agro business in
            Zimbabwe .
          </p>
        </div>
      </div>

      <div
        class="flex items-center text-white lg:w-3/5 mx-auto sm:flex-row flex-col"
      >
        <div
          class="sm:w-32 sm:h-32  h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <IconCard>
            <span slot="icon"><img src={id} alt="" class="w-16 h-16" /></span>
          </IconCard>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-white text-lg title-font font-medium mb-2">
            Quality Control
          </h2>
          <p class="leading-relaxed text-base">
            Our Crop Production serves as the first port of call in our Value
            Chain hence mechanisms such as Pesticide Control, use of Control
            Charts, Crop Production and Processing guidelines are essential to
            Farm Bay .
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class=" p-8">
    <div class="h-96 w-full">
      <Gallery pictures={images} />
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
