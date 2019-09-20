const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
      '.css',
      '.png',
      '.jpg',
      '.svg',
      '.pdf',
      '.zip'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      assets: resolve(__dirname, '../src/assets'),
      components: resolve(__dirname, '../src/components'),
      helpers: resolve(__dirname, '../src/helpers'),
      layouts: resolve(__dirname, '../src/layouts'),
      pages: resolve(__dirname, '../src/pages'),
      services: resolve(__dirname, '../src/services'),
      store: resolve(__dirname, '../src/store')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        config: JSON.stringify(require(`../config/${process.env.NODE_ENV}.json`))
      }
    }),
    new FaviconsWebpackPlugin({
      logo: '../public/logo.png',
      mode: process.env.NODE_ENV === 'production' ? 'webapp' : 'light',
      devMode: process.env.NODE_ENV === 'production' ? 'webapp' : 'light',
      favicons: {
        background: '#333',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      filename: 'index.html',
      title: 'Boilerplate - Future Brand',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#FFF',
        'og:site_name': 'Boilerplate - Future Brand',
        'og:type': 'website',
        'twitter:card': 'summary',
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ]
};
