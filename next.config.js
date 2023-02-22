const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  output: 'standalone',
  reactStrictMode: false,
  webpack(config) {
    config.plugins.push(new StylelintWebpackPlugin())
    config.resolve.fallback = { fs: false }
    return config
  },
  i18n: {
    ...i18n,
    localeDetection: false,
  },
  env: {
    PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DB_URL: process.env.DB_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STOREAGE_BUCKET: process.env.STOREAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    REGION: process.env.REGION,
  },
}

module.exports = nextConfig
