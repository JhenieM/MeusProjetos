/* TexteArea responsivo */
var textArea = document.getElementById('text-area');
//var textDiv = document.getElementById('tradutorBox');

const tamanhoTraduzir = () => {
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
};
// const tamanhoTradutor = () => {
//     textDiv.style.height = 'auto';
//     textDiv.style.height = `${textDiv.scrollHeight}px`;
// };

textArea.addEventListener('input', tamanhoTraduzir);
tamanhoTraduzir();

/* Função para traduzir o texto */
async function submit() {
    const text = textArea.value;
    if (!text.trim()) return; // Não traduzir se o textarea estiver vazio

    try {
        const response = await fetch('https://libretranslate.com/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                source: 'en',
                target: 'pt',
                format: 'text'
            }),
        });

        const result = await response.json();
        const translatedText = result.translatedText;

        // Atualiza o texto traduzido no elemento com id "tradutorBox"
        document.getElementById('tradutorBox').textContent = translatedText;
    } catch (error) {
        console.error('Erro na tradução:', error);
    }
}


// document.addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//     submit();
//   }
// });