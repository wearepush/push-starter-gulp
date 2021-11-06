const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const paths = require('../paths');

const imageMinConfig = {
  svgo: {
    plugins: [{ removeViewBox: false }],
  },
};

const images = () => {
  return gulp
    .src(paths.src.images)
    .pipe(newer(paths.build.images))
    .pipe(imagemin([imagemin.svgo(imageMinConfig.svgo)]))
    .pipe(gulp.dest(paths.build.images));
};

module.exports = images;
