/*var http = require('http');
var options = {
	host:'localhost',
	port:'8080',
	path:'/index.html',
	method:'GET'
};
var callback = function(response){
	var body = '';
	response.on('data',function(data){
		body+=data;
	})
	.on('end',function(){
		console.log(body);
	});
}
var req = http.request(options,callback);
req.end();*/




var http=require('http');
var fetch=require('node-fetch')
fetch('http:/localhost:8080/sample.txt',{
    method:'POST',
    Headers:{'Content-type':'application/json'},
    body:JSON.stringify({"name":"kruthik","srn":"PES001"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))