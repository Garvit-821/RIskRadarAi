const form = document.getElementById("loginForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const response=await fetch("http://localhost:8080/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email,

password

})

});

if(response.ok){

const user=await response.json();

localStorage.setItem("user",JSON.stringify(user));

alert("Login Successful");

window.location.href="dashboard.html";

}

else{

alert("Invalid Email or Password");

}

});