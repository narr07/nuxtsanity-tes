// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/hints',
    '@nuxtjs/sanity'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    // ISR: Regenerate page setiap 60 detik jika ada request
    '/': { isr: 60 },
    '/**': { isr: 60 }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || "kdwtvkc2",
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || "production",
    useCdn: true, // Set false untuk data real-time, true untuk production dengan cache
    apiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || "2024-03-15"
  },

  vite: {
    optimizeDeps: {
      include: ['react-compiler-runtime', 'react', 'react-dom']
    }
  }
})
