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
    '/page/**': { isr: 60 },
    '/post/**': { isr: 60 },
    // Disable SSR for Sanity Studio
    '/studio/**': { ssr: false }
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
    useCdn: false,
    apiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || "2024-03-15",
    token: process.env.NUXT_SANITY_API_READ_TOKEN,
    visualEditing: {
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      studioUrl: process.env.NUXT_PUBLIC_STUDIO_URL || 'http://localhost:3000/studio',
      zIndex: 51
    }
  },

  runtimeConfig: {
    public: {
      studioUrl: process.env.NUXT_PUBLIC_STUDIO_URL || 'http://localhost:3000/studio'
    }
  },

  vite: {
    optimizeDeps: {
      include: ['react-compiler-runtime', 'react', 'react-dom']
    },
    define: {
      // Fix untuk styled-components di Sanity Studio
      'process.env': {
        REACT_APP_SC_ATTR: 'data-styled'
      }
    }
  }
})
