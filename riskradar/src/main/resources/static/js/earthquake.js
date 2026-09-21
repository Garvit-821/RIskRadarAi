async function loadEarthquakes(){

const response=await fetch(

"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

);

const data=await response.json();

const table=document.getElementById("quakeTable");

data.features.slice(0,20).forEach(q=>{

table.innerHTML+=`

<tr>

<td>${q.properties.mag}</td>

<td>${q.properties.place}</td>

<td>${new Date(q.properties.time).toLocaleString()}</td>

</tr>

`;

});

}

loadEarthquakes();