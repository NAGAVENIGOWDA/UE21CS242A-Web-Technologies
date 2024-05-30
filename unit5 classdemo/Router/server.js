
var express = require("express")

var app = express()

var hellorouter = require("./hello.js")

//calling the router middleware function

app.use("/hello",hellorouter)

app.listen(3000,()=>{console.log("Server is ready to listen")})