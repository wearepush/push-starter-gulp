'use strict';
const { series, parallel, watch } = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync').create();

const tasks = requireDir('./gulp/tasks', { recurse: true });
const paths = require('./gulp/paths');

const serve = () => {
  return browserSync.init({
    server: 'build',
    notify: false,
    open: false,
    cors: true,
    ui: false,
    logPrefix: 'DevServer',
    host: 'localhost',
    port: process.env.PORT || 8080,
  });
};

const watcher = (done) => {
  watch(paths.src.htmlWatch).on(
    'change',
    series(tasks.html, browserSync.reload)
  );
  watch(paths.src.cssWatch).on(
    'change',
    series(
      parallel(tasks.css.cssMain, tasks.css.cssVendors),
      browserSync.reload
    )
  );
  watch(paths.src.js).on(
    'change',
    series(
      parallel(tasks.scripts.scriptsMain, tasks.scripts.scriptsVendors),
      browserSync.reload
    )
  );
  watch(paths.src.images, tasks.images);
  watch(paths.src.fonts, tasks.fonts);

  done();
};

exports.dev = series(
  tasks.clean,
  tasks.images,
  tasks.favicons,
  parallel(
    tasks.css.cssMain,
    tasks.css.cssVendors,
    tasks.fonts,
    tasks.scripts.scriptsMain,
    tasks.scripts.scriptsVendors,
    tasks.html
  ),
  watcher,
  serve
);

exports.build = series(
  tasks.clean,
  tasks.images,
  tasks.favicons,
  parallel(
    tasks.css.cssMain,
    tasks.css.cssVendors,
    tasks.fonts,
    tasks.scripts.scriptsMain,
    tasks.scripts.scriptsVendors,
    tasks.html
  )
);
