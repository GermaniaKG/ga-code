// Grundlegendes
var gulp          = require ("gulp");

// Plugins einbauen
var autoprefixer = require ("gulp-autoprefixer"),
    concat       = require ("gulp-concat"),
    gutil        = require ("gulp-util");
    less         = require ("gulp-less"),
    cleanCSS = require('gulp-clean-css'),

    rename       = require ("gulp-rename"),
    // sass         = require ("gulp-sass"),
    sourcemaps   = require ("gulp-sourcemaps");


var GLOB_LESS    = "./less/**/*.less",
    DIST_CSS     = './css';


// ================================
// Stylesheets
// ================================

gulp.task('styles', function () {
    gulp.src( GLOB_LESS )
        .pipe(less())
        .pipe(autoprefixer({
            // browsers: ['last 2 versions', 'ie 8-11', 'Safari > 3', 'Android > 4'],
            //browsers: ['last 3 versions', 'ie 8-11', 'Safari > 3', 'Android > 4'],
            //browsers: ['> 1%', 'ie 8-11', 'Safari > 3', 'Android > 4'],
            browsers: [
                'Android >= 2.3',
                'BlackBerry >= 7',
                'Chrome >= 8',
                'Firefox >= 4',
                'Explorer >= 9',
                'iOS >= 5',
                'Opera >= 11',
                'Safari >= 5',
                'OperaMobile >= 11',
                'OperaMini >= 6',
                'ChromeAndroid >= 9',
                'FirefoxAndroid >= 4',
                'ExplorerMobile >= 9'
            ],
            cascade: false
        }))
        .pipe(gulp.dest( DIST_CSS ))
        .pipe(cleanCSS({compatibility: '*'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest( DIST_CSS ));
});


// ================================
// Common tasks
// ================================

//
// Development builds:
// Rerun the task when a file changes
//
gulp.task('watch', function () {

    gulp.watch( GLOB_LESS , ["styles"]);

});

gulp.task('default', ["styles"]);
