<script>
  export let pic;
</script>

<div class="md:w-1/3  sm:w-1/2 w-full flex justify-center mb-14 lg:mb-20">
  <div class="flex flex-col items-center text-center">
    <div class="w-48 h-64 mb-3">
      <img
        alt="team"
        class="flex-shrink-0 rounded-lg  h-full w-full object-cover object-center mb-4"
        src={pic}
      />
    </div>
    <div>
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">
          <slot name="name" />
        </h2>
        <h3 class="text-gray-500 w-56 mb-3"><slot name="position" /></h3>
      </div>
    </div>
  </div>
</div>
