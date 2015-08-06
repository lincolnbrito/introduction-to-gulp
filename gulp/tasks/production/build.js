var gulp         = require('gulp');
var reunSequence = require('run-sequence');

// Run all taks needed for a build in define order
gulp.task('build:production', function(callback){
    reunSequence('delete', 'jekyll:production',
        [
            'sass',
            //'scripts',
            'images',
            //'copy:fonts'
        ],
        'base64',
        [
            'optmize:css',
            //'optmize:js',
            'optmize:images',
            'optmize:html',
            //'optmize:fonts:production',
        ],
        'revision',
        'rev:collect',
        callback
    );
})