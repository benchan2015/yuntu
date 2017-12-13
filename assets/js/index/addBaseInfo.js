$(function() {
    var baseInfo = null
    var domain = 'http://www.yuntu.com:8081/'

    function showMessage(msg, type) {
        if (type == 1) { // 显示confirm框
            $('.errorBg').hide()
            $('.errorBg2').show()
            $('.errorBg2').find('.info').html(msg);
            $('.errorBg2').find('#errorSure2').unbind('click').click(function() {
                $.ajax({
                    'type': 'POST',
                    url: domain + 'sd_admin_Service/staff/saveStaffInfo.do',
                    'dataType': 'json',
                    data: JSON.stringify(baseInfo),
                    contentType: 'application/json',
                    success: function(data) {
                        if (data.success == true) {
                            showMessage('提交成功')
                            $.cookie('code', baseInfo.code)
                        } else {
                            showMessage(data.message)
                        }
                    }
                })
            })
            $('.errorBg2').find('#errorCancel2').click(function() {
                $('.errorBg2').hide()
            })
        } else { // 显示一般提示框
            $('.errorBg2').hide()
            $('.errorBg').show()
            $('.errorBg').find('.info').html(msg)

        }

        return
    }




    //$('.addFamilyBox').hide();
    //员工基本信息提交
    $('#infoSubmit').click(function() {
        var code = $('#code').val();
        var name = $('#name').val();
        var sex = $('#sex input[type="radio"]:checked').val();
        var idNumber = $('#idNumber').val();
        var education = $('#education option:checked').val();
        var tel = $('#tel').val();
        var companyId = $('#companyName option:checked').val();
        var depart = $('#depart option:checked').val();
        var entryTime = $('#txtEntryTime').val()
        var expire = $('#txtExpire').val()

        var job = $('#post option:checked').val();
        var address = $('#familyAddress').val()
        var evaluate = $('#evaluate').val()
        if (code.length == 0) {
            return showMessage('请输入员工工号', 'code')
        }
        if (name.length == 0) {
            return showMessage('请输入员工姓名', 'name')
        }

        if (idNumber.length == 0) {
            return showMessage('请输入员工身份证号', 'idNumber')
        }
        if (tel.length == 0) {
            return showMessage('请输入员工移动电话', 'tel')
        }
        var data = {
            "code": code, //工号
            "name": name, //姓名
            "sex": sex, //性别,
            "idnum": idNumber,
            "edu": education, //学历
            "mobile": tel, //手机号,
            "companyId": companyId, //公司id
            "dept": depart, //部门id
            "entryTime": entryTime, //入职时间
            "expire": expire, //合同期限
            "job": job, //职位
            "address": address, //地址
            "remark": evaluate //评价
        }
        showMessage('提交后信息不可更改，确认提交吗', 1)
        baseInfo = data
    })
})