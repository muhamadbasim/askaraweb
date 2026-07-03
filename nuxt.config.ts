import { execSync } from 'node:child_process'

function resolveBuildId() {
  const fromEnv = process.env.CF_PAGES_COMMIT_SHA || process.env.COMMIT_SHA || process.env.VERCEL_GIT_COMMIT_SHA

  if (fromEnv) {
    return fromEnv.slice(0, 12)
  }

  try {
    return execSync('git rev-parse --short=12 HEAD').toString().trim()
  } catch {
    return 'local'
  }
}

const buildId = resolveBuildId()

export default defineNuxtConfig({
  compatibilityDate: '2026-07-03',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
      Montserrat: [600, 700, 800],
    },
    display: 'swap',
  },
  app: {
    buildAssetsDir: `/_nuxt/${buildId}/`,
    head: {
      title: 'Askara Digital Technology',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'PT Askara Digital Technology helps organizations innovate, transform, and grow through intelligent digital solutions.',
        },
        { property: 'og:title', content: 'Askara Digital Technology' },
        {
          property: 'og:description',
          content:
            'Innovate. Transform. Accelerate. Company profile website for PT Askara Digital Technology.',
        },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
  nitro: {
    preset: 'cloudflare_pages',
  },
  routeRules: {
    '/': { prerender: true },
  },
})
