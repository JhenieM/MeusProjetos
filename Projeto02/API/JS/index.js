const api_url = "http:api.openweathermap.org/data/2.5/weather";
const api_key = "fe5fcd19310a3bf389ede816e310cbeb";

// http:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function submit() {
    var city = document.getElementById("city").value;
    var content = document.getElementById("weather");
    var srcImg = "IMG/sol_nuvens.png";

    const params = new URLSearchParams({
        q: city,
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
            content.innerHTML = `Temperatura: ${Math.round(data.main.temp)}°C<br/>Umidade: ${data.main.humidity}%`;
            document.getElementById("imageoption").src = srcImg;
        } else {
            content.innerHTML = 'Dados não disponíveis';
            console.error('Estrutura dos dados inesperada:', data);
        }
    })
    .catch(error => {
        content.innerHTML = `Erro: ${error.message}`;
    });

}