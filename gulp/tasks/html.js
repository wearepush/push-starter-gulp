const gulp = require('gulp');
const rigger = require('gulp-rigger');
const htmlmin = require('gulp-htmlmin');
const mode = require('gulp-mode')();
const paths = require('../paths');

const htmlminConfig = {
  collapseWhitespace: true,
};

const html = () => {
  return gulp
    .src(paths.src.html)
    .pipe(rigger())
    .pipe(mode.production(htmlmin(htmlminConfig)))
    .pipe(gulp.dest(paths.build.html));
};

module.exports = html;
