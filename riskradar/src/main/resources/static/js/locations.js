const list=document.getElementById("locationList");

const cities=
JSON.parse(localStorage.getItem("searchedCities")) || [];

if(cities.length===0){

list.innerHTML="<li>No locations searched yet.</li>";

}
else{

cities.forEach(city=>{

const li=document.createElement("li");

li.innerHTML="📍 "+city;

list.appendChild(li);

});

}