/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
    localeDetection: false,
  },
};

module.exports = nextConfig;
