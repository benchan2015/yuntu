$(function() {
    $('#addEducation').show();
    $('#educationForm').hide()
    //添加教育培训信息
    $('#eduSubmit').click(function() {

        var eduSchoolName = $('#eduSchoolName').val();
        var eduMajor = $('#eduMajor').val();
        var eduBeginTime = $('#eduBeginTime').val();
        var eduEndTime = $('#eduEndTime').val();
        var eduInfo = $('#eduInfo option:checked').val()
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


        //清空内容

        var option = {
            url: 'sd_admin_Service/staff/addstaffSchool.do',
            data: [{
                "fSchoolName": eduSchoolName,
                "fMajor": eduMajor,
                "fStartTime": eduBeginTime,
                "fEndTime": eduEndTime,
                "fEdu": eduInfo,
                "fCode": $.cookie('code')
            }],
            callback: function(data) {
                var eduHtml = $('#workBox').html();
                eduHtml += "<div class='workExperence'>"
                eduHtml += '<div class="workTime col-sm-2 col-md-offset-1">' + eduBeginTime + '———' + eduEndTime + '</div>'
                eduHtml += '<div class="col-sm-9">'
                eduHtml += '<div class="companyName">' + eduSchoolName + '</div>'
                eduHtml += '<div class="companyInfo clear">'
                eduHtml += '<div class="location col-sm-4 pd0">专业名称：' + eduMajor + '</div>'
                eduHtml += '<div class="vacation col-sm-2 pd0">学历：' + eduInfo + '</div>'
                //eduHtml += '<div class="position col-sm-2 pd0">是否统招：' + orFulltime + '</div>'
                eduHtml += '</div></div></div>'
                console.log('eduHtml:', eduHtml)
                $('#workBox').html(eduHtml)
                $('#educationForm input').val('');
            }
        }

        ajax(option)

    })
    //隐藏教育经历填写内容
    $('#eduCancle').click(function() {
        $('#educationForm').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $('#addEducation').show();
    })
    $('#addEducation').click(function() {
        var code = $.cookie('code')
        if (!code) {
            $('.errorBg').show();
            $('.info').html("请先提交基本信息");
            return
        }
        $('#addEducation').hide();
        $('#educationForm').show()
    })
})