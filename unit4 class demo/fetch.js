var fetch = require("node-fetch")

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(res=>console.log(res[0].email))