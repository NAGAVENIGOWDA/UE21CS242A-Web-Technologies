var express = require("express")

//create an application using root level exported function
var app = express()

//default route
app.get("/",function(req,res){
	res.send("This is express default route ")
})

//static routing 
app.get("/hello",function(req,res){
	res.send("This is  hello world route ")
})
app.get("/hi",function(req,res){
	res.send("This is  greetings route ")
})

// dynamic routing 

app.get("/:msg",function(req,res){
	res.send("This is a dynamic routing demo ")
})
app.get("/:srn([0-9]{4})/:name",function(req,res){
	res.send(req.params.srn+"belongs to the student"+req.params.name)
})

app.listen(3000,function(){
	console.log("Server is ready")
})
