const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};

module.exports = config;
