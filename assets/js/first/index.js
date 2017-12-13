function getContractExpire() {
    var option = {
        url: 'sd_admin_Service/staff/queryStaffInfoList.do',
        data: {
            state: 0,
            pageSize: 10,
            page: 1
        },
        callback: function(data) {
          console.log(data)
            if (data && data.length > 0) {
                for (var i = 0; i < data.length; i++) {

                    var html = ''
                    html += '<tr>'
                    html += '<td>' + data[i].name + '</td>'
                    html += '<td>' + data[i].code + '</td>'
                    html += '<td>' + data[i].mobile + '</td>'
                    html += '<td>' + transDept(data[i].dept) + '</td>'
                    html += '<td>' + transPosition(data[i].job) + '</td>'
                    html += '<td>' + data[i].contractEndTime + '</td></tr>'

                }
                $('#expireStaff').html(html) 
            }
        }
    }

    ajax(option)
   
}
getContractExpire()