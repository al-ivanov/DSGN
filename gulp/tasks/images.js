const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant').default;

module.exports = function (gulp, {paths}) {
  async function images() {
    const {default: imagemin, optipng, svgo} = await import('gulp-imagemin');

    return gulp.src(`${paths.dest.img}/**/*.{png,jpg,svg}`)
      .pipe(imagemin([
        imageminJpegRecompress({
          loops: 5,
          min: 65,
          max: 70,
          quality: 'medium'
        }),
        optipng({optimizationLevel: 3}),
        pngquant({quality: [0.65, 0.7], speed: 5}),
        svgo()
      ]))
      .pipe(gulp.dest(paths.dest.img));
  }

  return images;
};