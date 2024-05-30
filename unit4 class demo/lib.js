//module.exports = "hello world"

module.exports.message = "welcome to custom module"

module.exports.myadd = function add(a,b){return a+b}

module.exports.myDate = function (){return Date()}

module.exports = function (fname,lname){
	this.fname = fname 
	this.lname = lname 
	this.fullname = function (){
		return this.fname+" "+this.lname
		}
	
}