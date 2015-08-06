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

- Installing BrowserSync. See the [instruction](http://www.browsersync.io/docs) in BrowserSync site.
- Run `chil_process` command. See these [article](http://matthew-jackson.com/notes/development/node-child_process-enoent-error-windows/)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - Depends [imagemin](https://github.com/imagemin) that needs some DLLs and EXE. Download respective EXE and place in vendor folder. 
	- [imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle) 
		- [gifsicle](https://github.com/imagemin/gifsicle-bin)
		For `gifsicle` download the vendor file `https://github.com/imagemin/gifsicle-bin/tree/master/vendor/win` (x86 or x64)
		and place in `imagemin\node_modules\imagemin-gifsicle\node_modules\gifsicle\vendor`

	- [imagemin-jpegtran](https://github.com/imagemin/imagemin-jpegtran)
		- [jpegtran-bin](https://github.com/imagemin/jpegtran-bin)
		For `imagemin-jpegtran` download the vendor file `https://github.com/imagemin/jpegtran-bin/tree/master/vendor/win` and place files in `node_modules\imagemin\node_modules\imagemin-jpegtran\node_modules\jpegtran-bin\vendor`.
	
	- [imagemin-optipng](https://github.com/imagemin/imagemin-optipng)
		- [optipng-bin](https://github.com/imagemin/optipng-bin)
		For `imagemin-optipng` download the vendor file `https://github.com/imagemin/optipng-bin/tree/master/vendor/win` and place in `node_modules\gulp-imagemin\node_modules\imagemin\node_modules\imagemin-optipng\node_modules\optipng-bin\vendor\optipng.exe`.

# Thanks

- CerebroBr [cerebrobr/adesivos ](https://github.com/cerebrobr/adesivos)
- [Stefan Imhoff](http://stefanimhoff.de/tag/gulp/)