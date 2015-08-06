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
        //'base64',
        [
            'optimize:css',
            //'optmize:js',
            'optimize:images', // don't used for optimization on Windows because some dependencies instalation issues 
            'optimize:html'
            //'optmize:fonts:production',
        ],
        //'revision',
        //'rev:collect',
        callback
    );
})