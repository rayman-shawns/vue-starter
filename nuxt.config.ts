// https://nuxt.com/docs/api/configuration/nuxt-config
import eslint from 'vite-plugin-eslint'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'bcgame-mobile',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      // link: [{ rel: 'stylesheet', type: 'text/css', href: 'fonts/iconfont.css' }],
      script: [
        // { src: 'https://unpkg.com/amfe-flexible@2.2.1/index.js' },
        // { src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=767903471451609&autoLogAppEvents=1' },
        // { src: 'https://apis.google.com/js/api:client.js' }
      ]
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' }
  },

  css: ['~/assets/css/reset.css', '~/assets/css/tailwind.css'],

  build: {
    transpile: ['gsap']
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {
        overrideBrowserslist: ['last 15 versions']
      }
    }
  },

  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@vant/nuxt', '@element-plus/nuxt'],

  pinia: {
    autoImports: [
      'defineStore' // import { defineStore } from 'pinia'
    ]
  },

  vant: {
    /** Options */
  },

  elementPlus: {
    /** Options */
  },

  typescript: {
    typeCheck: true
  },

  vite: {
    plugins: [eslint()]
  },

  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {}
    // ...other options
  }
})
