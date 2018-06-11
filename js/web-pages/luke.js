var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')
var luke = function(){
 Menu()
var content = document.getElementById('content')
content.innerHTML = 'This is the lukes detail page'
}
module.exports = luke

