
var msg = require("./lib.js")//import a custom  module
/*console.log(msg)
console.log(msg.message)
console.log("Sum of 2 nos are :",msg.myadd(10,20))
console.log("Current date is :",msg.myDate())*/

var student = new msg("James","Bond")
console.log(student.fullname())
var student1 = new msg("John","Bond")
console.log(student1.fullname())