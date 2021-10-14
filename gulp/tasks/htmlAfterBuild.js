const gulp = require('gulp');
const cachebust = require('gulp-cache-bust');
const paths = require('../paths');

const cachebustConfig = {
  type: 'timestamp',
};

const htmlAfterBuild = () => {
  return gulp
    .src(`${paths.build.html}/*.html`)
    .pipe(cachebust(cachebustConfig))
    .pipe(gulp.dest(paths.build.html));
};

module.exports = htmlAfterBuild;
