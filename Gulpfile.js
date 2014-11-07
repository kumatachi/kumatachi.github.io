var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var preprocess = require('gulp-preprocess');
var process = require('process');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var ngTemplates = require('gulp-ng-templates');
var path = require('path');

var build_path = "./"

var build_options = {
	'isDev': true
};

var external_libraries = [
	'jquery',
  'angular',
  'angular-route'
];

gulp.task('build:vendor', function() {
	gulp.src('./app/noop.js', {read: false})
		.pipe(browserify({
			debug: process.env.NODE_ENV != 'production'
		}))
		.on('prebundle', function(bundle) {
			external_libraries.forEach(function(lib) {
				bundle.require(lib);
			});
		})
		.pipe(rename('vendor.js'))
		.pipe(gulp.dest(build_path));
});

gulp.task('build:app', function() {
	gulp.src('./app/main.js', {read: false})
		.pipe(browserify({
			transform: [],
			debug: process.env.NODE_ENV != 'production'
		}))
		.on('prebundle', function(bundle) {
			external_libraries.forEach(function(lib) {
				bundle.external(lib);
			});
		})
		.on('error', function(err) {console.error(err)})
		.pipe(rename('app.js'))
		.pipe(gulp.dest(build_path));
});

gulp.task('move:css', function() {
	gulp.src('./app/app.scss')
    .pipe(sass())
		.pipe(gulp.dest(build_path));
});

gulp.task('move:html', function() {
	gulp.src('./app/index.html')
		.pipe(preprocess({
			context: {NODE_ENV: process.env.NODE_ENV}
		}))
		.pipe(gulp.dest(build_path));
});

gulp.task('move:assets', function() {
  gulp.src('./app/foundation-icons/*').pipe(gulp.dest(path.join(build_path, 'foundation-icons')));
});

gulp.task('move', ['move:html', 'move:css', 'move:assets']);

gulp.task('templates', function() {
  gulp.src(['!./app/index.html',
    './app/**/*.html'])
    .pipe(ngTemplates({
      path: function(p, base) {
        return path.basename(p)
      }
    }))
    .pipe(gulp.dest(build_path));
});

gulp.task('serve', function() {
	gulp.src(build_path)
		.pipe(webserver({
			port: process.env.PORT || 8000,
			open: true
		}));
});

gulp.task('watch', function() {
	var livereload = require('gulp-livereload');

	var watch = function(path, task) {
		gulp.watch(path, function(events) {
			console.log(events.path + ' changed. running task ' + task + '.');
			gulp.start(task);
			livereload.changed(events.path);
		}).on('change', function(file) {
		});
	}

	watch('./app/**/*.html', ["move:html", "templates"]);
	watch('./app/**/*.js', 'build:app');
	watch('./app/app.scss', 'move:css');
})

gulp.task('build', ['build:vendor', 'build:app', 'templates']);

gulp.task('main', ['build', 'move', 'serve']);

gulp.task('dev', function() {
	build_options.isDev = true;
	gulp.start(['main', 'watch']);
})

gulp.task('production', function() {
	build_options.isDev = false;
	gulp.start(['main']);
})

gulp.task('default', function() {
	build_options.isDev = process.env.NODE_ENV != 'production';
	console.log("running in " + (build_options.isDev ? 'development mode' : 'production mode'));
	gulp.start((build_options.isDev ? 'dev' : 'production'));
});
