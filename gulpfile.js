let gulp = require('gulp')
let postcss = require('gulp-postcss')
let autoprefixer = require('autoprefixer')
let cssvars = require('postcss-simple-vars')
let nested = require('postcss-nested')
let cssImport = require('postcss-import')
let browserSync = require('browser-sync').create()
let mixins = require('postcss-mixins')

//let watch = require('gulp-watch')

function html() {
	browserSync.reload();
}

// Inject (stream) CSS file:
function cssInject() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream())
};

//default es el nombre de la tarea
//la funcion es lo que se quiere que esa tarea haga
gulp.task('default', function(){
  console.log("Hooray, you crated a gulp task")
})

gulp.task('html', function(){
  browserSync.reload()
})

gulp.task('styles', function(){
  //gulp.src() le dice a gulp cuál es la fuente
  //gulp.dest() indica el destino
  //we include return because gulp.src is an asynchronous function
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString())
    this.emit('end')
  })
  .pipe(gulp.dest('./app/temp/styles'))
})


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
     gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles', cssInject));
     

  })

  
