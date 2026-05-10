module.exports = function (gulp, {paths}) {
  function copy() {
    return gulp.src([
      'fonts/**/*.{woff,woff2}',
      paths.src.img,
      paths.src.html
    ], {
      base: '.'
    })
      .pipe(gulp.dest(paths.dest.build));
  }

  return copy;
};