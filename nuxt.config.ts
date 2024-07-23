// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@fedorae/nuxt-uikit"],
  app:{
    head:{
      title: "  Site Officiel de l\'Espoir du Caire",
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
      ]
    
    }
    
  },
  css:[
    '@/assets/css/main.css'
  ]
})