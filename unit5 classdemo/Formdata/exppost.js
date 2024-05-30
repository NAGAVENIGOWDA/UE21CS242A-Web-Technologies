var express = require('express');  
var app = express(); 
app.use(express.static("public"))
var bodyparser = require("body-parser")
var urlencoderparser = bodyparser.urlencoded({extended:false})


/*Static files are files that clients download as they are from the server.
Create a new directory, public. Express, by default does not allow you to serve static files. 
You need to enable it using the following built-in middleware. */

app.get("/index.html",function(req,res){
	res.sendFile(__dirname+"/"+"index.html")
})

app.post("/process_post",urlencoderparser,function(req,res){
	var response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
	}
	console.log(response)//obj format
	res.send(JSON.stringify(response))//json/text format
})
 app.listen(3000,  ()=>console.log("server is listening."))  
  
  