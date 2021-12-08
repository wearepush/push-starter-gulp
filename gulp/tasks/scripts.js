const gulp = require('gulp');
const webpack = require('webpack-stream');
const paths = require('../paths');
const { IS_DEV } = require('../utils/constants');

const webpackConfig = {
  mode: process.env.MODE || 'production',
  devtool: IS_DEV && 'eval',
  output: {
    filename: IS_DEV ? '[name].bundle.js' : '[name].[contenthash:8].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

const scripts = () => {
  return gulp.src(paths.src.js).pipe(webpack(webpackConfig)).pipe(gulp.dest(paths.build.js));
};

module.exports = scripts;
