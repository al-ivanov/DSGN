module.exports = function () {
  const del = require('del');

  $.gulp.task('clean', function () {
    return del('build');
  });
};