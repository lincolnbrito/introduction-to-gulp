var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync').create();
var config      = require('../../../config').jekyll.development;

//var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll', function(done) {
  browsersync.notify('Compiling Jekyll');

  return cp.spawn('cmd', ['/c','jekyll','build'], { stdio: 'inherit' })
  .on('close', done)
  .on('error', function(error){});
});

gulp.task('jekyll-rebuild', ['jekyll'], function() {
  browsersync.reload();
});