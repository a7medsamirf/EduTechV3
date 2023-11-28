// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap',
          crossorigin: ''
        }
      ],
    },

    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  
  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/main.css'
  
  ],
  plugins: [

  ],
  components: [{ path: '~/components', pathPrefix: false,},],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content']
})
