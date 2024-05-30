var fs = require("fs")
/*
var data = " "; // empty buffer

//readable stream
var readstream = fs.createReadStream("file2.txt")
readstream.setEncoding("utf-8")

//handle the stream events
readstream.on("data",function(chunk){
	data +=chunk
})
readstream.on("end",function(){console.log(data)})
readstream.on("error",function(err){console.log(err.stack)})

//writable stream

data = "Learning with streams !!!!"
var writestream = fs.createWriteStream("file3.txt")
writestream.write(data,"utf-8")
writestream.end()//EOF

writestream.on("finish",function(){console.log("write completed")})
writestream.on("error",function(err){console.log(err.stack)})


// duplex stream

var rstream = fs.createReadStream("file3.txt")
var wstream = fs.createWriteStream("file4.txt")
rstream.pipe(wstream)


// transform stream - compress & decompress

var zlib = require("zlib")

fs.createReadStream("file2.txt").pipe(zlib.createGzip())
.pipe(fs.createWriteStream("file2.txt.gz"))
console.log("file compressed")*/
var zlib = require("zlib")

fs.createReadStream("file2.txt.gz").pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("file2.txt"))
console.log("File decompressed")