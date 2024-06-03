/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    fontFamily: {
      sans: ["Lato", "monospace"],
    },

    extend: {
      colors: {
        main: " #E5ECF0",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
