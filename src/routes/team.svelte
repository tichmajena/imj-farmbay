<script context="module">
  import { browser, dev } from "$app/env";
  export const prerender = true;
  export const router = browser;

  export const load = async ({ fetch }) => {
    const res = await fetch("/teamm");

    if (res.ok) {
      const jsonData = await res.json();
      const teams = await jsonData;

      return {
        props: { teams },
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
  import ronnie from "$lib/media/RonnieChigombe.jpg";
  import califinos from "$lib/media/CallifinosKGuvi.jpg";
  import farai from "$lib/media/FaraiRChinomona.jpg";
  import tino from "$lib/media/TinotendaFeshete.jpg";
  import hazel from "$lib/media/HazelMasvanhise.jpeg";
  import yeukai from "$lib/media/YeukaiChikakano.jpeg";
  import image from "$lib/images/farmbay-bg-01.jpg";
  import Header from "$lib/components/Header.svelte";
  import TeamCard from "$lib/components/TeamCard.svelte";
  import IconCard from "$lib/components/IconCard.svelte";
  import brain from "$lib/icons/Brain-icon.svg";
  import people from "$lib/icons/threepeople-icon.svg";
  import Carousel from "$lib/components/Carousel.svelte";

  let pic = "https://dummyimage.com/200x200";

  export let teams;
  //console.log(teams);

  const items = teams.map((props, i) => ({
    props: {
      name: props.title.rendered,
      position: props.position,
      fimg_url: props.fimg_url,
    },
    component: TeamCard,
  }));
</script>

<Animate>
  <section class="w-full">
    <Header background={image}
      ><span class="text-white">LEADERSHIP & EXPERTISE</span></Header
    >
  </section>
  <section class="w-full">
    <div class="w-full max-w-screen-xl mx-auto">
      <div
        class="flex flex-col md:items-center md:flex-row lg:w-10/12 md:w-2/3 w-full p-8 m-8 mx-auto"
      >
        <h2
          class="text-2xl w-1/2 md:text-right text-left md:mb-0 mb-2 text-gray-700 pr-4"
        >
          Our Commitment
        </h2>
        <p
          class="text-gray-500 lg:w-1/3 md:w-1/2 border-l-4 border-solid border-brandgold py-2 px-4"
        >
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
          <!-- 
          {#each teams as team}
            <div>Hi I am Team</div>
            {team.title.rendered}
          {/each} 
        
          {#each teams as team}
              <TeamCard pic={team.link}
                ><span slot="name">{team.title.rendered}</span><span
                  slot="position">Agronomist</span
                ></TeamCard
              >
            {/each}
        -->

          <div class="flex flex-wrap justify-center w-full">
            {#each teams as team}
              <TeamCard pic={team.fimg_url}>
                <span slot="name">{team.title.rendered}</span><span
                  slot="position">{team.position}</span
                ></TeamCard
              >
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full">
    <div class="w-full max-w-screen-xl p-8 mx-auto">
      <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
        <div
          class=" h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <IconCard>
            <span slot="icon"><img src={brain} alt="" class="w-16 h-16" /></span
            >
          </IconCard>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Employee Value Creation
          </h2>
          <p class="leading-relaxed text-base">
            A new employee culture value proposition with key elements such as
            creativity, service delivery and transparency is currently being
            implemented .
          </p>
        </div>
      </div>

      <div
        class="flex items-center mt-16 lg:w-3/5 mx-auto sm:flex-row flex-col"
      >
        <div
          class=" h-20 w-20 sm:mr-10  inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
        >
          <IconCard>
            <span slot="icon"><img src={brain} alt="" class="w-16 h-16" /></span
            >
          </IconCard>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Human Capital
          </h2>
          <p class="leading-relaxed text-base">
            The high quality of human capital on the market as Zimbabwe is an
            agricultural economy enables us to be in a competitive sector of
            crop production and processing . We intend to bolster our human
            capital by equipping them with the necessary skills for productivity
            .
          </p>
        </div>
      </div>
    </div>
  </section>
</Animate>
