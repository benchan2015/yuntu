var paginationObj = null

function getQueryStaff() {
    var code = $('#txtCode').val()
    var name = $('#txtName').val()
    var param = {
        pageSize: 2,
        page: 1
    }
    if (code.length > 0) {
        param.code = code
    }
    if (name.length > 0) {
        param.name = name
    }

    option = {
        url: 'sd_admin_Service/staff/queryStaffInfoList.do',
        data: param,
        callback: function(data) {
            if (data && data.data && data.data.length > 0) {
                var html = ''
                for (var i = 0; i < data.data.length; i++) {
                    html += '<tr class="odd gradeX">'
                    html += '<td>' + data.data[i].name + '</td>'
                    html += '<td>' + data.data[i].code + '</td>'
                    html += '<td>' + data.data[i].mobile + '</td>'
                    html += '<td class="center">修改</td>'
                    html += '< /tr>'

                }
                $('#queryStaff').html(html)
                if (!paginationObj) {
                    paginationObj = new Pagination({
                        pageSize: 2,
                        pageCount: data.pageCount,
                        id: 'divPage',
                        callback: function(option2) {
                            //option.page = option2.pa
                            console.log(option2)
                            param.page =option2.page
                            ajax(option)
                        }
                    })
                }
                paginationObj.bindEvent()

            }
        }
    }

    ajax(option)

}
getQueryStaff()

$('#btnQuery').click(getQueryStaff)