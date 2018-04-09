const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: resolve('./src'),
  dist: resolve('./dist'),
  html: resolve('./src/index.html'),
};

module.exports = {
  entry: {
    app: paths.src,
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([paths.dist]),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ],
};
