function getQueryStaff() {
    var code = $('#txtCode').val()
    var name = $('#txtName').val()
    var data = {
        pageSize: 10,
        page: 1
    }
    if (code.length > 0) {
        data.code = code
    }
    if (name.length > 0) {
        data.name = name
    }

    var option = {
        url: 'sd_admin_Service/staff/queryStaffInfoList.do',
        data: data,
        callback: function(data) {
            console.log(data)
            if (data && data.length > 0) {
                var html = ''
                for (var i = 0; i < data.length; i++) {
                    html += '<tr class="odd gradeX">'
                    html += '<td>' + data[i].name + '</td>'
                    html += '<td>' + data[i].code + '</td>'
                    html += '<td>' + data[i].mobile + '</td>'
                    html += '<td class="center">修改</td>'
                    html += '< /tr>'

                }
                $('#queryStaff').html(html)

            }
        }
    }

    ajax(option)

}
getQueryStaff()

$('#btnQuery').click(getQueryStaff)