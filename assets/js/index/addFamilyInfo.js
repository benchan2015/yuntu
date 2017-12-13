$(function() {

    //添加家庭成员信息
    $('#addRelation').hide();
    $('#famiRela').hide()
    $('#familySubmit').click(function() {

        var familyAge = $('#familyAge').val();
        var familyWork = $('#familyWork').val();
        var familyTel = $('#familyTel').val();
        var relationship = $('#relationship').val();
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
        /*if (!validatePhone(familyTel)) {
            $('.errorBg').show();
            $('.info').html("请输入正确的电话");
            return
        }*/

        $('#addRelation input').val('')

        var option = {
            url: 'sd_admin_Service/staff/savestaffFamily.do',
            data: [{
                "fRelation": relationship,
                "fAge": familyAge,
                "fJob": familyWork,
                "fMobile": familyTel,
                "fCode": $.cookie('code')
            }],
            callback: function(data) {
                var html = $('#famiRela>tbody').html();
                html += "<tr>"
                html += "<td>" + relationship + "</td>"
                html += "<td>" + familyAge + "</td>"
                html += '<td>' + familyWork + "</td>"
                html += "<td>" + familyTel + "</td>"
                html += "</tr>"
                $('#famiRela>tbody').html(html);
                $('#famiRela').show();
            }
        }

        ajax(option)

    })
    $('#addFamily').click(function() {
        var code = $.cookie('code')
        if (!code) {
            $('.errorBg').show();
            $('.info').html("请先提交基本信息");
            return
        }
        $('#addRelation').show();
        $('#addFamily').hide()
    })
    $('#familyCancle').click(function() {
        $(this).parents('.addFamilyBox').hide();
        $(this).parents('.addFamilyContent').css('border', '1px solid #e3e3e3')
        $(this).parents('.addFamilyBox').siblings('.addFamily').show();
    })
})