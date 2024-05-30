var events = require("events")

var em = new events.EventEmitter()

var listener1 = function listener1(){
	console.log("Listener1 executed")
}

var listener2 = function listener2(){
	console.log("Listener2 executed")
}

//Binding/Subscribing
em.addListener("connection",listener1)
em.addListener("connection",listener2)

var eventlistcount = require("events").EventEmitter.listenerCount(em,"connection")
console.log(eventlistcount+ "listening to em object ")

//fire the connection event 

em.emit("connection")

//removing /unsubscribing an event from em Object

em.removeListener("connection",listener1)
console.log("Listener1 is remived from em object")

// fire the event  again after removing 

em.emit("connection")

//checking the count of events in em obj 
eventlistcount = require("events").EventEmitter.listenerCount(em,"connection")
console.log(eventlistcount+ "listening to em object ")