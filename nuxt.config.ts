// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: 'koncepp-nuxt-layer',
  app: {
    head: {
      title: 'Justin Da Silva - Full-Stack Developer',
      titleTemplate: '%s', // This prevents the package name from being appended
      meta: [
        { name: 'description', content: 'Full-stack developer with 15+ years of experience in web development, specializing in Vue.js, Node.js, and PHP.' }
      ]
    }
  },

  compatibilityDate: '2025-07-09'
})
