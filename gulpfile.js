'use strict';

const gulp        = require('gulp');
const sass        = require('gulp-sass');
const rename      = require('gulp-rename');
const concat      = require('gulp-concat');
const minify      = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src('./src/styles/*')
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(minify())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series(['sass'], () => {
  browserSync.init({
    proxy: 'localhost:9448'
  });
  gulp.watch('./src/styles/*.scss', gulp.series(['sass']));
  gulp.watch('*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series(['serve']));