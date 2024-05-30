//File Upload
//npm  express-fileupload --save
//app.use(fileUpload())

var express = require("express")
var app = express();
var fileupload = require("express-fileupload")

app.use(fileupload())//enabling the express-fileupload fn

app.post("/upload",function(req,res){
	if(!req.files||req.files.length==0)
		return res.status(400).send("File not found")
	var samplefile = req.files.samplefile;
	
	samplefile.mv("./files/"+samplefile.name,function(err){
		if(err)
			return res.status(500).send(err)
		res.send("File "+samplefile.name+ " is uploaded succesfully")
	})
})

//to get the 
app.get("/form",function(req,res){
	res.send("<form action = 'http://localhost:3000/upload' method = 'POST' enctype ='multipart/form-data'><input type = 'file' name ='samplefile'/> <input type = 'submit' value ='UPLOAD'/></form>")
}) 

app.listen(3000,()=>{console.log("Server ready")})