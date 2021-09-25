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
  watch(paths.watch.html).on(
    'change',
    series(tasks.html.htmlMain, tasks.inject, browserSync.reload)
  );
  watch(paths.watch.css).on(
    'change',
    series(
      parallel(tasks.css.cssMain, tasks.css.cssVendors),
      browserSync.reload
    )
  );
  watch(paths.watch.js).on('change', series(tasks.scripts, browserSync.reload));
  watch(paths.watch.images, tasks.images);
  watch(paths.watch.fonts, tasks.fonts);
  done();
};

exports.dev = series(
  tasks.clean,
  tasks.images,
  parallel(
    tasks.css.cssMain,
    tasks.css.cssVendors,
    tasks.fonts,
    tasks.favicons,
    tasks.scripts,
    tasks.html.htmlMain
  ),
  tasks.inject,
  watcher,
  serve
);

exports.build = series(
  tasks.clean,
  tasks.images,
  parallel(
    tasks.css.cssMain,
    tasks.css.cssVendors,
    tasks.fonts,
    tasks.favicons,
    tasks.scripts,
    tasks.html.htmlMain
  ),
  tasks.inject,
  tasks.html.htmlAfterBuild
);
