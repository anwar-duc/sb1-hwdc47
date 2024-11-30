export default {
  darkMode: 'class', // This enables dark mode via a class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-slide-up': 'fadeInSlideUp 0.6s ease-out forwards', // Animation for fading in and sliding up
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' }, // Start: invisible and slide from below
          '100%': { opacity: '1', transform: 'translateY(0)' }, // End: fully visible and in place
        },
      },
    },
  },
  plugins: [],
};
