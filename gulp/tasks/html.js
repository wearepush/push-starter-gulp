const gulp = require('gulp');
const rigger = require('gulp-rigger');
const paths = require('../paths');

const html = () => {
  return gulp
    .src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.build.html));
};

module.exports = html;
