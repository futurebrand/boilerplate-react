const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    'react-hot-loader/patch',
    resolve(__dirname, '../src/app.jsx')
  ],
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    clientLogLevel: 'warning',
    stats: 'minimal',
    open: true,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
    publicPath: '/',
    watchContentBase: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader?sourceMap' },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve(__dirname, '../postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader?sourceMap',
            options: {
              includePaths: [
                resolve(__dirname, '../src/styles'),
                resolve(__dirname, '../node_modules')
              ]
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      config: JSON.stringify(require(`../config/${process.env.NODE_ENV}.json`))
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      options: {
        context: __dirname
      }
    }),
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      filename: 'index.html'
    })
  ]
};
