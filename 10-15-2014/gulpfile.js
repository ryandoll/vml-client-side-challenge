var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('unit', function() {
    return gulp.src('test/*.js')
        .pipe(mocha());
});

gulp.task('watch', function() {
    gulp.watch(['solutions.js', 'test/*.js'], ['unit']);
});

gulp.task('test', ['unit', 'watch']);

function handleError(err){
    console.log(err);
}