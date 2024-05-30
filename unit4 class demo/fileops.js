var fs = require("fs")

/*fs.appendFile("hello.js","This is an appended data",(err)=>{
	if(err) throw err
	console.log("appended successfully")
})

fs.open("hello.js","w",(err,file)=>{
	if(err)throw err
	console.log("opened successfully")
})

fs.writeFile("hello.js","PES university",(err)=>{
	if(err)throw err
	console.log("written successfully")
	console.log("Reading the recent data")
	
fs.readFile("hello.js","utf-8",(err,data)=>{
	if(err)throw err
	console.log("Data in hello.js are:",data)//data.toString()
	
})
})

//truncate a file and read the file

fs.open("hello.js","r+",(err,fd)=>{
	if(err)throw err
	
	var buffer = Buffer.alloc(1024) // new Buffer(1024)
	
	console.log("Going to truncate the file ")
	fs.ftruncate(fd,3,(err)=>{
		if(err)throw err
		console.log("truncated succesfully")
		
		// read from the same truncated file
		
	fs.read(fd,buffer,0,buffer.length,0,(err,bytes)=>{
		if(err)throw err
		if(bytes>0)
		{
		  console.log(buffer.slice(0,bytes).toString())
		}
	
	fs.close(fd,(err)=>{
		if(err)throw err
	})
	})	
	})
})*/

fs.unlink("hello.js",(err)=>{
	if(err)throw err
	console.log("deleted succesfully")
})
