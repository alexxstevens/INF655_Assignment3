// sassdoc >= 2.0
var gulp = require("gulp");
var sassdoc = require("sassdoc");
var converter = require("sass-convert");

gulp.task("sassdoc", function() {
  return gulp
    .src("css/style.css")
    .pipe(
      converter({
        from: "css",
        to: "scss"
      })
    )
    .pipe(sassdoc());
});


// attempted to run a task to convert files.. unablet to trouble shoot:  "TypeError: file.pipe is not a function at Converter.convertFile (C: ... 