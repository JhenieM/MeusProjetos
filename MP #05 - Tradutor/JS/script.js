//* TexteArea responsivo */
var textArea = document.getElementById('text-area');
var textDiv = document.getElementById('tradutorBox');

const tamanhoTraduzir = () => {
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
};
const tamanhoTradutor = () => {
    textDiv.style.height = 'auto';
    textDiv.style.height = `${textDiv.scrollHeight}px`;
};

textArea.addEventListener('input', tamanhoTraduzir);
tamanhoTraduzir();

textDiv.addEventListener('input', tamanhoTradutor);
tamanhoTradutor();

/* Passar texto para outro bloco */
 function updateText() {
    return update = textDiv.textContent = textArea.value;
}

document.getElementById('text-area').addEventListener('input', updateText);

/* Tradutor em tempo real */

const url = "https://libretranslate.com/translate";

const data = {
    q: updateText(),
    source: "pt",
    target: "en"
};


fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => {
    console.log(response);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})

.then(data => console.log(data.translatedText))
.catch(error => console.error('Error:', error));


