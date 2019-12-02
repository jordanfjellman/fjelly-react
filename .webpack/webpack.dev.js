const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../', 'dist'),
    hot: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      'DEBUG': true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
