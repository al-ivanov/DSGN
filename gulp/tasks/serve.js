module.exports = function (gulp, {browserSync, html, sass, scripts, allimg, paths}) {
  function serve() {
    browserSync.init({
      server: paths.dest.build
    });

    gulp.watch('sass/**/*.scss', sass);
    gulp.watch('*.html', html);
    gulp.watch('js/**/*.js', scripts);
    gulp.watch(paths.src.img, allimg);
  }

  return serve;
};