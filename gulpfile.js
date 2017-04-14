var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
  browserSync.init({
    proxy: 'http://10.0.0.50/Song_Project_/SaoLei/'
  })
  gulp.watch(['./**']).on('change', browserSync.reload);
})
