var api = require('marvel-api')
var Profile = require('./AvengerProfile')

class Avengers{
constructor(config) {
   this.marvel = api.createClient({
        publicKey : config.publicKey,
         privateKey : config.privateKey
       });
     }
       assemble(cb) {
       Promise.all([this.marvel.characters.findByName('Daredevil'), this.marvel.characters.findByName('Drax'), this.marvel.characters.findByName('Sage'), this.marvel.characters.findByName('Mystique'), this.marvel.characters.findByName('Wolverine')]).then(function (responses) {
       let avengers = 
        responses.forEach(function (character) {
           let profile = new Profile ({name:character.data[0].name,description: character.data[0].description})
           avengers.push(profile.createProfile())
         })
        console.log(avengers)
         cb(JSON.stringify(avengers))
    })
 }
 }
 module.exports = Avengers
