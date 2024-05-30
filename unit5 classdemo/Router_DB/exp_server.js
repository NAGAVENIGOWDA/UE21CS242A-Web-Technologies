var express=require("express");
var app= express();
var MongoClient=require('mongodb').MongoClient;
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.get("/", function(req,res){
    res.send("Welcome to my Page");
})

var studentrouter=require("./student.js"); //http://localhost:3000/student
app.use("/student", studentrouter);
app.listen(3000,function(){
    console.log("Server Listening on 3000")
})
