var paginationObj = null
var pageSize = 10
function getContract() {
    var code = $('#contractCode').val()
    var name = $('#contractName').val()
    var param = {
        pageSize: pageSize,
        page: 1
    }
    if (code.length > 0) {
        param.code = code
    }
    if (name.length > 0) {
        param.name = name
    }

    var option = {
        url: 'sd_admin_Service/staff/queryStaffInfoList.do',
        data: param,
        callback: function(data) {
            console.log(data)
            if (data && data.data && data.data.length > 0) {
                var html = ''
                for (var i = 0; i < data.data.length; i++) {
                    html += '<tr onclick=redirectDetail('+data.data[i].staffId+')>'
                    html += '<td>' + data.data[i].name + '</td>'
                    html += '<td>' + data.data[i].code + '</td>'
                    html += '<td>' + data.data[i].expire + '</td>'
                    html += '<td>'
                    html += '<div class="selectCheck">修改</a></div></td></tr>'
                }
                $('#contractContent').html(html)
                if (!paginationObj) {
                    paginationObj = new Pagination({
                        pageSize: pageSize,
                        pageCount: data.pageCount,
                        id: 'divPage',
                        callback: function(option2) {
                            var code = $('#contractCode').val()
                            var name = $('#contractName').val()
                            if (code.length > 0) {
                                param.code = code
                            }
                            if (name.length > 0) {
                                param.name = name
                            }
                            param.page = option2.page
                            console.log('ddddd:', param)
                            ajax(option)
                        }
                    })
                } else {
                    if(data.data.length < pageSize){
                      paginationObj.destroy()
                    }else {
                        paginationObj.reCall()
                    }
                   
                } 
                paginationObj.bindEvent()

            }
        }
    }

    ajax(option)

}
getContract()
function redirectDetail(id) {
    window.location.href = 'employeeDetail.html?id=' + id
}

$('#contractSearch').click(getContract)