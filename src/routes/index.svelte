<script>
  import img1 from "$lib/images/download-1.jpg";
  import img2 from "$lib/images/download.jpg";
  import img3 from "$lib/images/images-1.jpg";
  import img4 from "$lib/images/images-2.jpg";
  import img5 from "$lib/images/images.jpg";
  import img6 from "$lib/images/Vegetable-fruit-sweet-pea-seeds-Snow-peas-seed-Bonsai-plants-Seeds-for-home-garden-150-seeds.jpg";
  import picture from "$lib/images/farmbay-bg-01.jpg";
  import Animate from "$lib/components/Animate.svelte";
</script>

<Animate>
  <section class="w-full">
    <div class="w-full max-w-screen-xl mx-auto">
      <div>
        <img src={picture} alt="" />
      </div>
      <div class="bg-brandblue py-10 px-24 text-center">
        <h1 class="text-white sm:text-4xl text-3xl font-medium title-font mb-4">
          Welcome
        </h1>
        <p class="text-white lg:w-2/3 mx-auto leading-relaxed text-base">
          Farm Bay is an exclusive business situated 40km North East of Harare,
          in Goromonzi, Mashonaland East. Farm Bay has vested interests in local
          & global export produce & processing.
        </p>
      </div>
      <!-- Gallery -->
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="text-3xl md:text-5xl sm:text-3xl  font-medium title-font mb-4 text-gray-500"
            >
              Produce Insight
            </h1>
            <div
              class="flex space-x-10 md:p-4 md:justify-center m-8 lg:w-2/3 mx-auto leading-relaxed text-base"
            >
              <a href="#" class="text-gray-400 text-2xl md:text-4xl "
                >Agro Processing</a
              >
              <a href="#" class="text-gray-400 text-2xl md:text-4xl ">Fruits</a>
              <a href="#" class="text-gray-400 text-2xl md:text-4xl "
                >Vegetables</a
              >
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={img1}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                  >
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={img2}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                  >
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={img3}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                  >
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={img4}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                  >
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={img5}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                  >
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={img6}
                />
                <div
                  class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                >
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                  >
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</Animate>
