<script context="module">
  import { browser } from "$app/env";
  // export const prerender = true;
  // export const router = browser;
  export const load = async ({ fetch }) => {
    //! This should be the name of the route, in this case  it's 'blog'
    const res = await fetch("/blog.json");

    const json = await res.json();

    if (res.ok) {
      //const jsonData = await res.json();
      const posts = json;

      // When you return a prop the name should be the same as the one in "export let ..." in the script section
      return {
        props: { posts },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import Header from "$lib/components/Header.svelte";
  import pic from "$lib/images/farmbay-bg-01.jpg";

  //import format from "date-fns/format/index";

  // This should be the same as name of the prop in the script module above
  export let posts;
</script>

<section class="w-full">
  <Header background={pic}><span class="text-white">BLOG</span></Header>
</section>

<section class="w-full">
  <div class="container mx-auto">
    {#each posts as post}
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700"
                >{post._embedded["wp:term"][0][0].name}</span
              >
              <span class="text-sm text-gray-500">{post.date}</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {post.title.rendered}
              </h2>
              <p class="leading-relaxed">
                {@html post.excerpt.rendered}
              </p>
              <a
                class="text-indigo-500 inline-flex items-center mt-4"
                sveltekit:prefetch
                href="/blog/{post.slug}"
                >Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- <script>

    

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
