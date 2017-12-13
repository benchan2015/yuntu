$(function() {
    //$.removeCookie('code')

    /*window.validateCode = function(){
        var formCode = $('#code').val()
        var code =$.cookie('code')
        if(code！=formCode) {

        }
    }
*/

    $('#addReward').show();
    $('#rewardExperance').hide()
    //添加获奖项目
    $('#rewardSubmit').click(function() {
        var rewardHmtl = $('#rewardBox').html();
        var rewardLength = $('#rewardBox .workExperence').length;
        var rewardName = $('#rewardName').val();
        var rewardTime = $('#rewardTime').val();
        var rewardInfo = $('#rewardInfo').val();
        if (rewardLength > 0) {
            $('#rewardBox').show()
        } else {
            $('#rewardBox').hide()
        }
        if (rewardName.length == 0) {
            console.log('rewardName:', rewardName)
            $('.errorBg').show();
            $('.info').html("请输入获奖名称");
            return
        }
        var option = {
            url: 'sd_admin_Service/staff/addstaffjl.do',
            data: [{
                "fRewardName": rewardName,
                "fTime": rewardTime,
                "fRemark": rewardInfo,
                "fCode": $.cookie('code')
            }],
            callback: function(data) {
                rewardHmtl += '<div class="workExperence">'
                rewardHmtl += '<div class="workTime col-sm-2 col-md-offset-1">' + rewardTime + '</div>'
                rewardHmtl += '<div class="col-sm-9">'
                rewardHmtl += '<div class="companyName">' + rewardName + '</div>'
                rewardHmtl += '<div class="workContent clear mt20">' 
                rewardHmtl +=rewardInfo
                rewardHmtl += '</div></div></div>'
                $('#rewardBox').html(rewardHmtl);

                //清空内容
                $('#rewardExperance input').val('');
                $('#rewardExperance textarea').val('');
                $('#rewardBox').show();
            }
        }

        ajax(option)

    })
    //隐藏获奖经历填写内容
    $('#rewardCancle').click(function() {
        $(this).parents('#rewardExperance').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $(this).parents('#rewardExperance').siblings('.addFamily').show();
    })
    $('#addReward').click(function() {
        $('#rewardExperance').show()
    })

})