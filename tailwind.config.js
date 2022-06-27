/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url('/src/images/headerbg.webp')",
        ladybg: "url('/src/images/lady.webp')",
        tournamentsBg: "url('/src/images/tournaments.png')",
      },
    },
  },
  plugins: [],
};
