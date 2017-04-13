var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
  browserSync.init({
    proxy: 'http://192.168.0.50/Song_Project_/SaoLei/'
  })
  gulp.watch(['./**']).on('change', browserSync.reload);
})
