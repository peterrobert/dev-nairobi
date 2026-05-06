const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#9154FF',
                hover: '#7A3EE6',
                light: '#F4F0FF',
            },
            dark: {
                DEFAULT: '#0A0A0A',
                surface: '#121212',
                border: '#2A2A2A'
            },
            gray: {
                50: '#F9FAFB',
                100: '#F3F4F6',
                200: '#E5E7EB',
                300: '#D1D5DB',
                400: '#9CA3AF',
                500: '#6B7280',
                600: '#4B5563',
                700: '#374151',
                800: '#1F2937',
                900: '#111827',
            }
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Clash Display', 'sans-serif'],
        },
        backgroundImage: {
            'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(145, 84, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
            'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
        }
    }
},
  plugins: [],
};

module.exports = config;