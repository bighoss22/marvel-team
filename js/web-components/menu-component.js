var Menu =function(){
var content = document.getElementById('content')

let nav = document.createElement('div')
nav.className ='w3-bar w3-blue'
let home = document.createElement('a')
home.className = 'w3-bar-item w3-button'
home.href ='#'
home.innerHTML ='Home'
nav.append(home)


let avenger  = document.createElement('a')
avenger.className ='w3-bar-item w3 button'
avenger.href ='#/avengers'
avenger.innerHTML ='Avenger'
nav.append(avenger)
content.append(nav)
}
module.exports = Menu

