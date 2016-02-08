// gulpfile.js
 
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require("gulp-connect");

gulp.task("connect", function() {
	connect.server({
		root: "dist",
		port: 8000
	});
});
 
gulp.task('build', function () {
  browserify({
    entries: 'index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, { "presets": ["es2015", "react"] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});
 
gulp.task('default', ['build']);
