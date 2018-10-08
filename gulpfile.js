/* using  gulp to minify javascript and css */
var _system = require('./system/system.js');
var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');
var replace = require('gulp-replace-task');
var rename = require('gulp-rename');
var minifyCss = require('gulp-clean-css');
var merge = require('merge-stream');
var less = require('gulp-less');

/* Task to compile js in one file */
gulp.task('compile-js', function() {
  //Runner compile js
  return gulp.src(path.join(__dirname, 'public/src/js/*.js'))
  //concat in one file
    .pipe(concat(global.conf.fileName))
  //minify all libs
    .pipe(minify())
  //Src to output
    .pipe(gulp.dest(path.join(__dirname, 'public/dist/js/')))
});

/* Task to change variables on index.html */
gulp.task('compile-index', function() {
  //Runner to return html with variables
  return gulp.src(path.join(__dirname, 'public/index.dev.html'))
  //replace all variables what you need
    .pipe(replace({
    //Rrplacement
    patterns: [
      {
        match: 'base_url',
        replacement: global.conf.base_url
      }, {
        match: 'output_file',
        replacement: global.conf.outputFile
      }
    ]
  }))
  //Return default
    .pipe(rename('index.html')).pipe(gulp.dest(path.join(__dirname, 'public')));
});

/* minify less y css */
gulp.task('compile-css', function() {
  // less stream
  var lessStream = gulp.src(path.join(__dirname, 'public/src/css/*.less'))
  //Pipe concat
    .pipe(concat('all.min.less'))
  //Less path retunr clean
    .pipe(less());

  /* Minyfy css */
  var cssStream = gulp.src(path.join(__dirname, 'public/src/css/*.css')).pipe(concat('all.min.css'));

  /* Merge stream */
  var mergedStream = merge(lessStream, cssStream)
  //Concat all css
    .pipe(concat('styles.min.css'))
  //minify
    .pipe(minifyCss())
  //dest mergedStream
    .pipe(gulp.dest(path.join(__dirname, 'public/dist/css')))
});

/* default task */
gulp.task('default', [
  'compile-js', 'compile-index', 'compile-css'
], function() {
  //REtunr watch
});
gulp.task('watch', [
  'compile-js', 'compile-index', 'compile-css'
], function() {
  //REtunr watch

  gulp.watch([
    path.join(__dirname, 'public/src/css/*.less'),
    path.join(__dirname, 'public/src/css/*.css')
  ], ['compile-css']);
  gulp.watch(path.join(__dirname, 'public/index.dev.html'), ['compile-index']);
  gulp.watch(path.join(__dirname, 'public/src/js/*.js'), ['compile-js']);

});
