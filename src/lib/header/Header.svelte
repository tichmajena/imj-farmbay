<script>
  import { page } from "$app/stores";
  import logo from "$lib/logo.png";
</script>

<!-- header -->
<header class="text-gray-600 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <a class="flex title-font items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="" />
    </a>
    <nav
      class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base "
    >
      <a class="mr-5 lg:inline-flex lg:w-3 py- hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Service</a>
      <a class="mr-5 hover:text-gray-900">Team</a>
      <a class="mr-5 hover:text-gray-900">Contact </a>
    </nav>
  </div>
</header>
