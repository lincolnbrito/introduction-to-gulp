var gulp = require('gulp');
var config = require('../../config').watch;

/* starts browsersync task then watch files for changes */
gulp.task('watch', ['browsersync'], function(){
    gulp.watch(config.jekyll,  ['jekyll-rebuild']);
    gulp.watch(config.sass,    ['sass']);
    //gulp.watch(config.scripts, ['sass']);
    gulp.watch(config.images,  ['images']);
    //gulp.watch(config.svg,     ['copy:fonts']);
    //gulp.watch(config.sprites, ['sprites']);
});