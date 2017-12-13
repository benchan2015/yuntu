$(function() {
    $('#addWorkExperienceInfo').show()
    $('#workExperence').hide()
    //添加工作经验
    $('#workSubmit').click(function() {
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



        var option = {
            url: 'sd_admin_Service/staff/addstaffWork.do',
            data: [{
                "fCompanyName": workCompanyName,
                "fTrade":workVocation,
                "fJob": workPosition,
                "fAddress": workPlace,
                "fWorkMark": workContent,
                "fCode": $.cookie('code'),
                "fStartTime": workBeginTime,
                "fEndTime": workEndTime
            }],
            callback: function(data) {
                var workHtml = $('#wordExperence').html();
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
                $('#wordExperence').html(workHtml);
                $('#wordExperence').show()
                //清空内容
                $('#workExperence input').val('')
            }
        }

        ajax(option)


    })
    $('#addWorkExperienceInfo').click(function() {
        var code = $.cookie('code')
        if (!code) {
            $('.errorBg').show();
            $('.info').html("请先提交基本信息");
            return
        }
        $('#workExperence').show();
        $('#addWorkExperienceInfo').hide()
    })
    //隐藏工作经历填写内容
    $('#workCancle').click(function() {
        $(this).parents('#workExperence').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $(this).parents('#workExperence').siblings('.addFamily').show();
    })
})