var gulp=require("gulp"),autoprefixer=require("gulp-autoprefixer"),minifyCss=require("gulp-minify-css"),htmlmin=require("gulp-htmlmin"),uglify=require("gulp-uglify"),sass=require("gulp-sass"),imagemin=require("gulp-imagemin");gulp.task("imagemin",function(){return gulp.src("img/*").pipe(imagemin()).pipe(gulp.dest("img"))}),gulp.task("minify",function(){return gulp.src("*.html").pipe(htmlmin({collapseWhitespace:!0})).pipe(gulp.dest("dist"))}),gulp.task("scripts",function(){return gulp.src("*.js").pipe(uglify()).pipe(gulp.dest("dist"))}),gulp.task("sass",function(){return gulp.src("*.sass").pipe(sass({style:"compressed"})).pipe(gulp.dest("dist"))}),gulp.task("minify-css",function(){return gulp.src("*.css").pipe(minifyCss({compatibility:"ie8"})).pipe(autoprefixer({browsers:["last 2 versions"],cascade:!1})).pipe(gulp.dest("mincss")).pipe(gulp.dest("dist"))}),gulp.task("watch",function(){gulp.watch("*.js",["scripts"]),gulp.watch("*.sass",["sass"]),gulp.watch("*.html",["minify"]),gulp.watch("*.css",["minify-css"]),gulp.watch("img/*",["imagemin"])}),gulp.task("default",["imagemin","minify","minify-css","scripts","sass","watch"]);