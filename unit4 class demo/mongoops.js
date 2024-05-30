var MongoClient = require("mongodb").MongoClient
var url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url,function(err,client){ 
	if(err)throw err
	var dbo = client.db("newdb")
	//console.log("database created")
	/* dbo.createCollection("employee",function(err,res){
		if (err)throw err
		client.close()
	}) */
	
	var obj = [{"eid":"E02","ename":"Biswas","dept":"development"},
				{"eid":"E03","ename":"John","dept":"Testing"},
				{"eid":"E04","ename":"Kushik","dept":"Finance","company":"Intel"}]
				
	/* dbo.collection("employee").insertMany(obj,
					function(err,res){
						if(err)throw err
						console.log("Documents inserted are :",res.insertedCount)
						client.close()
					})
	 */
	 
	 //find()methods
	 
	 /* dbo.collection("employee").find({"eid":"E04"}).toArray(function(err,docs){
		 if(err)throw err
		 console.log(docs)
		 client.close()
	 }) 
	  dbo.collection("employee").find(({"dept":"development"}),{projection:{_id:0,eid:1,dept:1}}).toArray(function(err,docs){
		 if(err)throw err
		 console.log(docs)
		 client.close()
	 }) */
	 
	 var myobj = {"eid":"E03"}
	 var newobj = {"eid":"E03","dept":"Finance","ename":"Kusum","company":"Wipro"}
	 
	 /* dbo.collection("employee").updateMany(myobj,newobj,function(err,doc){
		 if(err)throw err
		 console.log("doc updated")
		 client.close()
	 }) */
	 /* dbo.collection("employee").replaceOne(myobj,newobj,function(err,doc){
		 if(err)throw err
		 console.log("doc replaced")
		 client.close()
	 }) */
	 
	 /* var delobj = {ename:/^B/}
	 dbo.collection("employee").deleteMany(delobj,function(err,doc){
		 if(err)throw err
		 console.log("doc deleted")
		 client.close()
	 }) */
	 
	 dbo.collection("employee").drop(function(err,doc){
		 if(err)throw err
		 console.log("collection dropped")
		 client.close()
	 })
})