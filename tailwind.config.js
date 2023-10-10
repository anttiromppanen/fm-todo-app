/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        base: "1.125rem",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        userBrightBlue: "hsl(220, 98%, 61%)",
        userBgGradient1: "hsl(192, 100%, 67%)",
        userBgGradient2: "hsl(280, 87%, 65%)",

        userLightLightGray: "hsl(0, 0%, 98%)",
        userLightLightGrayBlue1: "hsl(236, 33%, 92%)",
        userLightLightGrayBlue2: "hsl(233, 11%, 84%)",
        userLightDarkGrayBlue1: "hsl(236, 9%, 61%)",
        userLightDarkGrayBlue2: "hsl(235, 19%, 35%)",

        userDarkDarkBlue: "hsl(235, 21%, 11%)",
        userDarkDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        userDarkLightGrayBlue: "hsl(234, 39%, 85%)",
        userDarkLightGrayBlueHover: "hsl(236, 33%, 92%)",
        userDarkGrayBlue1: "hsl(234, 11%, 52%)",
        userDarkGrayBlue2: "hsl(233, 14%, 35%)",
        userDarkGrayBlue3: "hsl(237, 14%, 26%)",
        userDarkListItemBottomBorder: "hsl(235, 17%, 26%)",
      },
      backgroundImage: {
        userHeaderBgDarkMobile: "url('/bg-mobile-dark.jpg')",
        userHeaderBgDarkDesktop: "url('/bg-desktop-dark.jpg')",
        userHeaderBgLightMobile: "url('/bg-mobile-light.jpg')",
        userHeaderBgLightDesktop: "url('/bg-desktop-light.jpg')",
      },
    },
  },
  plugins: [],
};
