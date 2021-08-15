<script>
  import Animate from "$lib/components/Animate.svelte";
  import ronnie from "/RonnieChigombe.jpg";
  import callifinos from "/CallifinosKGuvi.jpg";
  import farai from "/FaraiRChinomona.jpg";
  import tino from "/TinotendaFeshete.jpg";
  import hazel from "/HazelMasvinhise.jpeg";
  import yeukai from "/YeukaiChikakano.jpeg";
  import image from "$lib/images/farmbay-bg-01.jpg";
  import Header from "$lib/components/Header.svelte";
</script>

<Animate>
  <section class="w-full">
    <Header background={image}>Leadership & Expertise</Header>
  </section>
  <section class="w-full">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="w-1/2 m-8">
        <h2 class="text-2xl text-gray-700">Our Commitment</h2>
        <p class="font-thin text-gray-500">
          As part of our commitment to deliver a functional agro business that
          will thrive for the farm management and operational services our team
          which forms the overall management team has the necessary commitment
          expertise to lead Farm Bay to growth and performance absed
          profitability.
        </p>
      </div>

      <div>
        <div class="p-4">
          <div class="w-28 mx-auto">
            <img
              alt="gallery"
              class=" inset-0 w-full  rounded-full h-full "
              src={farai}
            />
          </div>

          <h2
            class="tracking-widest title-font text-center font-medium text-gray-700 mb-1"
          >
            Farai R Chinomona
          </h2>
          <h1 class="title-font text-center font-medium text-gray-500 mb-3">
            Founder/Director
          </h1>
          <p class="text-gray-500 text-center font-thin">
            An experienced middle level manager, business development and farmer
            with 10 years’ experience in Horticulture and Livestock farming,
            Bachelor of Business Studies in Management – Africa University
            Master of Science in Agricultural Production Chain Management–
            Current Study
          </p>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24  mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="sm:text-3xl text-2xl text-gray-700 font-medium title-font mb-4 "
            >
              Our Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              An experienced management team leads our operations
            </p>
          </div>
          <div class="flex flex-wrap  -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <img
                  alt="team"
                  class="md:w-40 md:h-40 w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
                  src={ronnie}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    RonnieChigombe
                  </h2>
                  <p class="text-gray-500">Agronomist</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <img
                  alt="team"
                  class="md:w-40 md:h-40 w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
                  src={hazel}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Hazel Masvinhise
                  </h2>
                  <p class="text-gray-500">
                    International Commodity Trade Facilitation
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <img
                  alt="team"
                  class="md:w-40 md:h-40 w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
                  src={callifinos}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Callifinos K Guvi
                  </h2>
                  <p class="text-gray-500">Corporate Legal Affairs</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <img
                  alt="team"
                  class="md:w-40 md:h-40 w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
                  src={yeukai}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Yeukai Chikakano
                  </h2>
                  <p class="text-gray-500">Strategy</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <img
                  alt="team"
                  class="md:w-40 md:h-40 w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
                  src={tino}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Tinotenda Feshete
                  </h2>
                  <p class="text-gray-500">Technical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</Animate>
