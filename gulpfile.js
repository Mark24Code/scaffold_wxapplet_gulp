/*******************
 * gulp 依赖
 *******************/
var
    gulp = require('gulp'),
    fs = require('fs'), //node 文件系统
    path = require('path'), //node 路径处理
    rename = require('gulp-rename'), //改名
    changed = require('gulp-changed'), //只修改修改过的文件
    del = require('del'), //删除文件

    sass = require('gulp-sass')
;
/*******************
 * 全局配置
 *******************/

var config = {
    src: 'src'
};

/*******************
 * 任务
 *******************/
// sass 处理
gulp.task('scss', function() {
    return gulp.src(config.src + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(function(path) {
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest('./src/wxss/'))
        .on('end', function() {
            console.log('[完成] sass 编译完毕');
        });
});


//监视
gulp.task('watch', function() {
    gulp.watch(config.src + '/**/*.scss', ['scss']);
});

//开发
gulp.task('dev', ['watch']);


//帮助
gulp.task('help', function() {
    console.log('----------- gulp命令 -----------');
    console.log('gulp               命令清单');
    console.log('----------- 开发环境 -----------');
    console.log('gulp dev           开发模式');

});


//默认任务
gulp.task('default', ['help']);