<script>
  import Animate from "$lib/Animate.svelte";
  import ronnie from "/RonnieChigombe.jpg";
  import callifinos from "/CallifinosKGuvi.jpg";
  import farai from "/FaraiRChinomona.jpg";
  import tino from "/TinotendaFeshete.jpg";
  import hazel from "/HazelMasvinhise.jpeg";
  import yeukai from "/YeukaiChikakano.jpeg";
</script>

<Animate>
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
          <div class="w-28 ">
            <img
              alt="gallery"
              class=" inset-0 w-full h-full items-center"
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

      <div>
        <h2 class="text-4xl text-center m-8 text-gray-700">Our Team</h2>
        <p class="text-gray-400 text-center m-8">
          An experienced management team leads our operations
        </p>
        <div class="flex  space-x-4 m-8 w-28">
          <div>
            <img src={ronnie} alt="" />
            <h2 class=" text-gray-700">RonnieChigombe</h2>
            <p class="text-gray-500 text-center font-thin">Agronomist</p>
          </div>
          <div>
            <img src={hazel} alt="" />
            <h2 class=" text-gray-700">Hazel Masvinhise</h2>
            <p class="text-gray-500 text-center font-thin">
              International Commodity Trade Facilitation
            </p>
          </div>
          <div>
            <img src={callifinos} alt="" />
            <h2 class=" text-gray-700">Callifinos K Guvi</h2>
            <p class="text-gray-500 text-center font-thin">
              Corporate Legal Affairs
            </p>
          </div>
        </div>
        <div class="flex flex-row-3 space-x-4 m-8 w-28">
          <div>
            <img src={yeukai} alt="" />
            <h2 class=" text-gray-700">Yeukai Chikakano</h2>
            <p class="text-gray-500 text-center font-thin">Strategy</p>
          </div>
          <div>
            <img src={tino} alt="" />
            <h2 class=" text-gray-700">Tinotenda Feshete</h2>
            <p class="text-gray-500 text-center font-thin">Technical</p>
          </div>
        </div>
      </div>

      <!-- <div class="flex flex-row">
        <div class="bg-brandblue m-8 w-1/6">
          <div class="lg:w-1/4 md:w-1/2 w-full m-8">
            <span
              class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
            >
              <a class="text-white">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
              <a class="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </a>
              <a class="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  />
                </svg>
              </a>
              <a class="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" stroke="none" />
                </svg>
              </a>
            </span>
          </div>
          <h2 class="text-4xl text-center m-8 text-white">Our Team</h2>

          <div
            class="text-brandgold border font-bold m-8 border-b-4 text-center w-2 border-brandgold"
          />
          <p class="text-gray-400 text-center m-8">
            An experienced management team leads our operations
          </p>
        </div>
        <div class="w-5/6">
          <div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={ronnie}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-3xl title-font font-medium text-indigo-500 mb-1"
                  >
                    Ronnie Chigombe
                  </h2>
                  <h1
                    class="title-font text-2xl font-medium text-gray-900 mb-3"
                  >
                    Agronomist
                  </h1>
                </div>
              </div>
            </div>

            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={callifinos}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-3xl title-font font-medium text-indigo-500 mb-1"
                  >
                    Callifinos K Guvi
                  </h2>
                  <h1
                    class="title-font text-2xl font-medium text-gray-900 mb-3"
                  >
                    Corporate Legal Affairs
                  </h1>
                </div>
              </div>
            </div>

            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={farai}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-3xl title-font font-medium text-indigo-500 mb-1"
                  >
                    Farai R Chinomona
                  </h2>
                  <h1
                    class="title-font text-2xl font-medium text-gray-900 mb-3"
                  >
                    Founder/Director
                  </h1>
                </div>
              </div>
            </div>
            <img src="" alt="" />

            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={tino}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-3xl title-font font-medium text-indigo-500 mb-1"
                  >
                    Tinotenda Feshete
                  </h2>
                  <h1
                    class="title-font text-2xl font-medium text-gray-900 mb-3"
                  >
                    Technical
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={hazel}
              />
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
              >
                <h2
                  class="tracking-widest text-3xl title-font font-medium text-indigo-500 mb-1"
                >
                  Hazel Masvinhise
                </h2>
                <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                  International Commodity Trade Facilitation
                </h1>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={yeukai}
              />
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
              >
                <h2
                  class="tracking-widest text-3xl title-font font-medium text-indigo-500 mb-1"
                >
                  Yeukai Chikakano
                </h2>
                <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                  Strategy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</Animate>
