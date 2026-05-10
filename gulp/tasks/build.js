module.exports = function (gulp, {clean, copy, sass, scripts, images, webp, svg}) {
  return gulp.series(clean, copy, sass, scripts, images, webp, svg);
};