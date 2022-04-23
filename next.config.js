/**
 * @type {import('next').NextConfig}
 */

/**
 * TODO: remove .babelrc and replace it with swc
 */
const isProd = process.env.NODE_ENV === 'production'

const REQUIRED_CONFIG = {
  reactStrictMode: true, // true | false
  env: {
    SITE_NAME: 'Ntegral',
    BASE_URL: isProd ? 'http://localhost:3000' : 'http://localhost:3000',
    API_URL: process.env.API_URL || 'http://localhost:1337/api'
  },
  images: {
    domains: ['images.unsplash.com', 'ntgweb.blob.core.windows.net']
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false
  },
  extends: ['plugin:@next/next/recommended']
}

module.exports = REQUIRED_CONFIG
