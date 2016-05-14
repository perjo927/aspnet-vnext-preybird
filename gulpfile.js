/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var webroot = "./wwwroot/",
    npm = "./node_modules/";

var paths = {
  js: webroot + "js/**/*.js",
  minJs: webroot + "js/**/*.min.js",
  css: webroot + "css/**/*.css",
  minCss: webroot + "css/**/*.min.css",
  concatJsDest: webroot + "js/site.min.js",
  concatCssDest: webroot + "css/site.min.css",
  npm: "./node_modules",
  app: webroot + "app/",
  lib: webroot + "lib/"
};

var libs = [
  npm + "es6-shim/es6-shim.min.js",
  npm + "systemjs/dist/system-polyfills.js",
  npm + "angular2/es6/dev/src/testing/shims_for_IE.js",
  npm + "angular2/bundles/angular2-polyfills.js",
  npm + "systemjs/dist/system.src.js",
  npm + "rxjs/bundles/Rx.js",
  npm + "angular2/bundles/angular2.dev.js",
  npm + "angular2/bundles/router.dev.js"
];

var app = [
  npm + "ng2-preybird/dist-asp/**/*"
];

gulp.task('copy:lib', function () {
  return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('copy:app', function () {
  return gulp.src(app).pipe(gulp.dest(paths.app));
});

gulp.task("copy", ["copy:lib", "copy:app"]);


gulp.task("clean:js", function (cb) {
  rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean:lib", function (cb) {
  rimraf(paths.lib, cb);
});

gulp.task("clean", ["clean:js", "clean:css", "clean:dist"]);

gulp.task("min:js", function () {
  return gulp.src([paths.js, "!" + paths.minJs], {
        base: "."
      })
      .pipe(concat(paths.concatJsDest))
      .pipe(uglify())
      .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
  return gulp.src([paths.css, "!" + paths.minCss])
      .pipe(concat(paths.concatCssDest))
      .pipe(cssmin())
      .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
