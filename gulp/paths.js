module.exports = {
  src: {
    html: 'src/templates/*.html',
    css: 'src/scss/index.scss',
    js: 'src/js/app.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
    favicons: 'src/favicons/**/*',
  },
  watch: {
    html: 'src/templates/**/*.html',
    css: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
  },
  build: {
    html: 'build',
    css: 'build/assets/css',
    js: 'build/assets/js',
    images: 'build/assets/images',
    fonts: 'build/assets/fonts',
    favicons: 'build/favicons',
  },
  inject: {
    html: 'build/*.html',
    css: 'build/assets/css/*.css',
    js: 'build/assets/js/*.js',
  },
  clean: 'build/',

  cssVendors: [
    // EXAMPLE
    // './node_modules/swiper/swiper-bundle.min.css'
  ],
};
