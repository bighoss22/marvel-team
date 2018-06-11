var Menu = require ('../web-components/menu-component')
var getAvengers = require ('../web-components/avenger-component')
var allAvengers = function(){
 Menu()
  getAvengers({name:'daredevil'})
}
module.exports = allAvengers

