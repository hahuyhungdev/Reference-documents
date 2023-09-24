const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      // ...defaultTheme.screens,
      mb: { max: "359px" },
    },
    fontFamily: {
      sans: ["SFProText", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        "header-bg": "#4992D6",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "btn-primary": "var(--btn-primary)",
        "btn-secondary": "var(--btn-secondary)",
        "blue-600": "var(--blue-600)",
        "gray-900": "var(--gray-900)",
      },
      backgroundImage: {
        "background-sign-in": "url('/images/background-sign-in.png')",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
