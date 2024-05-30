//create a buffer

var buf1 = Buffer.alloc(5) // Buffer.allocUnsafe(50)
var buf1 = Buffer.from([10,20,30,40,50])
var buf2 = Buffer.from(buf1)
console.log(buf1)
console.log(buf2)


//create a string buffer
var buf3 = Buffer.alloc(50)
buf3 = Buffer.from("Allthe best","utf-8")
console.log(buf3)


//writing to a buffer
var len = buf3.write("Hello","utf-8")
console.log(len)

//read from buffer
console.log(buf3.toString("utf-8",0,7))



//copy from one buffer
var buf4 = Buffer.from("tothe")
var buf5 = Buffer.from("Wel ")
buf4.copy(buf5,1,5)
console.log(buf5.toString()) //


//compare 2 buffers

var buf6 = Buffer.from("Goodmorning")
var buf7 = Buffer.from("Badmorning")
var op = Buffer.compare(buf6,buf7)
console.log(op)
