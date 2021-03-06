var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../../config').jekyll.development;

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll', function(done) {
  browsersync.notify('Compiling Jekyll');

    /**
    * Resolving problem when run child_process on Windows
    * @see http://matthew-jackson.com/notes/development/node-child_process-enoent-error-windows/
    */
    if(process.platform === "win32") {
        return cp.spawn('cmd', 
           [
                '/c',        
                'jekyll', 
                'build', 
                '-q', 
                '-s'+config.src, 
                '-d'+config.dest, 
                '-c'+config.config
            ], 
            { 
                stdio: 'inherit' 
            }
        )
        .on('close', done);
    }else{
        return cp.spawn(
            'bundle', 
            [
                'exec', 
                'jekyll', 
                'build', 
                '-q', 
                '--source=' + config.src, 
                '--destination=' + config.dest, 
                '--config=' + config.config
            ], 
            { stdio: 'inherit' }
        )
        .on('close', done);
    }
  
});

gulp.task('jekyll-rebuild', ['jekyll'], function() {
  browsersync.reload();
});