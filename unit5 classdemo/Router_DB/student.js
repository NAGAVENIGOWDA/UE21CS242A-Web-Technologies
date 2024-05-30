var express=require("express");
const  MongoClient  = require("mongodb").MongoClient;
var router=express.Router();

router.get("/",function(req,res){
    MongoClient.connect('mongodb://localhost:27017', function(err,client){
        if(err) throw err;
        const db=client.db('newdb');
        db.collection('student').find(req.query).toArray(function(err,objs){
            res.send(objs);
        })
    });
})
router.get("/:sid", function(req,res){
    MongoClient.connect('mongodb://localhost:27017', function(err,client){
        if(err) throw err;
        const db=client.db('newdb');
        db.collection('student').findOne({srn:req.params.sid}, function(err,obj){
            res.send(obj);
        })
    });
}) 
router.post("/", function(req,res){
    MongoClient.connect('mongodb://localhost:27017', function(err,client){
        if(err) throw err;
        const db=client.db('newdb');
        db.collection('student').insertOne(req.body, function(err,objs){
            if (err) res.send("save failed")
            else
            res.send("save sucessful");
        })
    });
}) 
router.put("/:sid", function(req,res){
    MongoClient.connect('mongodb://localhost:27017', function(err,client){
        if(err) throw err;
        const db=client.db('newdb');
        db.collection('student').updateOne({srn:req.params.sid}, {$set:req.body}, function(err,objs){
            if (err) res.send("Update failed")
            else
            res.send("Update sucessful" +req.body);
        })
    });
}) 
router.delete("/:sid", function(req,res){
    MongoClient.connect('mongodb://localhost:27017', function(err,client){
        if(err) throw err;
        const db=client.db('newdb');
        db.collection('student').deleteOne({srn:req.params.sid},  function(err,objs){
            if (err) res.send("Delete failed")
            else
            res.send("Delete sucessful");
        })
    });
}) 
module.exports=router;