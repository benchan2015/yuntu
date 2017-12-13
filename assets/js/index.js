$(function() {
   
    //点击隐藏错误弹框
    $('#errorSure').click(function() {
        $(this).parents('.errorBg').hide();
    })
    $('.addNextInfo').click(function(){
        window.location.reload();
    })
})