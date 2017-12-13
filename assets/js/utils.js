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
    switch (index) {
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
            return '男'
        case 2:
            return '女'
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