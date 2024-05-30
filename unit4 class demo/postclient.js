var http=require('http');
var fetch=require('node-fetch')

fetch("http://localhost:8080/sample.txt",{
	method:"POST",
	body:JSON.stringify({"name":"Kaushik","srn":"PES345"}),
	headers:{"Content-type":"application/json"}
})
.then((res)=>res.text())
.then((res)=>console.log(res))