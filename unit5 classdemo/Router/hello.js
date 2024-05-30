var express = require("express")
var router = express.Router()//enabling a router middleware fun

router.get("/",function(req,res){
	res.send("Hi class...")
})

router.get("/:msg",function(req,res){
	res.send("Good morning class"+req.params.msg)
})

module.exports = router;