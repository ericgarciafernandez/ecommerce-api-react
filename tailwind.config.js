/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/background.jpg')",
      },
    },
    colors: {
      text: "#011402",
      background: "#edfeed",
      primary: "#59bc5e",
      secondary: "#9dd3c4",
      accent: "#8bbc8e",
    },
  },
  plugins: [require("flowbite/plugin")],
};
