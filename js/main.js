var root = 'http://rsimmons.tgb2.ninja:3000/#';
var useHash = true; 
var hash = '#';
var router = new Navigo(root, useHash, hash);
var HomePage = require('./web-pages/home-page.js')
var luke = require('./web-pages/luke.js')
var medusa = require('./web-pages/medusa.js')
var mystique = require('./web-pages/mystique.js')
var daredevil= require('./web-pages/daredevil.js')
var wolverine = require('./web-pages/wolverine.js')
var allAvengers = require('./web-pages/avengers.js')
var getAvengers = require('./web-components/avenger-component.js')
router
  .on(function() {
  document.getElementById('content').innerHTML =''
    HomePage()
  })
.on({
   'avengers': function() {
  document.getElementById('content').innerHTML =''
   allAvengers()
   },
  'avengers/Luke': function() {
  document.getElementById('content').innerHTML =''
   luke()
  },
 'avengers/Medusa': function() {
  document.getElementById('content').innerHTML =''
  medusa()
  },
  'avengers/Mystique': function() {
 document.getElementById('content').innerHTML =''
    mystique()
 },
  'avengers/Daredevil': function() {
   document.getElementById('content').innerHTML =''
  daredevil()
  },
  'avengers/Wolverine': function() {
   document.getElementById('content').innerHTML =''
    wolverine()
  }
   })
 .resolve();
