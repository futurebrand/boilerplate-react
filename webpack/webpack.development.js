const { resolve } = require('path');
const webpack = require('webpack');

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
    new webpack.LoaderOptionsPlugin({
      debug: false,
      options: {
        context: __dirname
      }
    }),
  ]
};
