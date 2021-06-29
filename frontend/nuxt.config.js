export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'nuxt-i18n',
    '@nuxtjs/axios',
  ],

  i18n: {
    vueI18nLoader: true,
    locales: [
      // {
      //   code: 'es',
      //   iso: 'en-ES',
      //   name: 'Español',
      //   file: 'es-ES.js',
      // },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.js',
      },
      {
        code: 'zh',
        iso: 'zh-Hans',
        name: 'English',
        file: 'zh-Hans.js',
      },
      // {
      //   code: 'fr',
      //   iso: 'fr-FR',
      //   name: 'Français',
      //   file: 'fr-FR.js',
      // },
    ],
    lazy: true,
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
