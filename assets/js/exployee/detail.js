 var domain = 'http://www.yuntu.com:8081/'
// 根据staffId获取基本信息
function getStaffInfoByStaffId() {
    var option = {
        method: 'GET',
        url: 'sd_admin_Service/staff/getStaffById.do?staffId=' + getQueryString('id'),
        callback: function(data) {
            console.log('personInfo:', data)

            $('#detailTitle').html(data.data.name + '的信息')
            $('#detailCode').html(data.data.code)
            $('#detailCompany').html(transCompany(data.data.companyId))
            $('#detailName').html(data.data.name)
            $('#detailTel').html(data.data.mobile)
            $('#detailSex').html(transSex(data.data.sex))
            $('#detailDept').html(transDept(data.data.dept))
            $('#detailEnteryTime').html(data.data.entryTime)
            $('#detailEducation').html(transEducation(data.data.edu))
            $('#detailPosition').html(transPosition(data.data.job))
            $('#detailIdNumber').html(data.data.idnum)
            $('#detailMyAddress').html(data.data.address)
            $('#detailTime').html(data.data.expire)
            $('#detailEvalute').html(data.data.remark)
            var company = $('#editCompany option')
            for (var i = 0; i < company.length; i++) {
                if ($(company[i]).val() == data.data.companyId) {
                    $('#editCompany').attr('selectedIndex', i)
                    $(company[i]).attr('selected', true)
                }
            }
            var dep = $('#editDept option')
            for (var i = 0; i < dep.length; i++) {
                if ($(dep[i]).val() == data.data.dept) {
                    $('#detailDept').attr('selectedIndex', i)
                    $(dep[i]).attr('selected', true)
                }
            }
            var position = $('#editPosition option')
            for (var i = 0; i < position.length; i++) {
                if ($(position[i]).val() == data.data.job) {
                    $('#editPosition').attr('selectedIndex', i)
                    $(position[i]).attr('selected', true)
                }
            }
            /*$(company[i]).val(data.data.dept)*/

        }
    }

    ajax(option)

}
// 根据code获取家庭信息
function getFamilyInfoByCode() {
    var option = {
        method: 'GET',
        url: 'sd_admin_Service/staff/getFamilyStaff.do?code=' + getQueryString('code'),
        callback: function(data) {
            console.log('familyInfo:', data)
            var detailFamilyRelation = $('#detailFamilyRelation')
            if (data && data.data && data.data.length > 0) {
                var html = ''
                for (var i = 0; i < data.data.length; i++) {
                    html += '<tr>' +
                        '<td>' + data.data[i].fRelation + '</td>' +
                        ' <td>' + data.data[i].fAge + '</td>' +
                        ' <td>' + data.data[i].fJob + '</td>' +
                        '<td>' + data.data[i].fMobile + '</td>' +
                        '</tr>'
                }
                detailFamilyRelation.html(html)
            }
        }
    }

    ajax(option)

}
// 根据code获取教育经历信息
function getEducationInfoByCode() {
    var option = {
        method: 'GET',
        url: 'sd_admin_Service/staff/getEduStaff.do?code=' + getQueryString('code'),
        callback: function(data) {
            console.log('educationInfo:', data)
            var html = ''
            var detailEduExperience = $('#detailEduExperience')
            for (var i = 0; i < data.data.length; i++) {
                html += '<div class="workExperence">' +
                    '<div class="workTime col-sm-2 col-md-offset-1">' + new Date(data.data[i].fStartTime).Format('yyyy.MM') + '———' + new Date(data.data[i].fEndTime).Format('yyyy.MM') + '</div>' +
                    '<div class="col-sm-9">' +
                    '<div class="companyName">' + data.data[i].fSchoolName + '</div>' +
                    '<div class="companyInfo clear">' +
                    '<div class="location col-sm-4 pd0">专业名称：' + data.data[i].fMajor + '</div>' +
                    '<div class="vacation col-sm-2 pd0">学历：' + transEducation(data.data[i].fEdu) + '</div>' +

                    '</div> </div></div>'
            }
            detailEduExperience.html(html)
        }
    }

    ajax(option)

}
// 根据code获取工作经历信息
function getWorkInfoByCode() {
    var option = {
        method: 'GET',
        url: 'sd_admin_Service/staff/getWorkStaff.do?code=' + getQueryString('code'),
        callback: function(data) {
            console.log('workInfo:', data)
            var html = ''
            var detailEduExperience = $('#detailWorkExperience')
            for (var i = 0; i < data.data.length; i++) {
                html += '<div class="workExperence">' +
                    '<div class="workTime col-sm-2 col-md-offset-1">' + new Date(data.data[i].fStartTime).Format('yyyy.MM') + '———' + new Date(data.data[i].fEndTime).Format('yyyy.MM') + '</div>' +
                    '<div class="col-sm-9">' +
                    '<div class="companyName">' + data.data[i].fCompanyName + '</div>' +
                    '<div class="companyInfo clear">' +
                    '<div class="location col-sm-4 pd0">' + data.data[i].fAddress + '</div>' +
                    '<div class="vacation col-sm-2 pd0">' + data.data[i].fTrade + '</div>' +
                    '<div class="position col-sm-2 pd0">' + data.data[i].fJob + '</div>' +
                    '</div>  <div class="workContent clear">' + data.data[i].fWorkMark + '</div></div></div>'
            }
            detailEduExperience.html(html)

        }
    }

    ajax(option)

}

