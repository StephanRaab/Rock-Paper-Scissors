//Include Gulp
var gulp = require ('gulp');

//Including my plugins
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require ('gulp-minify-css');
var htmlmin = require ('gulp-htmlmin');
var uglify = require ('gulp-uglify');
var imagemin = require('gulp-imagemin');

//minimize my images
gulp.task('imagemin', function () {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'));
});

//minify html
gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

//concat and minify
gulp.task('scripts', function(){
  return gulp.src('*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

//minify css
gulp.task('minify-css', function(){
  return gulp.src('*.css')
    .pipe(minifyCss({
      compatibility: 'ie8'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('mincss'))
    .pipe(gulp.dest('dist'))
});

// watch
gulp.task('watch', function(){
  gulp.watch('*.js', ['scripts']);
  gulp.watch('*.html',['minify']);
  gulp.watch('*.css',['minify-css']);
  gulp.watch('img/*',['imagemin']);
});

gulp.task('default', ['imagemin', 'minify', 'minify-css', 'scripts', 'watch']);
