<script context="module">
  import { browser } from "$app/env";
  export const prerender = true;
  export const router = browser;
  // see https://kit.svelte.dev/docs#loading
  import { goto, prefetch, invalidate } from "$app/navigation";

  export const load = async ({ params, fetch }) => {
    const res = await fetch(`/blog/${params.slug}.json`);

    if (res.ok) {
      const data = await res.json();
      const post = await data[0];

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

<script>
  import Header from "$lib/components/Header.svelte";

  export let post;
</script>

<section>
  <Header background={post.fimg_url}
    ><span class="text-white">{post.title.rendered}</span></Header
  >
</section>
<section class="w-full">
  <div class="container max-screen-md mx-auto">
    <div class="flex flex-wrap m-12">
      <div class="p-12 md:w-full flex flex-col items-start">
        <span
          class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"
          >{post._embedded["wp:term"][0][0].name}</span
        >
        <h2
          class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4"
        >
          {post.title.rendered}
        </h2>
        <p class="leading-relaxed">
          {@html post.excerpt.rendered}
        </p>
        <div
          class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-10 w-full"
        >
          <span
            class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>1.2K
          </span>
          <span
            class="text-gray-400 inline-flex items-center leading-none text-sm"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              />
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img
            alt="blog"
            src="https://dummyimage.com/104x104"
            class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900"
              >{post._embedded["author"][0].name}</span
            >
            <span
              class="text-gray-400 text-xs capitalize tracking-widest mt-0.5"
              >{post._embedded["author"][0].description}</span
            >
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
