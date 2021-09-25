module.exports = {
  src: {
    html: 'src/templates/*.html',
    htmlWatch: 'src/templates/**/*.html',
    css: 'src/scss/index.scss',
    cssWatch: 'src/scss/**/*.scss',
    js: 'src/js/app.js',
    jsWatch: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
    favicons: 'src/favicons/**/*',
  },
  build: {
    html: 'build/',
    css: 'build/assets/css',
    js: 'build/assets/js',
    images: 'build/assets/images',
    fonts: 'build/assets/fonts',
    favicons: 'build/favicons',
  },
  clean: 'build/',
};
