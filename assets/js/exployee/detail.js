function getStaffInfoByStaffId() {
    var option = {
        method:'GET',
        url: 'sd_admin_Service/staff/getStaffById.do?staffId='+getQueryString('id'),
        callback: function(data) {
          console.log(data)
        }
    }

    ajax(option)
   
}
$(function() {

    getStaffInfoByStaffId()
    $('#buttonBox').hide();
    //点击编辑按钮时
    $('#exployeeEdit').click(function() {
        var name = $('#detailName').text();
        var tel = $('#detailTel').text();
        var time = $('#detailTime').text();

        inputShow('#detailName', name)
        inputShow('#detailTel', tel)
        inputShow('#detailTime', time)
        $(this).hide();
        $(this).next('#buttonBox').show();
    })
    //点击取消按钮时
    $('#exployeeEditCancel').click(function() {
        inputHide("#editName", "#detailName")
        inputHide("#editTel", "#detailTel")
        inputHide("#editTime", "#detailTime")
        $("#editTime").prev("#detailTime").show();
        $(this).parent("#buttonBox").siblings('#exployeeEdit').show()
        $(this).parent("#buttonBox").hide();
    })

    //点击确定按钮时

    $("#exployeeEditSure").click(function() {
        var nameVal = $('#editName').val();
        var telVal = $('#editTel').val();
        var timeVal = $('#editTime').val();
        if (nameVal.length > 0) {
            $('#detailName').text(nameVal)
        } else {
            alert('姓名不能为空')
            return
        }
        if (telVal.length > 0) {
            if (validatePhone(telVal)) {
                $('#detailTel').text(telVal)
            } else {
                alert('请输入正确的电话格式')
                return
            }

        } else {
            alert('电话不能为空')
            return
        }
   

    $('#detailTime').text(timeVal);
    inputHide("#editName", "#detailName");
    inputHide("#editTel", "#detailTel");
    inputHide("#editTime", "#detailTime");
    $(this).parent("#buttonBox").siblings('#exployeeEdit').show();
    $(this).parent("#buttonBox").hide();
     })




    //显示编辑框
    function inputShow(id, value) {
        $(id).hide()
        $(id).next('input').show();
        $(id).next('input').val(value)
    }
    //隐藏编辑框
    function inputHide(inputId, divId) {
        $(inputId).hide()
        $(inputId).prev(divId).show();


    }
})