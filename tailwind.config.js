/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },

      colors: {
        violet: "#5964E0",
        lightViolet: "#939BF4",
        darkBlue: "#19202D",
        midnight: "#121721",
        lightGrey: "#F4F6F8",
        grey: "#9DAEC2",
        darkGrey: "#6E8098",
      },

      fontSize: {
        h1: "2.8rem",
        h2: "2.4rem",
        h3: "2rem",
        h4: "1.4rem",
        p: "1.6rem",
      },

      backgroundImage : {
        mobileHeader: "url(/images/mobile/bg-pattern-header.svg)",
        tabletHeader: "url(/images/tablet/bg-pattern-header.svg)",
        desktopHeader: "url(/images/desktop/bg-pattern-header.svg)"
      }
    },
  },
  plugins: [],
};
