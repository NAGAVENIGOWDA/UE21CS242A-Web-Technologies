var express = require("express")
var bodyparser = require("body-parser")
var multer = require("multer")
var upload = multer() // to upload the file
var app = express()


app.get("/",function(req,res){
	res.render("form")
})

app.set("view engine", "pug")
app.set("views","./views")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use(upload.array())
app.use(express.static("public"))

app.post("/",function(req,res){
	res.send("Recieved ur request")
	console.log(req.body)
})

app.listen(3000,()=>{console.log("Server is ready")})