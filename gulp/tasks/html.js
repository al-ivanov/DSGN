module.exports = function (gulp, {browserSync, paths}) {
  function html() {
    return gulp.src(paths.src.html)
      .pipe(gulp.dest(paths.dest.build))
      .on('end', browserSync.reload);
  }

  return html;
};