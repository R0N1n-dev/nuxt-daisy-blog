// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'My life Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  //ssr: false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxt/content", "nuxt-windicss"],
  buildModules: [],
  content: {
    //Options
  },
});
