const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    resolve(__dirname, '../src/app.jsx')
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: false
            }
          },
          'sass-loader'
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
  optimization: {
    minimizer: [ new TerserPlugin() ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      config: JSON.stringify(require(`../config/${process.env.NODE_ENV}.json`))
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      filename: 'index.html'
    })
  ]
};
