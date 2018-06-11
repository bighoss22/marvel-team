
var createCard  = function(arr){

   for (var x=0; x<arr.length; x++){
var card = document.createElement('div')
card.className = 'w3-card-4'
card.style.width = '35%'
var img = document.createElement('img')

var heroname = document.createElement('p')
heroname.innerHTML = arr[x].name
heroname.className = 'w3-container w3-center'
card.append(heroname)

var cbutton = document.createElement('button')
cbutton.className =  'w3-button w3-block w3-black'
cbutton.style.width = '30%'
cbutton.innerHTML = "Find out more about " + arr[x].name
content.append(cbutton)



if(arr[x].name == "lukecage") {
img.src ='/assets/lukecage.jpg'
cbutton.addEventListener("click", lukecageFunction);

function lukecageFunction() {

window.location.href = 'http://rsimmons.tgb2.ninja:3000/#/avengers/lukecage'
}
}
else if(arr[x].name == "mystique") {
img.src ='/assets/mystique.jpg'
cbutton.addEventListener("click",mystiquefunction );

function mystiquefunction() {
window.location.href = 'http://rsimmons.tgb2.ninja:3000/#/avengers/mystique'
}
}
else if(arr[x].name == "medusa") {
  img.src ='/assets/medusa.jpg'
cbutton.addEventListener("click", medusafunction);

function medusafunction() {
window.location.href = 'http://rsimmons.tgb2.ninja:3000/#/avengers/medusa'
}
}
else if(arr[x].name == "wolverine") {
img.src ='/assets/wolverine.jpg'
cbutton.addEventListener("click", wolverinefunction);

function wolverinefunction() {


window.location.href = 'http://rsimmons.tgb2.ninja:3000/#/avengers/wolverine'

}
}
else if(arr[x].name == "daredevil") {
cbutton.addEventListener("click", capfunction);

function capfunction() {

window.location.href = 'http://rsimmons.tgb2.ninja:3000/#/avengers/daredevil'

}

  img.src ='/assets/daredevil.jpg'
}

card.append(img)

var cardContainer = document.createElement('div')
cardContainer.className = 'w3-container w3-center'
var note = document.createElement('p')
note.innerHTML = arr[x].description
cardContainer.append(note)
card.append(cardContainer)
content.append(card)

 }
  }
