
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // ✅ App directory
    "./pages/**/*.{js,ts,jsx,tsx}",      // ✅ Pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
