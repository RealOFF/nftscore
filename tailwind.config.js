const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      'apps/**/{src,pages,components,features}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      'libs/**/{src,pages,components,features}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        black: {
          100: '#111219',
          200: '#141820',
          300: '#1C2230',
          900: '#000000',
        },
        lightblue: {
          100: '#C3E1F6',
        },
        red: '#FF765E',
        green: '#8BE77D',
        gray: {
          50: '#F5F5F5',
          100: '#F1F5F9',
          200: 'rgba(255, 255, 255, 0.6)',
          400: '#A0A6AE4D',
          500: '#767676',
        },
      },
    },
  },
  plugins: [],
};
