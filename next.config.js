const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // GitHub Pages static export
  basePath: process.env.NODE_ENV === 'production' ? '/Tourism' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Tourism' : '',
  trailingSlash: true,
  output: 'export',

  // Images: keep unoptimized ONLY because static export (output: 'export')
  // doesn't support the built-in image optimisation server.
  // All perf gains come from correct `sizes` + `loading` props in components.
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;
