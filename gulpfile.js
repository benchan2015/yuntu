var gp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gp.task("index",function(){
    // 把1.js和2.js合并压缩为main.js，输出到dest/js目录下
    gp.src([
    	'./js/index/addBaseInfo.js',
    	'./js/index/addEducationInfo.js',
    	'./js/index/addFamilyInfo.js',
    	'./js/index/addRewardInfo.js',
    	'./js/index/addWorkExperienceInfo.js',
    	]).pipe(concat('index.js')).pipe(uglify()).pipe(gp.dest(__dirname+'\\dest\\js'));
})
gp.task('default',['index'], function() {  
    console.log("default");  
    console.log('__dirname:',__dirname+'\\dest\\js')
})