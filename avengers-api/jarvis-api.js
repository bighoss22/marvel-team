let express = require("express")
let app = express()
let Marvel =require("./avengers")
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*")
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
next()
})
app.get("/", function(request,response) {
  var avengers = new Marvel({
     publicKey: '5cd86be2a7a0bff069ee5c7dd36742c0'
, privateKey: 'cd3ea69b64f3a7e719fe2cc52ced99907938ceca'
  })
 avengers.assemble(function(avengers){
   response.send(JSON.parse(avengers))
  })
})
app.listen("4000", function() {
console.log("running on port 4000")
})
