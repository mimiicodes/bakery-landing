import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        wendy: ['"Wendy One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
