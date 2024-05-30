var url= require('url');
var http=require('http');
var fs=require('fs');
var qs=require('querystring')
//const querystring = require('node:querystring');
  
  http.createServer(function(req,res){
	  if(req.method=="GET"){
		 res.writeHead(200,{"Content-type":"text/html"})
		 var myurl = url.parse(req.url)
		 var filename = myurl.pathname
		 
		 fs.readFile(filename.substr(1),"utf-8",function(err,data){
			 if(err){
				 res.writeHead(404,{"Content-type":"text/html"})
				 res.write("<h2>File not found</h2>")
				 res.end()
			 }
			 else
			 { res.writeHead(200,{"Content-type":"text/html"})
				//res.write(data)
				var obj = JSON.parse(data)
				var query = myurl.query
				var qobj = qs.parse(query)//{"srn":"180"}
				if(obj.srn==qobj.srn)
					res.write(obj.name)
						
				res.end()
			 }
		 })
		  
	  }
  }).listen(8080)
  console.log("Server is running")


