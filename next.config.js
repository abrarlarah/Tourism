

// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     // other experimental options if you have any
//   },
// };

const path = require('path');

module.exports = {
  reactStrictMode: true,
  experimental: {},
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/Tourism' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Tourism' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};
