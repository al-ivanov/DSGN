module.exports = function () {
  const sass = require('gulp-sass')(require('sass'));
  const autoprefixer = require('gulp-autoprefixer').default;

  $.gulp.task('sass', function () {
    return $.gulp.src('sass/style.scss')
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe($.gp.csso())
        .pipe($.gp.rename('style.min.css'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};