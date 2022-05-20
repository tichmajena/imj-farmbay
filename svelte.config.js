// import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

import vercel from "@sveltejs/adapter-vercel";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),
    // adapter: adapter({
    //   // default options are shown
    //   pages: "build",
    //   assets: "build",
    //   fallback: "app.html",
    // }),
    // hydrate the <div id="svelte"> element in src/app.html
    //target: "#svelte",
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
