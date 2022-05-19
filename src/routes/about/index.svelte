<script context="module">
  import { browser } from "$app/env";
  export const prerender = true;
  export const router = browser;

  export const load = async ({ fetch }) => {
    //! This should be the name of the route, in this case  it's 'blog'
    const res = await fetch("/about.json");

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
  import Gallery from "$lib/components/Gallery.svelte";
  import Header from "$lib/components/Header.svelte";
  import pic from "$lib/images/farmbay-bg-01.jpg";
  export let images;
</script>

<Animate>
  <section class="w-full">
    <Header background={pic}><span class="text-white">ABOUT</span></Header>
  </section>
  <section class="w-full py-4 md:py-16">
    <div class="w-full max-w-screen-xl mx-auto">
      <div>
        <div class="flex flex-col md:flex-row ">
          <div class=" m-8">
            <p class="font-light">
              Farm Bay aspires to be an agri-business of note contributing to
              the global food and nutrition security. Special diets and Organics
              are the new norm due to new different diseases and illness there
              is need to supply the market with untainted nutrition for the
              general wellness of the planet. Consumers are now considous of
              what they eat ensures a healthy and nutritionally enriched world.
            </p>
          </div>

          <div>
            <button class="bg-brandgold text-2xl py-8 px-3">
              VIEW OUR PROFILE
            </button>
          </div>

          <div class="m-8">
            <h2 class=" text-xl mb-4">Vision</h2>
            <p class=" font-light mt-8">
              To be positioned as a first choice agro business for our partners
            </p>
            <h2 class=" mt-4 mb-4  text-xl">Mission</h2>
            <p class=" font-light">
              Farm Bay is uniquely positioned to evolve into a leading premier
              exporter of premium fruits & vegetables to the global market under
              global certification standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-brandblue text-white py-16">
    <div class="w-full max-w-screen-xl mx-auto">
      <div>
        <div class=" ">
          <h2 class="text-2xl text-center">Our Values</h2>
          <div class="flex flex-col md:flex-row md:space-x-4 m-8 ">
            <div class="mx-0 p-0 mb-4">
              <h2 class="font-bold">Sustainability</h2>
              <p class="font-light">
                We are intentional about our systems thereby ensuring that we do
                not compromise the Agro-Business’ social, economic and &
                environmental fabric.
              </p>
            </div>
            <div class="mx-0 p-0 mb-4">
              <h2 class="font-bold">Integrity</h2>
              <p class="font-light">
                We conduct our agro-business processes and practices in an
                uncompromising way thereby positioning us to ensure we adhere to
                global business standards.
              </p>
            </div>
            <div class="mx-0 p-0 mb-4">
              <h2 class="font-bold">Partners</h2>
              <p class="font-light">
                Our partners are an integral part of our value chain associates
                such as Human Capital, Market players, shareholders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16">
    <div class="w-full max-w-screen-xl mx-auto">
      <div>
        <h2 class="text-2xl text-center text-gray-700">Our History</h2>
      </div>
      <div class="flex flex-col md:flex-row md:space-x-4 m-8">
        <div class="md:w-1/2 pr-5 mb-8">
          <h2 class="font-bold text-gray-700">Market Gardening</h2>
          <p class="font-light text-gray-500">
            What started out as a passion project doing peas and tomatoes by our
            then full time employed Director took time to set out a vision and a
            mission through trial and error to establish the beginnings of Farm
            Bay.
          </p>
        </div>
        <div class="md:w-1/2">
          <h2 class="font-bold  text-gray-700">Farm Bay</h2>
          <p class="font-light text-gray-500">
            With a bigger vision to contributing to food security production, be
            a global export market player for Zimbabwe. Farm Bay is now being
            positioned to broaden its fruit and vegetable production, develop
            and operate state of the art infrastructure with plans for a Pack
            House, Cooling facility, 3 more boreholes, employee infrastructure
            and sustainable farming practises.
          </p>
        </div>
      </div>
      <div class="h-96 w-full">
        <Gallery pictures={images} />
      </div>
    </div>
  </section>
</Animate>
