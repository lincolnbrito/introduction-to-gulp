# Introduction to Gulp.js

Gulp.js experiments based on [article series](http://stefanimhoff.de/tag/gulp/) from Stefan Imhoff

# Requirements
- Git
- NodeJs, npm and gulp (global)
- Ruby and bundler
- Python - For Jekyll syntax highlight  

# Installation
- Clone the repo
- Run `npm install` command
- Run `bundler install` command
- Run `gulp`

## Windows users

Some problems can occur when use Windows: 

- Installing BrowserSync. See the [instruction](http://www.browsersync.io/docs/#windows-users) in BrowserSync site.
- Run `chil_process` command. See these [article](http://matthew-jackson.com/notes/development/node-child_process-enoent-error-windows/)
- gulp-imagemin - The instalation on Windows need some DLLs and EXE files from dependencies jpegtran/optipng and for some reason these files aren't installed. There are some workarounds to solve it:
    - jpgtran-bin [Issue #54](https://github.com/imagemin/jpegtran-bin/issues/54)


# Thanks

- CerebroBr [cerebrobr/adesivos ](https://github.com/cerebrobr/adesivos)
- [Stefan Imhoff](http://stefanimhoff.de/tag/gulp/)