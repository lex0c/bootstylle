'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(){
  return gulp.src('sass/imports.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('sass/dist'));
});

gulp.task('js', function(){
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
  gulp.watch('assets/css/*.scss', ['sass']);
  gulp.watch('assets/js/*.js', ['js']);
});

gulp.task('default', ['watch']);