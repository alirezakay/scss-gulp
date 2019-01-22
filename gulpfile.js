'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css'); 
var rename = require('gulp-rename'); 
var changed = require('gulp-changed');



var SCSS_SRC = './src/assets/scss/*.scss';
var SCSS_DEST = './src/assets/css';

// Compile SCSS
gulp.task('compile_scss', function(cb){
    gulp.src(SCSS_SRC) 
    .pipe(sass().on('error', sass.logError)) 
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' })) 
    .pipe(changed(SCSS_DEST)) 
    .pipe(gulp.dest(SCSS_DEST));
    cb();
});


//detect changes in SCSS
gulp.task('watch_scss', function(cb){ 
    gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
    cb();
});




// Run tasks
gulp.task('default', gulp.series('watch_scss'));
