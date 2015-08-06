/* BrowserSync configuration */
var src                 = 'app';
var build               = 'build';
var development         = 'build/development';
var production          = 'build/production';
var srcAssets           = 'app/_assets';
var developmentAssets   = 'build/assets';
var productionAssets    = 'build/production/assets';

module.exports = {
    browsersync: {
        development: {
            server: {
                baseDir: [development, build, src]
            },
            port: 9999,
            files: [
                developmentAssets + '/css/*.css',
                developmentAssets + '/js/*.js',
                developmentAssets + '/images/**',
                developmentAssets + '/fonts/*',
            ]
        },
        production: {
            server: {
                baseDir: [production]
            },
            port: 9998
        }
    },
    delete: {
        src: [developmentAssets]
    },
    jekyll: {
        development: {
            src:    src,
            dest:   development,
            config: '_config.yml'
        },
        production: {
            src: src,
            dest: production,
            config: '_config.yml,_config.build.yml'
        }
    },
    sass: {
        src:  srcAssets + '/scss/**/*.{sass,scss}',
        dest: developmentAssets + '/css',
        options: {
            outputStyle: 'compressed',                    
            includePaths : [srcAssets+'/scss/includes'] 
            /*noCache: true,
            compass: false,
            bundleExec: true,
            sourcemap: true,            
            sourcemapPath: '../../_assets/scss'*/
        }
    },
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: true
    },
    images: {
        src: srcAssets + '/images/**/*',
        dest: developmentAssets + '/images'
    },
    watch: {
        jekyll: [
            '_config.yml',
            '_config.build.yml',
            src + '/_data/**/*.{json,yml,csv}',
            src + '/_includes/**/*.{html,xml}',
            src + '/_layouts/**/*.html',
            src + '/_plugins/*.rb',
            src + '/_posts/*.{markdown,md,html}',
            src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
            src + '/*'
        ],
        sass:    srcAssets + '/scss/**/*.{sass,scss}',
        scripts: srcAssets + '/javascripts/**/*.js',
        images:  srcAssets + '/images/**/*',
        sprites: srcAssets + '/images/**/*.png',
        svg:     'vectors/*.svg'
    },
    optmize: {
        css: {
            src: developmentAssets + '/css/*.css',
            dest: productionAssets + '/css',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            src:  developmentAssets + '/js/*.js',
            dest: productionAssets + '/js/',
            options: {}
        }
    }
};
