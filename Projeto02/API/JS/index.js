const api_url = "http:api.openweathermap.org/data/2.5/weather";
const api_key = "fe5fcd19310a3bf389ede816e310cbeb";

// ESTRUTURA DAS URLs
// http:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} - WEATHER
// http://openweathermap.org/img/wn/${icone}@2x.png - ICON

function submit() {
    const place = document.getElementById("place").value;
    const content = document.getElementById("weather");

    const params = new URLSearchParams({
        q: place,
        appid: api_key,
        units: "metric"
    }).toString();

    console.log (`${api_url}?${params}`);

    fetch(`${api_url}?${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da API');
        }
        return response.json();
    })
    .then(data => {
        // console.log('Dados recebidos:', data);
        if (data.main) {
            const icone = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${icone}@2x.png`;
            const weatherIcon = document.getElementById('img');
            weatherIcon.src = iconUrl;
            weatherIcon.style.display = 'block';
            content.innerHTML = `Temperatura: ${Math.round(data.main.temp)}°C<br/>Umidade: ${data.main.humidity}%<br/>Vento: ${Math.round(data.wind.speed)}km/h`;
        } else {
            content.innerHTML = 'Dados não disponíveis';
            console.error('Estrutura dos dados inesperada:', data);
        }
    })
    .catch(error => {
        content.innerHTML = `Erro: ${error.message}`;
    });

}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      submit();
    }
});