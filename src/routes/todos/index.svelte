<script context="module">
  import { enhance } from "$lib/form";

  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
    const res = await fetch("/todos.json");

    if (res.ok) {
      const todos = await res.json();

      return {
        props: { todos },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>
