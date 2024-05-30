var http = require("http")
var url = require("url")
var fs = require("fs")
var MongoClient = require("mongodb").MongoClient

http.createServer(function(req,res){
	var filename = url.parse(req.url).pathname
	if(req.method=="GET"){
		MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
			if(err)throw err
			console.log("Database connected")
			var dbo = client.db("newdb")
			dbo.collection("employee").find({}).toArray(function(err,docs){
				res.writeHead(200,{"Content-type":"application/json"})
				res.write(JSON.stringify(docs))
				client.close()
				res.end()
			})
			
		})
	}
	else
	{
		let body =[]
		req.on("data",(chunk)=>{
			body.push(chunk)
		})
		.on("end",()=>{
			body = Buffer.concat(body).toString()
		})
		MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
			if(err)throw err
			console.log("Database connected")
			var dbo = client.db("newdb")
			dbo.collection("employee").insertOne(JSON.parse(body))
			.then(r=>{
				res.writeHead(200,{"Content-type":"application/json"})
				client.close()
				res.end()
			})
		})
		
	}
}).listen(8080)
console.log("server is running")