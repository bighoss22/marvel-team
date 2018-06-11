var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')
var mystique = function(){
 Menu()
var content = document.getElementById('content')
content.innerHTML = 'This is the mystique detail page'
}
module.exports = mystique

