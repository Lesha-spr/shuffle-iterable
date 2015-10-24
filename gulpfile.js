var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('default', function() {
    var b = browserify({
        entries: 'src/index.js',
        debug: false,
        // defining transforms here will avoid crashing your stream
        transform: [babelify]
    });

    return b.bundle()
        .pipe(source('./index.js'))
        .pipe(buffer())
        .on('error', gutil.log)
        .pipe(gulp.dest('./'));
});