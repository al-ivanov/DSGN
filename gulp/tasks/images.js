module.exports = function () {
  $.gulp.task('images', async function () {
    const {default: imagemin, optipng, svgo} = await import('gulp-imagemin');

    return $.gulp.src('build/img/**/*.{png,jpg,svg}')
        .pipe(imagemin([
          $.imageminJpegRecompress({
            loops: 5,
            min: 65,
            max: 70,
            quality: 'medium'
          }),
          optipng({optimizationLevel: 3}),
          $.pngquant({quality: [0.65, 0.7], speed: 5}),
          svgo()
        ]))
        .pipe($.gulp.dest('build/img'));
  });
};