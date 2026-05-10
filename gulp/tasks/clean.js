module.exports = function (gulp, {del, paths}) {
  function clean() {
    return del(paths.dest.build);
  }

  return clean;
};