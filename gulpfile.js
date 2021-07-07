var gulp = require("gulp");
var bs = require("browser-sync");
var sass = require("gulp-sass");

gulp.task("bs", function () {
  bs.init({
    server: "./src",
  });

  gulp.watch("src/sass/*.sass", ["sass"]);
  gulp.watch("src/*.html").on("change", bs.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp
    .src("src/sass/*.sass")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
