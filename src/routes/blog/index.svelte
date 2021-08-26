<script context="module">
  export const load = async ({ fetch }) => {
    //! This should be the name of the route, in this case  it's 'blog'
    const res = await fetch("/blog.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const post = await jsonData;

      // When you return a prop the name should be the same as the one in "export let ..." in the script section
      return {
        props: { post },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<!-- <script>

    // This should be the same as name of the prop in the script module above

    export let notes;
  </script>
  
  <h1 class="text-2xl font-bold ">Notes</h1>
  <a href="/notes/new">
    <button class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
      >Add Note</button
    >
  </a>
  
  {#each notes as note}
    <a sveltekit:prefetch href="/notes/{note.slug}">
      <h2>{note.title.rendered}</h2>
    </a>
  {/each} -->
