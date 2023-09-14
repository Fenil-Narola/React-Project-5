/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#FFEAAE",
        "dark-yellow": "#F6BE00",
        orange: "#F6820C",
      },
      height: {
        calc: "calc(100vh - 158px)",
      },
    },
  },
  plugins: [],
};
