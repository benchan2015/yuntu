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
            if (data  && data.data && data.data.length > 0) {
                for (var i = 0; i < data.data.length; i++) {

                    var html = ''
                    html += '<tr onclick=redirectDetail(' + data.data[i].staffId + ')>'
                    html += '<td>' + data.data[i].name + '</td>'
                    html += '<td>' + data.data[i].code + '</td>'
                    html += '<td>' + data.data[i].mobile + '</td>'
                    html += '<td>' + transDept(data.data[i].dept) + '</td>'
                    html += '<td>' + transPosition(data.data[i].job) + '</td>'
                    html += '<td>' + data.data[i].contractEndTime + '</td></tr>'

                }
                $('#expireStaff').html(html)
                var p = new Pagination({
                    pageSize: 10,
                    pageCount: data.pageCount,
                    id: 'divPage',
                    callback: function(option) {
                        console.log('option:', option)
                    },
                    pageInfo: {
                        page: 1,
                        pageSize: 10,
                        url: 'http://www.baidu.com'
                    }
                })
            }
        }
    }

    ajax(option)

}
getContractExpire()

function redirectDetail(id) {
    window.location.href = 'employeeDetail.html?id=' + id
}
$(function() {

})