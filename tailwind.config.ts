export default {
  content: [
    "./build/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "panel-darker-bg": "#121212",
        "darker-bg": "#000000",
        primary: "#1DB954",
        "primary-bg": "#ABAEEE",
        "input-bg": "#2a2a2a",
      },
      gridTemplateColumns: {
        "filter-list": "1fr 4fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
