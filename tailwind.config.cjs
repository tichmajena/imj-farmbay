const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        brandblue: "#222a35",
        brandgold: "#e7ba1e",
      },
    },
  },
  plugins: [],
  
};

module.exports = config;
