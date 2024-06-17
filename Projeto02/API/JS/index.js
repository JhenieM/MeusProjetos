const api_url = "http:api.openweathermap.org/data/2.5/weather";
const api_key = "fe5fcd19310a3bf389ede816e310cbeb";

const errorBox = document.querySelector('.error');
const content = document.querySelector('.content');
const img_error = document.getElementById('img-error');
    
// ESTRUTURA DAS URLs
// http:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} - WEATHER
// http://openweathermap.org/img/wn/${icone}@2x.png - ICON

function submit() {
    const place = document.getElementById("place").value;

    const params = new URLSearchParams({
        q: place,
        appid: api_key,
        units: "metric"
    }).toString();

    // console.log (`${api_url}?${params}`);

    fetch(`${api_url}?${params}`)
    .then(response => {
        if (response.status === 404) {
            img_error.src = "./IMG/not-found.png";
            errorText.innerHTML = `Erro na Localização :/`;
            errorBox.style.display = 'block';
            content.style.display = 'none';
            throw new Error('404');
        }
        return response.json();
    })
    .then(data => {
        errorBox.style.display = 'none';
        content.style.display = '';
        document.getElementById('temp-img').style.fontSize = '80px';
        let icone = "";
        // console.log('Dados recebidos:', data);
        
            switch (data.weather[0].icon) {
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
            const windyIcon = document.getElementById('win-icon');
            const humIcon = document.getElementById('hum-icon');
            const temperature = document.getElementById('temp');           
            const humidity = document.getElementById('hum');
            const winer = document.getElementById('winer');

            weatherIcon.src = icone;
            weatherIcon.style.display = '';
            windyIcon.style.display = '';
            humIcon.style.display = '';

            city.innerHTML = `${data.name}`;
            temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
            humidity.innerText = `${data.main.humidity}%`;
            winer.innerText = `${Math.round(data.wind.speed)}km/h`;
    })
    .catch(error => {
        if (error.message !== '404') {
            img_error.src = "./IMG/error.png";
            img_error.style.width = "80%";
            img_error.style.marginBottom = "20px";
            errorText.innerHTML = `Ocorreu um erro :/`;
            errorBox.style.display = 'block';
            content.style.display = 'none';
        }
    });
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      submit();
    }
});