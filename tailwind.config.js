const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    join(
      __dirname,
      'apps/**/{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      'libs/**/{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        primary: '#111219',
        'primary-100': '#141820',
        'primary-200': '#1C2230',
        secondary: '#C3E1F6',
        red: '#FF765E',
        green: '#8BE77D',
        'font-primary': '#ffffff',
        'font-secondary': 'rgba(255, 255, 255, 0.6)'
      }
    },
  },
  plugins: [],
}
