const API_KEY = "e83afa3ea3c601c3327d8580c798364f";

const city =
localStorage.getItem("lastCity") || "Hyderabad";

async function loadWeather(){

try{

const response = await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

);

const data = await response.json();

document.getElementById("temp").innerHTML =
Math.round(data.main.temp)+"°C";

document.getElementById("weather").innerHTML =
data.weather[0].main;

document.getElementById("humidity").innerHTML =
data.main.humidity+"%";

document.getElementById("wind").innerHTML =
data.wind.speed+" m/s";

document.getElementById("pressure").innerHTML =
data.main.pressure+" hPa";

document.getElementById("feelsLike").innerHTML =
Math.round(data.main.feels_like)+"°C";

}
catch(error){

alert("Unable to load weather data.");

console.log(error);

}

}

loadWeather();