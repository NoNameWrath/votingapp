const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },

  theme: {
    extend: {
      fontFamily: {
        hero: ["Julee"],
      },
    },
  },
};

module.exports = config;
