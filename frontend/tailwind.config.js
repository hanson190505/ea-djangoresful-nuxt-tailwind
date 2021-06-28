module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        banner: '768px',
      },
      colors: {
        green: {
          450: '#8de06e',
          550: '#5bae3f',
          650: '#257e0a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
