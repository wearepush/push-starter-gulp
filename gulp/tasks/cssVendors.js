const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

const paths = require('../paths');
const { IS_DEV } = require('../utils/constants');
const getHash = require('../utils/getHash');

const cssVendors = () => {
  if (!paths.src.cssVendors.length) {
    return gulp.src('.', { allowEmpty: true });
  }

  return gulp
    .src(paths.src.cssVendors)
    .pipe(
      sass({
        sourceMap: false,
        outputStyle: 'compressed',
      })
    )
    .pipe(concat(IS_DEV ? 'vendors.css' : `vendors.${getHash()}.css`))
    .pipe(gulp.dest(paths.build.css));
};

module.exports = cssVendors;
