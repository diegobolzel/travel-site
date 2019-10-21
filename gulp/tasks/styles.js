let gulp = require('gulp')
let postcss = require('gulp-postcss')
let autoprefixer = require('autoprefixer')
let cssvars = require('postcss-simple-vars')
let nested = require('postcss-nested')
let cssImport = require('postcss-import')

/*
gulp.task('styles', function(){
    //gulp.src() le dice a gulp cuál es la fuente
    //gulp.dest() indica el destino
    //we include return because gulp.src is an asynchronous function
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
  })
*/
gulp.task('styles', function(){
    //gulp.src() le dice a gulp cuál es la fuente
    //gulp.dest() indica el destino
    //we include return because gulp.src is an asynchronous function
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
  })