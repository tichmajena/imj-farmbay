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
    </div>
  </section>
</Animate>
