function getContract() {
    var code = $('#contractCode').val()
    var name = $('#contractName').val()
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
                    html += '<td>' + data[i].expire + '</td>'
                    html += '<td>'
                    html += '<div class="selectCheck">修改</a></div></td></tr>'
                }
                $('#contractContent').html(html)

            }
        }
    }

    ajax(option)

}
getContract()

$('#contractSearch').click(getContract)