var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('s', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
