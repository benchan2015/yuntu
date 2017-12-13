var Loading = function() {
  this.style = '.loading{' +
    'position: fixed;' +
    'top: 0;' +
    'left: 0;' +
    'width: 100%;' +
    'height: 100%;' +
    'z-index: 10;' +
    ' display: flex;' +
    ' justify-content: center;' +
    ' align-items: center;' +
    ' width: 100%;' +
    ' height: 100%;' +
    ' background: rgba(0,0,0,0);' +
    ' }' +
    ' .loading img{' +
    '   width:32px;' +
    '   height:32px' +
    ' }'
}
Loading.prototype.init = function() {
  var style = document.createElement('style')
  style.innerHTML = this.style
  document.head.appendChild(style)
  var dom = document.createElement('div')
  dom.setAttribute('class', 'loading')
  dom.innerHTML = '<img src="./assets/img/loading.gif" />'
  document.body.appendChild(dom)
  this.dom = dom

}
Loading.prototype.show = function() {
  this.dom.style.display = 'flex'
}
Loading.prototype.hide = function() {
  this.dom.style.display = 'none'
}
window.loadingObj = new Loading()
loadingObj.init()
loadingObj.hide()
