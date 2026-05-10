module.exports = function (gulp, {paths}) {
  function allimg() {
    return gulp.src(paths.src.img)
      .pipe(gulp.dest(paths.dest.img));
  }

  return allimg;
};