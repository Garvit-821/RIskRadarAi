const risk=
localStorage.getItem("riskScore") || "35";

const level=
localStorage.getItem("riskLevel") || "Low Risk";

document.getElementById("riskScore").innerHTML=risk;

document.getElementById("riskLevel").innerHTML=level;

let recommendation="";

if(level.includes("Low")){

recommendation="🟢 Conditions are stable. Continue monitoring weather updates.";

}

else if(level.includes("Moderate")){

recommendation="🟠 Be alert. Avoid unnecessary travel and follow local advisories.";

}

else{

recommendation="🔴 High risk detected. Stay indoors, prepare an emergency kit, and follow official alerts.";

}

document.getElementById("recommendation").innerHTML=
recommendation;