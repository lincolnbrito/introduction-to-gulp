var gulp        = require('gulp');
var runSequence = require('run-sequence');

/* run all tasks needed for a build in defined order */
gulp.task('build', function(callback){
    runSequence('delete',
    [
        'jekyll',
        'sass',
        //'scripts', // @todo create this task, skipped in tutorial
        'images',
        //'copy:fonts' // @todo create this task, skipped in tutorial
    ],
    //'base64', //@todo create this task, skipped in tutorial
    callback);
});