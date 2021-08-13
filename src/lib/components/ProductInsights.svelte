<script>
  export let img_src;
</script>

<div class="flex flex-wrap -m-4">
  <div class="p-4 lg:w-1/4 md:w-1/2">
    <div class="h-full flex flex-col items-center text-center">
      <img
        alt="team"
        class="flex-shrink-0 rounded-full w-24 h-24 object-cover object-center mb-4"
        src={img_src}
      />
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">
          <slot name="statistic" />
        </h2>
        <h3 class="text-gray-500 mb-3"><slot name="produce" /></h3>
      </div>
    </div>
  </div>
</div>
