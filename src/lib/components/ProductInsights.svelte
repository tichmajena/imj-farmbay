<script>
  export let img_src;
</script>

<div class="flex flex-wrap">
  <div class="p-4 lg:w-full md:w-w-full">
    <div class="">
      <img
        alt="team"
        class="flex-shrink-0 rounded-full w-24 h-24 object-cover object-center mb-4"
        src={img_src}
      />
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">
          <slot name="statistic" />
        </h2>
        <h3 class="text-white mb-3"><slot name="produce" /></h3>
      </div>
    </div>
  </div>
</div>
