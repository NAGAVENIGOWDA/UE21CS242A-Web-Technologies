var express = require("express")

var app = express()

//middleware function

app.use(function(req,res,next){
	console.log("Today date is :",Date.now())
	next()
})

app.use(function(req,res,next){
	console.log("Req url:",req.originalUrl)
	next()
})
//router fun which also acts as middleware fun
app.get("/hello",function(req,res,next){
	res.send("Router function")
	next()
})

app.use(function(req,res){
	console.log("Second Middleware fun")
		
})

app.listen(3000,function(){console.log("server is readdy")})