const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const mode = require('gulp-mode')();

const paths = require('../paths');
const { IS_DEV } = require('../utils/constants');
const getHash = require('../utils/getHash');

const postCssPlugins = [autoprefixer(), cssnano()];

const css = () => {
  return gulp
    .src(paths.src.css)
    .pipe(plumber())
    .pipe(mode.development(sourcemaps.init()))
    .pipe(
      sass({
        sourceMap: true,
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(postcss(postCssPlugins))
    .pipe(mode.development(sourcemaps.write()))
    .pipe(rename(IS_DEV ? 'styles.css' : `styles.${getHash()}.css`))
    .pipe(gulp.dest(paths.build.css));
};

module.exports = css;
