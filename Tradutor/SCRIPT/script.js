const selectTag = document.querySelectorAll('select');
const textoTraduzir = document.querySelector('.textFrom');
const traduzido = document.querySelector('.textTo');

selectTag.forEach((tag, id) => {
        for (const cod_pais in countries) {
                let selected = "";

                if (id == 0) {
                        if (cod_pais == "pt-BR") {
                                selected = "selected";
                        } else {
                                selected = "";
                        }
                } else {
                        if (cod_pais == "en-USA") {
                                selected = "selected";
                        } else {
                                selected = "";
                        }
                }

                let opcao = `<option ${selected} value="${cod_pais}">${countries[cod_pais]}</option>`;
                tag.insertAdjacentHTML("beforeend", opcao);
        }
});

function submit() {
        let text = textoTraduzir.value;
        let traduzirDe = selectTag[0].value;
        let traduzirPara = selectTag[1].value;
        const apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${traduzirDe}|${traduzirPara}`;
        // let urlUp = encodeURIComponent(apiURL);
        console.log(apiURL);

        fetch(apiURL)
        .then(response => 
                response.json())
        .then(data => {
                // console.log(data.matches[1].translation);
                //data.responseData.translatedText
                traduzido.innerHTML = data.responseData.translatedText;
        });
}

function audio() {
        if(traduzido.value != '') {
                let aud = new SpeechSynthesisUtterance(traduzido.value);
                window.speechSynthesis.speak(aud);
        }
}

function contagem() {
        let caracteres = textoTraduzir.value;
        document.querySelector('.contagem').innerText = `${caracteres.length}/600`;

        if(caracteres.length == 5){
                console.log("Exedeu!");
        }
      }