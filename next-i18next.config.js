module.exports = {
  i18n: {
    locales: ['default', 'vi', 'en'],
    defaultLocale: 'default',
  },
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
