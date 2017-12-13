// 转换性别
function transSex(index) {
    switch (index) {
        case 1:
            return '男'
        case 2:
            return '女'
    }
}
// 转换学历
function transEducation(index) {
    switch (+index) {
        case 0:
            return '初中及以下'
        case 1:
            return '高中'
        case 2:
            return '大专'
        case 3:
            return '本科'
        case 4:
            return '研究生'
        case 5:
            return '博士'

    }
}
// 转换公司名称

function transCompany(index) {
    switch (index) {
        case 1:
            return '公司总部'
        case 2:
            return '分公司1'
        case 3:
            return '分公司2'
    }
}
// 转换部门
function transDept(index) {
    switch (index) {
        case 1:
            return '互联网'
        case 2:
            return '客服部'
    }
}

// 转换职位
function transPosition(index) {
    switch (index) {
        case 1:
            return '客服'
        case 2:
            return '客服经理'
        case 3:
            return '部门经理'
    }
}

//正确的电话格式
function validatePhone(phone) {
    if (!(/^1[34578]\d{9}$/.test(phone))) {
        return false;
    }
    return true
}

// 获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}