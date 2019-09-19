const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const envConfig = require(`./webpack.${process.env.NODE_ENV}`);

module.exports = merge(commonConfig, envConfig);
