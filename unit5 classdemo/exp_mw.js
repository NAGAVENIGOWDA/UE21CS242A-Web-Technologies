var express=require('express')
var app=express();
app.use(function(req,res,next){
    console.log("First MW Function");
    next();
})
app.use("/",function(req,res,next){
    console.log("Route MW Function 1");
    next();
})
app.use("/",function(req,res,next){
    console.log("Route MW Function 2");
    next();
})
app.get("/",function(req,res,next){
    console.log("Route Function");
    res.send("Welcome to my page!!!");
    next();
})
app.use("/",function(req,res,next){
    console.log("Route MW Function 3");
    next();
})
app.use(function(req,res){
    console.log("Last MW Function");
    
})
app.listen(3000,function(){
    console.log("Server listening on 3000");
 })
