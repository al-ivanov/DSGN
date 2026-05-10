const webp = require('gulp-webp').default;

module.exports = function (gulp, {paths}) {
  function webpTask() {
    return gulp.src(`${paths.dest.img}/**/*.{png,jpg}`)
      .pipe(webp({quality: 90}))
      .pipe(gulp.dest(paths.dest.img));
  }

  return webpTask;
};