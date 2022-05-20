<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
  <div
    class="w-32 h-32 inline-flex items-center justify-center rounded-full bg-brandgold text-indigo-500 flex-shrink-0"
  >
    <slot name="icon" />
  </div>

  <div class="flex-grow">
    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
      <slot name="title" />
    </h2>
  </div>
</div>
