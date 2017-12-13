/*
{
	pageSize:10,
	pageIndex:0
}
*/
var Pagination = function(option) {
    option = option || {}
    this.currentPage = option.page || 1
    this.pageCount = option.pageCount || 0
    this.pageSize = option.pageSize || 10
    this.callback = option.callback,
        this.url = option.url
    this.pageInfo = option.pageInfo || {}

    if (!option.id

    ) {
        throw Error('组件id是必传的')
        return
    } else {
        this.id

        = option.id

    }
    this.style = '.pageBox {' +
        'margin-top: 30px;' +
        ' float: right;' +
        'width: 100%;' +
        'text-align: right;' +
        'margin-right: 8%;' +
        '}' +
        '.pageBox a {' +
        'padding: 8px 15px;' +
        'border: 1px solid #dddddd;' +
        'color: #777777;' +
        '}' +
        '.pageBox a:hover {' +
        'background: #337ab7;' +
        'color: #fff;' +
        'text-decoration: none;' +
        '}' +
        'pageBox a.actived {' +
        'background: #337ab7;' +
        'color: #fff;' +
        '}'
    this.currentPage = 1
    this.addStyle()
    this.init()
}
Pagination.prototype.addStyle = function() {
    var style = document.createElement('style')
    style.innerHTML = this.style
    document.head.appendChild(style)
}
Pagination.prototype.init = function() {
    var self = this
    var dom = document.querySelector('#' + this.id

    )
    if (!dom) {
        throw Error('检测到组件不存在，请确认您的传值是否正确')
        return
    }
    dom.setAttribute('class', 'pageBox')
    if (this.pageCount > 1) {

        this.html = '<a href="javascript:void(0)" data-index=1>首页</a>'
        this.html += '<a href="javascript:void(0)" data-index=pre>上一页</a>'
        if (this.pageCount < 10) {
            for (var i = 0; i < this.pageCount; i++) {
                var index = i + 1
                var className = index == this.currentPage ? 'actived' : ''

                var page = '<a href="javascript:void(0)" class=' + className + ', data-index=' + index + '>' + index + '</a>'
                this.html += page

            }
        }
        this.html += '<a href="javascript:void(0)" data-index=next>下一页</a>'
        this.html += '<a href="javascript:void(0)" data-index=' + this.pageCount + '>尾页</a>'
        dom.innerHTML = this.html
        this.dom = dom
        //this.bindEvent()
    }
}
Pagination.prototype.bindEvent = function() {
    var self = this
    $(this.dom).unbind().click( function() {
        var pageIndex = event.target.getAttribute('data-index')
        var lastPageIndex = Object.assign(self.currentPage)
        if (+pageIndex > 0) {
            self.currentPage = +pageIndex
        } else if (pageIndex == 'pre' && self.currentPage > 1) {
            self.currentPage--
        } else if (pageIndex == 'next' && self.currentPage < self.pageCount) {
            self.currentPage++
        }
        self.pageInfo.page = self.currentPage
        console.log(lastPageIndex.valueOf())
        console.log(self.currentPage)
        if (lastPageIndex.valueOf() != self.currentPage) {
            console.log('执行')
            self.callback && self.callback(self.pageInfo)
        }

    })
}