var express= require("express");
var app=express();
//error handling middleware function

//Built-in error
app.use("/student",function(err,req,res,next){
	console.log(err.stack)// console.error(err.stack)
	res.status(500)
	res.send("Something went wrong ")
	//next()
})

app.get("/student/:id",function(req,res,next){
	if(req.params.id.indexOf("2000")!=-1){
		var err = new Error("Custom error passed to express to handle")
		next(err)// will send the err to express to handle 
	}
	else{
		res.send("Everthing is fine with the id :"+req.params.id)
		next()
	}
})

app.use("/student",function(req,res){
	console.log("I am fine ")
}) 


 
 app.listen(3000,()=>{console.log("Server is ready at 3000")})