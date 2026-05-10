module.exports = function () {
  const webp = require('gulp-webp').default;

  $.gulp.task('webp', function () {
    return $.gulp.src('build/img/**/*.{png,jpg}')
        .pipe(webp({quality: 90}))
        .pipe($.gulp.dest('build/img'));
  });
};