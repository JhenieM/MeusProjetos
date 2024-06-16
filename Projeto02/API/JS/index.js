const api_url = "http:api.openweathermap.org/data/2.5/weather";
const api_key = "fe5fcd19310a3bf389ede816e310cbeb";

// ESTRUTURA DAS URLs
// http:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} - WEATHER
// http://openweathermap.org/img/wn/${icone}@2x.png - ICON

function submit() {
    const place = document.getElementById("place").value;
    const content = document.getElementById("weather-error");
    content.style.display = 'none';

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
        document.getElementById('temp-img').style.fontSize = '80px';
        // console.log('Dados recebidos:', data);
        if (data.main) {
            let icone = data.weather[0].icon;
            switch (icone) {
                case "01d":
                    icone = "./IMG/clear_day.svg";
                    break;
                case "01n":
                    icone = "./IMG/clear_night.svg";
                    break;
                case "02d":
                    icone = "./IMG/partly_cloudy_day.svg";
                    break;
                case "02n":
                    icone = "./IMG/partly_cloudy_night.svg";
                    break;
                case "03d":
                    icone = "./IMG/mostly_clear_day.svg";
                    break;
                case "03n":
                    icone = "./IMG/mostly_clear_night.svg";
                    break;
                case "04d":
                case "04n":
                    icone = "./IMG/cloudy.svg";
                    break;
                case "09d":
                case "09n":
                    icone = "./IMG/heavy_rain.svg";
                    break;
                case "10d":
                    icone = "./IMG/scattered_showers_day.svg";
                    break;
                case "10n":
                    icone = "./IMG/scattered_showers_night.svg";
                    break;
                case "11d":
                    icone = "./IMG/isolated_scattered_thunderstorms_day.svg";
                    break;
                case "11n":
                    icone = "./IMG/isolated_scattered_thunderstorms_night.svg";
                    break;
                case "13d":
                    icone = "./IMG/scattered_snow_showers_day.svg";
                case "13n":
                    icone = "./IMG/scattered_snow_showers_night.svg";
                    break;
                case "50d":
                case "50n":
                    icone = "./IMG/haze_fog_dust_smoke.svg";
                    break;
                default:
                    break;
            }
            // const iconUrl = `http://openweathermap.org/img/wn/${icone}@2x.png`;
            const weatherIcon = document.getElementById('img');
            const windyIcon = document.getElementById('img-win');
            const humIcon = document.getElementById('img-hum');
            const temperature = document.getElementById('temp');           
            const humidity = document.getElementById('hum');
            const winer = document.getElementById('winer');

            weatherIcon.src = icone;
            weatherIcon.style.display = 'block';
            windyIcon.style.display = 'block';
            humIcon.style.display = 'block';

            temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
            humidity.innerText = `Umidade: ${data.main.humidity}%`;
            winer.innerText = `Vento: ${Math.round(data.wind.speed)}km/h`;

        } else {
            const content = document.getElementById('content');
            content.innerHTML = 'Dados não disponíveis';
            console.error('Estrutura dos dados inesperada:', data);
        }
    })
    .catch(error => {
        document.getElementById('temp').textContent = 'Erro ao carregar temperatura.';
        document.getElementById('hum').textContent = 'Erro ao carregar umidade.';
        document.getElementById('winer').textContent = 'Erro ao carregar velocidade do vento.';
        console.error('Erro:', error);
        document.getElementById('temp-img').style.fontSize = '30px';
        content.style.display = 'block';
    });

}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      submit();
    }
});