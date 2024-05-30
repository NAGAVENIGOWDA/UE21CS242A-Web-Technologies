var url= require('url');
var http=require('http');
var fs=require('fs');
//var qs=require('querystring')
http.createServer( function(request, response){
    if(request.method=='GET'){
        response.writeHead(200,{'Content-type':'text/html'});
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
      
   
        fs.readFile(pathname.substr(1),'utf-8', function(err,data){
            if(err){
                response.writeHead(404,{'Content-type':'text/html'});
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
                response.writeHead(200,{'Content-type':'text/html'});
                response.write(data);
            response.end();
            }
        })
    }
    
            if(request.method=='POST'){
                var myurl = url.parse(request.url)
		        var pathname = myurl.pathname; // includes the '/'
                let body=[];
                request.on('data',(chunk)=>{
                    body.push(chunk);
                    console.log(chunk.toString())
                })
                .on('end',()=>{
                    body=Buffer.concat(body).toString()
                    console.log(body)
                    fs.writeFile(pathname.substr(1),body,(err,res)=>{
                    response.writeHead(200,{'Content-type':'text/plain'});
                    response.end("Message Saved");
                    })
                })
            }
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");