var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var imagemin = require('gulp-imagemin');
var minify = require('gulp-minify');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        ext:{
            src:'app.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});


gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('images', function() {
  return gulp.src('pre-img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
});

gulp.task('default', ['sass', 'images', 'compress'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['pre-img/**/*'], ['images']);
  gulp.watch(['js/**/*'], ['compress']);
});
