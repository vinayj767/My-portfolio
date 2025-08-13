/** @type {import('tailwindcss').Config} */
export default {
  // Scans your files for Tailwind classes to generate only the CSS you need.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Customizes the design (e.g., adding custom colors, fonts, or spacing).
  theme: {
    extend: {},
  },
  // Adds extra features with plugins (e.g., for better typography or forms).
  plugins: [],
}