const gulp = require('gulp');
const paths = require('../paths');

const copy = () => {
  return gulp.src(paths.src.copy, { base: paths.src.base }).pipe(gulp.dest(paths.build.copy));
};

module.exports = copy;
