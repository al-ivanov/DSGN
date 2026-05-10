const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

module.exports = function (gulp, {browserSync, paths}) {
  function scripts() {
    return gulp.src([paths.src.jquery, paths.src.js])
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(babel({presets: ['@babel/preset-env']}))
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(rename('all.min.js'))
      .pipe(sourcemaps.write(''))
      .pipe(gulp.dest(paths.dest.js))
      .pipe(browserSync.stream());
  }

  return scripts;
};