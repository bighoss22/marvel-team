var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')
var daredevil = function(){
 Menu()
var content = document.getElementById('content')
content.innerHTML = 'This is the daredevil detail page'
}
module.exports = daredevil

