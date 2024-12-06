/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small devices (phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // 2X large devices (extra-wide screens)
      },
      colors: {
        darkBlue: "#22177A",
      },
      margin: ["responsive", "hover", "focus"],
      padding: ["responsive"],
    },
  },
  plugins: [],
}