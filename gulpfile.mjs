// ESM modules | latest build packages

'use strict';

//
//
// gulp style
//
// "gulp": "^5.0.0",
// "sass": "^1.85.1",
// "gulp-sass": "^6.0.1",
// "gulp-postcss": "^10.0.0",
// "autoprefixer": "^10.4.21",
// "cssnano": "^7.0.6",
//
//

import gulp from 'gulp'
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

var paths = {
    styles: {
      src: "src/scss/*.scss",
      dest: "src/css/"
    }
};

function style() {
  return gulp
  .src(paths.styles.src)
  .pipe(sass({quietDeps: true, silenceDeprecations: ["legacy-js-api", "import"]}))
  .on("error", sass.logError)
  // .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(gulp.dest(paths.styles.dest));
}

gulp.task('style', style);
var build = gulp.parallel(style);
gulp.task('build', build);
gulp.task('default', build);