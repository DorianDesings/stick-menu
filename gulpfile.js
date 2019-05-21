const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const babel = require('gulp-babel');

const browserSync = require('browser-sync').create();

gulp.task('sass', ()=>{
    gulp.src('dev/scss/styles.scss')
        .pipe(sass({
            outputStyle:'compact'
        }))
        .pipe(autoprefixer({
            browsers:['last 3 versions']
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream())
  });
  

gulp.task('pug', ()=>{
    gulp.src('dev/pug/pages/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('public/'))
})

gulp.task('babel', () =>
    gulp.src('dev/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('public/js/'))
);

gulp.task('default', ()=>{
    browserSync.init({
        server: './public'
    })

    gulp.watch('./dev/scss/*.scss', ['sass']),
    gulp.watch('dev/pug/pages/*.pug', ['pug']).on('change', browserSync.reload)
    gulp.watch('./dev/js/*.js', ['babel']).on('change', browserSync.reload)
})