var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')
var medusa = function(){
 Menu()
var content = document.getElementById('content')
content.innerHTML = 'This is the medusa detail page'
}
module.exports = medusa
