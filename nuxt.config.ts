// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
     modules: [
          '@nuxtjs/tailwindcss', ['nuxt-swiper', {
            prefix: 'Swiper',
          }]
        ],
        css: ['~/assets/main.css'],
        build: {
          transpile: ['gsap', 'CSSRulePlugin'],
        
      },
  
})
