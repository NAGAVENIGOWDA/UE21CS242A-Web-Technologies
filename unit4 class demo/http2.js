var url= require('url');
var http=require('http');
var fs=require('fs');
var qs=require('querystring')
http.createServer( function(request, response){
    if(request.method=='GET'){
        response.writeHead(200,{'Content-type':'text/html'});
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
        if(pathname=='/'){
            pathname="/index.html"
        }
   // response.write('Welcome to my domain!!!');
   //http://localhost:8080/sample1.txt?srn=1234
        fs.readFile(pathname.substr(1), 'utf-8',function(err,data){
            if(err){
                response.writeHead(404,{'Content-type':'text/html'});
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
                response.writeHead(200,{'Content-type':'text/html'});
                var lines=data.split(/\r?\n/);
                      
                var query=myurl.query; //?srn=1234&& dept=cse
                var qobj= qs.parse(query) //{"srn":"1234"}
                for(var i in lines){
                      var obj=JSON.parse(lines[i]);
             // response.write(data);
                     if(obj.srn==qobj.srn)
                      response.write("<h1>"+obj.name+"</h1>");
                }
                 response.end();
                }
        })
    }
    
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");