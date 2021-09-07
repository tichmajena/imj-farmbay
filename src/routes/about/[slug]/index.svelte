<script context="module">
    // see https://kit.svelte.dev/docs#loading
    import { goto, prefetch, invalidate } from "$app/navigation";
  
    export const load = async ({ page, fetch }) => {
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