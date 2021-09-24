const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const mode = require('gulp-mode')();
const paths = require('../paths');

const scriptsMain = () => {
  return gulp
    .src(paths.src.js)
    .pipe(plumber())
    .pipe(babel())
    .pipe(concat('scripts.js'))
    .pipe(mode.production(terser()))
    .pipe(gulp.dest(paths.build.js));
};

const scriptsVendors = () => {
  return (
    gulp
      // EXAMPLE
      .src(['./node_modules/swiper/swiper-bundle.min.js'], { allowEmpty: true })
      .pipe(concat('vendors.js'))
      .pipe(gulp.dest(paths.build.js))
  );
};

module.exports = { scriptsMain, scriptsVendors };
