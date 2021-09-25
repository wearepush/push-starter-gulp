const gulp = require('gulp');
const injectLib = require('gulp-inject');
const paths = require('../paths');

const inject = () => {
  const sources = gulp.src([paths.inject.css, paths.inject.js], {
    read: false,
  });

  return gulp
    .src(paths.inject.html)
    .pipe(injectLib(sources, { relative: true }))
    .pipe(gulp.dest(paths.build.html));
};

module.exports = inject;
