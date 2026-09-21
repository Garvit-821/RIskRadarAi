// ===================================
// LOGIN CHECK
// ===================================

const user = JSON.parse(localStorage.getItem("user"));

if(!user){

alert("Please Login First");

window.location.href="login.html";

}

// ===================================
// GREETING
// ===================================

const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="🌅 Good Morning,";

}
else if(hour<17){

greeting="☀️ Good Afternoon,";

}
else{

greeting="🌙 Good Evening,";

}

document.getElementById("welcomeText").innerHTML=
greeting+" "+user.fullName+" 👋";

// ===================================
// DATE & TIME
// ===================================

function updateClock(){

const now=new Date();

document.getElementById("dateTime").innerHTML=

now.toLocaleDateString()+" | "+now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// ===================================
// LOGOUT
// ===================================

function logout(){

localStorage.removeItem("user");

window.location.href="login.html";

}

// ===================================
// API
// ===================================

const API_KEY="e83afa3ea3c601c3327d8580c798364f";

let searchedCities=[];

// ===================================
// MAP
// ===================================

const map=L.map("map").setView([17.3850,78.4867],6);

L.tileLayer(

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

{

attribution:"© OpenStreetMap"

}

).addTo(map);

let marker=L.marker([17.3850,78.4867])

.addTo(map)

.bindPopup("Hyderabad")

.openPopup();
// ===================================
// WEATHER API
// ===================================

async function loadWeather(city){

try{

const response=await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

);

const data=await response.json();

document.getElementById("temperature").innerHTML=

Math.round(data.main.temp)+"°C";

document.getElementById("weatherDescription").innerHTML=

data.weather[0].description;

marker

.setLatLng([data.coord.lat,data.coord.lon])

.setPopupContent(city)

.openPopup();

map.setView([data.coord.lat,data.coord.lon],8);

// Store Search History

if(!searchedCities.includes(city)){

searchedCities.push(city);

localStorage.setItem(
"searchedCities",
JSON.stringify(searchedCities)
);

updateSearchHistory();

}

generateRisk(data.main.temp,data.weather[0].main);

generateBrief(city,data.weather[0].main,data.main.temp);
localStorage.setItem("lastCity", city);

}
catch(e){

alert("City Not Found");

}

}
// ===================================
// EARTHQUAKE API
// ===================================

async function loadEarthquakes(){

try{

const response=await fetch(

"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

);

const data=await response.json();

document.getElementById("earthquakeCount").innerHTML=
data.features.length;

}
catch(error){

document.getElementById("earthquakeCount").innerHTML="--";

console.log(error);

}

}

// ===================================
// RISK SCORE
// ===================================

function generateRisk(temp,weather){

let risk=15;

if(temp>=40){

risk+=40;

}
else if(temp>=35){

risk+=25;

}
else{

risk+=10;

}

if(weather.includes("Rain")){

risk+=20;

}

if(weather.includes("Thunderstorm")){

risk+=30;

}

if(risk>100){

risk=100;

}

document.getElementById("riskScore").innerHTML=risk;

if(risk<35){

document.getElementById("riskLevel").innerHTML=
"🟢 Low Risk";

}
else if(risk<70){

document.getElementById("riskLevel").innerHTML=
"🟠 Moderate Risk";

}
else{

document.getElementById("riskLevel").innerHTML=
"🔴 High Risk";

}
localStorage.setItem("riskScore", risk);

localStorage.setItem(
    "riskLevel",
    document.getElementById("riskLevel").innerText
);

}

// ===================================
// AI SAFETY BRIEF
// ===================================

function generateBrief(city,weather,temp){

let text="";

if(weather.includes("Rain")){

text=`${city} is currently experiencing rain. Carry an umbrella and avoid waterlogged roads.`;

}
else if(weather.includes("Thunderstorm")){

text=`Thunderstorms are expected in ${city}. Stay indoors and avoid open areas.`;

}
else if(temp>=40){

text=`${city} is experiencing extreme heat. Stay hydrated and avoid outdoor activities during peak afternoon hours.`;

}
else{

text=`Weather conditions in ${city} are stable. No major disaster risk is detected at the moment.`;

}

document.getElementById("aiBrief").innerHTML=text;

}
// ===================================
// SEARCH HISTORY
// ===================================

function updateSearchHistory(){

const history=document.getElementById("searchHistory");

history.innerHTML="";

searchedCities.forEach(city=>{

const p=document.createElement("p");

p.innerHTML="📍 "+city;

p.style.cursor="pointer";

p.onclick=function(){

loadWeather(city);

};

history.appendChild(p);

});

document.getElementById("locationCount").innerHTML=
searchedCities.length;

}

// ===================================
// SEARCH BUTTON
// ===================================

document.getElementById("searchBtn")

.addEventListener("click",()=>{

const city=document.getElementById("cityInput").value.trim();

if(city===""){

alert("Please Enter City Name");

return;

}

loadWeather(city);

});

// ===================================
// ENTER KEY SUPPORT
// ===================================

document.getElementById("cityInput")

.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

document.getElementById("searchBtn").click();

}

});

// ===================================
// DEFAULT LOAD
// ===================================

loadWeather("Hyderabad");

loadEarthquakes();
// ===================================
// AI CHATBOT
// ===================================

const chatToggle=document.getElementById("chatToggle");
const chatBox=document.getElementById("chatBox");
const closeChat=document.getElementById("closeChat");
const sendBtn=document.getElementById("sendBtn");
const userMessage=document.getElementById("userMessage");
const chatMessages=document.getElementById("chatMessages");

// Open Chat
chatToggle.onclick=function(){

chatBox.style.display="flex";

}

// Close Chat
closeChat.onclick=function(){

chatBox.style.display="none";

}

// Send Button
sendBtn.onclick=sendMessage;

// Enter Key
userMessage.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});

function sendMessage(){

const msg=userMessage.value.trim();

if(msg==="") return;

const userDiv=document.createElement("div");

userDiv.className="user";

userDiv.innerHTML=msg;

chatMessages.appendChild(userDiv);

userMessage.value="";

const botDiv=document.createElement("div");

botDiv.className="bot";

let reply="";

const text=msg.toLowerCase();

if(text.includes("earthquake")){

reply="🌍 During an earthquake: Drop, Cover, and Hold On. Stay away from windows and move to an open area after the shaking stops.";

}

else if(text.includes("flood")){

reply="🌊 During floods: Move to higher ground immediately. Avoid walking or driving through flood water.";

}

else if(text.includes("cyclone")){

reply="🌀 During a cyclone: Stay indoors, secure doors and windows, and follow official weather alerts.";

}

else if(text.includes("weather")){

reply="🌦 Check the Weather card above for the latest conditions and forecast for your selected city.";

}

else if(text.includes("fire")){

reply="🔥 In case of fire: Evacuate immediately, call emergency services, and do not use elevators.";

}

else if(text.includes("emergency")){

reply="🆘 Keep an emergency kit ready with water, food, flashlight, medicines, power bank, and important documents.";

}

else if(text.includes("hello") || text.includes("hi")){

reply="👋 Hello! Ask me anything about earthquakes, floods, cyclones, weather, or emergency safety.";

}

else{

reply="🤖 Sorry, I don't know that yet. Try asking about weather, earthquake, flood, cyclone, fire, or emergency tips.";

}

setTimeout(()=>{

botDiv.innerHTML=reply;

chatMessages.appendChild(botDiv);

chatMessages.scrollTop=chatMessages.scrollHeight;

},500);

}