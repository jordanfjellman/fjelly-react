const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      'DEBUG': false,
    }),
  ],
});
