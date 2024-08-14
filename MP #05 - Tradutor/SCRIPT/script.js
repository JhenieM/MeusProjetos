 //* TexteArea responsivo */

const textarea = document.getElementById('text');

        const adjustHeight = () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        };

        textarea.addEventListener('input', adjustHeight);

        adjustHeight();

/* Tradutor em tempo real */

//const fetch = require('./node_modules');

const url = "https://libretranslate.com/translate";

const data = {
    q: "Olá, como você está?",
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


