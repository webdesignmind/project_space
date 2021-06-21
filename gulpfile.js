var gulp = require("gulp");
var bs = require("browser-sync");

gulp.task("hello", function () {
  console.log;
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});
