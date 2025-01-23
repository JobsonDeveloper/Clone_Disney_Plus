// Importação de pacotes
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Funções
function styles() {
    // Local onde os arquivos estão (SCSS)
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" })) // Estilo de saida dos arquivos (comprimidos)
    .pipe(gulp.dest("./dist/css")); // Destino dos arquivos (CSS)
}

// Exportação
exports.default = styles;
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
}