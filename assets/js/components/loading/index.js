var loading = function() {
    this.style = '.loading{' +
        'position: fixed;' +
        'z-index: 10;' +
        ' display: flex;' +
        ' justify-content: center;' +
        ' align-items: center;' +
        ' width: 100%;' +
        ' height: 100%;' +
        ' background: rgba(0,0,0,.2);' +
        ' }' +
        ' .loading img{' +
        '		width:124px;' +
        '		height:124px' +
        ' }'

}
loading.prototype.init = function() {
	var style = document.createElement('style')
	style.innerHTML = this.style
	var dom = document.createElement('div')
	dom.setAttribute
}
loading.prototype.show = function() {

}
loading.prototype.hide = function() {

}