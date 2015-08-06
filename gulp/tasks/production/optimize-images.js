var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var config   = require('../../config').optimize.images;

//copy and minimize image files
gulp.task('optimize:images', function(){
    return gulp.src(config.src)
        .pipe(imagemin(config.options)) // problems on Windows
        .pipe(gulp.dest(config.dest))        
        .pipe(size());
})