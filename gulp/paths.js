module.exports = {
  src: {
    base: 'src',
    html: 'src/templates/*.html',
    css: 'src/scss/index.scss',
    js: 'src/js/app.js',
    images: 'src/images/**/*',
    favicons: 'src/favicons/**/*',

    // paths to copy files/folders
    copy: ['src/fonts/**/*'],
    // paths to include css files into vendors.css
    cssVendors: [
      // EXAMPLE
      // './node_modules/swiper/swiper-bundle.min.css',
    ],
  },
  watch: {
    html: 'src/templates/**/*.html',
    css: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
  },
  build: {
    html: 'build',
    css: 'build/assets/css',
    js: 'build/assets/js',
    images: 'build/assets/images',
    favicons: 'build/favicons',
    copy: 'build/assets',
  },
  inject: {
    html: 'build/*.html',
    css: ['build/assets/css/vendors*.css', 'build/assets/css/styles*.css'],
    js: ['build/assets/js/*.js'],
  },
  clean: 'build/',
};
