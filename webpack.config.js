const { resolve } = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV;
const paths = {
  src: resolve('./src'),
  dist: resolve('./dist'),
  html: resolve('./src/index.html'),
};

const common = {
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
        include: paths.src,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([paths.dist]),
    new HtmlWebpackPlugin({
      template: paths.html,
      title: 'Random Quote Machine',
    }),
  ],
};

const development = {
  mode: 'development',
  devtool: 'inline-source-map',
};
const production = {
  mode: 'production',
  devtool: 'source-map',
};

if (mode === 'development') {
  module.exports = merge(common, development);
} else if (mode === 'production') {
  module.exports = merge(common, production);
}
