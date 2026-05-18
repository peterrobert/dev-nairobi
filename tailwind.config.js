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
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
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
