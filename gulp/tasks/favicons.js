const gulp = require('gulp');
const paths = require('../paths');

const favicons = () => {
  return gulp.src(paths.src.favicons).pipe(gulp.dest(paths.build.favicons));
};

module.exports = favicons;
