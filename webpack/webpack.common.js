const { resolve } = require('path');

module.exports = {
  output: {
    filename: 'bundle_[hash].js',
    path: resolve(__dirname, '../build'),
    publicPath: '/'
  },
  context: resolve(__dirname, '../src'),
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.css',
      '.png',
      '.jpg',
      '.svg',
      '.pdf',
      '.zip'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      styles: resolve(__dirname, '../src/styles'),
      
      assets: resolve(__dirname, '../src/assets'),
      components: resolve(__dirname, '../src/components'),
      helpers: resolve(__dirname, '../src/helpers'),
      layouts: resolve(__dirname, '../src/layouts'),
      pages: resolve(__dirname, '../src/pages'),
      services: resolve(__dirname, '../src/services'),
      store: resolve(__dirname, '../src/store')
    }
  }
};
