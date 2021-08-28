module.exports = function () {
  $.gulp.task('html', function () {
    return $.gulp.src('*.html')
        .pipe($.gulp.dest('docs'))
        .on('end', $.browserSync.reload);
  });
};