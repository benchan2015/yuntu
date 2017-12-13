$(function() {
    var baseInfo = null
    var domain = 'http://www.yuntu.com:8081/'
    $.removeCookie('code')

    function showMessage(msg, type) {
        if (type == 1) { // 显示confirm框
            $('.errorBg').hide()
            $('.errorBg2').show()
            $('.errorBg2').find('.info').html(msg);
            $('.errorBg2').find('#errorSure2').unbind('click').click(function() {
                $('#loading-dark-theme').loading({
                    theme: 'dark'
                });
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
    //添加家庭成员信息
    $('#famiRela').hide();
    $('#familySubmit').click(function() {
        var html = $('#famiRela>tbody').html();
        var familyAge = $('#familyAge').val();
        var familyWork = $('#familyWork').val();
        var familyTel = $('#familyTel').val();
        var relationship = $('#relationship').val();
        console.log(trLength);
        if (relationship.length == 0) {
            $('.errorBg').show();
            $('.info').html("请输入家庭关系");
            return
        }
        if (familyAge.length == 0) {
            $('.errorBg').show();
            $('.info').html("请输入年龄");
            return
        } else if (parseInt(familyAge) > 100 || parseInt(familyAge) < 0) {
            $('.errorBg').show();
            $('.info').html("请输入正确的年龄");
            return
        }
        if (familyWork.length == 0) {
            $('.errorBg').show();
            $('.info').html("请输入家庭工作单位");
            return
        }
        if (!validatePhone(familyTel)) {
            $('.errorBg').show();
            $('.info').html("请输入正确的电话");

        }
        html += "<tr>"
        html += "<td>" + relationship + "</td>"
        html += "<td>" + familyAge + "</td>"
        html += '<td>' + familyWork + "</td>"
        html += "<td>" + familyTel + "</td>"
        html += "</tr>"

        $('#famiRela>tbody').html(html);
        var trLength = $('#famiRela>tbody>tr').length;
        if (trLength > 0) {
            $('#famiRela').show();
        } else {
            $('#famiRela').hide();
        }
        $('#addRelation input').val('');



    })

    $('#familyCancle').click(function() {
        $(this).parents('.addFamilyBox').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $(this).parents('.addFamilyBox').siblings('.addFamily').show();
    })

    //添加教育培训信息
    $('#eduSubmit').click(function() {
        var eduLength = $('#workBox .workExperence').length;
        var eduHtml = $('#workBox').html();
        var eduSchoolName = $('#eduSchoolName').val();
        var eduMajor = $('#eduMajor').val();
        var eduBeginTime = $('#eduBeginTime').val();
        var eduEndTime = $('#eduEndTime').val();
        var eduInfo = $('#eduInfo').val();
        var orFulltime = $('#orFulltime input:checkbox').val();

        /* if (eduSchoolName.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入学校名称");
             return
         }
         if (eduMajor.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入专业名称");
             return
         }
         if (eduBeginTime.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入就读初始时间");
             return
         }
         if (eduEndTime.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入就读结束时间");
             return
         }*/

        eduHtml += "<div class='workExperence'>"
        eduHtml += '<div class="workTime col-sm-2 col-md-offset-1">' + eduBeginTime + '———' + eduEndTime + '</div>'
        eduHtml += '<div class="col-sm-9">'
        eduHtml += '<div class="companyName">' + eduSchoolName + '</div>'
        eduHtml += '<div class="companyInfo clear">'
        eduHtml += '<div class="location col-sm-4 pd0">专业名称：' + eduMajor + '</div>'
        eduHtml += '<div class="vacation col-sm-2 pd0">学历：' + eduInfo + '</div>'
        eduHtml += '<div class="position col-sm-2 pd0">是否统招：' + orFulltime + '</div>'
        eduHtml += '</div></div></div>'
        $('#workBox').html(eduHtml)
        if (eduLength > 0) {
            $('#workBox').show();
        } else {
            $('#workBox').hide();
        }
        //清空内容
        $('#addEducation input').val('');

    })
    //隐藏教育经历填写内容
    $('#eduCancle').click(function() {
        $(this).parents('#addEducation').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $(this).parents('#addEducation').siblings('.addFamily').show();
    })
    //添加工作经验
    $('#workSubmit').click(function() {
        var workLength = $('#wordExperence .workExperence').length;
        var workHtml = $('#wordExperence').html();
        var workCompanyName = $('#workCompanyName').val();
        var workVocation = $('#workVocation').val();
        var workPosition = $('#workPosition').val();
        var workPlace = $('#workPlace').val();
        var workBeginTime = $('#workBeginTime').val();
        var workEndTime = $('#workEndTime').val();
        var workContent = $('#workContent').val();
        /* if (workCompanyName.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入公司名称");
             return
         }
         if (workVocation.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入公司行业");
             return
         }
         if (workPosition.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入职位");
             return
         }
         if (workContent.length == 0) {
             $('.errorBg').show();
             $('.info').html("请输入工作内容");
             return
         }*/

        workHtml += '<div class="workExperence" >'
        workHtml += '<div class="workTime col-sm-2 col-md-offset-1">' + workBeginTime + '———' + workEndTime + '</div>'
        workHtml += '<div class="col-sm-9">'
        workHtml += '<div class="companyName">' + workCompanyName + '</div>'
        workHtml += '<div class="companyInfo clear">'
        workHtml += '<div class="location col-sm-2 pd0">' + workPlace + '</div>'
        workHtml += '<div class="vacation col-sm-2 pd0">' + workVocation + '</div>'
        workHtml += '<div class="position col-sm-2 pd0">' + workPosition + '</div>'
        workHtml += '</div>'
        workHtml += '<div class="workContent clear">' + workContent
        workHtml += '</div></div></div>'
        console.log(workHtml)
        $('#wordExperence').html(workHtml);
        if (workLength > 0) {
            $('#wordExperence').show()
        } else {
            $('#wordExperence').show()
        }
        //清空内容
        $('#workExperence input').val('');



    })
    //隐藏工作经历填写内容
    $('#workCancle').click(function() {
        $(this).parents('#workExperence').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $(this).parents('#workExperence').siblings('.addFamily').show();
    })

    //添加获奖项目
    $('#rewardSubmit').click(function() {
        var rewardHmtl = $('#rewardBox').html();
        var rewardLength = $('#rewardBox .workExperence').length;
        var rewardName = $('#rewardName').val();
        var rewardTime = $('#rewardTime').val();
        var rewardInfo = $('#rewardInfo').val();
        rewardHmtl += '<div class="workExperence">'
        rewardHmtl += '<div class="workTime col-sm-2 col-md-offset-1">' + rewardTime + '</div>'
        rewardHmtl += '<div class="col-sm-9">'
        rewardHmtl += '<div class="companyName">' + rewardName + '</div>'
        rewardHmtl += '<div class="workContent clear mt20">'
        rewardInfo
        rewardHmtl += '</div></div></div>'
        $('#rewardBox').html(rewardHmtl);
        if (rewardLength > 0) {
            $('#rewardBox').show()
        } else {
            $('#rewardBox').hide()
        }
        if (rewardName == 0) {
            $('.errorBg').show();
            $('.info').html("请输入获奖名称");
            return
        }
        //清空内容
        $('#rewardExperance input').val('');

    })
    //隐藏获奖经历填写内容
    $('#rewardCancle').click(function() {
        $(this).parents('#rewardExperance').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $(this).parents('#rewardExperance').siblings('.addFamily').show();
    })


    //正确的电话格式
    function validatePhone(phone) {
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            return false;
        }
        return true
    }
    //点击隐藏错误弹框
    $('#errorSure').click(function() {
        $(this).parents('.errorBg').hide();
    })
})