const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

const paths = require('../paths');
const cssvendors = require('../cssvendors');

const cssVendors = () => {
  if (!cssvendors.length) {
    return gulp.src('.', { allowEmpty: true });
  }

  return gulp
    .src(cssvendors)
    .pipe(
      sass({
        sourceMap: false,
        outputStyle: 'compressed',
      })
    )
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest(paths.build.css));
};

module.exports = cssVendors;
