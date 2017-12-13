function getCheckWork() {
    var code = $('#checkCode').val()
    var name = $('#checkName').val()
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
                    html += '<tr>'
                    html += '<td>' + data[i].name + '</td>'
                    html += '<td>' + data[i].code + '</td>'
                    html += '<td>'
                    html += '<div class="selectCheck"><a href="#">考勤明细</a></div></td></tr>'
                }
                $('#checkWorkContent').html(html)

            }
        }
    }

    ajax(option)

}
getCheckWork()

$('#checkSearch').click(getCheckWork)