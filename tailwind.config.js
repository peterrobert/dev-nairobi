const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#000066",
          emerald: "#50C878",
          gray: "#D3D3D3",
          light: "#F8FAFC",
          teal: "#000066",
          tealLight: "#F8FAFC",
          terracotta: "#E27D60",
          terracottaLight: "#50C878",
          gray50: "#F8FAFC",
          gray100: "#F1F5F9",
          gray800: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        hover: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
