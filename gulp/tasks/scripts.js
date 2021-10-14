const gulp = require('gulp');
const webpack = require('webpack-stream');
const paths = require('../paths');

const webpackConfig = {
  mode: process.env.MODE || 'production',
  devtool: process.env.MODE === 'development' && 'eval',
  output: {
    filename: '[name].bundle.js',
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
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator',
            ],
          },
        },
      },
    ],
  },
};

const scripts = () => {
  return gulp
    .src(paths.src.js)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.build.js));
};

module.exports = scripts;
