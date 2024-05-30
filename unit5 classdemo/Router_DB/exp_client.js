var fetch=require('node-fetch')

 /* fetch('http://localhost:3000/student',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({"name":"Raunak","srn":"45","dept":"mech"})
})
.then((res)=>res.text())
.then((res)=>console.log(res)) */ 


/* fetch('http://localhost:3000/student/?dept=cse',{
    method:'GET',
    headers:{'Accept':'application/json'},
   // body:JSON.stringify({"name":"Rohit","srn":"24"})
})
.then((res)=>res.json())
.then((res)=>console.log(res)) */
  
 /*  fetch('http://localhost:3000/student/45',{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({"name":"krish","srn":"41"})
})
.then((res)=>res.text())
.then((res)=>console.log(res)) */

fetch('http://localhost:3000/student/40',{
    method:'DELETE',
    headers:{'Content-type':'application/json'}
    })
.then((res)=>res.text())
.then((res)=>console.log(res)) 