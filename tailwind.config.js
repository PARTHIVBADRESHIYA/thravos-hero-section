const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-ligatures': {
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
      });

      // 🔥 Add your custom zoomed-out screen utility here:
      addUtilities(
        {
          '.footer-center-fix': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        },
        {
          variants: ['responsive'], // ensures Tailwind generates it for all breakpoints
        }
      );
    }),
  ],
};
