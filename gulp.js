var gulp = require('gulp')
var sass =  require('gulp-sass')

gulp.task('sass',function(){
    gulp.src('./public/_sass/styles.sass')
    .pipe(sass())
    .pipe(gulp.dest(function(f){
        return (f.base+"./public/_css/styles.css");
    }))
});

gulp.task('default',['sass'],function(){
    gulp.watch('./public/_sass/styles.sass',['sass']);
})