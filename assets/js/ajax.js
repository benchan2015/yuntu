/*
{
	method: 'GET',
	url:'',
	data:data
	callback:function(){}
}*/
function ajax(option) {
    var domain = 'http://www.yuntu.com:8081/'
    $.ajax({
        'type': option.method || 'POST',
        url: domain + option.url,
        'dataType': 'json',
        data: JSON.stringify(option.data),
        contentType: 'application/json',
        success: function(data) {
            if (data.success == true || data.data.length > 0) {
                option.callback && option.callback(data.data)
            } else {
                //showMessage(data.message)
                alert(data.message)
            }
        }
    })
}