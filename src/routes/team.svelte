<script context="module">
  import { browser, dev } from "$app/env";
  export const prerender = true;
  export const router = browser;
</script>

<script>
  import Animate from "$lib/components/Animate.svelte";
  import ronnie from "$lib/media/RonnieChigombe.jpg";
  import callifinos from "$lib/media/CallifinosKGuvi.jpg";
  import farai from "$lib/media/FaraiRChinomona.jpg";
  import tino from "$lib/media/TinotendaFeshete.jpg";
  import hazel from "$lib/media/HazelMasvinhise.jpeg";
  import yeukai from "$lib/media/YeukaiChikakano.jpeg";
  import image from "$lib/images/farmbay-bg-01.jpg";
  import Header from "$lib/components/Header.svelte";
  import TeamCard from "$lib/components/TeamCard.svelte";

  let pic = "https://dummyimage.com/200x200";
</script>

<Animate>
  <section class="w-full">
    <Header background={image}>Leadership & Expertise</Header>
  </section>
  <section class="w-full">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="w-1/2 m-8">
        <h2 class="text-2xl text-gray-700">Our Commitment</h2>
        <p class="text-gray-500">
          As part of our commitment to deliver a functional agro business our
          team which forms the overall management, has the necessary commitment
          and expertise to lead Farm Bay to performance based profitability and
          growth.
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="w-full max-w-screen-xl mx-auto">
      <div>
        <div class="p-4">
          <div class="w-64 h-64 mx-auto mb-6">
            <img
              alt="gallery"
              class=" inset-0 w-full  rounded-full h-full "
              src={farai}
            />
          </div>

          <h2
            class="title-font text-xl text-center font-medium text-gray-700 mb-1"
          >
            Farai R Chinomona
          </h2>
          <h1 class="title-font text-center font-medium text-gray-500 mb-3">
            Founder/Director
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-center text-base">
            An experienced middle level manager, business development and farmer
            with 10 years’ experience in Horticulture and Livestock farming,
            Bachelor of Business Studies in Management – Africa University
            Master of Science in Agricultural Production Chain Management–
            Current Study
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="text-gray-600 body-font lg:w-10/12 mx-auto">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              An experienced management team leads our operations
            </p>
          </div>
          <div class="flex flex-wrap justify-center w-full">
            <TeamCard pic={ronnie}
              ><span slot="name">Ronnie Chigombe</span><span slot="position"
                >Agronomist</span
              ></TeamCard
            >
            <TeamCard pic={hazel}
              ><span slot="name">Hazel Masvinhise</span><span slot="position"
                >International Commodity Trade Facilitation</span
              ></TeamCard
            >
            <TeamCard pic={callifinos}
              ><span slot="name">Callifinos K Guvi</span><span slot="position"
                >Corporate Legal Affairs</span
              ></TeamCard
            >
            <TeamCard pic={yeukai}
              ><span slot="name">Yeukai Chikakano</span><span slot="position"
                >Strategy</span
              ></TeamCard
            >
            <TeamCard pic={tino}
              ><span slot="name">Tinotenda Fashete</span><span slot="position"
                >Technical</span
              ></TeamCard
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</Animate>
