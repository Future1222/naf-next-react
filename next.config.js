/** @type {import('next').NextConfig} */
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new StylelintWebpackPlugin())
    config.resolve.fallback = { fs: false }
    return config
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
