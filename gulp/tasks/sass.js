const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sassCompiler = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer').default;
const csso = require('gulp-csso');
const rename = require('gulp-rename');

module.exports = function (gulp, {browserSync, paths}) {
  function sass() {
    return gulp.src(paths.src.sass)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sassCompiler())
      .pipe(autoprefixer())
      .pipe(csso())
      .pipe(rename('style.min.css'))
      .pipe(sourcemaps.write(''))
      .pipe(gulp.dest(paths.dest.css))
      .pipe(browserSync.stream());
  }

  return sass;
};