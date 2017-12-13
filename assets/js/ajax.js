/*
{
    method: 'GET',
    url:'',
    data:data
    callback:function(){}
}*/
function ajax(option) {
  var domain = 'http://www.yuntu.com:8081/'
  loadingObj.show()
  $.ajax({
    'type': option.method || 'POST',
    url: domain + option.url,
    'dataType': 'json',
    data: JSON.stringify(option.data),
    contentType: 'application/json',
    timeout: 3000,
    success: function(data) {
      if (data.success == true ||( data.data && data.data.length > 0)) {
        option.callback && option.callback(data)
      } else {
        //showMessage(data.message)
       // alert(data.message)
      }
       loadingObj.hide()
    },
    error: function(err) {

      alert('系统异常，请联系管理员')
      loadingObj.hide()
    }
  })
}