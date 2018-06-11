var createCard = require('./card-component')
  var getAvengers = function(options) {
var req = new XMLHttpRequest()
req.onreadystatechange = function() {
if (this.readyState = 4 & this.status == 200){

if (options.name=='daredevil'){
  createCard(JSON.parse(this.responseText))
}
else{}
}
}
req.open('Get', 'http://rsimmons.tgb2.ninja:4000')
req.send()
}
module.exports = getAvengers
