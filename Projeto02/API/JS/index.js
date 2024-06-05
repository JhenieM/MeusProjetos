const api_url = "http:api.openweathermap.org/data/2.5/weather";
const api_key = "fe5fcd19310a3bf389ede816e310cbeb";

// http:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function submit() {
    var city = document.getElementById("city").value;


const params = new URLSearchParams({
    q: city,
    appid: api_key,
    units: "metric"
});

console.log (`${api_url}?${params}`);

fetch (`${api_url}?${params}`)
    .then (function (reponse) {
        
   })
    .then ()
}