// 根据code获取获奖信息
function getRewardInfoByCode() {
    var option = {
        method: 'GET',
        url: 'sd_admin_Service/staff/getStaffRewardInfoList.do?code=' + getQueryString('code'),
        callback: function(data) {
            console.log('reward:', data)
            var html = ''
            var rewardList = $('#rewardList')
            for (var i = 0; i < data.data.length; i++) {
                html += '<div class="workExperence">' +
                    '<div class="workTime col-sm-2 col-md-offset-1">' + new Date(data.data[i].fTime).Format('yyyy-MM') + '</div>' +
                    '<div class="col-sm-9">' +
                    '  <div class="companyName">' + data.data[i].fRewardName + '</div>' +
                    '<div class="workContent clear mt20">' + data.data[i].fRemark + '</div>' +
                    '</div>' +
                    ' </div>'
            }
            rewardList.html(html)
        }
    }

    ajax(option)

}
$(function() {

    getStaffInfoByStaffId()
    getFamilyInfoByCode()
    getWorkInfoByCode()
    getEducationInfoByCode()
    getRewardInfoByCode()
    $('#buttonBox').hide();
    //点击编辑按钮时
    $('#exployeeEdit').click(function() {
        var tel = $('#detailTel').text();
        var CompanyName = $('#detailCompany').text();
        var Dept = $('#detailDept').text();
        var position = $('#detailPosition').text();

        inputShow('#detailTel', tel)
        inputShow('#detailCompany', CompanyName)
        inputShow('#detailDept', Dept)
        inputShow('#detailPosition', position)
        $(this).hide();
        $(this).next('#buttonBox').show();
    })
    //点击取消按钮时
    $('#exployeeEditCancel').click(function() {
        inputHide("#editTel", "#detailTel")
        inputHide("#editCompany", "#detailCompany")
        inputHide("#editDept", "#detailDept")
        inputHide("#editPosition", "#detailPosition")

        $(this).parent("#buttonBox").siblings('#exployeeEdit').show()
        $(this).parent("#buttonBox").hide();
    })

    //点击确定按钮时

    $("#exployeeEditSure").click(function() {
        console.log('update')
        var telVal = $('#editTel').val();
        var companyVal = $('#editCompany').val();
        var deptVal = $('#editDept').val();
        var positionVal = $('#editPosition').val();
        if (telVal.length > 0) {
            if (validatePhone(telVal)) {
                $('#editTel').text(telVal)
            } else {
                alert('请输入正确的电话格式')
                return
            }
        } else {
            alert('电话不能为空')
            return
        }

        var userInfo = {
          staffId:getQueryString('id'),
          companyId:companyVal,
          dept:deptVal,
          job:positionVal,
          mobile:telVal,
         
        }
        $.ajax({
            'type': 'POST',
            url: domain + 'sd_admin_Service/staff/updateStaff.do',
            'dataType': 'json',
            data: JSON.stringify(userInfo),
            contentType: 'application/json',
            success: function(data) {
                if (data.success == true) {
                    alert('修改成功')
                     $('#exployeeEditCancel').click()
                } else {
                    showMessage(data.message)
                }
            }
        })
    })




    //显示编辑框
    function inputShow(id, value) {
        $(id).hide()
        $(id).next().show();
        //$(id).next().val(value)
    }
    //隐藏编辑框
    function inputHide(inputId, divId) {
        $(inputId).hide()
        $(inputId).prev(divId).show();


    }
})