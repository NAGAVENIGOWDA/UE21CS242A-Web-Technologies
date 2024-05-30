var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer(function(req,res){
	if(req.method=="POST"){
		var q = url.parse(req.url)
		var filename = q.pathname
		var body = []
		req.on("data",(chunk)=>{
			body.push(chunk)
			console.log(chunk.toString())
		})
		.on("end",()=>{
			body = Buffer.concat(body).toString()
		fs.appendFile(filename.substr(1),body,(err,data)=>{
			res.end("Successfully posted the data")
		})
		})
	}
}).listen(8080)
console.log("Server is running")