

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
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};
