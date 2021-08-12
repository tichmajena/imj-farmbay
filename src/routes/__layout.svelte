<script>
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import "../app.postcss";
</script>

<Nav />
<slot />
<Footer />
