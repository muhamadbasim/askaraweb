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
const siteUrl = 'https://askara.basim.id'
const siteTitle = 'Askara Digital Technology'
const siteDescription =
  'PT Askara Digital Technology helps organizations innovate, transform, and grow through intelligent digital solutions.'
const ogImage = `${siteUrl}/images/brand/og-askara.jpg`

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
      title: siteTitle,
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/brand/favicon-32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/brand/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'theme-color', content: '#071B3A' },
        { name: 'application-name', content: siteTitle },
        { property: 'og:site_name', content: siteTitle },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:secure_url', content: ogImage },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Askara Digital Technology — Innovate. Transform. Accelerate.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImage },
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
