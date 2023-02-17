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
    API_BASE_URL: process.env.API_BASE_URL,
  },
}

module.exports = nextConfig
