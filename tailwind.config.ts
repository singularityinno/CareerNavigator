import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#EA6AA4",
        black: "#03030A",
        "black-secondary": "#181821",
        grey: "#8E959B",
        blue: "#38B1DE",
        yellow: "#E8C93C",
        teal: "#52DCD4",
        "blue-secondary": "#1C2A36",
      },
    },
  },
  plugins: [],
};
export default config
