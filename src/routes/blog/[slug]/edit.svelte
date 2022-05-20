<script context="module">
  import { browser } from "$app/env";
  export const prerender = true;
  export const router = browser;
  // see https://kit.svelte.dev/docs#loading
  import { goto, prefetch, invalidate } from "$app/navigation";

  export const load = async ({ page, fetch }) => {
    console.log(page.params.slug);
    const res = await fetch(`/blog/${page.params.slug}.json`);

    if (res.ok) {
      console.log("res is ok");
      const data = await res.json();
      const post = await data[0];

      console.log(post);

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
  import FHeader from "$lib/components/Header.svelte";

  // import { getPosts, createPosts, editPost, removePost } from "$lib/js/utils";

  import { onMount } from "svelte";

  getPosts();

  export let post;
  console.log(post);

  let EditorJS;
  let editor;
  let Header;
  let SimpleImage;

  const creater = {
    title: "",
    content: "",
    status: "",
    author: "",
  };

  const editer = creater;

  onMount(async () => {
    EditorJS = (await import("@editorjs/editorjs")).default;
    Header = (await import("@editorjs/header")).default;
    SimpleImage = (await import("@editorjs/simple-image")).default;
    editor = new EditorJS({
      /**
       * Create a holder for the Editor and pass its ID
       */
      holder: "editorjs",

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        image: {
          class: SimpleImage,
          inlineToolbar: true,
        },
        // ...
      },

      /**
       * Previously saved data that should be rendered
       */
      data: post.content.rendered,
    });
    //
  });

  function saveContent() {
    editor.save().then((savedData) => {
      console.log(savedData);
    });
  }

  async function createPosts() {
    const res = await fetch(`/blog/${page.params.slug}.json`, {
      body: JSON.stringify(creater),
      method: "PUT",
    });
    const data = await res.json();

    console.log(res);
    console.log(data);
  }

  async function editPost() {
    const res = await fetch(`/blog/${page.params.slug}.json`, {
      body: JSON.stringify(editer),
      method: "PUT",
    });
    const data = await res.json();

    console.log(res);
    console.log(data);
  }
</script>

<section>
  <FHeader background={post.fimg_url} />
</section>

<section class="w-full">
  <div class="pt-20 container ">
    <div>
      <input
        bind:value={post.title.rendered}
        class="bg-brandgold"
        type="text"
      />
      <input
        bind:value={post.content.rendered}
        class="bg-brandgold"
        type="text"
      />
    </div>
    <div id="editorjs" />
    <div>
      <button on:click={createPosts} class="bg-brandgold">Create</button>
    </div>
    <div>
      <button on:click={editPost} class="bg-brandgold">Update</button>
    </div>
    <!-- <div>
      <button on:click={removePost} class="bg-brandgold">Delete</button>
    </div> -->
  </div>
</section>
