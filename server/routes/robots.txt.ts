const siteUrl = 'https://askara.basim.id'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /_nuxt/',
    '',
    `Host: ${siteUrl.replace('https://', '')}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n')
})
