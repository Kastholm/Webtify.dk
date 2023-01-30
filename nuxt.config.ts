// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({


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
