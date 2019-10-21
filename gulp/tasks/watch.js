let gulp = require('gulp')
let browserSync = require('browser-sync').create()
//let styles = require('./styles')

function html() {
	browserSync.reload();
}

// Inject (stream) CSS file:
function cssInject() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream())
};

gulp.task('watch', () => {
    //browserSync refresca los cambios en el browser
    //es genial
    
    browserSync.init({
      server: {
        baseDir: "app"
      }
    })
     //gulp.watch('./app/index.html', gulp.series('html'))
     //gulp.watch('./app/index.html', function(){
      // browserSync.reload()
     //})
     gulp.watch('./app/*.html').on('change', html)
     gulp.watch('./app/assets/styles/**/*.css', gulp.series(cssInject));
     

  })