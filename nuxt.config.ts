// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
      '~/assets/css/main.css',
    'highlight.js/styles/atom-one-dark.css',

  ],
  modules: [
      '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',


  ],
    plugins: [
      // '~/plugins/vue3-markdown-it.client.js'

    ],

})
