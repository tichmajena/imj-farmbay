<script>
  export let background;
</script>

<div class="overflow-hidden relative" style="height:40vh">
  <img class="w-full h-full relative object-cover" src={background} alt="" />
  <div class="absolute h-full w-full inset-0 z-10 bg-black opacity-60" />
  <div class="absolute max-w-screen-xl mx-auto inset-0 h-full w-full z-20">
    <h1
      class="mx-8 absolute left-0 -bottom-2 capitalize font-bold text-4xl md:text-5xl"
    >
      <slot />
    </h1>
  </div>
</div>
