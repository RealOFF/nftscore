module.exports = {
  presets: [
    'next/babel',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
};
