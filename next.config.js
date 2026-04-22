const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Tourism' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // GitHub Pages static export
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  output: 'export',

  // Expose basePath to client-side code via env
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Images: unoptimized because output:'export' has no image server
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;
