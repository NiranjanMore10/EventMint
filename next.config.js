// next.config.js
const path = require('path');
//const fs = require('fs');
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),
      };
    }

    return config;
  },
};
