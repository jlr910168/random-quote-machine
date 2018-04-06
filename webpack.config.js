const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: resolve('./src/'),
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin([resolve('./dist')]),
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
    }),
  ],
};
