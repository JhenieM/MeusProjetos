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
        // console.log('Dados recebidos:', data);
        if (data.main) {
            // const icon_img = "";
            let icone = data.weather[0].icon;
            switch (icone) {
                case "01d":
                    icone = "./IMG/sol.png";
                    break;
                case "01n":
                    icone = "./IMG/lua.png";
                default:
                    break;
            }
            // const iconUrl = `http://openweathermap.org/img/wn/${icone}@2x.png`;
            const weatherIcon = document.getElementById('img');
            const temperature = document.getElementById('temp');           
            const humidity = document.getElementById('hum');
            const winer = document.getElementById('winer');

            weatherIcon.src = icone;
            weatherIcon.style.display = 'block';

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
        content.style.display = 'block';
    });

}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      submit();
    }
});