// Importação de pacotes
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

// Funções
function styles() {
    return gulp.src("./src/styles/*.scss") // Local onde os arquivos estão (SCSS)
    .pipe(sass({ outputStyle: "compressed" })) // Estilo de saida dos arquivos (comprimidos)
    .pipe(gulp.dest("./dist/css")); // Destino dos arquivos (CSS)
}

function images() {
    return gulp.src("./src/images/**/*") // Local onde os arquivos estão (imagens)
    .pipe(imagemin()) // Estilo de saida dos arquivos (comprimidos)
    .pipe(gulp.dest("./dist/images")); // Destino dos arquivos (imagens comprimidas)
}

// Exportação
exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
}